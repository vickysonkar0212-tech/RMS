import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateMutation , useGetMutation} from "../../../app/services/AuthApi";
// import axios from "axios";
import toast from "react-hot-toast";

const StudentEdit = () => {

  const [Update] = useUpdateMutation()
  const [Get] = useGetMutation()

  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();


  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfbirth: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    },
    program: "",
    course: "",
    guardianName: {
      name: "",
      relationship: "",
      contactNumber: ""
    }
  });

 

  useEffect(() => {
    const fetchStudent = async () => {
      try {
          const response = await Get({id  })
        // const res = await axios.get(`http://127.0.0.1:5200/student/get/${id}`);
        setStudent(response.data.data); 
        console.log("gg" , response.data.data)
        

      } catch (err) {
        toast.error("Failed to fetch student");
        console.error("err" , err.message );
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (section, field, value) => {
    setStudent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  // 🔁 Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Update({id , userdata:student });
      console.log("update" ,  response.data.data)
  console.log("Sending update:", { id,student });

      toast.success("Student updated successfully");
      navigate("/users/students");
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  return (
    <div className="col-6 mx-auto">
      <h2 className="mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" name="firstname" placeholder="First Name" value={student.firstname} onChange={handleChange} />
        <input type="text" className="form-control mb-2" name="lastname" placeholder="Last Name" value={student.lastname} onChange={handleChange} />
        <input type="email" className="form-control mb-2" name="email" placeholder="Email" value={student.email} onChange={handleChange} />
        <input type="text" className="form-control mb-2" name="phoneNumber" placeholder="Phone" value={student.phoneNumber} onChange={handleChange} />
        <select className="form-select mb-2" name="gender" value={student.gender} onChange={handleChange}>
          <option>Choose Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <input type="date" className="form-control mb-2" name="dateOfbirth" value={student.dateOfbirth?.split("T")[0]} onChange={handleChange} />

        {/* Address */}
        <input type="text" className="form-control mb-2" placeholder="Street" value={student.address.street} onChange={(e) => handleNestedChange("address", "street", e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="City" value={student.address.city} onChange={(e) => handleNestedChange("address", "city", e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="State" value={student.address.state} onChange={(e) => handleNestedChange("address", "state", e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Zip Code" value={student.address.zipCode} onChange={(e) => handleNestedChange("address", "zipCode", e.target.value)} />

        <input type="text" className="form-control mb-2" name="program" placeholder="Program" value={student.program} onChange={handleChange} />
        <input type="text" className="form-control mb-2" name="course" placeholder="Course" value={student.course} onChange={handleChange} />

        {/* Guardian */}
        <input type="text" className="form-control mb-2" placeholder="Guardian Name" value={student.guardianName.name} onChange={(e) => handleNestedChange("guardianName", "name", e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Relationship" value={student.guardianName.relationship} onChange={(e) => handleNestedChange("guardianName", "relationship", e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Guardian Contact" value={student.guardianName.contactNumber} onChange={(e) => handleNestedChange("guardianName", "contactNumber", e.target.value)} />

        <button type="submit"  className="btn btn-primary w-100 mt-3">Update</button>
      </form>
    </div>
  );
};

export default StudentEdit;
