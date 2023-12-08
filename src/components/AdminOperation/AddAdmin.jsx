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

const AddAdmin = () => {
  const[users,setUsers]=useState(null)
  let userName=useRef();
  let email=useRef();
  let phone = useRef();
  let psw=useRef();
  const navigate= useNavigate()
 let addUser=async (e)=>{
  e.preventDefault();

  let newUser={
    "name":userName.current.value,
    "email":email.current.value,
    "phone":phone.current.value,
    "password":psw.current.value

  }

   // Check if user already exists
   const response = await fetch(`http://localhost:4001/Admin?phone=${newUser.phone}&email=${newUser.email}`);
   const data = await response.json();

   if (data.length > 0) {
     toast.error("User already exists");
     return;
   }
  fetch('http://localhost:4001/Admin',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newUser)
  }
  )
  .then(()=>{
    toast.success("new user added")
    setTimeout(() => {
      navigate('/admin')
    }, 4000);
  })
 }
 let display=()=>{
  fetch('http://localhost:4001/Admin')
  .then((res)=>{
    return res;
  }).then((value)=>{
    setUsers(value)
    
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
                    inputRef={userName}
                    fullWidth
                    label="Name"
                    name='name'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={email}
                    fullWidth
                    label="Email"
                    name='email'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={phone}
                    fullWidth
                    type='number'
                    label="Phone number"
                    name='phno'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={psw}
                    fullWidth
                    label="Password"
                    name='password'
                    required
                    />
                    <><h2>{users}</h2></>
                    
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}}>
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

export default AddAdmin