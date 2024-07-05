import { v4 as uuid } from "uuid";
import { useState } from "react";

function PracticalExperienceForm({ experiences, setExperiences }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChanges = (index, event) => {
    const newExperiences = [...experiences];
    newExperiences[index][event.target.name] = event.target.value;
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperiences = [...experiences, { company: "", position: "", mainTask: "", startDate: "", endDate: "", id: uuid() }];
    setExperiences(newExperiences);
    setActiveIndex(newExperiences.length - 1);
  };

  const handleDelete = (index) => {
    const newExperiences = experiences.filter((experience, i) => i !== index);
    setExperiences(newExperiences);
    setActiveIndex(null);
  };

  return (
    <div className="card">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit} className="input-form">
        {experiences.map((experience, index) => (
          <div key={experience.ide}>
            {activeIndex === index ? (
              <div>
                <div className="form-group">
                  <label>
                    Company:{" "}
                    <input type="text" name="company" value={experience.company} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Position:{" "}
                    <input type="text" name="position" value={experience.position} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Main Task::{" "}
                    <input type="text" name="mainTask" value={experience.mainTask} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Start Date:{" "}
                    <input type="date" name="startDate" value={experience.startDate} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    End Date:{" "}
                    <input type="date" name="endDate" value={experience.endDate} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <button type="button" onClick={() => setActiveIndex(null)}>Cancel</button>
                <button type="delete" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ) : (
              <button type="button" onClick={() => setActiveIndex(index)}>
                {experience.company || "New Experience"}
              </button>
            )}

          </div>
        ))}
        <button type="submit">New</button>
      </form>
    </div>
  );
}

export default PracticalExperienceForm;
