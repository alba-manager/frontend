export default function Notifications() {
  const mockAlerts = [
    {
      date: "2025-06-27",
      message: "홍길동 사장님이 -3점을 부여했습니다. (무단지각)",
    },
    {
      date: "2025-06-25",
      message: "유재석 사장님이 2점을 부여했습니다. (고객 피드백)",
    },
  ];

  return (
    <div>
      <h2>🔔 알림함</h2>
      <ul>
        {mockAlerts.map((a, i) => (
          <li key={i}>
            [{a.date}] {a.message}
          </li>
        ))}
      </ul>
    </div>
  );
}