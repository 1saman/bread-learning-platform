import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box, TextField, MenuItem, Tabs, Tab, Button, IconButton } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import VideoLessons from '../components/VideoLessons';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: 'Классический багет',
        description: 'Традиционный французский багет с хрустящей корочкой',
        images: ['/images/baget.jpg'],
        difficulty: 'Средний',
        cookingTime: 120,
        servings: 4
      },
      {
        id: 2,
        title: 'Домашний хлеб',
        description: 'Простой рецепт домашнего хлеба на закваске',
        images: ['/images/bread.jpg'],
        difficulty: 'Начинающий',
        cookingTime: 180,
        servings: 6
      },
      {
        id: 3,
        title: 'Ржаной хлеб',
        description: 'Ароматный ржаной хлеб с семечками',
        images: ['/images/rye.jpg'],
        difficulty: 'Средний',
        cookingTime: 150,
        servings: 5
      },
      {
        id: 4,
        title: 'Круассан',
        description: 'Французские круассаны с маслом',
        images: ['/images/croissant.jpg'],
        difficulty: 'Продвинутый',
        cookingTime: 210,
        servings: 8
      },
      {
        id: 5,
        title: 'Песочное печенье',
        description: 'Рассыпчатое печенье для чая',
        images: ['/images/cookie.jpg'],
        difficulty: 'Начинающий',
        cookingTime: 60,
        servings: 20
      },
      {
        id: 6,
        title: 'Сдобная булочка',
        description: 'Пышные булочки с изюмом',
        images: ['/images/bun.jpg'],
        difficulty: 'Средний',
        cookingTime: 90,
        servings: 10
      },
      {
        id: 7,
        title: 'Медовик',
        description: 'Классический торт с медовыми коржами',
        images: ['/images/medovik.jpg'],
        difficulty: 'Продвинутый',
        cookingTime: 180,
        servings: 12
      },
      {
        id: 8,
        title: 'Маффины с черникой',
        description: 'Воздушные маффины с ягодами',
        images: ['/images/muffin.jpg'],
        difficulty: 'Начинающий',
        cookingTime: 45,
        servings: 12
      },
      {
        id: 9,
        title: 'Пирог с яблоками',
        description: 'Домашний пирог с яблоками и корицей',
        images: ['/images/applepie.jpg'],
        difficulty: 'Средний',
        cookingTime: 90,
        servings: 8
      }
    ]);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <img src="/images/logo.jpg" alt="Минскхлебпром" style={{ maxHeight: 90 }} />
          <IconButton 
            color="primary" 
            onClick={() => navigate('/profile')}
            sx={{ 
              backgroundColor: '#f5f5f5',
              '&:hover': { backgroundColor: '#e0e0e0' }
            }}
          >
            <PersonIcon />
          </IconButton>
        </Box>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Школа хлебопечения
        </Typography>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} centered sx={{ mb: 4 }}>
          <Tab label="Рецепты" />
          <Tab label="Видеоуроки" />
          <Tab label="Мастер-классы" />
        </Tabs>
        {tab === 0 && (
          <>
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="Поиск рецептов"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <TextField
                select
                label="Сложность"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ minWidth: 200 }}
              >
                <MenuItem value="all">Все уровни</MenuItem>
                <MenuItem value="Начинающий">Начинающий</MenuItem>
                <MenuItem value="Средний">Средний</MenuItem>
                <MenuItem value="Продвинутый">Продвинутый</MenuItem>
              </TextField>
              <Button variant="contained" color="secondary" onClick={() => setTab(1)}>
                Смотреть видеоуроки
              </Button>
            </Box>
            <Grid container spacing={3}>
              {recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                  <RecipeCard recipe={recipe} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {tab === 1 && <VideoLessons />}
        {/* {tab === 2 && <MasterClasses />} */}
      </Box>
    </Container>
  );
};

export default Home; 