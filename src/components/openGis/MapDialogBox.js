
import React from 'react'
import "./dashboardMap.css";

export default function MapDialogBox({handleFilterModel}) {

  const handleFilterMapSubmit = (event) => {
    event.preventDefault();
  }

    // select options 
    const mapFilterOptions = [
        { value: 'poles', label: 'Poles' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

      
  return (
    <React.Fragment>
        <header className="header">
            <h1>Map Filter</h1>
            <button onClick={()=>{handleFilterModel()}} className="icon"><i className="fas fa-times"></i></button>
        </header>
        <form role={"contentinfo"} onSubmit={(e)=>{handleFilterMapSubmit(e)}}>
            <div className="input_container">
                <label>Layer</label>
                {/* <Select options={mapFilterOptions} /> */}
                <select name="selection" className="selection"> 
                {mapFilterOptions.map((el)=>(
                    <option value={el.value}>{el.label}</option>
                ))}
                </select>
            </div>
            <div className="input_container flex">
                <div>
                    <label>Property</label>
                    <select name="property">
                    <option value={""} disabled selected>Height</option>
                    </select>
                </div>
                <div>
                    <label>Condition</label>
                    <select name="condition">
                    <option value={""} disabled selected>Greater than</option>
                    </select>
                </div>
                <div>
                    <label>Value</label>
                    <select name="value">
                    <option value={""} disabled selected>15</option>
                    </select>
                </div>
            </div>
            <div className="input_container option_button">
                <button className="add">Add</button>
                <button className="remove">Remove</button>
            </div>

            <div className="input_container">
                <input name="features"></input>
                <p className="text-center mt-4">34 features selected</p>
            </div>
        <footer>
            <div className="input_container  option_button">
                <button className="clear">Clear</button>
                <button className="preview">Preview</button>
            </div>
        </footer>
        </form>
    </React.Fragment>
  )
}
