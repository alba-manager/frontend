import { Link, Outlet, useLocation } from "react-router-dom";
import "./../styles/AppLayout.css";

export default function AppLayout() {
  const location = useLocation();
  const isOwner = location.pathname.startsWith("/owner");

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo">ALBA MANAGER</h2>
        <nav>
          <ul>
            {isOwner ? (
              <>
                <li><Link to="/owner/dashboard">📋 알바 요약</Link></li>
                <li><Link to="/owner/workers">👥 알바 등록</Link></li>
                <li><Link to="/owner/scores">🛠️ 점수 부여</Link></li>
                <li><Link to="/owner/contracts">📁 계약서</Link></li>
                <li><Link to="/owner/score-log">🧾 점수 이력</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/worker/dashboard">🏠 마이페이지</Link></li>
                <li><Link to="/worker/score-log">🧾 점수 이력</Link></li>
                <li><Link to="/worker/contracts">📄 계약서 보기</Link></li>
                <li><Link to="/worker/notifications">🔔 알림함</Link></li>
              </>
            )}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
