export default function OwnerDashboard() {
  const mockWorkers = [
    { name: "김철수", score: -10, status: "재직" },
    { name: "박영희", score: -35, status: "해고" },
    { name: "이민호", score: 5, status: "재직" },
  ];

  return (
    <div>
      <h2>📋 고용 중인 알바 요약</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>점수</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {mockWorkers.map((w, idx) => (
            <tr key={idx}>
              <td>{w.name}</td>
              <td>{w.score}</td>
              <td>{w.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
