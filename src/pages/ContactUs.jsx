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
  MenuItem
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
      email: 'usa@aviar.tech',
      icon: <Place />,
      color: '#3b82f6'
    },
    {
      title: 'India Development Center',
      address: 'Tiruvannamalai, Tamil Nadu',
      phone: '+91 98765 43210',
      email: 'india@aviar.tech',
      icon: <Business />,
      color: '#10b981'
    },
    // {
    //   title: 'Global Support',
    //   address: '24/7 Technical Support',
    //   phone: '+1 (800) TECH-SUP',
    //   email: 'support@aviar.tech',
    //   icon: <SupportAgent />,
    //   color: '#8b5cf6'
    // }
  ]

  const socialLinks = [
    { platform: 'LinkedIn', icon: <LinkedIn />, color: '#0077b5', url: '#' },
    { platform: 'Twitter', icon: <Twitter />, color: '#1da1f2', url: '#' },
    { platform: 'Facebook', icon: <Facebook />, color: '#1877f2', url: '#' },
    { platform: 'Instagram', icon: <Instagram />, color: '#e4405f', url: '#' },
    { platform: 'WhatsApp', icon: <WhatsApp />, color: '#25d366', url: '#' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
    
  //   if (!validateForm()) return

  //   setLoading(true)

  //   try {
  //     // Using EmailJS for form submission
  //     const templateParams = {
  //       from_name: formData.name,
  //       from_email: formData.email,
  //       company: formData.company,
  //       phone: formData.phone,
  //       subject: formData.subject,
  //       message: formData.message,
  //       inquiry_type: formData.inquiryType,
  //       to_email: 'contact@aviar.tech'
  //     }

  //     // Replace with your EmailJS credentials
  //     await emailjs.send(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       templateParams,
  //       'YOUR_PUBLIC_KEY'
  //     )

  //     setSuccess(true)
  //     setFormData({
  //       name: '',
  //       email: '',
  //       company: '',
  //       phone: '',
  //       subject: '',
  //       message: '',
  //       inquiryType: 'general'
  //     })

  //     setTimeout(() => setSuccess(false), 5000)
  //   } catch (error) {
  //     console.error('Error sending email:', error)
  //     setErrors({ submit: 'Failed to send message. Please try again.' })
  //   } finally {
  //     setLoading(false)
  //   }
  // }

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
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }}
      />

      <Container maxWidth="lg">
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            mb: 8,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Chip
            label="GET IN TOUCH"
            sx={{
              mb: 3,
              px: 3,
              py: 1,
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: 1
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 900,
              mb: 3,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2
            }}
          >
            Let's Build Something
            <Box component="span" sx={{ display: 'block', color: '#1e3a8a' }}>
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
              lineHeight: 1.6,
              mb: 6
            }}
          >
            Have a project in mind? Want to join our team? Or just want to chat about technology?
            We'd love to hear from you.
          </Typography>

          {/* Quick Contact Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{ mb: 4 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                startIcon={<Email />}
                onClick={() => handleQuickContact('email')}
                sx={{
                  py: 2,
                  px: 4,
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  fontWeight: 700,
                  fontSize: '1rem',
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
                sx={{
                  py: 2,
                  px: 4,
                  borderColor: '#10b981',
                  color: '#059669',
                  fontWeight: 700,
                  fontSize: '1rem',
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
                sx={{
                  py: 2,
                  px: 4,
                  borderColor: '#8b5cf6',
                  color: '#7c3aed',
                  fontWeight: 700,
                  fontSize: '1rem',
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

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          {/* <Grid item xs={12} lg={7}>
            <MotionPaper
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: 'white',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                height: '100%'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 3,
                  color: 'white'
                }}>
                  <Message sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="h3" fontWeight="800">
                    Send us a Message
                  </Typography>
                  <Typography color="text.secondary">
                    We typically respond within 24 hours
                  </Typography>
                </Box>
              </Box>

              {errors.submit && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {errors.submit}
                </Alert>
              )}

              <form onSubmit={''}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Business sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number (Optional)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        background: '#f8fafc'
                      }
                    }}>
                      <InputLabel>Type of Inquiry</InputLabel>
                      <Select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        label="Type of Inquiry"
                        startAdornment={
                          <InputAdornment position="start">
                            <Forum sx={{ color: '#8b5cf6', mr: 1 }} />
                          </InputAdornment>
                        }
                      >
                        {inquiryTypes.map((type) => (
                          <MenuItem key={type.value} value={type.value}>
                            {type.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Subject sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      multiline
                      rows={6}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ mt: -10 }}>
                            <Chat sx={{ color: '#8b5cf6' }} />
                          </InputAdornment>
                        )
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: '#f8fafc',
                          alignItems: 'flex-start'
                        }
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      startIcon={!loading && <Send />}
                      sx={{
                        py: 2,
                        px: 6,
                        background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        width: '100%',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                          transform: 'translateY(-2px)'
                        },
                        '&.Mui-disabled': {
                          background: '#e2e8f0'
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', textAlign: 'center', mt: 3 }}
              >
                By submitting this form, you agree to our Privacy Policy.
              </Typography>
            </MotionPaper>
          </Grid> */}

          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <Stack  spacing={4}>
              {/* Contact Points */}
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" fontWeight="800" gutterBottom sx={{ color: '#1e3a8a' }}>
                  Our Locations
                </Typography>

                <Stack flexDirection={'row'} spacing={3}>
                  {contactPoints.map((point, index) => (
                    <MotionCard
                      key={index}

                      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                      sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0,0,0,0.05)',
                        background: 'white',
                      }}
                    >
                      <Box sx={{
                        height: 4,
                        background: point.color
                      }} />

                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            background: `${point.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                            color: point.color
                          }}>
                            {point.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="700" gutterBottom>
                              {point.title}
                            </Typography>
                            <Stack spacing={1}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                                <Typography variant="body2" color="text.secondary">
                                  {point.address}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                                <Typography variant="body2" color="text.secondary">
                                  {point.phone}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                                <Typography variant="body2" color="text.secondary">
                                  {point.email}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Box>

                        {/* <Button
                          variant="text"
                          endIcon={<ArrowForward />}
                          sx={{
                            color: point.color,
                            fontWeight: 600,
                            textTransform: 'none',
                            p: 0,
                            '&:hover': {
                              background: 'transparent',
                              color: point.color
                            }
                          }}
                        >
                          Get Directions
                        </Button> */}
                      </CardContent>
                    </MotionCard>
                  ))}
                </Stack>
              </MotionBox>

              {/* Business Hours */}
              {/* <MotionPaper
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05), rgba(30, 58, 138, 0.02))',
                  border: '1px solid rgba(30, 58, 138, 0.1)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTime sx={{ fontSize: 32, mr: 2, color: '#1d4ed8' }} />
                  <Typography variant="h5" fontWeight="700" color="#1e3a8a">
                    Business Hours
                  </Typography>
                </Box>

                <List>
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Emergency Support Only' }
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemText
                        primary={
                          <Typography fontWeight="600">
                            {item.day}
                          </Typography>
                        }
                        secondary={
                          <Typography color="text.secondary">
                            {item.hours}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>

                <Chip
                  icon={<SupportAgent />}
                  label="24/7 Technical Support Available"
                  sx={{
                    mt: 2,
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#059669',
                    fontWeight: 600,
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                />
              </MotionPaper> */}

              {/* Social Media */}
              <MotionPaper
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(124, 58, 237, 0.02))',
                  border: '1px solid rgba(139, 92, 246, 0.1)'
                }}
              >
                <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: '#7c3aed' }}>
                  Connect With Us
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Follow us for updates, insights, and announcements.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      sx={{
                        width: 48,
                        height: 48,
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

              {/* Quick Support */}
              {/* <MotionPaper
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 138, 0.02))',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  textAlign: 'center'
                }}
              >
                <Schedule sx={{ fontSize: 48, mb: 2, color: '#3b82f6' }} />

                <Typography variant="h6" fontWeight="700" gutterBottom sx={{ color: '#1e3a8a' }}>
                  Need Immediate Assistance?
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Our support team is always ready to help with urgent matters.
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<Phone />}
                  onClick={() => handleQuickContact('call')}
                  sx={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    fontWeight: 700,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1d4ed8, #1e40af)'
                    }
                  }}
                >
                  Call Support Now
                </Button>
              </MotionPaper> */}
            </Stack>
          </Grid>
        </Grid>

        {/* Map Placeholder */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ mt: 10 }}
        >
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" fontWeight="800" gutterBottom>
              Global Presence
            </Typography>

            <Typography color="rgba(255,255,255,0.8)" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Serving clients across the globe with our US-India delivery model
            </Typography>

            <Box
              sx={{
                height: 300,
                borderRadius: 3,
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Simplified Map Visualization */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* USA Marker */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '25%',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  US
                </Box>

                {/* India Marker */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '55%',
                    left: '70%',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                    animation: 'pulse 2s infinite',
                    animationDelay: '1s'
                  }}
                >
                  IN
                </Box>

                {/* Connection Line */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    width: '40%',
                    height: 2,
                    background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                    transform: 'rotate(15deg)'
                  }}
                />
              </Box>

              <style jsx>{`
                @keyframes pulse {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.05); }
                  100% { transform: scale(1); }
                }
              `}</style>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Chip
                icon={<Place sx={{ color: '#3b82f6' }} />}
                label="United States HQ"
                sx={{ background: 'rgba(59, 130, 246, 0.1)', color: 'white' }}
              />
              <Chip
                icon={<Place sx={{ color: '#10b981' }} />}
                label="India Development Center"
                sx={{ background: 'rgba(16, 185, 129, 0.1)', color: 'white' }}
              />
            </Stack>
          </Paper>
        </MotionBox>
      </Container>

      {/* Success Snackbar */}
      {/* <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          icon={<CheckCircle />}
          sx={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            '& .MuiAlert-icon': { color: 'white' }
          }}
        >
          Message sent successfully! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar> */}
    </Box>
  )
}

export default ContactUs