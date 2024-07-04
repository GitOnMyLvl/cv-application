import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function Education({ addEducation }) {
  const [education, setEducation] = useState({institution: "", degree: "", startDate: "", endDate: ""});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({...education, [name]: value});
  };

  const handleAdd = (e) => {
    e.preventDefault();
    education.startDate = format(education.startDate, "dd/MM/yyyy");
    education.endDate = format(education.endDate, "dd/MM/yyyy");
    addEducation(education);
    setEducation({institution: "", degree: "", startDate: "", endDate: ""});
    console.log(education);
  }

  return (
    <div className="card">
      <h2>Education</h2>
      <form onSubmit={handleAdd}>
        <label htmlFor="institution">
          Educational Institution:{' '}
          <input type="text" id="institution" name="institution" value={education.institution} onChange={handleChange}/>
        </label>
        <label htmlFor="degree">
          Degree:{' '}
          <input type="text" id="degree" name="degree" value={education.degree} onChange={handleChange}/>
        </label>
        <label htmlFor="startDate">
          Start Date:{' '}
          <DatePicker
            selected={education.startDate}
            dateFormat="dd/MM/yyyy"
            name="startDate"
            value={education.startDate}
            onChange={(date)=>setEducation({...education, startDate: date})}
          />
        </label>
        <label htmlFor="endDate">
          End Date:{' '}
          <DatePicker
            selected={education.endDate}
            dateFormat="dd/MM/yyyy"
            name="endDate"
            value={education.endDate}
            onChange={(date)=>setEducation({...education, endDate: date})}
          />
        </label> 
        <button type="submit">Submit</button>   
      </form>
          
    </div>
  );
} 

export default Education;
