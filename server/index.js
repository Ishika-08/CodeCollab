dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000||process.env.PORT;
const connectDB = require('./config/db');
connectDB();
//middlewares


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);