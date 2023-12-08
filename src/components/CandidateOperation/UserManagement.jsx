import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardContent, Grid, Card} from '@mui/material';
import style from './UserManagement.module.css'
import { Link, useNavigate } from 'react-router-dom';
import AddCandidate from './AddCandidate';
import AllCandidates from './AllCandidates';
import Nav from '../Nav';


// import 'aos/dist/aos.css';

const UserManagement = () => {

  const navigate=useNavigate()
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBox1Hover = () => {
    setHoveredBox(1);
  };

  const handleBox2Hover = () => {
    setHoveredBox(2);
  };

  const handleBoxHoverLeave = () => {
    setHoveredBox(null);
  };

  return (
   
    <div className={style.main}>
       <Nav/>
       <div className="user-management">
      {/* <div
        className={`box ${hoveredBox === 1 ? 'hovered' : ''}`}
        onMouseEnter={handleBox1Hover}
        onMouseLeave={handleBoxHoverLeave}
      > */}
         <Box   className={style.box}> 
              <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
                navigate("/allCandidates")
              }}>
                            Candidate Enrollment 
            </Button>
         </Box>
         </div>
         <div className={style.div1}></div>
         {/* <div
        className={`box ${hoveredBox === 2 ? 'hovered' : ''}`}
        onMouseEnter={handleBox2Hover}
        onMouseLeave={handleBoxHoverLeave}
      > */}
         <Box   className={style.box1} > 
              <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
                navigate("/admin")
              }}>
                            Admin Enrollment
            </Button>
         </Box>
         </div>
  //  </div>
  //   </div>
  )
}

export default UserManagement