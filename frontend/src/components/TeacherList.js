import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const result = await axios.get('http://localhost:5000/api/teachers');
      setTeachers(result.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Teachers List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {teacher.name} - {teacher.assignedClass}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
