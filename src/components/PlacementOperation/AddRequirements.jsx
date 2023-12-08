import React, { useRef, useState } from 'react'
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
import Nav from '../Nav';


const AddRequirements = () => {
    let {id}=useParams()
    let navigate=useNavigate();
    let company=useRef()
    let desgination=useRef()
    let location=useRef()
    let ctc=useRef()
    let qualification=useRef()
    let skills=useRef()

    let AddRequirement= async(e)=>{
        e.preventDefault();
        let newRequiremt={
            "company":(company.current.value),
            "desgination":(desgination.current.value),
            "location":(location.current.value),
            "ctc":(ctc.current.value),
            "qualification":(qualification.current.value),
            "skills":(skills.current.value)
        }
        
        fetch('http://localhost:4005/Requirements',
        {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newRequiremt)
        }
        )
        .then(()=>{
            toast.success("new requirement added") 
          })
          .then(()=>{
            setTimeout(() => {
              navigate('/Placements')
            }, 4000);
        })
    }
    
  return (
    <div>
        <Nav/>
<form onSubmit={AddRequirement}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    type='text'
                    inputRef={company}
                    fullWidth
                    label="Company"
                    name='company'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={desgination}
                    fullWidth
                    label="Desgination"
                    name='Desgination'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={location}
                    fullWidth
                    label="Location"
                    name='location'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={ctc}
                    fullWidth
                    label="CTC"
                    name='ctc'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={skills}
                    fullWidth
                    label="Skills"
                    name='skills'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={qualification}
                    fullWidth
                    label="Qualification"
                    name='qualification'
                    required
                    />
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}} >
                                        Add Requirement
                                    </Button>
                                </Box>
                                <ToastContainer />

                </CardContent>
            </Grid>
        </form>
    </div>
  )
}

export default AddRequirements