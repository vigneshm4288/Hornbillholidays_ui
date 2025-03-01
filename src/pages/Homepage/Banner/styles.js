import { mainLogo, packingbg } from "../../../assest";

const getStyles = () => {
    return {
        bannerback: {
            height: 'auto !important',
            backgroundImage: `url(${mainLogo})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '25px',
            margin: '30px auto',
            '@media (max-width: 1200px)': {
                height: 'auto',
            },
            '@media (max-width: 992px)': {
                height: 'auto',
                margin: '20px auto',
            },
            '@media (max-width: 768px)': {
                height: 'auto',
            },
            '@media (max-width: 576px)': {
                height: 'auto',
                margin: '0px auto',
            },
        },
        bannerText: {
            padding: '8rem 8rem',
            color: '#fff',
            '@media (max-width: 1200px)': {
                padding: '6rem 6rem',
            },
            '@media (max-width: 992px)': {
                padding: '4rem 4rem',
            },
            '@media (max-width: 768px)': {
                padding: '3rem 3rem',
            },
            '@media (max-width: 576px)': {
                padding: '2rem 2rem',
            },
        },
        booknowbtn: {
            marginTop: '10px',
            background: '#fdd835',
            color: '#fff',
            fontWeight: '600',
            '@media (max-width: 768px)': {
                fontSize: '14px',
                padding: '8px 15px',
            },
        },
        bannersubTitle: {
            backgroundColor: '#FFFFFF1A',
            padding: '10px 24px',
            borderStyle: 'solid',
            borderWidth: '1px 1px 1px 1px',
            borderColor: '#FFFFFF26',
            borderRadius: '10px 10px 10px 10px',
            width: '100%',
            maxWidth: '115px',
            marginBottom: '10px',
            '@media (max-width: 576px)': {
                maxWidth: '90px',
                padding: '8px 20px',
                fontSize: '14px',
            },
        },
        bannerdowntext: {
            width: '97%',
            margin: '10px auto',
        },
        img1: {
            width: '100%',
            maxWidth: '60px',
            '@media (max-width: 768px)': {
                maxWidth: '50px',
            },
            '@media (max-width: 576px)': {
                maxWidth: '40px',
            },
        },
        leftText: {
            fontWeight: '600',
            '@media (max-width: 576px)': {
                fontSize: '25px',
            },
        },
        rightText: {
            fontSize: '25px',
            fontStyle: 'italic',
            fontWeight: '600',
            '@media (max-width: 768px)': {
                fontSize: '20px',
            },
            '@media (max-width: 576px)': {
                fontSize: '18px',
            },
        },
        bgimg: {
            background: `url(${packingbg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '250px',
            marginTop: '50px',
            borderRadius: '25px',
            '@media (max-width: 1200px)': {
                height: '230px',
                marginTop: '40px',
            },
            '@media (max-width: 992px)': {
                height: 'auto',
                marginTop: '30px',
            },
            '@media (max-width: 768px)': {
                height: 'auto',
                marginTop: '20px',
            },
            '@media (max-width: 576px)': {
                height: 'auto',
                marginTop: '10px',
                paddingBottom: '10px',
            },
        },
        center: {
            textAlign: 'center',
            '@media (max-width: 576px)': {
                fontSize: '16px',
            },
        },
        flexAll: {
            paddingTop: '80px',
            color: '#fff',
            fontWeight: '600',
            fontSize: '35px',
            '@media (max-width: 1200px)': {
                fontSize: '32px',
                paddingTop: '70px',
            },
            '@media (max-width: 992px)': {
                fontSize: '28px',
                paddingTop: '60px',
            },
            '@media (max-width: 768px)': {
                fontSize: '24px',
                paddingTop: '10px',
            },
            '@media (max-width: 576px)': {
                fontSize: '22px',
                paddingTop: '10px',
            },
        },
        Packagebtn: {
            backgroundColor: '#FEC508',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            textDecoration: 'none',
            marginTop: '10px',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#000',
                color: '#FCD53F',
            },
            '@media (max-width: 576px)': {
                padding: '8px 15px',
                fontSize: '14px',
            },
        },
    };
};

export default getStyles;
