import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  aboutText: string = `I am a passionate Full Stack Developer with extensive experience in building modern web applications. 
  With a strong foundation in both frontend and backend technologies, I specialize in creating scalable, 
  efficient, and user-friendly solutions. My approach combines technical expertise with creative problem-solving 
  to deliver exceptional digital experiences.`;

  experience: number = 5; // Years of experience
  completedProjects: number = 20;
  satisfiedClients: number = 15;
}