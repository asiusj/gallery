import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAppsComponent } from './mob-apps.component';

describe('MobAppsComponent', () => {
  let component: MobAppsComponent;
  let fixture: ComponentFixture<MobAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
