import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CardContent, Grid, Card,Select,InputLabel} from '@mui/material';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Nav from '../Nav';

const EditCourse = () => {

  let courseName=useRef() 
  let duration=useRef()
  let duration1=useRef()
  let fees=useRef()
  let Subject=useRef()
  let {id} = useParams()
  let navigate=useNavigate()
  useEffect(()=>{
  
 fetch('http://localhost:4003/Course/'+id)
    .then((data)=>{return data.json();})
    .then((resp)=>{
      courseName.current.value=resp.name;
      duration.current.value=resp.Duration;
      duration1.current.value=resp.Duration1;
      fees.current.value=resp.Fees; 
      Subject.current.value=resp.Subject;  
    })

  },[])
  let updateCourse=(e)=>{
    e.preventDefault();
    
    let updatedCourse={
        "name":(courseName.current.value),
        "Duration":(duration.current.value),
        "Duration1":(duration1.current.value),
        "Fees":(fees.current.value),
        "Subject":(Subject.current.value)
       
      }
      fetch(" http://localhost:4003/Course/"+id,
    {
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(updatedCourse)
   
    }
    )
    .then(()=>{
        toast.success("new course updated") 
      })
      .then(()=>{
        setTimeout(() => {
          navigate('/course')
        }, 4000);
        
      })
}
  return (
    <div>
       <Nav/>

        <form onSubmit={updateCourse}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={courseName}
                    fullWidth
                    placeholder="courseName"
                    name='courseName'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={duration}
                    fullWidth
                    placeholder="Duration on regular basis"
                    name='duration'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={duration1}
                    fullWidth
                    placeholder="Duration on weekend basis"
                    name='duration'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={fees}
                    fullWidth
                    placeholder="Fees"
                    name='fees'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={Subject}
                    fullWidth
                    placeholder="Subjects"
                    name='subjects'
                    required
                    />
                    {/* <><h2>{users}</h2></> */}
                    
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}}>
                                        Update course
                                    </Button>
                                </Box>
                                <ToastContainer />
                              
                </CardContent>
            </Grid>
        </form>
    </div>
  )
}

export default EditCourse