
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  standalone: false,
  name: 'replace'

})

export class ReplacePipe implements PipeTransform {

  transform(value: string, searchValue: string, replaceValue: string): string {

    return value.replace(new RegExp(searchValue, 'g'), replaceValue);

  }

}
