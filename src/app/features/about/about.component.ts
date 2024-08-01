import { Component } from '@angular/core';
import { RecognitionsComponent } from "./recognitions/recognitions.component";
import { AwardsComponent } from "./awards/awards.component";
import { ServicesComponent } from "./services/services.component";
import { CollaboratorsComponent } from "./collaborators/collaborators.component";
import { TeamMembersComponent } from "./team-members/team-members.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RecognitionsComponent, AwardsComponent, ServicesComponent, CollaboratorsComponent, TeamMembersComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
