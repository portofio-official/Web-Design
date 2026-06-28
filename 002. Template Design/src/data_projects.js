export const projectsData = [
  {
    id: 1,
    title: "Automated Data Consolidation\n& Performance Dashboard",
    category: "Data Visualization",
    tags: ["Data Visualization", "Data Processing", "Automation"],
    image: "010. Projects/Project 1.0.webp",
    images: [
      {
        url: "010. Projects/Project 1.0.webp",
        title: "Dashboard Store Overview Performance",
        desc: "Dashboard interaktif memantau target revenue harian, biaya operasional, rating kebersihan, dan ringkasan material terpakai.",
        descEN: "Interactive dashboard monitoring daily revenue targets, operational costs, cleanliness ratings, and used material summaries."
      },
      {
        url: "010. Projects/Project 1.1.webp",
        title: "Data Consolidation",
        desc: "Mengintegrasikan dan mengonsolidasikan data dari 88 cabang ke dalam satu sumber data terpusat secara real-time untuk kebutuhan monitoring dan pelaporan yang lebih cepat",
        descEN: "Integrating and consolidating data from 88 branches into a single centralized data source in real-time for faster monitoring and reporting needs."
      }
    ],
    description: "Sebuah jaringan bisnis F&B mengoperasikan lebih dari 88 outlet yang setiap harinya melaporkan data operasional melalui Google Forms.\n\nData yang dikirim oleh masing-masing outlet akan masuk ke Google Sheets dan digunakan sebagai dasar pemantauan performa operasional, penjualan, serta berbagai indikator bisnis lainnya.\n\nSeiring bertambahnya jumlah outlet dan volume data yang diterima setiap hari, proses pengelolaan data menjadi semakin kompleks dan membutuhkan upaya administratif yang signifikan sebelum informasi dapat digunakan untuk pelaporan dan analisis.",
    descriptionEN: "An F&B business network operates over 88 outlets that report operational data daily via Google Forms.\n\nThe data submitted by each outlet goes into Google Sheets and is used as the basis for monitoring operational performance, sales, and various other business indicators.\n\nAs the number of outlets and the volume of daily data increases, the data management process becomes increasingly complex and requires significant administrative effort before the information can be used for reporting and analysis.",
    challenge: "Sebelum sistem dikembangkan, seluruh data yang masuk dari Google Forms harus dikonsolidasikan secara manual ke dalam database utama yang digunakan sebagai sumber pelaporan.\n\nProses tersebut mencakup:",
    challengeEN: "Before the system was developed, all incoming data from Google Forms had to be manually consolidated into the main database used as the reporting source.\n\nThis process included:",
    challengePoints: [
      "Menyalin data dari sumber input ke database terpusat.",
      "Memastikan data dari seluruh outlet berhasil terkonsolidasi dengan benar.",
      "Melakukan standarisasi data akibat perbedaan format input yang dilakukan oleh pengguna, seperti penulisan satuan kg, KG, Kg, kilogram, serta berbagai variasi format lainnya.",
      "Memperbarui formula dan perhitungan akumulasi data secara manual setiap kali terdapat data baru."
    ],
    challengePointsEN: [
      "Copying data from input sources to the centralized database.",
      "Ensuring data from all outlets is successfully consolidated correctly.",
      "Standardizing data due to different input formats used by users, such as writing units like kg, KG, Kg, kilogram, and various other format variations.",
      "Manually updating formulas and accumulated data calculations every time there is new data."
    ],
    challengeFooter: "Dengan jumlah outlet yang mencapai 88 cabang, proses konsolidasi data membutuhkan sekitar 1–2 jam per hari dalam kondisi normal dan dapat memakan waktu lebih lama ketika ditemukan ketidakkonsistenan data atau kesalahan input.\n\nSelain memperlambat proses pelaporan, pendekatan ini juga meningkatkan risiko kesalahan akibat aktivitas manual yang dilakukan secara berulang.",
    challengeFooterEN: "With up to 88 branches, the data consolidation process requires about 1–2 hours per day under normal conditions and can take longer when data inconsistencies or input errors are found.\n\nBesides slowing down the reporting process, this approach also increases the risk of errors due to repetitive manual activities.",
    solution: "Saya merancang sistem konsolidasi data otomatis menggunakan kombinasi Google Sheets, Apps Script, dan formula lanjutan untuk menghilangkan proses pengolahan data manual yang berulang.\n\nSistem ini secara otomatis:",
    solutionEN: "I designed an automated data consolidation system using a combination of Google Sheets, Apps Script, and advanced formulas to eliminate repetitive manual data processing.\n\nThis system automatically:",
    solutionPoints: [
      "Menggabungkan data dari seluruh outlet ke dalam database terpusat.",
      "Melakukan standarisasi format data berdasarkan aturan yang telah ditentukan.",
      "Menghilangkan kebutuhan copy-paste data secara manual.",
      "Memperbarui perhitungan akumulasi dan indikator operasional secara otomatis ketika data baru masuk.",
      "Menyediakan sumber data yang siap digunakan untuk dashboard performa multi-outlet."
    ],
    solutionPointsEN: [
      "Merges data from all outlets into a centralized database.",
      "Standardizes data formats based on predefined rules.",
      "Eliminates the need for manual copy-pasting of data.",
      "Updates accumulations and operational indicators automatically when new data arrives.",
      "Provides a ready-to-use data source for a multi-outlet performance dashboard."
    ],
    solutionFooter: "Selain itu, saya mengembangkan mekanisme sinkronisasi otomatis menggunakan Apps Script sehingga outlet baru dapat langsung terhubung ke proses konsolidasi data tanpa memerlukan penyesuaian formula atau konfigurasi manual.\n\nDalam proses pengembangan, saya juga memanfaatkan formula lanjutan Google Sheets untuk menangani kebutuhan transformasi data yang tidak terstandarisasi.",
    solutionFooterEN: "Additionally, I developed an automated synchronization mechanism using Apps Script so new outlets can instantly connect to the data consolidation process without requiring formula adjustments or manual configuration.\n\nDuring development, I also utilized advanced Google Sheets formulas to handle non-standardized data transformation needs.",
    achievements: [
      "Mengurangi waktu konsolidasi data harian dari 1–2 jam menjadi proses yang berjalan secara otomatis (lebih dari 80% lebih cepat).",
      "Menghemat sekitar 26–52 jam kerja administratif per bulan yang sebelumnya digunakan untuk aktivitas konsolidasi data manual.",
      "Menghilangkan kebutuhan copy-paste data dari sumber input ke database utama.",
      "Meningkatkan konsistensi data melalui standarisasi format input dari 88+ outlet.",
      "Memungkinkan penambahan outlet baru tanpa memerlukan penyesuaian formula atau proses konsolidasi manual.",
      "Menyediakan data yang siap digunakan untuk pemantauan performa outlet secara lebih cepat dan real-time."
    ],
    achievementsEN: [
      "Reduced daily data consolidation time from 1–2 hours to a fully automated process (over 80% faster).",
      "Saved around 26–52 hours of administrative work per month previously spent on manual data consolidation activities.",
      "Eliminated the need to copy-paste data from input sources to the main database.",
      "Improved data consistency through standardized input formats from 88+ outlets.",
      "Allowed for the addition of new outlets without requiring formula adjustments or manual consolidation processes.",
      "Provided ready-to-use data for monitoring outlet performance much faster and in real-time."
    ],
    tech: ["Google Sheet", "Data Studio", "Apps Script"],
    confidential: true,
    links: [
      { url: "https://datastudio.google.com/reporting/b90cce9a-7115-4f64-9874-7c4676f7c5c0", label: "View Live Dashboard" },
      { url: "https://docs.google.com/spreadsheets/d/1S1G_L8MfTq-s3i14TzlV1jX9k31-UHDzwU9kH6ZYD9A/edit?usp=sharing", label: "Consolidation Data" },
      { url: "https://docs.google.com/spreadsheets/d/1Loxug8WT7yNxCfde9Qxf3uEvJUzIPS7nf-kyKhXkuCE/edit?usp=sharing", label: "Transformation Data" },
      { url: "https://docs.google.com/spreadsheets/d/1ze3Dzli8Obzms6BNFlibYnwLMUhwMkoqRwjEZ0_ujWY/edit?usp=sharing", label: "Data Stream" }
    ]
  },
  {
    id: 2,
    title: "Personal Finance\nTracking System",
    category: "Data Management",
    tags: ["Data Management", "Finance Dashboard", "Budgeting"],
    date: "Maret 2026",
    dateEN: "March 2026",
    image: "010. Projects/Project 2.0.webp",
    images: [
      {
        url: "010. Projects/Project 2.1.webp",
        title: "Total Wealth & Wealth Breakdown",
        desc: "Menampilkan total kekayaan bersih beserta rincian saldo di setiap rekening bank dan dompet digital. Cukup buka satu halaman ini untuk tahu kondisi keuangan secara keseluruhan, tanpa perlu cek satu per satu aplikasi.",
        descEN: "Displays total net wealth along with balance details for every bank account and digital wallet. Just open this one page to know your overall financial condition, without needing to check apps one by one."
      },
      {
        url: "010. Projects/Project 2.2.webp",
        title: "Transaction Log",
        desc: "Tempat mencatat semua uang masuk dan keluar, mulai dari gaji bulanan, transfer antar-rekening, sampai pengeluaran harian. Setiap transaksi langsung terkategorisasi, jadi tidak ada lagi yang namanya lupa catat.",
        descEN: "A place to record all money in and out, from monthly salary, inter-account transfers, to daily expenses. Every transaction is directly categorized, so no more forgetting to record."
      },
      {
        url: "010. Projects/Project 2.3.webp",
        title: "Budgeting Plan",
        desc: "Di awal bulan, tentukan dulu berapa yang mau dialokasikan untuk setiap kebutuhan. Sistem akan langsung menghitung estimasi sisa saldo di akhir bulan, jadi Anda sudah tahu apakah bulan ini bisa menabung atau perlu mengatur ulang prioritas.",
        descEN: "At the beginning of the month, determine how much to allocate for each need. The system will immediately calculate the estimated remaining balance at the end of the month, so you know whether you can save this month or need to rearrange priorities."
      },
      {
        url: "010. Projects/Project 2.4.webp",
        title: "Monthly Cashflow Movement",
        desc: "Grafik yang menunjukkan perbandingan pemasukan dan pengeluaran dari Januari sampai Desember. Dari sini langsung kelihatan bulan mana yang paling boros dan bulan mana yang paling bisa diandalkan untuk menabung.",
        descEN: "A graph showing the comparison of income and expenses from January to December. From here, you can directly see which month is the most extravagant and which month is the most reliable for saving."
      },
      {
        url: "010. Projects/Project 2.5.webp",
        title: "Allocation vs Realization Report",
        desc: "Membandingkan anggaran yang sudah direncanakan dengan pengeluaran yang benar-benar terjadi. Kalau ada pos yang over budget, langsung ketahuan di sini, jadi bisa segera disesuaikan untuk bulan berikutnya.",
        descEN: "Compares the planned budget with actual expenses. If any category is over budget, it's immediately caught here, allowing for quick adjustments for the following month."
      }
    ],
    description: "Template keuangan pribadi yang dirancang untuk membantu pengguna mengelola kondisi finansial secara lebih terstruktur melalui fitur budgeting, pencatatan pemasukan dan pengeluaran, pemantauan saldo, serta laporan keuangan bulanan yang memberikan gambaran menyeluruh mengenai arus kas dan kebiasaan pengeluaran.",
    descriptionEN: "A personal finance template designed to help users manage their financial conditions more structurally through budgeting features, income and expense tracking, balance monitoring, and monthly financial reports that provide a comprehensive overview of cash flow and spending habits.",
    achievements: [
      "Mentransformasi pengelolaan keuangan dari yang sebelumnya tidak memiliki dokumentasi finansial menjadi sistem terstruktur menggunakan Google Sheets, sehingga seluruh arus kas masuk dan keluar dapat terpantau secara sistematis.",
      "Mempersingkat waktu identifikasi penyimpangan pengeluaran dari akhir bulan menjadi real-time melalui implementasi fitur perbandingan alokasi vs realisasi anggaran per kategori secara otomatis, sehingga treatment terhadap masalah keuangan lebih tepat sasaran dan berbasis data."
    ],
    achievementsEN: [
      "Transformed financial management from previously lacking financial documentation to a structured system using Google Sheets, so all incoming and outgoing cash flows can be systematically monitored.",
      "Shortened the time to identify expense deviations from end-of-month to real-time by implementing an automated budget allocation vs. realization comparison feature per category, enabling data-driven and targeted financial problem treatments."
    ],
    tech: ["Google Sheet", "Apps Script"],
    confidential: false,
    link: "https://docs.google.com/spreadsheets/d/1GhEIaF38MyzfLFoHGfjI4qN_FBenZyRZzIwmq5FFDQ0/edit?usp=sharing"
  },
  {
    id: 3,
    title: "Operational Data Transformation System",
    category: "Data Management",
    tags: ["Data Management", "Data Integration", "Reporting Automation"],
    date: "Januari 2025",
    dateEN: "January 2025",
    image: "010. Projects/Project 3.0.webp",
    images: [
      {
        url: "010. Projects/Project 3.0.webp",
        title: "Centralized Operational Reporting Hub",
        desc: "Sistem pelaporan terpusat yang menghubungkan 42 laporan operasional ke dalam satu sumber informasi terintegrasi, memungkinkan akses data real-time dan mendukung pengambilan keputusan yang lebih cepat dan konsisten.",
        descEN: "A centralized reporting system connecting 42 operational reports into a single integrated information source, enabling real-time data access and supporting faster, more consistent decision making."
      }
    ],
    description: "Ketika bergabung dengan perusahaan pada Oktober 2023, saya menemukan bahwa proses pelaporan operasional yang telah digunakan selama lebih dari 8 tahun masih bergantung pada pengelolaan dan distribusi file laporan secara manual.\n\nDalam praktiknya, setiap perubahan data mengharuskan staf mengunduh, memperbarui, lalu mengirim ulang laporan melalui email atau aplikasi pesan kepada berbagai stakeholder. Seiring bertambahnya volume data dan jumlah pengguna, proses ini mulai menciptakan berbagai hambatan operasional yang berdampak pada kecepatan akses informasi dan kualitas pengambilan keputusan.\n\nMelihat kondisi tersebut, saya menginisiasi pengembangan sistem pelaporan terpusat yang memungkinkan seluruh stakeholder mengakses data terbaru secara real-time dari satu sumber informasi yang terintegrasi.",
    descriptionEN: "When joining the company in October 2023, I discovered that the operational reporting process, which had been in use for over 8 years, still relied on the manual management and distribution of report files.\n\nIn practice, every data change required staff to download, update, and resend reports via email or messaging apps to various stakeholders. As the data volume and number of users grew, this process began creating operational bottlenecks that impacted information access speed and decision quality.\n\nSeeing this, I initiated the development of a centralized reporting system that enables all stakeholders to access the latest data in real-time from a single integrated information source.",
    challenge: "Sebelum sistem ini dikembangkan, proses pelaporan operasional yang telah digunakan selama lebih dari 8 tahun masih mengandalkan pengelolaan dan distribusi laporan secara manual.\n\nPada awal implementasinya, jumlah laporan operasional masih terbatas sehingga proses kerja dapat berjalan dengan baik. Namun, seiring berkembangnya kebutuhan bisnis, jumlah laporan terus bertambah hingga mencapai 42 file laporan operasional dengan tujuan dan kebutuhan yang berbeda.\n\nPertumbuhan jumlah laporan tersebut meningkatkan kompleksitas pengelolaan data dan memunculkan beberapa tantangan:",
    challengeEN: "Before this system was developed, the operational reporting process used for over 8 years still relied on manual report management and distribution.\n\nInitially, the number of operational reports was limited, so the workflow ran smoothly. However, as business needs grew, the number of reports expanded to 42 operational report files with different purposes and requirements.\n\nThis growth increased data management complexity and introduced several challenges:",
    challengePoints: [
      "Setiap pembaruan data mengharuskan staf memperbarui dan membagikan ulang laporan kepada stakeholder terkait.",
      "Stakeholder perlu memastikan secara mandiri bahwa laporan yang digunakan merupakan versi terbaru.",
      "File laporan tersebar di berbagai folder penyimpanan, sehingga versi data yang paling mutakhir dapat berada pada admin yang berbeda."
    ],
    challengePointsEN: [
      "Every data update required staff to manually update and reshare reports to related stakeholders.",
      "Stakeholders had to independently verify that the report they were using was the latest version.",
      "Report files were scattered across various storage folders, meaning the most up-to-date data version could reside with different admins."
    ],
    challengeFooter: "Pada saat yang sama, sekitar 10 stakeholder internal, termasuk admin cabang, admin pusat, supervisor, dan manajemen, membutuhkan akses terhadap informasi yang akurat dan konsisten untuk mendukung aktivitas operasional serta pengambilan keputusan.",
    challengeFooterEN: "At the same time, around 10 internal stakeholders, including branch admins, HQ admins, supervisors, and management, required access to accurate and consistent information to support operational activities and decision making.",
    solution: "Saya merancang dan mengimplementasikan sistem pelaporan terpusat menggunakan Google Sheets sebagai platform kolaborasi berbasis cloud.\n\nLebih dari 42 sumber data operasional dihubungkan ke dalam satu struktur pelaporan yang terorganisir dan saling terintegrasi. Sistem ini memungkinkan pembaruan data dilakukan satu kali dan langsung tersedia bagi seluruh stakeholder yang memiliki akses.\n\nDengan pendekatan ini, laporan tidak lagi bergantung pada proses pengiriman file secara manual, sehingga setiap pengguna dapat mengakses informasi yang sama secara real-time dari satu sumber data yang konsisten.",
    solutionEN: "I designed and implemented a centralized reporting system using Google Sheets as a cloud-based collaboration platform.\n\nOver 42 operational data sources were connected into a single, organized, and mutually integrated reporting structure. This system allows data updates to be done once and instantly available to all authorized stakeholders.\n\nWith this approach, reports no longer rely on manual file transmission processes, allowing every user to access the exact same information in real-time from a consistent data source.",
    achievements: [
      "Mengintegrasikan 42 file laporan operasional ke dalam satu pusat informasi terintegrasi.",
      "Menyediakan akses data real-time bagi sekitar 10 stakeholder internal, termasuk admin cabang, admin pusat, supervisor cabang, dan manajemen.",
      "Mengurangi ketergantungan pada proses distribusi laporan melalui email dan aplikasi pesan.",
      "Meminimalkan risiko penggunaan file atau laporan yang tidak terbaru.",
      "Mendukung pengambilan keputusan yang lebih cepat melalui akses informasi yang lebih akurat dan terkini."
    ],
    achievementsEN: [
      "Integrated 42 operational report files into a single integrated information hub.",
      "Provided real-time data access for around 10 internal stakeholders, including branch admins, HQ admins, branch supervisors, and management.",
      "Reduced reliance on report distribution via email and messaging apps.",
      "Minimized the risk of using outdated files or reports.",
      "Supported faster decision-making through access to more accurate and up-to-date information."
    ],
    tech: ["Google Sheet", "Data Studio", "Apps Script"],
    confidential: true,
    comingSoon: false,
    link: "https://docs.google.com/spreadsheets/d/1OF0WbhI3PdRj6TLXr4Bx6gpirhI8rzRNofXFsi3QvGc/edit?gid=0#gid=0"
  },
  {
    id: 4,
    title: "Outbound Performance Reporting Automation",
    category: "Automation",
    tags: ["Automation", "Performance Analysis", "Data Validation"],
    date: "Maret 2025",
    dateEN: "March 2025",
    image: "010. Projects/Project 4.0.webp",
    images: [
      {
        url: "010. Projects/Project 4.0.webp",
        title: "Outbound Performance Dashboard",
        desc: "Sistem pelaporan otomatis turnaround time (TAT) operasional outbound berdasarkan integrasi data dan validasi aktivitas secara real-time.",
        descEN: "Automated outbound operational turnaround time (TAT) reporting system based on real-time data integration and activity validation."
      },
      {
        url: "010. Projects/Project 4.1.webp",
        title: "Operational Turnaround Time (TAT) Analysis",
        desc: "Visualisasi dan analisis turnaround time (TAT) check-in, check-out, serta proses pengambilan barang.",
        descEN: "Visualization and analysis of check-in, check-out, and goods retrieval process turnaround times (TAT)."
      },
      {
        url: "010. Projects/Project 4.2.webp",
        title: "CCTV Validation & Data Reconciliation",
        desc: "Validasi aktivitas aktual berdasarkan rekaman CCTV yang disinkronkan dengan data sistem.",
        descEN: "Actual activity validation based on CCTV footage synchronized with system data."
      },
      {
        url: "010. Projects/Project 4.3.webp",
        title: "Automated Classification & Performance Metrics",
        desc: "Klasifikasi indikator kinerja otomatis seperti ST Preload, ST Loading Time, ST Checked, dan Turnaround Time.",
        descEN: "Automated performance indicator classification such as ST Preload, ST Loading Time, ST Checked, and Turnaround Time."
      },
      {
        url: "010. Projects/Project 4.4.webp",
        title: "Efficiency & Operational Cost Savings",
        desc: "Dasbor pemantauan efisiensi waktu kerja dan penghematan biaya lembur operasional harian.",
        descEN: "Dashboard monitoring daily work time efficiency and operational overtime cost savings."
      }
    ],
    description: "Saat bergabung dengan perusahaan pada Oktober 2023 sebagai Administrator Head Office di divisi operasional, salah satu tanggung jawab saya adalah menyediakan informasi yang akurat dan tepat waktu untuk mendukung pemantauan kinerja tim operasional di setiap cabang.\n\nSalah satu kebutuhan utama tim operasional & manajemen adalah laporan performa outbound yang mengukur kesesuaian antara aktivitas yang tercatat di sistem dengan kondisi aktual berdasarkan validasi CCTV yang dilakukan oleh tim IT Support.\n\nLaporan ini digunakan untuk memantau turnaround time (TAT) pada setiap tahapan proses operasional, mulai dari check-in, proses pengambilan barang, hingga check-out.\n\nKarena laporan operasional yang saya kelola bergantung data dari tim monitoring, keterlambatan proses pengolahan data sering kali berdampak langsung pada penyelesaian laporan di tim operasional.",
    descriptionEN: "Upon joining the company in October 2023 as a Head Office Administrator in the operations division, one of my responsibilities was to provide accurate and timely information to support operational performance monitoring at each branch.\n\nA key requirement for the operations team & management was an outbound performance report measuring the alignment between system-recorded activities and actual conditions based on CCTV validation conducted by the IT Support team.\n\nThis report is used to monitor turnaround times (TAT) at every operational stage, from check-in and goods retrieval to check-out.\n\nBecause the operational reports I managed relied on data from the monitoring team, delays in data processing often directly impacted the completion of operations team reports.",
    challenge: "Proses validasi data outbound mengandalkan kombinasi data hasil ekstraksi sistem dan verifikasi manual melalui rekaman CCTV.\n\nSetiap hari, tim IT Support memproses sekitar 250 transaksi harian dengan membandingkan waktu aktual dan data yang tercatat di sistem untuk beberapa cabang operasional.\n\nSebelum sistem dikembangkan, seluruh proses klasifikasi dan perhitungan indikator operasional dilakukan secara manual setelah proses validasi selesai, termasuk:",
    challengeEN: "The outbound data validation process relied on a combination of system-extracted data and manual verification via CCTV footage.\n\nEvery day, the IT Support team processed around 250 daily transactions by comparing actual times with system-recorded data across multiple operational branches.\n\nBefore the system was developed, all classification and operational indicator calculation processes were done manually after validation was complete, including:",
    challengePoints: [
      "Perhitungan durasi pada setiap tahapan proses operasional.",
      "Penyesuaian rest time berdasarkan aturan operasional yang memengaruhi perhitungan durasi pada setiap tahapan proses.",
      "Klasifikasi indikator kinerja seperti ST Preload, ST Loading Time, ST Checked, dan Turnaround Time (TAT)."
    ],
    challengePointsEN: [
      "Calculating duration at each operational process stage.",
      "Adjusting rest times based on operational rules affecting duration calculations at each stage.",
      "Classifying performance indicators such as ST Preload, ST Loading Time, ST Checked, and Turnaround Time (TAT)."
    ],
    challengeFooter: "Seiring ekspansi operasional dari tiga menjadi empat cabang, proses ini membutuhkan waktu sekitar 4–6 jam per hari, sehingga laporan operasional baru dapat diselesaikan pada malam hari dan memperpanjang waktu kerja.\n\nSelain itu, aturan perhitungan dan klasifikasi belum terdokumentasi secara sistematis sehingga diperlukan diskusi intensif dengan berbagai pihak untuk memahami indikator, menentukan sumber data acuan, dan mengidentifikasi pola data yang dapat diotomatisasi.",
    challengeFooterEN: "With operational expansion from three to four branches, this process required about 4–6 hours per day, meaning operational reports could only be finished at night, extending working hours.\n\nFurthermore, calculation and classification rules were not systematically documented, requiring intensive discussions with various parties to understand indicators, determine reference data sources, and identify automatable data patterns.",
    solution: "Saya menginisiasi kolaborasi lintas divisi dengan tim IT Support untuk memetakan aturan bisnis dan mengidentifikasi pola data yang berulang dalam proses validasi operasional.\n\nMelalui serangkaian diskusi dan analisis data historis, saya mengidentifikasi hidden patterns dalam data serta menentukan sumber informasi yang digunakan sebagai acuan perhitungan setiap indikator operasional.\n\nSelanjutnya, saya menerjemahkan aturan bisnis tersebut ke dalam logika otomatisasi menggunakan Google Sheets melalui kombinasi formula dinamis seperti ARRAYFORMULA dan nested IF.\n\nSistem ini mengintegrasikan proses perhitungan dan klasifikasi ke dalam satu alur kerja terstandarisasi, termasuk penghitungan durasi setiap tahapan operasional, penyesuaian rest time, serta klasifikasi indikator kinerja seperti ST Preload, ST Loading Time, ST Checked, dan TAT Include Rest.\n\nDengan pendekatan ini, seluruh metrik utama dihitung secara otomatis setelah proses data entry oleh tim IT Support selesai dilakukan, sehingga proses klasifikasi manual tidak lagi diperlukan.",
    solutionEN: "I initiated cross-divisional collaboration with the IT Support team to map business rules and identify recurring data patterns in the operational validation process.\n\nThrough a series of discussions and historical data analysis, I identified hidden patterns in the data and determined the information sources used as calculation references for each operational indicator.\n\nNext, I translated these business rules into automation logic using Google Sheets via a combination of dynamic formulas like ARRAYFORMULA and nested IFs.\n\nThis system integrated calculation and classification processes into a standardized workflow, including calculating durations for each operational stage, adjusting rest times, and classifying performance indicators like ST Preload, ST Loading Time, ST Checked, and TAT Include Rest.\n\nWith this approach, all key metrics are automatically calculated once data entry by the IT Support team is complete, eliminating the need for manual classification.",
    achievements: [
      "Mengurangi waktu penyelesaian laporan operasional dari 4–6 jam per hari menjadi kurang dari 30 menit.",
      "Menghilangkan kebutuhan lembur harian yang sebelumnya mencapai 30–40 jam per minggu untuk dua personel.",
      "Menghasilkan estimasi efisiensi biaya operasional sebesar Rp2,26–Rp2,78 juta per bulan melalui eliminasi biaya lembur dan uang makan."
    ],
    achievementsEN: [
      "Reduced operational report completion time from 4–6 hours per day to under 30 minutes.",
      "Eliminated the daily overtime requirement that previously reached 30–40 hours per week for two personnel.",
      "Generated estimated operational cost efficiencies of IDR 2.26–2.78 million per month through the elimination of overtime and meal allowances."
    ],
    tech: ["Google Sheet", "Apps Script"],
    confidential: false,
    isDummy: true,
    comingSoon: false,
    link: "https://docs.google.com/spreadsheets/d/17r1ZjStXBSt5w4ypqXgHI-dEQ8p2T8VINdtxErMamBs/edit?usp=sharing"
  },
  {
    id: 5,
    title: "Accounting Ledger\nAutomation System",
    category: "Automation",
    tags: ["Automation", "Accounting", "Data Processing"],
    date: "April 2025",
    dateEN: "April 2025",
    image: "010. Projects/Project 5.0.webp",
    images: [{ url: "010. Projects/Project 5.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan", descEN: "This project is currently being documented" }],
    description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
    descriptionEN: "This project is still in the completion stage and will be fully published soon.",
    achievements: ["Sedang dalam proses dokumentasi."],
    achievementsEN: ["Currently in the documentation process."],
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
    tags: ["Data Management", "Reporting", "System Integration"],
    date: "Mei 2025",
    dateEN: "May 2025",
    image: "010. Projects/Project 6.0.webp",
    images: [{ url: "010. Projects/Project 6.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan", descEN: "This project is currently being documented" }],
    description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
    descriptionEN: "This project is still in the completion stage and will be fully published soon.",
    achievements: ["Sedang dalam proses dokumentasi."],
    achievementsEN: ["Currently in the documentation process."],
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
    tags: ["Data Visualization", "Automation", "Payroll Analytics"],
    date: "Juni 2025",
    dateEN: "June 2025",
    image: "010. Projects/Project 7.0.webp",
    images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan", descEN: "This project is currently being documented" }],
    description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
    descriptionEN: "This project is still in the completion stage and will be fully published soon.",
    achievements: ["Sedang dalam proses dokumentasi."],
    achievementsEN: ["Currently in the documentation process."],
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
    tags: ["Automation", "Data Processing", "HR Analytics"],
    date: "Juli 2025",
    dateEN: "July 2025",
    image: "010. Projects/Project 8.0.webp",
    images: [{ url: "010. Projects/Project 8.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan", descEN: "This project is currently being documented" }],
    description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
    descriptionEN: "This project is still in the completion stage and will be fully published soon.",
    achievements: ["Sedang dalam proses dokumentasi."],
    achievementsEN: ["Currently in the documentation process."],
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
    tags: ["Data Management", "System Development", "Performance Tracking"],
    date: "Agustus 2025",
    dateEN: "August 2025",
    image: "010. Projects/Project 7.0.webp",
    images: [{ url: "010. Projects/Project 7.0.webp", title: "Coming Soon", desc: "Project ini sedang dalam penyusunan", descEN: "This project is currently being documented" }],
    description: "Project ini masih dalam tahap penyelesaian dan akan segera dipublikasikan secara lengkap.",
    descriptionEN: "This project is still in the completion stage and will be fully published soon.",
    achievements: ["Sedang dalam proses dokumentasi."],
    achievementsEN: ["Currently in the documentation process."],
    tech: ["Apps Script"],
    confidential: false,
    isDummy: true,
    comingSoon: true,
    link: "#"
  }
];
