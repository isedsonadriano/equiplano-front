import { OnInit, AfterContentChecked, Injector, Directive } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { BaseResourceModel } from "../../models/base-resource.model"
import { BaseResourceService } from "../../services/base-resource.service"

import { switchMap } from "rxjs/operators";

import { MASKS } from 'ng-brazil';
import { NotificationService } from '../../services/notification.service';
import { ToastrService } from 'ngx-toastr';


@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked{
  
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  public MASKS = MASKS;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected notification: NotificationService;
  protected toastr: ToastrService;
  

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) { 
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.toastr = this.injector.get(ToastrService);
    this.formBuilder = this.injector.get(FormBuilder);
    this.notification = this.injector.get(NotificationService);
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  protected configurarToast(){
    return {
        timeOut: 3000,
        positionClass:'toast-top-right',
        toastClass: 'toast-warning alert alert-success alert-with-icon ng-trigger ng-trigger-flyInOut',
        progressBar: true,
        closeButton:true
    };
}

protected configurarToastErro(){
    return {
        timeOut: 3000,
        positionClass:'toast-top-right',
        toastClass: 'toast-warning alert  alert-primary alert-with-icon ng-trigger ng-trigger-flyInOut',
        progressBar: true,
        closeButton:true
    };
}

  submitForm(){
    this.submittingForm = true;

    if(this.resourceForm.valid){
      
      if(this.currentAction == "new")
        this.createResource();
      else 
        this.updateResource();
    }else{
      this.submittingForm = false;
    }
   
  }


  protected setCurrentAction() {
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  protected loadResource() {
    if (this.currentAction == "edit") {
      
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get("id")))
      )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.resourceForm.patchValue(resource) 
        },
        (error) => this.toastr.error('Erro ao capturar informações do servidor!', 'Erro', this.configurarToastErro())
      )
    }
  }


  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else{
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string{
    return "Novo"
  }

  protected editionPageTitle(): string{
    return "Edição"
  }


  protected createResource(){
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.create(resource)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      )
  }


  protected updateResource(){
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(resource)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      )
  }

  
  protected actionsForSuccess(resource: T){
  
    this.toastr.success('Solicitação processada com sucesso!', 'Sucesso', this.configurarToast());
    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
      () => this.router.navigate([baseComponentPath])
    )
  }


  protected actionsForError(error){
    this.toastr.error('Ocorreu um erro ao processar a sua solicitação!', 'Erro', this.configurarToastErro());

    this.submittingForm = false;

    if(error.status === 422)
      this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
  }


  protected abstract buildResourceForm(): void;
}
