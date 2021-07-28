import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mailArea: {
        backgroundColor: "gray",
        height: 700,
        width: 500
    },
}));

function MailBox() {

    const classes = useStyles();
    return (
        <div className={ classes.mailArea}>
            
        </div>
    )
}

export default MailBox
