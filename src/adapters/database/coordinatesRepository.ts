import { Coordinates } from "../../interfaces/coordinates";

export class CoordinatesRepository {
  private coordinates: Coordinates[] = [];

  public saveCoordinates(coordinates: Coordinates): void {
    this.coordinates.push(coordinates);
  }

  
  public getCoordinates(): Coordinates[] {
    return this.coordinates;
  }
}
