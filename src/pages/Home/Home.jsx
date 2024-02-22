import React from "react";
import "./home.scss";
import { Sidebar, Navbar, Chart, Tables } from "../../component";
import { Routes, Route } from "react-router-dom";
import {
  ListMasuk,
  FormMasuk,
  ListDisposisi,
  FormDisp,
  HistDisp,
  Tren,
  PengaturanUser,
  PengaturanAdmin,
} from "../../views";

const Home = ({ name, logout }) => {
  return (
    <div className="home">
      <Sidebar logout={logout} />
      <div className="homeContainer">
        <Navbar name={name} />
        <Routes>
          <Route exact path="/persuratan/list" element={<ListMasuk />} />
          <Route path="/persuratan/form" element={<FormMasuk />} />

          <Route path="/disposisi/list" element={<ListDisposisi />} />
          <Route path="/disposisi/form" element={<FormDisp />} />
          <Route path="/disposisi/riwayat" element={<HistDisp />} />

          <Route path="/report/tren" element={<Tren />} />

          <Route path="/pengaturan/user" element={<PengaturanUser />} />
          <Route path="/pengaturan/admin" element={<PengaturanAdmin />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
