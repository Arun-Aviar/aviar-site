import React from 'react'
import { Container, Typography, Box, Grid, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { PhoneAndroid, Web } from '@mui/icons-material'

const MotionBox = motion(Box)

const mobileApps = [
  {
    name: 'Alumni',
    desc: 'A networking platform that connects alumni communities and institutions.',
    tags: ['Networking', 'Community'],
    icon: '👥'
  },
  {
    name: 'Leading Jewellery Client',
    desc: 'A custom mobile solution streamlining retail and inventory operations.',
    tags: ['Retail', 'Inventory'],
    icon: '💎'
  },
  {
    name: 'Tamizhal Inaivom',
    desc: 'A community engagement app promoting cultural collaboration.',
    tags: ['Culture', 'Community'],
    icon: '🌿'
  },
  {
    name: 'Salon App',
    desc: 'An appointment and customer management platform for salons.',
    tags: ['Booking', 'Service'],
    icon: '✂️'
  },
  {
    name: 'Student App',
    desc: 'A digital learning companion for students and institutions.',
    tags: ['Education', 'Learning'],
    icon: '🎓'
  }
]

const webApps = [
  {
    name: 'Kharpi',
    desc: 'A web platform designed for streamlined business workflows.',
    tags: ['Business', 'Automation'],
    icon: '⚙️'
  },
  {
    name: 'Relisafe',
    desc: 'A compliance and safety management solution for enterprises.',
    tags: ['Compliance', 'Safety'],
    icon: '🛡️'
  },
  {
    name: 'Online Dispute Resolution',
    desc: 'A secure platform enabling digital legal dispute resolution.',
    tags: ['Legal', 'Security'],
    icon: '⚖️'
  },
  {
    name: 'Liveez (Apartment)',
    desc: 'A smart community management system for apartment living.',
    tags: ['Community', 'Management'],
    icon: '🏠'
  },
  {
    name: 'Mortgage Company',
    desc: 'A digital mortgage processing and customer engagement platform.',
    tags: ['Finance', 'Processing'],
    icon: '💰'
  },
  {
    name: 'Construction Company',
    desc: 'A project and resource management solution for construction firms.',
    tags: ['Construction', 'Management'],
    icon: '🏗️'
  }
]

const ProductCard = ({ name, desc, tags, icon, index, type }) => {
  const isMobile = type === 'mobile'
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -12,
        boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-100px" }}
      sx={{
        position: 'relative',
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.2)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isMobile 
            ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.03), rgba(0, 242, 254, 0.03))'
            : 'linear-gradient(135deg, rgba(67, 233, 123, 0.03), rgba(56, 249, 215, 0.03))',
          zIndex: 0
        }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: isMobile
            ? 'radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(67, 233, 123, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }}
      />
      
      {/* Animated Gradient Border */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          padding: '1px',
          background: isMobile
            ? 'linear-gradient(135deg, #4facfe, #00f2fe)'
            : 'linear-gradient(135deg, #43e97b, #38f9d7)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: 3,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 1
          }
        }}
      />
      
      {/* Icon Container */}
      <MotionBox
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.05 + 0.2 }}
        sx={{
          position: 'absolute',
          top: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isMobile
            ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))'
            : 'linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1))',
          fontSize: 28,
          zIndex: 1
        }}
      >
        {icon}
      </MotionBox>

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, p: 4 }}>
        {/* Type Badge */}
        <Chip
          icon={isMobile ? <PhoneAndroid /> : <Web />}
          label={isMobile ? 'Mobile' : 'Web'}
          size="small"
          sx={{
            mb: 3,
            background: isMobile
              ? 'linear-gradient(135deg, #4facfe, #00f2fe)'
              : 'linear-gradient(135deg, #43e97b, #38f9d7)',
            color: 'white',
            fontWeight: 600,
            '& .MuiChip-icon': {
              color: 'white'
            }
          }}
        />

        {/* Name */}
        <Typography 
          variant="h5" 
          fontWeight="700" 
          gutterBottom
          sx={{
            background: isMobile
              ? 'linear-gradient(135deg, #4facfe, #00f2fe)'
              : 'linear-gradient(135deg, #43e97b, #38f9d7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            pr: 6
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        <Typography 
          color="text.secondary" 
          sx={{ 
            lineHeight: 1.7,
            mb: 3,
            fontSize: '0.95rem'
          }}
        >
          {desc}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{
                borderColor: isMobile ? '#4facfe40' : '#43e97b40',
                color: isMobile ? '#4facfe' : '#43e97b',
                fontWeight: 500,
                fontSize: '0.75rem'
              }}
            />
          ))}
        </Box>
      </Box>
    </MotionBox>
  )
}

const Products = () => {
  return (
    <Box sx={{ 
      py: { xs: 12, md: 16 },
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e3f2fd 50%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(67, 233, 123, 0.1) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }}
      />

      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{ 
            textAlign: 'center', 
            mb: 12,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Chip 
            label="OUR PORTFOLIO" 
            sx={{ 
              mb: 3,
              px: 2,
              py: 0.5,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              letterSpacing: 1
            }}
          />
          
          <Typography 
            variant="h2" 
            fontWeight="900" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Digital Products
          </Typography>
          
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            We craft exceptional digital experiences that solve complex business 
            challenges through innovative mobile and web solutions.
          </Typography>
        </MotionBox>

        {/* Mobile Apps Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{ mb: 12 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
            <Box sx={{ 
              width: 4, 
              height: 40, 
              mr: 3,
              background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
              borderRadius: 2
            }} />
            <Typography variant="h3" fontWeight="800">
              Mobile Applications
            </Typography>
            <Box sx={{ flex: 1, ml: 3, height: 2, background: 'linear-gradient(90deg, #4facfe20, transparent)' }} />
          </Box>

          <Grid container spacing={4}>
            {mobileApps.map((app, index) => (
              <Grid item xs={12} sm={6} lg={4} key={app.name}>
                <ProductCard
                  {...app}
                  index={index}
                  type="mobile"
                />
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Web Apps Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
            <Box sx={{ 
              width: 4, 
              height: 40, 
              mr: 3,
              background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
              borderRadius: 2
            }} />
            <Typography variant="h3" fontWeight="800">
              Web Applications
            </Typography>
            <Box sx={{ flex: 1, ml: 3, height: 2, background: 'linear-gradient(90deg, #43e97b20, transparent)' }} />
          </Box>

          <Grid container spacing={4}>
            {webApps.map((app, index) => (
              <Grid item xs={12} sm={6} lg={4} key={app.name}>
                <ProductCard
                  {...app}
                  index={index}
                  type="web"
                />
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Footer Note */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mt: 12,
            pt: 6,
            borderTop: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ fontStyle: 'italic', maxWidth: 600, mx: 'auto' }}
          >
            "Every product is a unique solution, crafted with precision and designed for impact."
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Products