 const Forgot = () => {



    return(
        <>
                     <div className="row justify-content-center">
  <div className="col-md-8 col-lg-6 col-xl-5">
    <div className="card mt-4">
      <div className="card-body p-4">
        <div className="text-center mt-2">
          <h5 className="text-primary">Forgot Password?</h5>
          <p className="text-muted">Reset password with velzon</p>
          <lord-icon
            src="https://cdn.lordicon.com/rhvddzym.json"
            trigger="loop"
            colors="primary:#0ab39c"
            className="avatar-xl"
          ></lord-icon>
        </div>
        <div
          className="alert border-0 alert-warning text-center mb-2 mx-2"
          role="alert"
        >
          Enter your email and instructions will be sent to you!
        </div>
        <div className="p-2">
          <form>
            <div className="mb-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-success w-100" type="submit">
                Send Reset Link
              </button>
            </div>
          </form>
          {/* end form */}
        </div>
      </div>
      {/* end card body */}
    </div>
    {/* end card */}
    <div className="mt-4 text-center">
      <p className="mb-0">
        Wait, I remember my password...{" "}
        <a
          href="/login"
          className="fw-semibold text-primary text-decoration-underline"
        >
          {" "}
          Click here{" "}
        </a>{" "}
      </p>
    </div>
  </div>
</div>
       
        </>
    )
}
export default Forgot;