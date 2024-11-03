import { data } from "autoprefixer";
import movieServices from "../services/movieServices";

const filmId = async ({ params }) => {
  try {
    console.log('Fetching movie details for ID:', params.imdbID);
    const response = await movieServices.getMovieById(params.imdbID);
    return response.data;  // Return the whole data object
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
};

export default filmId;