import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './appointment-form.component';



@NgModule({
  declarations: [AppointmentFormComponent],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class AppModule { }
