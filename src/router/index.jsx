import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import OwnerDashboard from "../pages/owner/Dashboard";
import Workers from "../pages/owner/Workers";
import Scores from "../pages/owner/Scores";
import Contracts from "../pages/owner/Contracts";
import ScoreLog from "../pages/owner/ScoreLog";

import WorkerDashboard from "../pages/worker/Dashboard";
import WorkerScoreLog from "../pages/worker/ScoreLog";
import WorkerContracts from "../pages/worker/Contracts";
import Notifications from "../pages/worker/Notifications";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/worker/dashboard" /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/owner",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <OwnerDashboard /> },
      { path: "workers", element: <Workers /> },
      { path: "scores", element: <Scores /> },
      { path: "contracts", element: <Contracts /> },
      { path: "score-log", element: <ScoreLog /> },
    ],
  },
  {
    path: "/worker",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <WorkerDashboard /> },
      { path: "score-log", element: <WorkerScoreLog /> },
      { path: "contracts", element: <WorkerContracts /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
]);

export default router;
