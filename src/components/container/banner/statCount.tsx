import { axiosInstance } from "@/config/axiosConfig";
import { useEffect, useState } from "react";

export default function StatCount() {
  const [counter, setCounter] = useState({
    repos: 0,
    users: 0,
  });

  useEffect(() => {
    axiosInstance.get("v1/analytics/usage/count").then(({ data }) => setCounter(() => ({ repos: data.repos, users: data.users })));
  }, []);

  return (
    <p className="fw-medium">
      <i
        className="fa-solid fa-star me-2"
        style={{ color: "#ffbc00" }}></i>
      Trusted globally by <strong className="text-white fw-bold fs-5">{Math.floor(counter.users / 10) * 10}</strong>+ users and installed on <strong className="text-white fw-bold fs-5">{Math.floor(counter.repos / 100) * 100}</strong>+ repositories.
    </p>
  );
}
