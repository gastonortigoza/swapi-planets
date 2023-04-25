import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CircularProgress,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import PlanetListItem from '../planets/PlanetsListItem';
import {
  fetchPlanetsAsync,
  setCurrentPage,
  changePerPage,
  setSortBy,
  setSortOrder,
} from '../planets/planetsSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    minWidth: 120,
  },
}));

const PlanetList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets.planets);
  const currentPage = useSelector((state) => state.planets.currentPage);
  const perPage = useSelector((state) => state.planets.perPage);
  const sortBy = useSelector((state) => state.planets.sortBy);
  const sortOrder = useSelector((state) => state.planets.sortOrder);
  const status = useSelector((state) => state.planets.status);
  const error = useSelector((state) => state.planets.error);

  useEffect(() => {
    dispatch(fetchPlanetsAsync({ page: currentPage, perPage, sortBy, sortOrder }));
  }, [dispatch, currentPage, perPage, sortBy, sortOrder]);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  const handlePerPageChange = (event) => {
    dispatch(changePerPage(event.target.value));
  };

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  const handleOrderChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <Typography variant="h6">{error}</Typography>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {planets.map((planet) => (
          <Grid item xs={12} sm={6} md={4} key={planet.name}>
            <PlanetListItem planet={planet} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(planets.length / perPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: '1rem' }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="perPage">Per Page</InputLabel>
        <Select value={perPage} onChange={handlePerPageChange} inputProps={{ name: 'perPage', id: 'perPage' }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sortBy">Sort By</InputLabel>
        <Select value={sortBy} onChange={handleSortChange} inputProps={{ name: 'sortBy', id: 'sortBy' }}>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="population">Population</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sortOrder">Sort Order</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleOrderChange}
          inputProps={{ name: 'sortOrder', id: 'sortOrder' }}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PlanetList;

