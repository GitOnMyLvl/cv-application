function EducationForm({ educations, setEducations }) {
  
  const handleChanges = (index, event) => {
    const newEducations = [...educations];
    newEducations[index][event.target.name] = event.target.value;
    setEducations(newEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducations = [...educations, { institution: "", degree: "", startDate: "", endDate: "" }];
    setEducations(newEducations);
  };

  return (
    <div className="card">
      <h2>Educations</h2>
      <form onSubmit={handleSubmit}>
        {educations.map((education, index) => (
          <div key={index}>
            <div>
              <label>
                Institution:{' '}
                <input type="text" name="institution" value={education.institution} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                Degree:{' '}
                <input type="text" name="degree" value={education.degree} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                Start Date:{' '}
                <input type="date" name="startDate" value={education.startDate} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                End Date:{' '}
                <input type="date" name="endDate" value={education.endDate} onChange={(e) => handleChanges(index, e)}/>
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
