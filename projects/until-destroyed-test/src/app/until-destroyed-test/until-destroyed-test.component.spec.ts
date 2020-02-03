import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUnsubscribeTestComponent } from './until-destroyed-test.component';

describe('AutoUnsubscribeTestComponent', () => {
  let component: AutoUnsubscribeTestComponent;
  let fixture: ComponentFixture<AutoUnsubscribeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoUnsubscribeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUnsubscribeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
