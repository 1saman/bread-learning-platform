import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
}));

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (recipe.id === 2) { // Пока только для домашнего хлеба
      navigate(`/recipe/${recipe.id}`);
    }
  };

  return (
    <StyledCard onClick={handleClick}>
      <CardMedia
        component="img"
        height="200"
        image={recipe.images[0] || '/default-recipe.jpg'}
        alt={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {recipe.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label={recipe.difficulty} color="primary" size="small" />
          <Chip label={`${recipe.cookingTime} мин`} size="small" />
          <Chip label={`${recipe.servings} порций`} size="small" />
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default RecipeCard; 