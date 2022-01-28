import { Component, Injector } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgBrazilValidators } from "ng-brazil";

import { BaseResourceFormComponent } from "src/app/shared/components/base-resource-form/base-resource-form.component";
import { Cliente } from "../shared/cliente.model";
import { ClienteService } from "../shared/cliente.service";


@Component({
  selector: "cliente-form",
  templateUrl: "cliente-form.component.html"
})
export class ClienteFormComponent extends BaseResourceFormComponent<Cliente>  {
 
  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: ['', ],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]]
    });

  }
  
  constructor(protected clienteService: ClienteService, protected injector: Injector) { 
    super(injector, new Cliente(), clienteService, Cliente.fromJson)
  }
}
