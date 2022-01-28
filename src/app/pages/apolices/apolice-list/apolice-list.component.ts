import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Apolice } from "../shared/apolice.model";
import { ApoliceService } from "../shared/apolice.service";



@Component({
  selector: "apolice-list",
  templateUrl: "apolice-list.component.html"
})
export class ApoliceListComponent extends BaseResourceListComponent<Apolice> { 

  constructor(private apoliceService: ApoliceService, private router: Router) { 
    super(apoliceService);
  }

  edit(id: number) {
    this.router.navigate(['apolices', id, 'edit']);
  }

}
