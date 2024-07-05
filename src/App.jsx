import { useState } from "react"
import { v4 as uuid } from "uuid"
import Forms from "./components/Forms"
import Cv from "./components/CV"

function App() {
  const [generalInformation, setGeneralInformation] = useState({firstName: "", lastName: "", email: "", phone: ""});
  const [educations, setEducations] = useState([{ institution: "", degree: "", startDate: "", endDate: "", id: uuid() }]);
  const [experiences, setExperiences] = useState([ { company: "", position: "", mainTask: "", startDate: "", endDate: "", id: uuid() }]);

  return (
    <>
      <Forms generalInformation={generalInformation} setGeneralInformation={setGeneralInformation} educations={educations} setEducations={setEducations} experiences={experiences} setExperiences={setExperiences}/>
      <Cv generalInformation={generalInformation} educations={educations} experiences={experiences}/>
    </>
  )
}

export default App
