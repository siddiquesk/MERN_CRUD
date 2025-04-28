import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

function CodeWithSufiyan() {
  return (
    <>
      {/* Full width Box */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f9f9f9',
          padding: '50px 20px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        }}
      >
        {/* Inner container to control content */}
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              Code With Sufiyan
            </Typography>
            <Typography variant="h6" sx={{ color: 'gray', mb: 3 }}>
              Welcome to our CRUD Application! Manage your users easily with simple Create, Read, Update, and Delete operations.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/add-user">
              Get Started
            </Button>
          </Box>

          {/* Right Image */}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/ab.avif"
              alt="Coding Illustration"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default CodeWithSufiyan;



