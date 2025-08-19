import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useGetfacultyMutation, useUpdatefacultyMutation } from "../../../app/services/AuthApi";

const FacultyEdit = () => {

  const { id } = useParams();
  const [Getfaculty] = useGetfacultyMutation();
  const [Updatefaculty] = useUpdatefacultyMutation();
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState({
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
    },
    program: "",
    course: "",
    company: ""
  });

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await Getfaculty({ id });
        // const fetched = res.data || {};
        setFaculty(res.data.data)
        // console.log("Fetched:", res.data);
      } catch (err) {
        toast.error("Failed to fetch faculty");
        console.error(err);
      }
    };
    fetchFaculty();
  }, [id]);

  // const handlechange = (e, section = "", field = "") => {
  //   const { name, value } = e.target;
  //   if (section && field) {
  //     setFaculty((prev) => ({
  //       ...prev,
  //       [section]: {
  //         ...prev[section],
  //         [field]: value
  //       }
  //     }));
  //   } else {
  //     setFaculty((prev) => ({
  //       ...prev,
  //       [name]: value
  //     }));
  //   }
  // };


  const handlechange = (e, section = "", field = "") => {
  const { name, value } = e.target;

  if (section && field) {
    setFaculty((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  } else {
    setFaculty((prev) => ({
      ...prev,
      [name]: value
    }));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res =   await Updatefaculty({ id, userdata:faculty });

    
      toast.success("Faculty updated successfully");
      navigate("/faculty");
    } catch (err) {
      toast.error("Update failed");
      // console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* First Name */}
          <div className="col-6 mb-3">
            <label htmlFor="firstNameinput" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter your firstname"
              value={faculty.firstname}
              onChange={handlechange}
              id="firstNameinput"
            />
          </div>

          {/* Last Name */}
          <div className="col-6 mb-3">
            <label htmlFor="lastNameinput" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter your lastname"
              value={faculty.lastname}
              onChange={handlechange}
              id="lastNameinput"
            />
          </div>

          {/* Gender */}
          <div className="col-6 mb-3">
            <label htmlFor="genderInput" className="form-label">Gender</label>
            <select
              name="gender"
              id="genderInput"
              className="form-select"
              value={faculty.gender}
              onChange={handlechange}
            >
              <option value="">Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="col-6 mb-3">
            <label htmlFor="dobInput" className="form-label">D.o.B</label>
            <input
              type="date"
              name="dateOfbirth"
              className="form-control"
              id="dobInput"
              value={faculty.dateOfbirth}
              onChange={handlechange}
            />
          </div>

          {/* Contact Number */}
          <div className="col-6 mb-3">
            <label htmlFor="phoneInput" className="form-label">Contact Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              placeholder="+(245) 451 45123"
              value={faculty.phoneNumber}
              onChange={handlechange}
              id="phoneInput"
            />
          </div>

          {/* Email */}
          <div className="col-6 mb-3">
            <label htmlFor="emailInput" className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={faculty.email}
              onChange={handlechange}
              id="emailInput"
            />
          </div>

          {/* Company */}
          <div className="col-12 mb-3">
            <label htmlFor="companyInput" className="form-label">Company Name</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Enter company name"
              value={faculty.company}
              onChange={handlechange}
              id="companyInput"
            />
          </div>

          {/* Course */}
          <div className="col-6 mb-3">
            <label htmlFor="courseInput" className="form-label">Course</label>
            <input
              type="text"
              name="course"
              className="form-control"
              placeholder="Enter your course"
              value={faculty.course}
              onChange={handlechange}
              id="courseInput"
            />
          </div>

          {/* Program */}
          <div className="col-6 mb-3">
            <label htmlFor="programInput" className="form-label">Program</label>
            <input
              type="text"
              name="program"
              className="form-control"
              placeholder="Enter your program"
              value={faculty.program}
              onChange={handlechange}
              id="programInput"
            />
          </div>

          {/* Address - Street */}
          <div className="col-12 mb-3">
            <label htmlFor="addressInput" className="form-label">Street</label>
            <input
              type="text"
              name="street"
              className="form-control"
              placeholder="Enter your street"
              value={faculty.address.street}
              onChange={(e) => handlechange(e, "address", "street")}
              id="addressInput"
            />
          </div>

          {/* Address - City */}
          <div className="col-6 mb-3">
            <label htmlFor="cityInput" className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter your city"
              value={faculty.address.city}
              onChange={(e) => handlechange(e, "address", "city")}
              id="cityInput"
            />
          </div>

          {/* Address - State */}
          <div className="col-6 mb-3">
            <label htmlFor="stateInput" className="form-label">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="Enter your state"
              value={faculty.address.state}
              onChange={(e) => handlechange(e, "address", "state")}
              id="stateInput"
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FacultyEdit;
