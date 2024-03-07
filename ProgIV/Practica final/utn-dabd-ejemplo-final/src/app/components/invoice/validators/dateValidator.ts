import {AbstractControl, ValidationErrors} from "@angular/forms";

    export function DateValidator(control: AbstractControl) : ValidationErrors | null {
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