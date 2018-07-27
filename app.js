const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const projectRoutes = require('./api/projectRoutes');
const actionRoutes = require('./api/actionRoutes');
const handleErrors = require('./middleware/handleErrors');

const app = express();
// cors enabled for testing from an external API tester. Just for fun
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/projects', projectRoutes);
app.use('/api/actions', actionRoutes);
app.use(handleErrors);

app.listen(8000, () => {
  console.log('Listening on PORT 8000');
});
