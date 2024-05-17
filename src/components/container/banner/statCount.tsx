import React from "react";

const StatCount = React.memo(function StatCount({ repos, users }: { repos: number; users: number }) {
  return (
    <div className="stats__counter">
      <p className="fw-medium text-center">
        <i className="fa-solid fa-star me-2" style={{ color: "#ffbc00" }}></i>
        <span>
          Trusted globally by <strong className="text-white fw-bold fs-5">{users}</strong>
        </span>
        <span>
          + users and installed on <strong className="text-white fw-bold fs-5">{Math.floor(repos / 100) * 100}</strong>+ repositories.
        </span>
      </p>

      <a href="https://github.com/apps/penify-dev" target="_blank" rel="noopener noreferrer" className="btn btn-success install-button-success">
        INSTALL
      </a>
    </div>
  );
});

export default StatCount;
