import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[efDateValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }
  ]
})
export class DateValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const controlDate = new Date(control.value);
    controlDate.setDate(controlDate.getDate() + 1);

    currentDate.setHours(0, 0, 0, 0);
    controlDate.setHours(0, 0, 0, 0);

    if(controlDate.getTime() == currentDate.getTime()) {
      return {isInvalid: true}
    }

    return null;
  }

}
