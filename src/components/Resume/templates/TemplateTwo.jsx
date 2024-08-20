import React from "react";

const TemplateTwo = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-200 shadow-md">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.name || "Your Name"}</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-red-50 p-4">
          <h2 className="text-xl font-semibold mb-2">Persönliche Daten</h2>
          <p>
            <strong>E-Mail-Adresse:</strong> {data.contactInfo.email || "Email"}
          </p>
          <p>
            <strong>Telefonnummer:</strong> {data.contactInfo.phone || "Phone"}
          </p>
          <p>
            <strong>Adresse:</strong> {data.contactInfo.address || "Address"}
          </p>
          <p>
            <strong>Geburtsdatum:</strong> {data.birthDate || "Birth Date"}
          </p>
        </div>
        <div className="col-span-2 p-4">
          <h2 className="text-xl font-semibold mb-2">Profil</h2>
          <p>{data.summary || "About You"}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-3 bg-red-100 p-4">
          <h2 className="text-xl font-semibold mb-2">Berufserfahrung</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">
                {exp.jobTitle || "Your Title"} - {exp.company || "Company"}
              </p>
              <p className="text-sm text-gray-600">
                {exp.startDate || "Start Date"} - {exp.endDate || "End Date"}
              </p>
              <p>{exp.description || "Description about your job"}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-3 bg-red-100 p-4">
          <h2 className="text-xl font-semibold mb-2">Bildungsweg</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
