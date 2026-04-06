import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// CORS configuration
app.use(cors());

// Security headers
app.use(helmet());

// Basic routing
app.get('/', (req, res) => {
    res.send('Welcome to the Family Tree Community API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});