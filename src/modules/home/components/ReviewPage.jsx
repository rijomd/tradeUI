import React from 'react';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { reviewData } from "../config/Constants";
import { useMobile } from 'components/hooks/Hook';

const CustomArrow = ({ direction, onClick }) => {
    return (
        <span onClick={onClick} className={`custom-arrow ${direction}`}>
            {direction === 'prev' ? '<' : '>'}
        </span>
    );
};

const RatingSection = ({ value }) => {
    return (
        <Rating
            name="review-rating"
            value={value}
            readOnly
            size='small'
            sx={{ color: "#fff" }}
        />
    );
}

export const ReviewPage = () => {
    const theme = useTheme();
    const sliderRef = React.useRef(null);
    const isMobile = useMobile(false);

    const goToPrevSlide = () => {
        if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (sliderRef.current && sliderRef.current.swiper) {
            sliderRef.current.swiper.slideNext();
        }
    };

    return (
        <Container>
            <h1 className="content-head-text">
                WHAT OUR <br /> <span style={{ color: theme.palette.secondary[200] }}>CUSTOMERS TEAM</span> SAYS ABOUT US.
            </h1>

            <Box>
                <Swiper
                    slidesPerView={isMobile ? 1 : 4}
                    centeredSlides={false}
                    ref={sliderRef}
                    modules={[Pagination, Navigation]}
                    pagination={{
                        type: 'bullets',
                    }}
                    className="mySwiper"
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {reviewData?.length > 0 && reviewData.map((item, key) => {
                        const seeMore = <span style={{ color: theme.palette.secondary[200], cursor: "pointer" }}>... See More</span>;
                        return <SwiperSlide key={key} onClick={() => { }} className='review-container'>
                            <Grid container spacing={2} >
                                <Grid item md={4} xs={4} lg={4} xl={4}>
                                    {/* <img src={api_Image + item.image} className="slide-image" /> */}
                                    <img src={item.imageUrl} className="review-image" />
                                </Grid>
                                <Grid item md={8} xs={8} lg={8} xl={8}>
                                    <Box className="review-rating">
                                        <Typography variant='h5'>{item.name}</Typography>
                                        <RatingSection value={item.rating} />
                                    </Box>
                                </Grid>
                                <Grid item md={12} xs={12} lg={12} xl={12} >
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12} lg={12} xl={12}>
                                            <Typography variant='body1'>
                                                {item.review?.length > 350 ? (
                                                    <>
                                                        {item.review.substring(0, 500)}
                                                        {seeMore}
                                                    </>
                                                ) : (item.review)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} xs={12} lg={12} xl={12} pb={1}>
                                    {/* <Box className="review-rating-date">
                                        <Typography sx={{ color: theme.palette.grey[500] }} variant='subtitle2'>{item.createdDate}</Typography>
                                        <Typography sx={{ color: theme.palette.grey[500] }} variant='subtitle2'>{item.createdTime}</Typography>
                                    </Box> */}
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    })}
                    <Box className="swiper-button-prev">
                        <CustomArrow direction="prev" onClick={goToPrevSlide} />
                    </Box>
                    <Box className="swiper-button-next">
                        <CustomArrow direction="next" onClick={goToNextSlide} />
                    </Box>
                </Swiper>
            </Box>

        </Container>
    )
}

