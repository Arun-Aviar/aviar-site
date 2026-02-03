import React from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Stack,
  Card,
  CardContent,
  Button,
  Divider
} from '@mui/material'
import {
  RocketLaunch,
  Cloud,
  Security,
  Speed,
  Scale,
  Api,
  Devices,
  Architecture,
  CheckCircle,
  Code,
  Storage
} from '@mui/icons-material'

import { motion } from 'framer-motion'


const techLogos = {
  // MERN Stack
  mongodb: { name: 'MongoDB', color: '#47A248', icon: 'M' },
  express: { name: 'Express.js', color: '#000000', icon: 'E' },
  react: { name: 'React', color: '#61DAFB', icon: 'R' },
  node: { name: 'Node.js', color: '#339933', icon: 'N' },

  // Java Ecosystem
  java: { name: 'Java', color: '#007396', icon: 'J' },
  spring: { name: 'Spring Boot', color: '#6DB33F', icon: 'S' },
  hibernate: { name: 'Hibernate', color: '#59666C', icon: 'H' },

  // Cloud & DevOps
  aws: { name: 'AWS', color: '#FF9900', icon: 'A' },
  azure: { name: 'Azure', color: '#0078D4', icon: 'A' },
  docker: { name: 'Docker', color: '#2496ED', icon: 'D' },
  kubernetes: { name: 'Kubernetes', color: '#326CE5', icon: 'K' },

  // Frontend
  typescript: { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
  redux: { name: 'Redux', color: '#764ABC', icon: 'RX' }
}

const Solutions = () => {
  const solutions = [
    {
      title: 'MERN Stack Development',
      description: 'Full-stack JavaScript solutions with MongoDB, Express, React, and Node.js',
      features: ['Real-time applications', 'Scalable REST APIs', 'Modern React frontends', 'PWA support'],
      techStack: ['mongodb', 'express', 'react', 'node', 'typescript'],
      icon: <RocketLaunch />
    },
    {
      title: 'Java Enterprise Solutions',
      description: 'Robust backend systems with Spring Boot and microservices architecture',
      features: ['Microservices architecture', 'Enterprise security', 'High-performance processing', 'Legacy modernization'],
      techStack: ['java', 'spring', 'hibernate'],
      icon: <Architecture />
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation pipelines',
      features: ['Multi-cloud deployment', 'Container orchestration', 'CI/CD automation', 'Infrastructure as Code'],
      techStack: ['aws', 'azure', 'docker', 'kubernetes'],
      icon: <Cloud />
    },
    {
      title: 'API Development',
      description: 'Modern API solutions and third-party integrations',
      features: ['REST & GraphQL APIs', 'API security', 'Third-party integration', 'Webhook implementation'],
      techStack: ['node', 'spring', 'express'],
      icon: <Api />
    }
  ]

  const capabilities = [
    {
      title: 'Scalability',
      description: 'Applications that grow with your business',
      icon: <Scale />,
      color: '#3b82f6'
    },
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      icon: <Speed />,
      color: '#10b981'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security implementation',
      icon: <Security />,
      color: '#ef4444'
    },
    {
      title: 'Reliability',
      description: 'High-availability systems',
      icon: <CheckCircle />,
      color: '#8b5cf6'
    }
  ]

  const TechLogo = ({ techKey }) => {
    const tech = techLogos[techKey]
    if (!tech) return null

    return (
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '12px',
          background: `${tech.color}15`,
          border: `2px solid ${tech.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: tech.color,
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 12px ${tech.color}20`
          }
        }}
      >
        {tech.icon}
      </Box>
    )
  }

  return (
    <Box sx={{
      py: { xs: 6, md: 8 },
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">

        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', overflow: 'hidden' }}>
          {/* Background Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)',
              animation: 'pulse 4s ease-in-out infinite 1s'
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Chip with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="TECHNOLOGY SOLUTIONS"
                sx={{
                  mb: 3,
                  px: 3,
                  py: 1,
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: 1
                }}
              />
            </motion.div>

            {/* Main heading with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 3,
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2
                }}
              >
                Modern Technology Stack
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 600,
                    color: '#3b82f6',
                    mt: 1
                  }}
                >
                  Engineered for Excellence
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle with fade-in animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  color: '#64748b',
                  lineHeight: 1.6,
                  mb: 6,
                  fontSize: '1.1rem',
                  fontWeight: 400
                }}
              >
                Leverage cutting-edge technologies with our expertise in MERN stack,
                Java ecosystems, and cloud-native solutions to build scalable,
                high-performance applications.
              </Typography>
            </motion.div>

            {/* Animated dots/indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                {[1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dot * 0.2
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#3b82f6',
                        opacity: 0.6
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>

          <style jsx>{`
    @keyframes pulse {
      0% { opacity: 0.5; transform: translate(30%, -30%) scale(1); }
      50% { opacity: 0.8; transform: translate(30%, -30%) scale(1.05); }
      100% { opacity: 0.5; transform: translate(30%, -30%) scale(1); }
    }
  `}</style>
        </Box>

        {/* Tech Stack Showcase */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            background: 'white',
            border: '1px solid #e2e8f0',
            mb: 8
          }}
        >
          <Typography variant="h4" fontWeight="800" gutterBottom sx={{ color: '#1e3a8a', mb: 4 }}>
            Our Technology Stack
          </Typography>

          {/* MERN Stack */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{
                width: 6,
                height: 30,
                mr: 2,
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: 3
              }} />
              <Typography variant="h5" fontWeight="700" color="#1e3a8a">
                MERN Stack
              </Typography>
            </Box>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography color="#64748b" sx={{ mb: 3, lineHeight: 1.7 }}>
                  End-to-end JavaScript solutions for modern web applications with real-time capabilities and scalable architecture.
                </Typography>
                <Stack spacing={2}>
                  {['Single Page Applications', 'Real-time Features', 'Scalable Backends', 'Progressive Web Apps'].map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: '#3b82f6', mr: 2, fontSize: 20 }} />
                      <Typography>{feature}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={7}>
                <Grid container spacing={2} justifyContent="center">
                  {['mongodb', 'express', 'react', 'node', 'typescript'].map((tech) => (
                    <Grid item key={tech}>
                      <TechLogo techKey={tech} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 6, borderColor: '#e2e8f0' }} />

          {/* Java Ecosystem */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{
                width: 6,
                height: 30,
                mr: 2,
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                borderRadius: 3
              }} />
              <Typography variant="h5" fontWeight="700" color="#1e3a8a">
                Java Ecosystem
              </Typography>
            </Box>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Grid container spacing={2} justifyContent="center">
                  {['java', 'spring', 'hibernate'].map((tech) => (
                    <Grid item key={tech}>
                      <TechLogo techKey={tech} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={5}>
                <Typography color="#64748b" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Robust backend solutions for enterprise applications with microservices architecture and high performance.
                </Typography>
                <Stack spacing={2}>
                  {['Microservices Architecture', 'Enterprise Security', 'High Performance', 'Legacy Integration'].map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: '#ef4444', mr: 2, fontSize: 20 }} />
                      <Typography>{feature}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 6, borderColor: '#e2e8f0' }} />

          {/* Cloud & DevOps */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{
                width: 6,
                height: 30,
                mr: 2,
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: 3
              }} />
              <Typography variant="h5" fontWeight="700" color="#1e3a8a">
                Cloud & DevOps
              </Typography>
            </Box>

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography color="#64748b" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Scalable cloud infrastructure and automation for continuous delivery and deployment.
                </Typography>
                <Stack spacing={2}>
                  {['Multi-Cloud Deployment', 'Container Orchestration', 'Infrastructure as Code', 'CI/CD Automation'].map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircle sx={{ color: '#10b981', mr: 2, fontSize: 20 }} />
                      <Typography>{feature}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={7}>
                <Grid container spacing={2} justifyContent="center">
                  {['aws', 'azure', 'docker', 'kubernetes'].map((tech) => (
                    <Grid item key={tech}>
                      <TechLogo techKey={tech} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* Solutions Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 800,
              color: '#1e3a8a'
            }}
          >
            Specialized Solutions
          </Typography>

          <Grid container spacing={4}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(30, 58, 138, 0.1)',
                      borderColor: '#3b82f6'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        color: 'white'
                      }}>
                        {solution.icon}
                      </Box>
                      <Typography variant="h5" fontWeight="700" color="#1e3a8a">
                        {solution.title}
                      </Typography>
                    </Box>

                    <Typography color="#64748b" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {solution.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Stack spacing={1.5}>
                        {solution.features.map((feature, idx) => (
                          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckCircle sx={{ fontSize: 18, mt: 0.25, mr: 1.5, color: '#3b82f6' }} />
                            <Typography variant="body2" color="#475569">
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 3, borderColor: '#e2e8f0' }} />

                    <Box>
                      <Typography variant="subtitle2" fontWeight="600" color="#64748b" gutterBottom>
                        Technologies Used:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {solution.techStack.map((tech) => {
                          const techInfo = techLogos[tech]
                          return (
                            <Chip
                              key={tech}
                              label={techInfo.name}
                              size="small"
                              sx={{
                                background: `${techInfo.color}15`,
                                color: techInfo.color,
                                border: `1px solid ${techInfo.color}30`,
                                fontWeight: 500
                              }}
                            />
                          )
                        })}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Capabilities */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 800,
              color: '#1e3a8a'
            }}
          >
            Our Capabilities
          </Typography>

          <Grid container spacing={4}>
            {capabilities.map((capability, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} mt={10}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(30, 58, 138, 0.08)'
                    }
                  }}
                >
                  <Box sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: `${capability.color}15`,
                    border: `2px solid ${capability.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: capability.color,
                    fontSize: '1.5rem'
                  }}>
                    {capability.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="700" gutterBottom color="#1e3a8a">
                    {capability.title}
                  </Typography>
                  <Typography color="#64748b">
                    {capability.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        {/* <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h3" fontWeight="800" gutterBottom>
            Ready to Build with Modern Tech?
          </Typography>

          <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Let's discuss how our technology expertise can transform your ideas into reality.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                py: 2,
                px: 6,
                background: 'white',
                color: '#1d4ed8',
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  background: '#f8fafc'
                }
              }}
            >
              Discuss Your Project
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                py: 2,
                px: 6,
                borderColor: 'white',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              View Case Studies
            </Button>
          </Stack>
        </Paper> */}
      </Container>
    </Box>
  )
}

export default Solutions