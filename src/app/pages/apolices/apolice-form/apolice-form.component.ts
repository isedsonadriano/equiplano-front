import { Component, Injector } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgBrazilValidators } from "ng-brazil";
import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form.component";
import { Apolice } from "../shared/apolice.model";
import { ApoliceService } from "../shared/apolice.service";


@Component({
  selector: "apolice-form",
  templateUrl: "apolice-form.component.html"
})
export class ApoliceFormComponent extends BaseResourceFormComponent<Apolice>  {
  
  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [],
      inicioVigencia: ['', [Validators.required]],
      fimVigencia: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }
  
  constructor(protected apoliceService: ApoliceService, protected injector: Injector) { 
    super(injector, new Apolice(), apoliceService, Apolice.fromJson)
  }

}
