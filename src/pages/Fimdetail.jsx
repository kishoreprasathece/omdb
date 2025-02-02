import React from 'react';

import { useLoaderData } from 'react-router-dom'

const Fimdetail = () => {
  const item = useLoaderData();
  return (
     <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4">
      {item ? (
        <div className="max-w-3xl w-full bg-black rounded-lg shadow-lg p-6 text-white">
          {/* Movie Title */}
          <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">{item.Title}</h1>

          {/* Movie Poster and Details */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-8"
              src={item.Poster}
              alt={item.Title}
            />
            <div className="w-full md:w-1/2 space-y-4">
              {/* Movie Type */}
              <p className="text-xl">
                <span className="font-semibold">Type:</span> {item.Type}
              </p>

              {/* Movie Year */}
              <h3 className="text-xl">
                <span className="font-semibold">Year:</span> {item.Year}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.Plot || "No description available for this movie."}
              </p>

              {/* Play Button */}
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Play Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600 font-bold text-xl">
          Error: Failed to load movie details.
        </p>
      )}
    </div>
  )
}

export default Fimdetail;