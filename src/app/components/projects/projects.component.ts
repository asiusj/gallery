import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  static MenuTitle = 'Проекты';
  header = 'Threefold dashboard';
  title: string;
  constructor() {
    this.title = ProjectsComponent.MenuTitle;
  }
  ngOnInit() {
  }

}
