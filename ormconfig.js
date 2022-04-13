// Only .js work, but env not working on docker
let dbConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: +process.env.POSTGRES_PORT,
  migrationsRun: false,
  synchronize: false,
  logging: false,
  migrations: ['dist/migrations/*.js'],
  entities: ['**/*.entity.js'],
  cli: {
    migrationsDir: 'migrations', // create migration file and save to this folder
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    dbConfig = {
      ...dbConfig,
      migrationsRun: true,
    };
    break;
  case 'test':
    dbConfig = {
      ...dbConfig,
      // type: 'sqlite',
      migrationsRun: true,
      entities: ['**/*.entity.ts'],
    };
    break;
  case 'production':
    dbConfig = {
      ...dbConfig,
    };
    break;

  default:
    // Default is development
    dbConfig = {
      ...dbConfig,
      migrationsRun: true,
      logging: true,
    };
    break;
  // throw new Error('unknow environment typeorm config');
}

module.exports = dbConfig;
