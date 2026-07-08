import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';

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
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  skills: Skill[] = []
  personalProjects: PersonalProject[] = [];
  workProjects: WorkProject[] = [];
  experience: Experience[] = [];

  ngOnInit() {
    this.skills = [
      {skill: 'Angular', elaboration: 'Angles'},
      {skill: 'TypeScript', elaboration: 'I be typing that script'},
      {skill: 'Symfony', elaboration: 'Composing those Symfony\'s'},
      {skill: 'Git', elaboration: 'Gitting that git'},
    ]
    this.personalProjects = [
      {name: 'Electronic Medical Record System',
        tools: 'jQuery, DataTables, FastAPI, MariaDB, Uvicorn, Pycryptodome, Github',
        description: 'This was a group project for CSCI 455 Database Management. The goal was to create an online medical ' +
          'record system that would allow users to store and retrieve medical records. The emphasis was on the database ' +
          'design and implementation. This project turned out better than expected and had working password encryption ' +
          'and endpoint authentication.',
        link: 'https://github.com/willwhite675/CSCI-455-EMRS-Project'},
      {
        name: 'Opioid Disorder Management System',
        tools: 'Winforms, Github',
        description: 'This was a group project for CSCI 463: Software Engineering. The goal of this project was to create ' +
          'a medical system that allowed doctors and nurses to track the dosages of medication given to a patient. It would ' +
          'also prevent overdoses from being prescribed and would alert admins to any unusual activity related to the inventory' +
          ' of the medications.',
        link: 'https://github.com/willwhite675/CSCI-463-ODMS-Project',
      },
      {
        name: 'Mulch Start',
        tools: 'Winforms, Github',
        description: 'This was a group project for CSCI 363: User Interface Design. The goal of this project was to create ' +
          'a Mobile Car Starter app while putting a major focus on the interface design. This app was not supposed to be functional' +
          'but the front end works with the test inputs.',
        link: 'https://github.com/willwhite675/Mulch-Start'
      },
    ]
    this.workProjects = [
      {name: 'UIT Service Project',
        tools: 'Angular, PrimeNG, Symfony',
        description: 'Queue for the UIT service desk'
      },
      {name: 'Talk to the Hawk',
        tools: 'I have literally no idea',
        description: 'Talk to the Hawk is when I be talking to that hawk'
      },
      {name: 'Memorial Union Event Request Form',
        tools: 'Angular, PrimeNG, MySQL',
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
