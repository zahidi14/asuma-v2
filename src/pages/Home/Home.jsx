import React from "react";
import "./home.scss";
import { Sidebar, Navbar, Chart, Tables } from "../../component";
import { Routes, Route } from "react-router-dom";
import {
  ListDisposisi,
  FormDisp,
  HistDisp,
  Tren,
  PengaturanUser,
  PengaturanAdmin,
  InputMasuk,
  SuratMasuk,
  Dashboard,
} from "../../views";

const Home = ({ name, logout }) => {
  return (
    <div className="home">
      <div className="side">
        <Sidebar logout={logout} />
      </div>
      <div className="homeContainer">
        <Navbar name={name} />
        <div className="content">
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/transaksi/suratmasuk" element={<SuratMasuk />} />

            <Route path="/transaksi/suratmasuk/add" element={<InputMasuk />} />

            <Route path="/disposisi/list" element={<ListDisposisi />} />
            <Route path="/disposisi/form" element={<FormDisp />} />
            <Route path="/disposisi/riwayat" element={<HistDisp />} />

            <Route path="/report/tren" element={<Tren />} />

            <Route path="/pengaturan/user" element={<PengaturanUser />} />
            <Route path="/pengaturan/admin" element={<PengaturanAdmin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
