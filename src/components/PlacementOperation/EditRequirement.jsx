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
import Nav from '../Nav';

const EditRequirement = () => {
    
    let company=useRef()
    let desgination=useRef()
    let location=useRef()
    let ctc=useRef()
    let qualification=useRef()
    let skills=useRef()
    let navigate=useNavigate();
  let {id} = useParams()
  useEffect(()=>{
    fetch(' http://localhost:4005/Requirements/'+id)
    .then((data)=>{return data.json();})
    .then((resp)=>{
        company.current.value=resp.company;
        desgination.current.value=resp.desgination;
        location.current.value=resp.location;
        ctc.current.value=resp.ctc;
        qualification.current.value=resp.qualification;
        skills.current.value=resp.skills;
    })
  },[])
  let updateRequirement=(e)=>{
    e.preventDefault();
    
    let updatedReq={
        "company":(company.current.value),
        "desgination":(desgination.current.value),
        "location":(location.current.value),
        "ctc":(ctc.current.value),
        "qualification":(qualification.current.value),
        "skills":(skills.current.value)
      }
      fetch("  http://localhost:4005/Requirements/"+id,
    {
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(updatedReq)
   
    }
    )
    .then(()=>{
      toast.success(" requirement updated") 
    })
    .then(()=>{
      setTimeout(() => {
        navigate('/allRequirements')
      }, 4000);
      
    })

  }

  return (
    <div>
      <Nav/>
<form onSubmit={updateRequirement}>
            <Grid container justifyContent={'center'}>
                <Card sx={{justifyContent:'center', maxWidth:345}}/>
                <CardContent>
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                    type='text'
                    inputRef={company}
                    fullWidth
                    // label="Company"
                    // name='company'
                    placeholder='Company'
                    required
                    // variant="outlined"
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={desgination}
                    fullWidth
                    placeholder="Desgination"
                    name='Desgination'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={location}
                    fullWidth
                    placeholder="Location"
                    name='location'
                    required
                    />
                     <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={ctc}
                    fullWidth
                    placeholder="CTC"
                    name='ctc'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={skills}
                    fullWidth
                    placeholder="Skills"
                    name='skills'
                    required
                    />
                    <TextField style={{marginBottom:'1%',marginTop:'1%'}}
                     inputRef={qualification}
                    fullWidth
                    placeholder="Qualification"
                    name='qualification'
                    required
                    />
                     <Box mt={2}>
                                    <Button type="submit" variant="contained" color="primary" style={{background:'black'}} >
                                        Update Requirement
                                    </Button>
                                </Box>
                                <ToastContainer />

                </CardContent>
            </Grid>
        </form>
    </div>
  )
}

export default EditRequirement