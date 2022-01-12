const express = require("express");
const healthCheckRouter = require("./routes/healthcheck");
const employeeRouter = require("./routes/employee");
const app = express();
app.use("/healthcheck", healthCheckRouter);
app.use("/employees", employeeRouter);
app.server = app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
