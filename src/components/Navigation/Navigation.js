import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          Swapi Planets
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
