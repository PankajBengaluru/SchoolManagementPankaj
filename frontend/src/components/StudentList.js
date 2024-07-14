import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const result = await axios.get('http://localhost:5000/api/students');
      setStudents(result.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.assignedClass}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
