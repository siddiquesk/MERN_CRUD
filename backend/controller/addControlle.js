import User from '../models/user.js';


export const addUser = async (req, res) => {
  const { name, username, email, phone } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });  // Status 400 for existing user
    }

    // Create a new user instance
    const newUser = new User({ name, username, email, phone });

    // Save the user to the database
    const user = await newUser.save();
    console.log(user);

    // Respond with success message
    res.status(201).json({
      msg: 'User created successfully',
      user: user
    });
    
  } catch (err) {
    console.error('Error occurred while creating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUser = async (req, res) => {

  try {
    const users=await User.find({});
    if(!users){
      return res.status(400).json({msg:'user data not found in database'});
    }
    res.status(201).json({msg:'data fetched succesfully',users});
  } catch (err) {
    console.error('Error occurred while creating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSingleUser = async (req, res) => {

  try {
    const single=await User.findById(req.params.id);
    if(!single){
      return res.status(400).json({msg:'user not in  database'});
    }
    res.status(201).json({msg:'single user data fetched  succesfully',single});
  } catch (err) {
    console.error('Error occurred while creating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editUser = async (req, res) => {
  const user = req.body;
  try {
    const update = await User.updateOne({ _id: req.params.id }, { $set: user });
    console.log(update);
    res.status(201).json({ msg: 'Update data successfully', update });
  } catch (err) {
    console.error('Error occurred while updating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    console.log(user);
    res.status(201).json({ msg: 'delete user successfully', user });
  } catch (err) {
    console.error('Error occurred while deleting user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
