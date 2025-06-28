import { useState } from "react";
import LoginFormWorker from "../../components/LoginFormWorker";
import LoginFormOwner from "../../components/LoginFormOwner";
import "../../styles/Auth.css";

export default function Login() {
  const [role, setRole] = useState("worker");

  return (
    <div className="login-wrapper">
      <div className="login-toggle">
        <button
          onClick={() => setRole("worker")}
          className={role === "worker" ? "active" : ""}
        >
          알바 로그인
        </button>
        <button
          onClick={() => setRole("owner")}
          className={role === "owner" ? "active" : ""}
        >
          사장 로그인
        </button>
      </div>

      <div className={`login-form ${role}`}>
        {role === "worker" ? <LoginFormWorker /> : <LoginFormOwner />}
      </div>
    </div>
  );
}
