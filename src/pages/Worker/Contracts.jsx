export default function WorkerContracts() {
  const mockContracts = [
    {
      employer: "홍길동 사장님",
      date: "2025-05-01",
      note: "야간 근무 계약",
      fileName: "contract_night_shift.pdf",
    },
    {
      employer: "유재석 사장님",
      date: "2025-06-10",
      note: "카운터 업무",
      fileName: "contract_counter.pdf",
    },
  ];

  return (
    <div>
      <h2>📄 계약서 보기</h2>
      <ul>
        {mockContracts.map((c, i) => (
          <li key={i}>
            {c.date} - {c.employer} - {c.note} ({c.fileName})
          </li>
        ))}
      </ul>
    </div>
  );
}
