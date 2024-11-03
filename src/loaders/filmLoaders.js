import { data } from "autoprefixer";
import movieServices from "../services/movieServices";

const filmLoaders = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  try {
    const response = await movieServices.getMoviesearch(query);
    return response.data.Search;
  } catch (error) {
    console.error("Failed to load movies", error);
    return null;
  }
};

export default filmLoaders;