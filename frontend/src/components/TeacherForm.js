import React, { useState } from 'react';

const TeacherForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [salary, setSalary] = useState('');
  const [assignedClass, setAssignedClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, gender, dob, contact, salary, assignedClass });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
      </div>
      <div>
        <label className="block">Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="form-input" />
      </div>
      <div>
        <label className="block">Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="form-input" />
      </div>
      <div>
        <label className="block">Contact:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="form-input" />
      </div>
      <div>
        <label className="block">Salary:</label>
        <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-input" />
      </div>
      <div>
        <label className="block">Assigned Class:</label>
        <input type="text" value={assignedClass} onChange={(e) => setAssignedClass(e.target.value)} className="form-input" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default TeacherForm;
