const update = require("express").Router();
const {
    cosmetics
} = require('../models');



update.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {
        cosmetics.update({
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
        },{
                where: {
                    id: id,
                }
            }).then((data) => {
                if (data[0]) {
                    res.status(200).json({
                            message: `Cosmetic with Id ${id} UPDATED`,
                        })
                        .end();
                } else {
                    res.status(404).json({
                            message: `Cosmetic with Id ${id} NOT FOUND`,
                        })
                        .end();
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                        message: "internal server error",
                    })
                    .end();
            });
    } else {
        res.status(400).json({
                message: `ERROR Id is : ${id}`,
            })
            .end();
    }

});


module.exports = update;