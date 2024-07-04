import { useState } from "react"
import { v4 as uuid } from "uuid"
import GeneralInfoForm from "./components/GeneralInfo/GeneralInfoForm"
import EducationForm from "./components/Education/EducationForm"
import PracticalExperienceForm from "./components/PracticalExperience/PracticalExperienceForm"
import Cv from "./components/CV"

function App() {
  const [generalInformation, setGeneralInformation] = useState({firstName: "", lastName: "", email: "", phone: ""});
  const [educations, setEducations] = useState([{ institution: "", degree: "", startDate: "", endDate: "", id: uuid() }]);
  const [experiences, setExperiences] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
      setGeneralInformation({...generalInformation, [name]: value})
  };

  const addEducation = (education) => {
    setEducations([...educations, education])
  }

  const addExperience = (experience) => {
    setExperiences([...experiences, experience])
  }

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
      <GeneralInfoForm data={generalInformation} handleChange={handleChange}/>
      <EducationForm educations={educations} addEducation={addEducation}/>
      <PracticalExperienceForm addExperience={addExperience} />
      <Cv generalInformation={generalInformation} educations={educations} experiences={experiences} handleEducationDelete={handleEducationDelete} handleExperienceDelete={handleExperienceDelete}/>
    </>
  )
}

export default App
