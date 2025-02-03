const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '192.168.64.4',  // Adresse de votre serveur MariaDB
  port: 3306,         // Port par défaut pour MariaDB
  user: 'user',       // Nom d'utilisateur
  password: 'test',   // Mot de passe
  database: 'users', // N om de la base de données
  connectionLimit: 5
});

module.exports = pool;
