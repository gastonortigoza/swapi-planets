import axios from "axios";

const swapiBaseUrl = "https://swapi.dev/api/";

export const fetchPlanets = async ({ page, perPage }) => {
    page = page || 0;
  try {
    const response = await axios.get(`${swapiBaseUrl}planets/?page=${page}&limit=${perPage}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
};
