const hourlyData = [
    30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 80, 60,
    // Anda dapat menambahkan data lebih lanjut sesuai dengan jumlah jam yang diinginkan
];

const hourlyLabels = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    // Anda dapat menambahkan label waktu sesuai dengan jumlah jam yang diinginkan
];

// const dailyData =  // Total sampah per hari (misalnya dalam kg)
//     hourlyData.reduce((acc, value) => acc + value, 0);

const dailyLabels = 'Hari Ini';  // Label untuk harinya

const monthlyData =  // Total sampah per bulan (misalnya dalam kg)
    hourlyData.reduce((acc, value) => acc + value, 0) * 30; // Anggaplah ada 30 hari dalam sebulan

const monthlyLabels = 'Bulan Ini';  // Label untuk bulannya

//  new Data with date
const dailyData = [
    { date: '2023-11-01', value: 30 },
    { date: '2023-11-02', value: 40 },
    { date: '2023-11-03', value: 35 },
    { date: '2023-11-04', value: 50 },
    { date: '2023-11-05', value: 49 },
    { date: '2023-11-06', value: 60 },
    { date: '2023-11-07', value: 70 },
    { date: '2023-11-08', value: 91 },
    { date: '2023-11-09', value: 125 },
    { date: '2023-11-10', value: 100 },
    { date: '2023-11-11', value: 80 },
    { date: '2023-11-12', value: 60 },
];

export { dailyData };

// export { hourlyData, hourlyLabels, dailyData, dailyLabels, monthlyData, monthlyLabels };