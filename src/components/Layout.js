import React from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          My React App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <div className="row">
          <div
            className="col-md-3"
            style={{ background: "#f5f5f5", padding: "20px" }}
          >
            <Sidebar />
          </div>

          <div className="col-md-9">
            {children} {/* Main content will be loaded here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
