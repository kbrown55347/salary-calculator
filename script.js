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
    // Set variables equal to .val() from each input field
    let newFirstName = $('#first-name-input').val();
    let newLastName = $('#last-name-input').val();
    let newIdNumber = $('#id-input').val();
    let newJobTitle = $('#job-title-input').val();
    let newAnnualSalary = $('#salary-input').val();
    // add employee info as object
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        idNumber: Number(newIdNumber),
        jobTitle: newJobTitle,
        annualSalary: Number(newAnnualSalary),
    }
    // push to employeeList array
    employeeList.push(newEmployee);

    // clear input fields
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#job-title-input').val('');
    $('#salary-input').val('');

    // call appendEmployeeInfo 
    appendEmployeeInfo(employeeList);
    // call calculateMonthlyCost
    calculateMonthlyCost(employeeList);
}
// Create function to empty then append employeeList info onto DOM in table
function appendEmployeeInfo(employees) {
    $('#employee-table-body').empty();
    // loop through each employee in employeeList
    for (let employee of employees) {
    // add info for each employee as row in table
        let newTableRow = `
            <tr>
                <td class="first-name">${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
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
    sum += employee.annualSalary;
    }
// set monthlyCost variable equal to sum divided by 12
let monthlyCost = (sum / 12);
// empty then append monthlyCost to monthly-cost-number id
$('#monthly-cost-number').empty();
$('#monthly-cost-number').append(monthlyCost.toFixed(2));

// If the total monthly cost exceeds $20,000
    if (monthlyCost > 20000) {
    // add red background color to total monthly cost
    $('#monthly-cost-title').toggleClass('highlight');
    }
}
// Write "delete employee info" functionality
function handleDeleteClick() {
    // let index = $('#delete-button').index(this);
    // employeeList.splice(index);
        let val = $(this).closest('tr').find('.first-name').text();
        // console.log(val);
        index = employeeList.findIndex(function(item) {return item.firstName === val});
        // console.log(index);
        employeeList.splice(index, 1);
    $(this).closest('tr').remove();
}

