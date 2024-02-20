import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  viewProviders: [Employee]
})
export class ContactFormComponent {
}
