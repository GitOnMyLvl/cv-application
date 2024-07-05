import Education from "./Education/Education";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import PracticalExperience from "./PracticalExperience/PracticalExperience";
import '../styles/cv.css';
function Cv ({ generalInformation, educations, experiences}){
  

  
  return(
    <div className="cv">
      <h1>CV</h1>
      <GeneralInfo data={generalInformation}/>
      <Education educations={educations}/>
      <PracticalExperience experiences={experiences}/>
    </div>
  )
}

export default Cv;
