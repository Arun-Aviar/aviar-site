import React, { useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Button,
  Modal,
  IconButton,
  Input,
  Grid,
  TextField,
  Chip
} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import { motion } from 'framer-motion'
import WhatWeDo from './subs/WhatWeDo'
import { Link } from 'react-router-dom'
import axios from 'axios';

const MotionBox = motion(Box)

const Home = () => {

  const [formModal, setFormModal] = useState(false)
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    whoYouAre: "",
    place: "",
    educationQualification: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.whoYouAre.trim()) {
      newErrors.whoYouAre = "This field is required";
    }

    if (!formData.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!formData.educationQualification.trim()) {
      newErrors.educationQualification =
        "Education is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/register",
        formData
      );
      console.log(res);
      // alert(res);

      // ✅ Close modal ONLY on success
      setFormModal(false);
    } catch (error) {
      console.error(error);
      // ✅ Show backend error message if exists
      const message =
        error.response?.data?.error || "Something went wrong";
      alert(message); // or snackbar / toast
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setFormModal(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
            US-Led. India-Engineered. Enterprise-Delivered.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: { xs: '90%', md: 700 },
              mx: 'auto',
              opacity: 0.9,
              mb: 3
            }}
          >
            Hybrid US governance with 100-seat India delivery center enabling 40–50% cost optimization and faster time-to-market.
          </Typography>

          <Box>
            <Chip
              label="Founded 2015 | US HQ – Illinois | 100-Seat India Development Center | Hybrid Delivery Model | Secure Global Operations"
              sx={{
                whiteSpace: "normal",
                height: "auto",
                py: 1,
                px: 1.5,
                textAlign: "center",
                fontSize: 14,
                bgcolor:'#1b5499ff',
                color: 'white',
              }}
            />
          </Box>

          <Button
            variant="contained"
            // color="secondary"
            component={Link}
            size="large"
            to={'/contact'}
            sx={{
              px: 4,
              mt: 3,
              bgcolor: '#02418fff',
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
              WHY ENTERPRISES CHOOSE AVIAR
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
                ✔ <strong>Hybrid Governance Model</strong><br />
                US-based leadership manages architecture, milestones, and stakeholder
                communication — while our India delivery center provides scalable
                engineering execution.

                <ul style={{ marginTop: 8, paddingLeft: 100 }}>
                  <li><strong>Result:</strong></li>
                  <li>Clear accountability</li>
                  <li>Faster iteration cycles</li>
                  <li>Reduced coordination risk</li>
                </ul>
              </li>

              <li>
                ✔ <strong>40–50% Cost Optimization</strong><br />
                Our offshore engineering structure enables meaningful cost reduction without compromising architectural standards, security, or performance.

                <ul style={{ marginTop: 8, paddingLeft: 100 }}>
                  <li><strong>Result:</strong></li>
                  <li>Lower Total Cost of Ownership</li>
                  <li>Budget reallocation to innovation</li>
                  <li>Sustainable scaling</li>
                </ul>
              </li>
              <li>
                ✔ <strong>Flexible Engagement Models</strong><br />
                We adapt to your business stage and operational needs:

                Dedicated Engineering Teams
                Project-Based Execution
                Product Co-Development
                Long-Term Application Support

                <ul style={{ marginTop: 8, paddingLeft: 100 }}>
                  <li><strong>Result:</strong></li>
                  <li>Operational flexibility</li>
                  <li>Reduced hiring risk</li>
                  <li>Scalable resource allocation</li>
                </ul>
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

      <Modal
        open={formModal}
        onClose={() => setFormModal(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            pl: 4,
            pr: 4,
            p: 2
          }}
        >
          <IconButton
            onClick={() => setFormModal(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon sx={{ color: 'red' }} />
          </IconButton>

          <Typography variant='h6' sx={{ pl: 1, pr: 1 }}>
            Talk to our career experts to help you find a <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }} >suitable career path</Typography>
          </Typography>
          <Grid justifyContent="center" container spacing={2} mt={5}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Phone Number"
                name="phoneNumber"
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                error={!!errors.gender}
                helperText={errors.gender}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="Who You Are"
                name="whoYouAre"
                value={formData.whoYouAre}
                onChange={handleChange}
                error={!!errors.whoYouAre}
                helperText={errors.whoYouAre}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="Place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                error={!!errors.place}
                helperText={errors.place}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="Education Qualification"
                name="educationQualification"
                value={formData.educationQualification}
                onChange={handleChange}
                error={!!errors.educationQualification}
                helperText={errors.educationQualification}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button variant="contained" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6">
              <Link
                to="/contact"
                underline="hover"
                sx={{ color: "red", fontWeight: 500 }}
              >
                I want to know more
              </Link>
            </Typography>
          </Box>
        </Box>
      </Modal>

    </>
  )
}

export default Home
