import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      {/* <div className='flex space-x-7'>
        <a href='/'>Home</a>
        <a href='/watchlist'>Watchlist</a>

      </div> */}
      <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/watchlist" className="text-gray-900 dark:text-white hover:underline">Watchlist</Link>
                </li>
                <li>
                    <Link to="/movieslist" className="text-gray-900 dark:text-white hover:underline">MovieList</Link>
                </li>
                <li>
                    <Link to="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar

