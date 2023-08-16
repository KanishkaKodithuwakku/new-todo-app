import React from 'react'

const Title = ({ title, count }) => {
  return (
    <div className="row">
      <div className="col-md-1">
        <h1 className="position-relative">
          {title}
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "185%", fontSize: 12 }}
          >
            {count}
          </span>
        </h1>
      </div>
    </div>
  );
};
Title.defaultProps = {
    count:0
}
export default Title;
