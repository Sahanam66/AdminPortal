import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Nav from "../Nav";
import { Grid, Card, CardContent, CardActionArea, Typography, Box, Button } from "@mui/material";

const Profile = () => {
    let [currentUser, setcurrentUser] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        let currentUser = localStorage.getItem("currentUser");
        setcurrentUser(JSON.parse(currentUser));
    }, [])

    let logout = () => {
        navigate("/login");
        localStorage.removeItem("currentUser");
    }

    return (
        <>
            <Nav />
            {currentUser && <div className="profile">
                <Grid container justifyContent="center" spacing={2} mt={2}>
                    <Grid item className="grid2" style={{ margin: "auto" }}>
                        <Card sx={{ maxWidth: 360 }} className="cardJPJ">
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                                        {currentUser.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                                        {currentUser.phone}<br />{currentUser.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Box m={1}>
                            <Button type="submit" variant="contained" color="primary" style={{ background: 'black' }} onClick={logout}>
                                Logout
                            </Button>
                        </Box>
                        <Box m={1}>
                            <Button type="submit" variant="contained" color="primary" style={{ background: 'black' }} onClick={() => { navigate('/reset') }}>
                                Reset password
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </div>}
            <ToastContainer />
        </>
    );
}

export default Profile;
