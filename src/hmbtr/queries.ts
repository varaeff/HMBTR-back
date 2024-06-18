export const tableCheckQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'fighters'
      );
    `;

export const createTableFightersQuery = `
    CREATE TABLE fighters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        patronymic VARCHAR(255),
        birthday DATE,
        country VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        club VARCHAR(255),
        pic VARCHAR(255)
    );
`;

export const getFightersQuery = `
    SELECT * FROM fighters
`;

export const getFighterQuery = `
    SELECT * FROM fighters 
    WHERE id = $1
`;

export const checkFighterQuery = `
    SELECT EXISTS (
        SELECT 1 FROM fighters 
        WHERE name = $1 AND surname = $2 AND patronymic = $3 AND city = $4
    );
`;

export const addFighterQuery = `
    INSERT INTO fighters (name, surname, patronymic, birthday, country, city, club, pic)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
`;
