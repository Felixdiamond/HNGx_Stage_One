const express = require('express');
const app = express();
const infoRoute = require('./routes/info');

app.use('/info', infoRoute);

app.listen(3000, () => console.log('Server running on port 3000'));