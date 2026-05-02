// =================================================================
// SECTION 1: RAW DATASETS (DASHBOARD)
// =================================================================

// --- بيانات 2025 (الأرشيف) ---
const DATA_2025 = {
    permits: `
المشروع,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
التحكم الاقليمي,20,29,14,21,11,0,18,10,8,19,8,27
الحي الحكومي,1,1,2,0,0,0,2,0,0,0,2,0
الحي الدبلوماسي,32,29,23,12,17,24,81,105,63,23,33,90
العلمين,53,62,21,99,101,46,113,119,77,29,47,55
الفردوس,59,44,11,16,66,6,1,2,0,0,6,43
الكيان العسكري,47,36,22,27,25,27,50,46,48,34,27,30
حياة كريمة الفيوم,148,127,116,122,111,113,99,79,59,33,18,35
حياة كريمة المنيا,111,60,38,68,84,32,46,39,47,59,22,24
حياة كريمة أرمنت,33,22,10,5,1,0,0,4,0,0,0,0
حياة كريمة أسنا,19,12,1,0,10,3,6,0,2,0,0,0
حياة كريمة أسوان,88,54,29,23,33,20,30,9,11,10,13,9
حياة كريمة صدفا,14,8,5,5,1,6,1,2,0,0,0,0
حياة كريمة مطوبس,14,11,3,16,10,1,0,8,2,14,10,14
حياة كريمة منفلوط,23,14,45,9,9,15,6,4,3,0,0,0
دهشور,57,50,10,76,66,19,7,30,39,40,43,83
سانت كاترين,61,45,32,35,68,14,20,23,17,23,5,44
ميناء الدخيلة,87,22,6,7,5,9,7,0,1,0,13,40
سوهاج,20,26,24,26,29,24,63,52,60,41,28,43
مصنع البلاط,0,0,0,0,0,0,0,0,0,0,20,30
أبو قير,1,0,0,1,1,1,0,0,0,0,13,35
العبور,0,0,0,11,14,16,16,32,83,66,66,97
العاشر من رمضان,0,0,0,0,0,2,9,8,0,0,3,21
حياة كريمة زفتى,0,0,0,0,0,0,0,1,0,0,0
`,
    parties: `
Column1,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
المقاول,535,402,227,334,388,186,323,339,301,166,204,416
المخازن,71,54,39,59,69,54,58,58,45,41,27,41
قسم الجودة,35,22,18,22,30,23,27,16,30,25,31,56
قسم المساحة,47,24,8,18,23,8,36,32,44,21,20,44
قسم تنفيذ الكهرباء,196,148,118,146,152,106,126,123,98,138,94,132
قسم المدني,4,2,2,0,0,1,5,5,2,0,1,31
`,
    delays: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Delays,588,431,245,381,443,315,476,466,348,282,254,535
On Time,300,221,167,198,219,63,99,107,172,109,123,185
`,
    shifts: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
DAY,862,622,398,549,643,371,557,560,513,387,371,686
NIGHT,26,30,14,30,19,7,18,13,7,4,5,34
`,
    compliance: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Compliance,0.34,0.34,0.41,0.34,0.33,0.17,0.17,0.19,0.33,0.28,0.33,0.26
`,
    performance: `
Month,HSE_Observation
Jan,107
Feb,58
Mar,82
Apr,85
May,84
Jun,47
Jul,80
Aug,82
Sep,67
Oct,67
Nov,89
Dec,115
`,
    manpower: `
Month,Worked Hours Sewedy,Worked Hours Sub,LTI,MTC,Property Damage,Campaigns,Drills
Jan,51331,80716,0,0,0,0,0
Feb,75596,62600,0,0,1,0,0
Mar,64069,52523,0,0,0,0,0
Apr,69775,60529,0,0,4,0,0
May,73455,71296,0,1,1,1,0
Jun,61436,52194,0,0,0,0,0
Jul,68975,61305,0,1,0,0,0
Aug,69089,60615,0,0,2,1,1
Sep,71945,67666,0,0,0,1,1
Oct,65510,51302,0,0,1,0,1
Nov,78353,72241,0,0,1,0,0
Dec,78461,102663,0,0,1,0,0
`,
    training: `
Month,Emp Manpower,Total Training
Jan,467,716
Feb,467,471
Mar,455,465
Apr,438,600
May,424,695
Jun,427,339
Jul,407,553
Aug,406,616
Sep,406,534
Oct,388,576
Nov,375,634
Dec,359,895
`,
    inductions: `
Month,Total
Jan,192
Feb,110
Mar,74
Apr,205
May,160
Jun,109
Jul,168
Aug,207
Sep,132
Oct,125
Nov,187
Dec,337
`
};

// --- بيانات 2026 (الجديدة - أصفار) ---
const DATA_2026 = {
    permits: `
المشروع,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
التحكم الاقليمي,55,16,16,18,0,0,0,0,0,0,0,0
الحي الحكومي,2,1,0,2,0,0,0,0,0,0,0,0
الحي الدبلوماسي,110,93,22,18,0,0,0,0,0,0,0,0
العلمين,73,50,11,15,0,0,0,0,0,0,0,0
الفردوس,11,11,4,25,0,0,0,0,0,0,0,0
الكيان العسكري,24,22,6,10,0,0,0,0,0,0,0,0
حياة كريمة الفيوم,25,47,34,57,0,0,0,0,0,0,0,0
حياة كريمة المنيا,23,16,9,11,0,0,0,0,0,0,0,0
حياة كريمة أرمنت,0,0,0,0,0,0,0,0,0,0,0,0
حياة كريمة أسنا,0,0,0,0,0,0,0,0,0,0,0,0
حياة كريمة أسوان,12,3,0,1,0,0,0,0,0,0,0,0
حياة كريمة صدفا,0,0,0,0,0,0,0,0,0,0,0,0
حياة كريمة مطوبس,9,8,7,0,0,0,0,0,0,0,0,0
حياة كريمة منفلوط,0,0,0,0,0,0,0,0,0,0,0,0
دهشور,104,85,73,116,0,0,0,0,0,0,0,0
سانت كاترين,3,1,4,0,4,0,0,0,0,0,0,0
ميناء الدخيلة,17,0,0,0,0,0,0,0,0,0,0,0
سوهاج,38,37,45,54,0,0,0,0,0,0,0,0
مصنع البلاط,66,51,36,26,0,0,0,0,0,0,0,0
أبو قير,18,32,9,69,0,0,0,0,0,0,0,0
العبور,27,29,15,3,0,0,0,0,0,0,0,0
العاشر من رمضان,38,25,49,59,0,0,0,0,0,0,0,0
حياة كريمة زفتى,0,0,0,0,0,0,0,0,0,0,0,0
`,
    parties: `
Column1,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
المقاول,415,333,232,319,0,0,0,0,0,0,0,0
المخازن,45,25,19,29,0,0,0,0,0,0,0,0
قسم الجودة,24,21,15,48,0,0,0,0,0,0,0,0
قسم المساحة,24,27,15,21,0,0,0,0,0,0,0,0
قسم تنفيذ الكهرباء,120,95,44,52,0,0,0,0,0,0,0,0
قسم المدني,27,26,15,19,0,0,0,0,0,0,0,0
`,
    delays: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Delays,528,460,300,355,0,0,0,0,0,0,0,0
On Time,127,67,40,33,0,0,0,0,0,0,0,0
`,
    shifts: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
DAY,598,502,294,463,0,0,0,0,0,0,0,0
NIGHT,57,25,46,25,0,0,0,0,0,0,0,0
`,
    compliance: `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Compliance,0.19,0.13,0.12,0.07,0,0,0,0,0,0,0,0
`,
    performance: `
Month,HSE_Observation
Jan,136
Feb,130
Mar,122
Apr,192
May,0
Jun,0
Jul,0
Aug,0
Sep,0
Oct,0
Nov,0
Dec,0
`,
    manpower: `
Month,Worked Hours Sewedy,Worked Hours Sub,LTI,MTC,Property Damage,Campaigns,Drills
Jan,57430,73360,0,0,0,0,0
Feb,54449,58512,0,0,0,0,0
Mar,48264,33072,0,0,2,0,2
Apr,58204,65112,0,0,2,11,6
May,0,0,0,0,0,0,0
Jun,0,0,0,0,0,0,0
Jul,0,0,0,0,0,0,0
Aug,0,0,0,0,0,0,0
Sep,0,0,0,0,0,0,0
Oct,0,0,0,0,0,0,0
Nov,0,0,0,0,0,0,0
Dec,0,0,0,0,0,0,0
`,
    training: `
Month,Emp Manpower,Total Training
Jan,643,837
Feb,615,703
Mar,525,558
Apr,575,1223
May,0,0
Jun,0,0
Jul,0,0
Aug,0,0
Sep,0,0
Oct,0,0
Nov,0,0
Dec,0,0
`,
    inductions: `
Month,Total
Jan,303
Feb,206
Mar,257
Apr,361
May,0
Jun,0
Jul,0
Aug,0
Sep,0
Oct,0
Nov,0
Dec,0
`
};

// =================================================================
// SECTION 2: MONTHLY REPORT DATA (NEW) - هيكل بيانات التقرير
// =================================================================

// دالة لإنشاء نموذج فارغ للبيانات
const createEmptyReportData = () => ({
    projects: 0,
    ptw: 0,
    safeHours: "0",
    manpower: [
        { entity: "Sewedy", mp: 0, mh: 0 },
        { entity: "SC", mp: 0, mh: 0 },
        { entity: "Total", mp: 0, mh: 0 }
    ],
    training: {
        sewedy: { train: 0, ind: 0 },
        sc: { train: 0, ind: 0 },
        total: { train: 0, ind: 0 }
    },
    // تقسيم Drills و Campaigns إلى كائنات
    drills: { sewedy: 0, sc: 0, total: 0 },
    campaigns: { sewedy: 0, sc: 0, total: 0 },
    incidents: [
        { entity: "Sewedy", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
        { entity: "SC", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
        { entity: "Total", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 }
    ],
    observations: [
        { entity: "Sewedy", act: 0, cond: 0, env: 0, pos: 0 },
        { entity: "SC", act: 0, cond: 0, env: 0, pos: 0 },
        { entity: "Total", act: 0, cond: 0, env: 0, pos: 0 }
    ],
    inspections: [
        { entity: "Sewedy", haz: 0, obs: 0, tour: 0, accom: 0, walk: 0, equip: 0, int: 0, ext: 0 }
    ],
    missed: [],
    positive_highlights: [],
    savedPapers: 0
});

// بيانات التقرير لعام 2026
const REPORT_DATA_2026 = {
    "Jan": createEmptyReportData(),
    "Feb": createEmptyReportData(),
    "Mar": createEmptyReportData(),
    "Apr": createEmptyReportData(),
    "May": createEmptyReportData(),
    "Jun": createEmptyReportData(),
    "Jul": createEmptyReportData(),
    "Aug": createEmptyReportData(),
    "Sep": createEmptyReportData(),
    "Oct": createEmptyReportData(),
    "Nov": createEmptyReportData(),

    // بيانات شهر يناير
    "Jan": {
        projects: 18,
        ptw: 655,
        safeHours: "130,790",
        manpower: [
            { entity: "Sewedy", mp: 361, mh: 57430 },
            { entity: "SC", mp: 282, mh: 73360 },
            { entity: "Total", mp: 643, mh: 130790 }
        ],
        training: {
            sewedy: { train: 306, ind: 22 },
            sc: { train: 212, ind: 281 },
            total: { train: 518, ind: 303 }
        },
        // تقسيم Drills و Campaigns إلى كائنات
        drills: { sewedy: 0, sc: 0, total: 0 },
        campaigns: { sewedy: 0, sc: 0, total: 0 },
        incidents: [
            { entity: "Sewedy", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
            { entity: "SC", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
            { entity: "Total", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 }
        ],
        observations: [
            { entity: "Sewedy", act: 11, cond: 50, env: 5, pos: 0 },
            { entity: "SC", act: 20, cond: 44, env: 6, pos: 0 },
            { entity: "Total", act: 31, cond: 94, env: 11, pos: 0 }
        ],
        inspections: [
            { entity: "Sewedy", haz: 15, obs: 136, tour: 0, accom: 4, walk: 26, equip: 107, int: 0, ext: 0 }
        ],
        missed: [
            "Hazard Reporting targets not met",
            "Monthly Site Tours frequency low",
            "Weekly Walkdowns missed in some areas"
        ],
        savedPapers: 540
    },
    "Feb": {
        projects: 17,
        ptw: 527,
        safeHours: "112,961",
        manpower: [
            { entity: "Sewedy", mp: 358, mh: 54449 },
            { entity: "SC", mp: 256, mh: 58512 },
            { entity: "Total", mp: 614, mh: 112961 }
        ],
        training: {
            sewedy: { train: 242, ind: 14 },
            sc: { train: 255, ind: 192 },
            total: { train: 497, ind: 206 }
        },
        // تقسيم Drills و Campaigns إلى كائنات
        drills: { sewedy: 0, sc: 0, total: 0 },
        campaigns: { sewedy: 1, sc: 0, total: 1 },
        incidents: [
            { entity: "Sewedy", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
            { entity: "SC", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
            { entity: "Total", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 }
        ],
        observations: [
            { entity: "Sewedy", act: 13, cond: 49, env: 2, pos: 1 },
            { entity: "SC", act: 21, cond: 43, env: 1, pos: 0 },
            { entity: "Total", act: 34, cond: 92, env: 3, pos: 1 }
        ],
        inspections: [
            { entity: "Sewedy", haz: 22, obs: 130, tour: 2, accom: 4, walk: 16, equip: 94, int: 0, ext: 0 }
        ],
        missed: [
            "Hazard Reporting targets not met",
            "Monthly Site Tours frequency low",
            "Weekly Walkdowns missed in some areas"
        ],
        positive_highlights: [
            "Site Manager conducted Safety Induction for HSE Manager and HSE Coordinator at 10th of Ramadan project."
        ],
        savedPapers: 540
    },
    "Mar": {
        projects: 15,
        ptw: 340,
        safeHours: "81,336",
        manpower: [
            { entity: "Sewedy", mp: 350, mh: 48264 },
            { entity: "SC", mp: 175, mh: 33072 },
            { entity: "Total", mp: 525, mh: 81336 }
        ],
        training: {
            sewedy: { train: 257, ind: 16 },
            sc: { train: 179, ind: 103 },
            total: { train: 346, ind: 119 }
        },
        // تقسيم Drills و Campaigns إلى كائنات
        drills: { sewedy: 2, sc: 0, total: 2 },
        campaigns: { sewedy: 0, sc: 0, total: 0 },
        incidents: [
            { entity: "Sewedy", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 2, near: 1 },
            { entity: "SC", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 0, near: 0 },
            { entity: "Total", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 2, near: 1 }
        ],
        observations: [
            { entity: "Sewedy", act: 15, cond: 45, env: 3, pos: 0 },
            { entity: "SC", act: 14, cond: 46, env: 0, pos: 0 },
            { entity: "Total", act: 29, cond: 92, env: 3, pos: 0 }
        ],
        inspections: [
            { entity: "Sewedy", haz: 22, obs: 122, tour: 4, accom: 6, walk: 21, equip: 88, int: 0, ext: 0 }
        ],
        missed: [
            "Hazard Reporting targets not met",
            "Monthly Site Tours frequency low",
            "Weekly Walkdowns missed in some areas"
        ],
        savedPapers: 540
    },
    "Apr": {
        projects: 16,
        ptw: 488,
        safeHours: "123,316",
        manpower: [
            { entity: "Sewedy", mp: 353, mh: 58204 },
            { entity: "SC", mp: 222, mh: 65112 },
            { entity: "Total", mp: 575, mh: 123316 }
        ],
        training: {
            sewedy: { train: 361, ind: 13 },
            sc: { train: 542, ind: 307 },
            total: { train: 903, ind: 320 }
        },
        // تقسيم Drills و Campaigns إلى كائنات
        drills: { sewedy: 6, sc: 0, total: 6 },
        campaigns: { sewedy: 11, sc: 0, total: 11 },
        incidents: [
            { entity: "Sewedy", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 1, near: 0 },
            { entity: "SC", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 1, near: 0 },
            { entity: "Total", fat: 0, lti: 0, mtc: 0, first: 0, env: 0, prop: 2, near: 0 }
        ],
        observations: [
            { entity: "Sewedy", act: 8, cond: 73, env: 4, pos: 0 },
            { entity: "SC", act: 24, cond: 83, env: 0, pos: 0 },
            { entity: "Total", act: 32, cond: 156, env: 4, pos: 0 }
        ],
        inspections: [
            { entity: "Sewedy", haz: 39, obs: 192, tour: 3, accom: 6, walk: 24, equip: 135, int: 0, ext: 0 }
        ],
        missed: [
            "Hazard Reporting targets not met",
            "Monthly Site Tours frequency low",
            "Weekly Walkdowns missed in some areas"
        ],
        savedPapers: 570
    },
};

// =================================================================
// SECTION 3: CONFIGURATION AND PARSING
// =================================================================

const monthMapping = {
    "Jan": "January", "Feb": "February", "Mar": "March", "Apr": "April", "May": "May", "Jun": "June",
    "Jul": "July", "Aug": "August", "Sep": "September", "Oct": "October", "Nov": "November", "Dec": "December"
};
const ALL_MONTHS = Object.keys(monthMapping);

// متغير لتخزين بيانات الداشبورد الحالية
let CURRENT_DATA = {};

function parseGeneric(csvText) {
    const dataByMonth = {};
    if (!csvText) return dataByMonth;
    const parsed = d3.csvParse(csvText.trim());
    parsed.forEach(row => {
        const group = row[Object.keys(row)[0]];
        for (const month in row) {
            if (ALL_MONTHS.includes(month)) {
                if (!dataByMonth[month]) dataByMonth[month] = [];
                dataByMonth[month].push({ group, value: +row[month] || 0 });
            }
        }
    });
    return dataByMonth;
}

function parseByMonth(csvText) {
    const dataByMonth = {};
    if (!csvText) return dataByMonth;
    const parsed = d3.csvParse(csvText.trim());
    parsed.forEach(row => {
        const month = row.Month;
        if (ALL_MONTHS.includes(month)) {
            dataByMonth[month] = row;
        }
    });
    return dataByMonth;
}

function loadYearData(year) {
    let sourceData;
    if (year === '2026') {
        sourceData = DATA_2026;
    } else {
        sourceData = DATA_2025; // Default 2025
    }

    CURRENT_DATA = {
        permits: parseGeneric(sourceData.permits),
        parties: parseGeneric(sourceData.parties),
        shifts: parseGeneric(sourceData.shifts),
        delays: parseGeneric(sourceData.delays),
        compliance: parseGeneric(sourceData.compliance),
        performance: parseByMonth(sourceData.performance),
        manpower: parseByMonth(sourceData.manpower),
        training: parseByMonth(sourceData.training),
        inductions: parseByMonth(sourceData.inductions),
    };
}

// =================================================================
// SECTION 4: RENDER FUNCTIONS (Dashboard & Report)
// =================================================================

// 1. دالة التبديل بين الشاشات
function switchView(viewName) {
    const dashboardView = document.getElementById('dashboard-view');
    const reportView = document.getElementById('report-view');
    const navDashboard = document.getElementById('nav-dashboard');
    const navReport = document.getElementById('nav-report');
    const pageTitle = document.getElementById('page-title');

    document.querySelector('.sidebar').classList.remove('visible');

    if (viewName === 'dashboard') {
        dashboardView.style.display = 'block';
        reportView.style.display = 'none';
        navDashboard.classList.add('active');
        navReport.classList.remove('active');
        pageTitle.innerText = "HSE SYSTEM DASHBOARD";

        const currentMonth = d3.select("#month-filter").property("value");
        updateDashboard(currentMonth);

    } else if (viewName === 'report') {
        dashboardView.style.display = 'none';
        reportView.style.display = 'block';
        navDashboard.classList.remove('active');
        navReport.classList.add('active');
        pageTitle.innerText = "HSE MONTHLY REPORT";

        const currentMonth = d3.select("#month-filter").property("value");
        renderMonthlyReport(currentMonth);
    }
}

// 2. دالة عرض التقرير الشهري
// 2. دالة عرض التقرير الشهري
function renderMonthlyReport(month) {
    const year = d3.select("#year-filter").property("value");

    if (year !== '2026') {
        document.getElementById('report-view').innerHTML = `
            <div class="card" style="text-align:center; padding:50px;">
                <h3>No Report Available for ${year}</h3>
                <p>Monthly Reports start from 2026.</p>
            </div>`;
        return;
    }

    let data = null;

    if (month === 'Cumulative') {
        data = calculateCumulativeReport(REPORT_DATA_2026);
        setTimeout(() => {
            const header = document.querySelector('.report-header');
            if (header) header.innerText = "1. General Statistics (Year To Date)";
        }, 50);
    } else {
        if (REPORT_DATA_2026[month]) {
            data = REPORT_DATA_2026[month];
        }
    }

    if (!data) {
        document.getElementById('report-view').innerHTML = `
            <div class="card" style="text-align:center; padding:50px;">
                <h3>No Data for ${month === 'Cumulative' ? 'Cumulative YTD' : month} ${year}</h3>
                <p>Data has not been entered yet.</p>
            </div>`;
        return;
    }

    // 1. بناء HTML التقرير الأساسي (الأقسام من 1 إلى 5 فقط)
    let reportHTML = `
        <div class="report-section card">
            <h2 class="report-header">1. General Statistics</h2>
            <div class="report-stats-grid">
                <div class="stat-box">
                    <span class="stat-label">Active Projects</span>
                    <span class="stat-value" id="rep-projects">${data.projects}</span>
                </div>
                <div class="stat-box">
                    <span class="stat-label">PTW Count</span>
                    <span class="stat-value" id="rep-ptw">${data.ptw}</span>
                </div>
                <div class="stat-box highlight">
                    <span class="stat-label">Safe Man Hours (Without LTI)</span>
                    <span class="stat-value" id="rep-safe-hours">${data.safeHours}</span>
                </div>
            </div>
            <h3 class="sub-header">Man Power & Hours Breakdown</h3>
            <div class="table-responsive">
                <table class="report-table">
                    <thead><tr><th>Entity</th><th>Man Power (Current)</th><th>Man Hours ${month === 'Cumulative' ? '(Total)' : '(Monthly)'}</th></tr></thead>
                    <tbody id="rep-manpower-body"></tbody>
                </table>
            </div>
        </div>

        <div class="report-section card">
            <h2 class="report-header">2. Training & Awareness</h2>
            <div class="row-2-container">
                <table class="report-table">
                    <thead>
                        <tr><th>Category</th><th>Sewedy</th><th>SC</th><th>Total</th></tr>
                    </thead>
                    <tbody id="rep-training-body"></tbody>
                </table>
            </div>
        </div>

        <div class="report-section card">
            <h2 class="report-header">3. Incident Classification</h2>
            <div class="table-responsive">
                <table class="report-table">
                    <thead><tr><th>Entity</th><th>Fatality</th><th>LTI</th><th>MTC</th><th>First Aid</th><th>Env. Incident</th><th>Prop. Damage</th><th>Near Miss</th></tr></thead>
                    <tbody id="rep-incidents-body"></tbody>
                </table>
            </div>
        </div>

        <div class="report-section card">
            <h2 class="report-header">4. HSE Observations</h2>
            <div class="table-responsive">
                <table class="report-table">
                    <thead><tr><th>Entity</th><th>Unsafe Act</th><th>Unsafe Condition</th><th>Env. Impact</th><th>Positive Obs.</th></tr></thead>
                    <tbody id="rep-observations-body"></tbody>
                </table>
            </div>
        </div>

        <div class="report-section card">
            <h2 class="report-header">5. Inspection Reports</h2>
            <div class="table-responsive">
                <table class="report-table">
                    <thead><tr><th>Entity</th><th>Hazard Report</th><th>Obs Cards</th><th>Site Tour</th><th>Accom. Insp</th><th>Walk Down</th><th>Equip Insp</th><th>Int. Audit</th><th>Ext. Audit</th></tr></thead>
                    <tbody id="rep-inspections-body"></tbody>
                </table>
            </div>
        </div>
    `;

    // 2. إضافة بوكس الإيجابيات أولاً (بحيث يظهر فوق السلبيات إذا كان موجوداً)
    if (data.positive_highlights && data.positive_highlights.length > 0) {
        let positiveItems = data.positive_highlights.map(item => `<li>${item}</li>`).join('');
        reportHTML += `
            <div class="report-section card" style="border-left: 4px solid #2ecc71; margin-top: 20px;">
                <h2 class="report-header" style="color: #27ae60;">🌟 Positive Observations</h2>
                <ul class="missed-list">
                    ${positiveItems}
                </ul>
            </div>
        `;
    }

    // 3. إضافة بوكس السلبيات في النهاية
    reportHTML += `
        <div class="report-section card" style="border-left: 4px solid #f39c12; margin-top: 20px;">
            <h2 class="report-header">⚠️ Areas for Improvement (Missed Targets)</h2>
            <ul id="rep-missed-targets" class="missed-list"></ul>
        </div>
    `;

    // 4. إرسال الكود للواجهة
    document.getElementById('report-view').innerHTML = reportHTML;

    // تعبئة البيانات في الجداول
    const mpBody = document.getElementById('rep-manpower-body');
    if (mpBody && data.manpower) {
        mpBody.innerHTML = data.manpower.map(row => `
            <tr style="${row.entity === 'Total' ? 'font-weight:bold; background:#eee;' : ''}">
                <td>${row.entity}</td><td>${row.mp}</td><td>${row.mh.toLocaleString()}</td>
            </tr>
        `).join('');
    }

    const trBody = document.getElementById('rep-training-body');
    if (trBody && data.training) {
        trBody.innerHTML = `
            <tr>
                <td>Training</td><td>${data.training.sewedy.train}</td><td>${data.training.sc.train}</td><td>${data.training.total.train}</td>
            </tr>
            <tr>
                <td>Induction</td><td>${data.training.sewedy.ind}</td><td>${data.training.sc.ind}</td><td>${data.training.total.ind}</td>
            </tr>
            <tr>
                <td>HSE Drills</td><td>${data.drills.sewedy}</td><td>${data.drills.sc}</td><td>${data.drills.total}</td>
            </tr>
            <tr>
                <td>HSE Campaigns</td><td>${data.campaigns.sewedy}</td><td>${data.campaigns.sc}</td><td>${data.campaigns.total}</td>
            </tr>
        `;
    }

    const incBody = document.getElementById('rep-incidents-body');
    if (incBody && data.incidents) {
        incBody.innerHTML = data.incidents.map(row => `
            <tr style="${row.entity === 'Total' ? 'font-weight:bold; background:#eee;' : ''}">
                <td>${row.entity}</td><td>${row.fat}</td><td>${row.lti}</td><td>${row.mtc}</td><td>${row.first}</td><td>${row.env}</td><td>${row.prop}</td><td>${row.near}</td>
            </tr>
        `).join('');
    }

    const obsBody = document.getElementById('rep-observations-body');
    if (obsBody && data.observations) {
        obsBody.innerHTML = data.observations.map(row => `
            <tr style="${row.entity === 'Total' ? 'font-weight:bold; background:#eee;' : ''}">
                <td>${row.entity}</td><td>${row.act}</td><td>${row.cond}</td><td>${row.env}</td><td>${row.pos}</td>
            </tr>
        `).join('');
    }

    const inspBody = document.getElementById('rep-inspections-body');
    if (inspBody && data.inspections) {
        inspBody.innerHTML = data.inspections.map(row => `
            <tr>
                <td>${row.entity}</td><td>${row.haz}</td><td>${row.obs}</td><td>${row.tour}</td><td>${row.accom}</td><td>${row.walk}</td><td>${row.equip}</td><td>${row.int}</td><td>${row.ext}</td>
            </tr>
        `).join('');
    }

    const missedList = document.getElementById('rep-missed-targets');
    if (missedList && data.missed) {
        missedList.innerHTML = data.missed.map(item => `<li>${item}</li>`).join('');
    }
}

// 3. دالة تحديث الداشبورد
function updateDashboard(selectedMonth) {
    let totalSavedPapers = 0; // متغير الورق
    const hoursLabel = d3.select("#hours-label"); // لتغيير النص تحت ساعات الأمان
    const currentYear = d3.select("#year-filter").property("value");

    let permitsData = [], partiesData = [], shiftsData = [], delaysData = [];
    let kpiValues = { hours: 0, employees: 0, ptw: 0, observations: 0, lti: 0, mtc: 0, propDamage: 0, trainings: 0, inductions: 0, campaigns: 0, drills: 0 };

    if (selectedMonth === 'Cumulative') {
        permitsData = aggregateGenericData(CURRENT_DATA.permits);
        partiesData = aggregateGenericData(CURRENT_DATA.parties);
        shiftsData = aggregateGenericData(CURRENT_DATA.shifts);
        delaysData = aggregateGenericData(CURRENT_DATA.delays);

        ALL_MONTHS.forEach(m => {
            const manp = CURRENT_DATA.manpower[m] || {};
            const train = CURRENT_DATA.training[m] || {};
            const perf = CURRENT_DATA.performance[m] || {};
            const induc = CURRENT_DATA.inductions[m] || {};
            const ptwCount = d3.sum(CURRENT_DATA.permits[m] || [], d => d.value);

            kpiValues.hours += (+manp["Worked Hours Sewedy"] || 0) + (+manp["Worked Hours Sub"] || 0);
            kpiValues.ptw += ptwCount;
            kpiValues.observations += (+perf.HSE_Observation || 0);
            kpiValues.lti += (+manp.LTI || 0);
            kpiValues.mtc += (+manp.MTC || 0);
            kpiValues.propDamage += (+manp["Property Damage"] || 0);
            kpiValues.trainings += (+train["Total Training"] || 0);
            kpiValues.inductions += (+induc.Total || 0);
            kpiValues.campaigns += (+manp.Campaigns || 0);
            kpiValues.drills += (+manp.Drills || 0);

            if (+train["Emp Manpower"] > 0) kpiValues.employees = +train["Emp Manpower"];

            // قراءة الورق التراكمي حسب السنة المحددة
            if (currentYear === '2026') {
                const repData = REPORT_DATA_2026[m] || {};
                totalSavedPapers += (repData.savedPapers || 0);
            } else if (currentYear === '2025') {
                const repData = (typeof REPORT_DATA_2025 !== 'undefined' ? REPORT_DATA_2025[m] : {}) || {};
                totalSavedPapers += (repData.savedPapers || 0);
            }
        });

        // تحديث قسم ساعات الأمان التراكمية
        hoursLabel.text("TOTAL YTD (WITHOUT LTI)");
        animateValue("kpi-total-hours", kpiValues.hours);

    } else {
        permitsData = CURRENT_DATA.permits[selectedMonth] || [];
        partiesData = CURRENT_DATA.parties[selectedMonth] || [];
        shiftsData = CURRENT_DATA.shifts[selectedMonth] || [];
        delaysData = CURRENT_DATA.delays[selectedMonth] || [];

        const perf = CURRENT_DATA.performance[selectedMonth] || {};
        const manp = CURRENT_DATA.manpower[selectedMonth] || {};
        const train = CURRENT_DATA.training[selectedMonth] || {};
        const induc = CURRENT_DATA.inductions[selectedMonth] || {};

        kpiValues.hours = (+manp["Worked Hours Sewedy"] || 0) + (+manp["Worked Hours Sub"] || 0);
        kpiValues.employees = train["Emp Manpower"];
        kpiValues.ptw = d3.sum(permitsData, d => d.value);
        kpiValues.observations = perf.HSE_Observation;
        kpiValues.lti = manp.LTI;
        kpiValues.mtc = manp.MTC;
        kpiValues.propDamage = manp["Property Damage"];
        kpiValues.trainings = train["Total Training"];
        kpiValues.inductions = (induc.Total || 0);
        kpiValues.campaigns = manp.Campaigns;
        kpiValues.drills = manp.Drills;

        // قراءة الورق للشهر المحدد حسب السنة
        if (currentYear === '2026') {
            const repData = REPORT_DATA_2026[selectedMonth] || {};
            totalSavedPapers = repData.savedPapers || 0;
        } else if (currentYear === '2025') {
            const repData = (typeof REPORT_DATA_2025 !== 'undefined' ? REPORT_DATA_2025[selectedMonth] : {}) || {};
            totalSavedPapers = repData.savedPapers || 0;
        }

        // معالجة الشهر الافتراضي (رقم الساعات الكلي الثابت)
        if (selectedMonth === 'Apr' && currentYear === '2026') {
            hoursLabel.text("OVERALL SAFE HOURS");
            animateValue("kpi-total-hours", 4450165); // الرقم الثابت للواجهة الافتراضية

            // حساب الورق التراكمي للشهر الافتراضي
            totalSavedPapers = 0;
            ALL_MONTHS.forEach(m => {
                const rData = REPORT_DATA_2026[m] || {};
                totalSavedPapers += (rData.savedPapers || 0);
            });
        } else {
            // معالجة الشهور الفردية العادية
            hoursLabel.text("MONTHLY SAFE HOURS");
            animateValue("kpi-total-hours", kpiValues.hours); // عرض ساعات الشهر فقط
        }
    }

    permitsData = permitsData.filter(d => d.value > 0);
    partiesData = partiesData.filter(d => d.value > 0);

    renderKPIGrid(kpiValues);
    drawPermitsChart(permitsData, selectedMonth === 'Cumulative' ? "Cumulative Permits per Project" : "Permits per Project");
    drawHorizontalBarChart(partiesData, selectedMonth === 'Cumulative' ? "Cumulative Permits by Party" : "Permits by Requesting Party");
    drawExplodedPieChart(delaysData, "Delays Analysis");
    drawInteractivePieChart(shiftsData, "Shifts Analysis");

    const observationsCard = d3.select("#observations-card");
    let trendData = [];
    let radialValue = 0;
    const totalYearPermits = ALL_MONTHS.reduce((sum, m) => sum + d3.sum(CURRENT_DATA.permits[m] || [], d => d.value), 0);

    if (selectedMonth === 'Cumulative') {
        observationsCard.style("display", "block");
        trendData = Object.values(CURRENT_DATA.performance);
        radialValue = kpiValues.ptw;
    } else {
        const availableData = Object.keys(CURRENT_DATA.performance);
        if (selectedMonth === 'Jan' || !availableData.includes(selectedMonth)) {
            trendData = Object.values(CURRENT_DATA.performance).slice(0, ALL_MONTHS.indexOf(selectedMonth) + 1);
        } else {
            observationsCard.style("display", "block");
            trendData = Object.values(CURRENT_DATA.performance).slice(0, ALL_MONTHS.indexOf(selectedMonth) + 1);
        }

        let cumSum = 0;
        for (let i = 0; i <= ALL_MONTHS.indexOf(selectedMonth); i++) {
            cumSum += d3.sum(CURRENT_DATA.permits[ALL_MONTHS[i]] || [], d => d.value);
        }
        radialValue = cumSum;
    }

    drawObservationsTrendChart(trendData);
    drawCumulativeRadialChart(radialValue, totalYearPermits);

    // ======================================
    // حساب الأشجار وتشغيل عداد البيئة المدمج
    // ======================================
    const papersPerTree = 8333;
    const totalSavedTrees = totalSavedPapers > 0 ? (totalSavedPapers / papersPerTree).toFixed(1) : 0;

    animateValue("kpi-saved-papers", totalSavedPapers);
    animateValueDecimal("kpi-saved-trees", parseFloat(totalSavedTrees));
}

// =================================================================
// SECTION 5: HELPER FUNCTIONS & SETUP
// =================================================================

// 👇👇 الدالة المفقودة التي كانت تسبب المشكلة 👇👇
function calculateCumulativeReport(yearData) {
    let accumulated = createEmptyReportData();
    const monthKeys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    monthKeys.forEach(month => {
        const mData = yearData[month];
        if (!mData || (mData.ptw === 0 && mData.manpower[0].mh === 0)) return;

        accumulated.projects = mData.projects;
        accumulated.ptw += mData.ptw;

        let currentSafe = parseInt(String(mData.safeHours).replace(/,/g, '') || 0);
        let totalSafe = parseInt(String(accumulated.safeHours).replace(/,/g, '') || 0);
        accumulated.safeHours = (totalSafe + currentSafe).toLocaleString();

        // جمع العمالة
        accumulated.manpower.forEach((row, index) => {
            if (mData.manpower[index]) {
                row.mp = mData.manpower[index].mp;
                row.mh += mData.manpower[index].mh;
            }
        });

        // جمع التدريب
        accumulated.training.sewedy.train += mData.training.sewedy.train;
        accumulated.training.sewedy.ind += mData.training.sewedy.ind;
        accumulated.training.sc.train += mData.training.sc.train;
        accumulated.training.sc.ind += mData.training.sc.ind;
        accumulated.training.total.train += mData.training.total.train;
        accumulated.training.total.ind += mData.training.total.ind;

        // جمع Drills & Campaigns المفصلة
        accumulated.drills.sewedy += mData.drills.sewedy;
        accumulated.drills.sc += mData.drills.sc;
        accumulated.drills.total += mData.drills.total;

        accumulated.campaigns.sewedy += mData.campaigns.sewedy;
        accumulated.campaigns.sc += mData.campaigns.sc;
        accumulated.campaigns.total += mData.campaigns.total;

        // جمع الحوادث
        accumulated.incidents.forEach((row, index) => {
            const mRow = mData.incidents[index];
            if (mRow) {
                row.fat += mRow.fat; row.lti += mRow.lti; row.mtc += mRow.mtc;
                row.first += mRow.first; row.env += mRow.env; row.prop += mRow.prop;
                row.near += mRow.near;
            }
        });

        // جمع الملاحظات
        accumulated.observations.forEach((row, index) => {
            const mRow = mData.observations[index];
            if (mRow) {
                row.act += mRow.act; row.cond += mRow.cond;
                row.env += mRow.env; row.pos += mRow.pos;
            }
        });

        // جمع التفتيش
        accumulated.inspections.forEach((row, index) => {
            const mRow = mData.inspections[index];
            if (mRow) {
                row.haz += mRow.haz; row.obs += mRow.obs; row.tour += mRow.tour;
                row.accom += mRow.accom; row.walk += mRow.walk; row.equip += mRow.equip;
                row.int += mRow.int; row.ext += mRow.ext;
            }
        });

        // تجميع الأهداف المفقودة
        if (mData.missed && mData.missed.length > 0) {
            mData.missed.forEach(item => {
                if (!accumulated.missed.includes(item)) {
                    accumulated.missed.push(item);
                }
            });
        }
        if (mData.positive_highlights && mData.positive_highlights.length > 0) {
            mData.positive_highlights.forEach(item => {
                if (!accumulated.positive_highlights.includes(item)) {
                    accumulated.positive_highlights.push(item);
                }
            });
        }
        accumulated.savedPapers += (mData.savedPapers || 0);
    });

    return accumulated;
}
// 👆👆 ------------------------------------- 👆👆

function aggregateGenericData(dataset) {
    const aggregated = {};
    ALL_MONTHS.forEach(month => {
        const monthData = dataset[month] || [];
        monthData.forEach(item => {
            if (!aggregated[item.group]) aggregated[item.group] = 0;
            aggregated[item.group] += item.value;
        });
    });
    return Object.keys(aggregated).map(key => ({ group: key, value: aggregated[key] }));
}

function renderKPIGrid(values) {
    const container = d3.select("#monthly-kpis").html("");
    container.attr("class", "");
    const style = `
        <style>
            .kpis-grid-colorful {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 15px; 
                margin-bottom: 25px;
                align-items: stretch; 
                width: 100% !important; /* إجبار الحاوية على العرض الكامل */
            }
            .kpi-card-colorful {
                background: #ffffff;
                border: 1px solid #f1f2f6;
                border-radius: 14px;
                padding: 15px 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                box-shadow: 0 4px 10px rgba(0,0,0,0.02);
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                width: 100% !important; /* إجبار الكارت يملى المساحة المتاحة ليه */
                height: 100%;
                box-sizing: border-box !important;
            }
            .kpi-card-colorful::before {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 100%; height: 3px;
                background: linear-gradient(90deg, var(--c1), var(--c2));
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .kpi-card-colorful:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 10px 20px rgba(0,0,0,0.06); 
                border-color: var(--c2); 
            }
            .kpi-card-colorful:hover::before {
                opacity: 1;
            }
            .kpi-icon-colorful {
                width: 44px;
                height: 44px;
                background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
                box-shadow: 0 4px 10px rgba(0,0,0,0.08); 
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff; 
                margin-bottom: 10px;
                transition: transform 0.3s ease;
            }
            .kpi-card-colorful:hover .kpi-icon-colorful {
                transform: rotate(8deg) scale(1.1);
            }
            .kpi-icon-colorful svg {
                width: 22px;
                height: 22px;
            }
            .kpi-title-colorful {
                font-size: 0.7rem; 
                font-weight: 800;
                color: #747d8c;
                text-transform: uppercase;
                margin-bottom: 6px;
                min-height: 28px; 
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1.2;
                width: 100%;
            }
            .kpi-value-colorful {
                font-size: 1.6rem; 
                font-weight: 900;
                color: #2f3542; 
                line-height: 1;
                margin-top: auto; 
            }

            @media (max-width: 1024px) { .kpis-grid-colorful { grid-template-columns: repeat(4, 1fr) !important; } }
            @media (max-width: 768px) { .kpis-grid-colorful { grid-template-columns: repeat(3, 1fr) !important; } }

            /* --- قوة إجبارية للموبايل --- */
            @media (max-width: 480px) { 
                .kpis-grid-colorful { 
                    display: grid !important;
                    grid-template-columns: 1fr 1fr !important; /* إجبار التقسيم لنصفين متساويين بالظبط */
                    gap: 12px !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .kpi-card-colorful {
                    max-width: 100% !important; /* منع أي كود من تحجيم الكارت */
                    min-width: 0 !important;
                    padding: 12px 5px !important;
                }
                .kpi-icon-colorful {
                    width: 38px !important; 
                    height: 38px !important;
                }
                .kpi-icon-colorful svg {
                    width: 18px !important; 
                    height: 18px !important;
                }
                .kpi-title-colorful {
                    font-size: 0.65rem !important; 
                    min-height: 24px !important;
                }
                .kpi-value-colorful {
                    font-size: 1.4rem !important; 
                }
            }
        </style>
    `;

    container.html(style);
    const grid = container.append("div").attr("class", "kpis-grid-colorful");

    const getIcon = (path) => `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

    const kpiList = [
        { label: "ManPower", value: values.employees, c1: "#ff6b81", c2: "#C8102E", icon: getIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>') },
        { label: "PTW", value: values.ptw, c1: "#a29bfe", c2: "#6c5ce7", icon: getIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>') },
        { label: "Observations", value: values.observations, c1: "#fdcb6e", c2: "#e17055", icon: getIcon('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>') },
        { label: "LTI", value: values.lti, c1: "#ff7675", c2: "#d63031", icon: getIcon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>') },
        { label: "MTC", value: values.mtc, c1: "#ffeaa7", c2: "#fdcb6e", icon: getIcon('<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>') },
        { label: "Prop. Damage", value: values.propDamage, c1: "#74b9ff", c2: "#0984e3", icon: getIcon('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>') },
        { label: "Campaigns", value: values.campaigns, c1: "#55efc4", c2: "#00b894", icon: getIcon('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>') },
        { label: "Drills", value: values.drills, c1: "#81ecec", c2: "#00cec9", icon: getIcon('<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>') },
        { label: "Trainings", value: values.trainings, c1: "#fab1a0", c2: "#e66767", icon: getIcon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>') },
        { label: "Inductions", value: values.inductions, c1: "#b8e994", c2: "#27ae60", icon: getIcon('<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>') }
    ];

    kpiList.forEach(kpi => {
        const card = grid.append("div")
            .attr("class", "kpi-card-colorful")
            .style("--c1", kpi.c1)
            .style("--c2", kpi.c2);

        card.append("div")
            .attr("class", "kpi-icon-colorful")
            .html(kpi.icon);

        card.append("div")
            .attr("class", "kpi-title-colorful")
            .text(kpi.label);

        const idName = `kpi-col-${kpi.label.replace(/\s/g, '').replace('.', '')}`;
        card.append("div")
            .attr("class", "kpi-value-colorful")
            .attr("id", idName)
            .text("0");

        animateValue(idName, kpi.value);
    });
}

function animateValue(id, endValue) {
    const element = d3.select(`#${id}`);
    if (element.empty()) return;
    element.transition().duration(1500)
        .tween("text", function() {
            const i = d3.interpolate(this.textContent.replace(/,/g, ''), endValue);
            return function(t) { this.textContent = d3.format(",.0f")(i(t)); };
        });
}
// دالة لتشغيل العداد للأرقام العشرية (للأشجار)
function animateValueDecimal(id, endValue) {
    const element = d3.select(`#${id}`);
    if (element.empty()) return;
    element.transition().duration(1500)
        .tween("text", function() {
            const i = d3.interpolate(parseFloat(this.textContent) || 0, endValue);
            return function(t) { this.textContent = i(t).toFixed(1); };
        });
}


const drawNoData = (selector) => d3.select(selector).html(`<p class="no-data-msg">No data for this selection.</p>`);

function showModal(title, data) {
    d3.select("#modal-title").text(title);
    createTable("#modal-table-container", data);
    d3.select("#modal-overlay").classed("visible", true);
}

function hideModal() {
    d3.select("#modal-overlay").classed("visible", false);
}

function createTable(selector, dataArray) {
    const container = d3.select(selector).html("");
    if (!dataArray || dataArray.length === 0) { return; }
    const table = container.append("table").attr("class", "data-table");
    const thead = table.append("thead");
    const tbody = table.append("tbody");
    const headers = Object.keys(dataArray[0]);
    thead.append("tr").selectAll("th").data(headers).join("th").text(d => d);
    const rows = tbody.selectAll("tr").data(dataArray).join("tr");
    rows.selectAll("td").data(d => headers.map(header => d[header])).join("td").text(d => d);
}

// --- Chart Drawing Functions ---
function drawPermitsChart(data, title) {
    const selector = "#permits-chart-container";
    const container = d3.select(selector).html("");
    const filteredData = data.filter(d => d.value > 0);
    if (filteredData.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, filteredData));
    const isMobile = window.innerWidth < 768;
    const margin = { top: 40, right: 20, bottom: isMobile ? 160 : 100, left: 50 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const x = d3.scaleBand().range([0, width]).domain(filteredData.map(d => d.group)).padding(0.3);
    const y = d3.scaleLinear().domain([0, d3.max(filteredData, d => d.value) * 1.3 || 10]).range([height, 0]);
    const xAxis = svg.append("g").attr("class", "axis-x").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    xAxis.selectAll("text").attr("transform", isMobile ? "translate(-8, 10)rotate(-90)" : "translate(-10,5)rotate(-45)").style("text-anchor", "end").style("font-size", isMobile ? "10px" : "11px").style("font-weight", "500");
    svg.append("g").attr("class", "axis-y").call(d3.axisLeft(y));
    svg.selectAll(".bar").data(filteredData).enter().append("rect").attr("class", "bar").attr("x", d => x(d.group)).attr("width", x.bandwidth()).attr("y", d => y(d.value)).attr("height", d => height - y(d.value));
    svg.selectAll(".bar-label").data(filteredData).enter().append("text").attr("class", "bar-label").text(d => d.value).attr("transform", function(d) { const xPos = x(d.group) + x.bandwidth() / 2; const yPos = y(d.value) - 5; return isMobile ? `translate(${xPos}, ${yPos}) rotate(-90)` : `translate(${xPos}, ${yPos})`; }).attr("dy", isMobile ? "0.35em" : "0").style("text-anchor", isMobile ? "start" : "middle").style("fill", "#333").style("font-weight", "600").style("font-size", isMobile ? "10px" : "11px").style("opacity", 1);
}

function drawHorizontalBarChart(data, title) {
    const selector = "#parties-chart-container";
    const container = d3.select(selector).html("");
    if (data.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, data));
    const isMobile = window.innerWidth < 768;
    const margin = { top: 20, right: isMobile ? 40 : 50, bottom: 40, left: isMobile ? 110 : 120 };
    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const y = d3.scaleBand().range([0, height]).domain(data.map(d => d.group)).padding(0.4);
    const x = d3.scaleLinear().domain([0, d3.max(data, d => d.value) * 1.4 || 10]).range([0, width]);
    const yAxis = svg.append("g").attr("class", "axis-y").call(d3.axisLeft(y));
    if (isMobile) { yAxis.selectAll("text").style("font-size", "10px").style("font-weight", "500"); }
    const xAxisCall = d3.axisBottom(x);
    if (isMobile) { xAxisCall.ticks(4); }
    const xAxis = svg.append("g").attr("class", "axis-x").attr("transform", `translate(0,${height})`).call(xAxisCall);
    if (isMobile) { xAxis.selectAll("text").style("font-size", "10px"); }
    svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("y", d => y(d.group)).attr("height", y.bandwidth()).attr("x", 0).attr("width", d => x(d.value));
    svg.selectAll(".bar-label").data(data).enter().append("text").attr("class", "bar-label").attr("y", d => y(d.group) + y.bandwidth() / 2).attr("dy", "0.35em").attr("x", d => x(d.value) + 10).text(d => d.value).style("fill", "var(--dark-text)").attr("text-anchor", "start").style("font-weight", "600").style("opacity", d => d.value > 0 ? 1 : 0).style("font-size", isMobile ? "10px" : "11px");
}

function drawExplodedPieChart(data, title) {
    const selector = "#delays-chart-container";
    const container = d3.select(selector).html("");
    if (data.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, data));
    const width = container.node().getBoundingClientRect().width, height = 300, radius = Math.min(width, height) / 2 * 0.7;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    const color = d3.scaleOrdinal(["#C8102E", "#2C2A29"]);
    const pie = d3.pie().value(d => d.value).sort(null);
    const arc = d3.arc().innerRadius(radius * 0.5).outerRadius(radius);
    svg.selectAll(".arc-path").data(pie(data)).enter().append("path").attr("class", "arc-path").attr("d", arc).attr("fill", d => color(d.data.group)).style("stroke", "var(--white)").style("stroke-width", "5px").append("title").text(d => `${d.data.group}: ${d.data.value}`);
    drawPieLegend("#delays-legend-container", data, color);
}

function drawInteractivePieChart(data, title) {
    const selector = "#shifts-chart-container";
    const container = d3.select(selector).html("");
    if (data.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, data));
    const width = container.node().getBoundingClientRect().width, height = 300, radius = Math.min(width, height) / 2 * 0.7;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    const color = d3.scaleOrdinal(["#C8102E", "#2C2A29"]);
    const pie = d3.pie().value(d => d.value).sort(null);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const arcHover = d3.arc().innerRadius(0).outerRadius(radius * 1.1);
    svg.selectAll(".arc-path").data(pie(data)).enter().append("path").attr("class", "arc-path").attr("d", arc).attr("fill", d => color(d.data.group)).on("mouseover", function() { d3.select(this).transition().duration(200).attr("d", arcHover); }).on("mouseout", function() { d3.select(this).transition().duration(200).attr("d", arc); });
    drawPieLegend("#shifts-legend-container", data, color);
}

function drawPieLegend(selector, data, color) {
    const container = d3.select(selector).html("");
    data.forEach(d => {
        if (d.value > 0) {
            const item = container.append("div").attr("class", "legend-item");
            item.append("div").attr("class", "legend-color").style("background-color", color(d.group));
            item.append("span").text(`${d.group}: ${d.value}`);
        }
    });
}

function drawCumulativeRadialChart(value, total) {
    const selector = "#cumulative-permits-chart-container";
    const container = d3.select(selector).html("");
    const percentage = total > 0 ? value / total : 0;
    if (value === null || typeof value === 'undefined') { drawNoData(selector); return; }
    container.on("click", () => showModal("Cumulative Permits Data", [{ "Cumulative Value": value, "Year Total": total }]));
    const width = container.node().getBoundingClientRect().width, height = 300, radius = Math.min(width, height) / 2 * 0.7, thickness = 22;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    const arc = d3.arc().innerRadius(radius - thickness).outerRadius(radius).startAngle(0).cornerRadius(10);
    svg.append("path").datum({ endAngle: 2 * Math.PI }).style("fill", "#eef0f3").attr("d", arc);
    const foreground = svg.append("path").datum({ endAngle: 0 }).style("fill", "#C8102E").attr("d", arc);
    foreground.transition().duration(1000).attrTween("d", function(d) { const interpolate = d3.interpolate(d.endAngle, 2 * Math.PI * percentage); return function(t) { d.endAngle = interpolate(t); return arc(d); }; });
    const valueText = svg.append("text").attr("text-anchor", "middle").attr("dy", "0.05em").style("font-size", "44px").style("font-weight", "700").style("fill", "var(--dark-text)");
    valueText.transition().duration(1000).tween("text", function() { const interpolate = d3.interpolate(0, value); return function(t) { this.textContent = d3.format(",.0f")(interpolate(t)); }; });
    svg.append("text").attr("text-anchor", "middle").attr("dy", "2.2em").style("font-size", "14px").style("fill", "#666").text("Permits YTD");
}

function drawObservationsTrendChart(data) {
    const selector = "#observations-chart-container";
    const container = d3.select(selector).html("");
    const kpiKey = "HSE_Observation";

    // 1. شرط: عدم إظهار الشارت إذا كان "شهر واحد" (يناير) أو لا توجد بيانات
    // (data.length === 1 && data[0].Month === 'Jan') تعني أننا في شهر يناير فقط
    if (data.length === 0 || (data.length === 1 && data[0].Month === 'Jan')) {
        drawNoData(selector);
        return;
    }

    container.on("click", () => showModal("Trend of Safety Observations", data.map(d => ({ Month: monthMapping[d.Month], Observations: d[kpiKey] }))));

    const margin = { top: 20, right: 30, bottom: 40, left: 50 },
        width = container.node().getBoundingClientRect().width - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    const svg = container.append("svg").attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`).append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const gradient = svg.append("defs").append("linearGradient").attr("id", "area-gradient").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#C8102E").attr("stop-opacity", 0.4);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#C8102E").attr("stop-opacity", 0);

    const x = d3.scalePoint().range([0, width]).domain(data.map(d => d.Month)).padding(0.5);

    // 2. تعديل المحور الرأسي ليبدأ من 0 وينتهي عند 200
    const y = d3.scaleLinear()
        .domain([0, 200]) // <--- تم التغيير هنا إلى 200
        .range([height, 0]);

    svg.append("g").attr("class", "axis-x").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append("g").attr("class", "axis-y").call(d3.axisLeft(y));

    const area = d3.area().x(d => x(d.Month)).y0(height).y1(d => y(d[kpiKey])).curve(d3.curveCatmullRom.alpha(0.5));
    svg.append("path").datum(data).attr("class", "area").attr("d", area);

    const line = d3.line().x(d => x(d.Month)).y(d => y(d[kpiKey])).curve(d3.curveCatmullRom.alpha(0.5));
    svg.append("path").datum(data).attr("class", "line").attr("d", line);
}

// =================================================================
// SECTION 6: INITIALIZATION & EVENTS
// =================================================================

function setupDashboard() {
    const monthDropdown = d3.select("#month-filter");
    const yearDropdown = d3.select("#year-filter");

    monthDropdown.append("option").attr("value", "Cumulative").text("Cumulative (YTD)");
    monthDropdown.selectAll("option.month-opt")
        .data(ALL_MONTHS).enter().append("option")
        .attr("value", d => d).text(d => monthMapping[d]);

    const defaultYear = "2026";
    const defaultMonth = "Apr";

    // تحميل البيانات لأول مرة
    loadYearData(defaultYear);

    if (!yearDropdown.empty()) yearDropdown.property("value", defaultYear);
    monthDropdown.property("value", defaultMonth);

    // تشغيل العرض الافتراضي
    updateDashboard(defaultMonth);

    // دالة المعالجة الموحدة للتغيير
    function handleUpdate() {
        const selectedYear = yearDropdown.property("value");
        const selectedMonth = monthDropdown.property("value");
        const currentView = document.getElementById('report-view').style.display === 'block' ? 'report' : 'dashboard';

        // تحديث بيانات الداشبورد (للسنة المختارة)
        loadYearData(selectedYear);

        // التحديث حسب الشاشة المفتوحة حالياً
        if (currentView === 'dashboard') {
            updateDashboard(selectedMonth);
        } else {
            renderMonthlyReport(selectedMonth);
        }
    }

    monthDropdown.on("change", handleUpdate);
    yearDropdown.on("change", handleUpdate);

    setupModal();
    setupSidebarDropdowns();
    setupSidebarToggle();
    setupSubDropdowns();
}

function setupModal() {
    d3.select(".close-button").on("click", hideModal);
    d3.select("#modal-overlay").on("click", function(event) {
        if (event.target === this) {
            hideModal();
        }
    });
}

function setupSidebarDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.classList.contains('open')) {
                dropdownContent.classList.remove('open');
                this.classList.remove('active');
            } else {
                dropdownContent.classList.add('open');
                this.classList.add('active');
            }
        });
    });
}

function setupSidebarToggle() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    if (toggleButton && sidebar && mainContent) {
        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation();
            sidebar.classList.toggle('visible');
        });
        mainContent.addEventListener('click', () => {
            if (sidebar.classList.contains('visible')) {
                sidebar.classList.remove('visible');
            }
        });
    }
}

function setupSubDropdowns() {
    const subToggles = document.querySelectorAll('.sub-toggle');
    subToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const content = this.nextElementSibling;
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                this.classList.remove('active');
            } else {
                content.classList.add('open');
                this.classList.add('active');
            }
        });
    });
}

// PWA Logic (Unchanged)
let deferredPrompt;
const installBtn = document.getElementById('sidebar-install-btn');
const isAppInstalled = () => {
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) return true;
    if (document.referrer.includes('android-app://')) return true;
    return false;
};
const isIos = () => /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'flex';
});

if (isIos() && !isAppInstalled() && installBtn) {
    installBtn.style.display = 'flex';
}

if (installBtn) {
    installBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') installBtn.style.display = 'none';
            deferredPrompt = null;
        } else if (isIos()) {
            alert("لتثبيت التطبيق على الآيفون:\n1. اضغط على زر المشاركة (Share) أسفل الشاشة.\n2. اختر 'Add to Home Screen'.");
        }
    });
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('SW Registered'))
            .catch(err => console.log('SW Error:', err));
    });
}
// ==========================================
// VISITOR COUNTER LOGIC (GOOGLE APPS SCRIPT)
// ==========================================
function updateVisitorCount() {
    const countElement = document.getElementById('visits-count');
    const baseCount = 4053;

    // 1. عرض نقط (تحميل) بدلاً من الرقم الثابت في البداية
    if (countElement) {
        countElement.innerText = "...";
    }

    // 2. حط الرابط بتاع جوجل سكريبت بتاعك هنا 👇 (بين علامات التنصيص)
    // مثال: const url = `https://script.google.com/macros/s/AKfycbw.../exec`;
    const url = `https://script.google.com/macros/s/AKfycby7nSSoXpEw2mUTpN2inZzHAHKkkpZKWT5A71Y4iICe1GRr_v8dVstBfzwpmkf3H7r-HA/exec`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(data => {
            if (countElement && data.count) {
                // 3. عرض الرقم الجديد بنجاح
                countElement.innerText = data.count.toLocaleString();
                localStorage.setItem('last_known_visits', data.count);
            }
        })
        .catch(err => {
            console.log("تم تشغيل العداد الداخلي:", err);
            if (countElement) {
                // 4. في حالة فشل الاتصال، يتم استدعاء آخر رقم محفوظ وتزويده
                let localFallback = localStorage.getItem('last_known_visits');

                // لو مفيش رقم محفوظ خالص، استخدم الرقم الأساسي كمرجع
                if (!localFallback) {
                    localFallback = baseCount;
                }

                localFallback = parseInt(localFallback) + 1;
                localStorage.setItem('last_known_visits', localFallback);
                countElement.innerText = localFallback.toLocaleString();
            }
        });
}

// تشغيل العداد عند فتح الموقع
updateVisitorCount();
// Start App
setupDashboard();
