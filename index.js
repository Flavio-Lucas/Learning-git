const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    res.json({ helo:'World2' });
})

app.listen(3333);