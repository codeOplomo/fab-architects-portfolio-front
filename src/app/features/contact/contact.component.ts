import { Component } from '@angular/core';
import { MapComponent } from "./map/map.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactInfoComponent } from "../../shared/components/contact-info/contact-info.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
