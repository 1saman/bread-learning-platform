const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json([{ username: 'user1' }]);
});

module.exports = router; 