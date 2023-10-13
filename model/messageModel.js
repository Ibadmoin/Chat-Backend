import mongoose from "mongoose";


// Sender
// chat cotent
// chat reference
// readby State

const {Schema} = mongoose;
const {Types} =  Schema;

const messageSchema = Schema({
    sender : {type: Types.ObjectId,ref:"User" },
    content : {type: Types.String, trim: true},
    chat: {type: Types.ObjectId, ref:"Chat" },
    readBy:[{type:Types.ObjectId, ref:"User"}],

},{
    timestamps:true ,
});


const Message = mongoose.model("Message", messageSchema);
export default Message ;