export default function LoginFormOwner() {
  return (
    <form className="login-box">
      <h3>사장 로그인</h3>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </form>
  );
}
