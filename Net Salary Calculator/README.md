# Function
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
## How it works 
The user inputs their, Gross Salary and Allowances and it used to calculate the PAYE and Net Salary
Following these steps The PAYE is calculated
Step 1. Gross Income = Basic salary + allowances + commissions
Step 2. Taxable Income = Gross Income - all deductions/exemptions allowed by law e.g. NSSF, private pension
Step 3. From Taxable Income on step 2, Calculate marginal taxes by multiplying the total amount of taxable income in each successive tax bracket by its tax rate.
Step 4. Total PAYE tax = Sum of the marginal taxes from step 3
Step 5. Tax Payable = Total PAYE - Total Relief e.g. Personal Relief, Insurance Relief
And displays the Net Salary without showing the calculation
### Breakdown
  Here's how the code works:
In summary, this HTML code creates a web page with a form that allows the user to input values for gross salary and Allowances, In the Background it calculates The results are displayed in right under the input field 
#### Website Refrences used
https://www.aren.co.ke/calculators/deducalc.htm
https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye
https://www.pesabazaar.com/kra-salary-income-tax-paye-calculator
