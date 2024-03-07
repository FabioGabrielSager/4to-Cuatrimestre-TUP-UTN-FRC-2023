import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'holaMundo'
})
export class HolaMundoPipe implements PipeTransform {

  transform(name: string): string {
    return `Hola mundo ${name}`;
  }

}
