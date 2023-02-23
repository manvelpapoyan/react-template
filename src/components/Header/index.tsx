import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { RouteEnum } from '@appTypes/enums/global'
import { PAGE_ROUTES_PRIVATE, PAGE_ROUTES_PUBLIC } from '@appTypes/enums/pages'

import Logo from '@components/common/Logo'
import LinkTo from '@components/common/LinkTo'
import { useAppSelector } from '@store/hooks'

import { StyledAppBar, LogoWrapper } from './styled'

// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// // import MenuIcon from '@mui/icons-material/Menu'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
// import MenuItem from '@mui/material/MenuItem'
// // import AdbIcon from '@mui/icons-material/Adb'

// const pages = ['Products', 'Pricing', 'Blog']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

interface IHeader {
  type: RouteEnum
}

function Header({ type }: IHeader) {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <StyledAppBar>
      <Container maxWidth='xl'>
        <Toolbar>
          <LogoWrapper type={type}>
            <LinkTo href={user === null ? PAGE_ROUTES_PUBLIC.SIGN_IN : PAGE_ROUTES_PRIVATE.HOME}>
              <Logo />
            </LinkTo>
          </LogoWrapper>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}
export default Header
