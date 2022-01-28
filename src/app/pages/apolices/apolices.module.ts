import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

import { ApoliceFormComponent } from './apolice-form/apolice-form.component';
import { ApoliceListComponent } from './apolice-list/apolice-list.component';
import { ApolicesRoutingModule } from './apolices-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
  dropSpecialCharacters:false
};

@NgModule({
  declarations: [ApoliceListComponent, ApoliceFormComponent],
  imports: [
    CommonModule,
    ApolicesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgBrazil,
    TextMaskModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class ApolicesModule { }
