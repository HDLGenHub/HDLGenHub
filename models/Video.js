const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    }
)

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;