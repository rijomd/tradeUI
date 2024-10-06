import React from 'react';
import { Box, Container } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { newsData } from '../config/Constants';
import { useMobile } from 'components/hooks/Hook';
import { NewsFeed } from './NewsFeed';

import '../style/newsFeedStyle.css';

export const NewsSection = ({ }) => {
    const items = ["Trading News 1", "Trading News 2", "Trading News 3", "Trading News 4", "Trading News7", "Trading News 6", "Trading News 5"];
    const isMobile = useMobile();

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
                                return <SwiperSlide key={key} onClick={() => { }} className='news-letter-container'>
                                    <NewsFeed item={item} handleSubmit={handleSubmit} characters={500} />
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

