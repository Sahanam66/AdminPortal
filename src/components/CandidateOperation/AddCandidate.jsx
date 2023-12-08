import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CardContent, Grid, Card,Select,InputLabel} from '@mui/material';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Nav from '../Nav';

const AddCandidate = () => {
  let navigate=useNavigate();
  let userName = useRef(" ");
  let email_id = useRef(" ");
  let Phone_no = useRef(" ");
  let course = useRef(" ");
  let batch = useRef(" ");
  let payment = useRef(" ");
  
  let addUser=async (e)=>{
    e.preventDefault();
   
    let newUser={
      "name":(userName.current.value),
      "email":(email_id.current.value),
      "phone":(Phone_no.current.value),
      "course":(course.current.value),
      "batch":(batch.current.value),
      "payment":(payment.current.value)
    }
    console.log(newUser)

    // Check if user already exists
    const response = await fetch(`http://localhost:4000/Candidates?phone=${newUser.phone}&email=${newUser.email}`);
    const data = await response.json();

    if (data.length > 0) {
      toast.error("User already exists");
      return;
    }
    //If user doesnt exist 
    fetch(" http://localhost:4000/Candidates",
    {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newUser)
   
    }
    )
    .then(()=>{
      toast.success("new user added") 
    })
    .then(()=>{
      setTimeout(() => {
        navigate('/allCandidates')
      }, 4000);
      
    })
    
  }
    return (
    <div>
      <Nav/>
             <form onSubmit={addUser}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    type='text'
                    inputRef={userName}
                    fullWidth
                    label="Name"
                    name='name'
                    required
                    />
                    
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={email_id}
                    fullWidth
                    label="Email"
                    name='email'
                    required
                    
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={Phone_no}
                    fullWidth
                    label="Phone number"
                    name='phno'
                    required
                    />
                   
                    <Select style={{marginBottom:'1%',marginTop:'1%', color:'black'}}
                    fullWidth
                    inputRef={course}
                    label="Course"
                    name='course'
                    >
                      <MenuItem>Java</MenuItem>
                      <MenuItem>JavaScript</MenuItem>
                      <MenuItem>Python</MenuItem>
                      <MenuItem>Testing</MenuItem>
                      <MenuItem>Mern</MenuItem>
                    </Select>
                    
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={batch}
                    fullWidth
                    label="Batch"
                    name='batch'
                    
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={payment}
                    fullWidth
                    label="Payment"
                    name='payment'
                   
                    required
                    />
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}} >
                                        Add User
                                    </Button>
                                </Box>
                                <ToastContainer />

                </CardContent>
            </Grid>
        </form>
 
    </div>
  )
}

export default AddCandidate