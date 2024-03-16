const PythonShell = require('python-shell').PythonShell;
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors())
app.use(express.json());

const EditorRoutes = require('./routes/EditorRoutes');

app.use('/editor', EditorRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
