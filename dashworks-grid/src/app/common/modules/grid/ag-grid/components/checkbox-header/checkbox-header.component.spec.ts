import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCheckboxHeaderComponent } from './checkbox-header.component';

describe('AgGridCheckboxHeaderComponent', () => {
  let component: AgGridCheckboxHeaderComponent;
  let fixture: ComponentFixture<AgGridCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
