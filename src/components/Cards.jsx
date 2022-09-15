import React from 'react'


const Cards = () => {
    const rend_cards = [
      // {img: require('../assets/2091077845.jpg'), p:"d", h3:"d", status:{background:'red', color:'#000'}}, // чомусь не працює status
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "25 000",
        h5:"27 000",
        status:{color:'red'}
      },
      {
        img: require("../assets/2091077845.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "27 000",
        status:{color:'#000'}
      },
      {
        img: require("../assets/FLUXMOB-S6-SE-Auricul-700x700.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "20 000",
        status:{color:'grey'}
      },
      {
        img: require("../assets/2091077845.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h5:"30 000",
        h3: "28 000",
        status:{color:'red'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "22 000",
        status:{color:'#000'}
      },
      {
        img: require("../assets/FLUXMOB-S6-SE-Auricul-700x700.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "15 000",
        status:{color:'grey'}
      },
      {
        img: require("../assets/ASUS-ROG-Phone-6-Pro-1024x959.jpg"),
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        h3: "25 000",
        status:{color:'#000'}
      },
    ];
        // const style = {
        //     background:"red", color:"#000"
        // }
  return (
    <div  className='container'>
    {rend_cards.map((card, index = 0)  => 
    <div key={index++} className='block'>
        <div  className='card'>
        <span className="material-icons like">favorite_border</span>
            <img src={card.img} />
            <p>{card.p}</p>
            <h5 style={{textDecoration: "line-through"}}>{card.h5}</h5>
            <h3 style={card.status}>{card.h3} ₴</h3>
        </div>
    </div>
    )}
    </div>
    
  )
}

export default Cards