import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import getStyles from './styles';
import Navbar from '../Navbar';
import { KeyboardArrowRightRounded } from '@mui/icons-material';
import { travel1, travel2, travel3 } from '../../../assest';
import Testimonial from '../Testimonial';
import Footer from '../../Footer';

const Banner = () => {
  const styles = getStyles();
  const data1 = [
    {
      "imgSrc": travel1,
      "altText": "Attractive Tour Packages",

    },
    {
      "imgSrc": travel2,
      "altText": "Travel Insurance Coverage",

    },
    {
      "imgSrc": travel3,
      "altText": "24/7 Customer Support",

    }
  ];

  return (
    <Box>
      <Navbar />
    <Box sx={styles.bannerdowntext}>      
      <Box sx={styles.bannerback}>
        <Box sx={styles.bannerText}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Typography variant='body1' sx={styles.bannersubTitle}>Travel Agency</Typography>
              <Typography variant="h2">Plan Tours</Typography>
              <Typography variant="h2"> To Dream Locations In Just A Click!</Typography>
              <Button variant="contained" size='large' sx={styles.booknowbtn} endIcon={<KeyboardArrowRightRounded />}>Book Now</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{margin:'5rem 0rem'}}>
        <Grid container direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Typography variant="h3" sx={styles.leftText}>Travel For The Best Experience</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Grid container direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
              {data1.map((item, index) => (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index} sx={{textAlign:'center'}}>
                  <img src={item.imgSrc} alt={item.altText} style={styles.img1} />
                  <Typography variant="body1" sx={styles.rightText}>{item.altText}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Testimonial/>
      <Container maxWidth="xl">
        <Box sx={styles.bgimg}>
          <Box sx={styles.center}>
            <Typography variant='h5' style={styles.flexAll}> Ready To Travel With Us On Your Next Trip?</Typography>
            <Button style={styles.Packagebtn} >See Your Package</Button>
          </Box>
        </Box>
      </Container>
    </Box>
    <Footer/>
    </Box>
    
  )
}

export default Banner
