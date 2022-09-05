import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterId: number, propName: string) {
    if (!value) return value;
    return value.filter((item: any) => item[propName] === filterId);
  }
}
