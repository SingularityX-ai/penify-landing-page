import React from "react";

const StatCount = React.memo(function StatCount({
  repos,
  users,
}: {
  repos: number;
  users: number;
}) {

  return (
    <div className="fw-medium bg-black text-center p-2">
      <i className="fa-solid fa-star me-2" style={{ color: "#ffbc00" }}></i>
      Trusted globally by{" "}
      <strong className="text-white fw-bold fs-5">
        {Math.floor(users / 10) * 10}
      </strong>
      + users and installed on{" "}
      <strong className="text-white fw-bold fs-5">
        {Math.floor(repos / 100) * 100}
      </strong>
      + repositories.
    </div>
  );
});

export default StatCount;
