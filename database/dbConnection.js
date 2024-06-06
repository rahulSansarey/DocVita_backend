import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
      .connect(process.env.MONGO_URl, {
        dbName: "DOCVITA",
      })
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        console.log(`Some error occurred while connecting to database: ${err}`);
      });
}