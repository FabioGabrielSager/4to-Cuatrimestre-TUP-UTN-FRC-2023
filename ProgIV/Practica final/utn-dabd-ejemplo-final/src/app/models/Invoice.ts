import {Detail} from "./Detail";
import {Type} from "./Type";

export class Invoice {
    id: string = "";
    createdDate: Date | undefined = undefined;
    clientName: string = "";
    tpe: Type | undefined = undefined;
    details: Detail[] = [];
}