import React from 'react'
import getStyles from './styles'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { pack1 } from '../../../assest'
import Footer from '../../Footer'
import Navbar from '../../Homepage/Navbar'
const Packages = () => {
  const styles = getStyles();
  const destinations = [
    {
      "price": "$200 / Per Person",
      "rating": "4.8 (1.2k Reviews)",
      "name": "Baros, Maldives",
      "description": "Baros is a small island located in the Maldives known for its luxury resorts, white sandy beaches, and crystal clear waters.",
      "image": pack1
    },
    {
      "price": "$150 / Per Person",
      "rating": "4.6 (900 Reviews)",
      "name": "Bora Bora, French Polynesia",
      "description": "Bora Bora is a tropical paradise famous for its turquoise lagoon, coral reefs, and luxurious overwater bungalows.",
      "image": pack1
    },
    {
      "price": "$180 / Per Person",
      "rating": "4.7 (1.1k Reviews)",
      "name": "Santorini, Greece",
      "description": "Santorini is known for its stunning sunsets, whitewashed houses, and blue-domed churches overlooking the Aegean Sea.",
      "image": pack1
    },
    {
      "price": "$180 / Per Person",
      "rating": "4.7 (1.1k Reviews)",
      "name": "Santorini, Greece",
      "description": "Santorini is known for its stunning sunsets, whitewashed houses, and blue-domed churches overlooking the Aegean Sea.",
      "image": pack1
    },
    {
      "price": "$180 / Per Person",
      "rating": "4.7 (1.1k Reviews)",
      "name": "Santorini, Greece",
      "description": "Santorini is known for its stunning sunsets, whitewashed houses, and blue-domed churches overlooking the Aegean Sea.",
      "image": pack1
    },
    {
      "price": "$180 / Per Person",
      "rating": "4.7 (1.1k Reviews)",
      "name": "Santorini, Greece",
      "description": "Santorini is known for its stunning sunsets, whitewashed houses, and blue-domed churches overlooking the Aegean Sea.",
      "image": pack1
    }
  ];

  return (
    <Box>
      <Navbar />
      <Box sx={styles.bannerdowntext}>
        <Typography sx={styles.title} variant='h3' textAlign='center'> <span style={styles.home}>Home /</span> Tour Packages</Typography>
        <Grid
          style={styles.mt_5}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={5}
        >

          {destinations && destinations.map((field, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>

              <>
                <div class="card" style={{height:'auto'}}>
                  <img style={styles.packageImg} src={field.image} alt={field.name} />

                  <Box>
                    <Box sx={styles.flex_mt}>
                      <Typography variant='p' style={styles.price}>{field.price}</Typography>
                      <Typography variant='p' style={styles.rating}>⭐ {field.rating}</Typography>
                    </Box>
                    <Typography variant='h5' style={styles.name}>{field.name}</Typography>
                    <Typography variant='p'>{field.description}</Typography>

                  </Box>
                  <Button style={styles.btn} >See Details</Button>
                </div>
              </>


            </Grid>
          ))}
        </Grid>

      </Box>
      <Container maxWidth="lg">
        <Box sx={styles.bgimg}>
          <Box sx={styles.center}>
            <Typography variant='h5' style={styles.flexAll}> Ready To Travel With Us On Your Next Trip?</Typography>
            <Button style={styles.Packagebtn} >See Your Package</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Packages