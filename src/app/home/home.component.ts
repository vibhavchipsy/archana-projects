import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { OurValuesComponent } from '../our-values/our-values.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, OurValuesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
