import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scroll = new Subject();
  constructor() {
    this.bind_wheel();
    this.bind_scroll();

  }

  bind_wheel() {
    window.addEventListener('mousewheel', this.scrolled.bind(this), true);
  }

  bind_scroll() {
    window.addEventListener('scroll', this.scrolled.bind(this), true);
  }

  scrolled(event: any) {
    const st = event.target;
    this.scroll.next(st);
  }

}
