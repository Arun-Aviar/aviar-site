import React from 'react'
import { Container, Typography, Box, Grid, Paper, Button, Chip, Stack, Avatar, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import {
  RocketLaunch,
  Groups,
  School,
  WorkspacePremium,
  Business,
  LocationOn,
  TrendingUp,
  Handshake,
  Engineering,
  Build,
  Diversity3,
  Public,
  Star,
  CorporateFare,
  Work,
  People,
  Lightbulb
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

const AboutUs = () => {
  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)'
        }}
      />

      <Container maxWidth="lg">

        {/* Hero Header */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            mb: 10,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
            {/* <Box sx={{ 
              width: 60, 
              height: 60, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              A
            </Box> */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AVIAR Technology Services
            </Typography>
          </Stack>

          {/* <Typography
            variant="h4"
            color="text.secondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 3
            }}
          >
            Technology Services
          </Typography> */}

          <Chip
            label="SINCE 2015"
            sx={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: 1
            }}
          />
        </MotionBox>

        {/* Who We Are Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 12 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4
                  }}
                >
                  <RocketLaunch sx={{ fontSize: 60, color: 'white' }} />
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Who We Are
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                  Founded in 2015 and headquartered in Bloomington, Illinois, AVIAR Technology Services
                  is a global technology firm focused on building and delivering digital products and
                  enterprise platforms that transform businesses.
                </Typography>

                <Box sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 138, 0.05))',
                  border: '1px solid rgba(59, 130, 246, 0.15)'
                }}>
                  <Typography variant="h6" fontWeight="700" color="#1d4ed8" gutterBottom>
                    Our Focus
                  </Typography>
                  <Typography color="text.secondary">
                    Execution, reliability, and long-term partnership — delivering solutions that
                    drive measurable business value.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <MotionPaper
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(30, 58, 138, 0.15)' }}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  background: 'white',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  height: '100%'
                }}
              >
                <Typography variant="h5" fontWeight="800" gutterBottom sx={{ color: '#1d4ed8', mb: 4 }}>
                  We Bring Together
                </Typography>

                <Stack spacing={4}>
                  {[
                    {
                      icon: <Engineering />,
                      title: 'Product Engineering Expertise',
                      description: 'Deep technical skills across modern stacks and architectures'
                    },
                    {
                      icon: <Build />,
                      title: 'Real-World Project Delivery',
                      description: 'Proven experience delivering enterprise-grade solutions'
                    },
                    {
                      icon: <Public />,
                      title: 'Scalable Global Delivery',
                      description: 'US leadership with India execution for optimal results'
                    }
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        flexShrink: 0,
                        color: 'white'
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="700" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </MotionPaper>
            </Grid>
          </Grid>
        </MotionBox>


        {/* Values Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mt: 8,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Core Values
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Execution Excellence',
                description: 'We deliver what we promise, on time and with quality',
                icon: '🎯',
                color: '#3b82f6'
              },
              {
                title: 'Client Partnership',
                description: 'Building long-term relationships based on trust and results',
                icon: '🤝',
                color: '#10b981'
              },
              {
                title: 'Talent Development',
                description: 'Investing in our people to build future technology leaders',
                icon: '🚀',
                color: '#8b5cf6'
              },
              {
                title: 'Global Perspective',
                description: 'Leveraging diverse perspectives for innovative solutions',
                icon: '🌍',
                color: '#f59e0b'
              }
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} mt={10}>
                <MotionPaper
                  whileHover={{ y: -12, scale: 1.02 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    border: `1px solid ${value.color}20`,
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <Box sx={{
                    fontSize: '3rem',
                    mb: 3,
                    opacity: 0.9
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: value.color }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* India Talent Initiative Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 12, mt: 20 }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #4f93c0ff 0%, #02a0d9ff 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Pattern */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <School sx={{ fontSize: 48, mr: 3 }} />
                <Box>
                  <Chip
                    label="TALENT INITIATIVE"
                    sx={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 700,
                      mb: 1
                    }}
                  />
                  <Typography variant="h2" fontWeight="800">
                    India Talent & Training Center
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, maxWidth: 800 }}>
                Operating a 100-seat development and training center in Tiruvannamalai, India,
                strengthening our engineering pipeline while supporting local communities.
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card sx={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <WorkspacePremium sx={{ mr: 2 }} />
                        <Typography variant="h5" fontWeight="700">
                          Talent Development
                        </Typography>
                      </Box>

                      <Stack spacing={2}>
                        {[
                          'Enterprise Software Development',
                          'Modern Tech Stack Training',
                          'Real Project Execution Practices',
                          'Agile Methodology & Best Practices',
                          'Quality Assurance & Testing'
                        ].map((item, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Star sx={{ fontSize: 16, mr: 2, opacity: 0.8 }} />
                            <Typography>{item}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Business sx={{ mr: 2 }} />
                        <Typography variant="h5" fontWeight="700">
                          Placement Network
                        </Typography>
                      </Box>

                      <Typography sx={{ mb: 3, opacity: 0.9 }}>
                        Through industry connections, we support placement opportunities with:
                      </Typography>

                      <Grid container spacing={2}>
                        {[
                          'Accenture',
                          'Cognizant',
                          'Infosys',
                          'Tech Mahindra',
                          'Wipro',
                          'TCS'
                        ].map((company, index) => (
                          <Grid item xs={6} key={index}>
                            <Chip
                              label={company}
                              sx={{
                                background: 'rgba(255,255,255,0.15)',
                                color: 'white',
                                width: '100%',
                                justifyContent: 'flex-start',
                                '& .MuiChip-label': { px: 2 }
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </MotionBox>




        {/* CTA Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center' }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h2" fontWeight="800" gutterBottom>
                Ready to Build With Us?
              </Typography>

              <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                Whether you're looking for a technology partner or a place to grow your career,
                let's create something remarkable together.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  variant="contained"
                  component={Link}
                  size="large"
                  to={'/contact'}
                  sx={{
                    py: 2,
                    px: 6,
                    background: 'white',
                    color: '#1d4ed8',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    '&:hover': {
                      background: '#f8fafc',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Partner With Us
                </Button>

                {/* <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 2,
                    px: 6,
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: 'white',
                      background: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  View Open Positions
                </Button> */}
              </Stack>
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default AboutUs