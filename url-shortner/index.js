const express = require('express');
const path = require('path');
const app = express();
const PORT = 8001;
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const {connectMongoDb} = require('./connect');
const URL = require('./models/url');

connectMongoDb('mongodb://127.0.0.1:27017/url-shortner');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use('/url', urlRoute);
app.use('/', staticRoute);
app.use('/user', userRoute);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
});