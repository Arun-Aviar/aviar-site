import React from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Button
} from '@mui/material'
import { motion } from 'framer-motion'
import WhatWeDo from './subs/WhatWeDo'

const MotionBox = motion(Box)

const Home = () => {
  return (
    <>

      {/* HERO — FULL WIDTH */}
      <MotionBox
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          py: { xs: 12, md: 20 },
          background: 'linear-gradient(135deg, #63d0ff, #2d76c0, #0e3960)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontWeight="800"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Global Project & Product Development Services Built for Scale
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: { xs: '90%', md: 700 },
              mx: 'auto',
              opacity: 0.9,
              mb: 5
            }}
          >
            AVIAR Technology Services helps enterprises and growing organizations design, build, and deliver technology solutions through a secure, scalable global delivery model.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 2,
              boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
              '&:hover': {
                backgroundColor: '#1f4e8c',
                transform: 'translateY(-2px)',
                boxShadow: '0px 6px 20px rgba(0,0,0,0.4)'
              }
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Container>
      </MotionBox>

      {/* WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background:
                'linear-gradient(145deg, #ffffff, #f3f6f9)'
            }}
          >
            <Typography
              variant="h3"
              fontWeight="700"
              gutterBottom
            >
              Why Businesses Choose AVIAR Technology Services
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              component="ul"
              sx={{
                pl: 0,
                listStyle: 'none',
                fontSize: 18,
                lineHeight: 1.8
              }}
            >
              <li>
                ✔ Proven Delivery Model
                We combine US-based leadership with a high-quality offshore delivery team to ensure speed, accountability, and cost efficiency.
              </li>
              <li>
                ✔ Lower Total Cost of Ownership (TCO)
                Our clients reduce technology and staffing costs by up to 30–50% without sacrificing performance.
              </li>
              <li>
                ✔ Flexible Engagement Models
                Project-based consulting, contract staffing, or full-cycle delivery — we adapt to your business needs.
              </li>
              <li>
                ✔ Trusted Since 2015
                Serving corporate and small-business clients across multiple industries with consistent results.
              </li>
            </Box>
          </Paper>
        </MotionBox>
      </Container>

      <WhatWeDo />

      {/* TECHNOLOGY COMPANY SECTION */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{
          py: 12,
          backgroundColor: '#f5f7fa'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="700"
            gutterBottom
          >
            Every Business Is a Technology Company
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 18,
              lineHeight: 1.9,
              color: 'text.secondary'
            }}
          >
            In today’s digital-first world, technology is no longer a
            support function — it is the foundation of how businesses
            create value, reach customers, and scale globally.
            <br /><br />
            As digital innovation accelerates and customer expectations
            evolve, technology becomes embedded into every aspect of
            strategy, operations, and growth.
            <br /><br />
            <strong>
              Every company is a technology company because technology
              touches every part of modern life.
            </strong>
          </Typography>
        </Container>
      </MotionBox>

      {/* TECHNOLOGY COMPANY SECTION */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{
          py: 12,
          backgroundColor: '#d0f3f8ff'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="700"
            gutterBottom
          >
            Leveraging technology for across the board is standard
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 18,
              lineHeight: 1.9,
              color: 'text.secondary'
            }}
          >
            AVIAR Technology Services helps from state-of-art data collection systems to supply chain management, no aspect of a business is left untouched by us.
            <br /><br />
            We enable companies use tech continuously to produce new goods and services. Beyond products, AVIAR Technology Services plays a role in marketing, recruiting, and internal communications. We use tech to improve not only the lives of your customers but also your internal workflows.
            AVIAR Technology Services helps businesses dipping into the tech industry and embracing a customer-centric and digital-first mindset.
            <strong>
              Every company is a technology company because technology
              touches every part of modern life.
            </strong>
          </Typography>
        </Container>
      </MotionBox>

    </>
  )
}

export default Home
