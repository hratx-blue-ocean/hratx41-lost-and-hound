const mongoose = require("mongoose");

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

const connectionString = `mongodb+srv://${mongoUser}:${mongoPass}@sfcluster-msyg8.mongodb.net/lostandhound?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to lostandhound DB");
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
  },
  status: String,
  infoURL: String
});

const Dog = mongoose.model("Dog", dogSchema);

const uploadDogs = (dogData, callback) => {
  Dog.insertMany(dogData, { ordered: false }, err => {
    if (err) {
      console.error(err);
    }
    callback(err);
  });
};

const allFoundDogs = callback => {
  Dog.find({ status: "Found" })
    .sort({ date: -1 })
    .exec((err, dogs) => {
      if (err) {
        console.error(err);
      }
      callback(err, dogs);
    });
};

const allLostDogs = callback => {
  Dog.find({ status: "Lost" })
    .sort({ date: -1 })
    .exec((err, dogs) => {
      if (err) {
        console.error(err);
      }
      callback(err, dogs);
    });
};

const oneDog = (id, callback) => {
  Dog.findOne({ _id: id }, (err, dog) => {
    callback(null, dog);
  });
};

const insertDog = (dogData, callback) => {
  Dog.create(dogData, err => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = { uploadDogs, allFoundDogs, allLostDogs, oneDog, insertDog };
