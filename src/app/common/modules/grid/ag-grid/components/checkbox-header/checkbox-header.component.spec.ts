import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

import { AgGridCheckboxHeaderComponent } from './checkbox-header.component';

describe('AgGridCheckboxHeaderComponent', () => {
  let component: AgGridCheckboxHeaderComponent;
  let fixture: ComponentFixture<AgGridCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatCheckboxModule ],
      declarations: [ AgGridCheckboxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
