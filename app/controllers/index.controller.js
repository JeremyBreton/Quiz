const quizDatamapper = require("../models/quiz.datamapper");

module.exports = {
    async getQuiz(req,res) {
        try {
            console.log("quiz controller");
            // const userInput = req.query;
            const data = await quizDatamapper.getAllQuiz();
            console.log(data);
            res.json(data);
        } catch(err) {
            res.status(500).json(err);
        }
    }
};