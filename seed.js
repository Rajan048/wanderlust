const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./init/data");

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/wanderlust")
  .then(() => {
    console.log("✅ Connected to MongoDB (wanderlust)");
  })
  .catch((err) => {
    console.error("❌ Connection error:", err);
  });

const seedDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("🌱 Database seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
