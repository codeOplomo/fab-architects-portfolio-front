import { Component } from '@angular/core';
import { ProjectGalleryComponent } from "./project-gallery/project-gallery.component";
import { SkillsListComponent } from "./skills-list/skills-list.component";
import { ContactInfoComponent } from "../../shared/components/contact-info/contact-info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectGalleryComponent, SkillsListComponent, ContactInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
