import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    condition: {
      type: String,
      enum: [
        "New",
        "Like New",
        "Good",
        "Fair"
      ],
      default: "Good"
    },

    images: [String],

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    location: {
      type: String
    },

    isSold: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Item",
  itemSchema
);
