import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntilDestroyedTestComponent } from './until-destroyed-test.component';

describe('UntilDestroyedTestComponent', () => {
  let component: UntilDestroyedTestComponent;
  let fixture: ComponentFixture<UntilDestroyedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntilDestroyedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntilDestroyedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
