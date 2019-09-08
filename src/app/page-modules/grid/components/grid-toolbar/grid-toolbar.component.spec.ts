import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggleModule } from '@angular/material';

import { AppGridToolbarComponent } from './grid-toolbar.component';

describe('AppGridToolbarComponent', () => {
  let component: AppGridToolbarComponent;
  let fixture: ComponentFixture<AppGridToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSlideToggleModule ],
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
