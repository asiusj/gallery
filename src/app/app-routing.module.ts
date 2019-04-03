import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobAppsComponent } from './components/mob-apps/mob-apps.component';
import { GuardService } from './services/guard.service';



const routes: Routes = [
  {path: '', redirectTo: 'services', pathMatch: 'full'},
  {path: 'services', component: ServicesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [GuardService]},
  {path: 'web-projects', component: WebProjectsComponent},
  {path: 'mob-apps', component: MobAppsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardService]
})
export class AppRoutingModule {

 }
