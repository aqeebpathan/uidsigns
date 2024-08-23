import mongoose, { Schema } from "mongoose";

const designSchema = new Schema(
  {
    uiID: {
      type: String,
      unique: true,
      required: true,
    },
    title: { type: String, required: true },
    imageUrl: {
      type: String,
      required: true,
    },
    designerName: {
      type: String,
      required: true,
    },
    designerUrl: {
      type: String,
      required: true,
    },
    sourceUrl: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Design = mongoose.models.Design || mongoose.model("Design", designSchema);

export default Design;
