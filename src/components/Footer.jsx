import React from 'react'

const Footer = () => {
  return (
    <div style={{
        backgroundColor: "#1d212f",
        display: "flex",
        flexDirection: "column",
      }} className='text-white d-flex justify-content-center align-items-center'>
        {new Date().getFullYear()}
      </div>
  )
}

export default Footer