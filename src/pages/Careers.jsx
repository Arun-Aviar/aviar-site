import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Chip,
  Stack,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab
} from '@mui/material'
import { motion } from 'framer-motion'
import {
  Work,
  LocationOn,
  TrendingUp,
  Handshake,
  Diversity3,
  Lightbulb,
  People,
  CorporateFare,
  Search,
  FilterList,
  School,
  BusinessCenter,
  Engineering,
  DesignServices,
  Computer,
  Verified,
  AccessTime,
  AttachMoney,
  HealthAndSafety,
  MenuBook,
  SportsEsports,
  EmojiEvents,
  ExpandMore,
  Send,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram
} from '@mui/icons-material'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)
const MotionCard = motion(Card)

const jobCategories = [
  {
    title: 'Software Development',
    icon: <Computer />,
    count: 8,
    description: 'Frontend, Backend, Full-Stack, Mobile Development',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
  },
  {
    title: 'Product Engineering',
    icon: <Engineering />,
    count: 6,
    description: 'Architecture, System Design, Technical Leadership',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
  },
  {
    title: 'QA & Testing',
    icon: <Verified />,
    count: 5,
    description: 'Automation, Manual Testing, Quality Assurance',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    title: 'UI/UX Design',
    icon: <DesignServices />,
    count: 4,
    description: 'Product Design, User Research, Prototyping',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
  {
    title: 'Project Coordination',
    icon: <BusinessCenter />,
    count: 3,
    description: 'Project Management, Agile Coaching, Delivery',
    gradient: 'linear-gradient(135deg, #ec4899, #db2777)'
  },
  {
    title: 'DevOps & Cloud',
    icon: <School />,
    count: 4,
    description: 'Infrastructure, CI/CD, Cloud Architecture',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
  }
]

const openPositions = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Software Development',
    location: 'Remote (USA/India)',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Build scalable enterprise applications using React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
    featured: true
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product Engineering',
    location: 'Bloomington, IL',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead product strategy and execution for enterprise software solutions.',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Roadmapping'],
    featured: true
  },
  {
    id: 3,
    title: 'QA Automation Engineer',
    department: 'QA & Testing',
    location: 'Tiruvannamalai, India',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop and maintain automated test frameworks for web applications.',
    skills: ['Selenium', 'Cypress', 'JavaScript', 'API Testing'],
    featured: false
  },
  {
    id: 4,
    title: 'UX Designer',
    department: 'UI/UX Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design intuitive user experiences for enterprise applications.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    featured: false
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'DevOps & Cloud',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
    featured: true
  },
  {
    id: 6,
    title: 'Project Coordinator',
    department: 'Project Coordination',
    location: 'Bloomington, IL',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Coordinate project activities and ensure timely delivery.',
    skills: ['Agile', 'JIRA', 'Communication', 'Risk Management'],
    featured: false
  }
]

