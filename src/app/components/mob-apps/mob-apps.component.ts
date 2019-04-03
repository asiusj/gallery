import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-apps',
  templateUrl: './mob-apps.component.html',
  styleUrls: ['./mob-apps.component.scss']
})
export class MobAppsComponent implements OnInit {

  static MenuTitle = 'Мобильные приложения';
  title: string;
  constructor() {
    this.title = MobAppsComponent.MenuTitle;
  }

  ngOnInit() {
  }

}
