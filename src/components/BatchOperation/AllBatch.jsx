import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography

  
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate ,useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '../CourseMaterial/AllCourse.module.css'
import Nav from '../Nav';
import AddBatch from './AddBatch';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AllBatch = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    let navigate=useNavigate()
    let [rows,setRows]=useState([])
    let [rows1,setRows1]=useState([])
    let [existingNames, setExistingNames] = useState(new Set());
    const [candidates, setCandidates] = useState([]);

    let {id}=useParams()
//   useEffect(()=>{
//     axios.get('  http://localhost:4003/Course')
//     .then((resp)=>{
//       setRows(resp.data)
      
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   },[])
//   // Create a set to store unique names
//   let uniqueNames = new Set();
// // Filter out duplicates and get unique names
// rows.forEach(row => {
//     uniqueNames.add(row.name);
//   });

useEffect(()=>{
axios.get("http://localhost:4002/Batch")
.then((resp)=>{
  setRows1(resp.data)
})
},[])
let deletedata=(id)=>{
    
  axios.delete(` http://localhost:4002/Batch/${id}`)
  .then((resp)=>{
    toast.success(" Batch deleted")
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
    <div >
      <Nav/>
     {
      rows1.map((row) => ( 
            <Accordion expanded={expanded === row.CourseName} onChange={handleChange(row.CourseName)} style={{margin:'10px '}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }} key={id}>
            {row.CourseName}
          </Typography>

         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
            {row.batch.map((i)=>{
              return(
               <li>{i} </li>
          
              )
            })}
           </ul>
           <h4>{`Total No of Students -${row.Total_Students}`}</h4>
           {/* <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
               navigate('/student',{state:row.CourseName})
         } }>
            Students Details
        </Button>
      </Box> */}
          </Typography>
          <DeleteIcon style={{float:'right', marginBottom:'10', cursor:'pointer'}}  onClick={()=>{deletedata(row.id)}} />
          <EditIcon style={{marginRight:'20',float:'right',cursor:'pointer'}} onClick={()=>{navigate(`/editCourse/${id}`)}}/>
        </AccordionDetails>
        <ToastContainer/>
        <Box mt={2} mb={3} ml={170}>
        <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
                navigate(`/addBatch/${row.id}`)
              }} >
            Add Batch
        </Button>
      </Box>
      {/* <h2>Students Details</h2> */}
      {/* {displayStudents()} */}
      </Accordion>
      
          ))
          }


            
    </div>
  )
}

export default AllBatch