import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import PracticalExperience from "./components/PracticalExperience"
import Cv from "./components/CV"

function App() {
  const [generalInformation, setGeneralInformation] = useState({firstName: "", lastName: "", email: "", phone: ""})
  const [educations, setEducations] = useState([{institution: "", degree: "", startDate: "", endDate: ""}])
  const [experiences, setExperiences] = useState([{company: "", position: "", responsibility: "", startDate: "", endDate: ""}])

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'general'){
      setGeneralInformation({...generalInformation, [name]: value})
    }
  }
  return (
    <>
      <GeneralInfo data={generalInformation} handleChange={handleChange}/>
      <Education />
      <PracticalExperience />
      <Cv generalInformation={generalInformation} educations={educations} experiences={experiences}/>
    </>
  )
}

export default App
