import 'react-international-phone/style.css';

function GeneralInfo({ data }) {
  const fullName =data.firstName + " " + data.lastName;
  return(
    <div className="generalInformation">
        <h2>General Information</h2>
        <p>Name: {fullName}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
  )
}

export default GeneralInfo;
