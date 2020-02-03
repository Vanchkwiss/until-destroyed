import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntilDestroyedContentTestComponent } from './until-destroyed-content-test.component';

describe('UntilDestroyedContentTestComponent', () => {
  let component: UntilDestroyedContentTestComponent;
  let fixture: ComponentFixture<UntilDestroyedContentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntilDestroyedContentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntilDestroyedContentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
