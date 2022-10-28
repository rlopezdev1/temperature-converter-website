import React from "react";


const Converter = () => {
    return (<div className="Converter">
      <div className="temperaturebox">
        <label>Degrees</label>
        <input type="text"></input>
      </div>
      <div className="typebox">
        <label>Type</label>
        <select id="type">
            <option value="Fahrenheit" selected>Fahrenheit</option>
            <option value="Celcuis">Celcuis</option>
        </select>
        
      </div>
      <div className="buttonbox">
        <button className="convertbutton">Convert</button>
      </div>
      <div className="results">
            <h1>Results</h1>
      </div>
      
    </div>)
}

export default Converter

