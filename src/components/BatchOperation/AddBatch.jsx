import React, {useRef, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardContent, Grid, Card} from '@mui/material';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from 'react-router-dom';
import Nav from '../Nav';
import data from './AllBatch'


const AddBatch = (data) => {
    const [batches, setBatches] = useState(null)
    let CourseName = useRef();
    let batch = useRef();
    let Total_Students = useRef();

    let {id} = useParams();


    const navigate = useNavigate()
    let addBatch = async (e) => {
        e.preventDefault();

        let batchData = []
        batchData.push(batch.current.value);


        let newBatch = {
            "CourseName": CourseName.current.value,
            "batch": batchData,
            "Total_Students": Total_Students.current.value

        }
        // Check if user already exists
        const response = await fetch(`http://localhost:4002/CourseName?CourseName=${
            newBatch.CourseName
        }Batch?batch=${
            newBatch.batch
        }`);
        const data = await response.json();

        if (data.length > 0) {
            toast.error("User already exists");
            return;
        }


        fetch('http://localhost:4002/Batch/', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBatch)
        }).then(() => {
            toast.success("new batch added")
            setTimeout(() => {
                navigate('/Batches')
            }, 4000);
        })

        // //MY CODE

        // fetch("http://localhost:4002/Batch/"+id ,  {
        //         method: "PUT",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             // ...olddata 
                    
        //           })
        //     })
    }
    return (
        <div>
            <Nav/>
            <form onSubmit={addBatch}>
                <Grid container
                    justifyContent={'center'}>
                    <Card sx={
                        {
                            justifyContent: 'center',
                            maxWidth: 345
                        }
                    }/>
                    <CardContent>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={CourseName}
                            fullWidth
                            label="Name"
                            name='name'
                            required/>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={batch}
                            fullWidth
                            label="Batch"
                            name='email'
                            required/>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={Total_Students}
                            fullWidth
                            type='number'
                            label="Number of Students"
                            name='Number of Students'
                            required/>

                        <Box mt={2}>
                            <Button type="submit" variant="contained" color="primary"
                                style={
                                    {background: 'black'}
                            }>
                                Add Batch
                            </Button>
                        </Box>
                        <ToastContainer/>

                    </CardContent>
                </Grid>
            </form>
            {/* <h2>{data}</h2> */}
        </div>
    )
}

export default AddBatch
