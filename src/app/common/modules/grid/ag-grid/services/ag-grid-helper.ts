import { Injectable, TemplateRef } from '@angular/core';
import { AgGridTemplateRendererComponent } from '../components/template-renderer/template-renderer.component';

@Injectable({
  providedIn: 'root'
})
export class AgGridHelper {

  constructor() {}

  renderWithTemplate(templateRef: TemplateRef<any>, params?: any) {
    return {
      cellRendererFramework: AgGridTemplateRendererComponent,
      cellRendererParams: {
        templateRef,
        templateParams: params || {}
      }
    }
  }
}
