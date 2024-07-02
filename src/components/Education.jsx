import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Education() {
  return (
    <div className="card">
      <h2>Education</h2>
      <div className="input-container">
        <label htmlFor="institution">
          Educational Institution:{' '}
          <input type="text" id="institution" name="institution" />
        </label>
        <label htmlFor="degree">
          Degree:{' '}
          <input type="text" id="degree" name="degree" />
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

export default Education;
