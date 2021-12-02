const express = require('express');
const healthCheckRouter = require('./routes/healthcheck');

const app = express();
app.use("/healthcheck",healthCheckRouter);

app.server = app.listen(3001,()=> {
    console.log('Server running on port 3001...')
});