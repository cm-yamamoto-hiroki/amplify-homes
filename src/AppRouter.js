import React from 'react';
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { Top } from './pages/top'
import { HomesRoute } from './pages/homes/HomesRoute'

export const AppRouter = () => {

  return (
    <Routes>
      <Route index element={<Top />} />
      <Route path="homes/*" element={<HomesRoute />} />
      {/* <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="walkthrough/*" element={<WalkthroughRoutes />} />
        <Route path="analysis/*" element={<AnalysisRoutes />} />
        <Route path="device/*" element={<DeviceRoutes />} />
        <Route path="monitor/*" element={<MonitorRoutes />} />
        <Route path="statistics/*" element={<StatisticsRoutes />} />
        <Route path="logs/*" element={<LogsRoutes />} />
        <Route path="operators/*" element={<OperatorsRoutes />} />
        <Route path="credentials/*" element={<CredentialsRoutes />} />
      </Route> */}
      {/* <Route path="/system_error" element={<SystemError />} />
    <Route path="/no_permissions" element={<NoPermissions />} />
    <Route path="/not_found" element={<ResouceNotFound />} /> */}
    </Routes>
  )
};

