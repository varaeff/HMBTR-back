import pool from "./db";
import { tableCheckQuery, createTableFightersQuery } from "./hmbtr/queries";

const createFightersTable = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(tableCheckQuery);
    const exists = result.rows[0].exists;

    if (!exists) {
      await client.query(createTableFightersQuery);
      console.log("Table 'fighters' created successfully.");
    }
  } catch (error) {
    console.error("Error creating table 'fighters':", error);
  } finally {
    client.release();
  }
};

export default createFightersTable;
