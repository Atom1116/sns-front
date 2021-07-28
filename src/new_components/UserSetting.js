import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mailArea: {
        backgroundColor: "blue",
        height: 200,
        width: 250
    },
}));

function UserSetting() {
    const classes = useStyles();
    return (
        <div className={ classes.mailArea}>
            
        </div>
    )
}

export default UserSetting
