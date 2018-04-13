const route = require("express").Router();
const controller = require("../controllers/sportsmen.js")

route.post("/", controller.create, (req, res) => {
    res.json({
        status: 200,
        data: req.sportsman
    })
})

module.exports = route;