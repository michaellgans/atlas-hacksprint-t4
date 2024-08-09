// Starts the Express Server with npm run dev

import express from 'express';
import routes from './routes/index.js';
import connectDB from '../Utils/db.js';

// Express App Setup
const app = express();
const port = 5000;
app.use(express.json())

// Tie to Routes Object
routes(app);

app.listen(port);

// Connect to Database
connectDB();

// Export
export default app;
