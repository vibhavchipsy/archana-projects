import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { OurValuesComponent } from '../our-values/our-values.component';
import { ProjectsComponent } from '../projects/projects.component';
import { HomepageBannerComponent } from '../homepage-banner/homepage-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    OurValuesComponent,
    ProjectsComponent,
    HomepageBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
