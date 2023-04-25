import React from "react";
import Navigation from "../../components/Navigation";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

export default MainLayout;
