const express = require("express");
const routes = require('./route');
const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).send(`<h1 align="center">Page not Found!</h1>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send();
});
const port = process.env.port || 8800
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});