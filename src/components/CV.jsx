function Cv ({ generalInformation, educations, experiences }){
  
  const fullName = generalInformation.firstName + " " + generalInformation.lastName;
  
  return(
    <div className="cv">
      <h1>CV</h1>
      <div className="generalInformation">
        <h2>General Information</h2>
        <p>Name: {fullName}</p>
        <p>Email: {generalInformation.email}</p>
        <p>Phone: {generalInformation.phone}</p>
      </div>
      <div className="educations">
        <h2>Educations</h2>
        {educations.map((education, index) => (
          <div key={index}>
            <p>Institution: {education.institution}</p>
            <p>Degree: {education.degree}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
          </div>
        ))}
      </div>
      <div className="experiences">
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Main Responsibility: {experience.responsibility}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Cv;
