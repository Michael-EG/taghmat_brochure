import mongoose from 'mongoose';

const connection = {};

async function connect() {
  //   console.log('connecting');
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  // console.log(process.env.MONGODB_URI);
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.MODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
      console.log('connection disconnected');
    } else {
      console.log('not disconnected');
    }
  }
}

const db = { connect, disconnect, convertDocToObj };
export default db;
