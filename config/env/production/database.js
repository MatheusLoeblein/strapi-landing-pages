
module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false)
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 0), max: env.int('DATABASE_POOL_MAX', 5) },
    },
  }
};
