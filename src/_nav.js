import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChart, cilEnvelopeOpen, cilHome, cilNotes, cilPencil, cilSettings } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Surat Masuk',
    to: '/suratmasuk/listmasuk',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,

    items: [
      {
        component: CNavItem,
        name: 'Daftar Surat Masuk',
        to: '/suratmasuk/listmasuk',
      },
      {
        component: CNavItem,
        name: 'Pencarian Surat Masuk',
        to: '/suratmasuk/carimasuk',
      },

      {
        component: CNavItem,
        name: 'Riwayat Disposisi',
        to: '/suratmasuk/riwayatdisposisi',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Disposisi Surat',

    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,

    items: [
      {
        component: CNavItem,
        name: 'Daftar surat yang belum didisposisikan',
        to: '/disposisi/listdisposisi',
      },
      {
        component: CNavItem,
        name: 'Formulir disposisi',
        to: '/disposisi/formdisposisi',
      },
      {
        component: CNavItem,
        name: 'Riwayat disposisi',
        to: '/disposisi/riwayatdisposisi',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Tugas',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,

    items: [
      {
        component: CNavItem,
        name: 'Daftar tugas',
        to: '/tugas/daftartugas',
      },
      {
        component: CNavItem,
        name: 'Detail tugas',
        to: '/tugas/detailtugas',
      },
      {
        component: CNavItem,
        name: 'Formulir penyelesaian tugas',
        to: '/tugas/formtugas',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Laporan dan Statisik',

    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,

    items: [
      {
        component: CNavItem,
        name: 'Laporan surat masuk dan keluar',
        to: '/report/surat',
      },
      {
        component: CNavItem,
        name: 'Laporan disposisi dan penyelesaian tugas',
        to: '/report/disposisi',
      },
      {
        component: CNavItem,
        name: 'Statistik kinerja',
        to: '/report/statistik',
      },
      {
        component: CNavItem,
        name: 'Analisis tren',
        to: '/report/tren',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pengaturan',
    to: '/dashboard',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
    items: [
      {
        component: CNavItem,
        name: 'Pengaturan akun pengguna',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Pengaturan hak akses',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Integrasi dengan sistem lain',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Pengaturan aplikasi',
        to: '/base/breadcrumbs',
      },
    ],
  },
]

export default _nav
