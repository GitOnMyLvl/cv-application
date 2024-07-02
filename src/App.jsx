import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import PracticalExperience from "./components/PracticalExperience"
import Cv from "./components/CV"

function App() {
  const [generalInformation, setGeneralInformation] = useState({firstName: "", lastName: "", email: "", phone: ""});
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    if (section === 'general'){
      setGeneralInformation({...generalInformation, [name]: value})
    }else if (section === 'education' && index !== null){
      const newEducations = educations.slice();
      newEducations[index][name] = value;
      setEducations(newEducations);
    }
  };

  const addEducation = (education) => {
    setEducations([...educations, education])
  }


  return (
    <>
      <GeneralInfo data={generalInformation} handleChange={handleChange}/>
      <Education educations={educations} addEducation={addEducation}/>
      <PracticalExperience />
      <Cv generalInformation={generalInformation} educations={educations} experiences={experiences}/>
    </>
  )
}

export default App
