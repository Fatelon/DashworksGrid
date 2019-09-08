import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridToolbarComponent } from './grid-toolbar.component';

describe('AppGridToolbarComponent', () => {
  let component: AppGridToolbarComponent;
  let fixture: ComponentFixture<AppGridToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGridToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
