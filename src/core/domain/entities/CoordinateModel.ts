import mongoose, { Schema, Document } from 'mongoose';

export interface CoordinateDocument extends Document {
  sid: number;
  latitude: number;
  longitude: number;
  distance:number;
  timestamp: Date; // Nuevo campo de fecha con hora, minutos y segundos
}

const CoordinateSchema: Schema = new Schema({
  sid: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  distance: { type: Number, required: true },
  timestamp: { type: Date, required: true, default: Date.now } // Campo de fecha con hora, minutos y segundos
});

export default mongoose.model<CoordinateDocument>('Coordinate', CoordinateSchema);
