const pg = require('pg');

const client = new pg.Client(process.env.DATABASE_URL);

// Fonction pour établir la connexion à la base de données
async function connectDatabase() {
    try {
      await client.connect(); // Connexion à la base de données
      console.log('Connected to the database'); // Affiche un message de succès
    } catch (error) {
      console.error('Error connecting to the database:', error.message); // Affiche un message d'erreur en cas d'échec de connexion
    }
}

module.exports = { client, connectDatabase, query: client.query };
