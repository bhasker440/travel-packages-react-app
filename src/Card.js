// import React from 'react';

// const Card = ({id,name,price,info,image,handleBtn}) => {
//   return (
//     <div>
//       <img src= {image}/>
//       <h1>{name}</h1>
//       <h2>{price}</h2>

//        <p>{info}</p>
//         <button onClick={()=>handleBtn(id)} >Not Interested</button>
//     </div>
//   );
// }

// export default Card;

import React from 'react';
import "./Cardstyle.css";
const Card = ({ id, name, price, info, image, handleBtn }) => {
  return (
    <div className='all-item'>
      <img src={image} className='image' alt={name} />
      <h1 className='place-name'>{name}</h1>
      <h2 className='price'>₹{price}</h2>
      <p className='info'>{info}</p>
      <button className='remove-btn' onClick={() => handleBtn(id)}>Not Interested</button>
    </div>
  );
}

export default Card;
