export default function WorkerDashboard() {
  const mockEmployers = [
    { name: "홍길동 사장님", score: -5 },
    { name: "유재석 사장님", score: 10 },
  ];

  return (
    <div>
      <h2>🏠 마이페이지</h2>
      <h3>고용된 사장 리스트</h3>
      <ul>
        {mockEmployers.map((e, i) => (
          <li key={i}>
            <strong>{e.name}</strong>: 나에게 준 점수 {e.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
