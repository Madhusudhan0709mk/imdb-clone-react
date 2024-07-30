import React from 'react'

const Banner = () => {
  return (
    <>
         <div 
      className='background-div items-end'
      style={{
        backgroundImage: `url(kgf.jpg)`,
        height: 'calc(100vh - 20vh)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

<div className='text-white text-xl text-center w-full bg-gray-900/60'>
  Premier - KGF
</div>

    </div>
    </>
  )
}

export default Banner
