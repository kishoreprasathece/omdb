// Home.js
import { stringify, parse } from "postcss";
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const bat = useLoaderData();
  const navigate = useNavigate();
  const [favt, setFavt] = useState([]);

  useEffect(() => {
    if (bat) {
      setMovie(bat);
    } else {
      setError("Failed to load movies.");
    }
  }, [bat]);

  const nextpage = (imdbID) => {
    navigate(`/fimdetail/${imdbID}`);
  };

const addfav = (e, item) => {
  e.stopPropagation();
  const existingFav = favt.find((favItem) => favItem.imdbID === item.imdbID);
  if (existingFav) {
    alert("Item already added to favorites");
    return;
  }
  const updatedFav = [...favt, item];
  setFavt(updatedFav);
  localStorage.setItem('favorites', JSON.stringify(updatedFav));
};

useEffect(() => {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
  if (savedFavorites) setFavt(savedFavorites);
}, []);


  return (
    <div>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-4 gap-4 p-4 bg-black">
          {movie.map((item) => (
            <li key={item.imdbID} onClick={() => nextpage(item.imdbID)} className="cursor-pointer">
              <div>
                <p className="font-extrabold text-red-600">{item.Title}</p>
                <img src={item.Poster} alt={item.Title} />
                <p className="text-white mx-8 p-2">Type: {item.Type}</p>
                <h3 className="text-white mx-8 p-2">Year: {item.Year}</h3>
                <button className="bg-red-500 mx-8 text-white p-2">Play Now</button>
                <button
                  className="bg-pink-400 rounded-2xl mx-8 text-white p-2"
                  onClick={(e) => addfav(e, item)}
                >
                  ADD AS FAV
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

