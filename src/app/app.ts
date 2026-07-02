import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import * as https from 'node:https';

export interface PersonalProject {
  name: string;
  tools: string;
  description: string;
  link: string;
}
export interface WorkProject {
  name: string;
  tools: string;
  description: string;
}
export interface Experience {
  company: string;
  position: string;
  dates: string;
  description: string;
}
export interface Skill {
  skill: string;
  elaboration: string;
}

@Component({
  selector: 'app-root',
  imports: [TableModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  skills: Skill[] = []
  personalProjects: PersonalProject[] = [];
  workProjects: WorkProject[] = [];
  experience: Experience[] = [];

  ngOnInit() {
    this.skills = [
      {skill: 'Angular', elaboration: 'I like Angular. Fun fact, this website is built with Angular'},
      {skill: 'TypeScript', elaboration: 'I be typing that script'},
      {skill: 'Symfony', elaboration: 'Composing those Symfony\'s'},
      {skill: 'Git', elaboration: 'Gitting that git'},
    ]
    this.personalProjects = [
      {name: 'Electronic Medical Record System',
        tools: 'jQuery, DataTables, FastAPI, MariaDB, Uvicorn, Pycryptodome',
        description: 'This was a group project for CSCI 455 Database Management. The goal was to create an online medical ' +
          'record system that would allow users to store and retrieve medical records. The emphasis was on the database ' +
          'design and implementation.',
        link: 'https://github.com/willwhite675/CSCI-455-EMRS-Project'},
      {
        name: 'Opioid Disorder Management System',
        tools: 'Winforms',
        description: '',
        link: 'https://github.com/willwhite675/CSCI-463-ODMS-Project',
      }
    ]
    this.workProjects = [
      {name: 'UIT Service Project',
        tools: 'Angular, Symfony',
        description: 'Queue for the UIT service desk'
      },
      {name: 'Talk to the Hawk',
        tools: 'I have literally no idea',
        description: 'Talk to the Hawk is when I be talking to that hawk'
      },
      {name: 'Memorial Union Event Request Form',
        tools: 'Angular, Prime, MySQL',
        description: 'Updated the form with new requirements and features. Included form components and steps ' +
          'as well as more data validation and increased functionality.'
      },
    ]
    this.experience = [
      {company: 'University of North Dakota', position: 'Junior Software Engineer', dates: 'February 2025 - Present', description: 'Description'},
      {company: 'University of North Dakota', position: 'Computer Repair Technician', dates: 'September 2024 - February 2025', description: 'Description'},
      {company: 'Graco', position: 'Assembly Worker', dates: 'May 2024 - August 2024', description: 'Description'},
    ]
  }
}
