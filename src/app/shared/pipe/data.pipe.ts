import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'data'
})
export class DataFormatPipe implements PipeTransform {
    transform(value: string): any {
        return 'abc';
      }
}