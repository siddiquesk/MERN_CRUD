
import { Box } from "@mui/material"
import AddUser from './components/AddUser'
import Navbar from "./components/Navbar"
import AllUser from "./components/AllUser"
import CodeWithSufiyan from "./components/CodeWithSufiyan"
import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import EditUser from "./components/EditUser"
function App() {
  //
  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/code-with-sufiyan" element={<CodeWithSufiyan />} />
          <Route path="/all-user" element={<AllUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
        <Toaster />
      </Box>

    </>
  )
}

export default App
