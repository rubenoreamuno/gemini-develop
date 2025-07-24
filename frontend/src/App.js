
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import GpsTracking from './pages/GpsTracking';
import FileCleaner from './pages/FileCleaner';
import GroupManager from './pages/GroupManager';
import FileStorage from './pages/FileStorage';
import Login from './pages/Login';
import { auth } from './firebase';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/*"
        element={
          user ? (
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 p-6">
                  <Routes>
                    <Route path="/" element={<div>Dashboard Home</div>} />
                    <Route path="/gps" element={<GpsTracking />} />
                    <Route path="/files" element={<FileCleaner />} />
                    <Route path="/groups" element={<GroupManager />} />
                    <Route path="/storage" element={<FileStorage />} />
                  </Routes>
                </main>
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
