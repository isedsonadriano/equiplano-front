import { Component } from "@angular/core";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Cliente } from "../shared/cliente.model";
import { ClienteService } from "../shared/cliente.service";



@Component({
  selector: "cliente-list",
  templateUrl: "cliente-list.component.html"
})
export class ClienteListComponent extends BaseResourceListComponent<Cliente> { 

  constructor(private clienteService: ClienteService) { 
    super(clienteService);
  }
}
