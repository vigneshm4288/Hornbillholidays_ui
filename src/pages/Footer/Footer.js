import { Box, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import getStyles from './styles'
import { footerLogo } from '../../assest'
import { facebook } from '../../assest'
import { instagram } from '../../assest'
const Footer = () => {
    const styles = getStyles();
    return (
        <>
            <Box sx={styles.footerbg}>
                    <Grid
                        style={styles.mt_1}
                        container
                        direction="row"
                        justifyContent="flex-start"
                        // alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={2}>
                            <img style={styles.logo} src={footerLogo} alt="logo" />

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Typography variant='h5' style={styles.title}>Company policies</Typography>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Terms & Conditions</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Privacy Policy</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Cancellation & Refund</Typography>
                                    </ListItemButton>
                                </ListItem>

                            </List>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Typography variant='h5' style={styles.title}>Contact Us</Typography>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Velu Nagar 2nd street,Kulamangalam Main Road,kosakulam,madurai-01</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Phone : +91 9384176961</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Phone : +91 9443718606</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Email : hornbillholidays5@gmail.com </Typography>
                                    </ListItemButton>
                                </ListItem>

                            </List>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={1}></Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Typography variant='h5' style={styles.title}>Quick links</Typography>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Home</Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Places to Visit </Typography>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component="a"
                                        href="#simple-list"
                                        sx={styles.listitem}
                                    >
                                        <Typography>Holidays </Typography>
                                    </ListItemButton>
                                </ListItem>

                            </List>
                            <Typography variant="h5" style={styles.FlowUstitle}>
                                Flow Us
                            </Typography>
                            <a
                                href="https://www.facebook.com/HornbillHoliday/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <img style={styles.FlowUS} src={facebook} alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/hornbillholidays/?igsh=a2syc2pndWR6Y2Ju#/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <img style={styles.FlowUS} src={instagram} alt="facebook" />
                            </a>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}

export default Footer