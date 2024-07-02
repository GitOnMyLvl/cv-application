import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
 
function PracticalExperience( {addExperience} ){
    const
     return (
      <div className="card">
        <h2>Practical Experience</h2>
        <div className="input-container">
          <label htmlFor="company">
            Company Name:{' '}
            <input type="text" id="company" name="company" />
          </label>
          <label htmlFor="position">
            Position:{' '}
            <input type="text" id="position" name="position" />
          </label>
          <label htmlFor="responsibility">
            Main Responsibility:{' '}
            <input type="text" id="responsibility" name="responsibility" />
          </label>
          <label htmlFor="startDate">
            Start Date:{' '}
            <DatePicker
              selected={new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </label>
          <label htmlFor="endDate">
            End Date:{' '}
            <DatePicker
              selected={new Date()}
              dateFormat="dd/MM/yyyy"
            />
          </label>  
        </div>
        <button>Add</button>      
      </div>
    ); 
}

export default PracticalExperience;
