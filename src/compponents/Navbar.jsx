import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

 const [query ,setQuery] = useState();
const navigate = useNavigate();
 const search=(e)=>{
  e.preventDefault();
  navigate(`/Fim?query=${query}`);
 }
const homepage =()=>{
  navigate('/')
}
  return (
    <div> 

          <div className="bg-black flex flex-wrap justify-between p-8">
        <h1 className="text-red-500 mx-3 text-4xl font-extrabold cursor-pointer " onClick={homepage} >omdb</h1>
        <div className="flex flex-wrap justify-between gap-4 mx-8">
          <p className="text-white font-extrabold">UNLIMITED TV SHOWS & MOVIES</p>
          <button className="bg-red-600 w-20 text-white">Sign in</button>
        </div>
      </div   >

      <div  >
        <p className="bg-red-500 text-white p-4 text-center font-semibold text-xl">
          omdb is the home of amazing original programming that you can’t find anywhere else.
        </p>
      </div>  
      <div className='flex flex-wrap gap-5 p-8 bg-red-200 ' >
        <form className="w-56 flex fl gap-4 mx-96   " onSubmit={search} >
        <input
          type="text"
          placeholder="Enter movie, shows & ..."
          className="border-2 border-gray-200 p-2 rounded-lg"
         value={query}
         onChange={(e)=>{setQuery(e.target.value)}}
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg" type="submit">Search</button>
      </form>
        <div >
          <select>
            <option>TYPE</option>
            <option>MOVIES</option>
            <option>SERIES</option>
          </select>
        </div>
        <div>
          <h1>fav..</h1>
        </div>
        </div>  

      </div>
  )
}

export default Navbar;