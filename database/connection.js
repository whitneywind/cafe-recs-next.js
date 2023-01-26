import mongoose from 'mongoose';

// const main = async () => {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('database connected')
// }

// export default main;

const connection = {};

async function connect() {
    console.log(connection)
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
}

export default connect;