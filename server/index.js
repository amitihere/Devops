const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  console.log("it is working")
  return res.send("hello world")
})

const userInfo = require('./routes/catalog')

app.use("/api/user",userInfo)


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });

  })
  .catch(err => console.error("MongoDB error:", err));
