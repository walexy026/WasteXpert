import React from 'react'

const Button = ({desc, style, icon, className}) => {
  return (
    <div>
        <button style={style} className={className} >{icon}{desc}</button>
    </div>
  )
}

export default Button