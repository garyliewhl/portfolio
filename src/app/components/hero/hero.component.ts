import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent {
  name: string = 'Gary Liew';
  title: string = 'Full Stack Developer';
  tagline: string = 'Building modern web applications with passion and precision';
}