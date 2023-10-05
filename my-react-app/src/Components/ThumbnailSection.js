import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const ThumbnailSection = () => {
  const classes = useStyles();

  // Sample product data (you can replace it with your actual product data)
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      description: 'Description of Product 1',
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      description: 'Description of Product 2',
    },
    // Add more product objects as needed
  ];

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ThumbnailSection;
