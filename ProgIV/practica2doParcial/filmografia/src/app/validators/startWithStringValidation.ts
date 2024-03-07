import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export function startWithStringValidation(control: AbstractControl) : ValidationErrors | null{
  if(!control.value.startsWith("h")){
    return null;
  }
  return {isInvalid: true}
}
