import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import apis from "../../api";
import { LoggedInContext } from "../../contexts/LoggedInContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

import "./Navbar.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  btn: {
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "lowercase",
    fontSize: "1.4rem",
    width: "10rem",
  },
  menuList: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    width: "10rem",
    backgroundColor: "#eee",
  },
  menuItem: {
    fontSize: "1.4rem",
    padding: "2px 1rem",
  },
}));

function Navbar() {
  const { user } = useContext(LoggedInContext);
  const { loggedIn, username, profileImg } = user;
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = async (event) => {
    if (event.target.id === "logout-btn") {
      await apis.logout();

      history.push("/");
      window.location.reload();
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      if (anchorRef.current) {
        anchorRef.current.focus();
      }
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="Navbar">
      <Link to="/">
        <h1 className="Navbar_title">کریپتو یار</h1>
      </Link>
      <div className="Navbar_profile">
        {loggedIn ? (
          <div className={classes.root}>
            <img src={profileImg} className="profile_img" alt="user " />
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.btn}
              >
                <p>{username} &#9660;</p>
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                          className={classes.menuList}
                        >
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleClose}
                          >
                            Account
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleClose}
                            id="logout-btn"
                          >
                            Log out
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        ) : (
          <button
            onClick={() => window.open("/auth/google", "_self")}
            className="profile_login_btn"
          >
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="singinalt_icon login_icon"
            />
            Log In / Sing Up
          </button>
        )}
      </div>
    </div>
  );
}
export default Navbar;
