import { Coordinates } from "../../interfaces/coordinates";
import { CoordinatesRepository } from "../../adapters/database/coordinatesRepository";

export class CoordinatesService {
  constructor(private coordinatesRepository: CoordinatesRepository) {}

  public saveCoordinates(coordinates: Coordinates): void {
    this.coordinatesRepository.saveCoordinates(coordinates);
  }

  public getCoordinates(): Coordinates[] {
    return this.coordinatesRepository.getCoordinates();
  }

  public getCoordinatesBySid(sid: number): Coordinates | null {
    return this.coordinatesRepository.getCoordinatesBySid(sid);
  }
}
