import React from 'react'
import { Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    link_area: {
        "& li": {
            listStyle: "none",
            marginTop: 10,
            marginBottom: 10
        }
    },
}));

// サイドメニューコンポーネント
function SideMenu() {
    const classes = useStyles();
    return (
        <div className={ classes.link_area}>
            <li><Link color="secondary" underline="none">Mail Box</Link></li>
            <li><Link underline="none">Search Friend</Link></li>
        </div>
    )
}

export default SideMenu
