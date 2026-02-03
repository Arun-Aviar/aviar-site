import React from 'react'
import { Container, Typography, Box, Grid, Paper, Button, Chip, Stack, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Security,
  Groups,
  RocketLaunch,
  Timeline,
  Savings,
  Gavel,
  Shield,
  Scale,
  Analytics,
  PrecisionManufacturing,
  Speed,
  Verified,
  Flag,
  Public,
  Handshake,
  AccountBalance,
  TrendingUp
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

const DeliveryModel = () => {
  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
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
            mb: 10,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Chip
            label="OUR COMPETITIVE EDGE"
            icon={<Flag />}
            sx={{
              mb: 3,
              px: 3,
              py: 1,
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: 1,
              '& .MuiChip-icon': { color: 'white' }
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 900,
              mb: 3,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2
            }}
          >
            Global Delivery. Enterprise Control.
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            The hybrid delivery model that combines US-based governance with India's technical
            excellence — delivering enterprise-grade solutions with optimal cost efficiency.
          </Typography>
        </MotionBox>

        {/* Two-Column Delivery Model */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 12 }}
        >
          <Grid container spacing={6}>

            {/* US Column */}
            <Grid item xs={12} md={6}>
              <MotionPaper
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(30, 58, 138, 0.12)' }}
                sx={{
                  p: 5,
                  height: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* US Flag Decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontSize: '3rem',
                    opacity: 0.1
                  }}
                >
                  🇺🇸
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box sx={{
                    width: 8,
                    height: 40,
                    mr: 3,
                    background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                    borderRadius: 4
                  }} />
                  <Typography variant="h4" fontWeight="800" color="#1d4ed8">
                    United States
                  </Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                  Strategic Leadership & Client Governance
                </Typography>

                <List sx={{ '& .MuiListItem-root': { py: 2 } }}>
                  {[
                    { icon: <Handshake />, text: 'Client Engagement & Strategic Governance' },
                    { icon: <Analytics />, text: 'Architecture & Solution Oversight' },
                    { icon: <Groups />, text: 'Stakeholder Communication & Alignment' },
                    { icon: <Scale />, text: 'Contract & SLA Ownership' },
                    { icon: <Gavel />, text: 'Risk Management & Compliance' }
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 44 }}>
                        <Box sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #3b82f620, #3b82f610)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1d4ed8'
                        }}>
                          {item.icon}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: '1.05rem'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </MotionPaper>
            </Grid>

            {/* India Column */}
            <Grid item xs={12} md={6}>
              <MotionPaper
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(5, 150, 105, 0.12)' }}
                sx={{
                  p: 5,
                  height: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* India Flag Decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontSize: '3rem',
                    opacity: 0.1
                  }}
                >
                  🇮🇳
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box sx={{
                    width: 8,
                    height: 40,
                    mr: 3,
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    borderRadius: 4
                  }} />
                  <Typography variant="h4" fontWeight="800" color="#059669">
                    India Development Center
                  </Typography>
                </Box>

                <Chip
                  label="100-Seat Capacity"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    fontWeight: 700
                  }}
                />

                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                  Technical Excellence & Scalable Execution
                </Typography>

                <List sx={{ '& .MuiListItem-root': { py: 2 } }}>
                  {[
                    { icon: <PrecisionManufacturing />, text: 'Full-Cycle Development Teams' },
                    { icon: <RocketLaunch />, text: 'Product Engineering & Architecture' },
                    { icon: <Verified />, text: 'Quality Assurance & Automation' },
                    { icon: <Speed />, text: 'Cost-Efficient, Scalable Execution' },
                    { icon: <TrendingUp />, text: 'Continuous Improvement & Innovation' }
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 44 }}>
                        <Box sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #10b98120, #10b98110)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#059669'
                        }}>
                          {item.icon}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: '1.05rem'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </MotionPaper>
            </Grid>
          </Grid>
        </MotionBox>

        {/* Benefits Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mt: 10,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Why This Works
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                icon: <Savings />,
                title: '40–50% Cost Optimization',
                description: 'Optimal blend of US leadership and India execution delivers superior ROI',
                gradient: 'linear-gradient(135deg, #10b981, #059669)'
              },
              {
                icon: <Timeline />,
                title: '30% Faster Delivery',
                description: '24/7 development cycles and agile processes accelerate time-to-market',
                gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
              },
              {
                icon: <Shield />,
                title: 'Enterprise Accountability',
                description: 'Single-point US accountability with transparent India execution',
                gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
              }
            ].map((benefit, index) => (
              <Grid item xs={12} md={4} key={index} mt={10}>
                <MotionBox
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: benefit.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                    color: 'white',
                    fontSize: '2rem'
                  }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="700" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {benefit.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Security & Governance Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 12 }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
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
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Security sx={{ fontSize: 40, mr: 2, color: '#60a5fa' }} />
                <Typography variant="h3" fontWeight="800">
                  Security, Governance & Risk Management
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ color: '#cbd5e1', mb: 5, maxWidth: 800 }}>
                Built for Enterprise Expectations with Governance-First Delivery
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={3}>
                    {[
                      'Secure Development Environments & Access-Controlled Systems',
                      'Confidentiality & Intellectual Property Protection',
                      'Defined Delivery Processes & Quality Gates',
                      'Contractual SLAs with Penalty Clauses'
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <CheckCircle sx={{ color: '#10b981', mr: 2, mt: 0.5 }} />
                        <Typography variant="h6" fontWeight="500">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: '#60a5fa' }}>
                      Enterprise Risk Mitigation
                    </Typography>
                    <List sx={{ color: '#cbd5e1' }}>
                      {[
                        'Escalation Models with Defined Response Times',
                        'Dedicated Security & Compliance Officers',
                        'Regular Audit & Compliance Reporting',
                        'Business Continuity & Disaster Recovery Plans'
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 1, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Shield sx={{ color: '#10b981', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </MotionBox>

        {/* Case Studies Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Proven Results
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MotionPaper
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)' }}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <AccountBalance sx={{ fontSize: 40, mr: 3, color: '#1d4ed8' }} />
                  <Box>
                    <Chip
                      label="MID-MARKET ENTERPRISE"
                      sx={{
                        background: '#1d4ed8',
                        color: 'white',
                        fontWeight: 700,
                        mb: 1
                      }}
                    />
                    <Typography variant="h5" fontWeight="800">
                      Financial Services Client (USA)
                    </Typography>
                  </Box>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      p: 3,
                      borderRadius: 3,
                      background: '#fef2f2',
                      borderLeft: '4px solid #dc2626'
                    }}>
                      <Typography variant="h6" fontWeight="700" color="#dc2626" gutterBottom>
                        Challenge
                      </Typography>
                      <Typography>
                        Escalating development costs and delayed project timelines affecting market competitiveness
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      p: 3,
                      borderRadius: 3,
                      background: '#f0f9ff',
                      borderLeft: '4px solid #0ea5e9'
                    }}>
                      <Typography variant="h6" fontWeight="700" color="#0ea5e9" gutterBottom>
                        Solution
                      </Typography>
                      <Typography>
                        Implemented hybrid US-India delivery model with dedicated teams and agile processes
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{
                      p: 3,
                      borderRadius: 3,
                      background: '#f0fdf4',
                      borderLeft: '4px solid #10b981'
                    }}>
                      <Typography variant="h6" fontWeight="700" color="#10b981" gutterBottom>
                        Results
                      </Typography>
                      <Typography>
                        45% reduction in development costs and 35% faster time-to-market
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </MotionPaper>
            </Grid>
          </Grid>
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
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
              <Typography variant="h3" fontWeight="800" gutterBottom>
                Ready to Transform Your Delivery?
              </Typography>

              <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                Discover how our global delivery model can optimize your costs and accelerate your projects
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                {/* <Button
                  variant="contained"
                  size="large"
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
                  Request Detailed Case Studies
                </Button> */}

                <Button
                  variant="outlined"
                  component={Link}
                  size="large"
                  to={'/contact'}
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
                  Schedule Delivery Consultation
                </Button>
              </Stack>
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default DeliveryModel