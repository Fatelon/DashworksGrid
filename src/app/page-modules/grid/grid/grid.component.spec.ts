import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridPageComponent } from './grid.component';

describe('AppGridPageComponent', () => {
  let component: AppGridPageComponent;
  let fixture: ComponentFixture<AppGridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
