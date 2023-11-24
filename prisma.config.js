// prisma.config.js

module.exports = {
  client: {
    // ...
    connection: {
      connectionString: 'sua_string_de_conexao',
      connectTimeoutMillis: 10000, // Timeout em milissegundos (exemplo: 5 segundos)
    },
    pool: {
      max: 10, // Número máximo de conexões no pool
      idleTimeoutMillis: 10000, // Tempo limite para conexões inativas em milissegundos (exemplo: 5 segundos)
    },
    // ...
  },
};
