import { Schema, models, model } from "mongoose";

const SculptureSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    materials: { type: String },
    dimensions: { type: String },
    dateCreated: { type: Date, default: Date.now },
    images: { type: [String], required: true },
  },
  { timestamps: true }
);

export default models.Sculpture || model("Sculpture", SculptureSchema);