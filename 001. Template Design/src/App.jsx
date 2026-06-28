import React, { useState, useRef, useEffect } from 'react';
    import { createRoot } from 'react-dom/client';
    import { createPortal } from 'react-dom';
    // Menambahkan Award untuk ikon Course/Sertifikat, dan Rocket untuk Antigravity
    import { Star, User, Instagram, Linkedin, Github, Trophy, LineChart, Sun, Moon, Smartphone, Monitor, Menu, Mail, Download, Palette, ArrowRight, MessageCircle, X, Settings, GraduationCap, Calendar, ChevronDown, ChevronRight, ChevronLeft, Briefcase, ExternalLink, Camera, MapPin, Award, Rocket, Wrench, Send, Home, Image, Play, Pause, Lock, Unlock, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

    // ==========================================
    // 1. KONFIGURASI TEMA & WARNA
    // ==========================================
    const colorSchemes = {
      purple: {
        darkBg: 'bg-[#111126]',
        darkCard: 'bg-[#16172E]',
        darkElement: 'bg-[#1D1E3A]',
        darkElementHover: 'hover:bg-[#282a52]',
        accentTextDark: 'text-[#847BFF]',
        accentTextLight: 'text-[#6366F1]',
        accentBgDark: 'bg-[#9B93FF]',
        accentBgLight: 'bg-[#6366F1]',
        accentHoverDark: 'hover:bg-[#867eff]',
        accentHoverLight: 'hover:bg-[#4f46e5]',
        glow1: 'bg-[#2d1b54]',
        glow2: 'bg-[#392570]',
        glow3: 'bg-[#1e2354]',
        glowLight1: 'bg-purple-200',
        glowLight2: 'bg-indigo-200',
        glowLight3: 'bg-blue-200',
        gradient: 'from-[#9371FF] via-[#7B5CFF] to-[#A084FF]',
      },
      emerald: {
        darkBg: 'bg-[#020617]',
        darkCard: 'bg-[#0f172a]',
        darkElement: 'bg-[#1e293b]',
        darkElementHover: 'hover:bg-[#334155]',
        accentTextDark: 'text-emerald-400',
        accentTextLight: 'text-emerald-600',
        accentBgDark: 'bg-emerald-400',
        accentBgLight: 'bg-emerald-500',
        accentHoverDark: 'hover:bg-emerald-500',
        accentHoverLight: 'hover:bg-emerald-600',
        glow1: 'bg-emerald-900/40',
        glow2: 'bg-teal-900/40',
        glow3: 'bg-slate-800/60',
        glowLight1: 'bg-emerald-200',
        glowLight2: 'bg-teal-200',
        glowLight3: 'bg-green-200',
        gradient: 'from-emerald-400 via-teal-500 to-emerald-300',
      },
      ocean: {
        darkBg: 'bg-[#020617]',
        darkCard: 'bg-[#0f172a]',
        darkElement: 'bg-[#1e293b]',
        darkElementHover: 'hover:bg-[#334155]',
        accentTextDark: 'text-blue-400',
        accentTextLight: 'text-blue-600',
        accentBgDark: 'bg-blue-400',
        accentBgLight: 'bg-blue-500',
        accentHoverDark: 'hover:bg-blue-500',
        accentHoverLight: 'hover:bg-blue-600',
        glow1: 'bg-blue-900/40',
        glow2: 'bg-indigo-900/40',
        glow3: 'bg-sky-900/40',
        glowLight1: 'bg-blue-200',
        glowLight2: 'bg-indigo-200',
        glowLight3: 'bg-sky-200',
        gradient: 'from-blue-400 via-indigo-500 to-sky-400',
      },
      rose: {
        darkBg: 'bg-[#0a0a0a]',
        darkCard: 'bg-[#171717]',
        darkElement: 'bg-[#262626]',
        darkElementHover: 'hover:bg-[#404040]',
        accentTextDark: 'text-rose-400',
        accentTextLight: 'text-rose-600',
        accentBgDark: 'bg-rose-400',
        accentBgLight: 'bg-rose-500',
        accentHoverDark: 'hover:bg-rose-500',
        accentHoverLight: 'hover:bg-rose-600',
        glow1: 'bg-rose-900/40',
        glow2: 'bg-pink-900/40',
        glow3: 'bg-red-900/40',
        glowLight1: 'bg-rose-200',
        glowLight2: 'bg-pink-200',
        glowLight3: 'bg-red-200',
        gradient: 'from-rose-400 via-pink-500 to-rose-300',
      },
      google: {
        darkBg: 'bg-[#0d1117]',
        darkCard: 'bg-[#161b22]',
        darkElement: 'bg-[#21262d]',
        darkElementHover: 'hover:bg-[#30363d]',
        accentTextDark: 'text-[#4285F4]',
        accentTextLight: 'text-[#4285F4]',
        accentBgDark: 'bg-[#4285F4]',
        accentBgLight: 'bg-[#4285F4]',
        accentHoverDark: 'hover:bg-[#5a95f5]',
        accentHoverLight: 'hover:bg-[#3367d6]',
        glow1: 'bg-[#4285F4]/20',
        glow2: 'bg-[#EA4335]/15',
        glow3: 'bg-[#34A853]/15',
        glowLight1: 'bg-blue-200',
        glowLight2: 'bg-red-200',
        glowLight3: 'bg-green-200',
        gradient: 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]',
      }
    };

    const paletteColors = {
      purple: '#847BFF',
      emerald: '#34d399',
      ocean: '#60a5fa',
      rose: '#fb7185',
      google: '#4285F4'
    };

    // ==========================================
    // DATA KEAHLIAN (SKILLS)
    // ==========================================
    const skillsData = [
      { id: 4, name: 'Google Sheet', monogram: 'GS', logo: '002. Aset Software & Tools/Google Sheets.webp', category: 'ADVANCED', level: 90, color: '#6366F1', gradient: 'from-green-500 to-teal-500' },
      { id: 6, name: 'Data Studio', monogram: 'DS', logo: '002. Aset Software & Tools/Data Studio.webp', category: 'INTERMEDIATE', level: 88, color: '#6366F1', gradient: 'from-blue-600 to-indigo-500' },
      { id: 5, name: 'Apps Script', monogram: 'AS', logo: '002. Aset Software & Tools/Apps Script.webp', category: 'BASIC', level: 85, color: '#6366F1', gradient: 'from-yellow-500 to-orange-500' },
      { id: 13, name: 'Gemini', monogram: 'GM', logo: '002. Aset Software & Tools/Google Gemini.webp', category: 'INTERMEDIATE', level: 95, color: '#6366F1', gradient: 'from-blue-400 to-indigo-500' },
      { id: 2, name: 'Antigravity', monogram: 'GA', logo: '001. Aset Hero Section/Logo Antigravity.webp', category: 'BASIC', level: 30, color: '#9CA3AF', gradient: 'from-blue-500 via-red-500 to-yellow-500' },
      { id: 14, name: 'Google Colaboratory', monogram: 'GC', logo: '002. Aset Software & Tools/Google Colaboratory.webp', category: 'INTERMEDIATE', level: 80, color: '#6366F1', gradient: 'from-orange-500 via-amber-400 to-yellow-500' },
      { id: 3, name: 'Excel', monogram: 'EX', logo: '002. Aset Software & Tools/Microsoft Office Excel.webp', category: 'INTERMEDIATE', level: 95, color: '#6366F1', gradient: 'from-green-600 to-emerald-500' },
      { id: 10, name: 'Power BI', monogram: 'PB', logo: '002. Aset Software & Tools/Power BI.webp', category: 'BASIC', level: 80, color: '#6366F1', gradient: 'from-amber-500 to-yellow-600' },
      { id: 11, name: 'PostgreSQL', monogram: 'PG', logo: '002. Aset Software & Tools/PostgreSQL.webp', category: 'BASIC', level: 70, color: '#38BDF8', gradient: 'from-blue-700 to-sky-500' },
      { id: 12, name: 'MySQL', monogram: 'MY', logo: '002. Aset Software & Tools/MySQL.webp', category: 'BASIC', level: 75, color: '#38BDF8', gradient: 'from-orange-500 to-blue-600' },
      { id: 7, name: 'Python', monogram: 'PY', logo: '002. Aset Software & Tools/Python.webp', category: 'BASIC', level: 90, color: '#6366F1', gradient: 'from-yellow-500 to-blue-600' },
      { id: 8, name: 'VSCode', monogram: 'VS', logo: '002. Aset Software & Tools/VS Code.webp', category: 'BASIC', level: 85, color: '#6366F1', gradient: 'from-blue-500 to-cyan-500' },
      { id: 9, name: 'ChatGPT', monogram: 'GPT', logo: '002. Aset Software & Tools/ChatGPT.webp', category: 'INTERMEDIATE', level: 95, color: '#6366F1', gradient: 'from-emerald-500 to-teal-600' }
    ];

    // ==========================================
    // DATA PENDIDIKAN (EDUCATION)
    // ==========================================
    const educationData = [
      {
        id: 1,
        logo: "004. Aset Education/Logo 1.webp",
        monogram: "MJ",
        gradient: "from-blue-700 to-blue-500",
        degree: "Manajemen",
        institution: "Universitas Muhammadiyah Gresik",
        period: "2017 - 2022",
        description: "Selama studi di jurusan Manajemen, saya membangun fondasi kuat dalam prinsip manajemen, analisis kuantitatif, dan pengambilan keputusan berbasis data. Melalui mata kuliah seperti Sistem Informasi Manajemen, Manajemen Operasional, Teori Pengambilan Keputusan, Statistika, hingga Total Quality Management, saya mengasah kemampuan dalam menganalisis proses bisnis, mengolah data, serta memecahkan masalah secara terstruktur.",
        achievements: [
          "Dipercaya menjadi Ketua Umum UKM Kependudukan (UKMK) di Universitas Muhammadiyah Gresik, dengan tanggung jawab memimpin manajemen organisasi dan mengoordinasikan berbagai divisi strategis.",
          "Berhasil meningkatkan perolehan dana hibah organisasi sebesar 1.000%, dari Rp1,2 juta pada tahun 2017 menjadi Rp12 juta pada tahun 2018.",
          "Mendorong pertumbuhan partisipasi peserta pendidikan dan pelatihan (diklat) sebesar 267%, meningkat dari 30 peserta menjadi 110 peserta.",
          "Sukses mengekspansi struktur kepengurusan dengan meningkatkan jumlah pengurus inti sebesar 400%, berkembang secara signifikan dari 8 anggota menjadi 40 anggota."
        ]
      }
    ];

    // ==========================================
    // DATA PENGALAMAN KERJA (EXPERIENCE)
    // ==========================================
    const experienceData = [
      {
        id: 1,
        monogram: "in",
        logo: "005. Aset Experience/Logo 1.webp",
        gradient: "from-emerald-700 to-green-800",
        role: "Data Management",
        company: "InFruity",
        period: "Feb 2025 - Sekarang",
        achievements: [
          "Merancang dan mengimplementasikan sistem pengajian terpusat dengan mengintegrasikan hingga 10 sumber data secara otomatis, sehingga berhasil memangkas 83% waktu pemrosesan gaji mingguan dari 3 jam menjadi 30 menit menggunakan Google Sheets dan Google Form.",
          "Mendesain ulang proses distribusi slip gaji dari metode manual melalui WhatsApp menjadi sistem otomatis berbasis persetujuan menggunakan Google Sheets, sehingga berhasil memangkas 95% dari 1 jam menjadi 5 menit serta meminimalkan risiko kesalahan dalam pengiriman data."
        ],
        tools: [
          { name: "Google Sheet", color: "bg-[#0f9d58]" },
          { name: "Google Apps Script", color: "bg-[#db4437]" },
          { name: "Google Docs", color: "bg-[#4285f4]" },
          { name: "Google Form", color: "bg-[#ab47bc]" },
          { name: "Data Studio", color: "bg-[#4285f4]" }
        ]
      },
      {
        id: 3,
        monogram: "SU",
        logo: "005. Aset Experience/Logo 3.webp",
        gradient: "from-green-600 to-emerald-500",
        role: "Google Sheet Mentor",
        company: "SheetUP Group",
        period: "Des 2024 - Sekarang",
        achievements: [
          "Menjadi mentor utama dalam program pelatihan Google Sheets intensif, membimbing lebih dari 100+ peserta dari kalangan profesional dan mahasiswa dalam menguasai rumus lanjutan, otomasi, dan tata kelola data.",
          "Membimbing peserta dalam merancang solusi otomasi spreadsheet berbasis dunia nyata, membantu menyederhanakan pelaporan bisnis dan alur kerja operasional sehari-hari.",
          "Mengembangkan materi pembelajaran praktis yang berfokus pada visualisasi data interaktif dan otomatisasi alur kerja menggunakan Google Apps Script."
        ],
        tools: [
          { name: "Google Sheet", color: "bg-[#0f9d58]" },
          { name: "Google Apps Script", color: "bg-[#db4437]" },
          { name: "Data Studio", color: "bg-[#4285f4]" }
        ]
      },
      {
        id: 2,
        monogram: "PT",
        logo: "005. Aset Experience/Logo 2.webp",
        gradient: "from-blue-700 to-slate-800",
        role: "Administrator Head Office",
        company: "PT Transcon Indonesia",
        period: "Okt 2022 - Jan 2025",
        achievements: [
          "Merancang dan mengimplementasikan sistem pelaporan otomatis berbasis Google Sheets melalui migrasi data input dan proses pelaporan manual dari Excel yang telah berjalan selama 3 tahun dari 2019 sampai 2022.",
          "Mengotomatisasi klasifikasi data hingga 20 kriteria menggunakan dynamic array di Google Sheets, sehingga data terolah secara mandiri dan mengeliminasi risiko kesalahan klasifikasi manual.",
          "Memangkas 80% waktu pengerjaan laporan harian dari 6 jam menjadi instan, sehingga ketersediaan data dapat digunakan secara instan lintas departemen untuk mendukung pengambilan keputusan.",
          "Mengurangi waktu lembur hingga 120 jam per bulan tim monitoring dan operasional melalui otomatis integrasi data lintas departemen, yang berdampak menurunkan biaya operasional perusahaan.",
          "Mentransformasi tata kelola penyimpanan data berbasis Excel lokal yang tersebar di berbagai folder ke sistem sumber data terpusat menggunakan Google Sheets sehingga menghilangkan risiko penggunaan sumber data yang tidak terbarui."
        ],
        tools: [
          { name: "Google Sheet", color: "bg-[#0f9d58]" },
          { name: "Google Docs", color: "bg-[#4285f4]" },
          { name: "Google Slide", color: "bg-[#f4b400]" },
          { name: "Data Studio", color: "bg-[#4285f4]" },
          { name: "Google Apps Script", color: "bg-[#db4437]" },
          { name: "Microsoft Excel", color: "bg-[#0f9d58]" }
        ]
      }
    ];

    // ==========================================
    // DATA KURSUS & PELATIHAN (COURSES)
    // ==========================================
    const coursesData = [
      {
        id: 1,
        title: "Data Science : Machine Learning",
        issuer: "Rakamin",
        date: "",
        logo: "006. Aset Ceritificate/Rakamin Academy.webp",
        file: "006. Aset Ceritificate/001. Data Science Machine Learning.webp"
      },
      {
        id: 2,
        title: "Basic Python Programming & Python for Software Engineering",
        issuer: "Pacmann",
        date: "",
        logo: "006. Aset Ceritificate/Pacmann Academy.webp",
        file: "006. Aset Ceritificate/005. Basic Python Pragramiming & Python For Software Engineering.webp"
      },
      {
        id: 3,
        title: "Spreadsheet Mastery",
        issuer: "Pacmann",
        date: "",
        logo: "006. Aset Ceritificate/Pacmann Academy.webp",
        file: "006. Aset Ceritificate/004. SpreadSheet Mastery.webp"
      },
      {
        id: 4,
        title: "Google Data Studio",
        issuer: "Myskill",
        date: "",
        logo: "006. Aset Ceritificate/MySkill.webp",
        file: "006. Aset Ceritificate/002. Google Looker Studio.webp"
      },
      {
        id: 5,
        title: "Microsoft Excel Advanced",
        issuer: "Myskill",
        date: "",
        logo: "006. Aset Ceritificate/MySkill.webp",
        file: "006. Aset Ceritificate/003. Microsoft Excel Advanced.webp"
      },
      {
        id: 6,
        title: "SQL 101: Belajar SQL dari Nol",
        issuer: "Ngulik Data",
        date: "",
        logo: "006. Aset Ceritificate/Ngulik Data.webp",
        file: "006. Aset Ceritificate/006. SQL 101 Belajar SQL dari Nol.webp"
      }
    ];

    // ==========================================
    // DATA PROYEK (PROJECTS)
    // ==========================================
    const projectsData = [
      {
        id: 1,
        title: "Multi-Outlet Store Performance Dashboard & Automated Data Consolidation (Doyan Ayam)",
        category: "Data Visualization",
        image: "010. Projects/Project 1.0.webp",
        images: [
          {
            url: "010. Projects/Project 1.0.webp",
            title: "Dashboard Store Overview Performance",
            desc: "Dashboard interaktif memantau target revenue harian, biaya operasional, rating kebersihan, dan ringkasan material terpakai."
          },
          {
            url: "010. Projects/Project 1.1.webp",
            title: "Data Consolidation",
            desc: "Mengintegrasikan dan mengonsolidasikan data dari 88 cabang ke dalam satu sumber data terpusat secara real-time untuk kebutuhan monitoring dan pelaporan yang lebih cepat"
          }
        ],
        description: "Doyan Ayam mengoperasikan lebih dari 88 outlet yang setiap harinya melaporkan data operasional melalui Google Forms.\n\nData yang dikirim oleh masing-masing outlet akan masuk ke Google Sheets dan digunakan sebagai dasar pemantauan performa operasional, penjualan, serta berbagai indikator bisnis lainnya.\n\nSeiring bertambahnya jumlah outlet dan volume data yang diterima setiap hari, proses pengelolaan data menjadi semakin kompleks dan membutuhkan upaya administratif yang signifikan sebelum informasi dapat digunakan untuk pelaporan dan analisis.",
        challenge: "Sebelum sistem dikembangkan, seluruh data yang masuk dari Google Forms harus dikonsolidasikan secara manual ke dalam database utama yang digunakan sebagai sumber pelaporan.\n\nProses tersebut mencakup:",
        challengePoints: [
          "Menyalin data dari sumber input ke database terpusat.",
          "Memastikan data dari seluruh outlet berhasil terkonsolidasi dengan benar.",
          "Melakukan standarisasi data akibat perbedaan format input yang dilakukan oleh pengguna, seperti penulisan satuan kg, KG, Kg, kilogram, serta berbagai variasi format lainnya.",
          "Memperbarui formula dan perhitungan akumulasi data secara manual setiap kali terdapat data baru."
        ],
        challengeFooter: "Dengan jumlah outlet yang mencapai 88 cabang, proses konsolidasi data membutuhkan sekitar 1–2 jam per hari dalam kondisi normal dan dapat memakan waktu lebih lama ketika ditemukan ketidakkonsistenan data atau kesalahan input.\n\nSelain memperlambat proses pelaporan, pendekatan ini juga meningkatkan risiko kesalahan akibat aktivitas manual yang dilakukan secara berulang.",
        solution: "Saya merancang sistem konsolidasi data otomatis menggunakan kombinasi Google Sheets, Apps Script, dan formula lanjutan untuk menghilangkan proses pengolahan data manual yang berulang.\n\nSistem ini secara otomatis:",
        solutionPoints: [
          "Menggabungkan data dari seluruh outlet ke dalam database terpusat.",
          "Melakukan standarisasi format data berdasarkan aturan yang telah ditentukan.",
          "Menghilangkan kebutuhan copy-paste data secara manual.",
          "Memperbarui perhitungan akumulasi dan indikator operasional secara otomatis ketika data baru masuk.",
          "Menyediakan sumber data yang siap digunakan untuk dashboard performa multi-outlet."
        ],
        solutionFooter: "Selain itu, saya mengembangkan mekanisme sinkronisasi otomatis menggunakan Apps Script sehingga outlet baru dapat langsung terhubung ke proses konsolidasi data tanpa memerlukan penyesuaian formula atau konfigurasi manual.\n\nDalam proses pengembangan, saya juga memanfaatkan formula lanjutan Google Sheets untuk menangani kebutuhan transformasi data yang tidak terstandarisasi.",
        achievements: [
          "Mengurangi waktu konsolidasi data harian dari 1–2 jam menjadi proses yang berjalan secara otomatis (lebih dari 80% lebih cepat).",
          "Menghemat sekitar 26–52 jam kerja administratif per bulan yang sebelumnya digunakan untuk aktivitas konsolidasi data manual.",
          "Menghilangkan kebutuhan copy-paste data dari sumber input ke database utama.",
          "Meningkatkan konsistensi data melalui standarisasi format input dari 88+ outlet.",
          "Memungkinkan penambahan outlet baru tanpa memerlukan penyesuaian formula atau proses konsolidasi manual.",
          "Menyediakan data yang siap digunakan untuk pemantauan performa outlet secara lebih cepat dan real-time."
        ],
        tech: ["Google Sheet", "Data Studio", "Apps Script"],
        confidential: true,
        link: "https://datastudio.google.com/reporting/b90cce9a-7115-4f64-9874-7c4676f7c5c0"
      },
      {
        id: 2,
        title: "Personal Finance\nTracking System",
        category: "Data Management",
        date: "Maret 2026",
        image: "010. Projects/Project 2.0.webp",
        images: [
          {
            url: "010. Projects/Project 2.1.webp",
            title: "Total Wealth & Wealth Breakdown",
            desc: "Menampilkan total kekayaan bersih beserta rincian saldo di setiap rekening bank dan dompet digital. Cukup buka satu halaman ini untuk tahu kondisi keuangan secara keseluruhan, tanpa perlu cek satu per satu aplikasi."
          },
          {
            url: "010. Projects/Project 2.2.webp",
            title: "Transaction Log",
            desc: "Tempat mencatat semua uang masuk dan keluar, mulai dari gaji bulanan, transfer antar-rekening, sampai pengeluaran harian. Setiap transaksi langsung terkategorisasi, jadi tidak ada lagi yang namanya lupa catat."
          },
          {
            url: "010. Projects/Project 2.3.webp",
            title: "Budgeting Plan",
            desc: "Di awal bulan, tentukan dulu berapa yang mau dialokasikan untuk setiap kebutuhan. Sistem akan langsung menghitung estimasi sisa saldo di akhir bulan, jadi Anda sudah tahu apakah bulan ini bisa menabung atau perlu mengatur ulang prioritas."
          },
          {
            url: "010. Projects/Project 2.4.webp",
            title: "Monthly Cashflow Movement",
            desc: "Grafik yang menunjukkan perbandingan pemasukan dan pengeluaran dari Januari sampai Desember. Dari sini langsung kelihatan bulan mana yang paling boros dan bulan mana yang paling bisa diandalkan untuk menabung."
          },
          {
            url: "010. Projects/Project 2.5.webp",
            title: "Allocation vs Realization Report",
            desc: "Membandingkan anggaran yang sudah direncanakan dengan pengeluaran yang benar-benar terjadi. Kalau ada pos yang over budget, langsung ketahuan di sini, jadi bisa segera disesuaikan untuk bulan berikutnya."
          }
        ],
        description: "Template keuangan pribadi yang dirancang untuk membantu pengguna mengelola kondisi finansial secara lebih terstruktur melalui fitur budgeting, pencatatan pemasukan dan pengeluaran, pemantauan saldo, serta laporan keuangan bulanan yang memberikan gambaran menyeluruh mengenai arus kas dan kebiasaan pengeluaran.",
        achievements: [
          "Mentransformasi pengelolaan keuangan dari yang sebelumnya tidak memiliki dokumentasi finansial menjadi sistem terstruktur menggunakan Google Sheets, sehingga seluruh arus kas masuk dan keluar dapat terpantau secara sistematis.",
          "Mempersingkat waktu identifikasi penyimpangan pengeluaran dari akhir bulan menjadi real-time melalui implementasi fitur perbandingan alokasi vs realisasi anggaran per kategori secara otomatis, sehingga treatment terhadap masalah keuangan lebih tepat sasaran dan berbasis data."
        ],
        tech: ["Google Sheet", "Apps Script"],
        confidential: false,
        link: "https://docs.google.com/spreadsheets/d/1GhEIaF38MyzfLFoHGfjI4qN_FBenZyRZzIwmq5FFDQ0/edit?usp=sharing"
      },
      {
        id: 3,
        title: "Operational Data Transformation System",
        category: "Data Management",
        date: "Januari 2025",
        image: "010. Projects/Project 3.0.webp",
        images: [
          {
            url: "010. Projects/Project 3.0.webp",
            title: "Centralized Operational Reporting Hub",
            desc: "Sistem pelaporan terpusat yang menghubungkan 42 laporan operasional ke dalam satu sumber informasi terintegrasi, memungkinkan akses data real-time dan mendukung pengambilan keputusan yang lebih cepat dan konsisten."
          }
        ],
        description: "Ketika bergabung dengan perusahaan pada Oktober 2023, saya menemukan bahwa proses pelaporan operasional yang telah digunakan selama lebih dari 8 tahun masih bergantung pada pengelolaan dan distribusi file laporan secara manual.\n\nDalam praktiknya, setiap perubahan data mengharuskan staf mengunduh, memperbarui, lalu mengirim ulang laporan melalui email atau aplikasi pesan kepada berbagai stakeholder. Seiring bertambahnya volume data dan jumlah pengguna, proses ini mulai menciptakan berbagai hambatan operasional yang berdampak pada kecepatan akses informasi dan kualitas pengambilan keputusan.\n\nMelihat kondisi tersebut, saya menginisiasi pengembangan sistem pelaporan terpusat yang memungkinkan seluruh stakeholder mengakses data terbaru secara real-time dari satu sumber informasi yang terintegrasi.",
        challenge: "Sebelum sistem ini dikembangkan, proses pelaporan operasional yang telah digunakan selama lebih dari 8 tahun masih mengandalkan pengelolaan dan distribusi laporan secara manual.\n\nPada awal implementasinya, jumlah laporan operasional masih terbatas sehingga proses kerja dapat berjalan dengan baik. Namun, seiring berkembangnya kebutuhan bisnis, jumlah laporan terus bertambah hingga mencapai 42 file laporan operasional dengan tujuan dan kebutuhan yang berbeda.\n\nPertumbuhan jumlah laporan tersebut meningkatkan kompleksitas pengelolaan data dan memunculkan beberapa tantangan:",
        challengePoints: [
          "Setiap pembaruan data mengharuskan staf memperbarui dan membagikan ulang laporan kepada stakeholder terkait.",
          "Stakeholder perlu memastikan secara mandiri bahwa laporan yang digunakan merupakan versi terbaru.",
          "File laporan tersebar di berbagai folder penyimpanan, sehingga versi data yang paling mutakhir dapat berada pada admin yang berbeda."
        ],
        challengeFooter: "Pada saat yang sama, sekitar 10 stakeholder internal, termasuk admin cabang, admin pusat, supervisor, dan manajemen, membutuhkan akses terhadap informasi yang akurat dan konsisten untuk mendukung aktivitas operasional serta pengambilan keputusan.",
        solution: "Saya merancang dan mengimplementasikan sistem pelaporan terpusat menggunakan Google Sheets sebagai platform kolaborasi berbasis cloud.\n\nLebih dari 42 sumber data operasional dihubungkan ke dalam satu struktur pelaporan yang terorganisir dan saling terintegrasi. Sistem ini memungkinkan pembaruan data dilakukan satu kali dan langsung tersedia bagi seluruh stakeholder yang memiliki akses.\n\nDengan pendekatan ini, laporan tidak lagi bergantung pada proses pengiriman file secara manual, sehingga setiap pengguna dapat mengakses informasi yang sama secara real-time dari satu sumber data yang konsisten.",
        achievements: [
          "Mengintegrasikan 42 file laporan operasional ke dalam satu pusat informasi terintegrasi.",
          "Menyediakan akses data real-time bagi sekitar 10 stakeholder internal, termasuk admin cabang, admin pusat, supervisor cabang, dan manajemen.",
          "Mengurangi ketergantungan pada proses distribusi laporan melalui email dan aplikasi pesan.",
          "Meminimalkan risiko penggunaan file atau laporan yang tidak terbaru.",
          "Mendukung pengambilan keputusan yang lebih cepat melalui akses informasi yang lebih akurat dan terkini."
        ],
        tech: ["Google Sheet", "Data Studio", "Apps Script"],
        confidential: true,
        comingSoon: false,
        link: "#"
      },
      {
        id: 4,
        title: "Outbound Performance Reporting Automation",
        category: "Automation",
        date: "Maret 2025",
        image: "010. Projects/Project 4.0.webp",
        images: [
          {
            url: "010. Projects/Project 4.0.webp",
            title: "Outbound Performance Dashboard",
            desc: "Sistem pelaporan otomatis turnaround time (TAT) operasional outbound berdasarkan integrasi data dan validasi aktivitas secara real-time."
          },
          {
            url: "010. Projects/Project 4.1.webp",
            title: "Operational Turnaround Time (TAT) Analysis",
            desc: "Visualisasi dan analisis turnaround time (TAT) check-in, check-out, serta proses pengambilan barang."
          },
          {
            url: "010. Projects/Project 4.2.webp",
            title: "CCTV Validation & Data Reconciliation",
            desc: "Validasi aktivitas aktual berdasarkan rekaman CCTV yang disinkronkan dengan data sistem."
          },
          {
            url: "010. Projects/Project 4.3.webp",
            title: "Automated Classification & Performance Metrics",
            desc: "Klasifikasi indikator kinerja otomatis seperti ST Preload, ST Loading Time, ST Checked, dan Turnaround Time."
          },
          {
            url: "010. Projects/Project 4.4.webp",
            title: "Efficiency & Operational Cost Savings",
            desc: "Dasbor pemantauan efisiensi waktu kerja dan penghematan biaya lembur operasional harian."
          }
        ],
        description: "Saat bergabung dengan perusahaan pada Oktober 2023 sebagai Administrator Head Office di divisi operasional, salah satu tanggung jawab saya adalah menyediakan informasi yang akurat dan tepat waktu untuk mendukung pemantauan kinerja tim operasional di setiap cabang.\n\nSalah satu kebutuhan utama tim operasional & manajemen adalah laporan performa outbound yang mengukur kesesuaian antara aktivitas yang tercatat di sistem dengan kondisi aktual berdasarkan validasi CCTV yang dilakukan oleh tim IT Support.\n\nLaporan ini digunakan untuk memantau turnaround time (TAT) pada setiap tahapan proses operasional, mulai dari check-in, proses pengambilan barang, hingga check-out.\n\nKarena laporan operasional yang saya kelola bergantung data dari tim monitoring, keterlambatan proses pengolahan data sering kali berdampak langsung pada penyelesaian laporan di tim operasional.",
        challenge: "Proses validasi data outbound mengandalkan kombinasi data hasil ekstraksi sistem dan verifikasi manual melalui rekaman CCTV.\n\nSetiap hari, tim IT Support memproses sekitar 250 transaksi harian dengan membandingkan waktu aktual dan data yang tercatat di sistem untuk beberapa cabang operasional.\n\nSebelum sistem dikembangkan, seluruh proses klasifikasi dan perhitungan indikator operasional dilakukan secara manual setelah proses validasi selesai, termasuk:",
        challengePoints: [
          "Perhitungan durasi pada setiap tahapan proses operasional.",
          "Penyesuaian rest time berdasarkan aturan operasional yang memengaruhi perhitungan durasi pada setiap tahapan proses.",
          "Klasifikasi indikator kinerja seperti ST Preload, ST Loading Time, ST Checked, dan Turnaround Time (TAT)."
        ],
        challengeFooter: "Seiring ekspansi operasional dari tiga menjadi empat cabang, proses ini membutuhkan waktu sekitar 4–6 jam per hari, sehingga laporan operasional baru dapat diselesaikan pada malam hari dan memperpanjang waktu kerja.\n\nSelain itu, aturan perhitungan dan klasifikasi belum terdokumentasi secara sistematis sehingga diperlukan diskusi intensif dengan berbagai pihak untuk memahami indikator, menentukan sumber data acuan, dan mengidentifikasi pola data yang dapat diotomatisasi.",
        solution: "Saya menginisiasi kolaborasi lintas divisi dengan tim IT Support untuk memetakan aturan bisnis dan mengidentifikasi pola data yang berulang dalam proses validasi operasional.\n\nMelalui serangkaian diskusi dan analisis data historis, saya mengidentifikasi hidden patterns dalam data serta menentukan sumber informasi yang digunakan sebagai acuan perhitungan setiap indikator operasional.\n\nSelanjutnya, saya menerjemahkan aturan bisnis tersebut ke dalam logika otomatisasi menggunakan Google Sheets melalui kombinasi formula dinamis seperti ARRAYFORMULA dan nested IF.\n\nSistem ini mengintegrasikan proses perhitungan dan klasifikasi ke dalam satu alur kerja terstandarisasi, termasuk penghitungan durasi setiap tahapan operasional, penyesuaian rest time, serta klasifikasi indikator kinerja seperti ST Preload, ST Loading Time, ST Checked, dan TAT Include Rest.\n\nDengan pendekatan ini, seluruh metrik utama dihitung secara otomatis setelah proses data entry oleh tim IT Support selesai dilakukan, sehingga proses klasifikasi manual tidak lagi diperlukan.",
        achievements: [
          "Mengurangi waktu penyelesaian laporan operasional dari 4–6 jam per hari menjadi kurang dari 30 menit.",
          "Menghilangkan kebutuhan lembur harian yang sebelumnya mencapai 30–40 jam per minggu untuk dua personel.",
          "Menghasilkan estimasi efisiensi biaya operasional sebesar Rp2,26–Rp2,78 juta per bulan melalui eliminasi biaya lembur dan uang makan."
        ],
        tech: ["Google Sheet", "Apps Script"],
        confidential: false,
        isDummy: true,
        comingSoon: false,
        link: "#"
      },
      {
        id: 5,
        title: "Accounting Ledger\nAutomation System",
        category: "Automation",
        date: "April 2025",
        image: "010. Projects/Project 5.0.webp",
        images: [{ url: "010. Projects/Project 5.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Google Sheet"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 6,
        title: "Integrated Outbound\nReporting System",
        category: "Data Management",
        date: "Mei 2025",
        image: "010. Projects/Project 6.0.webp",
        images: [{ url: "010. Projects/Project 6.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Apps Script"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 7,
        title: "Integrated Payroll\nAutomation System",
        category: "Data Visualization",
        date: "Juni 2025",
        image: "010. Projects/Project 7.0.webp",
        images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Data Studio"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 8,
        title: "Attendance Processing\nAutomation System",
        category: "Automation",
        date: "Juli 2025",
        image: "010. Projects/Project 8.0.webp",
        images: [{ url: "010. Projects/Project 8.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Google Sheet"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 9,
        title: "SOP and Culture\nPenalty Point System",
        category: "Data Management",
        date: "Agustus 2025",
        image: "010. Projects/Project 7.0.webp",
        images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Apps Script"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      /* -- DUMMY PROJECTS HIDDEN FOR NOW --
      {
        id: 10,
        title: "Project Baru 6",
        category: "Data Visualization",
        date: "September 2025",
        image: "010. Projects/Project 8.0.webp",
        images: [{ url: "010. Projects/Project 8.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Data Studio"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 11,
        title: "Project Baru 7",
        category: "Automation",
        date: "Oktober 2025",
        image: "010. Projects/Project 7.0.webp",
        images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Google Sheet"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 12,
        title: "Project Baru 8",
        category: "Data Management",
        date: "November 2025",
        image: "010. Projects/Project 8.0.webp",
        images: [{ url: "010. Projects/Project 8.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Apps Script"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 13,
        title: "Project Baru 9",
        category: "Data Visualization",
        date: "Desember 2025",
        image: "010. Projects/Project 7.0.webp",
        images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Data Studio"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      },
      {
        id: 14,
        title: "Project Baru 10",
        category: "Automation",
        date: "Januari 2026",
        image: "010. Projects/Project 8.0.webp",
        images: [{ url: "010. Projects/Project 8.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan" }],
        description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
        achievements: ["Sedang dalam proses dokumentasi."],
        tech: ["Google Sheet"],
        confidential: false,
        isDummy: true,
        comingSoon: true,
        link: "#"
      }
      */
    ];

    // ==========================================
    // DATA AKTIVITAS & MOMEN (ACTIVITIES)
    // ==========================================
    const activitiesData = [
      {
        id: 1,
        title: "Google Sheets Mentoring",
        date: "Maret 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 1.webp",
        description: "Pendampingan pembelajaran Google Sheets mulai dari konsep dasar hingga pengolahan data tingkat menengah untuk meningkatkan efisiensi pekerjaan administrasi sehari-hari."
      },
      {
        id: 2,
        title: "Google Sheets Mentoring",
        date: "Juni 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 2.webp",
        description: "Membimbing Staff R&D perusahaan flavour and Staff Kementerian Agama dalam memahami pengolahan data, formula, serta praktik penggunaan Google Sheets untuk kebutuhan kerja."
      },
      {
        id: 3,
        title: "Google Sheets Mentoring",
        date: "Juni 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 3.webp",
        description: "Pendampingan penggunaan Google Sheets untuk pengelolaan data yang lebih terstruktur, efisien, dan mudah dianalisis dalam aktivitas operasional harian."
      },
      {
        id: 4,
        title: "Final Project Mentoring",
        date: "Oktober 2025",
        location: "Gresik",
        category: "Project",
        image: "008. Activity & Moment/Gallery 4.webp",
        description: "Memberikan arahan dan konsultasi dalam penyelesaian proyek akhir pengembangan sistem kerja untuk Staff R&D perusahaan flavour di Gresik."
      },
      {
        id: 5,
        title: "Data Structure Consultation",
        date: "Juni 2025",
        location: "Gresik",
        category: "Consultation",
        image: "008. Activity & Moment/Gallery 5.webp",
        description: "Membantu melakukan evaluasi dan perbaikan struktur data agar lebih rapi, konsisten, dan siap digunakan untuk kebutuhan analisis maupun pelaporan."
      },
      {
        id: 6,
        title: "Google Sheets Mentoring",
        date: "Juli 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 6.webp",
        description: "Pendampingan penggunaan Google Sheets untuk mendukung pengelolaan data SDM, administrasi, dan proses pelaporan yang lebih efektif."
      },
      {
        id: 7,
        title: "Data Structure Consultation",
        date: "Agustus 2025",
        location: "Gresik",
        category: "Consultation",
        image: "008. Activity & Moment/Gallery 7.webp",
        description: "Diskusi dan pendampingan dalam menyusun struktur data yang lebih terorganisir guna mendukung kebutuhan operasional dan pengolahan informasi."
      },
      {
        id: 8,
        title: "Google Sheets Mentoring",
        date: "September 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 8.webp",
        description: "Pendampingan intensif mulai dari formula dasar hingga teknik lanjutan Google Sheets untuk mendukung automasi dan pengelolaan data yang lebih optimal."
      },
      {
        id: 9,
        title: "Google Sheets Mentoring",
        date: "Juni 2025",
        location: "Gresik",
        category: "Mentoring",
        image: "008. Activity & Moment/Gallery 9.webp",
        description: "Pembelajaran Google Sheets secara komprehensif mulai dari pengolahan data dasar, analisis, hingga penerapan fungsi lanjutan untuk kebutuhan riset dan pengembangan."
      },
      {
        id: 10,
        title: "Data Structure Consultation",
        date: "Desember 2025",
        location: "Gresik",
        category: "Consultation",
        image: "008. Activity & Moment/Gallery 10.webp",
        description: "Membantu mengevaluasi dan menyusun struktur data yang lebih efektif guna meningkatkan kualitas pengelolaan informasi dan proses administrasi SDM."
      },
      {
        id: 11,
        title: "Guest Speaker: Data-Driven Mindset",
        date: "Januari 2026",
        location: "Gresik",
        category: "Speaker",
        image: "008. Activity & Moment/Gallery 11.webp",
        description: "Berbagi wawasan tentang pentingnya data dalam mendukung pengambilan keputusan yang lebih objektif, terukur, dan berdampak melalui sesi \"Data-Driven Mindset\" yang diselenggarakan oleh UKM Kependudukan Universitas Muhammadiyah Gresik."
      },
      {
        id: 12,
        title: "Operational Site Visit – PLB Gresik",
        date: "Februari 2026",
        location: "Gresik",
        category: "Visit",
        image: "008. Activity & Moment/Gallery 12.webp",
        description: "Melakukan kunjungan operasional ke PLB Cabang Gresik untuk memahami proses bisnis, alur kerja, dan kebutuhan data sebagai dasar pengembangan solusi berbasis data."
      }
    ];

    // ==========================================
    // FUNGSI HELPER UNTUK ACTION BUTTON STANDAR
    // ==========================================
    const renderActionButton = (text, onClick, actualTheme, theme) => {
      const textClass = actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight;
      return React.createElement("button", {
        onClick: onClick,
        className: `inline-flex items-center gap-2 font-bold text-sm hover:underline transition-all ${textClass} py-3 px-4 mt-2 sm:mt-4`
      }, 
        text,
        React.createElement(ArrowRight, { size: 14 })
      );
    };


    // ==========================================
    // FUNGSI HELPER UNTUK ACCENT TEXT (GOOGLE GRADIENT)
    // ==========================================
    const renderAccentSpan = (text, actualTheme, theme, activePalette) => {
      return React.createElement("span", {
        className: actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight
      }, text);
    };

    // ==========================================
    // 2. KOMPONEN NAVBAR
    // ==========================================
    const Navbar = ({ actualTheme, theme, isMobileView, toggleTheme, activePalette, setActivePalette, activeSection, setActiveSection, setActiveResumeTab }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [showColorPicker, setShowColorPicker] = useState(false);
      const mobileMenuRef = useRef(null);
      const colorPickerRef = useRef(null);
      const isCreatorMode = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('demo') === 'true' : false;

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setIsMobileMenuOpen(false);
          }
          if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
            setShowColorPicker(false);
          }
        };
        // Menambahkan touchstart agar responsif di layar sentuh perangkat mobile
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('touchstart', handleClickOutside);
        };
      }, []);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [isMobileMenuOpen]);

      // --- Escape Key ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [isMobileMenuOpen]);

      const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (setActiveSection) setActiveSection(item);
        if (['Education', 'Experience', 'Skills'].includes(item)) {
          if (setActiveResumeTab) {
            setActiveResumeTab(item === 'Skills' ? 'skills' : item.toLowerCase());
          }
        }
        const targetId = ['education', 'experience', 'skills'].includes(item.toLowerCase())
          ? 'resume'
          : (item === 'Gallery' ? 'activities' : item.toLowerCase());
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      // Menambahkan efek glassmorphism dan posisi fixed agar sticky & full width
      const navbarBgClass = actualTheme === 'dark'
        ? `${theme.darkBg.replace('bg-', 'bg-').replace(']', ']/80')} backdrop-blur-md border-b border-white/5`
        : 'bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50';

      // Menambahkan 'Courses', 'Gallery', & 'Contact' ke dalam daftar menu navigasi
      const navLinks = ['Home', 'About', 'Projects', 'Education', 'Experience', 'Skills', 'Courses', 'Gallery', 'Contact'];

      return (
        React.createElement("nav", { className: `fixed top-0 w-full z-50 transition-colors duration-300 ${navbarBgClass}` },

          // --- Efek Latar Belakang (Backdrop) saat menu mobile terbuka ---
          isMobileView && React.createElement("div", {
            className: `absolute top-0 left-0 w-full h-[1500px] bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
            onClick: () => setIsMobileMenuOpen(false)
          }),

          // --- Sidebar Menu Mobile yang meluncur dari kiri ---
          isMobileView && React.createElement("div", {
            className: `absolute top-0 left-0 w-[260px] h-[1500px] z-50 transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} ${actualTheme === 'dark' ? `${theme.darkBg} border-r border-white/10` : 'bg-slate-50 border-r border-slate-200'}`
          },
            // Header Sidebar (Judul Menu & Tombol Silang)
            React.createElement("div", { className: `px-6 h-[72px] flex items-center justify-between border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
              React.createElement("div", { className: "text-xl font-bold tracking-wide" },
                React.createElement("span", { className: actualTheme === 'dark' ? 'text-white' : 'text-slate-900' }, "Menu")
              ),
              React.createElement("button", {
                onClick: () => setIsMobileMenuOpen(false),
                className: `w-9 h-9 rounded-full flex items-center justify-center transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-slate-200 text-slate-500'}`
              }, React.createElement(X, { size: 20 }))
            ),
            // Daftar Tautan Sidebar
            React.createElement("div", { className: "flex flex-col gap-2 p-4" },
              navLinks.map((item) => {
                const targetId = ['education', 'experience', 'skills'].includes(item.toLowerCase())
                  ? 'resume'
                  : (item === 'Gallery' ? 'activities' : item.toLowerCase());
                return React.createElement("a", {
                  key: item,
                  href: `#${targetId}`,
                  onClick: (e) => handleNavClick(e, item),
                  className: item === activeSection
                    ? `px-4 py-3 rounded-xl text-base font-bold transition-colors ${actualTheme === 'dark' ? `${theme.darkElement} text-white` : 'bg-slate-200 text-slate-900'}`
                    : `px-4 py-3 rounded-xl text-base font-medium transition-colors ${actualTheme === 'dark' ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
                }, item);
              })
            )
          ),

          // --- Navbar Utama ---
          React.createElement("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10" },
            isMobileView ? (
              React.createElement("button", {
                onClick: () => setIsMobileMenuOpen(true),
                title: "Menu",
                className: `w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-300` : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`
              }, React.createElement(Menu, { size: 20 }))
            ) : (
              React.createElement("div", { className: "text-2xl font-bold tracking-wide transition-all shrink-0" },
                React.createElement("span", { className: actualTheme === 'dark' ? 'text-white' : 'text-slate-900' }, "Achmad "),
                renderAccentSpan("Noorman", actualTheme, theme, activePalette)
              )
            ),

            React.createElement("div", { className: `${isMobileView ? 'hidden' : 'hidden md:flex'} items-center gap-1 lg:gap-2 text-sm font-medium ml-auto mr-4 ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
              navLinks.map((item) => {
                const targetId = ['education', 'experience', 'skills'].includes(item.toLowerCase())
                  ? 'resume'
                  : (item === 'Gallery' ? 'activities' : item.toLowerCase());
                const isActive = item === activeSection;
                return React.createElement("a", {
                  key: item,
                  href: `#${targetId}`,
                  onClick: (e) => handleNavClick(e, item),
                  className: `group relative px-2 lg:px-3 py-2 transition-all duration-300 shrink-0 ${
                    isActive
                      ? `font-bold ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}`
                      : `font-medium ${actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`}`
                  }`
                }, 
                  item,
                  React.createElement("span", {
                    className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'} ${
                      actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')
                    }`
                  })
                );
              })
            ),

            React.createElement("div", { className: "flex items-center gap-3 sm:gap-4 ml-auto sm:ml-0" },
              // Theme Color Picker Dropdown (Shows the active chosen theme, click to open dropdown with other choices)
              isCreatorMode && React.createElement("div", { className: "relative", ref: colorPickerRef },
                React.createElement("button", {
                  onClick: () => setShowColorPicker(!showColorPicker),
                  title: `Warna Tema: ${activePalette.charAt(0).toUpperCase() + activePalette.slice(1)}`,
                  className: `w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ring-2 ring-offset-2 ${actualTheme === 'dark' ? 'ring-slate-700 hover:ring-slate-500' : 'ring-slate-300 hover:ring-slate-400'}`,
                  style: activePalette === 'google' 
                    ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                    : { backgroundColor: paletteColors[activePalette] }
                }),
                
                showColorPicker && React.createElement("div", {
                  className: `absolute top-full mt-2 right-1/2 translate-x-1/2 p-2 rounded-xl shadow-xl flex gap-1.5 sm:gap-2 z-50 border transition-all ${
                    actualTheme === 'dark' ? `${theme.darkCard} border-white/10` : 'bg-white border-slate-200'
                  }`
                },
                  Object.keys(colorSchemes).map(key => (
                    React.createElement("button", {
                      key: key,
                      onClick: () => {
                        setActivePalette(key);
                        setShowColorPicker(false);
                      },
                      title: key.charAt(0).toUpperCase() + key.slice(1),
                      className: `w-6 h-6 rounded-full transition-transform hover:scale-110 ${activePalette === key ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-300' : 'opacity-70 hover:opacity-100'}`,
                      style: key === 'google' 
                        ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                        : { backgroundColor: paletteColors[key] }
                    })
                  ))
                )
              ),
              // Dark / Light Mode Toggle Button
              React.createElement("button", {
                onClick: () => toggleTheme(),
                title: actualTheme === 'dark' ? 'Light Mode' : 'Dark Mode',
                className: `w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-300` : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`
              }, actualTheme === 'dark' ? React.createElement(Sun, { size: 16 }) : React.createElement(Moon, { size: 16 }))
            )
          )
        )
      );
    };

    // ==========================================
    // 3. KOMPONEN HERO SECTION
    // ==========================================
    
    // ==========================================
    
const HeroSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [isFlipped, setIsFlipped] = React.useState(false);
      const [isCardHovered, setIsCardHovered] = React.useState(false);

      const glowColorMap = {
        purple: 'rgba(155, 147, 255, 0.35)',
        emerald: 'rgba(52, 211, 153, 0.35)',
        ocean: 'rgba(96, 165, 250, 0.35)',
        rose: 'rgba(251, 113, 133, 0.35)',
        google: 'rgba(66, 133, 244, 0.35)'
      };

      const borderGlowColorMap = {
        purple: '#9b93ff',
        emerald: '#34d399',
        ocean: '#60a5fa',
        rose: '#fb7185',
        google: '#4285F4'
      };

      const activeGlowColor = glowColorMap[activePalette] || 'rgba(155, 147, 255, 0.35)';

      return (
        React.createElement("main", { className: `scroll-mt-24 grid items-center w-full ${isMobileView ? 'mt-0 grid-cols-1 gap-6 pb-12' : 'mt-0 min-h-[calc(100vh-120px)] grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'}` },
          React.createElement("div", { className: `relative z-10 flex flex-col justify-center ${isMobileView ? 'order-last space-y-2' : 'order-last lg:order-first space-y-5 lg:space-y-6'}` },
            React.createElement("div", { className: `flex items-center gap-2.5 text-sm font-medium ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
              React.createElement("img", {
                src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg",
                alt: "Location",
                className: "w-5 h-5 drop-shadow-sm"
              }),
              React.createElement("span", null, "Jakarta, Indonesia")
            ),
            React.createElement("div", { className: "space-y-2 sm:space-y-3 w-full overflow-visible" },
              React.createElement("h1", { className: `font-bold tracking-tight leading-[1.1] whitespace-nowrap ${isMobileView ? 'text-[22px]' : 'text-[22px] min-[400px]:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Achmad Noorman Setiawan"),
              activePalette === 'google'
                ? React.createElement("h2", { 
                    className: `font-bold leading-normal whitespace-nowrap bg-clip-text text-transparent pb-0.5 sm:pb-1 ${isMobileView ? 'text-[22px]' : 'text-[22px] min-[400px]:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl'}`,
                    style: { backgroundImage: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)' }
                  }, "Data Analyst")
                : React.createElement("h2", { className: `font-bold leading-normal whitespace-nowrap pb-0.5 sm:pb-1 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} ${isMobileView ? 'text-[22px]' : 'text-[22px] min-[400px]:text-[28px] md:text-4xl lg:text-5xl xl:text-6xl'}` }, "Data Analyst")
            ),
            React.createElement("p", { className: `max-w-lg leading-relaxed ${isMobileView ? 'text-sm mt-0' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
              "Berpengalaman dalam merancang dan membangun otomatisasi pengolahan data bisnis dan individu untuk mempercepat pengambilan keputusan strategis."
            ),
            React.createElement("div", { className: `flex items-center ${isMobileView ? 'flex-nowrap gap-2.5 pt-0 !mt-[20px]' : 'flex-wrap gap-4 pt-4'}` },
              React.createElement("a", { href: "#", className: `font-semibold rounded-full flex items-center justify-center gap-2 transition-colors ${actualTheme === 'dark' ? `${theme.accentBgDark} ${theme.accentHoverDark} text-white` : `${theme.accentBgLight} ${theme.accentHoverLight} text-white`} ${isMobileView ? 'px-4 py-2.5 text-[13px] whitespace-nowrap' : 'px-6 py-3 text-sm'}` },
                React.createElement(Download, { size: isMobileView ? 16 : 18 }),
                "Download CV"
              ),
              React.createElement("div", { className: `flex items-center ${isMobileView ? 'gap-2' : 'gap-3 sm:gap-4'}` },
                React.createElement("a", { href: "https://wa.me/6281230607050", target: "_blank", rel: "noreferrer", title: "WhatsApp", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement("svg", { width: isMobileView ? "16" : "18", height: isMobileView ? "16" : "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    React.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
                  )
                ),
                React.createElement("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", target: "_blank", rel: "noreferrer", title: "Email", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement(Mail, { size: isMobileView ? 16 : 18 })
                ),
                React.createElement("a", { href: "https://www.linkedin.com/in/achmadnoorman/", target: "_blank", rel: "noreferrer", title: "LinkedIn", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement(Linkedin, { size: isMobileView ? 16 : 18 })
                )
              )
            )
          ),
          React.createElement("div", { className: `relative w-full flex justify-center items-start lg:justify-center ${isMobileView ? 'order-first pb-2 pt-0' : 'order-first lg:order-last min-h-[450px] lg:min-h-[550px]'}` },
            
            // Floating Tech Badges (Desktop Only for Premium Feel & Spacing)
            !isMobileView && React.createElement("div", { className: "absolute left-[15%] top-[5%] w-12 h-12 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-1 z-20", title: "Antigravity" },
              React.createElement("img", { src: "001. Aset Hero Section/Logo Antigravity.webp", className: "w-8 h-8 object-contain" })
            ),
            !isMobileView && React.createElement("div", { className: "absolute right-8 top-32 w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-2 z-20", title: "Gemini" },
              React.createElement("img", { src: "002. Aset Software & Tools/Google Gemini.webp", className: "w-9 h-9 object-contain" })
            ),
            !isMobileView && React.createElement("div", { className: "absolute left-10 bottom-16 w-16 h-16 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-3 z-20", title: "Google Developer" },
              React.createElement("img", { src: "002. Aset Software & Tools/Google Developers.svg", className: "w-11 h-11 object-contain" })
            ),

            // Outer Container (Static Swing, Click to Flip)
            React.createElement("div", { 
                className: `relative flex flex-col items-center cursor-pointer ${isMobileView ? 'origin-top -mt-2' : '-mt-10 lg:-mt-16 origin-top'}`,
                onClick: () => setIsFlipped(!isFlipped),
                onMouseEnter: () => setIsCardHovered(true),
                onMouseLeave: () => setIsCardHovered(false)
              },

              // Inner Swing Animation Container
              React.createElement("div", { 
                  className: "relative flex flex-col items-center animate-swing origin-top w-full"
                },
                
                // Lanyard String & Badge Clip
                React.createElement("div", {
                  className: `origin-top w-1.5 border-l-2 border-r-2 border-dashed ${isMobileView ? 'h-8' : 'h-24 lg:h-32'} ${actualTheme === 'dark' ? 'border-gray-500/50 bg-gray-800/20' : 'border-gray-400 bg-gray-200'}`,
                  style: { WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 35%)', maskImage: 'linear-gradient(to bottom, transparent, black 35%)' }
                }),
                React.createElement("div", { className: `rounded-full border-[3px] lg:border-4 bg-transparent shadow-sm z-10 -mt-1.5 ${isMobileView ? 'w-4 h-4 border-gray-400/80' : 'w-5 h-5 border-gray-400/80'}` }),
                React.createElement("div", { className: `bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm z-10 shadow-md -mt-1 ${isMobileView ? 'w-2.5 h-5' : 'w-3 h-6'}` }),
                
                // 3D Card Wrapper
                React.createElement("div", { 
                    className: `mt-[-4px] relative group perspective-[1500px] ${isMobileView ? 'w-[220px] h-[320px]' : 'w-[260px] h-[380px]'}` 
                  },
                  React.createElement("div", {
                       className: "w-full h-full relative transition-transform duration-1000",
                       style: { transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }
                    },
                    
                    // FRONT FACE
                    React.createElement("div", { 
                        className: `absolute inset-0 flex flex-col overflow-hidden shadow-2xl rounded-[1.5rem] border transition-all duration-500 ${actualTheme === 'dark' ? `${theme.darkCard} border-white/10 shadow-black/50` : 'bg-white border-slate-200 shadow-slate-300/50'}`,
                        style: { 
                          backfaceVisibility: 'hidden', 
                          WebkitBackfaceVisibility: 'hidden',
                          boxShadow: '',
                          borderColor: ''
                        }
                      },
                      React.createElement("div", { className: `absolute left-1/2 -translate-x-1/2 rounded-full z-20 shadow-inner ${isMobileView ? 'top-2.5 w-8 h-2' : 'top-3 w-10 h-2.5'} ${actualTheme === 'dark' ? theme.darkBg : 'bg-slate-100'}` }),
                      React.createElement("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" }),
                      React.createElement("div", { className: `flex-1 overflow-hidden relative rounded-xl ${isMobileView ? 'mt-6 mx-3 mb-3' : 'mt-8 mx-4 mb-4'} ${actualTheme === 'dark' ? theme.darkBg : 'bg-slate-100'}` },
                        React.createElement("img", {
                          src: "001. Aset Hero Section/Photo Lanyard.PNG",
                          alt: "Achmad Noorman Setiawan",
                          className: "w-full h-full object-cover object-[56%_18.3%] scale-[3.75] origin-[56%_18.3%]",
                          style: { filter: 'contrast(1.1) saturate(1.1)' },
                          onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'; }
                        }),
                        React.createElement("div", { className: "absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none" })
                      ),
                      React.createElement("div", { className: `text-center z-10 flex flex-col justify-center ${isMobileView ? 'px-3 pb-5' : 'px-4 pb-7'}` },
                        React.createElement("h3", { className: `font-bold tracking-tight leading-none ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "Data Analyst")
                      )
                    ),

                    // BACK FACE (Antigravity Logo)
                    React.createElement("div", { 
                        className: `absolute inset-0 flex flex-col items-center justify-center shadow-2xl rounded-[1.5rem] border transition-all duration-500 ${actualTheme === 'dark' ? `${theme.darkCard} border-white/10 shadow-black/50` : 'bg-slate-50 border-slate-200 shadow-slate-300/50'}`,
                        style: { 
                          backfaceVisibility: 'hidden', 
                          WebkitBackfaceVisibility: 'hidden', 
                          transform: 'rotateY(180deg)',
                          boxShadow: '',
                          borderColor: ''
                        }
                      },
                      React.createElement("div", { className: `absolute left-1/2 -translate-x-1/2 rounded-full z-20 shadow-inner ${isMobileView ? 'top-2.5 w-8 h-2' : 'top-3 w-10 h-2.5'} ${actualTheme === 'dark' ? theme.darkBg : 'bg-slate-200'}` }),
                      
                      // Option 2: Giant Google "G" Silhouette Watermark
                      React.createElement("div", { className: "absolute inset-0 overflow-hidden rounded-[1.5rem] z-0 opacity-[0.12] pointer-events-none flex items-center justify-center p-2" },
                        React.createElement("svg", {
                          viewBox: "0 0 24 24",
                          className: "w-[120%] h-auto max-w-[280px] object-contain translate-x-[2.5%] -translate-y-[2%]",
                          fill: "none"
                        },
                          React.createElement("path", {
                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                            fill: "#4285F4"
                          }),
                          React.createElement("path", {
                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                            fill: "#34A853"
                          }),
                          React.createElement("path", {
                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z",
                            fill: "#FBBC05"
                          }),
                          React.createElement("path", {
                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z",
                            fill: "#EA4335"
                          })
                        )
                      ),

                      
                      // Holographic overlay for the back
                      React.createElement("div", { className: `absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20 pointer-events-none rounded-[1.5rem]` })
                    )
                  )
                )
              )
            )
          )
        )
      );
    };

    // ==========================================
    const AboutSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
      const [isHovered, setIsHovered] = useState(false);
      const cardRef = useRef(null);

      const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
      };

      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      };

      const cardTransform = isHovered
        ? `perspective(1000px) rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg) scale3d(1.02, 1.02, 1.02)`
        : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: `w-full max-w-6xl mx-auto px-6 grid items-center relative z-10 ${isMobileView ? 'grid-cols-1 gap-12' : 'grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'}` },
          React.createElement("div", { className: `relative flex justify-center w-full ${isMobileView ? 'order-first' : ''}` },
            React.createElement("div", { className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] filter blur-[60px] opacity-40 transition-colors duration-500 z-0 ${isMobileView ? 'w-[280px] h-[350px]' : 'w-[320px] h-[400px]'} ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}` }),
            React.createElement("div", {
              ref: cardRef,
              onMouseMove: handleMouseMove,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              className: `relative z-10 flex flex-col items-center overflow-hidden shadow-2xl rounded-[2rem] cursor-pointer ${isMobileView ? 'w-[310px] h-[440px]' : 'w-[360px] h-[520px]'} ${actualTheme === 'dark' ? `${theme.darkCard}` : 'bg-slate-900 shadow-slate-900/50'}`,
              style: {
                transform: cardTransform,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, background-color 0.5s',
              }
            },
              React.createElement("div", {
                className: "absolute inset-0 opacity-[0.15] pointer-events-none overflow-hidden",
                style: {
                  transform: isHovered ? `translateX(${mousePos.x * -30}px) translateY(${mousePos.y * -30}px)` : 'translateX(0px) translateY(0px)',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }
              },
                React.createElement(LineChart, { className: `absolute top-12 left-4 w-16 h-16 -rotate-12 ${actualTheme === 'dark' ? theme.accentTextDark : 'text-slate-400'}` }),
                React.createElement(Monitor, { className: "absolute top-32 -right-6 w-24 h-24 rotate-12 text-white" }),
                React.createElement(Smartphone, { className: "absolute bottom-32 -left-4 w-20 h-20 -rotate-12 text-white" }),
                React.createElement("div", { className: `absolute top-24 right-10 text-6xl font-bold ${actualTheme === 'dark' ? theme.accentTextDark : 'text-slate-400'}` }, "<>"),
                React.createElement("div", { className: "absolute top-6 right-6 text-8xl font-black opacity-30 text-white" }, "G")
              ),
              React.createElement("div", {
                className: "absolute inset-0 w-full h-full z-10 pointer-events-none flex justify-center items-end overflow-hidden rounded-[2rem]"
              },
                React.createElement("img", {
                  src: "003. Aset About Us/Photo 1.PNG",
                  alt: "Achmad Noorman Setiawan",
                  className: "w-full h-full object-cover object-[50%_5%]",
                  style: {
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                    filter: 'contrast(1.1) saturate(1.1)',
                    transform: isHovered 
                      ? `scale(2) translateX(calc(${mousePos.x * 15}px + ${isMobileView ? 4 : 8}px)) translateY(calc(${mousePos.y * 15}px + ${isMobileView ? 68 : 75}px))` 
                      : `scale(2) translateX(${isMobileView ? 4 : 8}px) translateY(${isMobileView ? 68 : 75}px)`,
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                  },
                  onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800'; }
                })
              ),
              React.createElement("div", { className: `absolute bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] p-3 rounded-2xl flex items-center justify-between border backdrop-blur-xl z-40 pointer-events-auto ${actualTheme === 'dark' ? 'bg-[#1D1E3A]/60 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-white/10 border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'}` },
                React.createElement("div", { className: "flex items-center gap-3" },
                  React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 bg-slate-800" },
                      React.createElement("img", {
                        src: "001. Aset Hero Section/Photo Lanyard.PNG",
                        alt: "Avatar",
                        className: "w-full h-full object-cover object-[56%_18.5%] scale-[3.75] origin-[56%_18.5%]",
                        style: { filter: 'contrast(1.1) saturate(1.1)' },
                        onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'; }
                      })
                    ),
                    React.createElement("div", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-[2px] border-slate-900 rounded-full" })
                  ),
                  React.createElement("div", { className: "flex flex-col text-left" },
                    React.createElement("span", { className: "text-xs font-bold leading-tight text-white drop-shadow-sm" }, "@achmadnoorman"),
                    React.createElement("span", { className: "text-[10px] text-green-400 font-semibold mt-0.5 drop-shadow-sm" }, "Online")
                  )
                ),
                React.createElement("a", { href: "#contact", className: `flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/10 shadow-sm ${isMobileView ? 'w-10 h-10' : 'px-4 py-2 text-xs font-bold'}` },
                  isMobileView ? React.createElement(Mail, { size: 16 }) : 'Contact Me'
                )
              ),
              React.createElement("div", {
                className: "absolute inset-0 pointer-events-none z-50 rounded-[2rem]",
                style: {
                  background: `radial-gradient(circle at ${isHovered ? (mousePos.x + 0.5) * 100 : 50}% ${isHovered ? (mousePos.y + 0.5) * 100 : 50}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease-out'
                }
              })
            )
          ),
          React.createElement("div", { className: `flex flex-col justify-center ${isMobileView ? 'space-y-4' : 'space-y-5'}` },
            React.createElement("div", { className: "flex flex-col gap-1 text-left align-left mb-1" },
              React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                "About ",
                renderAccentSpan("Me", actualTheme, theme, activePalette)
              )
            ),
            
            // Deskripsi
            React.createElement("div", { className: `space-y-4 leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
              React.createElement("p", null, "Saya adalah seorang profesional data yang memiliki minat besar dalam analisis dan otomatisasi proses bisnis. Saya terbiasa mengolah dan memvisualisasikan data kompleks menggunakan Google Sheet, Excel dan Data Studio"),
              React.createElement("p", null, "Dalam beberapa proyek terakhir, saya berperan penuh mulai dari merancang arsitektur data hingga membangun dashboard interaktif dan laporan yang memudahkan manajemen dalam mengambil keputusan secara strategis dan akurat.")
            ),
            
            // Core Focus Tags
            React.createElement("div", { className: "flex flex-wrap gap-2 pt-1" },
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Business Intelligence"),
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Process Automation"),
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Data Visualisation")
            ),

            // Divider
            React.createElement("div", { className: `w-full max-w-sm h-px my-2 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),

            // Stats (No boxes)
            React.createElement("div", { className: "flex items-center gap-6 sm:gap-8 mt-1 mb-2" },
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "3+"),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Tahun", React.createElement("br", null), "Pengalaman")
              ),
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${projectsData.length}+`),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Proyek", React.createElement("br", null), "Selesai")
              ),
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${coursesData.length}+`),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Sertifikat", React.createElement("br", null), "Keahlian")
              )
            ),

            // Buttons (Temporarily hidden)
            React.createElement("div", { className: `hidden flex-wrap items-center gap-3 pt-3 ${isMobileView ? 'sm:gap-4' : 'sm:gap-4'}` },
              React.createElement("a", { href: "#projects", className: `font-semibold rounded-full flex items-center justify-center transition-colors ${actualTheme === 'dark' ? `${theme.accentBgDark} ${theme.accentHoverDark} text-white` : `${theme.accentBgLight} ${theme.accentHoverLight} text-white`} ${isMobileView ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'}` }, "Lihat Project"),
              React.createElement("a", { href: "#contact", className: `group flex items-center justify-center rounded-full font-semibold transition-all duration-300 border ${actualTheme === 'dark' ? 'bg-transparent border-white/20 hover:bg-white/10 text-white' : 'bg-transparent border-slate-300 hover:bg-slate-50 hover:border-slate-400 text-slate-700'} ${isMobileView ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'}` },
                "Contact Me",
                React.createElement(ArrowRight, { size: 16, className: "ml-2 transition-transform duration-300 group-hover:translate-x-1" })
              )
            )
          )
          )
        )
      );
    };

    // ==========================================
    // 5. KOMPONEN RESUME TERPADU (EDUCATION, EXPERIENCE, & SKILLS)
    // ==========================================
    const ResumeSection = ({ actualTheme, theme, isMobileView, activePalette, activeTab: propActiveTab, setActiveTab: propSetActiveTab }) => {
      const [localActiveTab, localSetActiveTab] = useState('education');
      const activeTab = propActiveTab !== undefined ? propActiveTab : localActiveTab;
      const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : localSetActiveTab;
      const [selectedItem, setSelectedItem] = useState(null); // Detail modal pop-up

      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';

      // Custom CSS hover shadows
      const hoverBorderClass = activePalette === 'purple' ? 'hover:border-[#847BFF]/30 hover:shadow-[0_0_20px_rgba(132,123,255,0.12)]' :
                                activePalette === 'emerald' ? 'hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]' :
                                activePalette === 'ocean' ? 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.12)]' :
                                activePalette === 'google' ? 'hover:border-[#4285F4]/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.12)]' :
                                'hover:border-rose-400/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.12)]';

      // --- Fitur Mouse Drag-to-Scroll ---
      const carouselRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const dragRef = useRef(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (selectedItem) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [selectedItem]);

      // --- Escape Key ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && selectedItem) {
            setSelectedItem(null);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedItem]);

      const [canScrollLeftCarousel, setCanScrollLeftCarousel] = useState(false);
      const [canScrollRightCarousel, setCanScrollRightCarousel] = useState(true);

      const handleCarouselScroll = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;
        setCanScrollLeftCarousel(scrollLeft > 0);
        setCanScrollRightCarousel(scrollLeft + clientWidth < scrollWidth - 1);
      };

      useEffect(() => {
        if (carouselRef.current) {
           const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
           setCanScrollLeftCarousel(scrollLeft > 0);
           setCanScrollRightCarousel(scrollLeft + clientWidth < scrollWidth - 1);
        }
      }, [activeTab]);

      const handleMouseDown = (e) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        dragRef.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDragging(false);
      const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => { dragRef.current = false; }, 50);
      };
      const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.2;
        if (Math.abs(walk) > 5) { dragRef.current = true; }
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      // --- State & Ref untuk tab Skills & Tools (Mobile Carousel Dots) ---
      const skillsContainerRef = useRef(null);
      const [skillsScrollIndex, setSkillsScrollIndex] = useState(0);

      const handleSkillsScroll = (e) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const ratio = scrollLeft / maxScroll;
        const activeDot = ratio > 0.5 ? 1 : 0;
        setSkillsScrollIndex(activeDot);
      };

      const handleSkillsDotClick = (dotIdx) => {
        if (!skillsContainerRef.current) return;
        const container = skillsContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const targetScroll = dotIdx === 1 ? maxScroll : 0;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setSkillsScrollIndex(dotIdx);
      };

      // Reset scroll position when tab changes
      useEffect(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft = 0;
        }
        if (skillsContainerRef.current) {
          skillsContainerRef.current.scrollLeft = 0;
        }
        setSkillsScrollIndex(0);
      }, [activeTab]);

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: `w-full max-w-6xl mx-auto px-6 grid relative z-10 ${isMobileView ? 'grid-cols-1 gap-10' : 'grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'}` },
            
            React.createElement("div", { className: `flex flex-col ${isMobileView ? 'w-full text-center items-center space-y-3' : 'text-left lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-4'}` },
              React.createElement("div", { key: `title-${activeTab}`, className: `flex flex-col gap-1 ${isMobileView ? 'items-center' : 'animate-fade-in-up-custom'}` },
                React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                  activeTab === 'education' ? "My " : activeTab === 'experience' ? "My " : "Technical ",
                  activeTab === 'education' ? renderAccentSpan("Education", actualTheme, theme, activePalette) :
                  activeTab === 'experience' ? renderAccentSpan("Experience", actualTheme, theme, activePalette) :
                  renderAccentSpan("Skill", actualTheme, theme, activePalette)
                )
              ),
              React.createElement("p", { key: `desc-${activeTab}`, className: `leading-relaxed ${isMobileView ? '' : 'animate-fade-in-up-custom'} ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
                activeTab === 'education' ? "Perjalanan pendidikan yang membangun dasar pengetahuan dan kemampuan profesional saya." :
                activeTab === 'experience' ? "Perjalanan karir yang membangun pengalaman, pengetahuan, dan kemampuan profesional saya." :
                "Kumpulan keterampilan teknis yang mendukung pekerjaan dan pengembangan profesional saya."
              ),

              // Ilustrasi 3D Dinamis berdasarkan Tab aktif (Hanya di Desktop)
              !isMobileView && React.createElement("div", {
                key: activeTab,
                className: "relative flex items-center justify-center overflow-hidden w-full animate-fade-in-up-custom lg:h-[460px] mt-8 lg:mt-16 lg:-translate-x-[11%]"
              },
                React.createElement("img", {
                  src: activeTab === 'education' ? 'Education.webp' :
                       activeTab === 'experience' ? 'Experience.webp' :
                       'Tools.webp',
                  alt: activeTab,
                  className: `h-full lg:h-[75%] w-auto mx-auto object-contain pointer-events-none drop-shadow-md translate-y-[1%] ${
                    activeTab === 'skills' ? '-translate-x-[13.5%]' : '-translate-x-[16.5%]'
                  }`
                })
              )
            ),

            // --- KOLOM KANAN: Tab Switcher & Konten Dinamis ---
            React.createElement("div", { className: `flex flex-col ${isMobileView ? 'w-full' : 'lg:col-span-8'}` },
              
              // 1. Header Tab Switcher (Gaya minimalis premium seperti di Course & Certificate)
              React.createElement("div", { className: `flex items-center gap-4 sm:gap-6 border-b pb-px mb-8 overflow-x-auto hide-scrollbar ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                [
                  { id: 'education', name: 'Education' },
                  { id: 'experience', name: 'Experience' },
                  { id: 'skills', name: 'Skills & Tools' }
                ].map(tab => {
                  const isActive = activeTab === tab.id;
                  return React.createElement("button", {
                    key: tab.id,
                    onClick: () => setActiveTab(tab.id),
                    className: `group relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors shrink-0 ${isActive ? 'font-bold' : 'font-medium'} ${
                      isActive 
                        ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                        : (actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`)
                    } -mb-px`,
                  },
                    tab.name,
                    React.createElement("span", {
                      className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${
                        actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')
                      }`
                    })
                  );
                })
              ),

              // 2. Konten Tab Dinamis dengan Animasi Fade
              React.createElement("div", {
                key: activeTab,
                className: `w-full ${isMobileView ? '' : 'animate-fade-in-up-custom'} min-h-[480px]`
              },
                
                // --- TAB: EXPERIENCE ---
                activeTab === 'experience' && React.createElement("div", { className: "relative w-full group/slider" },
                  React.createElement("div", {
                    ref: carouselRef,
                    onMouseDown: handleMouseDown,
                    onMouseLeave: handleMouseLeave,
                    onMouseUp: handleMouseUp,
                    onMouseMove: handleMouseMove,
                    onScroll: handleCarouselScroll,
                    className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none w-full relative z-10 text-left"
                  },
                  experienceData.map((item, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === experienceData.length - 1;
                    return React.createElement("div", {
                      key: item.id,
                      className: "shrink-0 w-[290px] sm:w-[340px] snap-start flex flex-col items-center relative z-10 group"
                    },
                      // Timeline Node
                      React.createElement("div", { className: "w-full relative flex items-center justify-center h-6 mb-6" },
                        !isFirst && React.createElement("div", { className: `absolute left-[-12px] right-1/2 h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        !isLast && React.createElement("div", { className: `absolute left-1/2 right-[-12px] h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        React.createElement("div", { 
                          className: `w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] relative z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`,
                          style: { 
                            backgroundColor: activeColor, 
                            borderColor: actualTheme === 'dark' ? '#111126' : '#ffffff' 
                          }
                        })
                      ),

                      // Card
                      React.createElement("div", {
                        onClick: () => { if (!dragRef.current) setSelectedItem({ ...item, type: 'experience' }); },
                        className: `w-full ${isMobileView ? 'h-[350px]' : 'h-[450px]'} flex flex-col text-left p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md border ${
                          actualTheme === 'dark' 
                            ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
                            : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        } ${hoverBorderClass}`
                      },
                        // Card Header (Icon & Title)
                        React.createElement("div", { className: "flex items-center gap-3 w-full" },
                          React.createElement("div", { className: `shrink-0 w-12 h-12 rounded-[1rem] overflow-hidden flex items-center justify-center text-[10px] font-black tracking-wider shadow-sm ` + (item.logo ? "" : `bg-gradient-to-tr ${item.gradient} text-white`) },
                            item.logo ? React.createElement("img", { src: item.logo, alt: item.company, className: "w-full h-full object-contain" }) : item.monogram
                          ),
                          React.createElement("div", { className: "flex flex-col min-w-0 pr-2 flex-1" },
                            React.createElement("h3", { className: `font-bold text-[14px] sm:text-[15px] leading-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate` }, item.role),
                            React.createElement("h4", { className: `font-medium text-[11px] sm:text-xs mt-1.5 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` }, item.company)
                          )
                        ),
                        
                        // Divider Line
                        React.createElement("div", { className: `w-full mx-auto h-px mt-5 mb-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        
                        // Period Label
                        React.createElement("div", { className: "mt-4 flex items-center gap-1.5" },
                          React.createElement(Calendar, { size: 10, className: actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500' }),
                          React.createElement("span", { className: `text-[10px] font-medium ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, item.period)
                        ),

                        // Overview Heading
                        React.createElement("h5", { className: `font-poppins text-[13px] font-normal tracking-wider mt-4 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "Pencapaian & Pengalaman"),

                        // Description (First Achievement)
                        item.achievements && item.achievements[0] && React.createElement("p", { className: `text-xs mt-1 mb-4 flex-1 line-clamp-4 leading-relaxed ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` }, item.achievements[0]),

                        // Tools (Dengan Horizontal Scroll jika lebih dari atau sama dengan 6 di Mobile)
                        item.tools && React.createElement("div", { 
                          className: `mb-4 flex gap-1 ${
                            isMobileView 
                              ? (item.tools.length >= 6 ? 'flex-nowrap overflow-x-auto hide-scrollbar max-w-full pb-1' : 'flex-wrap') 
                              : 'flex-wrap'
                          }` 
                        },
                          (isMobileView ? item.tools : item.tools.slice(0, 4)).map((tool, idx) => (
                            React.createElement("span", {
                              key: idx,
                              className: `font-poppins px-1.5 py-0.5 rounded border text-[9px] font-semibold shrink-0`,
                              style: {
                                backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                                borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                                color: activeColor
                              }
                            }, tool.name)
                          ))
                        ),
                        
                        // Detail Button Footer
                        React.createElement("div", { className: `mt-auto pt-4 flex items-center justify-between border-t ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                          React.createElement("span", { className: `text-[9px] font-bold uppercase tracking-wider ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'} flex items-center gap-1` },
                            "Detail",
                            React.createElement(ChevronRight, { size: 12 })
                          )
                        )
                      )
                    );
                  })
                  ),
                  
                  // Action Button (Next)
                  canScrollRightCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute right-[-20px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data selanjutnya"
                  },
                    React.createElement(ChevronRight, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  ),
                  // Action Button (Prev)
                  canScrollLeftCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute left-[-35px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data sebelumnya"
                  },
                    React.createElement(ChevronLeft, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  )
                ),

                // --- TAB: EDUCATION ---
                activeTab === 'education' && React.createElement("div", { className: "relative w-full group/slider" },
                  React.createElement("div", {
                    ref: carouselRef,
                    onMouseDown: handleMouseDown,
                    onMouseLeave: handleMouseLeave,
                    onMouseUp: handleMouseUp,
                    onMouseMove: handleMouseMove,
                    onScroll: handleCarouselScroll,
                    className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none w-full relative z-10 text-left"
                  },
                  educationData.map((item, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === educationData.length - 1;
                    return React.createElement("div", {
                      key: item.id,
                      className: "shrink-0 w-[290px] sm:w-[340px] snap-start flex flex-col items-center relative z-10 group"
                    },
                      // Timeline Node
                      React.createElement("div", { className: "w-full relative flex items-center justify-center h-6 mb-6" },
                        !isFirst && React.createElement("div", { className: `absolute left-[-12px] right-1/2 h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        !isLast && React.createElement("div", { className: `absolute left-1/2 right-[-12px] h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        React.createElement("div", { 
                          className: `w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] relative z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`,
                          style: { 
                            backgroundColor: activeColor, 
                            borderColor: actualTheme === 'dark' ? '#111126' : '#ffffff' 
                          }
                        })
                      ),

                      // Card
                      React.createElement("div", {
                        onClick: () => { if (!dragRef.current) setSelectedItem({ ...item, type: 'education' }); },
                        className: `w-full ${isMobileView ? 'h-[350px]' : 'h-[450px]'} flex flex-col text-left p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md border ${
                          actualTheme === 'dark' 
                            ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
                            : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        } ${hoverBorderClass}`
                      },
                        // Card Header (Icon & Title)
                        React.createElement("div", { className: "flex items-center gap-3 w-full" },
                          React.createElement("div", { className: `shrink-0 w-12 h-12 rounded-[1rem] overflow-hidden flex items-center justify-center text-[10px] font-black tracking-wider shadow-sm ` + (item.logo ? "" : `bg-gradient-to-tr ${item.gradient} text-white`) },
                            item.logo ? React.createElement("img", { src: item.logo, alt: item.institution, className: "w-full h-full object-contain" }) : item.monogram
                          ),
                          React.createElement("div", { className: "flex flex-col min-w-0 pr-2 flex-1" },
                            React.createElement("h3", { className: `font-bold text-[14px] sm:text-[15px] leading-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate` }, item.degree),
                            React.createElement("h4", { className: `font-medium text-[11px] sm:text-xs mt-1.5 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` }, item.institution)
                          )
                        ),
                        
                        // Divider Line
                        React.createElement("div", { className: `w-full mx-auto h-px mt-5 mb-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        
                        // Period Label
                        React.createElement("div", { className: "mt-4 flex items-center gap-1.5" },
                          React.createElement(Calendar, { size: 10, className: actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500' }),
                          React.createElement("span", { className: `text-[10px] font-medium ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, item.period)
                        ),

                        // GPA
                        item.gpa && React.createElement("div", { className: "mt-2 flex items-center gap-1" },
                          React.createElement(Star, { size: 10, className: "fill-amber-500 text-amber-500" }),
                          React.createElement("span", { className: "text-[10px] font-bold text-amber-500" }, `IPK: ${item.gpa}`)
                        ),
                        
                        // Overview Heading
                        React.createElement("h5", { className: `font-poppins text-[13px] font-normal tracking-wider mt-4 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "Overview"),
                        
                        // Description (First Achievement)
                        React.createElement("p", { className: `text-xs mt-1 mb-4 flex-1 line-clamp-4 leading-relaxed ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` }, item.description),
                        
                        // Detail Button Footer
                        React.createElement("div", { className: `mt-auto pt-4 flex items-center justify-between border-t ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                          React.createElement("span", { className: `text-[9px] font-bold uppercase tracking-wider ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'} flex items-center gap-1` },
                            "Detail",
                            React.createElement(ChevronRight, { size: 12 })
                          )
                        )
                      )
                    );
                  })
                  ),
                  
                  // Action Button (Next)
                  canScrollRightCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute right-[-20px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data selanjutnya"
                  },
                    React.createElement(ChevronRight, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  ),
                  // Action Button (Prev)
                  canScrollLeftCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute left-[-35px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data sebelumnya"
                  },
                    React.createElement(ChevronLeft, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  )
                ),

                // --- TAB: SKILLS ---
                activeTab === 'skills' && React.createElement("div", { className: "flex flex-col w-full" },
                  React.createElement("div", { 
                    ref: skillsContainerRef,
                    onScroll: isMobileView ? handleSkillsScroll : undefined,
                    className: isMobileView 
                      ? "grid grid-rows-6 grid-flow-col gap-3 overflow-x-auto text-left max-w-full pt-2 pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
                      : "grid grid-cols-3 gap-4 text-left" 
                  },
                    skillsData.map((skill, index) => (
                      React.createElement("div", {
                        key: `skill-${index}`,
                        onMouseEnter: (e) => { if (activeColor) e.currentTarget.style.borderColor = activeColor; },
                        onMouseLeave: (e) => { e.currentTarget.style.borderColor = ''; },
                        className: `group flex flex-row items-center ${isMobileView ? 'w-[140px] shrink-0 p-2.5 rounded-xl gap-2' : 'p-3.5 rounded-2xl gap-3.5'} border transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                          actualTheme === 'dark' ? `${theme.darkCard} border-white/10 hover:shadow-white/5` : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        }`
                      },
                        React.createElement("div", { className: "flex items-center justify-center shrink-0 rounded-xl " + (isMobileView ? "w-8 h-8 text-[10px]" : "w-10 h-10 text-xs") + " font-bold shadow-sm overflow-hidden " + (skill.logo ? "bg-white p-1.5 border border-slate-100" : "bg-gradient-to-tr " + skill.gradient + " text-white") },
                          skill.logo 
                            ? React.createElement("img", { src: skill.logo, alt: skill.name, className: "w-full h-full object-contain pointer-events-none" })
                            : skill.monogram
                        ),
                        React.createElement("div", { className: "flex-1 min-w-0 pr-1 pointer-events-none" },
                          React.createElement("h3", { className: `font-bold truncate ${isMobileView ? 'text-[11px]' : 'text-[13px]'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, skill.name)
                        )
                      )
                    ))
                  ),
                  isMobileView && skillsData.length > 12 && React.createElement("div", { className: "flex justify-center gap-1.5 mt-2 pb-1" },
                    Array.from({ length: 2 }).map((_, dotIdx) => 
                      React.createElement("button", {
                        key: `skills-dot-${dotIdx}`,
                        onClick: () => handleSkillsDotClick(dotIdx),
                        className: `h-2 rounded-full transition-all duration-300 ${
                          skillsScrollIndex === dotIdx ? "w-5" : "w-2"
                        }`,
                        style: skillsScrollIndex === dotIdx 
                          ? { backgroundColor: activeColor } 
                          : { backgroundColor: actualTheme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : '#64748b' }
                      })
                    )
                  )
                )

              )
            )

          ),

          // --- MODAL DETAIL TERPADU ---
          selectedItem && createPortal(
            React.createElement("div", {
              onClick: () => setSelectedItem(null),
              className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[340px]' : 'max-w-2xl'} ${isMobileView ? 'max-h-[560px]' : 'max-h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                
                // Header Modal
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-5' : 'p-6 sm:p-8'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-lg' : 'text-xl sm:text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                    selectedItem.type === 'experience' ? "Detail Pengalaman Kerja" : "Detail Riwayat Pendidikan"
                  ),
                  React.createElement("button", {
                    onClick: () => setSelectedItem(null),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  }, React.createElement(X, { size: isMobileView ? 20 : 24 }))
                ),

                // Body Modal
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-5' : 'p-6 sm:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: "flex flex-col gap-4 text-left" },
                    
                    React.createElement("div", { className: "flex items-center gap-3 sm:gap-5 w-full" },
                      React.createElement("div", { className: `shrink-0 flex items-center justify-center overflow-hidden w-12 h-12 sm:w-16 sm:h-16 rounded-2xl text-[11px] sm:text-sm font-black tracking-wider shadow-sm ` + (selectedItem.logo ? "" : `bg-gradient-to-tr ${selectedItem.gradient} text-white`) },
                        selectedItem.logo ? React.createElement("img", { src: selectedItem.logo, alt: selectedItem.company || selectedItem.institution, className: "w-full h-full object-contain" }) : selectedItem.monogram
                      ),
                      React.createElement("div", { className: "flex flex-col flex-1 min-w-0" },
                        React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-base' : 'text-xl sm:text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} break-words` }, selectedItem.role || selectedItem.degree),
                        React.createElement("h4", { className: `font-medium mt-1.5 ${isMobileView ? 'text-xs' : 'text-base'} ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` },
                          `${selectedItem.company || selectedItem.institution} • ${selectedItem.period}`
                        )
                      )
                    ),

                    React.createElement("div", { className: `h-px w-full my-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),

                    // Overview
                    selectedItem.type !== 'experience' && selectedItem.description && React.createElement("div", { className: "mt-2" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Overview"),
                      React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'text-xs' : 'text-sm sm:text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
                        selectedItem.description
                      )
                    ),

                    // Achievements (For Experience & Education)
                    selectedItem.achievements && selectedItem.achievements.length > 0 && React.createElement("div", { className: "mt-4" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                        selectedItem.type === 'education' ? "Pencapaian & Pengalaman Organisasi" : "Pencapaian & Pengalaman"
                      ),
                      React.createElement("ul", { className: `list-outside list-disc ml-5 space-y-2 ${isMobileView ? 'text-xs' : 'text-sm'} ${actualTheme === 'dark' ? 'text-gray-300 marker:text-gray-500' : 'text-slate-600 marker:text-slate-400'}` },
                        selectedItem.achievements.map((achievement, idx) => (
                          React.createElement("li", { key: idx, className: "pl-1 leading-relaxed" }, achievement)
                        ))
                      )
                    ),

                    // Tools (For Experience/Education if they have tools)
                    selectedItem.tools && React.createElement("div", { className: "mt-4" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Tools"),
                      React.createElement("div", { className: "flex flex-wrap gap-2" },
                        selectedItem.tools.map((tool, idx) => (
                          React.createElement("span", { 
                            key: idx, 
                            className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold shadow-sm border`,
                            style: {
                              backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                              borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                              color: activeColor
                            }
                          },
                            tool.name
                          )
                        ))
                      )
                    )

                  )
                )

              )
            ),
            document.body
          )

        )
      );
    };

    // ==========================================
    // KOMPONEN COURSES & TRAINING SECTION
    // ==========================================
    const CoursesSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [activeFilter, setActiveFilter] = useState('All');
      const [selectedCourse, setSelectedCourse] = useState(null);
      const [showAllModal, setShowAllModal] = useState(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (showAllModal || selectedCourse) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [showAllModal, selectedCourse]);

      // --- Escape Key ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if (selectedCourse) {
              setSelectedCourse(null);
            } else if (showAllModal) {
              setShowAllModal(false);
            }
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedCourse, showAllModal]);

      const allBrands = ['All', ...new Set(coursesData.map(c => c.issuer))];

      const filteredCourses = activeFilter === 'All'
        ? coursesData
        : coursesData.filter(c => c.issuer === activeFilter);

      // Helper to return month and year/day for Date Pill representation
      const getCourseDateParts = (course) => {
        const dates = {
          1: { month: "JAN", val: "23" },
          2: { month: "SEP", val: "22" },
          3: { month: "MAR", val: "22" },
          4: { month: "NOV", val: "21" },
          5: { month: "AUG", val: "23" },
          6: { month: "MAY", val: "23" }
        };
        if (course.date && course.date.trim().length > 0) {
          const parts = course.date.trim().split(' ');
          if (parts.length >= 2) {
            return { month: parts[0].substring(0, 3).toUpperCase(), val: parts[1].substring(2) };
          }
        }
        return dates[course.id] || { month: "DEC", val: "23" };
      };

      // Helper to get descriptions based on course title
      const getCourseDescription = (title) => {
        const lower = title.toLowerCase();
        if (lower.includes("machine learning") || lower.includes("data science")) {
          return "Mempelajari implementasi algoritma machine learning, pembersihan data, dan evaluasi model secara mendalam.";
        }
        if (lower.includes("python") || lower.includes("programming")) {
          return "Menguasai dasar pemrograman Python, logika pemecahan masalah, dan praktik terbaik software engineering.";
        }
        if (lower.includes("spreadsheet") || lower.includes("excel")) {
          return "Optimasi pengolahan data bisnis menggunakan rumus tingkat lanjut, visualisasi data, dan dasbor otomatis.";
        }
        if (lower.includes("looker") || lower.includes("visualization")) {
          return "Membangun dasbor analitis interaktif untuk menyajikan wawasan bisnis penting secara visual.";
        }
        if (lower.includes("sql")) {
          return "Menguasai kueri database relasional, manipulasi data, dan teknik penggabungan data tingkat lanjut.";
        }
        return "Program pelatihan intensif untuk memperluas pemahaman teknis dan pemecahan masalah industri.";
      };

      // --- Fitur Mouse Drag-to-Scroll ---
      const carouselRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const dragRef = useRef(false);

      const handleMouseDown = (e) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        dragRef.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDragging(false);
      const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => { dragRef.current = false; }, 50);
      };
      const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        if (Math.abs(walk) > 5) { dragRef.current = true; }
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      const renderCourseCard = (course, isGrid = false) => {
        const hoverBorderClass = activePalette === 'purple' ? 'hover:border-[#847BFF]/30 hover:shadow-[0_0_20px_rgba(132,123,255,0.15)]' :
                                  activePalette === 'emerald' ? 'hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]' :
                                  activePalette === 'ocean' ? 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]' :
                                  activePalette === 'google' ? 'hover:border-[#4285F4]/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.15)]' :
                                  'hover:border-rose-400/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]';

        const monogram = course.issuer.substring(0, 2).toUpperCase();
        const dateParts = getCourseDateParts(course);
        const description = getCourseDescription(course.title);
        const isSingleLineTitle = course.title.length < 40;

        return React.createElement("div", {
          key: course.id,
          onClick: () => {
            if (!dragRef.current && !isGrid) setSelectedCourse(course);
            if (isGrid) setSelectedCourse(course);
          },
          className: `${isGrid ? 'w-full' : 'shrink-0 w-[290px] sm:w-[340px]'} h-[460px] snap-start flex relative group cursor-pointer transition-all duration-300 rounded-[2rem] overflow-hidden border shadow-md hover:-translate-y-1.5 ${
            actualTheme === 'dark' 
              ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
              : 'bg-white border-slate-200 hover:shadow-slate-200/50'
          } ${hoverBorderClass}`
        },
          // Shine Overlay Effect
          React.createElement("div", { 
            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" 
          }),

          // Full Width Card Content
          React.createElement("div", { className: "w-full h-full pt-6 px-6 pb-4 sm:pt-6 sm:px-6 sm:pb-4 flex flex-col justify-between text-left relative z-10" },
            
            // Top Row: Tag Brand & Date Pill
            React.createElement("div", { className: "flex justify-between items-center w-full" },
              // Left Capsule Tag (Brand Issuer)
              React.createElement("span", { 
                className: `text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide ${
                  actualTheme === 'dark' 
                    ? 'bg-white text-slate-900' 
                    : 'bg-slate-900 text-white'
                }`
              }, course.issuer),
              
              // Right Date Pill styled exactly like JAN 25
              React.createElement("div", { 
                className: `flex items-center rounded-lg border overflow-hidden shadow-inner h-7 text-[10px] font-bold ${
                  actualTheme === 'dark' 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-slate-250 bg-slate-100'
                }`
              },
                // Left Part: Month (Dark Background)
                React.createElement("span", { 
                  className: `px-2.5 h-full flex items-center justify-center text-white ${
                    actualTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-800'
                  }`
                }, dateParts.month),
                // Right Part: Year (White/Light Background)
                React.createElement("span", { 
                  className: `px-2.5 h-full flex items-center justify-center ${
                    actualTheme === 'dark' 
                      ? 'text-white bg-slate-900' 
                      : 'text-slate-800 bg-white'
                  }`
                }, dateParts.val)
              )
            ),

            // Middle: Skill / Course Title learned & Subtitle/Description
            React.createElement("div", { className: "flex-1 flex flex-col justify-start mt-8 mb-7" },
              React.createElement("h3", { 
                className: `font-bold text-lg sm:text-xl leading-tight tracking-tight ${
                  actualTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }` 
              }, course.title),
              React.createElement("p", { 
                className: `text-xs sm:text-[13px] leading-relaxed mt-2 line-clamp-3 ${
                  actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }` 
              }, description)
            ),

            // Bottom Block: Rounded Image Container & Location-style Overlay Badge
            React.createElement("div", { 
              className: "w-full mt-auto",
              style: { position: "relative", top: "-18px" }
            },
              React.createElement("div", { 
                className: `relative w-full h-[180px] rounded-[1.5rem] overflow-hidden shadow-sm border ${
                  actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }` 
              },
                // Thumbnail of the actual certificate
                React.createElement("img", { 
                  src: encodeURI(course.file), 
                  alt: course.title, 
                  className: "w-full h-full object-cover object-top" 
                })
              )
            )

          )

        );
      };

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: "w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col" },
            
            // Header
            React.createElement("div", { className: `flex ${isMobileView ? 'flex-col gap-3 text-center items-center' : 'flex-col gap-2 text-left'} mb-6 lg:mb-8 w-full` },
              React.createElement("h2", { className: `font-bold tracking-tight leading-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                "Course ",
                renderAccentSpan("& Certificate", actualTheme, theme, activePalette)
              ),
              React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'max-w-2xl text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
                "Kumpulan sertifikasi yang mendukung ",
                React.createElement("br", null),
                "pengembangan profesional saya."
              )
            ),

            // Tab Filter (Underline style)
            React.createElement("div", { className: `flex gap-4 sm:gap-6 mb-2 overflow-x-auto hide-scrollbar border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
              allBrands.map(brand => {
                const isActive = activeFilter === brand;
                return React.createElement("button", {
                  key: brand,
                  onClick: () => setActiveFilter(brand),
                  className: `group relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors shrink-0 ${isActive ? 'font-bold' : 'font-medium'} ${
                    isActive 
                      ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                      : (actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`)
                  }`
                },
                  brand,
                  React.createElement("span", {
                    className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${
                      actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')
                    }`
                  })
                );
              })
            ),

            // Carousel List
            React.createElement("div", {
              ref: carouselRef,
              onMouseDown: handleMouseDown,
              onMouseLeave: handleMouseLeave,
              onMouseUp: handleMouseUp,
              onMouseMove: handleMouseMove,
              className: `flex gap-6 overflow-x-auto pt-4 pb-4 px-2 -mx-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing hide-scrollbar select-none`
            },
              filteredCourses.map((course) => renderCourseCard(course))
            )
          ),

          // Modal All Courses
          showAllModal && createPortal(
            React.createElement("div", {
              onClick: () => setShowAllModal(false),
              className: `fixed inset-0 z-[100] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[85vh]' : 'max-w-5xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, `Semua Course ${activeFilter === 'All' ? '' : `- ${activeFilter}`}`),
                  React.createElement("button", {
                    onClick: () => setShowAllModal(false),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  },
                    React.createElement(X, { size: isMobileView ? 20 : 24 })
                  )
                ),

                // Body Pop-up
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-4' : 'p-6 lg:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: `grid ${isMobileView ? 'gap-4 grid-cols-1' : 'gap-6 sm:grid-cols-2 lg:grid-cols-3'}` },
                    filteredCourses.map((course) => renderCourseCard(course, true))
                  )
                )
              )
            ),
            document.body
          ),

          // Modal Detail Certificate
          selectedCourse && createPortal(
            React.createElement("div", {
              onClick: () => setSelectedCourse(null),
              className: `fixed inset-0 z-[110] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[65vh]' : 'max-w-4xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-base' : 'text-xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate pr-4` }, selectedCourse.title),
                  React.createElement("button", {
                    onClick: () => setSelectedCourse(null),
                    className: `p-2 rounded-full transition-colors shrink-0 ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  }, React.createElement(X, { size: isMobileView ? 20 : 24 }))
                ),
                // Body (Iframe for PDF, IMG for PNG/JPG)
                React.createElement("div", { className: `flex-1 w-full relative ${actualTheme === 'dark' ? 'bg-black/30' : 'bg-slate-100'}` },
                  selectedCourse.file.toLowerCase().endsWith('.pdf') ? (
                    React.createElement("iframe", {
                      src: encodeURI(selectedCourse.file),
                      className: "w-full h-full border-none",
                      title: selectedCourse.title
                    })
                  ) : (
                    React.createElement("div", { className: "w-full h-full p-4 flex items-center justify-center overflow-auto" },
                      React.createElement("img", {
                        src: encodeURI(selectedCourse.file),
                        alt: selectedCourse.title,
                        className: "max-w-full max-h-full object-contain drop-shadow-lg"
                      })
                    )
                  )
                )
              )
            ),
            document.body
          )
        )
      );
    };

    // ==========================================
    // 7. KOMPONEN PROJECTS SECTION
    // ==========================================
    const ProjectsSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';
      const [activeFilter, setActiveFilter] = useState('All');
      const [selectedProject, setSelectedProject] = useState(null);
      const [activeDetailTab, setActiveDetailTab] = useState('overview');

      useEffect(() => {
        if (selectedProject) setActiveDetailTab('overview');
      }, [selectedProject]);

      const detailScrollRef = useRef(null);
      const tabBarRef = useRef(null);

      useEffect(() => {
        if (detailScrollRef.current && tabBarRef.current) {
          const targetScrollTop = tabBarRef.current.offsetTop;
          if (detailScrollRef.current.scrollTop > targetScrollTop) {
            detailScrollRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
          }
        }
      }, [activeDetailTab]);
      const [activeImgIdx, setActiveImgIdx] = useState(0);

      // Swipe logic for modal image carousel
      const [touchStartPos, setTouchStartPos] = useState(null);
      const [touchEndPos, setTouchEndPos] = useState(null);
      const minSwipeDist = 50;
      
      const handleTouchStart = (e) => {
        setTouchEndPos(null);
        setTouchStartPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchMove = (e) => {
        setTouchEndPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchEnd = () => {
        if (!touchStartPos || !touchEndPos) return;
        const distance = touchStartPos - touchEndPos;
        const isLeftSwipe = distance > minSwipeDist;
        const isRightSwipe = distance < -minSwipeDist;
        
        if (isLeftSwipe && selectedProject?.images?.length > 1) {
          setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
        }
        if (isRightSwipe && selectedProject?.images?.length > 1) {
          setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
      };

      const wheelTimeout = useRef(null);
      const handleWheel = (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
          if (wheelTimeout.current) return;
          
          if (e.deltaX > 0 && selectedProject?.images?.length > 1) {
            setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
          } else if (e.deltaX < 0 && selectedProject?.images?.length > 1) {
            setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
          }
          
          wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = null;
          }, 600);
        }
      };

      const [showAllModal, setShowAllModal] = useState(false);
      const [lightboxImg, setLightboxImg] = useState(null);
      const [zoomScale, setZoomScale] = useState(1);
      const [panPos, setPanPos] = useState({ x: 0, y: 0 });
      const [isPanning, setIsPanning] = useState(false);
      const panStart = useRef({ x: 0, y: 0 });
      const panOrigin = useRef({ x: 0, y: 0 });
      const isAnimating = useRef(false);
      const lightboxDragRef = useRef(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (showAllModal || selectedProject || lightboxImg) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [showAllModal, selectedProject, lightboxImg]);

      // --- Escape & Arrow Keys to Navigate / Close Modals ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if (lightboxImg) {
              setLightboxImg(null);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (selectedProject) {
              setSelectedProject(null);
            } else if (showAllModal) {
              setShowAllModal(false);
            }
          } else if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
            if (e.key === 'ArrowRight') {
              setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (e.key === 'ArrowLeft') {
              setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            }
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [lightboxImg, selectedProject, showAllModal]);

      const allTechs = ['All', ...new Set(projectsData.flatMap(p => p.tech))];
      
      const filteredProjects = activeFilter === 'All' 
        ? projectsData 
        : projectsData.filter(p => p.tech.includes(activeFilter));

      // --- Fitur Mouse Drag-to-Scroll ---
      const carouselRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const dragRef = useRef(false);

      const handleMouseDown = (e) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        dragRef.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDragging(false);
      const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => { dragRef.current = false; }, 50);
      };
      const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        if (Math.abs(walk) > 5) { dragRef.current = true; }
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      const renderProjectCard = (project, isGrid = false) => {
        const hoverBorderClass = activePalette === 'purple' ? 'hover:border-[#847BFF]/30 hover:shadow-[0_0_20px_rgba(132,123,255,0.15)]' :
                                  activePalette === 'emerald' ? 'hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]' :
                                  activePalette === 'ocean' ? 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]' :
                                  activePalette === 'google' ? 'hover:border-[#4285F4]/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.15)]' :
                                  'hover:border-rose-400/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]';

        const getProjectDateParts = (proj) => {
          if (proj.date && proj.date.trim().length > 0) {
            const parts = proj.date.trim().split(' ');
            if (parts.length >= 2) {
              return { month: parts[0].substring(0, 3).toUpperCase(), val: parts[1].substring(2) };
            }
          }
          return { month: "DEC", val: "24" };
        };
        const dateParts = getProjectDateParts(project);

        const isCreatorMode = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('demo') === 'true' : false;
        const isComingSoon = project.comingSoon === true && !isCreatorMode;

        return React.createElement("div", {
          key: project.id,
          onClick: () => {
            if (isComingSoon) return; // Block click for coming soon projects
            if (!dragRef.current && !isGrid) {
              setSelectedProject(project);
              setActiveImgIdx(0);
            }
            if (isGrid) {
              setSelectedProject(project);
              setActiveImgIdx(0);
            }
          },
          className: `${isGrid ? 'w-full' : 'shrink-0 w-[290px] sm:w-[340px]'} h-[460px] snap-start flex relative group ${isComingSoon ? 'cursor-default' : 'cursor-pointer'} transition-all duration-300 rounded-[2rem] overflow-hidden border shadow-md ${isComingSoon ? '' : 'hover:-translate-y-1.5'} ${
            actualTheme === 'dark' 
              ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
              : 'bg-white border-slate-200 hover:shadow-slate-200/50'
          } ${isComingSoon ? '' : hoverBorderClass}`
        },
          // Shine Overlay Effect (disabled for coming soon)
          !isComingSoon && React.createElement("div", { 
            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" 
          }),

          // Coming Soon Glassmorphic Overlay
          isComingSoon && React.createElement("div", {
            className: "absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
          },
            // Frosted glass backdrop
            React.createElement("div", {
              className: "absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            }),
            // Badge container
            React.createElement("div", {
              className: "relative flex flex-col items-center justify-center"
            },
              // "Segera Hadir" label
              React.createElement("div", {
                className: "px-5 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-xl"
              },
                React.createElement("span", {
                  className: "text-white font-bold text-sm tracking-wider uppercase drop-shadow-md"
                }, "Segera Hadir")
              )
            )
          ),

          // Full Width Card Content
          React.createElement("div", { className: "w-full h-full pt-6 px-6 pb-4 sm:pt-6 sm:px-6 sm:pb-4 flex flex-col justify-between text-left relative z-10" },
            
            // Top Row: Category Tag & Date Split Pill
            React.createElement("div", { className: "flex justify-between items-center w-full" },
              // Left Capsule Tag (Category)
              React.createElement("span", { 
                className: `text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide ${
                  actualTheme === 'dark' 
                    ? 'bg-white text-slate-900' 
                    : 'bg-slate-900 text-white'
                }`
              }, project.category),
              
              // Right Date Pill styled exactly like JAN 25
              React.createElement("div", { 
                className: `flex items-center rounded-lg border overflow-hidden shadow-inner h-7 text-[10px] font-bold ${
                  actualTheme === 'dark' 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-slate-250 bg-slate-100'
                }`
              },
                // Left Part: Month (Dark Background)
                React.createElement("span", { 
                  className: "px-2.5 h-full flex items-center justify-center text-white bg-slate-800"
                }, dateParts.month),
                // Right Part: Year (White/Light Background)
                React.createElement("span", { 
                  className: `px-2.5 h-full flex items-center justify-center ${
                    actualTheme === 'dark' 
                      ? 'text-white bg-slate-900' 
                      : 'text-slate-800 bg-white'
                  }`
                }, dateParts.val)
              )
            ),

            // Middle: Project Title & Description
            React.createElement("div", { className: "flex-1 flex flex-col justify-start mt-8 mb-7" },
              React.createElement("h3", { 
                className: `font-bold text-lg sm:text-xl leading-tight tracking-tight whitespace-pre-line ${
                  actualTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }` 
              }, project.title),
              React.createElement("p", { 
                className: `text-xs sm:text-[13px] leading-relaxed mt-2 line-clamp-3 ${
                  actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`
              }, project.description)
            ),

            // Bottom Block: Rounded Image Container & Showcase Badge
            React.createElement("div", { 
              className: "w-full mt-auto",
              style: { position: "relative", top: "-18px" }
            },
              React.createElement("div", { 
                className: `relative w-full h-[180px] rounded-[1.5rem] overflow-hidden shadow-sm border ${
                  actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }` 
              },
                // Thumbnail of the project image
                React.createElement("img", { 
                  src: project.image, 
                  alt: project.title, 
                  className: `w-full h-full object-cover object-top scale-[0.90] ${isComingSoon ? 'blur-[1px]' : ''}` 
                })
              )
            )

          )

        );
      };

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: "w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col" },
            
            // Header
            React.createElement("div", { className: `flex ${isMobileView ? 'flex-col gap-3 text-center items-center' : 'flex-col gap-2 text-left'} mb-6 lg:mb-8 w-full` },
              React.createElement("h2", { className: `font-bold tracking-tight leading-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                "Featured ",
                renderAccentSpan("Projects", actualTheme, theme, activePalette)
              ),
              React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'max-w-2xl text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
                "Kumpulan proyek yang membangun pengalaman ",
                React.createElement("br", null),
                "dan kemampuan profesional saya."
              )
            ),

            // Tab Filter (Underline style)
            React.createElement("div", { className: `flex gap-4 sm:gap-6 mb-2 overflow-x-auto hide-scrollbar border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
              allTechs.map(tech => {
                const isActive = activeFilter === tech;
                return React.createElement("button", {
                  key: tech,
                  onClick: () => setActiveFilter(tech),
                  className: `group relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors shrink-0 ${isActive ? 'font-bold' : 'font-medium'} ${
                    isActive 
                      ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                      : (actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`)
                  }`
                },
                  tech,
                  React.createElement("span", {
                    className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')}`
                  })
                )
              })
            ),

            // Proyek Container (Horizontal Scroll/Drag)
            React.createElement("div", {
              ref: carouselRef,
              onMouseDown: handleMouseDown,
              onMouseLeave: handleMouseLeave,
              onMouseUp: handleMouseUp,
              onMouseMove: handleMouseMove,
              className: `flex overflow-x-auto gap-4 sm:gap-6 pt-4 pb-6 px-2 -mx-2 hide-scrollbar cursor-grab active:cursor-grabbing ${isDragging ? 'snap-none' : 'snap-x snap-mandatory scroll-smooth'}`
            },
              filteredProjects.length > 0 ? (
                filteredProjects.map(project => renderProjectCard(project))
              ) : (
                React.createElement("div", { className: `w-full p-8 text-center border-dashed border-2 rounded-lg ${actualTheme === 'dark' ? 'border-white/20 text-gray-400' : 'border-slate-300 text-slate-500'}` },
                  "Belum ada proyek dengan filter ini."
                )
              )
            )

          ),

          // Modal All Projects
          showAllModal && createPortal(
            React.createElement("div", {
              onClick: () => setShowAllModal(false),
              className: `fixed inset-0 z-[100] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[85vh]' : 'max-w-5xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, `Semua Project ${activeFilter === 'All' ? '' : `- ${activeFilter}`}`),
                  React.createElement("button", {
                    onClick: () => setShowAllModal(false),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  },
                    React.createElement(X, { size: isMobileView ? 20 : 24 })
                  )
                ),

                // Body Pop-up
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-4' : 'p-6 lg:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: `grid ${isMobileView ? 'gap-4 grid-cols-1' : 'gap-6 sm:grid-cols-2 lg:grid-cols-3'}` },
                    filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => renderProjectCard(project, true))
                    ) : (
                      React.createElement("div", { className: `col-span-full w-full p-8 text-center border-dashed border-2 rounded-lg ${actualTheme === 'dark' ? 'border-white/20 text-gray-400' : 'border-slate-300 text-slate-500'}` },
                        "Belum ada proyek dengan filter ini."
                      )
                    )
                  )
                )
              )
            ),
            document.body
          ),

          // Modal Pop-up Overview Project Detail
          selectedProject && createPortal(
            React.createElement("div", {
              onClick: () => setSelectedProject(null),
              className: `fixed inset-0 z-[110] flex items-center justify-center p-4 pt-24 bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[340px] max-h-[560px]' : 'max-w-2xl max-h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up Detail
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-5' : 'p-8'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Detail Project"),
                  React.createElement("button", {
                    onClick: () => setSelectedProject(null),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  }, React.createElement(X, { size: isMobileView ? 20 : 24 }))
                ),
                // Body Pop-up Detail
                React.createElement("div", { 
                  ref: detailScrollRef,
                  className: `relative overflow-y-auto ${isMobileView ? 'p-5' : 'p-8'} hide-scrollbar flex-1` 
                },
                  React.createElement("div", { className: "flex flex-col gap-4 sm:gap-5" },
                    // Gambar Project / Carousel
                    React.createElement("div", { 
                      onTouchStart: handleTouchStart,
                      onTouchMove: handleTouchMove,
                      onTouchEnd: handleTouchEnd,
                      onWheel: handleWheel,
                      onClick: () => {
                        setLightboxImg((selectedProject.images && selectedProject.images.length > 0) ? (selectedProject.images[activeImgIdx].url || selectedProject.images[activeImgIdx]) : selectedProject.image);
                        setZoomScale(1);
                      },
                      className: "relative w-full flex items-center justify-center rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm bg-black/5 dark:bg-white/5 group cursor-zoom-in min-h-[120px] max-h-[320px] sm:max-h-[420px]" 
                    },
                      React.createElement("img", { 
                        src: (selectedProject.images && selectedProject.images.length > 0) ? (selectedProject.images[activeImgIdx].url || selectedProject.images[activeImgIdx]) : selectedProject.image, 
                        alt: selectedProject.title, 
                        className: "w-auto h-auto max-w-full max-h-[320px] sm:max-h-[420px] object-scale-down mx-auto" 
                      }),
                      // Left Button
                      (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                        onClick: (e) => {
                          e.stopPropagation();
                          setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
                        },
                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      }, React.createElement(ChevronLeft, { size: 18 })),
                      // Right Button
                      (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                        onClick: (e) => {
                          e.stopPropagation();
                          setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
                        },
                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      }, React.createElement(ChevronRight, { size: 18 })),
                      // Indicators (dots)
                      (selectedProject.images && selectedProject.images.length > 1) && React.createElement("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" },
                        selectedProject.images.map((_, idx) => (
                          React.createElement("button", {
                            key: idx,
                            onClick: (e) => {
                              e.stopPropagation();
                              setActiveImgIdx(idx);
                            },
                            className: `w-2 h-2 rounded-full transition-all ${idx === activeImgIdx ? 'bg-white scale-125' : 'bg-white/50'}`
                          })
                        ))
                      )
                    ),
                    // Keterangan Gambar Aktif (Caption Carousel)
                    (selectedProject.images && selectedProject.images[activeImgIdx] && selectedProject.images[activeImgIdx].title) && (
                      React.createElement("div", { 
                        className: `p-3.5 rounded-xl border text-left -mt-2 transition-all ${
                          actualTheme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-100/50 border-slate-200/50'
                        }`
                      },
                        React.createElement("h5", { className: `font-bold text-xs sm:text-sm ${actualTheme === 'dark' ? 'text-[#847BFF]' : 'text-[#6366F1]'}` }, selectedProject.images[activeImgIdx].title),
                        React.createElement("p", { className: `text-[11px] sm:text-xs leading-relaxed mt-1 ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, selectedProject.images[activeImgIdx].desc)
                      )
                    ),
                    // Judul, Kategori & NDA Badge
                    React.createElement("div", { className: "flex flex-col gap-2 text-left" },
                      React.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                        React.createElement("span", { className: `text-xs font-bold uppercase tracking-wider ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, selectedProject.category),
                        selectedProject.confidential ? (
                          React.createElement("span", { 
                            className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border transition-all ${
                              actualTheme === 'dark' 
                                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                                : 'bg-rose-50 text-rose-600 border-rose-200/60 shadow-sm'
                            }` 
                          }, 
                            React.createElement(Lock, { size: 10, strokeWidth: 2.5 }),
                            "Limited Access"
                          )
                        ) : (
                          React.createElement("span", { 
                            className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border transition-all ${
                              actualTheme === 'dark' 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                : 'bg-emerald-50 text-emerald-600 border-emerald-200/60 shadow-sm'
                            }` 
                          }, 
                            React.createElement(Unlock, { size: 10, strokeWidth: 2.5 }),
                            "Full Access"
                          )
                        ),
                        selectedProject.isDummy && React.createElement("span", { 
                          className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border transition-all ${
                            actualTheme === 'dark' 
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                              : 'bg-amber-50 text-amber-700 border-amber-200/60 shadow-sm'
                          }` 
                        }, 
                          "Masked Data"
                        )
                      ),
                      React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} leading-tight whitespace-pre-line ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, selectedProject.title)
                    ),
                    React.createElement("div", { className: `h-px w-full my-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                    // Deskripsi (Overview, Challenge, Solusi & Dampak/Impact) - Tabbed
                    React.createElement("div", { className: "flex flex-col text-left mt-2" },
                      // Dummy anchor for scroll calculation
                      React.createElement("div", { ref: tabBarRef, className: "w-full h-0" }),
                      // Tab Bar
                      React.createElement("div", { 
                        className: `sticky ${isMobileView ? '-top-5 pt-5 -mx-5 px-5' : '-top-8 pt-8 -mx-8 px-8'} z-20 flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar border-b ${actualTheme === 'dark' ? `border-white/10 ${theme.darkBg}` : 'border-slate-200 bg-slate-50'} mb-5` 
                      },
                        [
                          { id: 'overview', label: 'Overview', condition: !!selectedProject.description },
                          { id: 'challenge', label: 'Challenge', condition: !!selectedProject.challenge || !!selectedProject.challengePoints },
                          { id: 'solution', label: 'Solution', condition: !!selectedProject.solution || !!selectedProject.solutionPoints },
                          { id: 'impact', label: 'Impact', condition: !!selectedProject.achievements }
                        ].filter(tab => tab.condition).map(tab => 
                          React.createElement("button", {
                            key: tab.id,
                            onClick: () => setActiveDetailTab(tab.id),
                            className: `pb-3 px-1 whitespace-nowrap ${isMobileView ? 'text-sm' : 'text-base'} font-semibold transition-all duration-300 relative ${
                              activeDetailTab === tab.id 
                                ? (actualTheme === 'dark' ? 'text-white' : 'text-slate-900') 
                                : (actualTheme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-slate-400 hover:text-slate-600')
                            }`
                          },
                            tab.label,
                            activeDetailTab === tab.id && React.createElement("div", {
                              className: "absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-t-full",
                              style: { backgroundColor: activePalette ? paletteColors[activePalette] : '#847BFF' }
                            })
                          )
                        )
                      ),
                      
                      // Tab Content
                      React.createElement("div", { className: "animate-fade-in-up-custom" },
                        activeDetailTab === 'overview' && React.createElement("div", null,
                          React.createElement("p", { 
                            className: `leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`,
                            style: { whiteSpace: 'pre-line' }
                          }, selectedProject.description)
                        ),
                        
                        activeDetailTab === 'challenge' && React.createElement("div", null,
                          selectedProject.challenge && React.createElement("p", { 
                            className: `leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`,
                            style: { whiteSpace: 'pre-line' }
                          }, selectedProject.challenge),
                          selectedProject.challengePoints && React.createElement("ul", { 
                            className: `list-outside list-disc ml-5 space-y-2 mt-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300 marker:text-gray-500' : 'text-slate-600 marker:text-slate-400'}` 
                          },
                            selectedProject.challengePoints.map((pt, idx) => (
                              React.createElement("li", { key: idx, className: "pl-1.5 leading-relaxed" }, pt)
                            ))
                          ),
                          selectedProject.challengeFooter && React.createElement("p", { 
                            className: `leading-relaxed mt-4 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`,
                            style: { whiteSpace: 'pre-line' }
                          }, selectedProject.challengeFooter)
                        ),

                        activeDetailTab === 'solution' && React.createElement("div", null,
                          selectedProject.solution && React.createElement("p", { 
                            className: `leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`,
                            style: { whiteSpace: 'pre-line' }
                          }, selectedProject.solution),
                          selectedProject.solutionPoints && React.createElement("ul", { 
                            className: `list-outside list-disc ml-5 space-y-2 mt-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300 marker:text-gray-500' : 'text-slate-600 marker:text-slate-400'}` 
                          },
                            selectedProject.solutionPoints.map((pt, idx) => (
                              React.createElement("li", { key: idx, className: "pl-1.5 leading-relaxed" }, pt)
                            ))
                          ),
                          selectedProject.solutionFooter && React.createElement("p", { 
                            className: `leading-relaxed mt-4 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`,
                            style: { whiteSpace: 'pre-line' }
                          }, selectedProject.solutionFooter)
                        ),

                        activeDetailTab === 'impact' && React.createElement("div", null,
                          React.createElement("ul", { className: `list-outside list-disc ml-5 space-y-2.5 sm:space-y-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300 marker:text-gray-500' : 'text-slate-600 marker:text-slate-400'}` },
                            selectedProject.achievements.map((achievement, idx) => (
                              React.createElement("li", { key: idx, className: "pl-1.5 leading-relaxed" }, achievement)
                            ))
                          )
                        )
                      )
                    ),
                    // Area Link Tools
                    React.createElement("div", { className: "mt-2" },
                      React.createElement("h5", { className: `font-bold mb-3 text-left ${isMobileView ? 'text-[13px]' : 'text-sm'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-500'}` }, 
                        (selectedProject.link && selectedProject.link !== "#") ? "Tools Used (Click to view project)" : "Tools Used"
                      ),
                      React.createElement("div", { className: "flex flex-wrap gap-2 sm:gap-2.5" },
                        selectedProject.tech.map(t => (
                          (selectedProject.link && selectedProject.link !== "#" && (
                            (selectedProject.link.includes("datastudio") && t === "Data Studio") ||
                            (selectedProject.link.includes("spreadsheets") && t === "Google Sheet")
                          )) ? (
                            React.createElement("a", {
                              key: t,
                              href: selectedProject.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-sm border`,
                              style: {
                                backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                                borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                                color: activeColor
                              }
                            },
                              t,
                              React.createElement(ExternalLink, { size: 12 })
                            )
                          ) : (
                            React.createElement("span", {
                              key: t,
                              className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold shadow-sm border`,
                              style: {
                                backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                                borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                                color: activeColor
                              }
                            },
                              t
                            )
                          )
                        ))
                      )
                    )
                  )
                )
              )
            ),
            document.body
          ),

          // Lightbox Modal for Zooming Images
          lightboxImg && createPortal(
            React.createElement("div", {
              onClick: () => {
                setLightboxImg(null);
                setZoomScale(1);
                setPanPos({ x: 0, y: 0 });
              },
              className: "fixed inset-0 z-[120] bg-black/75 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none"
            },
              // Close Button (Top Right)
              React.createElement("button", {
                onClick: () => {
                  setLightboxImg(null);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/55 hover:bg-white/15 text-white flex items-center justify-center transition-all z-30 border border-white/10 backdrop-blur-md shadow-lg",
                title: "Close"
              }, React.createElement(X, { size: 20 })),

              // Zoom Control Panel (Bottom Right Vertical Stack)
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: "absolute bottom-6 right-6 flex flex-col gap-1.5 z-30 bg-black/55 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl items-center"
              },
                // Zoom In Button
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(prev => Math.min(4, prev + 0.5));
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom In"
                }, React.createElement(ZoomIn, { size: 16 })),
                // Zoom Out Button
                React.createElement("button", {
                  onClick: () => {
                    const newScale = Math.max(1, zoomScale - 0.5);
                    setZoomScale(newScale);
                    if (newScale === 1) setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom Out"
                }, React.createElement(ZoomOut, { size: 16 })),
                // Reset Zoom Button (RotateCcw Icon)
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all border border-white/5",
                  title: "Reset Zoom"
                }, React.createElement(RotateCcw, { size: 14 }))
              ),

              // Floating Left Navigation Button
              (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronLeft, { size: 24 })),

              // Floating Right Navigation Button
              (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronRight, { size: 24 })),

              // Image container with pan+zoom
              React.createElement("div", {
                onClick: (e) => {
                  e.stopPropagation();
                  if (e.target === e.currentTarget) {
                    setLightboxImg(null);
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  }
                },
                onMouseDown: (e) => {
                  if (zoomScale > 1) {
                    e.preventDefault();
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    panStart.current = { x: e.clientX, y: e.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onMouseMove: (e) => {
                  if (isPanning && zoomScale > 1) {
                    const dx = e.clientX - panStart.current.x;
                    const dy = e.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onMouseUp: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onMouseLeave: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onTouchStart: (e) => {
                  if (zoomScale > 1 && e.touches.length === 1) {
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    const touch = e.touches[0];
                    panStart.current = { x: touch.clientX, y: touch.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onTouchMove: (e) => {
                  if (isPanning && zoomScale > 1 && e.touches.length === 1) {
                    const touch = e.touches[0];
                    const dx = touch.clientX - panStart.current.x;
                    const dy = touch.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onTouchEnd: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                className: "w-full h-full flex items-center justify-center overflow-hidden p-8 touch-none",
                style: { cursor: zoomScale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }
              },
                React.createElement("img", {
                  src: (selectedProject.images && selectedProject.images.length > 0) ? (selectedProject.images[activeImgIdx].url || selectedProject.images[activeImgIdx]) : selectedProject.image,
                  alt: "Zoomed view",
                  draggable: false,
                  onClick: (e) => {
                    if (lightboxDragRef.current) return;
                    if (zoomScale === 1) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      const dx = e.clientX - centerX;
                      const dy = e.clientY - centerY;
                      const newScale = 2.5;
                      setZoomScale(newScale);
                      setPanPos({
                        x: -dx * (newScale - 1),
                        y: -dy * (newScale - 1)
                      });
                    } else {
                      setZoomScale(1);
                      setPanPos({ x: 0, y: 0 });
                    }
                  },
                  style: {
                    transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomScale})`,
                    transition: isPanning ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: "85vh",
                    maxWidth: "85vw",
                    objectFit: "contain",
                    userSelect: "none",
                    pointerEvents: "auto",
                    cursor: zoomScale === 1 ? 'zoom-in' : (isPanning ? 'grabbing' : 'grab')
                  }
                })
              )
            ),
            document.body
          )
        )
      );
    };

    // 8. KOMPONEN ACTIVITIES & MOMENT SECTION
    // ==========================================
    const ActivitiesSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [activeIdx, setActiveIdx] = useState(0);
      const [isPaused, setIsPaused] = useState(false);

      // --- Touch Swipe Gestures for Mobile ---
      const touchStartX = useRef(0);
      const touchEndX = useRef(0);
      const isSwiping = useRef(false);

      const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
        isSwiping.current = false;
      };

      const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
        const diffX = Math.abs(touchStartX.current - touchEndX.current);
        if (diffX > 10) {
          isSwiping.current = true;
        }
      };

      const handleTouchEnd = () => {
        const diffX = touchStartX.current - touchEndX.current;
        const threshold = 50; // swipe threshold in px
        if (Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            // Swipe Left -> Next
            setActiveIdx(prev => (prev + 1) % activitiesData.length);
          } else {
            // Swipe Right -> Prev
            setActiveIdx(prev => (prev - 1 + activitiesData.length) % activitiesData.length);
          }
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
      };

      const handleSectionClick = () => {
        if (isSwiping.current) return;
        setIsPaused(!isPaused);
      };

      // Auto scroll timer
      useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
          setActiveIdx(prev => (prev + 1) % activitiesData.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [isPaused]);

      const handlePrev = (e) => {
        e.stopPropagation();
        setActiveIdx(prev => (prev - 1 + activitiesData.length) % activitiesData.length);
      };

      const handleNext = (e) => {
        e.stopPropagation();
        setActiveIdx(prev => (prev + 1) % activitiesData.length);
      };

      // To make the queue: show the next items in the list (4 for mobile, 8 for desktop)
      const getQueueItems = () => {
        const items = [];
        const limit = isMobileView ? 4 : 8;
        for (let i = 1; i <= limit; i++) {
          const idx = (activeIdx + i) % activitiesData.length;
          items.push({ item: activitiesData[idx], index: idx });
        }
        return items;
      };

      const queue = getQueueItems();
      const current = activitiesData[activeIdx];
      const currentNumStr = String(activeIdx + 1).padStart(2, '0');
      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';

      return (
        React.createElement("section", { 
          id: "activities", 
          onClick: handleSectionClick,
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          className: "scroll-mt-[72px] relative w-full h-[685px] sm:h-[725px] lg:h-[766px] overflow-hidden flex flex-col justify-end pt-0 pb-0 lg:pt-16 lg:pb-0 text-white bg-[#111] cursor-pointer" 
        },
          // Custom CSS animation for slide content entries
          React.createElement("style", null, `
            @keyframes fadeInUpCustom {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up-custom {
              animation: fadeInUpCustom 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            @keyframes autoplayProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
            .animate-autoplay-progress {
              animation: autoplayProgress 5000ms linear forwards;
            }
            .animate-autoplay-progress.paused {
              animation-play-state: paused;
            }
          `),

          // Stacked Background Images with Fade/Scale transition (blurred on mobile, sharp on desktop)
          React.createElement("div", { className: "absolute inset-0 z-0 overflow-hidden" },
            activitiesData.map((act, idx) => {
              const isActive = idx === activeIdx;
              return React.createElement("div", {
                key: `bg-${act.id}`,
                className: `absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                  isActive ? 'opacity-100 scale-105 pointer-events-auto' : 'opacity-0 scale-100 pointer-events-none'
                } ${isMobileView ? 'blur-[35px] scale-110 opacity-30' : ''}`
              },
                React.createElement("img", {
                  src: act.image,
                  alt: act.title,
                  className: "w-full h-full object-cover"
                })
              );
            }),
            // Combined linear gradients (vignette) to protect text readability on both bottom and left sides
            React.createElement("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none"
            }),
            React.createElement("div", {
              className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-0 pointer-events-none"
            })
          ),

          // Foreground Sharp Image (Mobile only - Edge-to-edge fit)
          isMobileView && React.createElement("div", { 
            className: "absolute top-0 left-0 w-full h-[320px] sm:h-[380px] z-10 overflow-hidden",
            style: {
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 95%)',
              maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 95%)'
            }
          },
            activitiesData.map((act, idx) => {
              const isActive = idx === activeIdx;
              return React.createElement("div", {
                key: `fg-${act.id}`,
                className: `absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`
              },
                React.createElement("img", {
                  src: act.image,
                  alt: act.title,
                  className: "w-full h-full object-cover object-top"
                })
              );
            })
          ),

          // Main Layout Content (Glassmorphic panel at the bottom on mobile, clean content grid on desktop)
          React.createElement("div", {
            className: "relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 gap-[40px] lg:flex lg:flex-col lg:gap-6 lg:items-stretch lg:justify-end -mt-24 lg:mt-auto lg:mb-0 pt-20 pb-8 lg:py-0 px-6 sm:px-8 lg:px-8"
          },
            // Dynamic blurred image background on mobile to blend with the main image
            isMobileView && React.createElement("div", {
              className: "absolute inset-0 z-0 overflow-hidden lg:hidden pointer-events-none",
              style: {
                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)',
                maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)'
              }
            },
              activitiesData.map((act, idx) => {
                const isActive = idx === activeIdx;
                return React.createElement("div", {
                  key: `details-bg-${act.id}`,
                  className: `absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`
                },
                  React.createElement("img", {
                    src: act.image,
                    alt: act.title,
                    className: "w-full h-full object-cover blur-[20px] scale-105 opacity-85"
                  })
                );
              }),
              // Stronger dark gradient overlay to ensure text readability on light images
              React.createElement("div", {
                className: "absolute inset-0 bg-gradient-to-t from-[#111]/90 via-black/60 to-transparent z-10"
              })
            ),

            // Left Column: Details panel
            React.createElement("div", {
              className: "relative z-10 lg:w-full flex flex-col items-start text-left gap-4 lg:mb-0"
            },
              React.createElement("div", {
                key: `meta-${current.id}`,
                className: "flex items-center gap-3 text-[11px] sm:text-xs font-black tracking-wider uppercase text-gray-200 animate-fade-in-up-custom"
              },
                React.createElement("span", { className: "flex items-center gap-1.5" },
                  React.createElement(MapPin, { size: 12 }), current.location
                ),
                React.createElement("span", { className: "opacity-40" }, "•"),
                React.createElement("span", null, current.date),
                React.createElement("span", { className: "opacity-40" }, "•"),
                React.createElement("button", {
                  onClick: (e) => {
                    e.stopPropagation();
                    setIsPaused(!isPaused);
                  },
                  className: "flex items-center justify-center w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-sm"
                },
                  isPaused ? React.createElement(Play, { size: 9, className: "fill-white" }) : React.createElement(Pause, { size: 9, className: "fill-white" })
                )
              ),
              React.createElement("h2", {
                key: `title-${current.id}`,
                className: "text-2xl sm:text-4xl lg:text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-md text-white animate-fade-in-up-custom"
              }, current.title),
              React.createElement("p", {
                key: `desc-${current.id}`,
                className: "text-[11px] sm:text-xs lg:text-sm text-gray-300/90 leading-relaxed drop-shadow-sm max-w-md lg:max-w-[600px] mt-1.5 animate-fade-in-up-custom"
              }, current.description)
            ),

            // Right Column: Next cards queue (swipable and scrollable horizontally on mobile)
            React.createElement("div", {
              className: "relative z-10 lg:w-full w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory flex justify-start pl-0 lg:pl-0 lg:mb-0 pt-2 pb-4 -mt-2"
            },
              React.createElement("div", {
                className: "flex gap-4 sm:gap-6 lg:gap-4"
              },
                queue.map(({ item, index }) => (
                  React.createElement("div", {
                    key: `queue-${item.id}-${index}`,
                    onClick: (e) => { e.stopPropagation(); setActiveIdx(index); },
                    className: "shrink-0 w-[150px] sm:w-[240px] lg:w-[170px] h-[100px] sm:h-[150px] lg:h-[106px] snap-start relative rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden border border-white/10 cursor-pointer shadow-lg group hover:scale-[1.03] hover:border-white/30 transition-all duration-300 bg-black/20"
                  },
                    React.createElement("img", {
                      src: item.image,
                      alt: item.title,
                      className: "absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                    }),
                    React.createElement("div", {
                      className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"
                    }),
                    React.createElement("div", {
                      className: "absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-3.5 text-left pointer-events-none"
                    },
                      React.createElement("span", { className: "text-[9px] font-bold text-gray-300 block mb-1 uppercase tracking-wider" }, item.location),
                      React.createElement("h4", { className: "text-xs sm:text-sm lg:text-[11px] font-extrabold text-white line-clamp-2 leading-snug drop-shadow-sm" }, item.title)
                    )
                  )
                ))
              )
            )
          ),
          React.createElement("div", {
            key: `progress-bar-${activeIdx}-${isPaused}`,
            className: `absolute bottom-[-1px] left-0 h-[3px] z-30 w-full animate-autoplay-progress ${isPaused ? 'paused' : ''}`,
            style: { backgroundColor: activeColor }
          })

        )
      );
    };

    // ==========================================
    // ==========================================
    // 8. KOMPONEN CONTACT SECTION
    // ==========================================
    const ContactSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSent, setIsSent] = useState(false);
      const [hoveredField, setHoveredField] = useState(null);
      const [focusedField, setFocusedField] = useState(null);

      const GmailIcon = () => React.createElement("img", {
        src: "009. Let's Connect/Gmail.png",
        alt: "Gmail",
        className: "w-[36px] h-[36px] object-contain pointer-events-none"
      });

      const WhatsappIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-[36px] h-[36px] fill-[#25D366]"
      }, 
        React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
      );

      const LinkedinIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-[36px] h-[36px] fill-[#0077B5]"
      }, 
        React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
      );

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      };

      const hoverColor = activePalette ? paletteColors[activePalette] : '';
      const inputBg = actualTheme === 'dark' ? 'bg-white/5 text-white placeholder-gray-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400';

      const paletteGradients = {
        purple: ['#847BFF', '#a78bfa'],
        emerald: ['#34d399', '#6ee7b7'],
        ocean: ['#60a5fa', '#93c5fd'],
        rose: ['#fb7185', '#fda4af'],
        google: ['#4285F4', '#3367d6']
      };
      const colors = paletteGradients[activePalette] || ['#847BFF', '#c084fc'];

      const getFieldBorderColor = (field) => {
        if (focusedField === field) {
          return { borderColor: 'transparent' };
        }
        if (hoveredField === field) {
          return { borderColor: hoverColor };
        }
        return actualTheme === 'dark' ? { borderColor: 'rgba(255,255,255,0.1)' } : { borderColor: '#E2E8F0' };
      };

      const getFieldWrapperStyle = (field) => {
        if (focusedField === field) {
          return {
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
            boxShadow: `0 0 20px ${colors[0]}33`
          };
        }
        return {
          background: 'transparent',
          boxShadow: 'none'
        };
      };

      return React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
        React.createElement("div", { className: "text-center mb-6 lg:mb-10 flex flex-col items-center gap-2" },
          React.createElement("h2", { className: `font-bold tracking-tight mb-3 ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
            "Let's ",
            renderAccentSpan("Connect", actualTheme, theme, activePalette)
          ),
          React.createElement("p", { className: `max-w-2xl mx-auto px-4 leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
            "Punya pertanyaan, ide kolaborasi, atau sekadar ingin berdiskusi tentang data dan teknologi? Saya selalu terbuka untuk berbagi pengalaman dan menjalin koneksi baru."
          )
        ),

        React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 w-full" },
          React.createElement("div", { className: `grid ${isMobileView ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-3 gap-6'} w-full` },
            [
              {
                title: "Gmail",
                desc: "Punya pertanyaan formal, penawaran proyek, atau peluang kerjasama? Hubungi saya langsung via Email.",
                subtextMobile: "achmadnoormansetiawan@gmail.com",
                url: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com",
                bg: "bg-gradient-to-br from-[#ea4335] via-[#ea4335] to-[#c5221f] text-white shadow-xl border border-red-500/10",
                textColor: "text-red-100",
                btnTextColor: "text-[#ea4335]",
                btnText: "Kirim Email",
                Icon: GmailIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement(Mail, { size: 54, className: "absolute top-8 left-8 text-white/5 -rotate-12 blur-[1px]" }),
                  React.createElement(Mail, { size: 72, className: "absolute top-4 right-12 text-white/10 rotate-12 blur-[0.5px]" }),
                  React.createElement(Mail, { size: 40, className: "absolute top-28 left-1/3 text-white/5 rotate-45" }),
                  React.createElement(Mail, { size: 58, className: "absolute top-24 right-4 text-white/5 -rotate-6 blur-[1.5px]" })
                )
              },
              {
                title: "WhatsApp",
                desc: "Ingin berdiskusi lebih cepat atau menanyakan sesuatu secara kasual? Chat langsung melalui WhatsApp.",
                subtextMobile: "+62 812-3060-7050",
                url: "https://wa.me/6281230607050",
                bg: "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl border border-emerald-500/10",
                textColor: "text-emerald-100",
                btnTextColor: "text-[#25d366]",
                btnText: "Chat WhatsApp",
                Icon: WhatsappIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-12 left-20 w-24 h-24 fill-white opacity-[0.08] -rotate-12 blur-[1px]" },
                    React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                  ),
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-4 right-10 w-16 h-16 fill-white opacity-[0.12] rotate-12 blur-[0.5px]" },
                    React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                  )
                )
              },
              {
                title: "LinkedIn",
                desc: "Mari terhubung secara profesional, berkolaborasi, atau melihat rekam jejak karir dan portfolio saya.",
                subtextMobile: "achmadnoorman",
                url: "https://www.linkedin.com/in/achmadnoorman/",
                bg: "bg-gradient-to-br from-[#0077b5] to-[#005987] text-white shadow-xl border border-blue-500/10",
                textColor: "text-blue-100",
                btnTextColor: "text-[#0077b5]",
                btnText: "Kunjungi LinkedIn",
                Icon: LinkedinIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-12 left-20 w-24 h-24 fill-white opacity-[0.05] -rotate-12 blur-[1px]" },
                    React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
                  ),
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-4 right-10 w-16 h-16 fill-white opacity-[0.08] rotate-12 blur-[0.5px]" },
                    React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
                  )
                )
              }
            ].map((card, idx) => {
              if (isMobileView) {
                return React.createElement("a", {
                  key: idx,
                  href: card.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: `relative p-5 rounded-[1.5rem] overflow-hidden flex items-center justify-between h-[100px] transition-all duration-300 hover:scale-[1.01] active:scale-95 ${card.bg} cursor-pointer shadow-md group`
                },
                  // Subtle background logo
                  React.createElement("div", { className: "absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none scale-150 transform transition-transform group-hover:scale-[1.7]" },
                    React.createElement(card.Icon)
                  ),
                  // Left & Middle Content
                  React.createElement("div", { className: "flex items-center gap-4 relative z-10 text-left w-[calc(100%-48px)]" },
                    // Icon container
                    React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 p-2.5 border border-slate-100" },
                      React.createElement(card.Icon)
                    ),
                    // Texts
                    React.createElement("div", { className: "flex flex-col min-w-0" },
                      React.createElement("h3", { className: "font-extrabold text-[17px] text-white leading-tight" }, card.title),
                      React.createElement("p", { className: "text-[13px] text-white/90 mt-0.5 truncate pr-2 font-medium" }, card.subtextMobile)
                    )
                  ),
                  // Right Arrow button
                  React.createElement("div", { className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 relative z-10 transition-transform group-hover:translate-x-1" },
                    React.createElement(ArrowRight, { size: 20, className: "text-white" })
                  )
                );
              }

              // Desktop View (Original)
              return React.createElement("div", {
                key: idx,
                className: `relative p-6 sm:p-8 rounded-[2rem] overflow-hidden flex flex-col justify-between h-[360px] sm:h-[380px] transition-all duration-300 hover:scale-[1.02] ${card.bg}`
              },
                card.floatingBg,
                React.createElement("div", { className: "flex flex-col h-full justify-between relative z-10 w-full text-left" },
                  React.createElement("div", { className: "flex flex-col" },
                    React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 border border-slate-100 " + (card.title === "Gmail" ? "p-2.5" : "") },
                      React.createElement(card.Icon)
                    ),
                    React.createElement("h3", { className: "font-bold text-xl sm:text-2xl mb-2 text-white" }, card.title),
                    React.createElement("p", { className: `text-xs sm:text-sm leading-relaxed ${card.textColor}` }, card.desc)
                  ),
                  React.createElement("a", {
                    href: card.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `bg-white hover:bg-slate-50 ${card.btnTextColor} font-bold py-3.5 px-6 rounded-2xl text-center text-xs sm:text-sm transition-all shadow-md w-full mt-6 block`
                  }, card.btnText)
                )
              );
            })
          )
        )
      );
    };
    // ==========================================
    // 10. KOMPONEN CTA SECTION (Let's Connect)
    // ==========================================
    const CTASection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const gradientClass = activePalette === 'purple' ? 'bg-gradient-to-r from-[#847BFF] to-[#A084FF]' : 
                            activePalette === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 
                            activePalette === 'ocean' ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 
                            activePalette === 'google' ? 'bg-gradient-to-r from-[#4285F4] to-[#3367d6]' :
                            'bg-gradient-to-r from-rose-400 to-pink-500';

      const bgClass = actualTheme === 'dark' 
        ? 'bg-gradient-to-r from-[#1E2030] to-[#111126]'
        : gradientClass;
        
      const textClass = 'text-white'; // Selalu putih agar terbaca jelas di atas gradasi warna
      
      const getBtnClass = () => {
        if (actualTheme === 'dark') return 'bg-white/10 hover:bg-white/20 text-white';
        
        // Di light mode, karena backgroundnya warna-warni, tombolnya kita buat putih dengan teks berwarna
        if (activePalette === 'emerald') return 'bg-white text-teal-600 hover:bg-gray-50';
        if (activePalette === 'ocean') return 'bg-white text-blue-600 hover:bg-gray-50';
        if (activePalette === 'purple') return 'bg-white text-purple-600 hover:bg-gray-50';
        if (activePalette === 'google') return 'bg-white text-[#4285F4] hover:bg-gray-50';
        return 'bg-white text-rose-600 hover:bg-gray-50';
      };

      const GmailIcon = () => React.createElement("img", {
        src: "009. Let's Connect/Gmail.png",
        alt: "Gmail",
        className: "w-6 h-6 object-contain pointer-events-none"
      });

      const WhatsappIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-6 h-6 fill-[#25D366]"
      }, 
        React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
      );

      const LinkedinIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-6 h-6 fill-[#0077B5]"
      }, 
        React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
      );

      const socialLinks = [
        { Icon: GmailIcon, url: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", shadowColor: "rgba(234, 67, 53, 0.4)" },
        { Icon: WhatsappIcon, url: "https://wa.me/6281230607050", shadowColor: "rgba(37, 211, 102, 0.4)" },
        { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/achmadnoorman/", shadowColor: "rgba(0, 119, 181, 0.4)" }
      ];

      return React.createElement("section", { className: `relative overflow-hidden w-full py-12 lg:py-16 ${bgClass} border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-transparent'}` },
        // Grid background overlay
        React.createElement("div", { 
          className: `absolute inset-0 pointer-events-none opacity-[0.08] ${actualTheme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}` 
        }),
        React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6" },
          React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${textClass}` },
            "Let's Connect"
          ),
          React.createElement("div", { className: "flex items-center gap-4" },
            socialLinks.map(({ Icon, url, shadowColor }, idx) => {
              return React.createElement("a", { 
                key: idx, 
                href: url, 
                target: "_blank",
                rel: "noreferrer",
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${shadowColor}`;
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                },
                className: "w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md transition-all duration-300 border border-slate-100 hover:scale-105" 
              },
                React.createElement(Icon)
              );
            })
          )
        )
      );
    };

    const Footer = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

      const bgClass = actualTheme === 'dark' ? theme.darkCard : 'bg-white';
      const textClass = actualTheme === 'dark' ? 'text-white' : 'text-slate-900';
      const mutedTextClass = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-500';
      
      // Menggunakan warna dinamis dari theme yang dipilih pengguna
      const iconBg = actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : `${theme.glowLight1} ${theme.accentHoverLight.replace('hover:bg-', 'hover:bg-opacity-80 ')}`; 
      // Untuk hover di light mode bisa pakai opacity atau biarkan
      const iconBgClass = actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : `${theme.glowLight1} hover:opacity-80`;
      const iconTextClass = actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight;
      
      const bannerBgClass = theme.darkBg;
      const bannerTextClass = 'text-white/90';
      
      const btnBg = actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight;
      const btnHover = actualTheme === 'dark' ? theme.accentHoverDark : theme.accentHoverLight;

      return React.createElement("footer", { className: `w-full ${bgClass} relative text-sm` },
        // Divider line with brand/theme gradient colors (integrated into footer top)
        React.createElement("div", { 
          className: "w-full h-[3px] opacity-60 bg-gradient-to-r from-transparent via-current to-transparent",
          style: { color: paletteColors[activePalette] }
        }),
        // Top Main Area
        React.createElement("div", { className: `max-w-7xl mx-auto px-6 py-12 lg:py-16 grid ${isMobileView ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6'}` },
          
          // Column 1: Brand & Socials
          React.createElement("div", { className: `flex flex-col gap-6 ${isMobileView ? '' : `lg:col-span-4 lg:pr-10 lg:border-r ${actualTheme === 'dark' ? 'lg:border-gray-800' : 'lg:border-gray-200'}`}` },
            React.createElement("div", { className: "text-2xl font-bold tracking-wide transition-all shrink-0 pt-2" },
              React.createElement("span", { className: actualTheme === 'dark' ? 'text-white' : 'text-slate-900' }, "Achmad "),
              renderAccentSpan("Noorman", actualTheme, theme, activePalette)
            ),
            React.createElement("p", { className: `leading-relaxed pr-2 max-w-xs ${mutedTextClass}` },
              "Berpengalaman dalam merancang dan membangun otomatisasi pengolahan data bisnis dan individu untuk mempercepat pengambilan keputusan strategis."
            ),

          ),
          
          // Column 2: Navigation
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-2 lg:col-start-6'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, "Navigation"),
            ['Home', 'About', 'Education', 'Experience'].map(item => (
              React.createElement("a", { key: item, href: `#${item.toLowerCase()}`, className: `hover:underline ${mutedTextClass}` }, item)
            ))
          ),

          // Column 3: More
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-2'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, "More"),
            ['Skills', 'Courses', 'Projects'].map(item => (
              React.createElement("a", { key: item, href: `#${item.toLowerCase()}`, className: `hover:underline ${mutedTextClass}` }, item)
            ))
          ),
          
          // Column 4: Contact
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-3'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, "Contact"),
            React.createElement("div", { className: "flex flex-col gap-1" },
              React.createElement("span", { className: mutedTextClass }, "Phone :"),
              React.createElement("a", { 
                href: "https://wa.me/6281230607050", 
                target: "_blank",
                rel: "noreferrer",
                className: `hover:underline ${textClass}` 
              }, "+62 812-3060-7050")
            ),
            React.createElement("div", { className: "flex flex-col gap-1" },
              React.createElement("span", { className: mutedTextClass }, "Email :"),
              React.createElement("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", target: "_blank", rel: "noreferrer", className: `hover:underline break-all ${textClass}` }, "achmadnoormansetiawan@gmail.com")
            )
          )
        ),
        
        // Bottom Banner
        React.createElement("div", { className: `w-full py-5 px-6 ${bannerBgClass} ${bannerTextClass}` },
          React.createElement("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium" },
            React.createElement("p", null, "Copyright © 2025 Achmad Noorman. All Rights Reserved."),
            React.createElement("p", null, "User Terms & Conditions | Privacy Policy")
          )
        )
      );
    };


    // ==========================================
    // 11.5. SCROLL REVEAL WRAPPER (GIMMICK ANIMATION)
    // ==========================================
    const ScrollReveal = ({ children, id, className = "scroll-mt-24", disabled = false }) => {
      const [isVisible, setIsVisible] = useState(false);
      const domRef = useRef();

      useEffect(() => {
        if (disabled) return;
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        }, { 
          threshold: 0.15,
          rootMargin: "-10% 0px -10% 0px"
        });

        const currentRef = domRef.current;
        if (currentRef) {
          observer.observe(currentRef);
        }

        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }, [disabled]);

      if (disabled) {
        return React.createElement("div", { id: id, className: className }, children);
      }

      return React.createElement("div", {
        ref: domRef,
        id: id,
        className: className
      }, 
        React.createElement("div", {
          className: `perspective-container transition-reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`
        }, children)
      );
    };

    // ==========================================
    // 12. APLIKASI UTAMA
    // ==========================================
    function App() {
      const [actualTheme, setActualTheme] = useState('light');
      const [isMobileView, setIsMobileView] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const [activePalette, setActivePalette] = useState('google');
      const [activeSection, setActiveSection] = useState('Home');
      const [isWaPopupOpen, setIsWaPopupOpen] = useState(true);
      const [activeResumeTab, setActiveResumeTab] = useState('education');

      const isManualScrolling = useRef(false);
      const manualScrollTimeout = useRef(null);

      // Reset scroll ke atas (home) ketika halaman di-refresh
      useEffect(() => {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
      }, []);

      const handleScroll = () => {
        if (isManualScrolling.current) return;
        const sections = ['home', 'about', 'projects', 'resume', 'courses', 'activities', 'contact'];
        let current = 'Home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250) {
              if (section === 'activities') {
                current = 'Gallery';
              } else if (section === 'resume') {
                if (activeResumeTab === 'education') current = 'Education';
                else if (activeResumeTab === 'skills') current = 'Skills';
                else current = 'Experience';
              } else {
                current = section.charAt(0).toUpperCase() + section.slice(1);
              }
            }
          }
        }
        setActiveSection(current);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [activeResumeTab]);

      // Spacebar Smooth Navigation to Next Section & Resume Tab switching
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === ' ' || e.keyCode === 32) {
            // Prevent default page down scroll
            e.preventDefault();

            // Set manual scroll lock to prevent scroll tracking from flickering navbar active state
            isManualScrolling.current = true;
            if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
            manualScrollTimeout.current = setTimeout(() => {
              isManualScrolling.current = false;
            }, 800);

            const activeLower = activeSection.toLowerCase();
            
            // Spacebar transitions
            if (activeLower === 'about') {
              setActiveSection('Projects');
              const projectsEl = document.getElementById('projects');
              if (projectsEl) {
                projectsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              return;
            } else if (activeLower === 'projects') {
              setActiveResumeTab('education');
              setActiveSection('Education');
              const resumeEl = document.getElementById('resume');
              if (resumeEl) {
                resumeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              return;
            } else if (activeLower === 'education') {
              setActiveResumeTab('experience');
              setActiveSection('Experience');
              const resumeEl = document.getElementById('resume');
              if (resumeEl) {
                resumeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              return;
            } else if (activeLower === 'experience') {
              setActiveResumeTab('skills');
              setActiveSection('Skills');
              const resumeEl = document.getElementById('resume');
              if (resumeEl) {
                resumeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              return;
            }

            const sections = ['home', 'about', 'projects', 'resume', 'courses', 'activities', 'contact'];
            
            // Map activeSection display name back to element ID
            let currentId = 'home';
            if (activeLower === 'gallery') {
              currentId = 'activities';
            } else if (activeLower === 'skills') {
              currentId = 'resume';
            } else if (sections.includes(activeLower)) {
              currentId = activeLower;
            }

            const currentIndex = sections.indexOf(currentId);
            const nextIndex = (currentIndex + 1) % sections.length;
            const nextId = sections[nextIndex];

            const nextEl = document.getElementById(nextId);
            if (nextEl) {
              // Set the active section state immediately to match the scroll target
              let nextSectionName = nextId.charAt(0).toUpperCase() + nextId.slice(1);
              if (nextId === 'activities') {
                nextSectionName = 'Gallery';
              } else if (nextId === 'resume') {
                nextSectionName = activeResumeTab === 'skills' ? 'Skills' : (activeResumeTab === 'experience' ? 'Experience' : 'Education');
              }
              setActiveSection(nextSectionName);

              nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [activeSection, activeResumeTab]);

      const toggleTheme = () => setActualTheme(prev => prev === 'dark' ? 'light' : 'dark');
      const theme = colorSchemes[activePalette];

      return (
        React.createElement("div", { className: "min-h-screen w-full flex justify-center items-center transition-colors duration-500" },
          React.createElement("style", null, `
                    @keyframes swing {
                        0% { transform: rotate(4deg); }
                        100% { transform: rotate(-4deg); }
                    }
                    .animate-swing {
                        animation: swing 3.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
                        transform-origin: top center;
                    }
                    /* Custom Scrollbar agar rapi */
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    /* Animasi Marquee */
                    @keyframes marqueeLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marqueeRight {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marqueeLeft 30s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marqueeRight 30s linear infinite;
                    }
                    .pause-marquee {
                        animation-play-state: paused;
                    }
                    .hover\\:pause-marquee:hover {
                        animation-play-state: paused;
                    }
                    
                    /* Custom Grid Patterns */
                    .bg-grid-pattern {
                        background-size: 40px 40px;
                        background-image: 
                            linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
                    }
                    .bg-grid-pattern-dark {
                        background-size: 40px 40px;
                        background-image: 
                            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    }
                    
                    /* Floating Animations for Tech Badges */
                    @keyframes floatBadge1 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-12px) rotate(3deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    @keyframes floatBadge2 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-8px) rotate(-4deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    @keyframes floatBadge3 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(2deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    .animate-float-1 {
                        animation: floatBadge1 5s ease-in-out infinite;
                    }
                    .animate-float-2 {
                        animation: floatBadge2 6s ease-in-out infinite;
                    }
                    .animate-float-3 {
                        animation: floatBadge3 5.5s ease-in-out infinite;
                    }
                    
                    
                    /* Premium Reveal Transition Utilities */
                    .perspective-container {
                        perspective: 1200px;
                        backface-visibility: hidden;
                    }
                    .transition-reveal {
                        transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1),
                                    transform 1200ms cubic-bezier(0.16, 1, 0.3, 1),
                                    filter 1200ms cubic-bezier(0.16, 1, 0.3, 1);
                        will-change: opacity, transform, filter;
                    }
                    .reveal-hidden {
                        opacity: 0;
                        filter: blur(12px);
                        transform: translateY(60px) scale(0.93) rotateX(8deg);
                    }
                    .reveal-visible {
                        opacity: 1;
                        filter: blur(0px);
                        transform: translateY(0) scale(1) rotateX(0deg);
                    }
                    `),
          React.createElement("div", { className: `relative overflow-hidden transition-all duration-500 ${actualTheme === 'dark' ? `${theme.darkBg} text-white` : 'bg-slate-50 text-slate-900'} w-full min-h-screen` },
            React.createElement("div", { 
              className: "w-full h-full overflow-y-auto overflow-x-hidden hide-scrollbar relative z-0 scroll-smooth",
              onScroll: handleScroll
            },

              // Grid Background
              React.createElement("div", { className: `absolute inset-0 pointer-events-none z-0 ${actualTheme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}` }),



              React.createElement(Navbar, {
                actualTheme: actualTheme,
                theme: theme,
                isMobileView: isMobileView,
                toggleTheme: toggleTheme,
                activePalette: activePalette,
                setActivePalette: setActivePalette,
                activeSection: activeSection,
                setActiveSection: (section) => {
                  isManualScrolling.current = true;
                  setActiveSection(section);
                  if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
                  manualScrollTimeout.current = setTimeout(() => {
                    isManualScrolling.current = false;
                  }, 800);
                },
                setActiveResumeTab: setActiveResumeTab
              }),



              // Ambient Glow Spots (Top)
              React.createElement("div", { className: `pointer-events-none absolute top-[-2%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-60 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow1 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[15%] right-[-5%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-50 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow3 : 'hidden'}` }),
              
              // Ambient Glow Spots (Middle - Education & Experience)
              React.createElement("div", { className: `pointer-events-none absolute top-[35%] left-[-10%] w-[450px] h-[450px] rounded-full mix-blend-screen filter blur-[130px] opacity-40 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow2 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[50%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[110px] opacity-45 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow1 : 'hidden'}` }),
              
              // Ambient Glow Spots (Bottom - Projects & Contact)
              React.createElement("div", { className: `pointer-events-none absolute top-[70%] left-[-5%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[140px] opacity-40 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow3 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[85%] right-[-5%] w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[120px] opacity-50 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow2 : 'hidden'}` }),

              React.createElement("div", { className: `max-w-7xl mx-auto px-6 relative z-10 ${isMobileView ? 'pt-20 pb-6' : 'pt-24 pb-6'}` },
                React.createElement(ScrollReveal, { key: "hero", id: "home", className: "scroll-mt-24" },
                  React.createElement(HeroSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                ),
                React.createElement(ScrollReveal, { key: "about", id: "about", className: "-scroll-mt-[300px] lg:scroll-mt-[110px]" },
                  React.createElement(AboutSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                ),
                React.createElement(ScrollReveal, { key: "projects", id: "projects", className: "scroll-mt-[45px] lg:scroll-mt-[72px]" },
                  React.createElement(ProjectsSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                ),
                React.createElement(ScrollReveal, { key: "resume", id: "resume", className: "scroll-mt-[45px] lg:scroll-mt-[72px]", disabled: isMobileView },
                  React.createElement(ResumeSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette,
                    activeTab: activeResumeTab,
                    setActiveTab: setActiveResumeTab
                  })
                ),
                React.createElement(ScrollReveal, { key: "courses", id: "courses", className: "scroll-mt-[45px] lg:scroll-mt-[72px]" },
                  React.createElement(CoursesSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                ),
              ),
              React.createElement(ScrollReveal, { key: "activities", id: "activities", className: "scroll-mt-[72px] w-full" },
                React.createElement(ActivitiesSection, {
                  actualTheme: actualTheme,
                  theme: theme,
                  isMobileView: isMobileView,
                  activePalette: activePalette
                })
              ),
              React.createElement("div", { className: `max-w-7xl mx-auto px-6 relative z-10 pb-6` },
                React.createElement(ScrollReveal, { key: "contact", id: "contact", className: "scroll-mt-[72px]" },
                  React.createElement(ContactSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                )
              ),
              
              React.createElement(Footer, {
                actualTheme: actualTheme,
                theme: theme,
                isMobileView: isMobileView,
                activePalette: activePalette
              })
            )
          )
        )
      );
    }

export default App;
