import { packingbg } from '../../../assest'
const getStyles = () => {
    return {
        box: {
            marginTop: '50px',
            boxShadow: 24,
            borderRadius: '30px'
        },
        bannerdowntext: {
            width: '97%',
            margin: '0px auto',
        },
        mt_5: {
            marginTop: "50px"
        },

        title: {
            paddingTop: '10px',
            marginTop: '50px',
        },
        home: {
            color: 'gray',
            cursor: 'pointer',
            '&:hover': {
                color: 'black !important',
            }
        },
        card: {
            backgroundColor: '#252529',
            borderRadius: '15px',
            overflow: 'hidden',
            width: 300,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            // transition: transform 0.3s,
        },
        // .card:hover {
        //     transform: scale(1.05),
        // }

        packageImg: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '15px'
        },

        cardContent: {
            padding: '15px',
        },
        flex_mt: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: "10px 0px"

        },
        name: {
            fontWeight: '600',
            marginBottom: '10px'
        },
        price: {
            color: '#00bcd4',
            fontWeight: 'bold',
        },

        rating: {
            color: '#FEC508',
        },

        btn: {
            display: 'inline-block',
            backgroundColor: '#000',
            color: ' #fff',
            padding: '10px 20px',
            border: '1px solid #fff',
            borderRadius: '5px',
            textDecoration: 'none',
            marginTop: '10px',
            '&:hover': {
                color: '#FCD53F !important',
            }
        },
        // bgimg: {
        //     background: `url(${packingbg})`,
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     height: '250px',
        //     marginTop: '50px',
        // },
        // center:{
        //    textAlign:'center'
        // },
        // flexAll:{
            
        //     paddingTop:'130px',  
        //     color:'#fff',
        //     fontWeight:'600',
        //      fontSize: '35px'
        // },
        // Packagebtn :{
        //     backgroundColor: '#FCD53F',
        //     color: ' #000',
        //     padding: '10px 20px',
        //     border: 'none',
        //     borderRadius: '5px',
        //     textDecoration: 'none',
        //     marginTop: '10px',
        //     '&:hover': {
        //         color: '#FCD53F !important',
        //     }
        // }
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
export default getStyles