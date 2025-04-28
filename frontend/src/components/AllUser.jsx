import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography, Card, CardContent, CardActions, styled } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, deleteUser } from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';

const Wrapper = styled(Box)`
  margin: 20px;
  padding: 20px;
  max-width: 100%;
  overflow-x: hidden;
`;

const UserCard = styled(Card)`
  margin: 15px 0;
  padding: 10px 20px;
  background-color: #F9F9F9;  /* Light grey background */
  color: #333;  /* Dark text for better contrast */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 100%;
  max-width: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    margin: 10px 0; /* Smaller margin on mobile */
    padding: 20px;  /* Adjusted padding for mobile */
    width: 100%;  /* Full width on mobile */
  }
`;

const ActionButton = styled(Button)`
  &.delete {
    background-color: #FF6F61;  /* Red color for delete */
    margin:  8px;
    color: white;
    padding: 8px;
    font-size: 1rem;
    &:hover {
      background-color: #D95D50;
    }
  }

  &.edit {
    background-color: #4CAF50;  /* Green color for edit */
    margin: 10px 0;
    color: white;
    padding: 8px;
    font-size: 1rem;
    &:hover {
      background-color: #388E3C;
    }
  }
`;

const UserName = styled(Typography)`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 10px 0;
  color: #333;  /* Darker text */
`;

const UserDetails = styled(Typography)`
  font-size: 1rem;
  margin-top: 8px;
  color: #555;  /* Slightly lighter text */
`;

const UserGrid = styled(Grid)`
  overflow-y: auto;
  max-height: 80vh;
`;

function AllUser() {
  const [usersData, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.users);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const deletehandle = async (id) => {
    const response = await deleteUser(id);
    toast.success(response.msg);
    navigate('/code-with-sufiyan');
  };

  return (
    <Wrapper>
      {loading ? (
        <div style={{ color: '#FF6F61', textAlign: 'center', fontSize: '20px' }}>Data is being fetched...</div>
      ) : (
        <UserGrid container spacing={2}>
          {usersData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={data._id}>
              <UserCard>
                <CardContent>
                  <UserName>{data.name}</UserName>
                  <UserDetails><strong>Username:</strong> {data.username}</UserDetails>
                  <UserDetails><strong>Email:</strong> {data.email}</UserDetails>
                  <UserDetails><strong>Phone:</strong> {data.phone}</UserDetails>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', paddingBottom: '10px' }}>
                  <ActionButton
                    variant="contained"
                    component={Link}
                    to={`/edit/${data._id}`}
                    className="edit"
                    fullWidth
                  >
                    Edit <EditIcon fontSize="small" />
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    onClick={() => deletehandle(data._id)}
                    className="delete"
                    fullWidth
                  >
                    Delete <DeleteIcon fontSize="small" />
                  </ActionButton>
                </CardActions>
              </UserCard>
            </Grid>
          ))}
        </UserGrid>
      )}
    </Wrapper>
  );
}

export default AllUser;












