import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { FiLogOut } from "react-icons/fi";
import { withCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginRight: theme.spacing(1),
  },
  in_bg: {
    fontSize: '0.2rem' ,
    height: 20,
  },
  title: {
    flexGrow: 1,
  },

  exit: {
    height: 500,
    color: 'red'
  },

  signOut:{
    backgroundColor: "transparent",
    color: "lightgray",
    marginTop: 7,
    fontSize: 25,
    border: "none",
    outline: "none",
    cursor: "pointer",
  } 

}));

const Navbar = (props) => {
  const classes = useStyles();
  const { askList, profiles } = useContext(ApiContext);

  // ログアウト処理（クッキーを削除）
  const Logout = () => (event) => {
    props.cookies.remove("current-token");
    window.location.href = "/";
  };


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" align="left" className={classes.title}>
          SNS App
        </Typography>
        <Badge
          className={classes.bg}
          // badgeContent={10}
          classes={{badge: classes.in_bg}}
          badgeContent={
            askList.filter((ask) => {
              return (
                ask.approved === false &&
                profiles.filter((item) => {
                  return item.userPro === ask.askFrom;
                })[0]
              );
            }).length
          }
          color="secondary"
        >
          <NotificationsIcon style={{ fontSize: 24 }}/>
        </Badge>
        <button className={classes.signOut} onClick={Logout()}>
          <FiLogOut style={{ fontSize: 24 }}/>
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withCookies(Navbar);
