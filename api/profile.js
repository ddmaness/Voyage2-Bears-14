const mongoose = require('mongoose');
const User = require('../model/users.js');

const router = express.Router();

//configure mongoose promises
mongoose.Promise = global.Promise;

// POST method to edit user profile at /profile
router.post('/profile', (req, res) => {
    // Find user in DB return err if not found
    // Update user profile return err if failed to update
    // Respond with updated user info or error
});
