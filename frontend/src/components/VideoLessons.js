import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const videoLessons = [
  {
    id: 1,
    title: 'Основы хлебопечения',
    description: 'Введение в хлебопечение для начинающих. Учимся работать с тестом и печью',
    videoUrl: 'https://www.youtube.com/embed/1RvfxsJjXQ0',
    preview: '/images/video1.png'
  },
  {
    id: 2,
    title: 'Выпекаем багет',
    description: 'Пошаговый мастер-класс по приготовлению французского багета',
    videoUrl: 'https://www.youtube.com/embed/jBpmZCCrOS0',
    preview: '/images/video2.jpg'
  },
  {
    id: 3,
    title: 'Круассаны дома',
    description: 'Секреты приготовления слоеных круассанов в домашних условиях',
    videoUrl: 'https://www.youtube.com/embed/-1cYsIpgmLM',
    preview: '/images/video3.jpg'
  },
  {
    id: 4,
    title: 'Ржаной хлеб на закваске',
    description: 'Классический рецепт ржаного хлеба на натуральной закваске',
    videoUrl: 'https://www.youtube.com/embed/79W6HIPYMqo',
    preview: '/images/video4.jpg'
  },
  {
    id: 5,
    title: 'Песочное тесто',
    description: 'Мастер-класс по приготовлению идеального песочного теста',
    videoUrl: 'https://www.youtube.com/embed/Z1eyNUnYFrU',
    preview: '/images/video5.jpg'
  },
  {
    id: 6,
    title: 'Домашний хлеб',
    description: 'Простой рецепт домашнего хлеба без специального оборудования',
    videoUrl: 'https://www.youtube.com/embed/Wawgsj7Y7Hc',
    preview: '/images/video6.jpg'
  }
];

const VideoLessons = () => (
  <Box>
    <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
      Видеоуроки по хлебопечению
    </Typography>
    <Grid container spacing={3}>
      {videoLessons.map((lesson) => (
        <Grid item xs={12} sm={6} md={4} key={lesson.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="iframe"
              height="200"
              src={lesson.videoUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{ border: 0 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {lesson.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {lesson.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default VideoLessons; 