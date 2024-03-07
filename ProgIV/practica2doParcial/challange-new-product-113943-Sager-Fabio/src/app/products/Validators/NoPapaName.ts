import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

export function NoPapaNameValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value == "Papa"){
        return {noPapa: true}
    }
    return null;
}
