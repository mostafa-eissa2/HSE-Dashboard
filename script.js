// =================================================================
// SECTION 1: RAW DATA SECTIONS
// =================================================================

const permits_csv = `
المشروع,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
التحكم الاقليمي,20,29,14,21,11,0,18,10,8,19,8,0
الحي الحكومي,1,1,2,0,0,0,2,0,0,0,2,0
الحي الدبلوماسي,32,29,23,12,17,24,81,105,63,23,33,0
العلمين,53,62,21,99,101,46,113,119,77,29,47,0
الفردوس,59,44,11,16,66,6,1,2,0,0,6,0
الكيان العسكري,47,36,22,27,25,27,50,46,48,34,27,0
حياة كريمة الفيوم,148,127,116,122,111,113,99,79,59,33,18,0
حياة كريمة المنيا,111,60,38,68,84,32,46,39,47,59,22,0
حياة كريمة أرمنت,33,22,10,5,1,0,0,4,0,0,0,0
حياة كريمة أسنا,19,12,1,0,10,3,6,0,2,0,0,0
حياة كريمة أسوان,88,54,29,23,33,20,30,9,11,10,13,0
حياة كريمة صدفا,14,8,5,5,1,6,1,2,0,0,0,0
حياة كريمة مطوبس,14,11,3,16,10,1,0,8,2,14,10,0
حياة كريمة منفلوط,23,14,45,9,9,15,6,4,3,0,0,0
دهشور,57,50,10,76,66,19,7,30,39,40,43,0
سانت كاترين,61,45,32,35,68,14,20,23,17,23,5,0
ميناء الدخيلة,87,22,6,7,5,9,7,0,1,0,13,0
سوهاج,20,26,24,26,29,24,63,52,60,41,28,0
مصنع البلاط,0,0,0,0,0,0,0,0,0,0,20,0
أبو قير,1,0,0,1,1,1,0,0,0,0,13,0
العبور,0,0,0,11,14,16,16,32,83,66,66,0
العاشر من رمضان,0,0,0,0,0,2,9,8,0,0,3,0
حياة كريمة زفتى,0,0,0,0,0,0,0,1,0,0,0
`;

const parties_csv = `
Column1,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
المقاول,535,402,227,334,388,186,323,339,301,166,204,0
المخازن,71,54,39,59,69,54,58,58,45,41,27,0
قسم الجودة,35,22,18,22,30,23,27,16,30,25,31,0
قسم المساحة,47,24,8,18,23,8,36,32,44,21,20,0
قسم تنفيذ الكهرباء,196,148,118,146,152,106,126,123,98,138,94,0
قسم المدني,4,2,2,0,0,1,5,5,2,0,1,0
`;

const delays_csv = `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Delays,588,431,245,381,443,315,476,466,348,282,254,0
On Time,300,221,167,198,219,63,99,107,172,109,123,0
`;

const shifts_csv = `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
DAY,862,622,398,549,643,371,557,560,513,387,371,0
NIGHT,26,30,14,30,19,7,18,13,7,4,5,0
`;

const compliance_csv = `
Category,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
Compliance,0.34,0.34,0.41,0.34,0.33,0.17,0.17,0.19,0.33,0.28,0.33,0
`;

const performance_csv = `
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
Dec,0
`;

// === (تعديل 1: إضافة عمودي Campaigns و Drills) ===
const manpower_csv = `
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
Nov,60853,54741,0,0,1,0,0
Dec,0,0,0,0,0,0,0
`;

const training_csv = `
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
Dec,0,0
`;

const inductions_csv = `
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
Dec,0
`;

// =================================================================
// SECTION 2: CONFIGURATION AND DATA PARSING
// =================================================================

const monthMapping = {
    "Jan": "January", "Feb": "February", "Mar": "March", "Apr": "April", "May": "May", "Jun": "June",
    "Jul": "July", "Aug": "August", "Sep": "September", "Oct": "October", "Nov": "November", "Dec": "December"
};
const ALL_MONTHS = Object.keys(monthMapping);

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

