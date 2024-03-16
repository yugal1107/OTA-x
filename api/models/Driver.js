import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  driverId: { type : String, unique:true }, // You can define this as per your requirements
  name: String,
  location: {
    type: {
      type: String,
      enum: ["Point"], // We're storing location as GeoJSON point
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const DriverModel = mongoose.model("Driver", driverSchema);

export {DriverModel};
