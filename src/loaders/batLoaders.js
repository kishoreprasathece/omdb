import { data } from "autoprefixer";
import movieServices from "../services/movieServices";

const batLoaders = async ()=>{

try {
    const response = await movieServices.getBatMan();
    return response.data.Search;
    
} catch (error) {
    console.error("Failed to load movies", error);
    return null;
    
}

}
export default batLoaders;