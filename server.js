import express from 'express';
import connectDB from './config/db';

// routes
import userRouter from './routes/api/users';
import authRouter from './routes/api/auth';
import reviewsRouter from './routes/api/reviews';
import profileRouter from './routes/api/profile';

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.get('/', (req, res) => res.send('API running'));
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/profile', profileRouter);

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}...`)
);