const benefits = [
  {
    icon: <AttachMoney />,
    title: 'Competitive Compensation',
    description: 'Industry-standard salaries with performance bonuses'
  },
  {
    icon: <HealthAndSafety />,
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision insurance'
  },
  {
    icon: <MenuBook />,
    title: 'Learning & Development',
    description: 'Annual training budget and certification support'
  },
  {
    icon: <AccessTime />,
    title: 'Flexible Work',
    description: 'Remote options and flexible working hours'
  },
  {
    icon: <SportsEsports />,
    title: 'Work-Life Balance',
    description: 'Generous PTO and parental leave policies'
  },
  {
    icon: <EmojiEvents />,
    title: 'Career Growth',
    description: 'Clear promotion paths and mentorship programs'
  }
]

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [tabValue, setTabValue] = useState(0)

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || position.department === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPositions = openPositions.filter(pos => pos.featured)

  return (
    <Box sx={{
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">

        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            mb: 8,
            position: 'relative'
          }}
        >
          <Chip
            label="JOIN OUR TEAM"
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
            Build Real Products.
            <Box component="span" sx={{ display: 'block', color: '#1e3a8a' }}>
              Solve Real Problems.
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
            Join a team that values innovation, execution, and meaningful impact.
            Work on challenging projects that transform businesses worldwide.
          </Typography>

          {/* Search Bar */}
          {/* <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{
              p: 2,
              borderRadius: 3,
              background: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              maxWidth: 600,
              mx: 'auto',
              mb: 4
            }}
          >
            <TextField
              fullWidth
              placeholder="Search positions by role, skill, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#8b5cf6' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      startIcon={<FilterList />}
                      sx={{ color: '#8b5cf6', fontWeight: 600 }}
                    >
                      Filters
                    </Button>
                  </InputAdornment>
                ),
                sx: { border: 'none', '& fieldset': { border: 'none' } }
              }}
            />
          </MotionPaper> */}
        </MotionBox>

        {/* Quick Stats */}
        {/* <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 10 }}
        >
          <Grid container spacing={3} justifyContent="center">
            {[
              { label: 'Open Positions', value: '26+', color: '#3b82f6' },
              { label: 'Countries', value: '2', color: '#10b981' },
              { label: 'Team Size', value: '100+', color: '#8b5cf6' },
              { label: 'Growth Rate', value: '40%', color: '#f59e0b' }
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                >
                  <Typography 
                    variant="h2" 
                    fontWeight="900"
                    sx={{ color: stat.color, mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography color="text.secondary" fontWeight="600">
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox> */}

        {/* Job Categories */}
        {/* <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 10 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Explore Opportunities
          </Typography>
          
          <Grid container spacing={3}>
            {jobCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                  onClick={() => setSelectedCategory(category.title)}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: selectedCategory === category.title ? '2px solid #8b5cf6' : '1px solid rgba(0,0,0,0.05)',
                    background: 'white'
                  }}
                >
                  <Box sx={{ 
                    height: 6,
                    background: category.gradient
                  }} />
                  
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: `${category.gradient}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        color: category.gradient.split(', ')[1].split(')')[0]
                      }}>
                        {category.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight="700">
                          {category.title}
                        </Typography>
                        <Chip 
                          label={`${category.count} openings`}
                          size="small"
                          sx={{ 
                            background: '#10b981',
                            color: 'white',
                            fontWeight: 600,
                            mt: 1
                          }}
                        />
                      </Box>
                    </Box>
                    
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {category.description}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: category.gradient.split(', ')[1].split(')')[0],
                        borderColor: `${category.gradient.split(', ')[1].split(')')[0]}40`,
                        fontWeight: 600
                      }}
                    >
                      View Positions →
                    </Button>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox> */}

        {/* Featured Positions */}
        {/* {featuredPositions.length > 0 && (
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            sx={{ mb: 10 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ 
                width: 6, 
                height: 40, 
                mr: 3,
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: 3
              }} />
              <Typography variant="h2" fontWeight="800">
                Featured Positions
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {featuredPositions.map((position, index) => (
                <Grid item xs={12} md={6} key={position.id}>
                  <MotionPaper
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)' }}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      background: 'white',
                      border: '2px solid rgba(139, 92, 246, 0.2)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Chip 
                      label="FEATURED" 
                      size="small"
                      sx={{ 
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        color: 'white',
                        fontWeight: 700
                      }}
                    />
                    
                    <Typography variant="h5" fontWeight="700" gutterBottom>
                      {position.title}
                    </Typography>
                    
                    <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                      <Chip 
                        icon={<LocationOn />}
                        label={position.location}
                        size="small"
                        variant="outlined"
                      />
                      <Chip 
                        label={position.type}
                        size="small"
                        variant="outlined"
                      />
                      <Chip 
                        label={position.experience}
                        size="small"
                        variant="outlined"
                      />
                    </Stack>
                    
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {position.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" fontWeight="600" color="text.secondary" gutterBottom>
                        Key Skills:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {position.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{
                              background: 'rgba(139, 92, 246, 0.1)',
                              color: '#7c3aed',
                              fontWeight: 500
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        fontWeight: 700,
                        py: 1.5
                      }}
                    >
                      Apply Now
                    </Button>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        )} */}

        {/* All Positions with Tabs */}
        {/* <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 10 }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={tabValue} 
              onChange={(e, newValue) => setTabValue(newValue)}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Positions" />
              <Tab label="USA Based" />
              <Tab label="India Based" />
              <Tab label="Remote" />
              <Tab label="Full-time" />
              <Tab label="Engineering" />
            </Tabs>
          </Box>
          
          <Grid container spacing={3}>
            {filteredPositions.map((position, index) => (
              <Grid item xs={12} key={position.id}>
                <MotionPaper
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          color: 'white'
                        }}>
                          <Work sx={{ fontSize: 20 }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="700">
                            {position.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {position.department} • {position.location}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {position.description}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {position.skills.slice(0, 3).map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                        {position.skills.length > 3 && (
                          <Chip
                            label={`+${position.skills.length - 3} more`}
                            size="small"
                            variant="outlined"
                          />
                        )}
                      </Stack>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <Stack spacing={2} alignItems={{ md: 'flex-end' }}>
                        <Stack direction="row" spacing={1}>
                          <Chip 
                            label={position.type}
                            size="small"
                            sx={{ background: '#10b98120', color: '#059669' }}
                          />
                          <Chip 
                            label={position.experience}
                            size="small"
                            sx={{ background: '#3b82f620', color: '#1d4ed8' }}
                          />
                        </Stack>
                        
                        <Button
                          variant="outlined"
                          startIcon={<Send />}
                          sx={{
                            borderColor: '#8b5cf6',
                            color: '#7c3aed',
                            fontWeight: 600,
                            '&:hover': {
                              borderColor: '#7c3aed',
                              background: 'rgba(139, 92, 246, 0.05)'
                            }
                          }}
                        >
                          Apply Now
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </MotionPaper>
              </Grid>
            ))}
            
            {filteredPositions.length === 0 && (
              <Grid item xs={12}>
                <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 3 }}>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    No positions match your search criteria
                  </Typography>
                  <Typography color="text.secondary">
                    Try adjusting your filters or search terms
                  </Typography>
                </Paper>
              </Grid>
            )}
          </Grid>
        </MotionBox> */}

        {/* Benefits Section */}
        {/* <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 10 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Why Join AVIAR?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <List sx={{ '& .MuiListItem-root': { py: 2 } }}>
                {[
                  {
                    icon: <Diversity3 />,
                    title: 'Global Impact',
                    description: 'Work on products used by enterprises worldwide'
                  },
                  {
                    icon: <Lightbulb />,
                    title: 'Innovation Culture',
                    description: 'Solve challenging problems with modern technologies'
                  },
                  {
                    icon: <People />,
                    title: 'Talent Community',
                    description: 'Learn from and collaborate with skilled professionals'
                  },
                  {
                    icon: <CorporateFare />,
                    title: 'Enterprise Experience',
                    description: 'Gain exposure to enterprise-grade projects and processes'
                  }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <Box sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 58, 138, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1d4ed8'
                      }}>
                        {item.icon}
                      </Box>
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="h6" fontWeight="700">
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Typography color="text.secondary">
                          {item.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(124, 58, 237, 0.05))',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  height: '100%'
                }}
              >
                <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: '#7c3aed' }}>
                  Employee Benefits
                </Typography>
                
                <Grid container spacing={2}>
                  {benefits.map((benefit, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        background: 'white',
                        height: '100%'
                      }}>
                        <Box sx={{ 
                          color: '#7c3aed', 
                          mb: 1,
                          fontSize: '1.5rem'
                        }}>
                          {benefit.icon}
                        </Box>
                        <Typography variant="subtitle2" fontWeight="700" gutterBottom>
                          {benefit.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {benefit.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MotionBox> */}

        {/* FAQ Section */}
        {/* <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 10 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Frequently Asked Questions
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {[
              {
                question: 'What is the interview process like?',
                answer: 'Our process typically includes an initial screening, technical assessment, team interview, and final discussion with leadership. We aim to complete the process within 2-3 weeks.'
              },
              {
                question: 'Do you offer remote work options?',
                answer: 'Yes, many of our positions offer remote flexibility. We have a hybrid model that allows for both in-office and remote work based on role requirements.'
              },
              {
                question: 'What career growth opportunities exist?',
                answer: 'We offer clear promotion paths, regular performance reviews, mentorship programs, and budget for certifications and training.'
              },
              {
                question: 'Do you sponsor work visas?',
                answer: 'Yes, we sponsor work visas for qualified candidates in both the USA and India, depending on the role and location.'
              }
            ].map((faq, index) => (
              <Accordion 
                key={index}
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  '&:before': { display: 'none' }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6" fontWeight="600">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </MotionBox> */}

        {/* CTA Section */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              color: 'white',
              textAlign: 'center',
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
                Ready to Build Your Future With Us?
              </Typography>

              <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                Don't see the perfect role? Send us your resume anyway — we're always looking for great talent.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
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
                  aviar@aviartechservices.com
                </Button> */}
                {/* <Typography> */}
                  send your resume to 
                {/* </Typography> */}
                <Typography variant='h6' pl={2}>
                  aviar@aviartechservices.com
                </Typography>

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
                  Submit General Application
                </Button> */}
              </Stack>

              <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.2)' }} />

              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Follow us for updates
              </Typography>

              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  startIcon={<LinkedIn />}
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                  variant="outlined"
                  target='blank'
                  href='https://www.linkedin.com/company/aviartechservices/'
                >
                  LinkedIn
                </Button>
                <Button
                  startIcon={<Instagram />}
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                  variant="outlined"
                  target='blank'
                  href='https://www.instagram.com/aviar_technology_services?igsh=NXM5NmZjbW91MDRm'
                >
                  Instagram
                </Button>
                <Button
                  startIcon={<Facebook />}
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                  variant="outlined"
                  target='blank'
                  href='https://www.facebook.com/share/1aE3gBnDhY/'
                >
                  Facebook
                </Button>
              </Stack>
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Careers