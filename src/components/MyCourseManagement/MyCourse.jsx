import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';

import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Box,
    
  } from "@mui/material";
  import Button from '@mui/material/Button';
  import { styled } from '@mui/material/styles';
  import Dialog from '@mui/material/Dialog';
  import DialogTitle from '@mui/material/DialogTitle';
  import DialogContent from '@mui/material/DialogContent';
  import DialogActions from '@mui/material/DialogActions';
  import IconButton from '@mui/material/IconButton';
  import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';


  
const MyCourse = () => {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let {id} =useParams();
  let [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('  http://localhost:4003/Course')
    .then((resp)=>{
      setRows(resp.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  let navigate=useNavigate()
  let deletedata=(id)=>{
    axios.delete(`  http://localhost:4003/Course/${id} `)
    .then((resp)=>{
      toast.success(" course deleted")
      setTimeout(() => {
        window.location.reload(true)
      }, 4000);
      
      console.log(resp);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  
  return (
   
    <div>
      <Nav/>
      <Box margin={'10px'}>
        <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
                navigate("/addCourse")
              }} >
            Add Course
        </Button>
      </Box>
      {rows.map((row)=>
      <Accordion expanded={expanded === row.name} onChange={handleChange(row.name)} style={{margin:'10px '}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} key={row.id}>
            {row.name}
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>{row.Duration}</li>
              <li>{row.Duration1}</li>
              <li>{row.Fees}</li>
              <li>{row.Subject}</li>
            </ul>
          </Typography>
          <DeleteIcon style={{float:'right', marginBottom:'10', cursor:'pointer'}}  onClick={()=>{deletedata(row.id)}} />
          <EditIcon style={{marginRight:'20',float:'right',cursor:'pointer'}} onClick={()=>{navigate(`/editCourse/${row.id}`)}}/>
        </AccordionDetails>
        <ToastContainer/>
      </Accordion>
)}
    </div>
  )
}

export default MyCourse