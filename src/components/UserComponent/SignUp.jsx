import {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {CardContent, Grid, Card} from '@mui/material';
import TextField from '@mui/material/TextField';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import style from './SignUp.module.css'

const Signup = () => {
    let namedata = useRef();
    let emaildata = useRef();
    let phonedata = useRef();
    let passworddata = useRef();

    let navigate = useNavigate();


    let handleSubmit = (e) => {
        e.preventDefault();

        let userdata = {

            "name": namedata.current.value,
            "email": emaildata.current.value,
            "phone": phonedata.current.value,
            "password": passworddata.current.value
        }

        // validation logics

        if (userdata.name === "") {
            alert("plz enter your name");
            return;
        }


        fetch("http://localhost:4001/Admin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        }).then(() => {
            alert("added to db");
            navigate("/login");
        })
    }

    return (
        <div className={style.main}>
            <h2 style={{textAlign:'center'}}>SignUp</h2>
            <form onSubmit={handleSubmit}>

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
                            inputRef={namedata}
                            fullWidth
                            label="Name"
                            name='Name'
                            required/>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={emaildata}
                            fullWidth
                            label="Email"
                            name='Email'
                            required/>
                        <TextField style={
                                {
                                    marginBottom: '1%',
                                    marginTop: '1%'
                                }
                            }
                            inputRef={phonedata}
                            fullWidth
                            label="Phone no"
                            name='Phone no'
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
                        <Box mt={2} ml={37}>
                            <Button type="submit" variant="contained" color="primary"
                                style={
                                    {background: 'black'}
                            }>
                                Sign Up
                            </Button>
                        </Box>
                        <ToastContainer/>

                        <section style={{textAlign:'center',marginTop:'2%'}}>Already a member?<Link to="/login">Login now</Link>
                        </section>
                    </CardContent>
                </Grid>

            </form>
        </div>
    )
}

export default Signup
