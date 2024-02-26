import { Coordinates } from "../../interfaces/coordinates";
import { CoordinatesRepository } from "../../adapters/database/coordinatesRepository";

export class CoordinatesService {
  constructor(private coordinatesRepository: CoordinatesRepository) {}

  public async saveCoordinates(coordinates: Coordinates): Promise<void> {
    try {
      await this.coordinatesRepository.saveCoordinates(coordinates);
    } catch (error) {
      throw new Error('Error al guardar las coordenadas');
    }
  }

  public async getCoordinates(): Promise<Coordinates[]> {
    try {
      return await this.coordinatesRepository.getCoordinates();
    } catch (error) {
      throw new Error('Error al obtener las coordenadas');
    }
  }

  public async getCoordinatesBySid(sid: number): Promise<Coordinates | null> {
    try {
      return await this.coordinatesRepository.getCoordinatesBySid(sid);
    } catch (error) {
      throw new Error('Error al obtener las coordenadas por SID');
    }
  }

  public async deleteCoordinatesBySid(sid: number): Promise<void> {
    try {
      await this.coordinatesRepository.deleteCoordinatesBySid(sid);
    } catch (error) {
      throw new Error('Error al eliminar las coordenadas');
    }
  }

  
}
