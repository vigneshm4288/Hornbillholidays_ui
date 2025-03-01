import React from 'react';
import './style.css';
import { pack1 } from '../../assest';
import { Box, Grid, Container, Typography } from '@mui/material';
import Navbar from '../Homepage/Navbar';
import getStyles from './styles';
import Footer from '../Footer';
const destinations = [
  {
    image: pack1,
    title: 'Oia, Greece',
    rating: 4.8,
    reviews: '1.2k Reviews'
  },
  {
    image: pack1,
    title: 'Grand Resort, MalBoxes',
    rating: 4.8,
    reviews: '1.2k Reviews'
  },
  {
    image: pack1,
    title: 'Annapurna, Nepal',
    rating: 4.8,
    reviews: '1.2k Reviews'
  },
];

const Destination = () => {
  const styles = getStyles();
  return (
    <>
      <Navbar />
      <Box>
        <Typography sx={styles.title} variant='h3' textAlign='center'> <span style={styles.home}>Home /</span> Destination</Typography>
        <Container sx={{ mt: 2 }}>
          <Grid container direction="row" justifyContent="left" spacing={2}>
            {destinations.map((destination, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Box className="card">
                  <img src={destination.image} alt={destination.title} className="card-image" />
                  <Box className="card-content">
                    <h3 className="card-title">{destination.title}</h3>
                    {destination.rating && (
                      <Box className="card-rating">
                        <span className="star">★</span>
                        <span className="rating-value">{destination.rating}</span>
                        <span className="reviews">({destination.reviews})</span>
                      </Box>
                    )}
                  </Box>
                  <Box className="overlay" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};


export default Destination;
