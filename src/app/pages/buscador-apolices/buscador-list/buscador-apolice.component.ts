import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseResourceListComponent } from "src/app/shared/components/base-resource-list/base-resource-list.component";
import { Apolice } from "../../apolices/shared/apolice.model";
import { BuscadorApolice } from "../../apolices/shared/buscador-apolice.model";
import { BuscadorApoliceService } from "../shared/buscador-apolice.service";


@Component({
  selector: "buscador-apolice",
  templateUrl: "buscador-apolice.component.html"
})
export class BuscadorApoliceComponent extends BaseResourceListComponent<Apolice> implements OnInit{ 

  queryString:string
  apolices: Array<BuscadorApolice> = [];

  constructor(private buscadorApoliceService: BuscadorApoliceService, private router: Router) { 
    super(buscadorApoliceService);
  }

  ngOnInit() {
    
  }

  edit(id: number) {
    this.router.navigate(['buscadorapolices', id, 'edit']);
  }


  search(){
      this.buscadorApoliceService.searchByNumeroApolice(this.queryString).subscribe(
      apolices => this.apolices = apolices,
      error => alert('Erro ao carregar a lista')
    )
   
  }
}
