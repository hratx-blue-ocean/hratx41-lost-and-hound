
const mongoose = require('mongoose');

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

const connectionString = `mongodb+srv://${mongoUser}:${mongoPass}@sfcluster-msyg8.mongodb.net/lostandhound?retryWrites=true&w=majority`;

// const connectionString = 'mongodb://localhost:27017/lostandhound'

mongoose.connect(connectionString, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to lostandhound DB')
});

const dogSchema = new mongoose.Schema({
  name: String,
  color: String,
  date: Date,
  image: {
    type: String,
    unique: true
  },
  looksLike: String,
  sex: String,
  location: {
    address: String,
    city: String,
    state: String,
    zip: String
  }
});

const Dog = mongoose.model('Dog', dogSchema);

const uploadDogs = (dogData, callback) => {
  Dog.insertMany(dogData, (err) => {
    if (err) throw err;
    callback(err);
  })
}

const allFoundDogs = (callback) => {
  Dog.find({ status: 'Found'}, (err, dogs) => {
    if (err) throw err;
    callback(err, dogs);
  });
}

module.exports = { uploadDogs, allFoundDogs }