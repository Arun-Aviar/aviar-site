import React from 'react'
import { Container, Typography, Box, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { motion } from 'framer-motion'
import { 
  PhoneAndroid, 
  Web, 
  CheckCircle, 
  TrendingUp,
  School,
  Groups,
  ContentCut,
  Public,
  Dashboard,
  Event,
  Payment,
  Notifications,
  Analytics,
  People,
  DirectionsBus,
  Campaign
} from '@mui/icons-material'

const MotionBox = motion(Box)

const products = [
  {
    name: 'Alumni Engagement Platform',
    description: 'A scalable alumni networking and engagement platform designed for schools, universities, and professional institutions.',
    icon: <Groups />,
    iconBg: '#4facfe',
    type: 'web',
    capabilities: [
      'Centralized alumni database management',
      'Event coordination and registration',
      'Integrated communication modules',
      'Payment gateway integration for donations',
      'Community building tools'
    ],
    impact: [
      'Increased alumni engagement',
      'Structured fundraising capability',
      'Improved institutional visibility',
      'Automated communication workflows'
    ]
  },
  {
    name: 'Saloon Management Application',
    description: 'A customer-centric appointment and engagement platform for modern salon and grooming businesses.',
    icon: <ContentCut />,
    iconBg: '#43e97b',
    type: 'mobile',
    capabilities: [
      'Real-time appointment scheduling',
      'Offer & campaign management',
      'Automated service reminders',
      'Customer preference tracking',
      'Analytics dashboard'
    ],
    impact: [
      'Increased repeat customer rate',
      'Reduced no-shows',
      'Improved operational scheduling',
      'Data-driven service optimization'
    ]
  },
  {
    name: 'School Management Mobile Platform',
    description: 'An integrated digital platform for educational institutions to manage academic, operational, and communication workflows.',
    icon: <School />,
    iconBg: '#a78bfa',
    type: 'mobile',
    capabilities: [
      'Student performance tracking',
      'Attendance management',
      'Bus tracking integration',
      'Administrative workflows',
      'Parent communication modules'
    ],
    impact: [
      'Improved transparency',
      'Reduced administrative overhead',
      'Enhanced parent engagement',
      'Digitized institutional operations'
    ]
  },
  {
    name: 'Tamizhal Inaivom Platform',
    description: 'A global community platform designed to connect Tamil professionals and families living abroad.',
    icon: <Public />,
    iconBg: '#f97316',
    type: 'web',
    capabilities: [
      'Community networking',
      'Event organization',
      'Travel coordination',
      'Local carpool arrangement',
      'Cultural event broadcasting'
    ],
    impact: [
      'Strengthened community connectivity',
      'Structured global engagement',
      'Simplified event and travel coordination'
    ]
  }
]

const ProductCard = ({ product, index }) => {
  const isMobile = product.type === 'mobile'
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-100px" }}
      sx={{
        position: 'relative',
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Header Gradient */}
      <Box
        sx={{
          height: 8,
          background: `linear-gradient(90deg, ${product.iconBg}40, ${product.iconBg})`
        }}
      />

      {/* Content */}
      <Box sx={{ p: 4 }}>
        {/* Icon and Type */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${product.iconBg}15`,
              color: product.iconBg,
              fontSize: 28
            }}
          >
            {product.icon}
          </Box>
          <Chip
            icon={isMobile ? <PhoneAndroid sx={{ fontSize: 16 }} /> : <Web sx={{ fontSize: 16 }} />}
            label={isMobile ? 'Mobile App' : 'Web Platform'}
            size="small"
            sx={{
              background: `${product.iconBg}10`,
              color: product.iconBg,
              fontWeight: 600,
              border: `1px solid ${product.iconBg}30`
            }}
          />
        </Box>

        {/* Title */}
        <Typography 
          variant="h5" 
          fontWeight="700" 
          gutterBottom
          sx={{ color: '#1a2639' }}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Typography 
          color="text.secondary" 
          sx={{ 
            lineHeight: 1.7,
            mb: 4,
            fontSize: '0.95rem'
          }}
        >
          {product.description}
        </Typography>

        {/* Capabilities Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Dashboard sx={{ color: product.iconBg, fontSize: 20 }} />
            <Typography fontWeight="600" variant="subtitle1">
              Capabilities
            </Typography>
          </Box>
          <List dense disablePadding>
            {product.capabilities.map((cap, i) => (
              <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ color: product.iconBg, fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={cap}
                  primaryTypographyProps={{ 
                    variant: 'body2',
                    sx: { color: '#2d3a4f' }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Business Impact Section */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <TrendingUp sx={{ color: product.iconBg, fontSize: 20 }} />
            <Typography fontWeight="600" variant="subtitle1">
              Business Impact
            </Typography>
          </Box>
          <List dense disablePadding>
            {product.impact.map((imp, i) => (
              <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: 1,
                      background: `${product.iconBg}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: product.iconBg,
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                  >
                    {i + 1}
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary={imp}
                  primaryTypographyProps={{ 
                    variant: 'body2',
                    sx: { color: '#2d3a4f', fontWeight: 500 }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </MotionBox>
  )
}

const Products = () => {
  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
          borderRadius: '50%'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(67, 233, 123, 0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          borderRadius: '50%'
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
            mb: 8,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Chip 
            label="OUR PRODUCTS" 
            sx={{ 
              mb: 3,
              px: 2,
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              color: 'white',
              fontWeight: 600,
              letterSpacing: 1,
              borderRadius: 1
            }}
          />
          
          <Typography 
            variant="h2" 
            fontWeight="800" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}
          >
            Digital Solutions
          </Typography>
          
          <Typography
            variant="h6"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              color: '#475569',
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}
          >
            Comprehensive platforms that transform how organizations connect, 
            manage operations, and drive engagement.
          </Typography>
        </MotionBox>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={product.name}>
              <ProductCard product={product} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        {/* <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(4, 1fr)' },
            gap: 3,
            mt: 12,
            p: 4,
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.5)'
          }}
        >
          {[
            { value: '15+', label: 'Products Launched', color: '#4facfe' },
            { value: '50k+', label: 'Active Users', color: '#43e97b' },
            { value: '98%', label: 'Client Satisfaction', color: '#a78bfa' },
            { value: '24/7', label: 'Support Available', color: '#f97316' }
          ].map((stat, i) => (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h3" 
                fontWeight="800"
                sx={{ color: stat.color }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          ))}
        </MotionBox> */}
      </Container>
    </Box>
  )
}

export default Products