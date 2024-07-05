import { v4 as uuid } from "uuid";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

function EducationForm({ educations, setEducations }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [originalEducations, setOriginalEducations] = useState(null);

  const handleChanges = (index, event) => {
    const newEducations = [...educations];
    newEducations[index][event.target.name] = event.target.value;
    setEducations(newEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducations = [...educations, { institution: "", degree: "", startDate: "", endDate: "", id: uuid() }];
    setEducations(newEducations);
    setActiveIndex(newEducations.length - 1);
    setOriginalEducations(null);
  };

  const handleDelete = (index) => {
    const newEducations = educations.filter((education, i) => i !== index);
    setEducations(newEducations);
    setActiveIndex(null);
    setOriginalEducations(null);
  };

  const handleActivate = (index) => {
    setActiveIndex(index);
    setOriginalEducations({...educations[index]});
  };

  const handleCancel = () => {
    if (originalEducations !== null){
      const newEducations = [...educations];
      newEducations[activeIndex] = originalEducations;
      setEducations(newEducations);
    }
    setActiveIndex(null);
    setOriginalEducations(null);
  };

  return (
    <div className="card">
      <h2>Educations</h2>
      <form onSubmit={handleSubmit} className="input-form">
        {educations.map((education, index) => (
          <div key={education.id} className="input-form">
            {activeIndex === index ? (
              <>
                <div className="form-group">
                  <label>
                    Institution:{" "}
                    <input type="text" name="institution" value={education.institution} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Degree:{" "}
                    <input type="text" name="degree" value={education.degree} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Start Date:{" "}
                    <input type="date" name="startDate" value={education.startDate} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    End Date:{" "}
                    <input type="date" name="endDate" value={education.endDate} onChange={(e) => handleChanges(index, e)} />
                  </label>
                </div>
                <div className="button-container">
                  <button type="button" onClick={handleCancel} className="cancel-button">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <button type="button" onClick={() => setActiveIndex(null)} className="save-button">
                    <FontAwesomeIcon icon={faSave} />
                  </button>
                  <button type="button "onClick={() => handleDelete(index)} className="delete-button">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div> 
              </>
            ) : (
              <button onClick={() => handleActivate(index)}>{education.institution || 'New Education'}</button>
            )}

          </div>
        ))}
        <button type="submit">New</button>
      </form>
    </div>
  );
}

export default EducationForm;
