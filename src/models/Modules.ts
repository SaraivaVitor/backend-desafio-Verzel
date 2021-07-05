import mongoose from '../database/index'


const ModuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalQuanity: {
        type: String,
        required: true
    },
    lessons: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessons',
    }
})

export default mongoose.model('Modules', ModuleSchema)