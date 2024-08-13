// Starts the Express Server with npm run dev

import express from 'express';
import routes from './routes/index.js';
import connectDB from '../Utils/db.js';
import swaggerUI from 'swagger-ui-express';
import specs from './jsDocConfig.js';

// Express App Setup
const app = express();
const port = 5000;
app.use(express.json())

// Tie to Routes Object
routes(app);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port);

// Connect to Database
connectDB();

// Export
export default app;
