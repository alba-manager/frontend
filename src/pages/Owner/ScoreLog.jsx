export default function ScoreLog() {
  const sampleData = [
    { worker: "김철수", score: -5, reason: "지각 3회", date: "2025-06-25" },
    { worker: "이민호", score: 3, reason: "고객 응대 우수", date: "2025-06-26" },
  ];

  return (
    <div>
      <h2>🧾 점수 부여 이력</h2>
      <table>
        <thead>
          <tr>
            <th>알바</th>
            <th>점수</th>
            <th>사유</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((log, i) => (
            <tr key={i}>
              <td>{log.worker}</td>
              <td>{log.score}</td>
              <td>{log.reason}</td>
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
