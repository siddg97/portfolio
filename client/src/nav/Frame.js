import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
<<<<<<< HEAD
  Avatar,
  Button,
  CssBaseline,
  Drawer,
  Divider,
=======
  Button,
  CssBaseline,
  Divider,
  Drawer,
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
<<<<<<< HEAD
=======
  useTheme,
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { routes } from "./routes.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  drawer: {
<<<<<<< HEAD
    [theme.breakpoints.up("sm")]: {
=======
    [theme.breakpoints.up("lg")]: {
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navBar: {
<<<<<<< HEAD
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
=======
    padding: theme.spacing(2),
  },
  navToolbar: {
    padding: 0,
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
  },
  header: {
    flexGrow: 1,
  },
<<<<<<< HEAD
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  navBtn: {
    margin: theme.spacing(0.5),
    borderRadius: 999,
=======
  navBtn: {
    margin: theme.spacing(1),
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(3),
    marginTop: "auto",
  },
<<<<<<< HEAD
  heartIcon: {
    color: theme.palette.custom.tag,
  },
=======
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
}));

function Frame(props) {
  const { window, children } = props;
  const classes = useStyles();
<<<<<<< HEAD
=======
  const theme = useTheme();
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const nav = (
    <React.Fragment>
      {routes.map((r) => (
        <Button
          component={NavLink}
          to={r.path}
          exact
<<<<<<< HEAD
          size="large"
          color="primary"
          variant="outlined"
=======
          color="primary"
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
          key={r.path}
          className={classes.navBtn}
          activeClassName="MuiButton-containedPrimary"
          disableElevation={true}
<<<<<<< HEAD
          startIcon={r.icon}
=======
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
        >
          {r.name}
        </Button>
      ))}
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <List>
        {routes.map((r) => (
          <ListItem
            button
            onClick={() => setOpen(false)}
            key={r.path}
            component={NavLink}
            to={r.path}
            exact
            activeClassName="Mui-selected"
          >
            <ListItemIcon>{r.icon}</ListItemIcon>
            <ListItemText primary={r.name} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="sticky"
<<<<<<< HEAD
        color="default"
        className={classes.navBar}
        elevation={0}
      >
        <Toolbar>
          <div className={classes.header}>
            <Hidden smUp implementation="js">
              <Avatar
                alt="Siddharth Gupta"
                src={`${process.env.REACT_APP_SERVER_URL}/assets/me.jpg`}
                className={classes.avatar}
              />
            </Hidden>
            <Hidden xsDown implementation="js">
              <Typography variant="h4" className={classes.header}>
                S.G.
              </Typography>
            </Hidden>
          </div>
          <Hidden smUp implementation="js">
=======
        color="transparent"
        className={classes.navBar}
        elevation={0}
      >
        <Toolbar className={classes.navToolbar}>
          <Typography variant="h3" noWrap className={classes.header}>
            <Hidden lgUp implementation="js">
              S.G.
            </Hidden>
            <Hidden mdDown implementation="js">
              Siddharth Gupta
            </Hidden>
          </Typography>
          <Hidden lgUp implementation="js">
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
<<<<<<< HEAD
          <Hidden xsDown implementation="js">
=======
          <Hidden mdDown implementation="js">
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
            {nav}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
<<<<<<< HEAD
        <Hidden smUp implementation="js">
=======
        <Hidden lgUp implementation="js">
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
          <Drawer
            container={container}
            variant="temporary"
            anchor={"right"}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
<<<<<<< HEAD
      <Divider />
      <footer className={classes.footer}>
        <Typography variant="body1" align="center">
          Made with <FavoriteIcon className={classes.heartIcon} /> by Siddharth
          Gupta
=======
      <footer className={classes.footer}>
        <Typography variant="body1">
          Made with <FavoriteIcon color="secondary" /> by Siddharth Gupta -{" "}
          {new Date().getFullYear()}
>>>>>>> a508cb2... Pushed server to it own directory. Chose custom theme for MUI. Proper nav bar setup
        </Typography>
      </footer>
    </div>
  );
}

export default Frame;
