import { useState } from "react";
import "../../styles/Auth.css";

export default function Register() {
  const [role, setRole] = useState("worker");

  return (
    <div className="login-wrapper">
      <h3>회원가입</h3>

      <div className="login-toggle">
        <button
          onClick={() => setRole("worker")}
          className={role === "worker" ? "active" : ""}
        >
          알바
        </button>
        <button
          onClick={() => setRole("owner")}
          className={role === "owner" ? "active" : ""}
        >
          사장
        </button>
      </div>

      <form className="login-box">
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
