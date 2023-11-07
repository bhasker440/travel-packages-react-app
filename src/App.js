// import React, { useState } from 'react';
// import CardData from './CardData.jsx';
// import Data from './Data.js';

// const App = () => {
//   const [data, setData] = useState(Data); // Change 'Data' to 'data' for state variable

//   function handleBtn(id) { // Change 'HandlBtn' to 'handleBtn' for function name
//     const newData = data.filter(item => item.id !== id); // Change 'Data' to 'data' for variable name
//     setData(newData);
//   }

//   return (
//     <div>
//       <h1>Plan Your Tour</h1> {/* Fix the typo in the heading */}
//       <CardData data={data} dataFunc={handleBtn} /> {/* Change 'Data' to 'data' and 'DataFunc' to 'dataFunc' */}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import CardData from './CardData';
import Data from './Data';
import './App.css'
const App = () => {
  const [data, setData] = useState(Data);

  function handleBtn(id) {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  }
if (data.length==0){
    return(
      <div className='re-div'>
      <h1 className='re-text'> Refresh</h1>
      <a href="/" ><button className='re-btn'>Reload</button></a>
      </div>
    )
  }
  return (
    <div className='head-div'>
      <h1 className='head-pera'>Plan Your Tour</h1>
      <CardData data={data} dataFunc={handleBtn} />
    </div>
  );
  
};

export default App;
