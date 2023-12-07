document.getElementById("employee-name").focus();
let employees = ["John Doe", 
                "Jane Smith", 
                "Michael Johnson", 
                "Emily Davis"];
let salaries = [150000, 60000, 120000, 75000];

function displayResults() {
    let averageSalary = 0;
    let highestSalary = 0;
    let sumOfSalaries = 0;

    for (let i = 0; i < employees.length; i++) {
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
        sumOfSalaries += salaries[i];
    }

    averageSalary = sumOfSalaries / salaries.length;
    const div = document.createElement("div");
    div.setAttribute("id", "results");
    const h2 = document.createElement("h2");
    h2.innerText = "Results";
    const p_average_salary = document.createElement("p");
    p_average_salary.innerText = "Average Salary: $" + averageSalary.toFixed(2);
    const p_highest_salary = document.createElement("p");
    p_highest_salary.innerText = "Highest Salary: $" + highestSalary;
    div.appendChild(h2);
    div.appendChild(p_average_salary);
    div.appendChild(p_highest_salary);

    let currentDiv = document.getElementById("results");
    if (currentDiv != null) {
        currentDiv.innerHTML = div.innerHTML;
    } else {
        document.getElementById("employee-management").appendChild(div);
    }
}

function displaySalary() {
    const table = document.createElement("table");
    table.setAttribute("id", "results_table");
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>Employee</th><th>Salary</th>`;
    table.appendChild(tr);

    for (let i = 0; i < employees.length; i++) {
        let currentRow = document.createElement("tr");
        currentRow.innerHTML = `<td>${employees[i]}</td><td>$${salaries[i]}</td>`;
        table.appendChild(currentRow);
    }

    let currentTable = document.getElementById("results_table");
    if (currentTable != null) {
        currentTable.innerHTML = table.innerHTML;
    } else {
        document.getElementById("employee-management").appendChild(table);
    }
}

function addSalary() {
    let newEmployeeName = document.getElementById("employee-name").value;
    let newEmployeeSalary = document.getElementById("employee-salary").value;

    if (!newEmployeeName) {
        alert("Enter a name");
    } else if (!newEmployeeSalary) {
        alert("Enter a salary");
    } else if (typeof newEmployeeName !== "string") {
        alert("Enter a name instead of numbers");
    } else {
        employees.push(newEmployeeName);
        salaries.push(newEmployeeSalary);
        document.getElementById("employee-name").value = "";
        document.getElementById("employee-salary").value = "";
    }
}

document.getElementById("add-employee-salary").addEventListener('click', addSalary);
document.getElementById("display-results").addEventListener('click', displayResults);
document.getElementById("display-salary").addEventListener('click', displaySalary);
