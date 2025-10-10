
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { ToastProvider } from './hooks/useToast';
import { SoundProvider } from './hooks/useSound';

import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TasksPage from './pages/TasksPage';
import KanbanPage from './pages/KanbanPage';
import CalendarPage from './pages/CalendarPage';
import FileManagerPage from './pages/FileManagerPage';
import MessagesPage from './pages/MessagesPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <ToastProvider>
          <HashRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Outlet />
                  </Layout>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="tasks" element={<TasksPage />} />
                <Route path="kanban" element={<KanbanPage />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="files" element={<FileManagerPage />} />
                <Route path="messages" element={<MessagesPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              {/* You can add login/signup routes here outside the main layout */}
            </Routes>
          </HashRouter>
        </ToastProvider>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
