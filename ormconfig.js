module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'mysqldb',
  username: process.env.MYSQLDB_USER || 'root',
  password: process.env.MYSQLDB_ROOT_PASSWORD || 'scout',
  database: process.env.MYSQLDB_DATABASE || 'test_db_name',
  charset: 'utf8',
  driver: 'mysql',
  synchronize: process.env.NODE_ENV !== 'production',
  entities: [
    '**/**.entity.ts',
    // '**/**.entity.js'
  ],
  logging: process.env.NODE_ENV !== 'production' ? 'all' : 'error',
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  connectTimeout: 30000,
  acquireTimeout: 30000,
};
