import React from 'react'
import CoffeeEspressoMoreImage from '/assets/images/MenuImages/CoffeeEspressoMoreImage.jpg'
import MenuItem from '../../components/MenuComponents/MenuItem'

const CoffeeEspressoAndMore = () => {
  return (
    <>
      <MenuItem
        backgroundImage={CoffeeEspressoMoreImage}
        alt='Coffee, Espresso, and More Image'
        title='Coffee, Espresso, & More'
      >
        {/* <div className='flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20'>hello world</div> */}
      </MenuItem>
    </>
  )
}

export default CoffeeEspressoAndMore
