import React, { useState } from 'react'
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/AviarLogo.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Projects', path: '/projects' },
    { label: 'Delivery Model', path: '/delivery-model' },
    { label: 'About AVIAR', path: '/about-us' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact ', path: '/contact' }
  ]

  return (
    <Box>
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Box>
            <img src={logo} alt="logo" width={180} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map(item => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                color="inherit"
                sx={{
                  mx: 1,
                  borderBottom: '3px solid transparent',
                  borderRadius: 0,
                  '&.active': {
                    borderBottom: '3px solid red',
                    fontWeight: 'bold'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>


          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map(item => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    '&.active': {
                      borderLeft: '4px solid red',
                      backgroundColor: 'rgba(255,0,0,0.05)',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </Box>
  )
}

export default Header
