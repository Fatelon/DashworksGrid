import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTime'
})
export class AppTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? moment(value).format('DD.MM.YYYY') : '';
  }
}
