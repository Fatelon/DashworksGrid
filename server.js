const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/dashworks-grid'));

app.listen(process.env.PORT || 8080);
