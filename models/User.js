import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    password: String
})

module.exports = UserSchema.methods.generateJWT = function() {
    let today = new Date()
    let exp = new Date(today)
    exp.setDate(today.getDate()+60)

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime()/1000)
    }, 'DEVIL')
}

module.exports = mongoose.model('User', UserSchema, 'User');