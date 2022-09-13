import mongoose from 'mongoose';

const main = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected')
}

export default main;