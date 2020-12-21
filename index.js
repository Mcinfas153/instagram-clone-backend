import express from 'express'
import mongoose from 'mongoose'

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//Api endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// listner
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})