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

// Function to generate a new driver ID
const generateDriverId = async () => {
  const lastDriver = await DriverModel.findOne({}, {}, { sort: { 'driverId': -1 } });
  let lastDriverId = lastDriver ? parseInt(lastDriver.driverId.replace("DID", "")) : 0;
  const newDriverId = `DID${(lastDriverId + 1).toString().padStart(4, "0")}`;
  return newDriverId;
};

const DriverModel = mongoose.model("Driver", driverSchema);

export {DriverModel, generateDriverId};
