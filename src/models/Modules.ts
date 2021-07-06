import mongoose from '../database/index'


const ModuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalQuanity: {
        type: String,
        required: true
    }
})

export default mongoose.model('Modules', ModuleSchema)