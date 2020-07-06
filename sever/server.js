const express = require('express');
const app = express();
const cors = require('cors');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');


app.use(cors());
app.use(indexRouter);
app.use('/users',userRouter);

const port = 3002;

app.listen(port, ()=> console.log('express server listening on port ${port}'));