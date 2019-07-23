import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacyiveFormComponent } from './reacyive-form.component';

describe('ReacyiveFormComponent', () => {
  let component: ReacyiveFormComponent;
  let fixture: ComponentFixture<ReacyiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacyiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacyiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
