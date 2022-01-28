import { OnInit, Directive } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { BaseResourceModel } from "../../models/base-resource.model";
import { BaseResourceService } from "../../services/base-resource.service";

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  
  resources: Array<T> = [];

  protected toastr: ToastrService;
  constructor(private resourceService: BaseResourceService<T>) { 
    
  }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    
    if (mustDelete){
      this.resourceService.delete(resource.id).subscribe(
        () => this.processarSucesso(resource),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

  processarSucesso(resource: T){
    this.resources = this.resources.filter(element => element != resource)
    this.toastr.success('Solicitação processada com sucesso!', 'Sucesso', this.configurarToast());
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

}
