import { data } from "autoprefixer";
import movieServices from "../services/movieServices";

const movieLoaders = async () => {
  try {
    const response = await movieServices.getHomeMovie();
    return response.data.Search;  // Ensure to access `data.Search`
  } catch (error) {
    console.error("Failed to load movies", error);
    return null;
  }
};

export default movieLoaders;
