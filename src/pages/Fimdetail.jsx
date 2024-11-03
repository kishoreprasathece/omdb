import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Fimdetail = () => {
  const item = useLoaderData();
  return (
    <div>
    {item ? (
      <ul className="grid grid-cols-4 col-span-4 space-y-4 bg-black">
       
         
            <div>
              <p className='font-extrabold text-red-600'>{item.Title}</p>
              <img src={item.Poster} alt={item.Title} />
              <p className='text-white mx-8 p-2'>Type: {item.Type}</p>
              <h3 className='text-white mx-8 p-2'>Year: {item.Year}</h3>
              <button className='bg-red-500 mx-8 text-white p-2'>Play Now</button>
            </div>
    

      </ul>
    ) : (
      <p className="error">Error: Failed to load movies.</p>
    )}
  </div>
  )
}

export default Fimdetail