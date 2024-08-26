import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { newsData } from '../config/Constants';
import { useMobile } from 'components/hooks/Hook';
import { FormButtonField } from 'components/formElements/FormButtonField';

export const NewsSection = ({ }) => {
    const items = ["Trading News 1", "Trading News 2", "Trading News 3", "Trading News 4", "Trading News7", "Trading News 6", "Trading News 5"];
    const isMobile = useMobile();
    const theme = useTheme();

    const handleSubmit = () => {

    }

    return (
        <>
            <Box className='news-letter-box'>
                <Container >
                    <Box className="newsSection-scroll-container">
                        <Box className="newsSection-scroll-content">
                            {items.concat(items).map((item, index) => (
                                <Box className="newsSection-scroll-item" key={index}>
                                    {item}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ paddingTop: "32px" }}>
                        <Swiper
                            slidesPerView={isMobile ? 1 : 1.5}
                            centeredSlides={false}
                            modules={[Pagination]}
                            pagination={{
                                type: 'bullets',
                            }}
                            className="mySwiper"
                        >
                            {newsData?.length > 0 && newsData.map((item, key) => {
                                const seeMore = <span style={{ color: theme.palette.secondary[200], cursor: "pointer" }}>... See More</span>;
                                return <SwiperSlide key={key} onClick={() => { }} className='news-letter-container'>
                                    <Grid container spacing={2} >
                                        <Grid item md={5} xs={12} lg={5} xl={5} sx={{ display: { xs: "none", md: 'block' } }}>
                                            <img src={item.imageUrl} />
                                        </Grid>
                                        <Grid item md={7} xs={12} lg={7} xl={7} pr={1}>
                                            <Typography variant='h3'>
                                                {item.title} <br />
                                                <span style={{ color: theme.palette.secondary[200] }}>
                                                    {item.subTitle}
                                                </span>
                                            </Typography>
                                            <Box className="news-letter-content">
                                                <Typography variant='body1'>
                                                    {item.content?.length > 500 ? (
                                                        <>
                                                            {item.content.substring(0, 500)}
                                                            {seeMore}
                                                        </>
                                                    ) : (item.content)}
                                                </Typography>
                                            </Box>
                                            <FormButtonField onClick={handleSubmit} size="small" fullWidth={false}
                                                label="View Details" sx={{ fontWeight: 600, textTransform: "capitalize", padding: "4px 32px" }}>
                                                View Details
                                            </FormButtonField>
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

