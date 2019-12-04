import express from 'express';

const router = express.Router();

/**
 * @route  GET /api/auth
 * @desc   TEST route
 * @access Public
 */
router.get('/', (req, res) => res.send('Auth route'));

export default router;
