function PracticalExperienceForm( {experiences, setExperiences} ){

  const handleChanges = (index, event) => {
    const newExperiences = [...experiences];
    newExperiences[index][event.target.name] = event.target.value;
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperiences = [...experiences, { company: "", position: "", mainTask: "", startDate: "", endDate: "" }];
    setExperiences(newExperiences);
  };
     
  return (
    <div className="card">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index}>
            <div>
              <label>
                Company:{' '}
                <input type="text" name="company" value={experience.company} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                Position:{' '}
                <input type="text" name="position" value={experience.position} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                Main Task::{' '}
                <input type="text" name="mainTask" value={experience.mainTask} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                Start Date:{' '}
                <input type="date" name="startDate" value={experience.startDate} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <div>
              <label>
                End Date:{' '}
                <input type="date" name="endDate" value={experience.endDate} onChange={(e) => handleChanges(index, e)}/>
              </label>
            </div>
            <button type="submit">Submit</button>
          </div>
        ))}   
      </form>
    </div>
  );
}

export default PracticalExperienceForm;
