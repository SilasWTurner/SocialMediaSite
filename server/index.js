const express = require("express");
const app = express();
const db = require("./models");
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);
const accountRouter = require("./routes/Accounts");
app.use("/accounts", accountRouter);

db.sequelize.sync().then(() => {
    app.listen(5001, () => {
        console.log("Server running on port 5001");
    });
});