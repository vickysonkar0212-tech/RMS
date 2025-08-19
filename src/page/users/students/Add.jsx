
import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateMutation } from "../../../app/services/AuthApi";

const StudentAdd = () => {

  const [ create ] = useCreateMutation()


  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfbirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  })
  const [program, setProgram] = useState('')
  const [course, setCourse] = useState('[]')
  const [guardianName, setGuardianName] = useState({
    name: "",
    relationship: "",
    contactNumber: ""
  })
  // const [companyName, setCompanyName] = useState('')

  const handlSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await create({
        firstname,
        lastname,
        email,
        phoneNumber,
        gender,
        password,
        dateOfbirth,
        address,
        program,
        course,
        guardianName
      });
      console.log(response.data);
      toast.success(response?.data?.message);
    } catch (error) {
      console.error("error", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  const isDisable = firstname && lastname && email && course && dateOfbirth ;
  return (

    <>
      <div className="col-5 mx-auto">
        <h2 className="fs-4 text-center mb-4"> Student Add Form</h2>
        <div className="card">
          <div className="card-body">
            <form  onSubmit={handlSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="firstNameinput" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your firstname"
                      id="firstNameinput"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                {/* Lastname*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="lastNameinput" className="form-label">
                      LastName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname"
                      id="lastNameinput" value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                {/* Password */}
                <div className="col-6">
                  <label>Password</label>
                  <input type="password" placeholder="id no." className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* PhoneNumber*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="phonenumberInput" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+(245) 451 45123"
                      id="phonenumberInput"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
                {/* email col*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="emailidInput" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gamil.com"
                      id="emailidInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                {/*end col*/}
                {/* / ** Gender **/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="ForminputState" className="form-label">
                      Gender
                    </label>
                    <select id="ForminputState" className="form-select" value={gender}
                      onChange={(e) => setGender(e.target.value)}>
                      <option selected="">Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                {/* /** DOB */}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="citynameInput" className="form-label">
                      D.O.B
                    </label>
                    <input
                      type="Date"
                      className="form-control"
                      placeholder="Enter your city"
                      id="citynameInput"
                      value={dateOfbirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>
                { /** Address **/}
                <div className="col-12">
                  <div className="mb-3">
                    <label  >
                      Street
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="street "
                      value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
                  </div>
                </div>
                {/* /** city */}
                <div className="col-4">
                  <div className="mb-3">
                    <label >
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city "
                      value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
                  </div>
                </div>
                {/* /** state */}
                <div className="col-4">
                  <div className="mb-3">
                    <label >
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="street "
                      value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} />
                  </div>
                </div>
                {/*zipcode*/}
                <div className="col-4">
                  <div className="mb-3">
                    <label >
                      ZipCode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="zipcode"
                      value={address.zipCode} onChange={(e) => setAddress({ ...address, zipCode: e.target.value })} />
                  </div>
                </div>
                {/*program*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="citynameInput" className="form-label">
                      Program
                    </label>
                    <select id="ForminputState" className="form-select" value={program}
                      onChange={(e) => setProgram(e.target.value)}>
                      <option selected="">Choose...</option>
                      <option>Coding</option>
                      <option>Graphic Designing</option>
                      <option>Music</option>
                      <option>French</option>
                      <option>Fashion Designing</option>
                      <option> Digital Marketing </option>

                    </select>

                  </div>
                </div>
                {/*courses*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="ForminputState" className="form-label">
                      Courses
                    </label>
                    <select id="ForminputState" className="form-select" value={course}
                      onChange={(e) => setCourse(e.target.value)}>
                      <option selected="">Choose...</option>
                      <option>Full Stack Devlopment</option>
                      <option> Frontend Designing</option>
                      <option>Social Marketing</option>
                      <option>Video Editing</option>
                      <option>Php Training</option>
                      <option>Java Training</option>
                      <option>Diploma In Autocad</option>
                      
                    </select>
                  </div>
                </div>
                {/*Gaurdian*/}
                <div className="col-4 mb-3 ">
                  <label>GaurdianName</label>
                  <input type="text" className="form-control" placeholder="name"
                    value={guardianName.name} onChange={(e) => setGuardianName({ ...guardianName, name: e.target.value })} />
                </div>
                <div className="col-4 mb-3">
                  <label>Relationship</label>
                  <input type="text" className="form-control" placeholder="rel..."
                    value={guardianName.relationship} onChange={(e) => setGuardianName({ ...guardianName, relationship: e.target.value })} />
                </div>
                <div className="col-4 mb-3">
                  <label>Contact Number</label>
                  <input type="text" className="form-control" placeholder="contact..."
                    value={guardianName.contactNumber} onChange={(e) => setGuardianName({ ...guardianName, contactNumber: e.target.value })} />
                </div>
                {/*submit*/}
                <div className="col-lg-12">
                  <div className="text-end">
                    <button type="submit" disabled={!isDisable}
                      className="btn w-100 btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </form>

          </div>
        </div>

      </div>

    </>
  )

}
export default StudentAdd;

