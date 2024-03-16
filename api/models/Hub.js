import mongoose from "mongoose";

// Define the schema for drivers
const HubSchema = new mongoose.Schema({
  hub: { type: String, required: true },
  admin: { type: String, required: true },
  driverId: { type: String, required: true },  //unique: true, 
  trackingIds: { type: [String], required: true },
}, { timestamps: true });

// Create a model for the drivers collection
const HubModel = mongoose.model("Hub", HubSchema);

// Export the model
export { HubModel };
