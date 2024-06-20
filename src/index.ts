import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./hmbtr/routes";
import initDB from "./initDB";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/hmbtr/v1", router);

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("HMBTR server started");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
