const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});