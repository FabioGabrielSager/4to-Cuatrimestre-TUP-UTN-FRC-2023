import { Pipe, PipeTransform } from '@angular/core';
import {HerbDetails} from "../models/HerbDetails";

@Pipe({
  name: 'herbDetailPipe'
})
export class HerbDetailPipe implements PipeTransform {

  transform(value: HerbDetails): string {
    return value.herbTypeName + " - " + value.price;
  }

}
