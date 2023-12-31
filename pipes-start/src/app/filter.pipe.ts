import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: string | any[], filterString: string, propName: string): unknown {
    if (value.length === 0) {
      return null;
    }
    const resultArray = []
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item)
      }
    }
    return resultArray
  }

}
