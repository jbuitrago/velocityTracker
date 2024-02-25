import express from "express";
import { CoordinatesController } from "./adapters/controllers/coordinatesController";
import { CoordinatesService } from "./core/services/coordinatesService";
import { CoordinatesRepository } from "./adapters/database/coordinatesRepository";

const app = express();


app.use(express.json());

const coordinatesRepository = new CoordinatesRepository();
const coordinatesService = new CoordinatesService(coordinatesRepository);
const coordinatesController = new CoordinatesController(coordinatesService);

app.post("/coordinates", coordinatesController.handlePostCoordinates.bind(coordinatesController));
app.get("/coordinates", coordinatesController.handleGetCoordinates.bind(coordinatesController));

export default app;
