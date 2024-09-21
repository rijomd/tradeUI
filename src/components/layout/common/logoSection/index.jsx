import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

import { config } from 'service/AuthConstants';

export const LogoSection = () => {

  return (
    <ButtonBase
      disableRipple
      component={Link} to={config.defaultPath}
    >
      GROWWISE
    </ButtonBase>
  );
};

