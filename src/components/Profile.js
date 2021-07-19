import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
    button: {
        margin: theme.spacing(1)
    }
})

const Profile = ({profileData, askData}) => {
    const classes = useStyles();
    const {newRequestFriend, profile} = useContext(ApiContext);

    const newRequest = ()=> {
        const askUploadData = new FormData();
        askUploadData.append("askTo", profileData.userpro);
        newRequestFriend(askUploadData);
    }

    return (
        <div>
            
        </div>
    )
}

export default Profile
