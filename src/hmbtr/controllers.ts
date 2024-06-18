import { Request, Response } from "express";
import pool from "../db";
import {
  getFightersQuery,
  getFighterQuery,
  checkFighterQuery,
  addFighterQuery,
} from "./queries";
import { QueryResult } from "pg";

const getFighters = (req: Request, res: Response) => {
  pool.query(getFightersQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getFighter = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  pool.query(getFighterQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const checkFighterExists = async (
  name: string,
  surname: string,
  patronymic: string,
  city: string
) => {
  const values = [name, surname, patronymic, city];

  const result: QueryResult<any> = await pool.query(checkFighterQuery, values);
  return result.rows[0].exists;
};

const addFighter = async (req: Request, res: Response) => {
  const { name, surname, patronymic, birthday, country, city, club, pic } =
    req.body;

  try {
    const exists: boolean = await checkFighterExists(
      name,
      surname,
      patronymic,
      city
    );

    if (exists) {
      return res.status(400).json({ error: "Fighter already exists" });
    }

    const values = [
      name,
      surname,
      patronymic,
      birthday,
      country,
      city,
      club,
      pic,
    ];

    pool.query(addFighterQuery, values, (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(201).json(results.rows[0]);
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error" });
    }
  }
};

export { getFighters, getFighter, addFighter };
