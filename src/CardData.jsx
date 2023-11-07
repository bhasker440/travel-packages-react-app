// import React from 'react';
// import Card from './Card';

// const CardData = (props) => {
//   return (
//     <div>
// {
//     props.data.map((Data)=>{
//        return <Card {...Data}  handleBtn={handleBtn} />
//     })
// }
//     </div>
//   );
// }

// export default CardData;
import React from 'react';
import Card from './Card';
import './Cr-data.css'
const CardData = ({ data, dataFunc }) => {
  function handleBtn(id) {
    console.log(id);
    dataFunc(id);
  }

  return (
    <div className='main-div'>
      {data.map((data) => (
        <Card
          {...data}
          handleBtn={handleBtn}
        />
      ))}
    </div>
  );
}

export default CardData;
