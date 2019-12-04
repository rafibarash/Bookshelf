import express from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();

/**
 * @route  POST /api/user
 * @desc   Register user
 * @access Public
 */
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with six or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    // Error check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Bad request
    }
    res.send('User route');
  }
);

export default router;
