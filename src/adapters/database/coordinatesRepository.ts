import { Coordinates } from "../../interfaces/coordinates";
import CoordinateModel, { CoordinateDocument } from "../../core/domain/entities/CoordinateModel";


export class CoordinatesRepository {
  public async saveCoordinates(coordinates: Coordinates): Promise<void> {
    try {
      // Crea una instancia del modelo de coordenadas de Mongoose y guárdala en la base de datos
      const coordinate = new CoordinateModel(coordinates);
      await coordinate.save();
    } catch (error) {
      throw new Error('Error al guardar las coordenadas en la base de datos');
    }
  }

  public async getCoordinates(): Promise<Coordinates[]> {
    try {
      // Busca todas las coordenadas en la base de datos y devuelve el resultado
      const coordinates = await CoordinateModel.find();
      return coordinates;
    } catch (error) {
      throw new Error('Error al obtener las coordenadas de la base de datos');
    }
  }

  public async getCoordinatesBySid(sid: number): Promise<Coordinates | null> {
    try {
      // Busca las coordenadas por su identificador (sid) en la base de datos
      const coordinate = await CoordinateModel.findOne({ sid });
      return coordinate;
    } catch (error) {
      throw new Error('Error al obtener las coordenadas de la base de datos');
    }
  }

  public async deleteCoordinatesBySid(sid: number): Promise<void> {
    try {
      const result = await CoordinateModel.deleteOne({ sid });
      if (result.deletedCount === 0) {
        throw new Error('Las coordenadas no fueron encontradas para eliminar');
      }
      return;
    } catch (error) {
      throw new Error(`Error al eliminar las coordenadas por SID: ${error.message}`);
    }
  }
  
  
  
}
