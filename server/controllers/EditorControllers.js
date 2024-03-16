const fs = require('fs');
const {PythonShell} = require('python-shell');

exports.runPython = async (req, res) => {
    fs.writeFileSync('test.py', req.body.code);

    let options = {
    mode: 'text',
    pythonOptions: ['-u'], 
    args: [1, 2, 3]
    };

    PythonShell.run('test.py', options).then(messages=>{
    console.log('results: %j', messages);
    res.json({result: messages[0]});
    });
}