module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf1saeo2i3mnjclseac0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ypus'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'X4jV2v4IavxkMrWZhdiU1fvKcQWPEf06'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
