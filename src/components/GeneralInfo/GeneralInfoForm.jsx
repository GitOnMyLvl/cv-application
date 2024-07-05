import { useState } from "react";

function GeneralInfoForm({data, setGeneralInformation}){

  const [ editable, setEditable ] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setGeneralInformation(newData);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setEditable(!editable);
  }
  
  return (
    <div className="card">
      <h2>General Information</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:{" "}
            <input type="text" name="firstName" value={data.firstName} onChange={handleChange} disabled={!editable}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Last Name:{" "}
            <input type="text" name="lastName" value={data.lastName} onChange={handleChange} disabled={!editable}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:{" "}
            <input type="email" name="email" value={data.email} onChange={handleChange} disabled={!editable}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone:{" "}
            <input type="tel" name="phone" value={data.phone} onChange={handleChange} disabled={!editable}/>
          </label>
        </div>
        <div className="button-container">
          <button type="submit">{editable ? 'Lock' : 'Unlock'}</button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfoForm;