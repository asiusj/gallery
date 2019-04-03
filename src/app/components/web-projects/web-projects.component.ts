import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {

  static MenuTitle = 'Web-проекты';
  title: string;
  constructor() {
    this.title = WebProjectsComponent.MenuTitle;
  }

  ngOnInit() {
  }

}
