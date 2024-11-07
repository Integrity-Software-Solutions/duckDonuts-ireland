import React from 'react'
import EverydayAssortmentsImage from '/assets/images/MenuImages/EverydayAssortmentsImage.jpg'
import MenuItem from '../../components/MenuComponents/MenuItem'

const EverydayAssortments = () => {
  return (
    <>
      <MenuItem
        backgroundImage={EverydayAssortmentsImage}
        alt="Everyday Assortments"
        title="Everyday Assortments"
      >
        {/* <div className="flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20">hello world</div> */}
      </MenuItem>
    </>
  )
}

export default EverydayAssortments
