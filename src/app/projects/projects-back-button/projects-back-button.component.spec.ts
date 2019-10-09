import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBackButtonComponent } from './projects-back-button.component';

describe('ProjectsBackButtonComponent', () => {
  let component: ProjectsBackButtonComponent;
  let fixture: ComponentFixture<ProjectsBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
