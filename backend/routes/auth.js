const express = require('express');
const router = express.Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ token: 'demo-token' });
});

module.exports = router; 