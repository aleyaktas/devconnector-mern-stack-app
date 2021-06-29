const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const app = express();
var cors = require('cors');

app.use(cors());

// Connect Database
connectDB();

app.use(morgan("dev"))
// Init Middleware
app.use(express.json({ extended: false }))

app.post('/', (req, res) => res.send('API running'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));