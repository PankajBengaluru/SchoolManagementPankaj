import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ClassForm = () => {
  const [className, setClassName] = useState('');
  const [year, setYear] = useState('');
  const [studentFees, setStudentFees] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/classes', {
        className,
        year,
        studentFees,
      });
      history.push('/classes');
    } catch (err) {
      console.error('Error adding class:', err);
    }
  };

  return (
    <div>
      <h2>Add New Class</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="Student Fees"
          value={studentFees}
          onChange={(e) => setStudentFees(e.target.value)}
        />
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default ClassForm;
