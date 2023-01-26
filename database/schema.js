// import { Schema, model, models } from "mongoose";

// const userSchema = new Schema({
//     name: String,
//     email: String,
//     password: String
// });

// // mongoose.model = {}
// const User = models.User || model('User', userSchema);

// export default User;

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const user = mongoose.models.User || mongoose.model('User', UserSchema)

export default user;

// const user = mongoose.model('User') || mongoose.model('User', userSchema);

// export default user;