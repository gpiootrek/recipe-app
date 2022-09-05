import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, len: number): string {
    if (value.length < len) return value;
    return value.slice(0, len - 4).trim() + '...';
  }
}
