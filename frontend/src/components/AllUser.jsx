import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography, Card, CardContent, CardActions, styled } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, deleteUser } from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Wrapper = styled(Box)`
  margin: 25px;
  padding: 20px;
  color: #fff;
  background-color:maroon;  /* Dark background for contrast */
  max-width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
`;

const UserCard = styled(Card)`
  margin: 15px 0;
  padding: 20px;
  background-color: #212121;  /* Dark grey background */
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
`;

const ActionButton = styled(Button)`
  &.delete {
    background-color: #e57373;
    margin: 5px;
    color: white;
    padding: 10px 15px;
    font-size: 0.9rem; /* Adjusted for better mobile view */
    &:hover {
      background-color: #d32f2f;
    }
  }

  &.edit {
    background-color: #64b5f6;
    margin: 5px;
    color: white;
    padding: 10px 15px;
    font-size: 0.9rem;
    &:hover {
      background-color: #1976d2;
    }
  }
`;

const UserName = styled(Typography)`
  font-size: 1.5rem; /* Increased font size for better readability */
  font-weight: bold;
  color: white;
`;

const UserDetails = styled(Typography)`
  font-size: 1.125rem; /* Increased font size */
  margin-top: 8px;
  color: #bbb;
`;

const UserGrid = styled(Grid)`
  overflow-y: auto;
  max-height: 80vh; /* Make the grid scrollable */
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
    navigate('/code-with-sufiyan');
  };

  return (
    <Wrapper>
      {loading ? (
        <div style={{ color: '#f44336', textAlign: 'center', fontSize: '20px' }}>Data is being fetched...</div>
      ) : (
        <UserGrid container spacing={3}>
          {/* Data Cards */}
          {usersData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={data._id}>
              <UserCard>
                <CardContent>
                  <UserName>{data.name}</UserName>
                  <UserDetails><strong>Username:</strong> {data.username}</UserDetails>
                  <UserDetails><strong>Email:</strong> {data.email}</UserDetails>
                  <UserDetails><strong>Phone:</strong> {data.phone}</UserDetails>
                </CardContent>
                <CardActions>
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












