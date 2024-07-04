function PracticalExperience( { experiences } ) {
  const listItems = experiences.map((experience) => (
    <li key={experience.id}>
      <p>Company: {experience.company}</p>
      <p>Position: {experience.position}</p>
      <p>Main Responsibility: {experience.mainTask}</p>
      <p>Start Date: {experience.startDate}</p>
      <p>End Date: {experience.endDate}</p>
    </li>  ));
  return (
    <div>
      <h3>Experiences</h3>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default PracticalExperience;
