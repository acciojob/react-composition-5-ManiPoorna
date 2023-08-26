
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [data1,setData1] = useState("")
  let [data2,setData2] = useState("")

  function getData1(e){
    setData1(e.target.getAttribute('value'))
  }
  function getData2(e){
    setData2(e.target.getAttribute('value'))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li value="Tab 1" onClick={(e)=>getData1(e)}>Tab 1</li>
          <li value="Tab 2" onClick={(e)=>getData1(e)}>Tab 2</li>
          <li value="Tab 3" onClick={(e)=>getData1(e)}>Tab 3</li>
        </ul>
        <p>Content for {data1}</p>

        <ul>
          <li value="Tab A" onClick={(e)=>getData2(e)}>Tab A</li>
          <li value="Tab B" onClick={(e)=>getData2(e)}>Tab B</li>
          <li value="Tab C" onClick={(e)=>getData2(e)}>Tab C</li>
        </ul>
        <p>Content for {data2}</p>
        
    </div>
  )
}

export default App
