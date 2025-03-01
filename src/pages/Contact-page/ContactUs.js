import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import getStyles from './styles';
import Navbar from '../Homepage/Navbar';
import Footer from '../Footer';

const ContactUs = () => {
  const styles = getStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formattedDate, setFormattedDate] = useState("");

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // Disable past dates
  const disablePastDates = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <Box>
      <Navbar />
      <Box>
        <Typography sx={styles.title} variant='h3' textAlign='center'> <span style={styles.home}>Home /</span> Contact Us</Typography>
      </Box>
      <Grid container spacing={2} direction='row' alignItems="center" justifyContent="center" sx={{ width: '97%', margin: '0px auto' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box sx={styles.contactform}>
            <Typography variant='h4'>Get In Touch</Typography>
            <Typography variant='para' sx={{ color: 'gray' }}>  Contact us for any of your queries. We are here to help you.</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    margin="normal"
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    margin="normal"
                  />
                )}
              />

              <Controller
                name="destinationDate"
                control={control}
                rules={{ required: "Destination date is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Destination Date"
                    type="date"
                    fullWidth
                    error={!!errors.destinationDate}
                    helperText={errors.destinationDate?.message}
                    value={formattedDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value < disablePastDates()) {
                        setFormattedDate("");
                        alert("Past dates are not allowed!");
                      } else {
                        setFormattedDate(value);
                      }
                    }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: disablePastDates(), // Disable past dates
                    }}
                  />
                )}
              />
              <Controller
                name="numberOfPeople"
                control={control}
                rules={{
                  required: "Number of people is required",
                  min: {
                    value: 1,
                    message: "At least 1 person is required",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Number of People"
                    type="number"
                    fullWidth
                    error={!!errors.numberOfPeople}
                    helperText={errors.numberOfPeople?.message}
                    margin="normal"
                  />
                )}
              />
              <Box sx={{textAlign:'end'}}>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 1, textTransform: 'none',background:'#fdd835',color:'#fff' }}>
                  Submit Form
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <iframe
            style={{ borderRadius: '15px', border: 0, width: '100%', marginTop: '50px' }}
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3730.9500954897703!2d78.13120084502243!3d9.930841232529497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTUnNTEuNSJOIDc4wrAwOCcwMS4xIkU!5e0!3m2!1sen!2sin!4v1722334469432!5m2!1sen!2sin"
            width="500"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
      <Footer />
    </Box>

  );
};

export default ContactUs;
