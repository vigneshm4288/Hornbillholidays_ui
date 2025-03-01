const getStyles = () => {
    return {
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
        cardsContainer: {
            display: 'flex',
            gap: '1rem',
            padding: '1.5rem',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
          },
        
          card: {
            position: 'relative',
            width: '15rem',
            height: '24rem',
            borderRadius: '1rem',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.05)',
            },
          },
        
          cardImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s',
            ':hover': {
              transform: 'scale(1.05)',
            },
          },
        
          cardContent: {
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            color: 'white',
          },
        
          cardTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
          cardRating: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
            ':hover': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        
          star: {
            color: '#facc15',
            fontSize: '1.5rem',
          },
        
          ratingValue: {
            color: '#facc15',
            fontWeight: 600,
          },
        
          reviews: {
            color: '#ffffff',
            fontSize: '0.875rem',
          },
        
          overlay: {
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            ':hover': {
              backgroundColor: 'transparent',
            },
          },
       
        // cards_container: {
        //     display: 'flex',
        //     gap: '1rem',
        //     padding: '1.5rem',
        // //    minHight: '100vh',
        //    alignItems: 'center',
        //    justifyContent: 'center',
        //   },
        //   card: {
        //     position: 'relative',
        //     width: '15rem',
        //     height: '24rem',
        //     borderRadius: '1rem',
        //     overflow: 'hidden',
        //     cursor: 'pointer',
        //     transition: 'box-shadow 0.5s ease-in-out',
        //     // transition: 'transform 0.5s',
        //   },
        //   card_image:{
        //     width:'100%',
        //     height:'100vh',
        //     objectFit:'cover',
        //     transition:'box-shadow 0.5s ease-in-out',
        //     // transition: transform 0.5s,
        //   }
    }
}
export default getStyles