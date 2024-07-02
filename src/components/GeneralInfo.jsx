import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

function GeneralInfo({data, handleChange}) {
  const onChange = (e) => {
    handleChange(e, 'general')
  }
  return (
    <div className="card">
      <h2>General Information</h2>
      <div className="input-container">
        <label htmlFor="firstName">
          First Name:{' '} 
          <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={onChange}/>
        </label>
        <label htmlFor="lastName">
          Last Name:{' '}  
          <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={onChange}/>
        </label>
        <label htmlFor="email">
          Email:{' '}  
          <input type="email" id="email" name="email" value={data.email} onChange={onChange}/>
        </label>
        <label htmlFor="phone">
          Phone:{' '}
          <PhoneInput
            type="tel"
            id="phone"
            name="phone"
            defaultCountry="at"
            value={data.phone}
            onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } }, 'general')}
          />
        </label> 
      </div>
    </div>
  );
}

export default GeneralInfo;
