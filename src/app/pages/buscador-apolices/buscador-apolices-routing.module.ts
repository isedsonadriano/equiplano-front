import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorApoliceComponent } from './buscador-list/buscador-apolice.component';



const routes: Routes = [
  { path: '', component: BuscadorApoliceComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorApoliceRoutingModule { }
