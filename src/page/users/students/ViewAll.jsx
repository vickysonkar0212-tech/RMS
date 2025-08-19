// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllMutation } from "../../../app/services/AuthApi";


const Students = () => {

  const [GetAll] = useGetAllMutation()

  const [students, setStudents] = useState([]);

  // Fetch data on component mount
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await GetAll();
        console.log("Fetched students:", res.data);
        setStudents(res.data.data);
      } catch (error) {
        console.error("Failed to fetch students", error?.res?.data?.data?.message);
      }
    };
  console.log("student",students)
    fetchStudents();
  }, []);

  return (
    <>
      <h1>All Students Page</h1>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Add, Edit & Remove</h4>
            </div>

            <div className="card-body">
              <div className="listjs-table" id="customerList">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <div>
                      <Link
                        to="/users/students/add"
                        className="btn btn-success add-btn"
                      >
                        <i className="ri-add-line align-bottom me-1" /> Add
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="d-flex justify-content-sm-end">
                      <div className="search-box ms-2">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="Search..."
                        />
                        <i className="ri-search-line search-icon" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive table-card mt-3 mb-1">
                  <table className="table align-middle table-nowrap" id="customerTable">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        {/* <th>Program</th> */}
                        <th>Course</th>
                        <th>Guardian & rel..</th>
                        <th>Address</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(students) && students.length > 0 ? (

                        students.map((student, index) => (
                          <tr key={student._id}>
                            <td>{index + 1}</td>
                            <td>{student.firstname} {student.lastname}</td>
                            <td>{student.email}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.gender}</td>
                            <td>{new Date(student.dateOfbirth).toLocaleDateString()}</td>
                            {/* <td>{student.program}</td> */}
                            <td>{student.course}</td>
                            <td>{student.guardianName?.name} {student.guardianName?.relationship}</td>
                            <td>{student.address?.street} {student.address?.city} {student.address?.state} {student.address?.zipCode}</td>
                            <td>
                              <div className="d-flex gap-2">
                                <Link
                                  to={`/users/students/edit/${student._id}`}
                                  className="btn btn-sm btn-success"
                                >
                                  Edit
                                </Link>
                                {/* <button className="btn btn-sm btn-danger">Remove</button> */}
                                <Link to={`/users/students/remove/${student._id}`} className="btn btn-danger btn-sm">Remove</Link>

                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="text-center">No students found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
