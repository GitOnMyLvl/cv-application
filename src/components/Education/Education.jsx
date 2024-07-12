function Education( { educations, formatDate }){
  const listItems = educations.map((education) => (
    <li key={education.id}>
      <p>Institution: {education.institution}</p>
      <p>Degree: {education.degree}</p>
      <p>Start Date: {formatDate(education.startDate)}</p>
      <p>End Date: {formatDate(education.endDate)}</p>
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