const ALL_DATA = {
    permits: parseGeneric(permits_csv),
    parties: parseGeneric(parties_csv),
    shifts: parseGeneric(shifts_csv),
    delays: parseGeneric(delays_csv),
    compliance: parseGeneric(compliance_csv),
    performance: parseByMonth(performance_csv),
    manpower: parseByMonth(manpower_csv),
    training: parseByMonth(training_csv),
    inductions: parseByMonth(inductions_csv),
};
const availableMonths = Object.keys(ALL_DATA.performance);

// =================================================================
// SECTION 3: MAIN APPLICATION LOGIC
// =================================================================

function setupDashboard() {
    const dropdown = d3.select("#month-filter");

    dropdown.append("option").attr("value", "Cumulative").text("Cumulative (YTD)");

    dropdown.selectAll("option.month-opt")
        .data(ALL_MONTHS).enter().append("option")
        .attr("value", d => d).text(d => monthMapping[d]);

    const defaultMonth = "Oct";
    dropdown.property("value", defaultMonth);
    updateDashboard(defaultMonth);

    dropdown.on("change", (event) => updateDashboard(event.target.value));
    setupModal();
}

function updateDashboard(selectedMonth) {
    const totalHoursCard = d3.select("#total-hours-card");
    const kpiGrid = d3.select("#monthly-kpis");

    let permitsData = [], partiesData = [], shiftsData = [], delaysData = [];

    // === (تعديل 2: إضافة المتغيرات الجديدة) ===
    let kpiValues = {
        hours: 0, employees: 0, ptw: 0, observations: 0,
        lti: 0, mtc: 0, propDamage: 0, trainings: 0, inductions: 0,
        campaigns: 0, drills: 0 // << تم الإضافة
    };

    if (selectedMonth === 'Cumulative') {
        permitsData = aggregateGenericData(ALL_DATA.permits);
        partiesData = aggregateGenericData(ALL_DATA.parties);
        shiftsData = aggregateGenericData(ALL_DATA.shifts);
        delaysData = aggregateGenericData(ALL_DATA.delays);

        ALL_MONTHS.forEach(m => {
            const manp = ALL_DATA.manpower[m] || {};
            const train = ALL_DATA.training[m] || {};
            const perf = ALL_DATA.performance[m] || {};
            const induc = ALL_DATA.inductions[m] || {};
            const ptwCount = d3.sum(ALL_DATA.permits[m] || [], d => d.value);

            kpiValues.hours += (+manp["Worked Hours Sewedy"] || 0) + (+manp["Worked Hours Sub"] || 0);
            kpiValues.ptw += ptwCount;
            kpiValues.observations += (+perf.HSE_Observation || 0);
            kpiValues.lti += (+manp.LTI || 0);
            kpiValues.mtc += (+manp.MTC || 0);
            kpiValues.propDamage += (+manp["Property Damage"] || 0);
            kpiValues.trainings += (+train["Total Training"] || 0);
            kpiValues.inductions += (+induc.Total || 0);

            // === (تعديل 3: جمع القيم التراكمية) ===
            kpiValues.campaigns += (+manp.Campaigns || 0);
            kpiValues.drills += (+manp.Drills || 0);

            if (+train["Emp Manpower"] > 0) kpiValues.employees = +train["Emp Manpower"];
        });

        totalHoursCard.style("display", "block");
        d3.select(".total-kpi .kpi-label").text("TOTAL SAFE WORK-HOURS (YTD)");
        animateValue("kpi-total-hours", kpiValues.hours);

    } else {
        permitsData = ALL_DATA.permits[selectedMonth] || [];
        partiesData = ALL_DATA.parties[selectedMonth] || [];
        shiftsData = ALL_DATA.shifts[selectedMonth] || [];
        delaysData = ALL_DATA.delays[selectedMonth] || [];

        const perf = ALL_DATA.performance[selectedMonth] || {};
        const manp = ALL_DATA.manpower[selectedMonth] || {};
        const train = ALL_DATA.training[selectedMonth] || {};
        const induc = ALL_DATA.inductions[selectedMonth] || {};

        kpiValues.hours = (+manp["Worked Hours Sewedy"] || 0) + (+manp["Worked Hours Sub"] || 0);
        kpiValues.employees = train["Emp Manpower"];
        kpiValues.ptw = d3.sum(permitsData, d => d.value);
        kpiValues.observations = perf.HSE_Observation;
        kpiValues.lti = manp.LTI;
        kpiValues.mtc = manp.MTC;
        kpiValues.propDamage = manp["Property Damage"];
        kpiValues.trainings = train["Total Training"];
        kpiValues.inductions = (induc.Total || 0);

        // === (تعديل 4: قراءة القيمة الشهرية) ===
        kpiValues.campaigns = manp.Campaigns;
        kpiValues.drills = manp.Drills;

        if (selectedMonth === 'Nov') {
            totalHoursCard.style("display", "block");
            animateValue("kpi-total-hours", 3787638);
            d3.select(".total-kpi .kpi-label").text("SAFE WORK-HOURS WITHOUT LTI");
        } else {
            totalHoursCard.style("display", "none");
        }
    }

    // === Filter Zeros ===
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
    const totalYearPermits = ALL_MONTHS.reduce((sum, m) => sum + d3.sum(ALL_DATA.permits[m] || [], d => d.value), 0);

    if (selectedMonth === 'Cumulative') {
        observationsCard.style("display", "block");
        trendData = Object.values(ALL_DATA.performance);
        radialValue = kpiValues.ptw;
    } else {
        if (selectedMonth === 'Jan' || !availableMonths.includes(selectedMonth)) {
            trendData = Object.values(ALL_DATA.performance).slice(0, ALL_MONTHS.indexOf(selectedMonth) + 1);
        } else {
            observationsCard.style("display", "block");
            trendData = Object.values(ALL_DATA.performance).slice(0, ALL_MONTHS.indexOf(selectedMonth) + 1);
        }

        let cumSum = 0;
        for (let i = 0; i <= ALL_MONTHS.indexOf(selectedMonth); i++) {
            cumSum += d3.sum(ALL_DATA.permits[ALL_MONTHS[i]] || [], d => d.value);
        }
        radialValue = cumSum;
    }

    drawObservationsTrendChart(trendData);
    drawCumulativeRadialChart(radialValue, totalYearPermits);
}

