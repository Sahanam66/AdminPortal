import { Navigate } from "react-router-dom";

const Protect = ({Child}) => {

    let validate = ()=>{
        let value = localStorage.getItem("currentUser");
        if(value==null)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }
    return (
    <>
        {
            validate() ? <Child/> : <Navigate to="/login"/>
        }    
    </> );
}


export default Protect;