 // KRA tax rates
    const payeRatesMonthly = [
        { min: 0, max: 12298, rate: 0.10 },
        { min: 12999, max: 23885, rate: 0.15 },
        { min: 23886, max: 35472, rate: 0.20 },
        { min: 35473, max: 47059, rate: 0.25 },
        { min: 47059, max: Infinity, rate: 0.30 }
    ];

    // NHIF rates
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
    ];

    // NSSF rates
    const nssfLowerBound = 6000;
    const nssfRate = 0.06;

    function calculateNetPay() {
    // ...

    // Calculate the tax payable using the KRA tax rates
    let taxPayable = 0;
    let previousMax = 0;
    for (const taxRate of payeRatesMonthly) {
        if (grossSalary <= taxRate.max) {
            taxPayable += (grossSalary - previousMax) * taxRate.rate;
            break;
        } else {
            taxPayable += (taxRate.max - previousMax) * taxRate.rate;
            previousMax = taxRate.max;
        }
    }

    // Calculate the NHIF deductions
    let nhifDeductions = 0;
    for (const nhifRate of nhifRates) {
        if (grossSalary <= nhifRate.max) {
            nhifDeductions = nhifRate.deduction;
            break;
        }
    }

    // Calculate the NSSF deductions
    let nssfDeductions = 0;
    if (grossSalary > nssfLowerBound) {
        nssfDeductions = (grossSalary - nssfLowerBound) * nssfRate;
    }

    // Calculate the net pay
    const netPay = grossSalary - taxPayable - nhifDeductions - nssfDeductions;

    // Display the results
    document.getElementById("net-pay").innerHTML = `Net Pay: ${netPay.toFixed(2)}`;
    document.getElementById("paye").innerHTML = `PAYE: ${taxPayable.toFixed(2)}`;

    // Create the pie chart
    const pieChart = new Chart(document.getElementById("pie-chart"), {
        type: "pie",
        data: {
            labels: ["Net Pay", "PAYE", "NHIF", "NSSF"],
            datasets: [{
                data: [
                    (netPay / grossSalary) * 100,
                    (taxPayable / grossSalary) * 100,
                    (nhifDeductions / grossSalary) * 100,
                    (nssfDeductions / grossSalary) * 100
                ],
                backgroundColor: ["#FF69B4", "#33CC33", "#66CCCC", "#999999"]
