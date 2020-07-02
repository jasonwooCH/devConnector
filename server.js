const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Use Env variable or 5000 for default
const PORT = process.env.PORT || 5000;

app.listen(PORT ,() => console.log(`Server started on port ${PORT}`));