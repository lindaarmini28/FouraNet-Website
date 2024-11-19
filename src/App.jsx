// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import DetailPage from './Dashboard/DetailPage';
import PrivateRoute from './PrivateRoute';
import Pendaftaran from './pendaftaran/pendaftaran';
import PagePendaftaran from './pendaftaran/pagependaftaran'; 
import './App.css'; 
import RegistrasiTempat from './pendaftaran/tempat';
import RegistrasiServer from './pendaftaran/server';
import RegistrasiPanel from './pendaftaran/panel';
import RegistrasiRouter from './pendaftaran/router';
import RegistrasiSwitch from './pendaftaran/Switch';
import RegistrasiAlat from './pendaftaran/alat';
import Halaman1 from './Dashboard/Halaman1';
import ManagementUser from './ManagementUser/ManagementUser';
import SettingPage from './setting/setting';
import DashboardTeknisi from './dashboard_teknisi/dash_teknisi';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardTeknisi />} />
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
            <Route path="/Halaman1" element={<PrivateRoute component={<Halaman1 />} />} />
            <Route path="/detail/:id" element={<PrivateRoute component={<DetailPage />} />} />
            <Route path="/pendaftaran" element={<PrivateRoute component={<Pendaftaran/>} />} />
            <Route path="/pagependaftaran" element={<PagePendaftaran />} /> 
            <Route path="/regis-tempat" element={<PrivateRoute component={<RegistrasiTempat />} />} />
            <Route path="/regis-server" element={<PrivateRoute component={<RegistrasiServer />} />} />
            <Route path="/regis-panel" element={<PrivateRoute component={<RegistrasiPanel />} />}/>
            <Route path="/regis-router" element={<PrivateRoute component={<RegistrasiRouter />} />}/>
            <Route path="/regis-switch" element={<PrivateRoute component={<RegistrasiSwitch />} />} />
            <Route path="/regis-alat" element={<PrivateRoute component={<RegistrasiAlat />} />} />
            <Route path="/managementuser" element={<PrivateRoute component={<ManagementUser />} />} />
            <Route path="/setting" element={<PrivateRoute component={<SettingPage />} />} />
        </Routes>
    );
};

export default App;