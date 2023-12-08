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

const EditCandidate = () => {

 let userName = useRef(" ");
  let email_id = useRef(" ");
  let Phone_no = useRef(" ");
  let course = useRef(" ");
  let batch = useRef(" ");
  let payment = useRef(" ");  
  let navigate=useNavigate();
  let {id} = useParams()
  
  useEffect(()=>{
    fetch(' http://localhost:4000/Candidates/'+id)
    .then((data)=>{return data.json();})
    .then((resp)=>{
        userName.current.value=resp.name;
        email_id.current.value=resp.email;
        Phone_no.current.value=resp.phone;
        course.current.value=resp.course;
        batch.current.value=resp.batch;
        payment.current.value=resp.payment;

       
    })
  },[])

  let updateCandidate=(e)=>{
    e.preventDefault();
    
    let updatedUser={
        "name":(userName.current.value),
        "email":(email_id.current.value),
        "phone":(Phone_no.current.value),
        "course":(course.current.value),
        "batch":(batch.current.value),
        "payment":(payment.current.value)
      }
      fetch(" http://localhost:4000/Candidates/"+id,
    {
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(updatedUser)
   
    }
    )
    .then(()=>{
      toast.success("new user updated") 
    })
    .then(()=>{
      setTimeout(() => {
        navigate('/allCandidates')
      }, 4000);
      
    })

  }
  let handleClick=(e)=>{
    console.log(e.target.value);
    // console.log(course.current.value);
  course.current.value=e.target.value
  }
  return (
    <div>
      <Nav/>
<form onSubmit={updateCandidate}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    type='text'
                    inputRef={userName}
                    fullWidth
                    placeholder="Name"
                    name='name'
                    required
                    />
                    
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={email_id}
                    fullWidth
                    placeholder="Email"
                    name='email'
                    required
                    
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={Phone_no}
                    fullWidth
                    placeholder="Phone number"
                    name='phno'
                    required
                    />
                    <Select style={{marginBottom:'1%',marginTop:'1%'}}
                    fullWidth
                    value={course.current.value}
                    inputRef={course}
                    onChange={handleClick}
                    label="Course"
                    name='course'
                    >
                      <MenuItem value={"Java"}>Java</MenuItem>
                      <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
                      <MenuItem value={"Python"}>Python</MenuItem>
                      <MenuItem value={"Testing"}>Testing</MenuItem>
                      <MenuItem value={"Mern"}>Mern</MenuItem>
                    </Select> 
                    
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={batch}
                    fullWidth
                    placeholder="Batch"
                    name='batch'
                    
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={payment}
                    fullWidth
                    placeholder="Payment"
                    name='payment'
                   
                    required
                    />
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}} >
                                        Update User
                                    </Button>
                                </Box>
                                <ToastContainer />

                </CardContent>
            </Grid>
        </form>
 
    </div>
  )
}

export default EditCandidate