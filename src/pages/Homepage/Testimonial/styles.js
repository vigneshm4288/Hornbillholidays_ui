const getStyles = () => {
    return {
        tourcrd: {
            width: '70%',
            position: 'absolute',
            background: '#fff',
            left: '35px',
            padding: '10px 15px',
            bottom: '117px',
            borderRadius: '4px',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            '@media (max-width: 1200px)': {
                width: '80%',
                left: '20px',
                bottom: '100px'
            },
            '@media (max-width: 768px)': {
                width: '90%',
                left: '10px',
                bottom: '142px',
                flexDirection: 'row',
                padding: '10px',
            },
            '@media (max-width: 480px)': {
                width: '80%',
                left: '25px',
                bottom: '150px',
                flexDirection: 'row',
                padding: '10px',
            }
        },
        tourcrdposdiv: {
            display: "flex",
            alignItems: "center",
            '@media (max-width: 768px)': {
                justifyContent: 'center',
            }
        },
        mediaImg: {
            borderRadius: '15px',
            height: '200px',
            position: 'relative',
            '@media (max-width: 768px)': {
                height: '150px',
            },
            '@media (max-width: 480px)': {
                height: '200px',
            }
        },
        crdDivs: {
            maxWidth: '345px',
            borderRadius: '15px',
            '@media (max-width: 768px)': {
                maxWidth: '100%',
                marginBottom: '10px',
            },
            '@media (max-width: 480px)': {
                marginBottom: '8px',
            }
        },
        crdContentTesti: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop:'10px'
        }
    }
}
export default getStyles;
