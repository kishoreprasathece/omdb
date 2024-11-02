import instance from "./instance";

const movieServices = {
  getBatMan: async () => {
    return await instance.get('/?s=batman&apikey=2513e3be');
  },
  getMoviesearch: async (query) => {
    return await instance.get(`/?s=${query}&apikey=2513e3be`);
  }
};

export default movieServices;
