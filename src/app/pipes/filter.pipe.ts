import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], 
    text: any,
    column:string): any[] {

    if (text === '') {
      return array;
    }

    text = text.toString();

    return array.filter(item => {
      return item.bookingId.toString().includes(text)            
            || item.bookingPrice.toString().includes(text)
    });

  }

}
