function GeneralInfo({ data }) {
  const fullName =data.firstName + " " + data.lastName;
  return(
    <div className="generalInformation">
        <h3>General Information</h3>
        <ul>
          <li>Full Name: {fullName}</li>
          <li>Email: {data.email}</li>
          <li>Phone: {data.phone}</li>
        </ul>
      </div>
  )
}

export default GeneralInfo;
