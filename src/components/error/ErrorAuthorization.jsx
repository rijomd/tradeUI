import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'assets/images/403.png';

const ErrorAuthorization = () => {

  const PageWrapper = styled('div')(({ }) => ({
    height: 'calc(100vh - 100px)',
    position: 'relative',
    overflow: 'hidden',
    padding: '8px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // background: theme.palette.secondary.light
  }));

  return (<PageWrapper>
    <img src={Image} alt="403 ERROR" />
  </PageWrapper>)
}

export default ErrorAuthorization;
