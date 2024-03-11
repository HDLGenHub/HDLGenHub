import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './setting.css';

const Setting = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    axios.get('http://localhost:8070/User')
      .then(response => {
        const teacherList = response.data.filter(user => user.role === 'teacher');
        const studentList = response.data.filter(user => user.role === 'student');

        setTeachers(teacherList);
        setStudents(studentList);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Calculate the index of the first and last rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Get the current rows to display based on pagination
  const currentTeachers = teachers.slice(indexOfFirstRow, indexOfLastRow);
  const currentStudents = students.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="setting-container">
      <div className="teacher-column">
        <h2>Teachers</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Courses Created</th>
            </tr>
          </thead>
          <tbody>
            {currentTeachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.coursesCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination buttons for teachers */}
        <div className="pagination">
          {teachers.length > rowsPerPage && (
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
          )}
          {teachers.length > rowsPerPage && (
            <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= teachers.length}>
              Next
            </button>
          )}
        </div>
      </div>
      <div className="student-column">
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Courses Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.enrolledCourses.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination buttons for students */}
        <div className="pagination">
          {students.length > rowsPerPage && (
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
          )}
          {students.length > rowsPerPage && (
            <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= students.length}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
