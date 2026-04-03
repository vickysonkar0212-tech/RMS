const Certificatesall = () =>{


    return(

        <>
    <h2> certificates </h2> 
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
                <button
                  type="button"
                  className="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  id="create-btn"
                  data-bs-target="#showModal"
                >
                  <i className="ri-add-line align-bottom me-1" /> Add
                </button>
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
                  <th scope="col" style={{ width: 50 }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        defaultValue="option"
                      />
                    </div>
                  </th>
                  <th className="sort" data-sort="customer_name">
                    Customer
                  </th>
                  <th className="sort" data-sort="email">
                    Email
                  </th>
                  <th className="sort" data-sort="phone">
                    Phone
                  </th>
                  <th className="sort" data-sort="date">
                    Joining Date
                  </th>
                  <th className="sort" data-sort="status">
                    Delivery Status
                  </th>
                  <th className="sort" data-sort="action">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="list form-check-all">
                <tr>
                  <th scope="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="chk_child"
                        defaultValue="option1"
                      />
                    </div>
                  </th>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ2101
                    </a>
                  </td>
                  <td className="customer_name">Mary Cousar</td>
                  <td className="email">marycousar@velzon.com</td>
                  <td className="phone">580-464-4694</td>
                  <td className="date">06 Apr, 2021</td>
                  <td className="status">
                    <span className="badge bg-success-subtle text-success text-uppercase">
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div className="edit">
                        <button
                          className="btn btn-sm btn-success edit-item-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#showModal"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="remove">
                        <button
                          className="btn btn-sm btn-danger remove-item-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteRecordModal"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="noresult" style={{ display: "none" }}>
              <div className="text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: 75, height: 75 }}
                ></lord-icon>
                <h5 className="mt-2">Sorry! No Result Found</h5>
                <p className="text-muted mb-0">
                  We've searched more than 150+ Orders We did not find any
                  orders for you search.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="pagination-wrap hstack gap-2">
              <a
                className="page-item pagination-prev disabled"
                href="javascript:void(0);"
              >
                Previous
              </a>
              <ul className="pagination listjs-pagination mb-0" />
              <a
                className="page-item pagination-next"
                href="javascript:void(0);"
              >
                Next
              </a>
            </div>
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

export default Certificatesall