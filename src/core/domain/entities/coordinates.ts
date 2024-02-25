import { Coordinates } from "../../../interfaces/coordinates";

  
export class CoordinatesEntity implements Coordinates {
    constructor(public latitude: number, public longitude: number) {}
  }
  