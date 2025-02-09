import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PeopleIcon from "@mui/icons-material/People";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Testi_img1, Testi_img2, Testi_img3 } from '../../../assest';
import getStyles from './styles';

const Testimonial = () => {
  const [screenSize, setScreenSize] = useState(4);
  const styles = getStyles()
  useEffect(() => {
    size();
  }, []);
  const size = () => {
    if (window.innerWidth > 1440) {
      setScreenSize(4);
    } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
      setScreenSize(4);
    } else if (window.innerWidth <= 1024 && window.innerWidth > 992) {
      setScreenSize(4);
    } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
      setScreenSize(4);
    } else if (window.innerWidth <= 768 && window.innerWidth > 575) {
      setScreenSize(4);
    } else {
      setScreenSize(1);
    }
  };
  const tourData = [
    {
      id: 1,
      image: Testi_img1,
      title: "Munnar & Vattavada - 3D/2N",
      price: "₹5000",
      people: 50,
      photos: 1,
    },
    {
      id: 2,
      image: Testi_img2,
      title: "Ooty & Coonoor - 3D/2N",
      price: "₹5500",
      people: 45,
      photos: 2,
    },
    {
      id: 3,
      image: Testi_img3,
      title: "Munnar & Vattavada - 3D/2N",
      price: "₹5000",
      people: 50,
      photos: 1,
    },
    {
      id: 4,
      image: Testi_img1,
      title: "Ooty & Coonoor - 3D/2N",
      price: "₹5500",
      people: 45,
      photos: 2,
    },

  ];
  return (
    <Box>
      <Swiper
        slidesPerView={screenSize}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: orange;"></span>`;
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ paddingBottom: "30px" }}
      >
        {tourData.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia component="img" height="180" image={tour.image} alt={tour.title} />
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={styles.tourcrd}>
                <Box display="flex" alignItems="center">
                  <PeopleIcon sx={{ fontSize: 18, color: "gray" }} />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    {tour.people}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CameraAltIcon sx={{ fontSize: 18, color: "gray" }} />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    {tour.photos}
                  </Typography>
                </Box>
              </Box>
              <CardContent>

                <Typography variant="h6" sx={{ mt: 1 }}>
                  {tour.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  From
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                  {tour.price}
                </Typography>
                <Typography variant="body2" color="primary" sx={{ mt: 1, cursor: "pointer" }}>
                  Explore →
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Testimonial;
