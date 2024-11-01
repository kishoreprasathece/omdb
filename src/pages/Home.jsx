
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Home = () => {
  const bat = useLoaderData();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    if (bat) {
      setMovies(bat);
    } else {
      setError("Failed to load movies.");
    }
  }, [bat]);

  const filmsearch = (e) => {
    e.preventDefault();
    navigate(`/Film?query=${query}`);
  };

  return (
    <div>
   <div className="bg-black flex flex-wrap justify-between p-8">
        <h1 className="text-red-500 mx-3 text-4xl font-extrabold">omdb</h1>
        <div className="flex flex-wrap justify-between gap-4 mx-8">
          <p className="text-white font-extrabold">UNLIMITED TV SHOWS & MOVIES</p>
          <button className="bg-red-600 w-20 text-white">Sign in</button>
        </div>
      </div>

      <div>
        <p className="bg-red-500 text-white p-4 text-center font-thin text-xl">
          omdb is the home of amazing original programming that you can’t find anywhere else.
        </p>
      </div>

      <div className="flex flex-wrap">
        <div className="container flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
         
        </div>
        <form className="w-56 flex flex-col gap-4 mx-96 " onSubmit={filmsearch}>
        <input
          type="text"
          placeholder="Enter movie, shows & ..."
          className="border-2 border-gray-200 p-2 rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg" type="submit">Search</button>
      </form>
        <div className="my-8">
          <select>
            <option>TYPE</option>
            <option>MOVIES</option>
            <option>SERIES</option>
          </select>
        </div>
      </div>
     
      <div>
        
        {error ? (
          <p className="error">Error: {error}</p>
        ) : (
          <ul className="grid grid-cols-4 col-span-4 space-y-4 "  >
            {movies.map((item) => (
              <li key={item.imdbID}>
                <div>
                  <p>{item.Title}</p>
                  <img src={item.Poster} alt={item.Title} />
                  <p>Type: {item.Type}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
