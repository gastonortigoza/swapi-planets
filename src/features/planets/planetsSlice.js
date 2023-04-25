import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { fetchPlanets } from '../planets/planetsApi';

const initialState = {
  planets: [],
  sortOrder: 'asc',
  page: 1,
  perPage: 10,
};

export const fetchPlanetsAsync = createAsyncThunk('planets/fetchPlanets', async (params) => {
    params.page = params.page || 1;
    const response = await fetchPlanets(params);
    return response;
  });

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
      changePerPage: (state, action) => {
        state.perPage = action.payload;
      },
      setSortBy: (state, action) => {
        state.sortBy = action.payload;
      },
      setSortOrder: (state, action) => {
        state.sortOrder = action.payload;
      },
     setPlanets: (state, action) => {
      state.planets = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlanetsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.planets = action.payload;
      })
      .addCase(fetchPlanetsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setPlanets, setSortOrder, setPage, setPerPage, changePerPage, fetch, setCurrentPage, setSortBy } = planetsSlice.actions;

export default planetsSlice.reducer;
