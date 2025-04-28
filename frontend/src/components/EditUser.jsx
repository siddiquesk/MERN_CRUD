import React, { useState, useEffect } from 'react';
import { FormControl, Box, InputLabel, Input, Typography, Button } from '@mui/material';
import { AddUsers, getUserSingle, editUser } from '../service/api';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
function EditUser() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, [])

  const loadUserDetails = async () => {
    const response = await getUserSingle(id);
    setUser(response.single);
    console.log(response.single);
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/all-user');
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
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
        Edit User
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={onValueChange} value={user.name} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={onValueChange} value={user.username} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={onValueChange} value={user.email} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={onValueChange} value={user.phone} />
      </FormControl>

      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary" onClick={editUserDetails}>
          Edit User
        </Button>
      </Box>
    </Box>
  )
}

export default EditUser
