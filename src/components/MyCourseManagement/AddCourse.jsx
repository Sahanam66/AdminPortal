import { Subject } from '@mui/icons-material'
import { duration } from '@mui/material'
import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardContent, Grid, Card} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';

const AddCourse = () => {
    // const [course,setCourse]=useState([])
    let courseName=useRef()
    let duration=useRef()
    let duration1=useRef()
    let fees=useRef()
    let Subject=useRef()
let addCourse= async(e)=>{
    e.preventDefault();
    let NewCourse={
             "name":courseName.current.value,
            "Duration" :duration.current.value,
            "Duration1" :duration1.current.value,
            "Fees":fees.current.value,
            "Subject":Subject.current.value
    }

     // Check if user already exists
     const response = await fetch(`http://localhost:4003/Course?phone=${NewCourse.phone}&email=${NewCourse.email}`);
     const data = await response.json();
 
     if (data.length > 0) {
       toast.error("User already exists");
       return;
     }
    fetch(' http://localhost:4003/Course',
    {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(NewCourse)
    }
  )
  .then(()=>{
    toast.success("new user added")
    setTimeout(() => {
      navigate('/course')
    }, 4000);
  })
}

let navigate=useNavigate()
  return (
    <div>
      <Nav/>
             <form onSubmit={addCourse}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={courseName}
                    fullWidth
                    label="courseName"
                    name='courseName'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={duration}
                    fullWidth
                    label="Duration on regular basis"
                    name='duration'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={duration1}
                    fullWidth
                    label="Duration on weekend basis"
                    name='duration'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={fees}
                    fullWidth
                    label="Fees"
                    name='fees'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={Subject}
                    fullWidth
                    label="Subjects"
                    name='subjects'
                    required
                    />
                    {/* <><h2>{users}</h2></> */}
                    
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}}>
                                        Add course
                                    </Button>
                                </Box>
                                <ToastContainer />
                              
                </CardContent>
            </Grid>
        </form>

    </div>
  )
}

export default AddCourse