const PythonShell = require('python-shell').PythonShell;
const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Import multer for handling file uploads
const xlsx = require('xlsx'); // Import xlsx to work with Excel files
const mongoose = require('mongoose'); // MongoDB ODM
const Interviewee = require('./models/interviewee'); // MongoDB model for interviewees
const app = express();
const port = 3000;
const connecDb = require('./config/connect.js');
connecDb();
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

const EditorRoutes = require('./routes/EditorRoutes');
app.use('/editor', EditorRoutes);

// Define a route for uploading Excel files
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet);

        const intervieweesData = data.map(item => ({
            userId: req.body.userId, 
            name: item['Name'],
            email: item['Email'],
            phoneNumber: item['Phone Number'],
        }));

        await Interviewee.insertMany(intervieweesData);
        res.status(200).send('Data successfully uploaded and stored.');
    } catch (error) {
        console.error('Error processing file upload:', error);
        res.status(500).send('Error processing file upload.');
    }
});

// app.use('/', router);

app.get('/interviewees', async (req, res) => {
  const userId = req.body.userId;
  try {
    const interviewees = await Interviewee.find({ userId });
    // const interviewees = await Interviewee.find({});
    res.json(interviewees);
  } catch (error) {
    console.error('Failed to retrieve interviewees:', error);
    res.status(500).send('Error retrieving interviewee data.');
  }
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
