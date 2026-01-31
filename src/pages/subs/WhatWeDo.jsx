import React from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import BuildIcon from '@mui/icons-material/Build'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const MotionPaper = motion(Paper)

const capabilities = [
  {
    title: 'Project Development',
    description:
      'End-to-end execution of technology projects — from requirements and architecture to development, testing, and deployment.',
    outcomes: [
      'Predictable delivery',
      'Reduced project risk',
      'Faster time-to-market'
    ],
    icon: <BuildIcon />,
    gradient: 'linear-gradient(180deg, #4facfe, #00f2fe)'
  },
  {
    title: 'Product Development',
    description:
      'We partner with companies to build, enhance, and scale software products — from MVP to enterprise-grade platforms.',
    outcomes: [
      'Scalable architectures',
      'Faster innovation cycles',
      'Long-term product ownership'
    ],
    icon: <RocketLaunchIcon />,
    gradient: 'linear-gradient(180deg, #43e97b, #38f9d7)'
  },
  {
    title: 'IT Services & Support',
    description:
      'Ongoing application support, enhancements, and managed services tailored to your business needs.',
    outcomes: [
      'Operational stability',
      'Lower support costs',
      'SLA-driven delivery'
    ],
    icon: <SupportAgentIcon />,
    gradient: 'linear-gradient(180deg, #fa709a, #fee140)'
  }
]

const WhatWeDo = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#f7f9fc' }}>
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            fontWeight="700"
            sx={{ letterSpacing: 2, color: 'primary.main' }}
          >
            WHAT WE DO
          </Typography>

          <Typography variant="h3" fontWeight="800" gutterBottom>
            Clear. Outcome-Driven. Built for Scale.
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700 }}>
            Our core capabilities reduce risk, accelerate delivery, and create
            long-term technology value.
          </Typography>
        </Box>

        {/* Capability Cards */}
        <Grid container spacing={4}>
          {capabilities.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                elevation={0}
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  position: 'relative',
                  background: '#ffffff',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient Accent */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 6,
                    height: '100%',
                    background: item.gradient
                  }}
                />

                {/* Icon */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: 'white',
                    background: item.gradient
                  }}
                >
                  {item.icon}
                </Box>

                <Typography variant="h5" fontWeight="700" gutterBottom>
                  {item.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  {item.description}
                </Typography>

                <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                  Outcomes
                </Typography>

                <Box>
                  {item.outcomes.map(outcome => (
                    <Box
                      key={outcome}
                      sx={{
                        mb: 1,
                        px: 2,
                        py: 0.8,
                        borderRadius: 2,
                        backgroundColor: '#f1f5f9',
                        fontSize: 14,
                        fontWeight: 500
                      }}
                    >
                      ✔ {outcome}
                    </Box>
                  ))}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhatWeDo
