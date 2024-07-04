function GeneralInfoForm({data, handleChange}){
  
  return (
    <div className="card">
      <h2>General Information</h2>
      <form>
        <div>
          <label>
            First Name:{' '}
            <input type="text" name="firstName" value={data.firstName} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Last Name:{' '}
            <input type="text" name="lastName" value={data.lastName} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Email:{' '}
            <input type="email" name="email" value={data.email} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Phone:{' '}
            <input type="tel" name="phone" value={data.phone} onChange={handleChange}/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfoForm;