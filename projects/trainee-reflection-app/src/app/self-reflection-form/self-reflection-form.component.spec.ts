import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReflectionFormComponent } from './self-reflection-form.component';

describe('SelfReflectionFormComponent', () => {
  let component: SelfReflectionFormComponent;
  let fixture: ComponentFixture<SelfReflectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfReflectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfReflectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
