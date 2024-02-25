import express, { Request, Response } from "express";
import { CoordinatesService } from "../../core/services/coordinatesService";
import CoordinateModel, { CoordinateDocument } from "../../core/domain/entities/CoordinateModel";

export class CoordinatesController {
  constructor(private coordinatesService: CoordinatesService) {}

  public async handlePostCoordinates(req: Request, res: Response): Promise<void> {
    const { latitude, longitude } = req.body;
    try {
      // Creamos un objeto de tipo CoordinateDocument (modelo de Mongoose)
      const coordinate: CoordinateDocument = new CoordinateModel({ latitude, longitude });
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
}
