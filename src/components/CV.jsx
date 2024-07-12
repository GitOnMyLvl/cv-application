import Education from "./Education/Education";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import PracticalExperience from "./PracticalExperience/PracticalExperience";
import '../styles/cv.css';
function Cv ({ generalInformation, educations, experiences}){
  
  const formatDate = (value) => {
    return value.split("-").reverse().join("-");
  }
  
  return(
    <div className="cv">
      <h1>CV</h1>
      <GeneralInfo data={generalInformation}/>
      <Education educations={educations} formatDate={formatDate}/>
      <PracticalExperience experiences={experiences} formatDate={formatDate}/>
    </div>
  )
}

export default Cv;
