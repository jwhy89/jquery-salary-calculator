// create empty constant array
const employeeTable = [];

// This says to run readNow when the DOM is loaded
$(document).ready(readyNow);

// This will run when the DOM is loaded
// Will setup the behavior for the submit button
function readyNow() {
    // This says to call handleSubmit when we click on submit button
    $('btn-add-employee').on('click', handleSubmit); // this already had loaded

} // callback function when dom is ready

// This is called when submit is called
// It will prevent default form behavior to refresh page & call addEmployee
function handleSubmit(event) {
    console.log(`The click event`, event);
    event.preventDefault();
    addEmployee();
}

// This will get values get values from inputs
// and add a pet to our list of pets and cause the list to redisplay
function addEmployee() {
    let employee = getEmployeeTableData();

    // Add new pet to array
    employeeTable.push(employee);

    // Once pet is added successfully, clear form
    clearEmployeeTable();

    // Display the page
    render();
}

function getEmployeeTableData() {
    let employee = {
        firstName: $('#in-firstName').val(),
        lastName: $('#in-lastName').val(),
        id: $('#in-idNumber').val(),
        title: $('#in-title').val(),
        salary: $('#in-salary').val(),
    }
    return employee;
}

function clearEmployeeTable() {
    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-idNumber').val('');
    $('#in-title').val('');
    $('#in-salary').val('');
}

function render() {
    // Empty the existing table
    $('#employee-table').empty();

    // Loop through the employeeTable array, and add row for each employee
    for (let employee of employeeTable) {
        // add class employee used for the class employee
        $('#employee-table').append(`
            <td id="rows">${employee.firstName}</td>
            <td id="rows">${employee.lastName}</td>
            <td id="rows">${employee.id}</td>
            <td id="rows">${employee.title}</td>
            <td id="rows">${employee.salary}</td>
        `);
    }
}