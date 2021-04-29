const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./models");

const create = require("./routes/create")
const read = require("./routes/read")
const del = require("./routes/delete")
const update = require("./routes/update")


dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", create);
app.use("/", del);
// app.use("/", read);
// app.use("/", update);


db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`PORT is ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });