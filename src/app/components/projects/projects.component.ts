import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  visitLink?: string;
  githubUrl?: string;
  figmaUrl?: string;
  adobeXdUrl?: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'MoHE National Career Fair',
      description: 'Official website for Ministry of Higher Education National Career Fair event.',
      technologies: ['Web Development', 'Event Management'],
      visitLink: 'https://www.mohenationalcareerfair.com/',
      imageUrl: 'assets/images/mohe-career-fair.jpg',
      adobeXdUrl: undefined
    },
    {
      name: 'PudoParcel Website',
      description: 'Website prototype for a parcel delivery service with locker pickup points',
      technologies: ['Adobe XD', 'Web UI/UX', 'User Journey Mapping', 'Service Design'],
      imageUrl: 'assets/images/pudoparcel-website-mockup.jpg',
      adobeXdUrl: 'https://xd.adobe.com/view/a5dad97b-bb4c-445c-9332-016fdec03124-f089/',
      visitLink: undefined
    },
    {
      name: 'PudoParcel Delivery App',
      description: 'Mobile app prototype for a parcel delivery service with locker pickup points',
      technologies: ['Adobe XD', 'Mobile UI/UX', 'User Journey Mapping', 'Service Design'],
      imageUrl: 'assets/images/pudoparcel-mockup.jpg',
      adobeXdUrl: 'https://xd.adobe.com/view/dc1b9d19-62d4-402c-b489-add232cd9cb7-8948/?fullscreen'
    },
    {
      name: 'Car Infotainment Prototype',
      description: 'Interactive prototype for a modern car infotainment system with intuitive HCI design',
      technologies: ['Figma Prototype', 'HCI Design', 'User Flow', 'Interactive Components'],
      imageUrl: 'assets/images/car-infotainment.jpg',
      figmaUrl: 'https://www.figma.com/proto/porFG1AEvuKRFgapFAw3Av/HCI-Car-Infotainment?node-id=58-89&scaling=contain&page-id=0%3A1&starting-point-node-id=58%3A89&show-proto-sidebar=1'
    },
    {
      name: 'Gameshop Website Redesign',
      description: 'Complete redesign of an e-commerce platform for video games with improved UI/UX and performance optimizations',
      technologies: ['Figma Prototype', 'UI/UX Design', 'Wireframing', 'Interactive Prototyping'],
      imageUrl: 'assets/images/gameshop-redesign.jpg',
      figmaUrl: 'https://www.figma.com/proto/imszm86BleoeqrMqBgCqBS/GH-Project?node-id=25-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=25%3A2'
    },
    {
      name: 'Recy2U - Mobile App',
      description: 'Mobile app prototype for a recycling rewards system',
      technologies: ['Figma', 'Mobile UI/UX', 'User Journey', 'Wireframing'],
      imageUrl: 'assets/images/recy2u-mockup.jpg',
      figmaUrl: 'https://www.figma.com/proto/lpgLg24jFqFOAMo75BHOLh/UIUX-GROUP-ASSIGNMENT-RECY2U?node-id=100-1248&scaling=scale-down&page-id=15%3A2&starting-point-node-id=181%3A0'
    }
  ];

  isMobile = false;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkIfMobile();
      window.addEventListener('resize', () => this.checkIfMobile());
    }
  }

  private checkIfMobile() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 768;
    }
  }
}