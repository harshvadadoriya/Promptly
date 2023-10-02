import mongoose from "mongoose";

const dbUrl = process.env.MONGODB_URL;

const connectToDB = async () => {
  if (!dbUrl) {
    console.error("MongoDB URL is not provided in the environment variables.");
    return;
  }

  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(dbUrl, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    } else {
      console.log("MongoDB is already connected");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDB;
