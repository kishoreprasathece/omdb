import React from "react";


const Home = () => {
 
  return (
    <div>
      <div className="bg-black flex flex-wrap justify-between p-8">
        <div>
          <h1 className="text-red-500 mx-3 text-4xl font-extrabold">omdb</h1>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mx-8">
          <p className="text-white font-extrabold">
            UNLIMITED TV SHOWS & MOVIES
          </p>
          <button className="bg-red-600 w-20 text-white">Sign in</button>
        </div>
      </div>

      <div>
        <p className="bg-slate-400 text-white p-4 text-xl">
          omdb is the home of amazing original programming that you can’t find
          anywhere else. Movies, TV shows, specials and more, all tailored
          specifically to you.
        </p>
      </div>

      <div className="flex flex-wrap" >
        <div className="container flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
          <h3 className="text-lg font-semibold">Ready to watch?</h3>

          <form className="w-56 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter movie, shows & ..."
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={''}
              
            />
            <button  className="bg-blue-500 text-white p-2 rounded-lg">
              Search
            </button>
          </form>
        </div>

        <div className="my-8" >
            <select>
                <option>TYPE</option>
                <option>MOVIES</option>
                <option>SERIES</option>
            </select>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
