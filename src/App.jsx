import React, { useEffect } from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard'
import UserManagement from './components/CandidateOperation/UserManagement'
import Admin from './components/AdminOperation/AddAdmin'
import MyCourse from './components/MyCourseManagement/MyCourse'
import AddCandidate from './components/CandidateOperation/AddCandidate'
import AllCandidates from './components/CandidateOperation/AllCandidates'
import EditCandidate from './components/CandidateOperation/EditCandidate'
import AllAdmin from './components/AdminOperation/AllAdmin'
import AddAdmin from './components/AdminOperation/AddAdmin'
import EditAdmin from './components/AdminOperation/EditAdmin'
import AddCourse from './components/MyCourseManagement/AddCourse'
import EditCourse from './components/MyCourseManagement/EditCourse'
import AllCouseMaterial from './components/CourseMaterial/AllCouseMaterial'
import AllBatch from './components/BatchOperation/AllBatch'
import BatchDetails from './components/BatchOperation/BatchDetails'
import Profile from './components/UserComponent/Profile'
import Login from './components/UserComponent/Login'
import Signup from './components/UserComponent/SignUp'
import AllRequirements from './components/PlacementOperation/AllRequirements'
import AddRequirements from './components/PlacementOperation/AddRequirements'
import EditRequirement from './components/PlacementOperation/EditRequirement'
import AddBatch from './components/BatchOperation/AddBatch'
import Reset from './components/UserComponent/Reset'
import Student from './components/BatchOperation/Student'

const App = () => {
  useEffect(()=>{
    document.title="Sri Ram vidya center";
  },[])
  return (
    <div>
      <Router>
      
       <Routes>
        <Route path='/' element={<Login/>}/>
       
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/enroll' element={<UserManagement/>}/>
        <Route path='/addcandidate' element={<AddCandidate/>}/>
        <Route path='/admin' element={<AllAdmin/>}/>
        <Route path='/addAdmin' element={<AddAdmin/>}/>
        <Route path='/editAdmin/:id' element={<EditAdmin/>}/> 
        <Route path='/allCandidates' element={<AllCandidates/>}/>
        <Route path='/editCandidate/:id' element={<EditCandidate/>}/>
        <Route path='/course' element={<MyCourse/>}/>
        <Route path='/addCourse' element={<AddCourse/>}/>
        <Route path='/editCourse/:id' element={<EditCourse/>}/>
        <Route path='/Course_Management' element={<AllCouseMaterial/>}/>
        <Route path='/Batches' element={<AllBatch/>}/>
        <Route path='/batchDetails/:id' element={<BatchDetails/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Placements' element={<AllRequirements/>}/>
        <Route path='/addRequirements' element={<AddRequirements/>}/>
        <Route path='/editRequirement/:id' element={<EditRequirement/>}/>
        <Route path='addBatch/:id' element={<AddBatch/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/student' element={<Student/>}/>
       </Routes>
      </Router>   
    </div>
  )
}

export default App