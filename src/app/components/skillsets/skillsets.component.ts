import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
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
        { name: 'UX/UI Design' },
        { name: 'Angular' },
        { name: 'NestJS' },
        { name: 'React' }
      ]
    },
    {
      name: 'SysAdmin',
      title: 'System Administration',
      icon: '🖥️',
      skills: [
        { name: 'Google Workspace Admin' },
        { name: 'Website Hosting' },
        { name: 'DNS Management' },
        { name: 'Asset Management' }
      ]
    },
    {
      name: 'CRMMarketing',
      title: 'CRM & Marketing',
      icon: '📈',
      skills: [
        { name: 'HubSpot Integration' },
        { name: 'Workflow Automation Planning' },
        { name: 'Meta and LinkedIn Admin' },
        { name: 'Facebook and LinkedIn Ads' }
      ]
    },
    {
      name: 'TechSupport',
      title: 'Technical Support',
      icon: '🔧',
      skills: [
        { name: 'Technical Support' },
        { name: 'IT Troubleshooting'},
        { name: 'Innovative Solutions' }
      ]
    },
    {
      name: 'ProjectMgmt',
      title: 'Project Management',
      icon: '📋',
      skills: [
        { name: 'Project Planning' },
        { name: 'Team Coordination' },
        { name: 'Stakeholder Management' }
      ]
    },
    {
      name: 'DataAnalytics',
      title: 'Data Analytics',
      icon: '📊',
      skills: [
        { name: 'Data Structure' },
        { name: 'Data Reporting' },
        { name: 'Performance Metrics Analysis' }
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