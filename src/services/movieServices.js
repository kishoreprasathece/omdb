import instance from "./instance";

const movieServices ={

    getBatMan :async ()=>{

        return await instance.get('/?s=batman&apikey=2513e3be');
    },


}

export default movieServices;