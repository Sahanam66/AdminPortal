import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import Nav from '../Nav';

const AllRequirements = () => {
  // let {id}=useParams()
  let navigate = useNavigate();
  let [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4005/Requirements')
      .then((resp) => resp.json())
      .then((resp1) => {
        setRows(resp1);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Add an empty dependency array to ensure this effect runs only once

  let deletedata=(id)=>{
    
    axios.delete(`http://localhost:4005/Requirements/${id}`)
    .then((resp)=>{
      toast.success(" Requirement deleted")
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
    <div>
      <Nav/>
      <Box margin={'10px'}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ background: 'black' }}
          onClick={() => {
            navigate("/addRequirements");
          }}
        >
          Add Requirement
        </Button>
      </Box>
      <Grid container justifyContent="center" spacing={2} mt={2} >
        {rows.map((row, index) => (
          <Grid item key={index} className="grid2" >
            <Card
              sx={{ maxWidth: 360 }}
              className="cardJPJ"
             
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.company}
                    <EditIcon style={{marginLeft:"90", cursor:"pointer"}} onClick={()=>{navigate(`/editRequirement/${row.id}`)}} />
                    <DeleteIcon style={{marginLeft:"7", cursor:"pointer"}} onClick={()=>{deletedata(row.id)}}/>
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary">
                    <ul style={{justifyContent:"flex-start"}}>
                      <li>{`Desgination - ${row.desgination}`}</li>
                      <li>{`Location - ${row.location}`}</li>
                      <li>{`CTC - ${row.ctc}`}</li>
                      <li>{`Qualification - ${row.qualification}`}</li>
                      <li>{`Skills - ${row.skills}`}</li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllRequirements;
