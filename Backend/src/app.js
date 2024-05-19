const express = require('express');
const dotenv = require('dotenv');
const routes = require('./infrastructure/web/routes');
const sequelize = require('./config/database');
const errorHandler = require('./infrastructure/web/middlewares/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database:', err));

app.use('/api', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
