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
  Lightbulb,
  Gavel,
  Visibility,
  Architecture,
  Security,
  Timeline,
  AccountBalance,
  PrecisionManufacturing,
  CloudSync,
  Storage,
  Assessment,
  Scale,
  Check
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 3
            }}
          >
            Global Engineering. Structured Delivery. Measurable Outcomes.
          </Typography>

          <Chip
            label="SINCE 2015 · US-GOVERNED · INDIA ENGINEERING"
            sx={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: 1,
              py: 2
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
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 4,
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

                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: '#334155' }}>
                  Founded in 2015 and headquartered in Bloomington, Illinois, AVIAR Technology Services is a US-governed technology delivery firm combining strategic leadership with scalable offshore engineering execution.
                </Typography>

                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: '#334155' }}>
                  We help enterprises and growth-stage companies modernize systems, build scalable digital platforms, and optimize operational efficiency through a structured hybrid delivery model.
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 138, 0.05))',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: 3
                  }}
                >
                  <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#1e3a8a', fontWeight: 500 }}>
                    Our approach balances US-based governance and stakeholder alignment with a 100-seat engineering center in India — enabling cost optimization, delivery acceleration, and long-term scalability without compromising quality or accountability.
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <MotionPaper
                  whileHover={{ y: -5 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CorporateFare sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h5" fontWeight="700">US-Based Governance</Typography>
                  </Box>
                  <Typography sx={{ mb: 2, opacity: 0.9 }}>
                    Our US leadership team ensures:
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      'Executive-level communication',
                      'Architectural oversight',
                      'Structured milestone management',
                      'Risk mitigation',
                      'Contractual accountability'
                    ].map((item, i) => (
                      <Grid item xs={12} key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Check sx={{ fontSize: 18, mr: 1, opacity: 0.9 }} />
                          <Typography variant="body2">{item}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Typography sx={{ mt: 3, opacity: 0.9, fontStyle: 'italic' }}>
                    We act as a strategic extension of your internal technology leadership.
                  </Typography>
                </MotionPaper>

                <MotionPaper
                  whileHover={{ y: -5 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    color: 'white'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Engineering sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h5" fontWeight="700">India Engineering Center</Typography>
                  </Box>
                  <Typography sx={{ mb: 2, opacity: 0.9 }}>
                    100-seat capacity providing:
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      'Full-stack engineering capability',
                      'QA automation and testing',
                      'Cloud & DevOps execution',
                      'Ongoing application maintenance',
                      'Scalable team expansion'
                    ].map((item, i) => (
                      <Grid item xs={12} key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Check sx={{ fontSize: 18, mr: 1, opacity: 0.9 }} />
                          <Typography variant="body2">{item}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Typography sx={{ mt: 3, opacity: 0.9, fontStyle: 'italic' }}>
                    Enables 40–50% cost optimization while maintaining enterprise standards.
                  </Typography>
                </MotionPaper>
              </Stack>
            </Grid>
          </Grid>
        </MotionBox>

        {/* What We Believe Section */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
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
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)'
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Lightbulb sx={{ fontSize: 48, mr: 3, color: '#fbbf24' }} />
                <Typography variant="h2" fontWeight="800">
                  What We Believe
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: 800 }}>
                Technology is no longer a support function — it is the foundation of competitive advantage.
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Every organization today operates as a technology-driven enterprise. Whether delivering financial services, retail operations, logistics systems, or education platforms, digital infrastructure determines speed, scalability, and long-term viability.
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {[
                  { icon: <Security />, text: 'Reduce risk' },
                  { icon: <Timeline />, text: 'Improve operational predictability' },
                  { icon: <Assessment />, text: 'Lower total cost of ownership' },
                  { icon: <Scale />, text: 'Enable sustainable growth' }
                ].map((item, i) => (
                  <Grid item xs={6} md={3} key={i}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ color: '#60a5fa' }}>{item.icon}</Box>
                      <Typography>{item.text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ mt: 4, opacity: 0.9, fontStyle: 'italic', borderLeft: '4px solid #3b82f6', pl: 3 }}>
                Our focus is not just building systems — it is building structured delivery frameworks that scale with our clients.
              </Typography>
            </Box>
          </Paper>
        </MotionBox>

        {/* Our Experience */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Experience
          </Typography>

          <Grid container spacing={3}>
            {[
              'Enterprise platform development',
              'Product engineering initiatives',
              'Application modernization',
              'Secure cloud deployments',
              'Long-term managed services engagements'
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionPaper
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Star sx={{ color: '#3b82f6' }} />
                  <Typography variant="h6">{item}</Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>

          <Typography sx={{ textAlign: 'center', mt: 4, color: '#475569' }}>
            We serve corporate and small-to-mid market clients across multiple industries, providing both project-based execution and long-term delivery partnerships
          </Typography>
        </MotionBox>

        {/* India Talent Initiative Section */}
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
              background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
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
                    label="TALENT DEVELOPMENT & ENGINEERING PIPELINE"
                    sx={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 700,
                      mb: 1
                    }}
                  />
                  <Typography variant="h2" fontWeight="800">
                    India Operations
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 6, opacity: 0.9, maxWidth: 800, fontSize: '1.1rem' }}>
                Our India operations maintain structured talent development initiatives in partnership with local institutions. By cultivating engineering talent through training and placement programs, we ensure:
              </Typography>

              <Grid container spacing={4}>
                {[
                  {
                    title: 'Sustainable Resource Availability',
                    icon: <People />,
                    items: ['Continuous skill enhancement', 'Long-term delivery consistency']
                  },
                  {
                    title: 'Reduced Volatility',
                    icon: <Timeline />,
                    items: ['Protected client continuity', 'Stable engineering pipeline']
                  }
                ].map((section, idx) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <Card sx={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          {section.icon}
                          <Typography variant="h5" fontWeight="700" sx={{ ml: 2 }}>
                            {section.title}
                          </Typography>
                        </Box>
                        <Stack spacing={2}>
                          {section.items.map((item, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Star sx={{ fontSize: 16, mr: 2, opacity: 0.8 }} />
                              <Typography>{item}</Typography>
                            </Box>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </MotionBox>

        {/* Core Principles */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Core Principles
          </Typography>

          <Grid display='flex' justifyContent='space-around' alignItems='center' container >
            {[
              { icon: <Gavel />, title: 'Accountability', desc: 'Clear ownership, defined milestones, measurable deliverables.' },
              { icon: <Visibility />, title: 'Operational Transparency', desc: 'Structured reporting, defined SLAs, consistent communication.' },
              { icon: <Architecture />, title: 'Scalable Architecture', desc: 'Solutions designed for performance, maintainability, and growth.' },
              { icon: <PrecisionManufacturing />, title: 'Cost Discipline', desc: 'Optimization without compromising quality.' },
              { icon: <Handshake />, title: 'Long-Term Partnership', desc: 'Sustained engagement over transactional delivery.' }
            ].map((principle, index) => (
              <Grid item xs={12} md={4} m={1} key={index}>
                <MotionPaper
                  whileHover={{ y: -3 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'white',
                    height: '100%',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <Box sx={{ color: '#3b82f6', mb: 3 }}>{principle.icon}</Box>
                  <Typography variant="h5" fontWeight="700" gutterBottom>
                    {principle.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {principle.desc}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>


        {/* <Grid item xs={12} md={4} key={index}>
                <MotionPaper
                  whileHover={{ y: -8 }}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'white',
                    height: '100%',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <Box sx={{ color: '#3b82f6', mb: 3 }}>{principle.icon}</Box>
                  <Typography variant="h5" fontWeight="700" gutterBottom>
                    {principle.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {principle.desc}
                  </Typography>
                </MotionPaper>
              </Grid> */}

        {/* Leadership Commitment */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 12 }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #312e81, #4338ca)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" fontWeight="800" gutterBottom>
              Leadership Commitment
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
              Enterprise clients require more than technical skill — they require:
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
              {['Stability', 'Predictability', 'Governance', 'Confidentiality', 'Structured engagement'].map((item, i) => (
                <Grid item key={i}>
                  <Chip
                    label={item}
                    sx={{
                      background: 'rgba(255,255,255,0.15)',
                      color: 'white',
                      fontSize: '1rem',
                      py: 2
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Our leadership ensures that every engagement reflects these expectations.
            </Typography>
          </Paper>
        </MotionBox>

        {/* Closing Statement */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Paper
            sx={{
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
              color: 'white',
              textAlign: 'center',
              border: '1px solid #334155'
            }}
          >
            <Typography variant="h4" fontWeight="700" sx={{ mb: 3, color: '#94a3b8' }}>
              AVIAR Technology Services
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 900, mx: 'auto', lineHeight: 1.8, fontStyle: 'italic' }}>
              A structured global engineering partner committed to delivering measurable outcomes through disciplined execution, hybrid governance, and scalable delivery infrastructure.
            </Typography>
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
                Partner With Us
              </Typography>

              <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
                Let's build something remarkable together — with structured delivery and measurable outcomes.
              </Typography>

              <Button
                variant="contained"
                component={Link}
                size="large"
                to="/contact"
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
            </Box>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default AboutUs