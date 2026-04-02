// Login Component - Fixed token storage
import { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation, useCompleteRegisterMutation } from "../../app/services/AuthApi";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const [ login ] = useLoginMutation()
  const [ register ] = useRegisterMutation()
  const [ completeRegister ] = useCompleteRegisterMutation()

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({email, password}).unwrap();
      console.log('Full login response:', response); // DEBUG: Check structure
      
      // Store token - confirmed working from your logs
      const token = response?.data?.token;
      localStorage.setItem("accessToken", token);
      
      // Store COMPLETE response.data (has user info)
      localStorage.setItem("user", JSON.stringify(response.data));
      
      console.log('Stored user:', JSON.parse(localStorage.getItem("user"))); // DEBUG
      
      toast.success(response?.data?.message);
      
      setTimeout(() => {
        navigate("/");
      }, 100);
      
    } catch (error) {
      toast.error(error?.data?.message || 'Login failed');
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

