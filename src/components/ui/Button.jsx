import React from 'react'

const Button = ({ children }) => {
    
  return (
    <button className="w-full border text-sm border-white rounded p-1 pointer text-white transition hover:bg-gray-800">{ children }</button>
  )
}

export default Button


// Title.jsx
// return (
//     <h3></h3>
// )