// function FindLargest(num1,num2){
//     if(num1>num2){
//         console.log(num1)
//     }
//     else if(num2>num1){
//         console.log(num2+" is the largest number")
//     }

//     else{
//         console.log("default value")
//     }
// }

// FindLargest(11,12)

import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);


