import express from "express";
const app = express();
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config({});
const port = process.env.PORT || 3001;

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is listening",
  });
});

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is listening to ${port} `);
});
