const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    res.json({ helo:'World' });
})

app.listen(3333);