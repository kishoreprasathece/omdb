import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import filmservices from '../services/filmservices';

const Film = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await filmservices.searchfilm(query);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setError("No movies found.");
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      }
    };

    if (query) fetchMovies();
  }, [query]);

  return (
    <div>
  <div className="bg-black flex flex-wrap justify-between p-8">
        <h1 className="text-red-500 mx-3 text-4xl font-extrabold">omdb</h1>
        <div className="flex flex-wrap justify-between gap-4 mx-8">
          <p className="text-white font-extrabold">UNLIMITED TV SHOWS & MOVIES</p>
          <button className="bg-red-600 w-20 text-white">Sign in</button>
        </div>
</div>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-4 col-span-4 space-y-4 bg-black ">
          {movies.map((item) => (
            <li key={item.imdbID}>
              <div>
                <p className='font-extrabold text-red-600' >{item.Title}</p>
                <img src={item.Poster} alt={item.Title} />
                <p className=' text-white p-2'  >Type: {item.Type}</p>
                <h3 className=' text-white p-2' > year : {item.Year}</h3>
                <button className='bg-red-500 mx-8 text-white p-2' >play now</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Film;