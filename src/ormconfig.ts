import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// When run migration, dotenv do not load, so must load again
import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env',
});

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/models/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  dropSchema: false,
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default config;