function aggregateGenericData(dataset) {
    const aggregated = {};

    ALL_MONTHS.forEach(month => {
        const monthData = dataset[month] || [];
        monthData.forEach(item => {
            if (!aggregated[item.group]) {
                aggregated[item.group] = 0;
            }
            aggregated[item.group] += item.value;
        });
    });

    return Object.keys(aggregated).map(key => ({
        group: key,
        value: aggregated[key]
    }));
}

function renderKPIGrid(values) {
    const container = d3.select("#monthly-kpis").html("");
    const kpiList = [
        { label: "Monthly Hours", value: values.hours },
        { label: "Employees", value: values.employees },
        { label: "PTW", value: values.ptw },
        { label: "Observations", value: values.observations },
        { label: "LTI", value: values.lti },
        { label: "MTC", value: values.mtc },
        { label: "Property Damage", value: values.propDamage },
        // === (تعديل 5: إضافة الكروت الجديدة للقائمة) ===
        { label: "Campaigns", value: values.campaigns },
        { label: "Drills", value: values.drills },
        // ===========================================
        { label: "Trainings", value: values.trainings },
        { label: "Inductions", value: values.inductions },
    ];

    kpiList.forEach(kpi => {
        const card = container.append("div").attr("class", "kpi-card");
        card.append("div").attr("class", "kpi-label").text(kpi.label);
        const valueDiv = card.append("div").attr("class", "kpi-value").attr("id", `kpi-${kpi.label.replace(/\s/g, '')}`).text(0);
        animateValue(`kpi-${kpi.label.replace(/\s/g, '')}`, kpi.value);
    });
}


// =================================================================
// SECTION 4: KPI & MODAL & CHART FUNCTIONS (Standard)
// =================================================================

const drawNoData = (selector) => d3.select(selector).html(`<p class="no-data-msg">No data for this selection.</p>`);

function animateValue(id, endValue) {
    const element = d3.select(`#${id}`);
    if (element.empty()) return;
    element.transition().duration(1500)
        .tween("text", function() {
            const i = d3.interpolate(this.textContent.replace(/,/g, ''), endValue);
            return function(t) { this.textContent = d3.format(",.0f")(i(t)); };
        });
}

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

