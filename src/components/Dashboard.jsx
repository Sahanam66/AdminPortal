import React, { useEffect, useState } from 'react'
import img1 from '../assessts/images/IMG_20231008_194115.jpg'
import style from './Nav.module.css'
import { Grid,Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Button, } from '@mui/material'
import Nav from './Nav'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' ,
    },
    title: {
      display: true,
      text: 'No of Students Placed',
    },
  },
};

const labels = [2020,2021,2022];

export const data = {
  labels,
  datasets: [
    {
      label: 'No of Students Placed',
      data: [108,200,280],
      backgroundColor:['crimson','darkblue','green'],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    }
  ]
};

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' ,
    },
    title: {
      display: true,
      text: 'No of admissions',
    },
  },
};
export const data1 = {
  labels: [2020,2021,2022],
  datasets: [
    {
      label: 'No of Admissions',
      data: [200,210,220],
      backgroundColor: [
        'crimson','darkblue','green'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};


export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' ,
    },
    title: {
      display: true,
      text: 'No of Companies',
    },
  },
};

const labels2 = [2020,2021,2022];

export const data2 = {
  labels,
  datasets: [
    {
      label: 'No of Companies',
      data: [80,100,110],
      backgroundColor:['crimson','darkblue','green'],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    }
  ]
};

const Dashboard = () => {
 
  return (
    <div>
    <Nav/>
      <Grid container justifyContent={"center"} alignItems={"flex-start"} mt={-8}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={img1} alt="welcome" className={style.image} style={{width:"100%" , height:"100%"}}></img>
        </Grid>
        </Grid>
        <Grid container   >
        <Grid item xs={8} sm={6} md={6} lg={3} display={"flex"} justifyContent={'space-between'} alignItems={'center'}
        style={{margin:'auto 10%'}}
        >
          
               
        <Bar options={options} data={data} />
        
        <Doughnut data={data1} options={options1} />
        <Bar options={options2} data={data2} />
        </Grid>
        </Grid>
        
        
    </div>
  )
}

export default Dashboard