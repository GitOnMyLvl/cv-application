import Education from "./Education/Education";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import PracticalExperience from "./PracticalExperience/PracticalExperience";
function Cv ({ generalInformation, educations, experiences}){
  

  
  return(
    <div className="cv">
      <h1>CV</h1>
      <GeneralInfo data={generalInformation}/>
      <Education educations={educations}/>
      <PracticalExperience data={experiences}/>

    </div>
  )
}

export default Cv;
