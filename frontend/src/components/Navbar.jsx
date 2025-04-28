import React from 'react';
import { Box, AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Container = styled(AppBar)(({ theme }) => ({
  background: '#111', // dark background
  height: 70,
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 50px',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
    height: 60, // slightly smaller navbar height on small devices
  },
}));

const Tabs = styled(NavLink)(({ theme }) => ({
  fontSize: 20,
  margin: '0 25px',
  cursor: 'pointer',
  fontWeight: 600,
  textDecoration: 'none',
  color: '#f5f5f5',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#00e5ff',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
    margin: '0 15px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    margin: '5px 10px',
  },
}));

const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '10px 0',
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
}));

function Navbar() {
  return (
    <Box>
      <Container position="static">
        <ToolbarWrapper>
          <Tabs to="/code-with-sufiyan">Code Us</Tabs>
          <Tabs to="/all-user">All Users</Tabs>
          <Tabs to="/add-user">Add User</Tabs>
        </ToolbarWrapper>
      </Container>
    </Box>
  );
}

export default Navbar;

