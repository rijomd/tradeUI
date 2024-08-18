import { styled } from '@mui/material/styles';
import Image from 'assets/images/404.png';

export const ErrorNotFound = () => {

    const PageWrapper = styled('div')(({ theme }) => ({
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
        <img src={Image} alt="404 ERROR" />
    </PageWrapper>)
}
