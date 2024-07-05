import GeneralInfoForm from "./GeneralInfo/GeneralInfoForm"
import EducationForm from "./Education/EducationForm"
import PracticalExperienceForm from "./PracticalExperience/PracticalExperienceForm"
import '../styles/forms.css';

function Forms({ generalInformation, setGeneralInformation, educations, setEducations, experiences, setExperiences}) {
  return (
    <div className="forms">
      <GeneralInfoForm data={generalInformation} setGeneralInformation={setGeneralInformation}/>
      <EducationForm educations={educations} setEducations={setEducations}/>
      <PracticalExperienceForm experiences={experiences} setExperiences={setExperiences} />
    </div>
  )
}

export default Forms
