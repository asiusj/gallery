import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobAppsComponent } from './components/mob-apps/mob-apps.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './services/gallery.service';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule,
  MatListModule, MatIconModule, MatSidenavModule, MatDialogModule, MatProgressSpinnerModule, MatSpinner} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ModalComponent } from './components/gallery/modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoaderComponent } from './components/gallery/loader/loader.component';
import { NgIfOnceDirective } from './directives/ng-if-once.directive';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    GalleryComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobAppsComponent,
    MenuComponent,
    ModalComponent,
    LoaderComponent,
    NgIfOnceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    OverlayModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent,
    MatSpinner
  ]
})
export class AppModule { }
