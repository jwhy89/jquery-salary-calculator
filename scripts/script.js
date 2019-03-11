// create empty constant array
const employeeList = [];

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
    employeeList.push(employee);

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

function clearEmployeeForm() {
    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-idNumber').val('');
    $('#in-title').val('');
    $('#in-salary').val('');
}

function render() {
    // Empty the existing ul
    $('#employee-list').empty();

    // Loop through the petList array, and li for each pet
    for (let employee of employeeList) {
        // add class pet used for the class pet
        let $li = $(`<li class="employee">${pet.name} belongs to ${pet.owner}.</li>`);
        $li.data(pet);
        console.log($li.data());
        $('#pet-list').append($li);
    }
}