import React from 'react';

const Edu = () => {
  // Define the percentage values for education
  const educationData = [
    { name: "B-Tech Information Technology", year: "2022-2025", institute: "Karpagam College of Engineering, Coimbatore", grade: 7.55 },
    { name: "Diploma in Computer Technology", year: "2022", institute: "Periyar Centenary Polytechnic College, Thanjavur", grade: 9 }, // Assuming 90 is out of 10
    { name: "SSLC", year: "2019", institute: "Best Matric Higher Secondary School", grade: 5.9 } // Assuming 59% is out of 10
  ];

  // Function to convert grade to a value out of 10
  const convertToOutOfTen = (grade) => {
    return (grade / 10) * 100; // Assuming grades are out of 10
  };

  return (
    <>
    <section id="edu"></section>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontFamily: 'cursive', fontSize: '50px' }}>
          <h1>Education</h1>
        </div>
        {educationData.map((edu, index) => (
          <div key={index} style={{ marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
            <p><b>{edu.name} {edu.year}</b><br />
              {edu.institute}<br />
              <span style={{ fontWeight: 'bold' }}>Grade/CGPA: {edu.grade}</span>
            </p>
            <div style={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${convertToOutOfTen(edu.grade)}%`, backgroundColor: '#4CAF50', height: '20px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Edu;
