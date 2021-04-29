const create = require("express").Router();
const {
    cosmetics
} = require('../models');



create.post('/', (req, res) => {
    if (
        !req.body.Label ||
        !req.body.Brand ||
        !req.body.Name ||
        !req.body.Price ||
        !req.body.Ingredients ||
        !req.body.Combination

    ) {
        res.status(400).json({
            message: "LAbel, Brand, Name , Price, INgredients , Combination are mandatory",
        })
        .end();
    } else {
        cosmetics.create({
            Label: req.body.Label,
            Brand: req.body.Brand,
            Name: req.body.Name,
            Price: req.body.Price,
            Rank: req.body.Rank,
            Ingredients: req.body.Ingredients,
            Combination: req.body.Combination,
            Dry: req.body.Dry,
            Normal: req.body.Normal,
            Oily: req.body.Oily,
            Sensitive: req.body.Sensitive,
        }).then(Data => {
            res.status(201)
                .json({
                    Data : Data
                })
                .end();
        }).catch(err => {
            res.status(500).json({
                message: err
            })
            .end();
        });
    }

});



create.post('/all', (req, res) => {
        cosmetics.bulkCreate(
            req.body
        ,{ returning: true }).then(Data => {
            res.status(201)
                .json({
                    Data
                })
                .end();
        }).catch(err => {
            res.status(500).json({
                message: "Internal Error",
            })
            .end();
        });
    
});






module.exports = create;