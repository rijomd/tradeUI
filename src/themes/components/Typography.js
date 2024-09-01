export default function ThemeTypography(theme) {
  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.colors?.textTitle,
      fontSize: '0.75rem'
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.colors?.textTitle,
      fontWeight: 500
    },
    h4: {
      fontSize: '1rem',
      color: theme.colors?.textTitle,
      fontWeight: 600
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.colors?.textTitle,
      fontWeight: 600
    },
    h2: {
      fontSize: '1.5rem',
      color: theme.colors?.textTitle,
      fontWeight: 700
    },
    h1: {
      fontSize: '2.125rem',
      color: theme.colors?.textTitle,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.colors?.textBody
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.colors?.textSecondary
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.colors?.textSecondary,
      fontWeight: 400
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
      color: theme.colors?.textBody
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.colors?.textPrimary
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.colors?.textSecondary,
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.colors?.textSecondary,
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px'
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem'
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem'
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem'
    }
  };
}
