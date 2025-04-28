import React, { useState } from 'react';
import { FormControl, Box, InputLabel, Input, Typography, Button } from '@mui/material';
import { AddUsers } from '../service/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await AddUsers(user);

      if (response && response.msg === 'User created successfully') {
        toast.success('User created successfully');
        navigate('/all-user');
        setUser({ name: '', username: '', email: '', phone: '' });
      } else if (response && response.msg === 'User already exists') {
        toast.error('User already exists');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error('An error occurred!');
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '50%' },
        margin: '50px auto',
        padding: '20px',
        boxShadow: 1,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
        Add User
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={onValueChange} value={user.name} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={onValueChange} value={user.username} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={onValueChange} value={user.email} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={onValueChange} value={user.phone} />
      </FormControl>

      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </Box>
    </Box>
  );
}

export default AddUser;




