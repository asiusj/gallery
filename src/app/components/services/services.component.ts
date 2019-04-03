import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  static MenuTitle = 'Сервисы';
  title: string;


  constructor() {
    this.title = ServicesComponent.MenuTitle;
  }

  ngOnInit() {

  }



}
