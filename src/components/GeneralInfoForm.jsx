import { PhoneInput } from "react-international-phone";

function GeneralInfoForm({data, handleChange}){
  
  return (
    <div className="card">
      <h2>General Information</h2>
      <form>
        <label htmlFor="firstName">
          First Name:{' '} 
          <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange}/>
        </label>
        <label htmlFor="lastName">
          Last Name:{' '}  
          <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange}/>
        </label>
        <label htmlFor="email">
          Email:{' '}  
          <input type="email" id="email" name="email" value={data.email} onChange={handleChange}/>
        </label>
        <label htmlFor="phone">
          Phone:{' '}
          <PhoneInput
            type="tel"
            id="phone"
            name="phone"
            defaultCountry="at"
            value={data.phone}
            onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } })}
          />
        </label> 
      </form>
    </div>
  );
}

export default GeneralInfoForm;