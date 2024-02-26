import { Coordinates } from "../../../interfaces/coordinates";

export class CoordinatesEntity implements Coordinates {
    constructor(
        public sid: number,
        public latitude: number,
        public longitude: number,
        public distance:number
    ) {}
}
