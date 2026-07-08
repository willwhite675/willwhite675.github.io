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
      {
        skill: 'Angular',
        elaboration: 'Angles'},
      {
        skill: 'TypeScript',
        elaboration: 'I be typing that script'},
      {
        skill: 'Symfony',
        elaboration: 'Composing those Symfony\'s'},
      {
        skill: 'Git',
        elaboration: 'Gitting that git'},
    ]
    this.personalProjects = [
      {
        name: 'Website',
        tools: 'Angular, PrimeNG, Github Pages',
        description: 'I decided it would be fun to make a personal website on Github Pages. Yes I did install Angular, ' +
          'yes I know it was overkill but I figured this was a good spot to mess around with it.',
        link: 'https://github.com/willwhite675/willwhite675.github.io'
      },
      {
        name: 'Electronic Medical Record System',
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
      {
        name: 'UIT Service Project',
        tools: 'Angular, PrimeNG, Symfony',
        description: 'Worked with the other student employees to create a queue system for the UIT service desk. The goal ' +
          'of this project was to create a workflow to optimize the tech support service desk by adding a kiosk where users ' +
          'can fill out a ticket, a TV that displays the current queue, and an online application for managing these tickets ' +
          'and the queue. We used Symfony for the backend and Angular with PrimeNG for the frontend.'
      },
      {
        name: 'Talk to the Hawk',
        tools: 'Typescript, Reverse Engineering,',
        description: 'This project was a proof of concept to show that the University of North Dakota\'s AI chatbot Talk ' +
          'To The Hawk could be functional on the mobile app. I set up TSConfig and converted the current Javascript into ' +
          'Typescript in order to make the code more readable and maintainable. I was able to completely redo the style and ' +
          'fix a few bugs that the chatbot had.'
      },
      {
        name: 'Memorial Union Event Request Form',
        tools: 'Angular, PrimeNG, MySQL',
        description: 'The purpose of this project was to rebuild the current event request form for the Memorial Union. ' +
          'I started from scratch and used the requirements document I was provided. I was able to implement the user\'s ' +
          'requests as well as use my user interface knowledge to create a more user-friendly form.'
      },
    ]
    this.experience = [
      {
        company: 'University of North Dakota',
        position: 'Junior Software Engineer',
        dates: 'February 2025 - Present',
        description: 'Description'
      },
      {
        company: 'University of North Dakota',
        position: 'Computer Repair Technician',
        dates: 'September 2024 - February 2025',
        description: 'Description'
      },
      {
        company: 'Graco',
        position: 'Assembly Worker',
        dates: 'May 2024 - August 2024',
        description: 'Worked on an assembly line making paint sprayers. I had to keep a high quality of work along with ' +
          'the speed requirement to make the quota.'
      },
    ]
  }
}
