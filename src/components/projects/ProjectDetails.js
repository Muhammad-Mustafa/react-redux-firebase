import React from "react";

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            praesentium incidunt vel qui, ab expedita explicabo minus quisquam
            placeat numquam ipsa nam facilis fuga sint atque optio! Quod, modi!
            Harum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Mustafa</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
