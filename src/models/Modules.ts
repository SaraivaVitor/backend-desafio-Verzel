import mongoose from '../database/index'


const ModuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalQuanity: {
        type: Number,
        required: true
    },
    quantityNow: {
        type: Number,
    }  
})

export default mongoose.model('Modules', ModuleSchema)