const express = require('express');
const app = express();

const router = require("./routes/routes")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api", router)

app.listen(5000, () => console.log('server up, @port:5000:'));