import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Tabs,
  Tab,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Chip,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const Profile = () => {
  const [tab, setTab] = useState(0);

  // Временные данные пользователя
  const user = {
    name: 'Касиния Саманкова',
    avatar: '/images/avatar.jpg',
    level: 'Средний',
    progress: 65,
    completedLessons: 12,
    totalLessons: 20,
    favoriteRecipes: 8,
    viewedRecipes: 15
  };

  // Временные данные для истории просмотров
  const history = [
    {
      id: 1,
      title: 'Домашний хлеб',
      date: '15.04.2025',
      time: '14:30',
      image: '/images/bread.jpg'
    },
    {
      id: 2,
      title: 'Круассан',
      date: '14.04.2025',
      time: '16:45',
      image: '/images/croissant.jpg'
    },
    {
      id: 3,
      title: 'Ржаной хлеб',
      date: '13.04.2025',
      time: '11:20',
      image: '/images/rye.jpg'
    }
  ];

  // Временные данные для избранных рецептов
  const favorites = [
    {
      id: 1,
      title: 'Багет',
      difficulty: 'Средний',
      cookingTime: 120,
      image: '/images/baget.jpg'
    },
    {
      id: 2,
      title: 'Песочное печенье',
      difficulty: 'Начинающий',
      cookingTime: 60,
      image: '/images/cookie.jpg'
    }
  ];

  // Временные данные для результатов обучения
  const learningProgress = [
    {
      id: 1,
      title: 'Основы хлебопечения',
      progress: 100,
      completed: true,
      date: '10.04.2025'
    },
    {
      id: 2,
      title: 'Работа с тестом',
      progress: 75,
      completed: false,
      date: 'В процессе'
    },
    {
      id: 3,
      title: 'Декоративная выпечка',
      progress: 30,
      completed: false,
      date: 'В процессе'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {/* Профиль пользователя */}
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={user.avatar}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Chip 
                  label={`Уровень: ${user.level}`}
                  color="primary"
                  sx={{ mb: 2 }}
                />
                <Box sx={{ width: '100%', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Прогресс обучения
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={user.progress} 
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {user.completedLessons} из {user.totalLessons} уроков завершено
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">{user.favoriteRecipes}</Typography>
                    <Typography variant="body2" color="text.secondary">Избранное</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">{user.viewedRecipes}</Typography>
                    <Typography variant="body2" color="text.secondary">Просмотрено</Typography>
                  </Box>
                </Box>
              </Box>
            </StyledPaper>
          </Grid>

          {/* Основной контент */}
          <Grid item xs={12} md={8}>
            <StyledPaper>
              <Tabs 
                value={tab} 
                onChange={(_, v) => setTab(v)}
                sx={{ mb: 3 }}
              >
                <Tab icon={<HistoryIcon />} label="История просмотров" />
                <Tab icon={<BookmarkIcon />} label="Избранное" />
                <Tab icon={<SchoolIcon />} label="Обучение" />
              </Tabs>

              {tab === 0 && (
                <List>
                  {history.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar src={item.image} variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.title}
                          secondary={
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <Typography variant="body2" color="text.secondary">
                                {item.date}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.time}
                              </Typography>
                            </Box>
                          }
                        />
                        <Button variant="outlined" size="small">
                          Смотреть
                        </Button>
                      </ListItem>
                      {index < history.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              )}

              {tab === 1 && (
                <Grid container spacing={2}>
                  {favorites.map((recipe) => (
                    <Grid item xs={12} sm={6} key={recipe.id}>
                      <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={recipe.image}
                          variant="rounded"
                          sx={{ width: 80, height: 80, mr: 2 }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6">{recipe.title}</Typography>
                          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            <Chip 
                              label={recipe.difficulty}
                              size="small"
                              color="primary"
                            />
                            <Chip
                              icon={<AccessTimeIcon />}
                              label={`${recipe.cookingTime} мин`}
                              size="small"
                            />
                          </Box>
                        </Box>
                        <Button variant="outlined" size="small">
                          Открыть
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}

              {tab === 2 && (
                <List>
                  {learningProgress.map((course, index) => (
                    <React.Fragment key={course.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: course.completed ? '#2ecc71' : '#f1c40f' }}>
                            {course.completed ? <CheckCircleIcon /> : <SchoolIcon />}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={course.title}
                          secondary={
                            <Box sx={{ mt: 1 }}>
                              <LinearProgress 
                                variant="determinate" 
                                value={course.progress}
                                sx={{ height: 8, borderRadius: 4, mb: 1 }}
                              />
                              <Typography variant="body2" color="text.secondary">
                                {course.date}
                              </Typography>
                            </Box>
                          }
                        />
                        <Button 
                          variant="contained" 
                          size="small"
                          disabled={course.completed}
                        >
                          {course.completed ? 'Завершено' : 'Продолжить'}
                        </Button>
                      </ListItem>
                      {index < learningProgress.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile; 