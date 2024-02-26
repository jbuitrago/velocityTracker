import { Request, Response } from "express";
import { CoordinatesService } from "../../core/services/coordinatesService";
import { Coordinates } from "../../interfaces/coordinates";

export class CoordinatesController {
  constructor(private coordinatesService: CoordinatesService) {}

  public async handlePostCoordinates(req: Request, res: Response): Promise<void> {
    const { sid, latitude, longitude, distance } = req.body;
    try {
      // Creamos un objeto de tipo Coordinates con los datos recibidos
      const coordinates: Coordinates = {
        sid, latitude, longitude,
        distance
      };
      // Llamamos al método del servicio para guardar las coordenadas
      await this.coordinatesService.saveCoordinates(coordinates);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async handleGetCoordinates(req: Request, res: Response): Promise<void> {
    try {
      // Llamamos al método del servicio para obtener todas las coordenadas
      const coordinates = await this.coordinatesService.getCoordinates();
      res.json(coordinates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async handleGetCoordinatesBySid(req: Request, res: Response): Promise<void> {
    const { sid } = req.params;
    try {
      // Llamamos al método del servicio para obtener las coordenadas por su SID
      const coordinate = await this.coordinatesService.getCoordinatesBySid(Number(sid));

      if (coordinate) {
        res.json(coordinate);
      } else {
        res.status(404).json({ error: 'Coordinates not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async handleDeleteCoordinatesBySid(req: Request, res: Response): Promise<void> {
    const { sid } = req.params;
    try {
      await this.coordinatesService.deleteCoordinatesBySid(Number(sid));
      res.sendStatus(204); // No Content
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
