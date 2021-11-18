import React, {useState, useEffect} from "react";
import { Grid, CircularProgress, TextField, Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RoomIcon from '@mui/icons-material/Room';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

//notification badge
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import profilePicture from "../assets/profile-picture.jpeg";

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';



import SideNav from '../component/sidenav';
import SelectBoxes from "../component/selectBoxes";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 2,
      top: 28,
      backgroundColor: "#d43844",
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const StyledProfile = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 2,
      top: 48,
      backgroundColor: "#37D667",
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const useStyles = makeStyles(theme => ({
    root: {
        margin: '4rem 2rem 1rem 2rem'
    },
    loaderContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
      marginLeft: theme.spacing(1)
    },
    cardTitle: {
        fontWeight: 600,
        lineHeight: '30px',
        fontSize: '16px',
        color: '#0e0e0e'
    },
    sideNavContainer:{
        borderRight: "0.5px solid gray"
    },
    searchInput:{
        boxShadow: '0px 4px 30px rgba(23, 28, 33, 0.1)',
        // borderRadius: '50px',
        border: 'none',
        height: '62px',
        padding: '14px !important'
    },
    // dropDown: {
    //     width: "250px",
    //     height: "300px",
    // },
    dropDownToggle:{
        display: "inline-block"
    }
   
}));



const Dashboard =()=>{
    const classes = useStyles();

    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);

    const [notifState, setNotifState] = useState(false);

    const notifHandler =()=>{
        setNotifState(prevState => !prevState);
    }

   

    //This is an effect to fetch the news api on page load
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },1000)
        axios.get(`https://api.unsplash.com/photos?page=10&client_id=W6FTtcObb327UiNFP76QTgeucULryadqXBbyUOfKvw0`)
            .then(function (response) {
                debugger
                // handle success
                setData(response.data);
                setLoader(false);
              
             })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert('Error occured in loading All Data');
                setLoader(false);
            })
            .then(function () {
                setLoader(false);
                // always executed
            });
            //eslint-disable-next-line
    },[])
  
      
    return(
        <div>
            {
                loader ? 
                <div className={classes.loaderContainer}>
                    <CircularProgress color="success"/>
                </div> 
                : 
                <>
                    <div className="dashboardContainer">
                        <Grid container>
                            <Grid item xs={12} md={2} className="sideNavContainer">
                                <SideNav/>
                            </Grid>
                            <Grid item xs={12} md={10} className="bodyContainer">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={7} lg={9}>
                                        <FormControl sx={{width: '100%' }} variant="outlined">
                                            <TextField
                                                id="search-area"
                                                type='text'
                                                variant="standard"
                                                className={classes.searchInput}
                                                disableUnderline={true}
                                                InputProps={{
                                                    startAdornment: 
                                                        <InputAdornment position="start">
                                                            <IconButton
                                                            edge="end"
                                                            >
                                                                <SearchIcon fontSize="medium"/>
                                                            </IconButton>
                                                        </InputAdornment>,
                                                    endAdornment: 
                                                        <InputAdornment position="end" className="purpleButton">
                                                            <Button
                                                            edge="end"
                                                            >
                                                                <span className="nibbuttonText">Search</span>
                                                            </Button>
                                                        </InputAdornment>,
                                                    // classes:{notchedOutline:classes.searchInput},
                                                    disableUnderline: true,
                                                }}
                                                placeholder="Find Something"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6} md={2} lg={1}>
                                        <Dropdown className="quick-menu" isOpen= {notifState} toggle={notifHandler}>
                                            <DropdownToggle className={classes.dropDownToggle}  tag="span" data-toggle="dropdown">
                                                <IconButton aria-label="notification">
                                                    <StyledBadge badgeContent={4} style={{color: "#383298"}} color="secondary">
                                                        <NotificationsIcon fontSize="large"/>
                                                    </StyledBadge>
                                                </IconButton>
                                            </DropdownToggle>

                                            <DropdownMenu right>
                                                    <div>
                                                        <p>to be listed</p>
                                                        <p>to be listed</p>
                                                    </div>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Grid>
                                    <Grid item xs={6} md={3} lg={2}>
                                        <StyledProfile badgeContent={"B"} >
                                            <Avatar
                                                alt="Bola Ilesanmi"
                                                src={profilePicture}
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </StyledProfile>
                                        <Typography sx={{ marginLeft: '15px'}} variant="subtitle2" gutterBottom component="span">
                                            Abigail
                                            <IconButton>
                                                <KeyboardArrowDownIcon/>
                                            </IconButton>
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* container for select boxes */}
                                <SelectBoxes/>
                                <div className="cardContainer">
                                    {
                                        data.map((item) => {
                                            return(
                                                <div key={item.id} item className="cardItem">
                                                    <img src={item.urls.regular} alt={item.alt_description} className="cardImage"/>
                                                    <div className="cardOverlay">
                                                        <Typography  variant="h4" gutterBottom component="div">
                                                            {item.user.first_name}, {item.user.total_photos}
                                                        </Typography>
                                                        <Typography  variant="subtitle2" gutterBottom component="div">
                                                            <RoomIcon/> New York
                                                        </Typography>
                                                        <div className="cardButtons">
                                                            <Button className="redCardButton">
                                                                <FavoriteBorderIcon className="nibcardbuttonText"/>
                                                            </Button>
                                                            <Button className="purpleCardButton">
                                                            <ThumbDownIcon className="nibcardbuttonText"/>
                                                            </Button>
                                                        </div>
            
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        </Grid>
                        
                          {/* <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardHeader title="Sales by category over four years" className={classes.cardTitle} />
                                    <Divider />
                                  
                                </Card>
                            </Grid>                           
                        </Grid> */}
                    </div>
                </>
            }
           
        </div>
    )
}

export default Dashboard;