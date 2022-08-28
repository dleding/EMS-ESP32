import { FC, useState, useContext, ChangeEventHandler } from 'react';

import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Typography,
  Avatar,
  styled,
  TypographyProps,
  MenuItem,
  TextField
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { AuthenticatedContext } from '../../contexts/authentication';

import { I18nContext } from '../../i18n/i18n-react';
import type { Locales } from '../../i18n/i18n-types';
import { locales } from '../..//i18n/i18n-util';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';

const ItemTypography = styled(Typography)<TypographyProps>({
  maxWidth: '250px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

const LayoutAuthMenu: FC = () => {
  const { me, signOut } = useContext(AuthenticatedContext);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { locale, LL, setLocale } = useContext(I18nContext);

  const onLocaleSelected: ChangeEventHandler<HTMLInputElement> = async ({ target }) => {
    const loc = target.value as Locales;
    localStorage.setItem('lang', loc);
    await loadLocaleAsync(loc);
    setLocale(loc);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = anchorEl ? 'app-menu-popover' : undefined;

  return (
    <>
      <TextField name="locale" variant="outlined" value={locale} onChange={onLocaleSelected} size="small" select>
        {locales.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </TextField>
      <IconButton
        id="open-auth-menu"
        sx={{ ml: 1, padding: 0 }}
        aria-describedby={id}
        color="inherit"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Popover
        id="app-menu-popover"
        sx={{ mt: 1 }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center" p={2}>
          <Avatar sx={{ width: 80, height: 80 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box pl={2}>
            <ItemTypography variant="h6">{me.username}</ItemTypography>
            <ItemTypography variant="body1">
              {me.admin ? LL.ADMIN() + ' ' + LL.USER() : LL.GUEST() + ' ' + LL.USER()}
            </ItemTypography>
          </Box>
        </Box>
        <Divider />
        <Box p={1.5}>
          <Button variant="outlined" fullWidth color="primary" onClick={() => signOut(true)}>
            {LL.SIGN_OUT()}
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default LayoutAuthMenu;
