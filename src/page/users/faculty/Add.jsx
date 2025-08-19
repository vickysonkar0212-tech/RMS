import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useCreatefacultyMutation } from "../../../app/services/AuthApi";

const FacultyAdd = () => {

  const [Createfaculty] = useCreatefacultyMutation()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
  })
  const [phonenumber, setPhoneNumber] = useState('')
  const [company, setCompany] = useState('')
  const [gender, setGender] = useState('')
  const [dateofbirth, setDateOfBirth] = useState('')
  const [program, setProgram] = useState('')
  const [course, setCourse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await Createfaculty({

        firstname,
        lastname,
        email,
        gender,
        dateofbirth,
        phoneNumber: phonenumber,
        company,
        address,
        course,
        program
      })
      // console.log("fetch", response)
      toast.success(response?.data?.message)
      // toast.success(response?.data?.message)

      //  toast.success(response.data.message); 




    } catch (error) {

      // toast.error(error?.response?.data?.message || "Something went wrong");

      toast.error(error?.response?.data?.message);
    }

  }
  const isValid = firstname && dateofbirth && phonenumber && email && course && gender;

  return (
    <>
      <div className="col-5 mx-auto">
        <h2 className="fs-4 text-center mb-4"> Faculty Add Form</h2>
        <div className="card">
          <div className="card-body">
            <form method="post" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="firstNameinput" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your firstname" value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      id="firstNameinput"
                    />
                  </div>
                </div>
                {/*lastname*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="lastNameinput" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname" value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      id="lastNameinput"
                    />
                  </div>
                </div>
                {/*gender*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="phonenumberInput" className="form-label">
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
                {/*d.o.b*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="phonenumberInput" className="form-label">
                      D.o.B
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      placeholder="date"
                      value={dateofbirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      id="phonenumberInput"
                    />
                  </div>
                </div>

                {/*contact*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="phonenumberInput" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+(245) 451 45123" value={phonenumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      id="phonenumberInput"
                    />
                  </div>
                </div>
                {/*email*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="emailidInput" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gamil.com" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="emailidInput"
                    />
                  </div>
                </div>
                {/*company*/}
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="compnayNameinput" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter company name" value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      id="compnayNameinput"
                    />
                  </div>
                </div>
                {/*course name*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="citynameInput" className="form-label">
                      Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your course" value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      id="citynameInput"
                    />
                  </div>
                </div>
                {/*Program*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="citynameInput" className="form-label">
                      Program
                    </label>
                    <input
                      type=""
                      className="form-control"
                      placeholder="Enter your program" value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      id="citynameInput"
                    />
                  </div>
                </div>
                {/*Address*/}
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="address1ControlTextarea" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address 1" value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      id="address1ControlTextarea"
                    />
                  </div>
                </div>
                {/*city*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="citynameInput" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your city" value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      id="citynameInput"
                    />
                  </div>
                </div>
                {/*state*/}
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="ForminputState" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your state" value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      id="citynameInput"
                    />
                    {/* <select id="ForminputState" className="form-select"value={state}
     onChange={ (e) =>setState(e.target.value)} >
          <option selected="">Choose...</option>
          <option>...</option>
        </select> */}
                  </div>
                </div>
                {/*submit*/}
                <div className="col-lg-12">
                  <div className="text-end">
                    <button type="submit" className="btn w-100 btn-primary"
                      disabled={!isValid}>
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


export default FacultyAdd;