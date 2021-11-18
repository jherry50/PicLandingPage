import React from "react";
import { Grid } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const SelectBoxes = () => {
     //for select boxes
     const [world, setWorld] = React.useState('');
     const [following, setFollowing] = React.useState('');
     const [popular, setPopular] = React.useState('');
     const [post, setPost] = React.useState('');
     const [gender, setGender] = React.useState('');
     const [location, setLocation] = React.useState('');
     const [profession, setProfession] = React.useState('');


     const handleChange = (event, type) => {
         switch(type){
            case "world":  
                setWorld(event.target.value);
                break;
            case "following":  
                setFollowing(event.target.value);
                break;
            case "popular":  
                setPopular(event.target.value);
                break;
            case "post":  
                setPost(event.target.value);
                break;
            case "gender":  
                setGender(event.target.value);
                break;
            case "location":  
                setLocation(event.target.value);
                break;
            case "profession":  
                setProfession(event.target.value);
                break;
            default:  
                break;

         }
     };
    return(
        <>
             <Grid container className="selectWrapper">
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label1">World</InputLabel>
                        <Select
                            labelId="select-label1"
                            id="world-select"
                            className="select"
                            value={world}
                            label="World"
                            onChange={(e) => handleChange(e,"world")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label2">Following</InputLabel>
                        <Select
                            labelId="select-label2"
                            id="following-select"
                            className="select"
                            value={following}
                            label="Following"
                            onChange={(e) => handleChange(e, "following")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label3">Popular</InputLabel>
                        <Select
                            labelId="select-label3"
                            id="popular-select"
                            className="select"
                            value={popular}
                            label="Popular"
                            onChange={(e) => handleChange(e, "popular")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label4">Post</InputLabel>
                        <Select
                            labelId="select-label4"
                            id="post-select"
                            className="select"
                            value={post}
                            label="Post"
                            onChange={(e) => handleChange(e, "post")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label5">Gender</InputLabel>
                        <Select
                            labelId="select-label5"
                            id="gender-select"
                            className="select"
                            value={gender}
                            label="Gender"
                            onChange={(e) => handleChange(e, "gender")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label6">Location</InputLabel>
                        <Select
                            labelId="select-label6"
                            id="location-select"
                            className="select"
                            value={location}
                            label="Location"
                            onChange={(e) => handleChange(e, "location")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="select-label7">Profession</InputLabel>
                        <Select
                            labelId="select-label7"
                            id="profession-select"
                            className="select"
                            value={profession}
                            label="Profession"
                            onChange={(e) => handleChange(e, "profession")}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

        </>
    )
}

export default SelectBoxes;