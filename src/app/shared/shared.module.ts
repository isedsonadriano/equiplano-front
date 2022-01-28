import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { NotificationService } from './services/notification.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    SnackbarComponent
  ],
  exports: [
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    SnackbarComponent
  ],
  providers: [
    NotificationService
  ]
})
export class SharedModule {}
