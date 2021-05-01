const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./models");

const create = require("./routes/create")
const read = require("./routes/read")
const del = require("./routes/delete")
const update = require("./routes/update")


const logger = require("./logger");


dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/add", create);
app.use("/delete", del);
app.use("/get", read);
app.use("/update", update);


db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
			logger.log("info", `Server started at ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = app