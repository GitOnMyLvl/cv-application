import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
 
function PracticalExperience( {addExperience} ){
    const [experience, setExperience] = useState({company: "", position: "", responsibility: "", startDate: "", endDate: ""});
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setExperience({...experience, [name]: value});
    };

    const handleAdd = (e) => {
      e.preventDefault();
      experience.startDate = format(experience.startDate, "dd/MM/yyyy");
      experience.endDate = format(experience.endDate, "dd/MM/yyyy");
      addExperience(experience);
      setExperience({company: "", position: "", responsibility: "", startDate: "", endDate: ""});
    };

     return (
      <div className="card">
        <h2>Practical Experience</h2>
        <form onSubmit={handleAdd}>
          <label htmlFor="company">
            Company Name:{' '}
            <input type="text" id="company" name="company" value={experience.company} onChange={handleChange}/>
          </label>
          <label htmlFor="position">
            Position:{' '}
            <input type="text" id="position" name="position" value={experience.position} onChange={handleChange} />
          </label>
          <label htmlFor="responsibility">
            Main Responsibility:{' '}
            <input type="text" id="responsibility" name="responsibility" value={experience.responsibility} onChange={handleChange}/>
          </label>
          <label htmlFor="startDate">
          Start Date:{' '}
          <DatePicker
            selected={experience.startDate}
            dateFormat="dd/MM/yyyy"
            name="startDate"
            value={experience.startDate}
            onChange={(date)=>setExperience({...experience, startDate: date})}
          />
        </label>
        <label htmlFor="endDate">
          End Date:{' '}
          <DatePicker
            selected={experience.endDate}
            dateFormat="dd/MM/yyyy"
            name="endDate"
            value={experience.endDate}
            onChange={(date)=>setExperience({...experience, endDate: date})}
          />
        </label>
        <button type="submit">Submit</button>   
        </form>      
      </div>
    ); 
}

export default PracticalExperience;
