import mongoose from "mongoose";

const connectToMongoDB = async () => {
  // Check if there is an existing connection
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MONGODB");
    return;
  }

  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error("MONGODB_URI environment variable is not set.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MONGODB🥭");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToMongoDB;
