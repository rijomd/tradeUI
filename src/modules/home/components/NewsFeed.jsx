import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FormButtonField } from 'components/formElements/FormButtonField';

export const NewsFeed = ({ item = {}, handleSubmit, isHideButton }) => {
    const theme = useTheme();
    const seeMore = <span style={{ color: theme.palette.secondary[200], cursor: "pointer" }}>... See More</span>;

    return (
        <Grid container spacing={2} >
            <Grid item md={5} xs={12} lg={5} xl={5} sx={{ display: { xs: "none", md: 'block' } }}>
                <img src={item?.imageUrl} />
            </Grid>
            <Grid item md={7} xs={12} lg={7} xl={7} pr={1}>
                <Typography variant='h3'>
                    {item?.title} {item?.title && <br />}
                    <span style={{ color: theme.palette.secondary[200] }}>
                        {item?.subTitle}
                    </span>
                </Typography>
                <Box className="news-letter-content">
                    <Typography variant='body1'>
                        {item?.content?.length > 500 ? (
                            <>
                                {item?.content.substring(0, 500)}
                                {seeMore}
                            </>
                        ) : (item.content)}
                    </Typography>
                </Box>
                {!isHideButton && <FormButtonField onClick={handleSubmit} size="small" fullWidth={false}
                    label="View Details" sx={{ fontWeight: 600, textTransform: "capitalize", padding: "4px 32px" }}>
                    View Details
                </FormButtonField>}
            </Grid>
        </Grid>
    )
}
