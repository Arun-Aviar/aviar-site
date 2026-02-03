import React from 'react'
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#203a43', color: 'white', py: 8, }}>
            <Container maxWidth="lg">
                <Grid justifyContent={'center'} container spacing={4}>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Quick Links
                        </Typography>
                        <Box display="flex" flexDirection="column">
                            <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Home
                            </Link>
                            <Link component={RouterLink} to="/products" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Products
                            </Link>
                            <Link component={RouterLink} to="/solutions" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Solutions
                            </Link>
                            <Link component={RouterLink} to="/delivery-model" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Delivery Model
                            </Link>
                            <Link component={RouterLink} to="/about-us" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                About AVIAR
                            </Link>
                            <Link component={RouterLink} to="/careers" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Careers
                            </Link>
                            <Link component={RouterLink} to="/contact" color="inherit" underline="hover" sx={{ my: 0.5 }}>
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Contact Info
                        </Typography>
                        <Typography>Email: aviar@aviartechservices.com</Typography>
                        <Typography>Phone: +91 86680 65758</Typography>
                        {/* <Typography>Phone: +91 98765 43210</Typography> */}

                        {/* <Typography>Fax: +91 12345 67890</Typography> */}
                    </Grid>

                    {/* Address & Social Media */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Address - USA
                        </Typography>
                        <Typography gutterBottom fontWeight="bold">
                            USA - AVIAR Technology Services,
                        </Typography>
                        <Typography>2103, Eastland Dr, Suite A</Typography>
                        <Typography>Bloomington, IL 61704,</Typography>
                        <Typography>United States</Typography>

                        <hr />

                        <Typography gutterBottom fontWeight="bold">
                            INDIA - AVIAR Technology Services,
                        </Typography>
                        <Typography>No.36/50, Uma Devi Nagar 1st Street,</Typography>
                        <Typography>Kilanakarai,</Typography>
                        <Typography>Tiruvannamalai Dt, 606603,</Typography>
                        <Typography>Tamilnadu, India</Typography>

                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom fontWeight="bold" >Follow us:</Typography>
                        <Box mt={1}>
                            <IconButton color="inherit" href="#">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" href="#">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" href="#">
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="inherit" href="#">
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>

                {/* Divider */}
                <Box mt={6} textAlign="center">
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {new Date().getFullYear()} AVIAR Technology Services. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
