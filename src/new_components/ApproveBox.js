import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mailArea: {
        backgroundColor: "red",
        height: 300,
        width: 250
    },
}));

function ApproveBox() {
    const classes = useStyles();
    return (
        <div className={ classes.mailArea}>
            
        </div>
    )
}

export default ApproveBox
