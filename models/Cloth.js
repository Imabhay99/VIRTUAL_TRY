import mongoose from "mongoose";

const clothSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      enum: ["s", "m", "l"], // You can customize these values as needed
      default: "m",
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Cloth = mongoose.model("Cloth", clothSchema);

export default Cloth;
