import mongoose from '../database/index'

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }

})

export default mongoose.model('UserAdmin', AdminSchema)