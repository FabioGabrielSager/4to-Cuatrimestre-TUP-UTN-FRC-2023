import {HerbDetails} from "./HerbDetails";

export class Herb {
  id: number = 0;
  name: string = "";
  description: string | null = null;
  code: string = "";
  countryOriginName: string = "";
  stateOriginName: string = "";
  herbDetails: HerbDetails[] = [];
}
