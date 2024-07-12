const calculateButton = document.getElementById('calculateButton');
    const resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', calculateNetSalary);

    function calculateNetSalary() {
      // Get user inputs
      let grossSalary = document.getElementById("grossSalary").value;
      let allowances = document.getElementById("allowances").value;
      
      // Calculate basic salary
      let basicSalary = grossSalary - allowances;
      
      // Creates a formula that calculates taxable income
      let taxableIncome = basicSalary;
      
      // Creates the taxable bands for each category
      let band1 = Math.trunc(122298 * 0.1);
      let band2 = Math.trunc(23885 * 0.15);
      let band3 = Math.trunc(35472 * 0.2);
      let band4 = Math.trunc(47059 * 0.25);
      let band5 = Math.trunc((taxableIncome - (122298 + 23886 + 35473 + 47059)) * 0.30);

      // Calculates the PAYE
      function paye() {
        if (taxableIncome > 0 && taxableIncome <= 12298) {return band1;}
        if (taxableIncome > 12999 && taxableIncome <= 23885) {return band2 + band1;}
        if (taxableIncome > 23886 && taxableIncome <= 35472) {return band3 + band2 + band1;}
        if (taxableIncome > 35473 && taxableIncome <= 47058) {return band4 + band3 + band2 + band1;}
        if (taxableIncome > 47059) {return band5;}
      }

      // Calculates the gross salary
      let relief = 2400;
      let netPaye = paye() - relief;

      // Calculates NHIF deductions
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
        if (calculatedPaye >= 80000 && calculatedPaye <= 89999) {return 1500;}
        if (calculatedPaye >= 90000 && calculatedPaye <= 99999) {return 1600;}
        if (calculatedPaye >= 100000 && calculatedPaye <= Infinity) {return 1700}
      }

      // Calculates NSSF deductions
      const nssf = basicSalary * 0.06;
      const netSalary = grossSalary - nhif() - nssf;

      // Display the result
      resultParagraph.textContent = `Net Salary: ${netSalary.toFixed(2)}`;
    }