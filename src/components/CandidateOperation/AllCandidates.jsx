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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate ,useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Nav from '../Nav';


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

const AllCandidates = () => {
  let {id}=useParams()
  let [rows,setRows]=useState([])
  useEffect(()=>{
  
 axios.get(' http://localhost:4000/Candidates')
    .then((resp)=>  {
      // console.log(resp.data);
       setRows(resp.data)}

     )
   .catch((err)=>{
    console.log(err);
  })
  },[])
 
  let deletedata=(id)=>{
    
    axios.delete(`http://localhost:4000/Candidates/${id}`)
    .then((resp)=>{
      toast.success(" User deleted")
      setTimeout(() => {
        window.location.reload(true)
      }, 4000);
      
      console.log(resp);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  
  let navigate =useNavigate()
  return (
    
    <div >
      <Nav/>
       <Box mt={2} ml={170}>
        <Button type="submit" variant="contained" color="primary" style={{background:'black'}} onClick={()=>{
                navigate("/addcandidate")
              }} >
            Add User
        </Button>
      </Box>
      <br />
       <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email-id</StyledTableCell>
            <StyledTableCell align="center">Phone No</StyledTableCell>
            <StyledTableCell align="center">Course</StyledTableCell>
            <StyledTableCell align="center">Batch</StyledTableCell>
            <StyledTableCell align="center">Payment</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.course}</StyledTableCell>
              <StyledTableCell align="center">{row.batch}</StyledTableCell>
              <StyledTableCell align="center">{row.payment}</StyledTableCell>
              <StyledTableCell align="center" onClick={()=>{navigate(`/editCandidate/${row.id}`)}} style={{cursor:'pointer'}}><EditIcon/></StyledTableCell>
              <StyledTableCell align="center" onClick={()=>{deletedata(row.id)}} style={{cursor:'pointer'}}><DeleteIcon/></StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </TableContainer>
    </div>
  )
}

export default AllCandidates



