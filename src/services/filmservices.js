import instance from "./instance";

const filmservices = {
  searchfilm: async (query) => {
    return await instance.get(`/?s=${query}&apikey=2513e3be`);
  },
};

export default filmservices;
