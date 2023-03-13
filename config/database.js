const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/ToDo-List', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongo Online')).catch((error => console.log(error)));