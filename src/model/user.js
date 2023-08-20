import mongoose from "mongoose";

const UserSchema = {
    username: String,
    password: String
}

const User = mongoose.model('user', UserSchema);

export default User;