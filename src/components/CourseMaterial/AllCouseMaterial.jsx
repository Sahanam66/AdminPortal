        import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate, useParams} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import style from './AllCourse.module.css'
import Nav from '../Nav';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${
            tableCellClasses.head
        }`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${
            tableCellClasses.body
        }`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

const AllCouseMaterial = () => {
    let {id}=useParams()
    let navigate = useNavigate()
    let [rows, setRows] = useState([])
    let [rows1, setRows1] = useState([])
    let [displayData, setdisplayData] = useState()
    useEffect(() => {
        axios.get('  http://localhost:4003/Course').then((resp) => {
            setRows(resp.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:4006/CourseMaterial').then((resp) => {
            setRows1(resp.data)
            console.log(resp.data);
        })
    }, [])

    let handle = (a) => {
        let b = (rows1.filter((data) => {
            return data.CourseName == a
        }))
        console.log(b[0]["StudyMaterial"]);
        setdisplayData(b[0])
    }
    let deletedata=(id)=>{
    
        axios.delete(` http://localhost:4006/CourseMaterial/${id}`)
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
      <>
      <Nav/>
        <div className={
            style.main
        }>
            {
            rows.map((row) => (
                <Box className={
                    style.box
                }>
                    <Button type="submit" variant="contained" color="primary"
                        style={
                            {background: 'black'}
                        }
                        onClick={
                            () => {
                                handle(row.name)
                            }
                    }>
                        {
                        row.name
                    } </Button>
                </Box>
            ))
        }

           
        </div>
        <div className={style.table1}>
        {
                        displayData && (
                <TableContainer component={Paper}>
                    <Table sx={
                            {minWidth: 700}
                        }
                        aria-label="customized table">
                        <TableHead>
                            <TableRow>

                                <StyledTableCell align="center">Topic</StyledTableCell>
                                <StyledTableCell align="center">Video Link</StyledTableCell>
                                <StyledTableCell align="center">Pdf Link</StyledTableCell>
                                <StyledTableCell align="center" colSpan={3} style={{alignItems:"center", textAlign:"center"}}>Actions</StyledTableCell>


                            </TableRow>
                        </TableHead>
                         {displayData ?. StudyMaterial.map((row) => (
                            <TableBody>
                                <StyledTableRow>

                                    <StyledTableCell align="center">
                                        {
                                        row.topic
                                    }</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {
                                        <a href="https://google.com">{row.topicLink}</a>
                                    }</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {
                                        row.topicMaterial
                                    }</StyledTableCell>
                                     <StyledTableCell align="center" >
                                        {
                                        <EditIcon style={{cursor:"pointer"}} onClick={()=>{navigate(`/editCourseMaterial/${row.id}`)}}/>
                                        
                                    }</StyledTableCell>
                                    <StyledTableCell align="center" >
                                        {
                                        <DeleteIcon style={{cursor:"pointer"}} onClick={()=>{deletedata(row.id)}}/>
                                        
                                    }</StyledTableCell>
                                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}}>
                                        Add Material
                                    </Button>
                                </Box>
                                </StyledTableRow>

                            </TableBody>
                        ))
                    } </Table>
                    <ToastContainer/>
                </TableContainer>

                        )}
            </div>
        </>
    )
}

export default AllCouseMaterial
