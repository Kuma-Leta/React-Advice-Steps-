import { useState } from "react";


function App() {
  const steps=[{advice:"learn react",step:1},{advice:"master react library",step:2},{advice:'earn money through freelance',step:3}]
  const [stepCount,setStepCount]=useState(0)
  // const [count,setCount]=useState(steps[0])
function handlePrevious(){
  if (stepCount < 1 ) return;
  setStepCount((stepCount) => stepCount - 1);
}
function handleNext(){
 if(stepCount>=2)
 return
 setStepCount((stepCount)=>stepCount+1)
 
}
  return (
    <div className="App">
      <div className="steps">
        <h1 className={stepCount === 0 ? "green" : ""}>step :1</h1>
        <h1 className={stepCount === 1? "green" : ""}>step :2</h1>
        <h1 className={stepCount === 2 ? "green" : ""}>step :3</h1>
      </div>
      <div>
        <p style={{}} className="adviceStep">
          step:{stepCount + 1} {steps[stepCount].advice}
        </p>
      </div>
      <div className="handleSwitch">
        <button className="btn" onClick={() => handlePrevious()}>
          previous
        </button>
        <button className="btn" onClick={() => handleNext()}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;