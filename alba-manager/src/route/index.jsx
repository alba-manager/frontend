// src/route/index.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 👉 owner 페이지
import OwnerContracts from '../pages/owner/Contracts';
import OwnerDashboard from '../pages/owner/Dashboard';
import OwnerScorelog from '../pages/owner/Scorelog';
import OwnerScores from '../pages/owner/Scores';
import OwnerWorkers from '../pages/owner/Workers';

// 👉 worker 페이지
import WorkerContracts from '../pages/worker/Contracts';
import WorkerDashboard from '../pages/worker/Dashboard';
import WorkerNotifications from '../pages/worker/Notifications';
import WorkerScorelog from '../pages/worker/Scorelog';

// 👉 기타 (홈, 404 등)
import Home from '../pages/Home';
import NotFound from '../pages/NotFound.jsx';

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* 메인 */}
                <Route path="/" element={<Home />} />

                {/* Owner 영역 */}
                <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                <Route path="/owner/contracts" element={<OwnerContracts />} />
                <Route path="/owner/scorelog" element={<OwnerScorelog />} />
                <Route path="/owner/scores" element={<OwnerScores />} />
                <Route path="/owner/workers" element={<OwnerWorkers />} />

                {/* Worker 영역 */}
                <Route path="/worker/dashboard" element={<WorkerDashboard />} />
                <Route path="/worker/contracts" element={<WorkerContracts />} />
                <Route path="/worker/notifications" element={<WorkerNotifications />} />
                <Route path="/worker/scorelog" element={<WorkerScorelog />} />

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default PageRoutes;
