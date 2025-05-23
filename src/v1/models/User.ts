import mongoose from "mongoose"

const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
})
const User = mongoose.model('User', schema)

export default User