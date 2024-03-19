// appointment-form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {


  formData = {
    customerName: '',
    service: '',
    appointmentDate: ''
  };

  submitForm() {
    // Implement form submission logic here
    console.log('Form submitted:', this.formData);
  }
}
