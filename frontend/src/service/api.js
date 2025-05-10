import axios from 'axios';

const url = 'https://mern-crud2-gh47.onrender.com';  // Your server URL

export const AddUsers = async (user) => {
  try {
    const response = await axios.post(`${url}/add`, user);  // Send user directly, not wrapped in { user }
    console.log(response);  // Log full response from the server
    return response.data;   // Return the response data
  } catch (err) {
    console.error('Error while calling API for adding user:', err);
    throw err;  // Throw error to be handled by the calling component
  }
};


export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/all`);  // Send user directly, not wrapped in { user }
    return response.data;   // Return the response data
  } catch (err) {
    console.error('Error while calling API for adding user:', err);
    throw err;  // Throw error to be handled by the calling component
  }
};

export const getUserSingle = async (id) => {
  try {
    const response = await axios.get(`${url}/single/${id}`);  // Send user directly, not wrapped in { user }
    return response.data;   
  } catch (err) {
    console.error('Error while calling API for adding user:', err);
    throw err;  // Throw error to be handled by the calling component
  }
};

export const editUser= async (user,id) => {
  try {
    const response = await axios.put(`${url}/single/${id}`,user);  // Send user directly, not wrapped in { user }
    return response.data;   
  } catch (err) {
    console.error('Error while calling API for adding user:', err);
    throw err;  // Throw error to be handled by the calling component
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`); // ✅ Use DELETE method
    return response.data;   
  } catch (err) {
    console.error('Error while calling API for deleting user:', err);
    throw err;
  }
};
