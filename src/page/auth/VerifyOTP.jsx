 const VerifyOTP = () => {



    return(
        <>

<div className="row justify-content-center">
  <div className="col-md-8 col-lg-6 col-xl-5">
    <div className="card mt-4">
      <div className="card-body p-4">
        <div className="mb-4">
          <div className="avatar-lg mx-auto">
            <div className="avatar-title bg-light text-primary display-5 rounded-circle shadow">
              <i className="ri-mail-line" />
            </div>
          </div>
        </div>
        <div className="p-2 mt-4">
          <div className="text-muted text-center mb-4 mx-lg-3">
            <h4>Verify Your Email</h4>
            <p>
              Please enter the 4 digit code sent to{" "}
              <span className="fw-semibold">example@abc.com</span>
            </p>
          </div>
          <form autoComplete="off">
            <div className="row">
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="digit1-input" className="visually-hidden">
                    Digit 1
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-light text-center"
                    onkeyup="moveToNext(1, event)"
                    maxLength={1}
                    id="digit1-input"
                  />
                </div>
              </div>
              {/* end col */}
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="digit2-input" className="visually-hidden">
                    Digit 2
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-light text-center"
                    onkeyup="moveToNext(2, event)"
                    maxLength={1}
                    id="digit2-input"
                  />
                </div>
              </div>
              {/* end col */}
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="digit3-input" className="visually-hidden">
                    Digit 3
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-light text-center"
                    onkeyup="moveToNext(3, event)"
                    maxLength={1}
                    id="digit3-input"
                  />
                </div>
              </div>
              {/* end col */}
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="digit4-input" className="visually-hidden">
                    Digit 4
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-light text-center"
                    onkeyup="moveToNext(4, event)"
                    maxLength={1}
                    id="digit4-input"
                  />
                </div>
              </div>
              {/* end col */}
            </div>
          </form>
          {/* end form */}
          <div className="mt-3">
            <button type="button" className="btn btn-success w-100">
              Confirm
            </button>
          </div>
        </div>
      </div>
      {/* end card body */}
    </div>
    {/* end card */}
    <div className="mt-4 text-center">
      <p className="mb-0">
        Didn't receive a code ?{" "}
        <a
          href=""
          className="fw-semibold text-primary text-decoration-underline"
        >
          Resend
        </a>{" "}
      </p>
    </div>
  </div>
</div>

 </>
    )
}
export default VerifyOTP;