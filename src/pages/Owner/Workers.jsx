import { useState } from "react";

export default function Workers() {
  const [name, setName] = useState("");
  const [workers, setWorkers] = useState([]);

  const addWorker = () => {
    if (!name.trim()) return;
    setWorkers([...workers, { name, score: 0, status: "재직" }]);
    setName("");
  };

  return (
    <div>
      <h2>👥 알바 등록</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="알바 이름 입력"
      />
      <button onClick={addWorker}>등록</button>

      <ul>
        {workers.map((w, i) => (
          <li key={i}>
            {w.name} – 상태: {w.status} / 점수: {w.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
