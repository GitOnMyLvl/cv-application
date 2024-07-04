function Education( { educations }){
  const listItems = educations.map((education) => (
    <li key={education.id}>
      <p>Institution: {education.institution}</p>
      <p>Degree: {education.degree}</p>
      <p>Start Date: {education.startDate}</p>
      <p>End Date: {education.endDate}</p>
    </li>  ));
  return (
    <div>
      <h3>Educations</h3>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Education;