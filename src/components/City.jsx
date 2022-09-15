import React from 'react'

const City = () => {
    const cities = [
      { id: 1, name: "Chicago", img: "chicago.jpg" },
      { id: 2, name: "Los Angeles", img: "los-angeles.jpg" },
      { id: 3, name: "New York", img: "new-york.jpg" },
    ];

  return (
    <div>
        <select>
            {cities.map(city => <option value={city.name}>{city.name}</option>)}
        </select>
        <select>
            {cities.map(city => <option value={city.img}>{city.img}</option>)}
        </select>
    </div>
  )
}

export default City