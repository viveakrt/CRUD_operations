const read = require("express").Router();
const Sequelize = require("sequelize");
const {
    Op
} = require("sequelize");
const {
    cosmetics
} = require('../models');


read.get('/all', (req, res) => {
    cosmetics.findAll().then(Data => {
        res.status(200)
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

read.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {
        cosmetics.findByPk(id)
            .then(Data => {
                if(Data) {
                    res.status(200)
                    .json({
                        Data
                    })
                    .end();
                }else{
                    res.status(404)
                    .json({
                        message:"NO DATA MATCH"
                    })

                    .end()
                }


            }).catch(err => {
                res.status(500).json({
                        message: "Internal Error",
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


read.get('/allCategories', (req, res) => {
    cosmetics.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('Label')), 'Category'],
            ]
        })
        .then(Data => {
            res.status(200)
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

read.get('/allCategories/:id', (req, res) => {
    const cat = req.params.id;
    cosmetics.findAll({
            where: {
                Label: {
                    [Op.substring]: cat
                }
            },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('Label')), 'Category'],
            ]
        })
        .then(Data => {
            res.status(200)
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



read.get('/name/:id', (req, res) => {
    const name = req.params.id;
    cosmetics.findAll({
            where: {
                name: {
                    [Op.substring]: name
                }
            }
        })
        .then(Data => {
            res.status(200)
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



read.get('/allBrands', (req, res) => {
    cosmetics.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('Brand')), 'Brand'],
            ]
        })
        .then(Data => {
            res.status(200)
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

read.get('/allBrands/:id', (req, res) => {
    const brand = req.params.id;
    cosmetics.findAll({
            where: {
                Brand: {
                    [Op.substring]: brand
                }
            },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('Brand')), 'Brand'],
            ]
        })
        .then(Data => {
            res.status(200)
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
})


module.exports = read;