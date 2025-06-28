import { useEffect, useState } from "react";

export default function NotificationPopup({ message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={popupStyle}>
      <p>{message}</p>
    </div>
  );
}

const popupStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "15px",
  background: "#2ecc71",
  color: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};
