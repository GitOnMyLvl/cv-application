import GeneralInfo from "./GeneralInfo";
function Cv ({ generalInformation, educations, experiences, handleEducationDelete, handleExperienceDelete,}){
  

  
  return(
    <div className="cv">
      <h1>CV</h1>
      <GeneralInfo data={generalInformation}/>
      <div className="educations">
        <h2>Educations</h2>
        <div>
        {educations.map((education, index) => (
          <div key={index}>
            <p>Institution: {education.institution}</p>
            <p>Degree: {education.degree}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
            <button onClick={() => handleEducationDelete(index)}>Delete</button>
            
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
            <button onClick={() => handleExperienceDelete(index)}>Delete</button>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Cv;
