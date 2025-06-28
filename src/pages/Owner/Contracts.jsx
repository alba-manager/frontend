import { useState } from "react";

export default function Contracts() {
  const [contracts, setContracts] = useState([]);
  const [worker, setWorker] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);

  const upload = () => {
    if (!worker || !date || !file) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    setContracts([
      ...contracts,
      { worker, date, note, fileName: file.name },
    ]);
    setWorker("");
    setDate("");
    setNote("");
    setFile(null);
  };

  return (
    <div>
      <h2>📁 계약서 관리</h2>
      <input
        type="text"
        placeholder="알바 이름"
        value={worker}
        onChange={(e) => setWorker(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="비고"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>업로드</button>

      <ul>
        {contracts.map((c, i) => (
          <li key={i}>
            {c.worker} - {c.date} - {c.note} - {c.fileName}
          </li>
        ))}
      </ul>
    </div>
  );
}
