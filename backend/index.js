const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');

const app = express();

// setup MongoDB connection
mongoose.connect('mongodb+srv://Suleman:As421534@mini-mern-tut.ktde2.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setup express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require('cors');

app.use(cors())
// setup routes
app.use('/user', userRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
