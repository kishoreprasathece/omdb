import { data } from "autoprefixer";
import filmservices from "../services/filmservices"


const filmLoader = async()=>{
    try {
    const response = await filmservices.searchfilm();
    return response.data.Search;  // Ensure to access data.Search
  } catch (error) {
    console.error("Failed to load movies", error);
    return null;
  }
}
export default filmLoader;
