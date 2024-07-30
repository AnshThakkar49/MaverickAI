// src/components/PatientInformation.js

import React, { useState } from 'react';
import './styles3.css'; // If you have separate CSS file

const PatientInformation = () => {
  const [form, setForm] = useState({
    name: '',
    sex: '',
    age: '',
    symptoms: []
  });

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => {
        const updatedSymptoms = checked
          ? [...prev.symptoms, value]
          : prev.symptoms.filter(symptom => symptom !== value);
        setSelectedSymptoms(updatedSymptoms); // Update selected symptoms display
        return { ...prev, symptoms: updatedSymptoms };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="form-section">
      <h2>Patient Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={form.sex}
          onChange={handleChange}
          required
        >
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <label>Symptoms:</label>
        <div className="checkbox-group" id="symptoms">
          {[
            'fatigue', 'weight_loss', 'itching', 'chills', 'high_fever', 'vomiting',
            'skin_rash', 'continuous_sneezing', 'cough', 'headache', 'joint_pain',
            'lethargy', 'sweating', 'nausea', 'red_spots_over_body', 'back_pain',
            'malaise', 'redness_of_eye', 'sinus_pressure', 'runny_nose', 'muscle_pain',
            'congestion', 'chest_pain', 'loss_of_smell', 'irregular_sugar_level',
            'blurred_vision', 'yellowish_skin', 'restlessness'
          ].map(symptom => (
            <label key={symptom}>
              <input
                type="checkbox"
                name="symptoms"
                value={symptom}
                checked={form.symptoms.includes(symptom)}
                onChange={handleChange}
              /> {symptom.replace(/_/g, ' ')}
            </label>
          ))}
        </div>

        <div className="selected-symptoms" id="selected-symptoms">
          <strong>Selected Symptoms:</strong>
          <ul id="symptoms-list">
            {selectedSymptoms.map(symptom => (
              <li key={symptom}>{symptom.replace(/_/g, ' ')}</li>
            ))}
          </ul>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientInformation;
