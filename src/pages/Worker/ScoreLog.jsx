export default function WorkerScoreLog() {
  const logs = [
    { score: -5, reason: "무단결근", date: "2025-06-20", from: "홍길동 사장님" },
    { score: 2, reason: "고객 칭찬 접수", date: "2025-06-24", from: "유재석 사장님" },
  ];

  return (
    <div>
      <h2>🧾 내가 받은 점수 이력</h2>
      <table>
        <thead>
          <tr>
            <th>사장님</th>
            <th>점수</th>
            <th>사유</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.from}</td>
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
