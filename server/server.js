const express = require("express");
const app = express();
const cors = require("cors");

const indexRouter = require("./routes/index");
const searchRouter = require("./routes/search");
const searchdataRouter = require("./routes/searchdata");

app.use(cors());
app.use("/index", indexRouter);
app.use("/search", searchRouter);
app.use("/", searchdataRouter);

const port = 3002;

app.listen(port, () => console.log("express server listening on port ${port}"));
