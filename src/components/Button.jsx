import React from 'react'

const Button = ({ onClick, children, textColor, color, borderColor, fontWeight }) => {
  return (
    <button 
        className="myButton" 
        onClick={onClick} 
        style={{ 
            backgroundColor: color,
            borderColor: borderColor,
            color: textColor,
            fontWeight: fontWeight
        }}>
        {children}
    </button>
  )
}

export default Button