const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.router.js');
//const pool = require('./modules/pool.js')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tasks', taskRouter);

// Serve back static files by default
app.use(express.static('server/public'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});