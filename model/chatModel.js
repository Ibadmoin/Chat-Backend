import { boolean, string } from "joi";
import mongoose from "mongoose";

// chatName:
// isgroup
// users
// latestMessage
// groupAdmin

const {Schema} = mongoose;
const  {Types} = Schema;
const chatModel = Schema({
    chatName : {type: Types.String,trim:true},
    isGroupChat : {type:Types.Boolean, default :false},
    users : [{types:Types.ObjectId, ref:"User"}],
    latestMessage: {
        type: Types.ObjectId,
        ref:"Message"
    },
    groupAdmin : {types: Types.ObjectId,ref:"User"},
},{
    timestamps : true 
});

const Chat = mongoose.model("Chat",chatModel);

export default Chat;