function setupModal() {
    d3.select(".close-button").on("click", hideModal);
    d3.select("#modal-overlay").on("click", function(event) {
        if (event.target === this) {
            hideModal();
        }
    });
}

function drawPermitsChart(data, title) {
    const selector = "#permits-chart-container";
    const container = d3.select(selector).html("");

    // فلترة الأصفار
    const filteredData = data.filter(d => d.value > 0);

    if (filteredData.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, filteredData));

    const isMobile = window.innerWidth < 768;

    const margin = {
        top: 40,
        right: 20,
        bottom: isMobile ? 160 : 100,
        left: 50
    };

    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .range([0, width])
        .domain(filteredData.map(d => d.group))
        .padding(0.3);

    const y = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.value) * 1.3 || 10])
        .range([height, 0]);

    const xAxis = svg.append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    xAxis.selectAll("text")
        .attr("transform", isMobile ? "translate(-8, 10)rotate(-90)" : "translate(-10,5)rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", isMobile ? "10px" : "11px")
        .style("font-weight", "500");

    svg.append("g").attr("class", "axis-y").call(d3.axisLeft(y));

    svg.selectAll(".bar")
        .data(filteredData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.group))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value));

    // رسم الأرقام (مع ضبط السنتر بدقة)
    svg.selectAll(".bar-label")
        .data(filteredData)
        .enter().append("text")
        .attr("class", "bar-label")
        .text(d => d.value)
        .attr("transform", function(d) {
            const xPos = x(d.group) + x.bandwidth() / 2;
            const yPos = y(d.value) - 5;

            if (isMobile) {
                return `translate(${xPos}, ${yPos}) rotate(-90)`;
            } else {
                return `translate(${xPos}, ${yPos})`;
            }
        })
        .attr("dy", isMobile ? "0.35em" : "0")
        .style("text-anchor", isMobile ? "start" : "middle")
        .style("fill", "#333")
        .style("font-weight", "600")
        .style("font-size", isMobile ? "10px" : "11px")
        .style("opacity", 1);
}

