const express = require('express');
const app = express();
const infoRoute = require('./routes/info');
const path = require('path');

app.use('/api', infoRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server running on port 3000'));