import {AbstractControl, ValidationErrors} from "@angular/forms";

export function isANumberValidator(control: AbstractControl): ValidationErrors | null {
    if(Number(control.value)){
        return null;
    }
    return { isNotDecimal: true }
}