function drawHorizontalBarChart(data, title) {
    const selector = "#parties-chart-container";
    const container = d3.select(selector).html("");
    if (data.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal(title, data));

    const isMobile = window.innerWidth < 768;

    const margin = {
        top: 20,
        right: isMobile ? 40 : 50,
        bottom: 40,
        left: isMobile ? 110 : 120
    };

    const width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(d => d.group))
        .padding(0.4);

    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) * 1.4 || 10])
        .range([0, width]);

    const yAxis = svg.append("g")
        .attr("class", "axis-y")
        .call(d3.axisLeft(y));

    if (isMobile) {
        yAxis.selectAll("text")
            .style("font-size", "10px")
            .style("font-weight", "500");
    }

    const xAxisCall = d3.axisBottom(x);
    if (isMobile) {
        xAxisCall.ticks(4);
    }

    const xAxis = svg.append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0,${height})`)
        .call(xAxisCall);

    if (isMobile) {
        xAxis.selectAll("text").style("font-size", "10px");
    }

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("y", d => y(d.group))
        .attr("height", y.bandwidth())
        .attr("x", 0)
        .attr("width", d => x(d.value));

    svg.selectAll(".bar-label")
        .data(data)
        .enter().append("text")
        .attr("class", "bar-label")
        .attr("y", d => y(d.group) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("x", d => x(d.value) + 10)
        .text(d => d.value)
        .style("fill", "var(--dark-text)")
        .attr("text-anchor", "start")
        .style("font-weight", "600")
        .style("opacity", d => d.value > 0 ? 1 : 0)
        .style("font-size", isMobile ? "10px" : "11px");
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
    foreground.transition().duration(1000).attrTween("d", function(d) {
        const interpolate = d3.interpolate(d.endAngle, 2 * Math.PI * percentage);
        return function(t) { d.endAngle = interpolate(t); return arc(d); };
    });
    const valueText = svg.append("text").attr("text-anchor", "middle").attr("dy", "0.05em").style("font-size", "44px").style("font-weight", "700").style("fill", "var(--dark-text)");
    valueText.transition().duration(1000).tween("text", function() {
        const interpolate = d3.interpolate(0, value);
        return function(t) { this.textContent = d3.format(",.0f")(interpolate(t)); };
    });
    svg.append("text").attr("text-anchor", "middle").attr("dy", "2.2em").style("font-size", "14px").style("fill", "#666").text("Permits YTD");
}

function drawObservationsTrendChart(data) {
    const selector = "#observations-chart-container";
    const container = d3.select(selector).html("");
    const kpiKey = "HSE_Observation";
    // const fullPerformanceData = Object.values(ALL_DATA.performance); // Not needed
    if (data.length === 0) { drawNoData(selector); return; }
    container.on("click", () => showModal("Trend of Safety Observations", data.map(d => ({ Month: monthMapping[d.Month], Observations: d[kpiKey] }))));
    const margin = { top: 20, right: 30, bottom: 40, left: 50 }, width = container.node().getBoundingClientRect().width - margin.left - margin.right, height = 300 - margin.top - margin.bottom;
    const svg = container.append("svg").attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const gradient = svg.append("defs").append("linearGradient").attr("id", "area-gradient").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#C8102E").attr("stop-opacity", 0.4);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#C8102E").attr("stop-opacity", 0);
    const x = d3.scalePoint().range([0, width]).domain(data.map(d => d.Month)).padding(0.5);
    const y = d3.scaleLinear().domain([0, 110]).range([height, 0]);
    svg.append("g").attr("class", "axis-x").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append("g").attr("class", "axis-y").call(d3.axisLeft(y));
    const area = d3.area().x(d => x(d.Month)).y0(height).y1(d => y(d[kpiKey])).curve(d3.curveCatmullRom.alpha(0.5));
    svg.append("path").datum(data).attr("class", "area").attr("d", area);
    const line = d3.line().x(d => x(d.Month)).y(d => y(d[kpiKey])).curve(d3.curveCatmullRom.alpha(0.5));
    svg.append("path").datum(data).attr("class", "line").attr("d", line);
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

// ==========================================
// 1. PWA INSTALL LOGIC (كود التثبيت)
// ==========================================
let deferredPrompt;
const installBtn = document.getElementById('sidebar-install-btn');

// دالة للتحقق هل التطبيق مثبت أم لا
const isAppInstalled = () => {
    // للآيفون والأندرويد الحديث
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
        return true;
    }
    // لبعض أجهزة الأندرويد
    if (document.referrer.includes('android-app://')) {
        return true;
    }
    return false;
};

// التحقق من الآيفون
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
};

// أ) للأندرويد والكمبيوتر (Chrome/Edge)
// هذا الحدث ينطلق تلقائياً إذا كان التطبيق "قابل للتثبيت" وغير مثبت
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // منع الشريط الافتراضي
    deferredPrompt = e; // حفظ الحدث

    // إظهار الزر في السايد بار
    if (installBtn) {
        installBtn.style.display = 'flex';
    }
});

// ب) للآيفون (Safari)
// الآيفون لا يرسل حدث beforeinstallprompt، لذا نفحص يدوياً
if (isIos() && !isAppInstalled() && installBtn) {
    installBtn.style.display = 'flex';
}

// ج) عند الضغط على زر التثبيت
if (installBtn) {
    installBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        if (deferredPrompt) {
            // للأندرويد/الكمبيوتر: أظهر نافذة التثبيت الأصلية
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installBtn.style.display = 'none';
            }
            deferredPrompt = null;
        } else if (isIos()) {
            // للآيفون: أظهر تعليمات
            alert("لتثبيت التطبيق على الآيفون:\n1. اضغط على زر المشاركة (Share) أسفل الشاشة.\n2. اختر 'Add to Home Screen'.");
        }
    });
}

// د) تسجيل السيرفس وركر (النسخة البسيطة للأونلاين)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('SW Registered'))
            .catch(err => console.log('SW Error:', err));
    });
}

setupDashboard();
setupSidebarDropdowns();
setupSidebarToggle();
