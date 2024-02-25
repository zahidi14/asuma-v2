import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailIcon from "@mui/icons-material/Email";
import ListIcon from "@mui/icons-material/List";

import { Link } from "react-router-dom";
const Sidebar = ({ logout }) => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">lamadmin</span>
          </Link>
        </div>
   
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>

            {/* //SuratMasuk */}

            <p className="title">Transaksi Surat</p>
            <Link to="transaksi/suratmasuk" style={{ textDecoration: "none" }}>
              <li>
                <EmailIcon className="icon" />
                <span>Surat Masuk</span>
              </li>
            </Link>
            <Link to="persuratan/form" style={{ textDecoration: "none" }}>
              <li>
                <ListIcon className="icon" />
                <span>Surat Keluar</span>
              </li>
            </Link>

            {/*Tugas */}

            <p className="title">Disposisi Surat</p>
            <Link to="disposisi/list" style={{ textDecoration: "none" }}>
              <li>
                <EmailIcon className="icon" />
                <span>Disposisi Surat Masuk</span>
              </li>
            </Link>
            

            {/* Report */}
            <p className="title">Laporan dan Analisis</p>
            <Link to="report/tren" style={{ textDecoration: "none" }}>
              <li>
                <ChecklistIcon className="icon" />
                <span>Riwayat Disposisi</span>
              </li>
            </Link>

            {/* Pengaturan  */}
            
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li onClick={logout}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
