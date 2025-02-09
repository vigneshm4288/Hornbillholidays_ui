import { mainLogo, packingbg } from "../../../assest";

const getStyles = () => {
    return {
        bannerback: {
            height: '100vh !important',
            backgroundImage: `url(${mainLogo})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '25px',
            margin: '30px auto',
        },
        bannerText: {
            padding: '8rem 8rem',
            color: '#fff'
        },
        booknowbtn: {
            marginTop: '10px',
            background: '#fdd835',
            color: '#fff',
            fontWeight: '600'
        },
        bannersubTitle: {
            backgroundColor: '#FFFFFF1A',
            padding: '10px 24px',
            borderStyle: 'solid',
            borderWidth: '1px 1px 1px 1px',
            borderColor: '#FFFFFF26',
            borderRadius: '10px 10px 10px 10px',
            width: '100%',
            maxWidth: '105px',
            marginBottom: '10px'
        },
        bannerdowntext: {
            width: '97%',
            margin: '0px auto',
        },
        img1: {
            width: '100%',
            maxWidth: '60px'
        },
        leftText: {
            fontWeight: '600',
        },
        rightText: {
            fontSize: '25px',
            fontStyle: 'italic',
            fontWeight: '600'
        },
        bgimg: {
            background: `url(${packingbg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '250px',
            marginTop: '50px',
            borderRadius: '25px',
            '@media (max-width: 768px)': {
                height: '250px',
                marginTop: '30px',
            },
        },

        center: {
            textAlign: 'center',
        },
        flexAll: {
            paddingTop: '80px',
            color: '#fff',
            fontWeight: '600',
            fontSize: '35px',

            '@media (max-width: 992px)': {
                paddingTop: '80px',
                fontSize: '28px',
            },
            '@media (max-width: 576px)': {
                paddingTop: '30px',  // Removed !important
                fontSize: '22px',
            },
        },
        Packagebtn: {
            backgroundColor: '#FEC508',
            color: '#000',
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
    }
}
export default getStyles;