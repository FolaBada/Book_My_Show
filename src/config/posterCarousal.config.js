const settings ={
    infinite: true, 
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll:3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow:3,
                slidesToScroll:3
            }
        },
    ]
};

export default settings;