const express = require('express');
const router = express.Router();
const people = require("./people.json");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Homepage",
        people: people.profiles
    });
});

router.get("/profile", (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render("profile", {
        title: `About ${person.firstname} ${person.lastname}`,
        person
    });
});

router.get("/home", (req, res) => {
    res.render("home", {
        title: `Animate Homepage`,
        people: people.home
    });
});

module.exports = router;