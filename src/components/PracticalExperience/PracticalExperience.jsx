function PracticalExperience( { experiences, formatDate } ) {
  const listItems = experiences.map((experience) => (
    <li key={experience.id}>
      <p>Company: {experience.company}</p>
      <p>Position: {experience.position}</p>
      <p>Main Responsibility: {experience.mainTask}</p>
      <p>Start Date: {formatDate(experience.startDate)}</p>
      <p>End Date: {formatDate(experience.endDate)}</p>
    </li>  ));
  return (
    <div>
      <h3>Practical Experiences</h3>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default PracticalExperience;
