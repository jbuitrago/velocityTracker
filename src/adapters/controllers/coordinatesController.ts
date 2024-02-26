import express, { Request, Response } from "express";
import { CoordinatesService } from "../../core/services/coordinatesService";
import CoordinateModel, { CoordinateDocument } from "../../core/domain/entities/CoordinateModel";

export class CoordinatesController {
  constructor(private coordinatesService: CoordinatesService) {}

  public async handlePostCoordinates(req: Request, res: Response): Promise<void> {
    const { sid, latitude, longitude } = req.body; // Agrega "sid" al destructuring
    try {
      // Creamos un objeto de tipo CoordinateDocument (modelo de Mongoose)
      const coordinate: CoordinateDocument = new CoordinateModel({ sid, latitude, longitude }); // Agrega "sid" al constructor
      // Guardamos las coordenadas en MongoDB utilizando Mongoose
      await this.coordinatesService.saveCoordinates(coordinate);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async handleGetCoordinates(req: Request, res: Response): Promise<void> {
    try {
      // Obtenemos las coordenadas de MongoDB utilizando Mongoose
      const coordinates = await this.coordinatesService.getCoordinates();
      res.json(coordinates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Método para obtener coordenadas por su identificador (sid)
  public async handleGetCoordinatesBySid(req: Request, res: Response): Promise<void> {
    const { sid } = req.params;
    try {
      // Utiliza Mongoose para buscar las coordenadas por su identificador (sid)
      const coordinate = await CoordinateModel.findOne({ sid: Number(sid) });

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
}
