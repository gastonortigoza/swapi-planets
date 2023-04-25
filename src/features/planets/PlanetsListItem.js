import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderBottom: "1px solid",
    borderColor: theme.palette.divider,
  },
}));

const PlanetsListItem = ({ planet }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemText
        primary={planet.name}
        secondary={`Población: ${planet.population}`}
      />
    </ListItem>
  );
};

export default PlanetsListItem;
