const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengesSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        problem: {
            type: String,
            require: true
        },
        private: {
            type: Boolean,
            require: true
        }
    }
)

const Challenges = mongoose.model("Challenges", ChallengesSchema);
module.exports = Challenges;