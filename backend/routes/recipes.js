const express = require('express');
const router = express.Router();

// GET /api/recipes
router.get('/', (req, res) => {
  res.json([{ title: 'Пример рецепта', description: 'Описание рецепта' }]);
});

module.exports = router; 