
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const [movie , setMovie] = useState([])
  const [error, setError] = useState(null)
  const bat = useLoaderData();

useEffect(()=>{
  if (bat) {
    setMovie(bat);
  } else {
    setError("Failed to load movies.");
  }


},[bat])

  return (

<div>

   <div>
        
        {error ? (
          <p className="error">Error: {error}</p>
        ) : (
          <ul className="grid grid-cols-4 col-span-4 space-y-4  bg-black "  >
            {movie.map((item) => (
              <li key={item.imdbID}>
                <div>
                  <p className='font-extrabold text-red-600'>{item.Title}</p>
                  <img src={item.Poster} alt={item.Title} />
                  <p className=' text-white mx-8 p-2' >Type: {item.Type}</p>
                  <h3 className=' text-white mx-8 p-2' > year : {item.Year}</h3>
                  <button className='bg-red-500 mx-8 text-white p-2' >play now</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>


</div>
  )
}

export default Home;
