import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  driverId: { type: String, unique: true }, // Define as per your requirements
  name: String,
  location: {
    type: {
      type: String,
      enum: ["Point"], // Storing location as GeoJSON point
      required: true,
    },
    coordinates: { 
      type: [Number],
      required: true,
    },
  },
});


const DriverModel = mongoose.model("Driver", driverSchema);

// Function to generate a new driver ID
const generateDriverId = async () => {
  try {
    const lastDriver = await DriverModel.findOne({}, {}, { sort: { 'driverId': -1 } });
    let lastDriverId = lastDriver ? parseInt(lastDriver.driverId.replace("DID", "")) : 0;
    const newDriverId = `DID${(lastDriverId + 1).toString().padStart(4, "0")}`;
    return newDriverId;
  } catch (error) {
    console.error("Error generating driver ID:", error);
    throw error;
  }
};



export { DriverModel, generateDriverId };
