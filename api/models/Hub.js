import mongoose from "mongoose";

// Define the schema for hubs
const HubSchema = new mongoose.Schema({
  hub: { type: String, required: true },
  admin: { type: String, required: true },
  driverId: { type: String, required: true }, 
  trackingIds: { type: [String], required: true },
  hubContact: { type: Number, required: true },
  nextHub: { type: String, required: true }
}, { timestamps: true });

// Create a model for the hubs collection
const HubModel = mongoose.model("Hub", HubSchema);

// Export the model
export { HubModel };