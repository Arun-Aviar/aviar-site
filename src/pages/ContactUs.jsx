import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  Chip,
  Stack,
  Divider,
  IconButton,
  Snackbar,
  Alert,
  Card,
  CardContent,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { motion } from 'framer-motion'
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Send,
  CheckCircle,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  WhatsApp,
  Message,
  Business,
  Person,
  Subject,
  Language,
  ArrowForward,
  Place,
  Chat,
  Schedule,
  SupportAgent,
  Forum
} from '@mui/icons-material'
// import emailjs from '@emailjs/browser'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)
const MotionCard = motion(Card)

const ContactUs = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'careers', label: 'Career Opportunities' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'press', label: 'Press & Media' }
  ]

  const contactPoints = [
    {
      title: 'United States Headquarters',
      address: 'Bloomington, Illinois',
      phone: '+1 (555) 123-4567',
      email: 'aviar@aviartechservices.com',
      icon: <Place />,
      color: '#3b82f6'
    },
    {
      title: 'India Development Center',
      address: 'Tiruvannamalai, Tamil Nadu',
      phone: '+91 86680 65758',
      email: 'aviar@aviartechservices.com',
      icon: <Business />,
      color: '#10b981'
    }
  ]

  const socialLinks = [
    { platform: 'LinkedIn', icon: <LinkedIn />, color: '#0077b5', url: 'https://www.linkedin.com/company/aviartechservices/' },
    // { platform: 'Twitter', icon: <Twitter />, color: '#1da1f2', url: '#' },
    { platform: 'Facebook', icon: <Facebook />, color: '#1877f2', url: 'https://www.facebook.com/share/1aE3gBnDhY/' },
    { platform: 'Instagram', icon: <Instagram />, color: '#e4405f', url: 'https://www.instagram.com/aviar_technology_services?igsh=NXM5NmZjbW91MDRm' },
    { platform: 'WhatsApp', icon: <WhatsApp />, color: '#25d366', url: "https://wa.me/918668065758" }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleQuickContact = (method) => {
    switch (method) {
      case 'email':
        window.location.href = 'mailto:contact@aviar.tech'
        break
      case 'whatsapp':
        window.open('https://wa.me/15551234567', '_blank')
        break
      case 'call':
        window.location.href = 'tel:+15551234567'
        break
      default:
        break
    }
  }

  return (
    <Box sx={{
      py: { xs: 4, sm: 6, md: 8, lg: 10 },
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements - Hidden on mobile */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: { sm: 400, md: 500, lg: 600 },
              height: { sm: 400, md: 500, lg: 600 },
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: { sm: 400, md: 500, lg: 500 },
              height: { sm: 400, md: 500, lg: 500 },
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)'
            }}
          />
        </>
      )}

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* Hero Section - Mobile Optimized */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6, lg: 8 },
            position: 'relative',
            zIndex: 1
          }}
        >
          <Chip
            label="GET IN TOUCH"
            sx={{
              mb: { xs: 2, sm: 3 },
              px: { xs: 2, sm: 3 },
              py: { xs: 0.5, sm: 1 },
              height: 'auto',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
              letterSpacing: 1,
              '& .MuiChip-label': {
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 0.75 }
              }
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '1.75rem',
                sm: '2.25rem',
                md: '3rem',
                lg: '3.75rem'
              },
              fontWeight: 900,
              mb: { xs: 2, sm: 3 },
              background: 'linear-gradient(135deg, #1e3a8a 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: { xs: 1.2, sm: 1.2, md: 1.2 },
              px: { xs: 1, sm: 2 }
            }}
          >
            Let's Build Something
            <Box component="span" sx={{
              display: 'block',
              color: '#1e3a8a',
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.75rem',
                lg: '3.5rem'
              }
            }}>
              Remarkable Together
            </Box>
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: { xs: 1.5, sm: 1.6 },
              mb: { xs: 4, sm: 5, md: 6 },
              fontSize: {
                xs: '0.95rem',
                sm: '1.1rem',
                md: '1.25rem'
              },
              px: { xs: 2, sm: 3 }
            }}
          >
            Have a project in mind? Want to join our team? Or just want to chat about technology?
            We'd love to hear from you.
          </Typography>

          {/* Quick Contact Buttons - Mobile Optimized */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{
              mb: { xs: 3, sm: 4 },
              px: { xs: 1, sm: 2 }
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 2 }}
              justifyContent="center"
            >
              <Button
                variant="contained"
                startIcon={<Email />}
                onClick={() => handleQuickContact('email')}
                fullWidth={isMobile}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 2, sm: 3, md: 4 },
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8, #1e40af)'
                  }
                }}
              >
                Send Email
              </Button>

              <Button
                variant="outlined"
                startIcon={<WhatsApp />}
                onClick={() => handleQuickContact('whatsapp')}
                fullWidth={isMobile}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 2, sm: 3, md: 4 },
                  borderColor: '#10b981',
                  color: '#059669',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#059669',
                    background: 'rgba(16, 185, 129, 0.05)'
                  }
                }}
              >
                WhatsApp Chat
              </Button>

              <Button
                variant="outlined"
                startIcon={<Phone />}
                onClick={() => handleQuickContact('call')}
                fullWidth={isMobile}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 2, sm: 3, md: 4 },
                  borderColor: '#8b5cf6',
                  color: '#7c3aed',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#7c3aed',
                    background: 'rgba(139, 92, 246, 0.05)'
                  }
                }}
              >
                Call Now
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>

        {/* Main Content - Mobile Optimized */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          {/* Contact Information - Mobile Optimized */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={{ xs: 3, sm: 4 }}>
              {/* Contact Points - Mobile Optimized */}
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  fontWeight="800"
                  gutterBottom
                  sx={{
                    color: '#1e3a8a',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.125rem' },
                    textAlign: { xs: 'center', md: 'left' },
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  Our Locations
                </Typography>

                <Stack
                  spacing={{ xs: 2, sm: 3 }}
                  direction={{ xs: 'column', sm: 'row', md: 'column' }}
                >
                  {contactPoints.map((point, index) => (
                    <MotionCard
                      key={index}
                      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                      sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0,0,0,0.05)',
                        background: 'white',
                        width: { xs: '100%', sm: '50%', md: '100%' }
                      }}
                    >
                      <Box sx={{
                        height: 4,
                        background: point.color
                      }} />

                      <CardContent sx={{
                        p: { xs: 2.5, sm: 3, md: 4 }
                      }}>
                        <Box sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row', md: 'flex' },
                          alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
                          textAlign: { xs: 'center', sm: 'left', md: 'left' },
                          mb: 2
                        }}>
                          <Box sx={{
                            width: { xs: 56, sm: 48, md: 48 },
                            height: { xs: 56, sm: 48, md: 48 },
                            borderRadius: 2,
                            background: `${point.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: { xs: 0, sm: 3, md: 3 },
                            mb: { xs: 2, sm: 0, md: 0 },
                            color: point.color
                          }}>
                            {point.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h6"
                              fontWeight="700"
                              gutterBottom
                              sx={{
                                fontSize: { xs: '1.1rem', sm: '1rem', md: '1.1rem' }
                              }}
                            >
                              {point.title}
                            </Typography>
                            <Stack spacing={1}>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
                              }}>
                                <LocationOn sx={{
                                  fontSize: 16,
                                  mr: 1,
                                  color: 'text.secondary'
                                }} />
                                <Typography variant="body2" color="text.secondary">
                                  {point.address}
                                </Typography>
                              </Box>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
                              }}>
                                <Phone sx={{
                                  fontSize: 16,
                                  mr: 1,
                                  color: 'text.secondary'
                                }} />
                                <Typography variant="body2" color="text.secondary">
                                  {point.phone}
                                </Typography>
                              </Box>
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
                              }}>
                                <Email sx={{
                                  fontSize: 16,
                                  mr: 1,
                                  color: 'text.secondary'
                                }} />
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{
                                    wordBreak: 'break-all'
                                  }}
                                >
                                  {point.email}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Box>
                      </CardContent>
                    </MotionCard>
                  ))}
                </Stack>
              </MotionBox>

              {/* Social Media - Mobile Optimized */}
              <MotionPaper
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(124, 58, 237, 0.02))',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="700"
                  gutterBottom
                  sx={{
                    color: '#7c3aed',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  Connect With Us
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Follow us for updates, insights, and announcements.
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      sx={{
                        width: { xs: 44, sm: 48 },
                        height: { xs: 44, sm: 48 },
                        background: `${social.color}15`,
                        color: social.color,
                        border: `1px solid ${social.color}30`,
                        '&:hover': {
                          background: `${social.color}25`,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </MotionPaper>

              {/* Mobile Quick Support Card */}
              {isMobile && (
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <SupportAgent sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h6" fontWeight="700" gutterBottom>
                    Need Help Now?
                  </Typography>
                  <Typography sx={{ mb: 2, opacity: 0.9 }}>
                    Our support team is ready 24/7
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Phone />}
                    onClick={() => handleQuickContact('call')}
                    sx={{
                      background: 'white',
                      color: '#1d4ed8',
                      fontWeight: 700,
                      '&:hover': {
                        background: 'rgba(255,255,255,0.9)'
                      }
                    }}
                  >
                    Call Support
                  </Button>
                </MotionPaper>
              )}
            </Stack>
          </Grid>

          {/* Contact Form - Mobile Optimized */}
          {/* Uncomment and add form here when ready */}
        </Grid>

        {/* Success Snackbar - Mobile Optimized */}
        <Snackbar
          open={success}
          autoHideDuration={5000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: isMobile ? 'center' : 'right'
          }}
          sx={{
            bottom: { xs: 16, sm: 24 },
            px: { xs: 2, sm: 0 }
          }}
        >
          <Alert
            severity="success"
            icon={<CheckCircle />}
            sx={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              width: '100%',
              '& .MuiAlert-icon': { color: 'white' }
            }}
          >
            Message sent successfully! We'll get back to you within 24 hours.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}

export default ContactUs