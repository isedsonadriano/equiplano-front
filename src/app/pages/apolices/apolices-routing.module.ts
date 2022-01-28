import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceFormComponent } from './apolice-form/apolice-form.component';
import { ApoliceListComponent } from './apolice-list/apolice-list.component';


const routes: Routes = [
  { path: '', component: ApoliceListComponent },
  { path: 'new', component: ApoliceFormComponent },
  { path: ':id/edit', component: ApoliceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApolicesRoutingModule { }
