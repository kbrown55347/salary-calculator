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

    //push to employeeList array
    employeeList.push(newEmployee);
    console.log(newEmployee);
}