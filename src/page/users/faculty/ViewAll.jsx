import { useEffect, useState } from "react";
// import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAllfacultyMutation } from "../../../app/services/AuthApi";
import { useDeletefacultyMutation } from "../../../app/services/AuthApi";


const Faculty = () => {

const { id } = useParams(); 

  
const [GetAllfaculty] = useGetAllfacultyMutation()
const [Deletefaculty] = useDeletefacultyMutation()

  const navigate = useNavigate()

  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await GetAllfaculty();
        // console.log("Fetched students:", response.data.data);
        setFaculty(response.data.data);
        fetchFaculty()
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

  
    fetchFaculty();
  }, []);


  const deleteSubmit = async (id) => {
      
    try {
      await  Deletefaculty(id);
      alert("Student Deleted");
      navigate("/faculty");
    } catch (error) {
      console.error(error);

     
    }
    };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Add, Edit &amp; Remove</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <div className="listjs-table" id="customerList">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <div>
                      <Link to={"/faculty/add"}
                        href=""
                        type="button"
                        className="btn btn-success add-btn" id="create-btn">
                        <i className="ri-add-line align-bottom me-1" />   Add
                      </Link>
                      <button
                        className="btn btn-soft-danger"
                        onclick="deleteMultiple()"
                      >
                        <i className="ri-delete-bin-2-line" />
                      </button>
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
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: 50 }}>
                          #
                        </th>
                        <th >
                          FullName
                        </th>
                        <th >
                          Email
                        </th>
                       
                        <th>
                          Phone Number
                        </th>
                        <th >
                          Gender
                        </th>
                        <th >
                          D.o.B
                        </th>
                        {/* <th >
                          Company

                        </th> */}
                        <th >
                          Course

                        </th>
                        <th >
                          Program

                        </th>
                         <th >
                          Address
                        </th>
                        <th>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {faculty.map((faculty, index) => (
                        <tr key={faculty._id}>
                          <th>
                            {index + 1}
                          </th>
                          <td className="id" style={{ display: "none" }}>
                            <a href="javascript:void(0);" className="fw-medium link-primary">
                              {index + 1}
                            </a>
                          </td>
                          <td className="customer_name">{faculty.firstname} {faculty.lastname}</td>
                          <td>{faculty.email}</td>
                            <td>{faculty.phoneNumber}</td>
                            <td>{faculty.gender}</td>
                          {/* <td className="date">{faculty.dob}</td> */}
                          {/* <td className="date">{new Date(faculty.dateofbirth).toLocaleDateString()}</td> */}
                          <td className="date">{faculty.dateofbirth}</td>
                           {/* <td className="date">{faculty.company}</td> */}
                         
                         
                          <td className="date">{faculty.course}</td>
                          <td className="date">{faculty.program}</td>
                           <td >
                            {faculty.address.street} {faculty.address.city} {faculty.address.state}
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <div className="edit">
                                <button
                                  className="btn btn-sm btn-success edit-item-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#showModal">
                                  <Link to={`/faculty/edit/${faculty._id}`}>Edit </Link>
                                </button>
                              </div>
                              <div className="remove">
                                <button
                                  className="btn btn-sm btn-danger remove-item-btn"
                                  data-bs-toggle="modal"
                                 onClick={() => deleteSubmit(faculty._id)}
                                  //  onClick={() => deleteSubmit(faculty._id)}
                                  data-bs-target="#deleteRecordModal">
                                Remove
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>


                   
                  </table>
                
                </div>
               
              </div>
            </div>
            {/* end card */}
          </div>
          {/* end col */}
        </div>
        {/* end col */}
      </div>



    </>
  )

}


export default Faculty;