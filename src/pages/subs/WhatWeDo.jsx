import React from 'react'
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import BuildIcon from '@mui/icons-material/Build'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const MotionPaper = motion(Paper)

const capabilities = [
  {
    title: 'Project Development',
    description:
      'End-to-end execution of enterprise initiatives — from architecture design and technical planning to development, QA, deployment, and support.',
    outcomes: [
      'Predictable timelines',
      'Defined milestones',
      'Structured reporting',
      'Risk mitigation'
    ],
    icon: <BuildIcon />,
    gradient: 'linear-gradient(180deg, #4facfe, #00f2fe)'
  },
  {
    title: 'Product Engineering',
    description:
      'We partner with product companies and startups to design, build, and scale software platforms from MVP to enterprise-grade systems.',
    outcomes: [
      'Scalable system architecture',
      'Performance optimization',
      'Continuous feature enhancement',
      'Long-term technical ownership'
    ],
    icon: <RocketLaunchIcon />,
    gradient: 'linear-gradient(180deg, #43e97b, #38f9d7)'
  },
  {
    title: 'Managed IT & Application Support',
    description:
      'Ongoing maintenance, upgrades, and SLA-driven support for mission-critical systems.',
    outcomes: [
      'Stability',
      'Cost-controlled operations',
      'Performance monitoring',
      'Continuous improvement'
    ],
    icon: <SupportAgentIcon />,
    gradient: 'linear-gradient(180deg, #fa709a, #fee140)'
  }
]

const WhatWeDo = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  return (
    <Box sx={{ 
      py: { xs: 6, sm: 8, md: 14 }, 
      backgroundColor: '#f7f9fc' 
    }}>
      <Container maxWidth="lg">
        {/* Section Header - Mobile Optimized */}
        <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="overline"
            fontWeight="700"
            sx={{ 
              letterSpacing: 2, 
              color: 'primary.main',
              fontSize: { xs: '0.7rem', sm: '0.75rem' }
            }}
          >
            {/* WHAT WE DO */}
            CORE SERVICES
          </Typography>

          <Typography 
            variant={isMobile ? 'h4' : 'h3'} 
            fontWeight="800" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              lineHeight: { xs: 1.2, sm: 1.3 }
            }}
          >
            Clear. Outcome-Driven. Built for Scale.
          </Typography>

          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            color="text.secondary" 
            sx={{ 
              maxWidth: 700,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Our core capabilities reduce risk, accelerate delivery, and create
            long-term technology value.
          </Typography>
        </Box>

        {/* Capability Cards - Mobile Responsive Stack View */}
        <Box sx={{ 
          display: 'flex', 
          alignItems:'center',
          flexDirection: 'column', 
          gap: { xs: 3, sm: 4 }
        }}>
          {capabilities.map((item, index) => (
            <MotionPaper
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              elevation={0}
              sx={{
                width: '95%',
                p: { xs: 2.5, sm: 3, md: 4 },
                borderRadius: { xs: 3, sm: 4 },
                position: 'relative',
                background: '#ffffff',
                boxShadow: isMobile 
                  ? '0 10px 30px rgba(0,0,0,0.05)' 
                  : '0 20px 40px rgba(0,0,0,0.08)',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Accent - Responsive height */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: { xs: 4, sm: 6 },
                  background: item.gradient
                }}
              />

              {/* Header with Icon and Title - Responsive layout */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 1.5, sm: 2 }, 
                mb: { xs: 1.5, sm: 2 },
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <Box
                  sx={{
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    background: item.gradient,
                    flexShrink: 0,
                    '& svg': {
                      fontSize: { xs: 24, sm: 28 }
                    }
                  }}
                >
                  {item.icon}
                </Box>
                <Typography 
                  variant={isMobile ? 'h5' : 'h4'} 
                  fontWeight="700"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {item.description}
              </Typography>

              <Typography 
                variant="subtitle1" 
                fontWeight="600" 
                sx={{ 
                  mb: { xs: 1, sm: 1.5 },
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                Deliverables : 
              </Typography>

              {/* Outcomes - Mobile optimized layout */}
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 1.5 },
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}>
                {item.outcomes.map(outcome => (
                  <Box
                    key={outcome}
                    sx={{
                      px: { xs: 1.5, sm: 2, md: 2.5 },
                      py: { xs: 0.6, sm: 0.8, md: 1 },
                      borderRadius: { xs: 2, sm: 3 },
                      backgroundColor: '#f1f5f9',
                      fontSize: { xs: 12, sm: 13, md: 14 },
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      width: { xs: '100%', sm: 'auto' },
                      justifyContent: { xs: 'center', sm: 'flex-start' }
                    }}
                  >
                    <Box 
                      component="span" 
                      sx={{ 
                        color: item.gradient.includes('linear') 
                          ? item.gradient.split(',')[1]?.replace(')', '') || '#3b82f6'
                          : '#3b82f6', 
                        mr: 1,
                        fontSize: { xs: '0.8rem', sm: '0.9rem' }
                      }}
                    >
                      ✓
                    </Box>
                    {outcome}
                  </Box>
                ))}
              </Box>
            </MotionPaper>
          ))}
        </Box>

        {/* Optional: CTA Button for Mobile */}
        {isMobile && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 5 
          }}>
            <Typography 
              variant="body2" 
              color="primary" 
              sx={{ 
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              View all capabilities →
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default WhatWeDo