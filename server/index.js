const express = require('express');
const cors = require('cors');
dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userDetails = require("./routes/catalog")
app.use('/api/info', userDetails)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});