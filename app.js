const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur http://localhost:${PORT}`);
});