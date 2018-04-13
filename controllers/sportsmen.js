const model = require("../models/sportsmen");
//

module.exports.create = (req, res, next) => {
    model.create({
        name: req.body.name,
        password: req.body.password,
    }).then((sportsman) => {
        req.sportsman = sportsman.toJSON();
        next();
    }).catch((err) =>{
        const error = new Error(err);
        error.status = 400;
        next(error);
    })
}