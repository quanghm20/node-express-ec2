const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('Server running on port 8080');
});

app.get('/', (req, res) => {
    res.json('Hello world');
});