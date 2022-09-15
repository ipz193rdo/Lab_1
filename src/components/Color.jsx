import React from 'react'
import { useState } from 'react';

const Color = () => {
    const [color, setColor] = useState('red')

    const colors = [
        {color:"red"},
        {color:"green"},
        {color:"black"},
        {color:"yellow"},
        {color:"grey"},
        {color:"orange"},
    ]

  return (
    <div>
      <h1 style={{color:color}}>I'm a {color} Product!</h1>
      <select onChange={(e) => setColor(e.target.value)}>
       {colors.map(res => <option value={res.color}>{res.color}</option>)}
      </select>
    </div>
  );
}

export default Color