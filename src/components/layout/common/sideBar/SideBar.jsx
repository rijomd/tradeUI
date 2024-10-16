import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import { Box, Chip, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

import { LogoSection } from '../logoSection';
import { REACT_APP_VERSION } from 'service/AuthConstants';
import { DrawerWidthCommon } from 'themes/constants/ThemeConstants';
import { logOutAction } from 'modules/auth/reducer/AuthSlice';

import LogoutIcon from 'assets/icons/logout.svg';
import { getAuthSideBars } from 'service/AuthMethods';
import { LogoutPopUp } from './LogoutPopUp';

export const MemorizedSidebar = ({ drawerOpen, drawerToggle = () => { }, window }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const authSlice = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = React.useState(false);

  const logOut = () => {
    localStorage.clear();
    dispatch(logOutAction());
    setTimeout(() => {
      navigate("/login");
    }, 600);
  }

  const menuList = React.useMemo(() => (<List>
    {getAuthSideBars() === 0 && <ListItemText
      primary={
        <Typography variant={'body1'} color="inherit" sx={{ textAlign: "center" }}>
          No menus found
        </Typography>
      }
    />}
    {getAuthSideBars()?.map((item, index) => {
      const selected = location.pathname?.toLocaleLowerCase() === item.path?.toLocaleLowerCase();
      return <ListItemButton
        key={index}
        disabled={item.disabled}
        sx={{
          borderRadius: '8px',
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: 'inherit',
          py: 1,
          pl: `24px`
        }}
        selected={selected}
        onClick={() => navigate(item?.path)}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: 18, paddingRight: 1 }}>  <img src={item.icon} />  </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={'body1'} color="inherit">
              {item?.menuName}
            </Typography>
          }
        />
      </ListItemButton>
    })}
  </List>), [authSlice.auth, location.pathname])

  const footerSection = () => {
    return (<Box className="footer-section">
      <Box className="logout-section" sx={{ background: "#FFFFFF1A" }} onClick={() => setIsOpen(true)}>
        <img src={LogoutIcon} />
        <Typography variant='body1' pl={.5}>Log Out</Typography>
      </Box>
      <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
        <Chip label={REACT_APP_VERSION} disabled color="secondary" size="small" sx={{ cursor: 'pointer' }} />
      </Stack>
    </Box >);
  }

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
        >
          {menuList}
          {footerSection()}
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          {menuList}
          {footerSection()}
        </Box>
      </MobileView>
    </>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? DrawerWidthCommon : 'auto' }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: DrawerWidthCommon,
            background: theme.palette.background.paperDrawer,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px'
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
      // color="inherit"
      >
        {drawer}
      </Drawer>

      <LogoutPopUp isOpen={isOpen} handleClose={() => { setIsOpen(close) }} handleSubmit={() => logOut()} />
    </Box>
  );
};

export const Sidebar = React.memo(MemorizedSidebar);
