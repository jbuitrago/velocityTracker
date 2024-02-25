import mongoose, { Schema, Document } from 'mongoose';

export interface CoordinateDocument extends Document {
  latitude: number;
  longitude: number;
}

const CoordinateSchema: Schema = new Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export default mongoose.model<CoordinateDocument>('Coordinate', CoordinateSchema);
