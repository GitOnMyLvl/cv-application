function PracticalExperience( {data} ) {
  return (
    <div>
      <h3>Practical Experience</h3>
      <ul>
        <li>Company: {data.company}</li>
        <li>Position: {data.position}</li>
        <li>Main Responsibility: {data.responsibility}</li>
        <li>Start Date: {data.startDate}</li>
        <li>End Date: {data.endDate}</li>
      </ul>
    </div>
  );
}

export default PracticalExperience;
