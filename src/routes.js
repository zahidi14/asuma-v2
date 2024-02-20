import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListMasuk = React.lazy(() => import('./views/suratMasuk/List'))
const CariMasuk = React.lazy(() => import('./views/suratMasuk/Pencarian'))
const RiwayatDisposisi = React.lazy(() => import('./views/suratMasuk/RiwayatDisposisi'))

const ListTugas = React.lazy(() => import('./views/tugas/DaftarTugas'))
const DetTugas = React.lazy(() => import('./views/tugas/DetailTugas'))
const FormTugas = React.lazy(() => import('./views/tugas/FormTugas'))

const ListDispose = React.lazy(() => import('./views/disposisi/DaftarSurat'))
const FormDispose = React.lazy(() => import('./views/disposisi/FormulirDispose'))
const HistDispose = React.lazy(() => import('./views/disposisi/RiwayatDispose'))

const ReportIn = React.lazy(() => import('./views/Report/ReportIn'))
const ReportDispose = React.lazy(() => import('./views/Report/ReportDispose'))
const ReportStat = React.lazy(() => import('./views/Report/ReportStat'))
const ReportTren = React.lazy(() => import('./views/Report/ReportTren'))

const UserSetting = React.lazy(() => import('./views/Setting/UserSetting'))
const AdminSetting = React.lazy(() => import('./views/Setting/AdminSetting'))
const AppSetting = React.lazy(() => import('./views/Setting/AppSetting'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Surat Masuk

  { path: '/suratmasuk/listmasuk', name: 'Daftar Surat Masuk', element: ListMasuk },
  { path: '/suratmasuk/carimasuk', name: 'Pencarian Surat Masuk', element: CariMasuk },
  { path: '/suratmasuk/riwayatdisposisi', name: 'Riwayat Disposisi', element: RiwayatDisposisi },

  // Tugas
  { path: '/tugas/daftartugas', name: 'Daftar Tugas', element: ListTugas },
  { path: '/tugas/detailtugas', name: 'Detail Tugas', element: DetTugas },
  { path: '/tugas/formtugas', name: 'Formulir Tugas', element: FormTugas },

  // Disposisi
  { path: '/disposisi/listdisposisi', name: 'List Disposisi', element: ListDispose },
  { path: '/disposisi/formdisposisi', name: 'Formulir Disposisi', element: FormDispose },
  { path: '/disposisi/riwayatdisposisi', name: 'Riwayat Disposisi', element: HistDispose },

  //Report
  { path: '/report/surat', name: 'Laporan surat masuk dan keluar', element: ReportIn },
  {
    path: '/report/disposisi',
    name: 'Laporan disposisi dan penyelesaian tugas',
    element: ReportDispose,
  },
  { path: '/report/statistik', name: 'Statistik kinerja', element: ReportStat },
  { path: '/report/tren', name: 'Analisis tren', element: ReportTren },

  //Setting
  { path: '/setting/user', name: 'Pengaturan Pengguna', element: UserSetting },
  { path: '/setting/admin', name: 'Pengaturan Hak Akses', element: AdminSetting },
  { path: '/setting/app', name: 'Pengaturan Aplikasi', element: AppSetting },
]

export default routes
