import { data } from "autoprefixer";
import movieServices from "../services/movieServices";

const filmLoaders = async ()=>{
 try {
        const response = await movieServices.searchfilm(query);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setError("No movies found.");
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      }
    };



export default filmLoaders;