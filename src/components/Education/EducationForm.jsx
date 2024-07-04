


function EducationForm({ educations, handleSubmit, handleChange }) {

  return (
    <div className="card">
      <h2>Educations</h2>
      <form onSubmit={handleSubmit}>
        {educations.map((education, index) => (
          <div key={index}>
            <div>
              <label>
                Institution:{' '}
                <input type="text" name="institution" value={education.institution} onChange={handleChange}/>
              </label>
            </div>
            <div>
              <label>
                Degree:{' '}
                <input type="text" name="degree" value={education.degree} onChange={handleChange}/>
              </label>
            </div>
            <div>
              <label>
                Start Date:{' '}
                <input type="date" name="startDate" value={education.startDate} onChange={handleChange}/>
              </label>
            </div>
            <div>
              <label>
                End Date:{' '}
                <input type="date" name="endDate" value={education.endDate} onChange={handleChange}/>
              </label>
            </div>
            <button type="submit">Submit</button>
          </div>
        ))}   
      </form>
    </div>
  );
} 

export default EducationForm;
