import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  title: string;
  icon: string;
  skills: Skill[];
}

interface Tool {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsetsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'WebDev',
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'Landing Page Building', level: 80 },
        { name: 'UX/UI Design', level: 70 },
        { name: 'Angular', level: 85 },
        { name: 'NestJS', level: 65 },
        { name: 'React', level: 75 }
      ]
    },
    {
      name: 'SysAdmin',
      title: 'System Administration',
      icon: '🖥️',
      skills: [
        { name: 'System Admin', level: 75 },
        { name: 'Website Hosting', level: 80 },
        { name: 'DNS Management', level: 70 },
        { name: 'Asset Management', level: 70 }
      ]
    },
    {
      name: 'CRMMarketing',
      title: 'CRM & Marketing',
      icon: '📈',
      skills: [
        { name: 'HubSpot Integration', level: 75 },
        { name: 'Workflow Automation Planning', level: 70 },
        { name: 'Meta and LinkedIn Admin', level: 65 },
        { name: 'Facebook and LinkedIn Ads', level: 65 }
      ]
    },
    {
      name: 'TechSupport',
      title: 'Technical Support',
      icon: '🔧',
      skills: [
        { name: 'Technical Support', level: 80 },
        { name: 'Troubleshooting', level: 85 },
        { name: 'IT Services', level: 75 }
      ]
    },
    {
      name: 'ProjectMgmt',
      title: 'Project Management',
      icon: '📋',
      skills: [
        { name: 'Project Planning', level: 75 },
        { name: 'Team Coordination', level: 75 },
        { name: 'Stakeholder Management', level: 75 }
      ]
    },
    {
      name: 'DataAnalytics',
      title: 'Data Analytics',
      icon: '📊',
      skills: [
        { name: 'Data Structure', level: 70 },
        { name: 'Data Reporting', level: 75 },
        { name: 'Performance Metrics Analysis', level: 70 }
      ]
    }
  ];

  tools: Tool[] = [
    { name: 'VS Code', icon: '�' },
    { name: 'Git', icon: '�' },
    { name: 'Docker', icon: '�' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Jira', icon: '📋' }
  ];
}