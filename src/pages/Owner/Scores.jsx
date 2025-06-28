import { useState } from "react";

export default function Scores() {
  const [scoreList, setScoreList] = useState([]);
  const [worker, setWorker] = useState("");
  const [score, setScore] = useState(0);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);

  const submit = () => {
    if (reason.length < 30) {
      alert("사유는 30자 이상이어야 합니다.");
      return;
    }
    setScoreList([
      ...scoreList,
      {
        worker,
        score,
        reason,
        fileName: file ? file.name : null,
        date: new Date().toLocaleString(),
      },
    ]);
    setWorker("");
    setScore(0);
    setReason("");
    setFile(null);
  };

  return (
    <div>
      <h2>🛠️ 점수 부여</h2>
      <input
        type="text"
        placeholder="알바 이름"
        value={worker}
        onChange={(e) => setWorker(e.target.value)}
      />
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        placeholder="점수"
      />
      <textarea
        placeholder="사유 (30자 이상)"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={submit}>부여하기</button>

      <ul>
        {scoreList.map((s, i) => (
          <li key={i}>
            [{s.date}] {s.worker}에게 {s.score}점 부여<br />
            이유: {s.reason} {s.fileName && `(첨부: ${s.fileName})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
