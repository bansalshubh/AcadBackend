const mongoose = require("mongoose");
const {Schema} = mongoose;

const PostsSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    like:{
        type:String,
        default:'0'
    },
    date:{
        type:Date,
        default:Date.now
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Post = mongoose.model('posts',PostsSchema);
module.exports = Post;