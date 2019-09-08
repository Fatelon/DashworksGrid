import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Record } from '../../../common/models/record';
import { AppGridModule } from '../../../common/modules/grid/grid.module';
import { AppTimePipe } from '../../../common/modules/time/pipes/time.pipe';
import { AppGridDataController } from '../_data-controller/data-controller';
import { AppGridToolbarComponent } from '../components/grid-toolbar/grid-toolbar.component';
import { AppGridPageComponent } from './grid.component';

@Component({
  template: `<app-grid-page></app-grid-page>`
})
export class AppGridTestComponent {
}

@Component({
  template: `<app-grid-page [selectionMode]="selectionMode"></app-grid-page>`
})
export class AppGridSelectionOffTestComponent {
  selectionMode: false;
}

describe('AppGridPageComponent', () => {

  describe('',() => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AppGridModule,
          FormsModule,
          MatCheckboxModule,
          MatSlideToggleModule,
          HttpClientTestingModule
        ],
        declarations: [
          AppGridPageComponent,
          AppGridToolbarComponent,
          AppGridTestComponent,
          AppGridSelectionOffTestComponent
        ],
        providers: [
          AppGridDataController,
          AppTimePipe
        ]
      })
        .compileComponents();
    }));

    describe('', () => {
      let component: AppGridPageComponent;
      let fixture: ComponentFixture<AppGridPageComponent>;

      beforeEach(async(() => {
        fixture = TestBed.createComponent(AppGridPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should not be null (mat-slide-toggle should be on page)', () => {
        fixture.detectChanges();
        const selectModeButtonNative = fixture.debugElement.nativeElement.querySelector('mat-slide-toggle');
        expect(selectModeButtonNative).not.toBeNull();
      });

      it('should check displayed row count in grid', fakeAsync(() => {
        component.youtubeData$ = of([new Record(), new Record(), new Record()]);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(component.gridOptions.api.getDisplayedRowCount())
          .toEqual(3, 'expected displayed row count is 3')
      }));
    });

    describe('default selection off component', () => {
      let fixture: ComponentFixture<AppGridSelectionOffTestComponent>;

      beforeEach(() => {
        fixture = TestBed.createComponent(AppGridSelectionOffTestComponent);
        fixture.detectChanges();
      });

      it('should check for the absence of the header checkbox element on the page', () => {
        fixture.detectChanges();
        const headerCheckBox = fixture.debugElement.query(By.css('#mat-checkbox-1'));
        expect(headerCheckBox).toBeNull();
      });
    });
  });

  // And so on .. There is no limit to perfection =)

});
