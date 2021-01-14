import Mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await Mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Db connected on ${conn.connection.host}`.blue.bold.underline);
    console.log("Lets go".rainbow); // Drops the bass
  } catch (error) {
    console.error(`Error : ${error.message}`.red.bold.underline);
    process.exit(1);
  }
};
export default connectDb;
