import mongoose from "mongoose";

// name
// email
// password
// pic


const {Schema}= mongoose;
const {Types}= Schema;

const userSchema = Schema({
    name: {type:Types.String, required: true},
    email : {type:Types.String, required:true,unique:true},
    phone : {type:Types.String, },
    password : {type:Types.String, required:true},
    profilePicture : {
        type: Types.String,
        required: true,
        default :"../Util/images/DafaultAvatar.jpg"
    }

},{
    timestamp :true,
});


const User = mongoose.model("User",userSchema);

export default User;