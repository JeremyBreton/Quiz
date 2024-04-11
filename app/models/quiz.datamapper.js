const client = require('./client.js');

module.exports = {
    async getAllQuiz() {
        try {
            console.log("getallquiz");
            const results = await client.query('SELECT * FROM "quiz";');
            console.log('results.rows', results);
            return results.rows;
        } catch (error) {
            console.error('Error executing query:', error.message);
            throw error; // Renvoie l'erreur pour la gérer dans le contrôleur
        }
    }
}
