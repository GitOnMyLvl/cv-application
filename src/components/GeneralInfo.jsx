import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

function GeneralInfo() {
  return (
    <div className="card">
      <h2>General Information</h2>
      <div className="input-container">
        <label htmlFor="firstName">
          First Name:{' '} 
          <input type="text" id="firstName" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name:{' '}  
          <input type="text" id="lastName" name="lastName" />
        </label>
        <label htmlFor="email">
          Email:{' '}  
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="phone">
          Phone:{' '}
          <PhoneInput
            defaultCountry="at"
          />
        </label> 
      </div>
      <button>Submit</button>
    </div>
  );
}

export default GeneralInfo;
