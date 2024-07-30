import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* <div className='flex space-x-7'>
        <a href='/'>Home</a>
        <a href='/watchlist'>Watchlist</a>

      </div> */}
      <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/watchlist" class="text-gray-900 dark:text-white hover:underline">Watchlist</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar

