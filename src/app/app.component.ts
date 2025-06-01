import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss'],
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    SkillsetsComponent,
    ProjectsComponent
  ]
})
export class AppComponent {
  title = 'gl-portfolio';
}