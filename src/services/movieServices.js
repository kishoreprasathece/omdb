import instance from "./instance";

const movieServices = {
  getBatMan: async () => {
    return await instance.get('/?s=batman&apikey=2513e3be');
  },
  getMoviesearch: async (query) => {
    return await instance.get(`/?s=${query}&apikey=2513e3be`);
  },
  getMovieById: async (imdbID) => {  // Add this function
    return await instance.get(`/?i=${imdbID}&apikey=2513e3be`);
  }

};

export default movieServices;