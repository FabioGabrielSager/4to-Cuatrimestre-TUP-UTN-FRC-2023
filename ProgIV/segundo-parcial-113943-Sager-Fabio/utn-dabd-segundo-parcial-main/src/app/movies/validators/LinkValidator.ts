import {AbstractControl, ValidationErrors} from "@angular/forms";

export function LinkValidator(control: AbstractControl) : ValidationErrors | null {
    if(control.value.toString().toUpperCase() != control.value.toString() ||
        control.value.toString().indexOf(" ") != -1){
        return {isInvalid: true}
    }

    return null;
}