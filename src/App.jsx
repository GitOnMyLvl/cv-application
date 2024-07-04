import { useState } from "react"
import { v4 as uuid } from "uuid"
import GeneralInfoForm from "./components/GeneralInfo/GeneralInfoForm"
import EducationForm from "./components/Education/EducationForm"
import PracticalExperienceForm from "./components/PracticalExperience/PracticalExperienceForm"
import Cv from "./components/CV"

function App() {
  const [generalInformation, setGeneralInformation] = useState({firstName: "", lastName: "", email: "", phone: ""});
  const [educations, setEducations] = useState([{ institution: "", degree: "", startDate: "", endDate: "", id: uuid() }]);
  const [experiences, setExperiences] = useState([ { company: "", position: "", mainTask: "", startDate: "", endDate: "", id: uuid() }]);

  const handleEducationDelete = (index) => {
    const newEducations = educations.filter((education, i) => i !== index);
    setEducations(newEducations);
  }

  const handleExperienceDelete = (index) => {
    const newExperiences = experiences.filter((experience, i) => i !== index);
    setExperiences(newExperiences);
  }



  

  return (
    <>
      <GeneralInfoForm data={generalInformation} setGeneralInformation={setGeneralInformation}/>
      <EducationForm educations={educations} setEducations={setEducations}/>
      <PracticalExperienceForm experiences={experiences} setExperiences={setExperiences} />
      <Cv generalInformation={generalInformation} educations={educations} experiences={experiences} handleEducationDelete={handleEducationDelete} handleExperienceDelete={handleExperienceDelete}/>
    </>
  )
}

export default App
