import React from 'react';

import Clock from './components/Clock';
import Greeting from './components/HelloWorld';
import Counter from './components/Katas';
import NumberList from './components/Login';

function Scratchpad() {
    return (
        <div>
            
            <Counter></Counter>
            <Clock></Clock>
            <Greeting isLoggedIn={true}/>
            {/* <NumberList numbers={numbers}/> */}

        </div>
    )
}



// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };

//   const element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );


// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }

//  setInterval(tick, 1000);


export default Scratchpad;
