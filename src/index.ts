import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./hmbtr/routes";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use("/api/hmbtr/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("HMBTR server started");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
