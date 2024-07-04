function Education( { educations }){
  const listItems = educations.map((education) => {
    <li key={education.id}>
      <h4>{education.institution}</h4>
      <p>{education.degree}</p>
      <p>{education.startDate}</p>
      <p>{education.endDate}</p>
    </li>  });
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