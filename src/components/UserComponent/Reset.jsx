import { useEffect, useRef, useState } from "react";
import Nav from '../Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { CardContent, Grid, Card } from '@mui/material';
import style from './Reset.module.css'
import CloseIcon from '@mui/icons-material/Close';

const Reset = () => {
    let [currentUser, setcurrentUser] = useState(null);
    let old = useRef();
    let newPass = useRef();
    let rePass = useRef();

    let navigate = useNavigate();

    let logout = () => {
        navigate("/login");
        localStorage.removeItem("currentUser");
    }

    let resetPassword = () => {
        // ... (your existing code)

    }

    useEffect(() => {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setcurrentUser(currentUser);
    }, [])

    return (
        <div>
            <Nav />
            <Grid container justifyContent="center" spacing={2} mt={2}>
                <Grid item className={style.main}>
                    <Card
                        sx={{
                            justifyContent: 'center',
                            maxWidth: 345
                        }}
                    />
                    <CardContent className={style.main1}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ background: 'white', color: 'black', float: 'right', margin: '-5% 0' }}
                            onClick={() => { navigate('/Profile') }}
                        >
                            <CloseIcon />
                        </Button>
                        <h3 style={{ textAlign: "center" }}>Reset password</h3>

                        <TextField
                            inputRef={old}
                            className={style.text}
                            label="Old password"
                            name='Old password'
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            inputRef={newPass}
                            className={style.text}
                            label="New password"
                            name='New password'
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            inputRef={rePass}
                            className={style.text}
                            label="Re-enter password"
                            name='Re-enter password'
                            required
                            fullWidth
                            margin="normal"
                        />

                        <Box style={{ textAlign: "center" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ background: 'black' }}
                                onClick={resetPassword}
                            >
                                Reset
                            </Button>
                        </Box>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Reset
