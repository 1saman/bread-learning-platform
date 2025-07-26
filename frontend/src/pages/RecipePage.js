import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip, Button, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const RecipeImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const RecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Временные данные для рецепта домашнего хлеба
  const recipe = {
    id: 2,
    title: 'Домашний хлеб',
    description: 'Простой рецепт домашнего хлеба на закваске, который покорит ваше сердце своим ароматом и вкусом. Идеально подходит для начинающих пекарей.',
    images: ['/images/bread.jpg'],
    difficulty: 'Начинающий',
    cookingTime: 180,
    servings: 6,
    ingredients: [
      '500 г пшеничной муки',
      '300 мл теплой воды',
      '10 г соли',
      '7 г сухих дрожжей',
      '1 ст.л. сахара',
      '2 ст.л. растительного масла'
    ],
    instructions: [
      'Смешайте теплую воду с дрожжами и сахаром, оставьте на 10 минут',
      'В большой миске смешайте муку и соль',
      'Добавьте активированные дрожжи и масло, замесите тесто',
      'Накройте тесто полотенцем и оставьте на 1 час в теплом месте',
      'Обомните тесто и сформируйте буханку',
      'Выпекайте при 200°C 40-45 минут'
    ]
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
        >
          Назад к рецептам
        </Button>

        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontFamily: 'Playfair Display, serif',
            color: '#2c3e50',
            textAlign: 'center',
            mb: 4
          }}
        >
          {recipe.title}
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <RecipeImage 
              src={recipe.images[0]} 
              alt={recipe.title}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  color: '#e67e22',
                  fontFamily: 'Playfair Display, serif',
                  mb: 2
                }}
              >
                О рецепте
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Chip 
                  icon={<LocalDiningIcon />}
                  label={recipe.difficulty} 
                  color="primary" 
                  sx={{ 
                    backgroundColor: '#e67e22',
                    '&:hover': { backgroundColor: '#d35400' }
                  }}
                />
                <Chip 
                  icon={<AccessTimeIcon />}
                  label={`${recipe.cookingTime} мин`}
                  sx={{ backgroundColor: '#f1c40f' }}
                />
                <Chip 
                  icon={<RestaurantIcon />}
                  label={`${recipe.servings} порций`}
                  sx={{ backgroundColor: '#2ecc71' }}
                />
              </Box>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: '#34495e',
                  lineHeight: 1.8
                }}
              >
                {recipe.description}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#e67e22',
                  '&:hover': {
                    backgroundColor: '#d35400'
                  },
                  py: 1.5,
                  mt: 2
                }}
                onClick={() => navigate('/?tab=1')}
              >
                Смотреть видеоурок
              </Button>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper sx={{ height: '100%' }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  color: '#e67e22',
                  fontFamily: 'Playfair Display, serif',
                  mb: 2
                }}
              >
                Ингредиенты
              </Typography>
              <Box component="ul" sx={{ 
                listStyle: 'none', 
                p: 0,
                '& li': {
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  '&:before': {
                    content: '"•"',
                    color: '#e67e22',
                    fontWeight: 'bold',
                    mr: 1
                  }
                }
              }}>
                {recipe.ingredients.map((ingredient, index) => (
                  <Box component="li" key={index}>
                    <Typography variant="body1" sx={{ color: '#34495e' }}>
                      {ingredient}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper sx={{ height: '100%' }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  color: '#e67e22',
                  fontFamily: 'Playfair Display, serif',
                  mb: 2
                }}
              >
                Инструкция по приготовлению
              </Typography>
              <Box component="ol" sx={{ 
                p: 0,
                m: 0,
                '& li': {
                  mb: 1,
                  color: '#34495e',
                  '&:last-child': {
                    mb: 0
                  }
                }
              }}>
                {recipe.instructions.map((instruction, index) => (
                  <Box component="li" key={index}>
                    <Typography variant="body1">
                      {instruction}
                    </Typography>
                    {index < recipe.instructions.length - 1 && (
                      <Divider sx={{ my: 1, opacity: 0.2 }} />
                    )}
                  </Box>
                ))}
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RecipePage; 