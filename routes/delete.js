const del = require("express").Router();
const {
    cosmetics
} = require('../models');



del.delete('/id/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {
        cosmetics.destroy({
                where: {
                    id: id,
                },
            }).then((data) => {
                if (data) {
                    res.status(200).json({
                            message: `Cosmetic with Id ${id} DELETED`,
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



del.delete('/all', (req, res) => {
    cosmetics.destroy({
            truncate: true
        })
        .then(() => {
            res.status(200)
                .json({
                    message: "All Data deleted"
                })
                .end();
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                    message: "Internal Error"

                })
                .end();
        });

});






module.exports = del;