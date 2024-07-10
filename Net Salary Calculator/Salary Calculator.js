// Prompting user for input
const prompt = require("prompt-sync")({ sigint: true });
const basicSalary = parseFloat(prompt("Input monthly basic salary: "));
const allowances = parseFloat(prompt("Input total allowance: "));
//creates a formula that calculates taxable income
const taxableIncome = basicSalary + allowances;
//creates the taxable bands for each category
let band1 = Math.trunc(122298 * 0.1);
let band2 = Math.trunc(23885 * 0.15);
let band3 = Math.trunc(35472 * 0.2);
let band4 = Math.trunc(47059 * 0.25);
let band5 = Math.trunc((basicSalary - (122298 + 23886 + 35473 + 47059)) * 0.30);

//calculates the payee
function paye() {
    if (taxableIncome > 0 && taxableIncome <= 12298) {return band1;}
    if (taxableIncome > 12999 && taxableIncome <= 23885) {return band2 + band1;}
    if (taxableIncome > 23886 && taxableIncome <= 35472) {return band3 + band2 + band1;}
    if (taxableIncome > 35473 && taxableIncome <= 47058) {return band4 + band3 + band2 + band1;}
    if (taxableIncome > 47059) {return band5;}
}
//Calculates the gross salary
let relief=2400;
const grossSalary=paye()-relief;

//calculates NHIF deductions
function nhif() {
    let calculatedPaye = grossSalary;
    if (calculatedPaye >= 0 && calculatedPaye <= 5999) {return 150;}
    if (calculatedPaye >= 6000 && calculatedPaye <= 7999) {return 300;}
    if (calculatedPaye >= 8000 && calculatedPaye <= 11999) {return 400;}
    if (calculatedPaye >= 12000 && calculatedPaye <= 14999) {return 500;}
    if (calculatedPaye >= 15000 && calculatedPaye <= 19999) {return 600;}
    if (calculatedPaye >= 20000 && calculatedPaye <= 24999) {return 750;}
    if (calculatedPaye >= 25000  && calculatedPaye <= 29999) {return 850;}
    if (calculatedPaye >= 30000 && calculatedPaye <= 34999) {return 900;}
    if (calculatedPaye >= 35000  && calculatedPaye <= 39999) {return 950;}
    if (calculatedPaye >= 40000 && calculatedPaye <= 45000) {return 1000;}
    if (calculatedPaye >= 45000 && calculatedPaye <= 44999) {return 1100;}
    if (calculatedPaye >= 50000 && calculatedPaye <= 59999) {return 1200;}
    if (calculatedPaye >= 60000 && calculatedPaye <= 69999) {return 1300;}
    if (calculatedPaye >= 70000 && calculatedPaye <= 79999) {return 1400;}
}
//calculates NSSF deductions
const nssf=basicSalary*0.06;
const netsalary=grossSalary-nhif()-nssf;
//console.logs the results
console.log(paye());
console.log(grossSalary);
console.log(nhif());
console.log(nssf);
console.log(netsalary);

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
        }]
    }
});