import React, { useContext } from "react";
import { LoggedInContext } from "../../contexts/LoggedInContext";
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

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
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
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="Navbar">
      <h1 className="Navbar_title">کریپتو یار</h1>
      <div className="Navbar_profile">
        {loggedIn ? (
          <div className={classes.root}>
            <img src={profileImg} className="profile_img" />
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
                            Acount
                          </MenuItem>
                          <MenuItem
                            className={classes.menuItem}
                            onClick={handleClose}
                          >
                            Logout
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
          <button onClick={() => window.open("/auth/google", "_self")}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
export default Navbar;
