import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"


const Authlayout = () => {
 const navigate = useNavigate()

  useEffect ( () =>  {
     
    const token = localStorage.getItem("accesstoken")
  if(token) {
    navigate("/")
  }
    
  } , [])
  

    return (
        <>


<div className="auth-page-wrapper pt-5">
  {/* auth page bg */}
  <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
    <div className="bg-overlay" />
    <div className="shape">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 120"
      >
        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
      </svg>
    </div>
  </div>
  {/* auth page content */}
  <div className="auth-page-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center mt-sm-5 mb-4 text-white-50">
            <div>
              <a href="index.html" className="d-inline-block auth-logo">
                <img src="assets/images/logo-light.png" alt="" height={20} />
              </a>
            </div>
            <p className="mt-3 fs-15 fw-medium">
              Premium Admin &amp; Dashboard Template
            </p>
          </div>
        </div>
      </div>
      {/* end row */}
    <Outlet/>
      {/* end row */}
    </div>
    {/* end container */}
  </div>
  {/* end auth page content */}
  {/* footer */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <p className="mb-0 text-muted">
              © Velzon. Crafted with <i className="mdi mdi-heart text-danger" />{" "}
              by Themesbrand
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>

        
        
        </>
    )
}
export default Authlayout;