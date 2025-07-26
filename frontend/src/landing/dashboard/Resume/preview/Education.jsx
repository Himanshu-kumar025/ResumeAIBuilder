export default function Education({ resumes }) {
  const educationList = resumes?.education || [];
  const themeColor = resumes?.themeColor || "#0d6efd";

  //  Helper to safely format date strings to YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return "N/A";
    try {
      return new Date(date).toISOString().slice(0, 10);
    } catch {
      return "N/A";
    }
  };

  return (
    <div className="ps-3 pe-3 pt-3">
      {/* Section title with dynamic theme color */}
      <h5 className="text-start" style={{ color: themeColor }}>
        Education
      </h5>

      {/* Divider */}
      <div style={{ border: `0.5px solid ${themeColor}` }} className="mb-2"></div>

      {/* Loop through all education entries */}
      {educationList.map((education) => (
        <div key={education.id} className="mb-3">
          {/* Institution */}
          <h6 className="text-start fw-bold">{education.institution}</h6>

          {/* Field & Degree + Dates */}
          <div className="d-flex justify-content-between flex-wrap">
            <p className="text-start m-0">
              {education.field} — {education.degree}
            </p>
            <p className="text-end m-0">
              {formatDate(education.startDate)} - {education.currentlyStudying ? "Present" : formatDate(education.endDate)}
            </p>
          </div>

          {/* Description */}
          {education.description && (
            <div className="text-start mt-1">
              <div dangerouslySetInnerHTML={{ __html: education.description }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
