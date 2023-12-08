import React from 'react'
import {useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {CardContent, Grid, Card} from '@mui/material';
import TextField from '@mui/material/TextField';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import style from './Login.module.css'

const Login = () => {
    let userRef = useRef();
    let passworddata = useRef();

    let navigate = useNavigate();

    let handlelogin = (e) => {
        e.preventDefault();

        fetch(" http://localhost:4001/Admin").then((res) => {
            return res.json()
        }).then((data) => { // make use of data
            console.log(data);
            if (!Array.isArray(data)) {
                console.error("Data received is not an array", data);
                return;
            }
            let user = data.find((user) => {
                return user.email == userRef.current.value || user.phone == userRef.current.value
                toast.success("login successfull")
            })

            if (user == undefined) {
                alert("User not found please signup or give valid data")
            } else if (user.password != passworddata.current.value) {
                alert("Invalid password !!")
            } else {
                alert("Login successfull");
                localStorage.setItem('currentUser', JSON.stringify(user));
                navigate("/dashboard");
            }
        })


    }


    return (
        <div className={style.main}>
            <h2 style={
                {textAlign: "center",marginTop:"15%"}
            }>Login</h2>
            <form onSubmit={handlelogin}>
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
                            inputRef={userRef}
                            fullWidth
                            label="Email or Phone Number"
                            name='Email or Phone Number'
                            required/>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={passworddata}
                            fullWidth
                            label="Password"
                            name='Password'
                            required/>

                        <Box mt={2} ml={23}>
                            <Button type="submit" variant="contained" color="primary"  
                                style={
                                    {background: 'black',
                                }
                            }>
                                Login
                            </Button>
                        </Box>
                        <ToastContainer/>
                        <section style={{textAlign:'center',marginTop:'2%'}}>Not a member?<Link to='/signup'>SignUp</Link>
                        </section>

                    </CardContent>
                </Grid>
            </form>
        </div>
    )
}

export default Login
