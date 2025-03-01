import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import getStyles from './styles';


const Reviews = () => {
    const styles = getStyles();
    const reviews = [
        {
            id: 1,
            name: 'Preethi P',
            review: 'The trip was impressively well-planned, with every detail carefully managed. The transportation arrangements were both efficient and accommodating, making the journey comfortable and hassle-free from start to finish.Thank you for everything ❤️',
            rating: 5,
        },
        {
            id: 2,
            name: 'Selva Muthu',
            review: 'It was very good we are were very good it gave us a new happiness and fun it was very wonderful. thank you for the guidelines and hornbill Holidays..💗 ......',
            rating: 5,
        },
        {
            id: 3,
            name: 'Harane Chengeesva',
            review: 'Had a wonderful experience in the trip. Cherished lots of memories in vagamon tour. Special thanks to Hornbill holidays for arranging budget friendly package, food was amazing and Kind hearted Travel guide. Overall everything is good. I would recommend this to people who are planning for a students IV trip',
            rating: 5,
        },
        {
            id: 4,
            name: 'Abaaranjita AR',
            review: 'Had a great and memorable experience. The resort was amazing and the food was also good. We made lot of changes last minute but without any hesitation they made the requested requirements on time. The guide and tempo driver was very friendly and guided us properly.',
            rating: 5,
        },
        {
            id: 5,
            name: 'Priya dharshini Priya',
            review: 'Best tour organized by hornbill holidays and the guide who accompanied us also so friendly and took us to many places and guided us very nicely. Food they provided also so good',
            rating: 5,
        },
        {
            id: 6,
            name: 'Mᴜʀᴜɢᴀ Dᴇᴠɪsʜ',
            review: 'Good guidelines than best traval services and wonderful 3 star hotel rooms and services ,food is ultimate must visit again',
            rating: 5,
        },
        {
            id: 7,
            name: 'Lakshmi Priya',
            review: 'Guides who accompanied us was good and friendly. They provided us an amazing resort to stay. The breakfast and dinner was totally good. Over all they covered many places as they given . This was our second time with these hornbill they are really doing an amazing job',
            rating: 5,
        },
        {
            id: 8,
            name: 'Kesavan B',
            review: 'Good service budget friendly tour packs enjoyed the trip. Trust worthy, Keep doing good hornbill holidays.',
            rating: 5,
        },
    ];
    const [screenSize, setScreenSize] = useState(4);
    useEffect(() => {
        size();
    }, []);
    const size = () => {
        if (window.innerWidth > 1440) {
            setScreenSize(3);
        } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
            setScreenSize(3);
        } else if (window.innerWidth <= 1024 && window.innerWidth > 992) {
            setScreenSize(3);
        } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
            setScreenSize(2);
        } else if (window.innerWidth <= 768 && window.innerWidth > 575) {
            setScreenSize(2);
        } else {
            setScreenSize(1);
        }
    };
    const getRandomColor = (index) => {
        const colors = [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700',
            '#FF8C00', '#8A2BE2', '#00FF7F', '#800080', '#FF6347'
        ];
        return colors[index % colors.length];
    };


    return (
        <Box sx={styles.reviewsbackground}>
            <Box sx={styles.header}>
                {/* <Typography variant="h4" sx={styles.leftText}> Hear From Our Happy Customers
                    😊
                </Typography> */}
                <Typography variant="h4" sx={styles.leftText}>Memories From Our Travelers
                    😊
                </Typography>
            </Box>
            <Swiper
                // navigation={window.innerWidth >= 768 ? true : false}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={screenSize}

            >
                {reviews && reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <Card sx={styles.crdSec}>
                            <Box display="flex" alignItems="center" gap={2}>
                                {/* Set a random background color based on the index */}
                                <Avatar sx={{ backgroundColor: getRandomColor(index) }}>
                                    {review.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography fontWeight={600}>{review.name}</Typography>
                                    <Typography variant="body2" color="gray">{review.role}</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" mt={1}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        sx={{ color: 'gold' }}
                                    />
                                ))}
                            </Box>
                            <Typography mt={2} color="gray">{review.review}</Typography>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Reviews;

