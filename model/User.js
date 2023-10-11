import mongoose from "mongoose";

const { Schema } = mongoose;
const  { Types} = Schema

const UserSchema = new Schema({
    name: {
        type : Types.String,
        required: true,
    },
    email : {
        type : Types.String,
        required : true,
        unique : true,
    },
    phone : {
        type :Types.Number,
    },
    password :{
        type : Types.String,
        required : true,
    }
},{
    timestamps : {
        createdAt :"CreatedAt",
        updatedAt : "UpdatedAt"
    }
});

const User = mongoose.model('Users',UserSchema);
export default User