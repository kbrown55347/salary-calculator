$(document).ready(readyNow);

function readyNow() {
    // use jQuery to add employee on submit button click
    $('#submit-button').on('click', handleSubmitEmployeeClick);
    $('tbody').on('click', '.delete-button', handleDeleteClick);
}

let employeeList = [];

// Create handleSubmitEmployeeClick function that collects info from 
// input fields and adds to employeeList array
function handleSubmitEmployeeClick() {
    // add new input employee info as object
    let newEmployee = {
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        idNumber: $('#id-input').val(),
        jobTitle: $('#job-title-input').val(),
        annualSalary: $('#salary-input').val(),
    };
    // only run if inputs are filled and checkInputFields returns false
    if (checkInputFields(newEmployee)) {
        alert('Please fill out all fields!');
        return;
    }
    // push to employeeList array
    employeeList.push(newEmployee);

    // run function to clear input fields
    clearInputFields();
    // call appendEmployeeInfo 
    appendEmployeeInfo(employeeList);
    // call calculateMonthlyCost
    calculateMonthlyCost(employeeList);
}


// Create function to clear input fields
function clearInputFields() {
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#job-title-input').val('');
    $('#salary-input').val('');
}

// Create function to check if all inputs are filled
function checkInputFields(employee) {
    if(employee.firstName === '' || employee.lastName === '' || employee.idNumber === '' || employee.jobTitle === '' || employee.annualSalary === '') {
        return true;
    }
    return false;
}

// Create function to empty then append employeeList info onto DOM in table
function appendEmployeeInfo(employees) {
    $('#employee-table-body').empty();
    // loop through each employee in employeeList
    for (let employee of employees) {
    // add info for each employee as row in table
        let newTableRow = `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class="id-number">${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>$${employee.annualSalary}</td>
                <td><button class='delete-button'>Delete</button></td>
            </tr>
        `;
        $('#employee-table-body').append(newTableRow);
    }
}
// Write function that takes in parameter of employees array and sums 
// monthly cost of employees
function calculateMonthlyCost(employeesList) {
// set sum variable equal to 0
    let sum = 0;
// loop through array of employees
    for (let employee of employeesList) {
// add annualSalary for each employee to sum
    sum += Number(employee.annualSalary);
    }
// set monthlyCost variable equal to sum divided by 12
let monthlyCost = (sum / 12);
// empty then append monthlyCost to monthly-cost-number id
$('#monthly-cost-number').empty();
$('#monthly-cost-number').append(monthlyCost.toFixed(2));

// If the total monthly cost exceeds $20,000.00
    if (monthlyCost > 20000.00) {
    // add red background color to total monthly cost
    $('#monthly-cost-title').addClass('highlight');
    }
    if (monthlyCost <= 20000.00) {
        $('#monthly-cost-title').removeClass('highlight');
    }
}
// Write "delete employee info" functionality
function handleDeleteClick() {
    let val = $(this).closest('tr').find('.id-number').text();
    // console.log(val);
    let index = employeeList.findIndex(function(item) {return item.idNumber === val});
    // console.log(index);
    employeeList.splice(index, 1);
    $(this).closest('tr').remove();

    calculateMonthlyCost(employeeList);
}

