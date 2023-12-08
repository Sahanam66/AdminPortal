import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Student = () => {
    const location=useLocation();
    const courseName=location.state
    console.log(courseName);
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/Candidates')

        .then((resp)=>{
            let filteredData=resp.data.filter((i)=>{
                return i.course==courseName
            })
            setData(filteredData)
            console.log(filteredData);
        })
        .catch((err)=>{
            console.log(err);
          })
    },[])
  return (
    <div>
        {
            data.filter(()=>{

            })
        }
    </div>
  )
}

export default Student