import React from 'react'


const Footer = () => {
  return (
    <div>

 <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with navigation links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="/" className="text-gray-400 hover:text-red-500">Home</a>
            <a href="/movies" className="text-gray-400 hover:text-red-500">Movies</a>
            <a href="/tvshows" className="text-gray-400 hover:text-red-500">TV Shows</a>
            <a href="/about" className="text-gray-400 hover:text-red-500">About Us</a>
            <a href="/contact" className="text-gray-400 hover:text-red-500">Contact</a>
          </div>
          {/* Social media icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-500">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <i className="fab fa-youtube"></i> {/* Font Awesome icon */}
            </a>
          </div>
        </div>
        {/* Bottom section with description and copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-4">
            OMDb - Your source for all movie and TV show information. Discover and stream your favorite content!
          </p>
          <p>&copy; {new Date().getFullYear()} OMDb. All Rights Reserved.</p>
        </div>
      </div>
   
  </footer>




    </div>
  )
}

export default Footer