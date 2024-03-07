import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(yearOfBirth: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
  }

}
