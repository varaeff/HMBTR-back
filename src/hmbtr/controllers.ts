import { Request, Response } from "express";
import pool from "../db";

const getFighters = (req: Request, res: Response) => {
  res.send("getting fighters");
};

export { getFighters };
