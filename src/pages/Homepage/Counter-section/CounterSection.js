import React from 'react'
import getStyles from './Styles'
import { Box, Grid, Typography } from '@mui/material'
import { Testi_img1 } from '../../../assest'
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CounterSection = () => {
    const styles = getStyles()
    const stats = [
        { value: 10, suffix: "+", label: "Years of Experiences" },
        { value: 434, suffix: "+", label: "Destinations Covered" },
        { value: 35, suffix: "K+", label: "Total Happy Traveler's" },
    ];

    return (
        <Box>
            <Box sx={{ margin: '5rem 0rem' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Grid container direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <Typography variant="h3" sx={styles.leftText}>Enjoy Trip With Us! <br /> Experience Your  Imaginations <br />Coming To Life </Typography>
                            <Grid container direction="row" alignItems="flex-start" justifyContent="left" spacing={3} sx={{mt:3}}> 
                                {stats.map((stat, index) => (
                                    <Grid item sm={4} md={4} lg={4} key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 3 }}
                                        >
                                            <Box sx={{textAlign:'center'}}>
                                                <Typography variant='h4' sx={{fontWeight:800, fontStyle:'italic'}}>
                                                    <CountUp end={stat.value} duration={3} delay={0.5} />
                                                    {stat.suffix}
                                                </Typography>
                                                <Typography variant='para' sx={{fontWeight:600}}>{stat.label}</Typography>
                                            </Box>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <Grid container direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
                                <Box>
                                    <img src={Testi_img1} alt="Place_image" style={styles.imag_coun} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}

export default CounterSection
