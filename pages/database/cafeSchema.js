import mongoose, { Mongoose } from 'mongoose'

const CafeSchema = new mongoose.Schema({
    city: String,
    area: String,
    name: String,
    address: String,
    image: String
})

const cafe = mongoose.models.Cafe || mongoose.model('cafe', CafeSchema)

export default cafe;