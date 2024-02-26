import { Coordinates } from "../../interfaces/coordinates";

export class CoordinatesRepository {
  private coordinates: Coordinates[] = [];

  public saveCoordinates(coordinates: Coordinates): void {
    this.coordinates.push(coordinates);
  }

  
  public getCoordinates(): Coordinates[] {
    return this.coordinates;
  }

  public getCoordinatesBySid(sid: number): Coordinates | null {
    const foundCoordinates = this.coordinates.find(coord => coord.sid === sid);
    return foundCoordinates ? foundCoordinates : null;
  }
}
