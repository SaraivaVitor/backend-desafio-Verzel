import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://SaraivaVitor:desafio12345@cluster0.k9xkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
mongoose.Promise = global.Promise

export default mongoose