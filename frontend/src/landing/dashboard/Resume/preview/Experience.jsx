export default function Experience({ resumes }) {
  const experienceList = Array.isArray(resumes?.experience) ? resumes.experience : [];
  const themeColor = resumes?.themeColor || "#0d6efd";

  //  Helper to format dates safely
  const formatDate = (date) => {
    if (!date) return "N/A"; // You can change this to "" if preferred
    return new Date(date).toISOString().slice(0, 10);
  };

  return (
    <div className="ps-3 pe-3 pt-3 m-0">
      <h5 className="text-start" style={{ color: themeColor }}>
        Experience
      </h5>
      <div style={{ border: `0.5px solid ${themeColor}` }} className="mb-2"></div>

      {experienceList.map((experience, idx) => (
        <div key={idx} className="mb-3">
          <h6 className="text-start fw-bold mt-1">{experience.jobTitle}</h6>

          <div className="d-flex justify-content-between flex-wrap">
            <p className="text-start m-0">
              {experience.companyName}, {experience.location}
            </p>

            <p className="text-end m-0">
              {formatDate(experience.startDate)} - {experience.currentlyWorking ? "Present" : formatDate(experience.endDate)}
            </p>
          </div>

          {experience.description && (
            <div className="text-start mt-1">
              <div dangerouslySetInnerHTML={{ __html: experience.description }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
