import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { RouterModule} from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';

import { SharedModule } from 'src/app/shared/shared.module';
import { BuscadorApoliceRoutingModule } from './buscador-apolices-routing.module';
import { BuscadorApoliceComponent } from './buscador-list/buscador-apolice.component';


@NgModule({
  declarations: [BuscadorApoliceComponent],
  imports: [
    CommonModule,
    BuscadorApoliceRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgBrazil,
    TextMaskModule
  ]
})
export class BuscadorApoliceModule { }
