import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { ServicesComponent } from '../services/services.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ProjectsComponent } from '../projects/projects.component';
import { WebProjectsComponent } from '../web-projects/web-projects.component';
import { MobAppsComponent } from '../mob-apps/mob-apps.component';
import { MatSidenav } from '@angular/material';
import { LoaderService } from 'src/app/services/loader.service';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[];

  @Input()
  showLoader = false;

  @ViewChild('snav') snav: MatSidenav;

  constructor(
    public loaderService: LoaderService
  ) {
    this.menuItems = [
      { title: ServicesComponent.MenuTitle, url: '/services' },
      { title: GalleryComponent.MenuTitle, url: '/gallery' },
      { title: ProjectsComponent.MenuTitle, url: '/projects' },
      { title: WebProjectsComponent.MenuTitle, url: '/web-projects' },
      { title: MobAppsComponent.MenuTitle, url: '/mob-apps' }
    ];

  }


  ngOnInit() {

  }

  close() {
    this.snav.close();
  }


}
