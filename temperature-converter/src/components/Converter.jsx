import React, { useState } from "react";
import ReactDOM from 'react-dom/client';


const Converter = () => {
    const [temp , setTemp] = useState("");
    const [type, setType] = useState("");

    function handleChange(event){
      const { value } = event.target;
    
      setTemp(value)

    }

    function handleType(event){
      const { value } = event.target;
      setType(value);
    }

    function convertTemp(){
      var results = "";
      const root = ReactDOM.createRoot(
        document.getElementById('results')
      );
      

      if(type==="" || temp==="" || isNaN(temp)){
        const errornum = <h4 style={{visibility: 'visible'}}>Enter valid type and degrees</h4>;
        root.render(errornum);

      } else if(type==="Fahrenheit"){
        var numCel = parseFloat(temp);
        results = ((numCel - 32)/1.8).toFixed(2) + '\u00B0 Celsious';
        const element = <h2 style={{visibility: 'visible'}}>{results}</h2>;
        root.render(element)
        
      } else {
        var numFah = parseFloat(temp);
        results = ((numFah * 9)/5 + 32).toFixed(2) + `\u00B0 Fahrenheit`;
        const element = <h2 style={{visibility: 'visible'}}>{results}</h2>;
        root.render(element)
        
      } 
       
    
      
    }

    return (<div className="Converter">
      <div className="temperaturebox">
        <label>Degrees</label>
        <input type="text" name="temperature" maxLength={5} onChange={handleChange} value={temp}></input>
      </div>
      <div className="typebox">
        <label>Type</label>
        <select id="type" onChange={handleType} defaultValue={"DEFAULT"} required>
            <option disabled value="DEFAULT">Select Type</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celcuis">Celcuis</option>
        </select>
        
      </div>
      <div className="buttonbox">
        <button className="convertbutton" onClick={() => convertTemp()}>Convert</button>
      </div>
      <div className="resultsBox">
            <h1 id="results">Results</h1>
      </div>
      
    </div>)
}





export default Converter

