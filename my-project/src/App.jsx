import React from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Banner from './components/Banner';
import MoviesList from './components/MoviesList';
import Count from './components/demo/Count';
const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Routes >

      <Route path='/' element={<>
     
        <Banner />
        <Movies />
        </>} />
      <Route path='/watchlist' element={<WatchList />} />
      <Route path='/movieslist' element={<MoviesList />} />
      <Route path='/count' element={<Count />} />

    </Routes>
   
    </BrowserRouter>
  
 
    </>
  )
}

export default App

