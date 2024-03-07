import {Stop} from "./Stop";

export class Trip {
    id: string = "";
    originId: string = "";
    destinationId: string = "";
    originName?: string;
    destinationName?: string;
    departureDate: Date | undefined = undefined;
    departureTime: string = "";
    price: number = 0;
    stops: Stop[] = [];
}