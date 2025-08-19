import axios from "axios"
import { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/services/AuthApi";
// import { useEffect } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const [ login ] = useLoginMutation()


  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

       const response = await login({email , password})

      // const response = await axios.post("http://127.0.0.1:5200/auth/login", { email, password })
      // console.log(response.data)
      toast.success(response?.data?.message)
      // localStorage.setItem("accesstoken", response.data.token)
      localStorage.setItem("accesstoken", response?.data?.data?.token);
      navigate("/")
    } catch (error) {
      console.log("error", error.response.data.message)
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card mt-4">
            <div className="card-body p-4">
              <div className="text-center mt-2">
                <h5 className="text-primary">Welcome Back !</h5>
                <p className="text-muted">Sign in to continue to Velzon.</p>
              </div>
              <div className="p-2 mt-4">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email Address" value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <div className="float-end">
                      <a href="/forgot" className="text-muted">
                        Forgot password?
                      </a>
                    </div>
                    <label className="form-label" htmlFor="password-input">
                      Password
                    </label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <input type="password" className="form-control pe-5 password-input"
                        placeholder="Enter password" id="password-input"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                      <button
                        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none password-addon"
                        type="button"
                        id="password-addon">
                        <i className="ri-eye-fill align-middle" />
                      </button>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="auth-remember-check" />
                    <label
                      className="form-check-label"
                      htmlFor="auth-remember-check">
                      Remember me
                    </label>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-success w-100" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;