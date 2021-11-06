$(document).ready(readyNow);

function readyNow() {
    // use jQuery to add employee on submit button click
    $('#submit-button').on('click', handleSubmitEmployeeClick);
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
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button id='delete-button'>Delete</button></td>
            </tr>
        `;
        $('#employee-table-body').append(newTableRow);
    }
    console.log(employeeList);
}