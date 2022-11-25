import mongoose from 'mongoose'

const CafeSchema = new mongoose.Schema({
    name: String,
    address: String,
    neighborhood: String
})

const cafe = mongoose.models.Cafe || mongoose.model('Cafe', CafeSchema)

export default cafe;