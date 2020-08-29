import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
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
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navBar: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  header: {
    flexGrow: 1,
  },
  navBtn: {
    margin: theme.spacing(1),
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
  heartIcon: {
    color: theme.palette.custom.tag,
  },
}));

function Frame(props) {
  const { window, children } = props;
  const classes = useStyles();
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
          size="large"
          color="primary"
          key={r.path}
          className={classes.navBtn}
          activeClassName="MuiButton-containedPrimary"
          disableElevation={true}
          startIcon={r.icon}
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
        color="default"
        className={classes.navBar}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h3"
            color="primary"
            noWrap
            className={classes.header}
          >
            SG
          </Typography>
          <Hidden smUp implementation="js">
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
          <Hidden xsDown implementation="js">
            {nav}
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
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
      <Divider />
      <footer className={classes.footer}>
        <Typography variant="body1" align="center">
          Made with <FavoriteIcon className={classes.heartIcon} /> by Siddharth
          Gupta
        </Typography>
      </footer>
    </div>
  );
}

export default Frame;
