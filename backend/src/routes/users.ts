// Import necessary modules
import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController';

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', updateUserProfile);

export default router;