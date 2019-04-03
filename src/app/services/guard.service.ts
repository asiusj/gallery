import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private router: Router

  ) { }

  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (confirm('Вы уверены, что хотите перейти?')) {
      return true;
    } else {
      this.router.navigate(['']);
    }


  }

}
