import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if (value.length >= 10) {
      return value.substring(0, 10) + "...";
    }
    return null
  }

}
