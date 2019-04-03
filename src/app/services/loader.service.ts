import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public switch = new Subject();
  constructor() { }

  switchOn() {
    this.switch.next(true);
  }

  switchOff() {
    this.switch.next(false);
  }
}
