const getStyles = () => {
    return {
        reviewsbackground: {
            color: '#000',
            padding: '5px',
            textAlign: 'center',
            '@media (max-width: 768px)': {
                padding: '10px',
            },
            '@media (max-width: 480px)': {
                padding: '15px',
            },
        },
        crdSec: {
            borderRadius: '12px',
            padding: '45px 40px',
            margin: '2px',
            textAlign: 'left',
            height: '280px',
            overflowX: 'hidden',
            overflowY: 'auto',
            boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            wordBreak: 'break-word',
            '@media (max-width: 1024px)': {
                padding: '35px 30px',
                height: '220px',
            },
            '@media (max-width: 768px)': {
                padding: '25px 20px',
                height: 'auto',
            },
            '@media (max-width: 480px)': {
                padding: '15px 10px',
                height: 'auto',
            },
        },
        leftText: {
            fontWeight: '600',
            marginBottom:'5px',
            '@media (max-width: 576px)': {
                fontSize: '25px',
            },
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            position: 'relative',
        },
    };
};

export default getStyles;
