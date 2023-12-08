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

const EditAdmin = () => {
    let userName = useRef(" ");
  let email_id = useRef(" ");
  let Phone_no = useRef(" ");
  let password = useRef(" ");
  let navigate=useNavigate()
  
  let {id} = useParams()
  useEffect(()=>{
  
 fetch(' http://localhost:4001/Admin/'+id)
    .then((data)=>{return data.json();})
    .then((resp)=>{
        userName.current.value=resp.name;
        email_id.current.value=resp.email;
        Phone_no.current.value=resp.phone;
        password.current.value=resp.password;   
    })

  },[])

  let updateAdmin=(e)=>{
    e.preventDefault();
    
    let updatedAdmin={
        "name":(userName.current.value),
        "email":(email_id.current.value),
        "phone":(Phone_no.current.value),
        "password":(password.current.value),
       
      }
      fetch(" http://localhost:4001/Admin/"+id,
    {
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(updatedAdmin)
   
    }
    )
    .then(()=>{
        toast.success("new user updated") 
      })
      .then(()=>{
        setTimeout(() => {
          navigate('/admin')
        }, 4000);
        
      })
}
  return (
    <div>
      <Nav/>
 <form onSubmit={updateAdmin}>
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
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    inputRef={password}
                    fullWidth
                    placeholder="Password"
                    name='password'
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

export default EditAdmin