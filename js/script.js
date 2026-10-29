// Workshop 7 - Exercise 1: JSON Basics

// JSON data provided in the workshop
// JSON updated to include employee details
const text =
  '{ "employees" : [' +
  '{ "firstName":"John", "lastName":"Doe", "department":"Sales", "role":"Sales Assistant" },' +
  '{ "firstName":"Anna", "lastName":"Smith", "department":"IT", "role":"Developer" },' +
  '{ "firstName":"Peter", "lastName":"Jones", "department":"Logistics", "role":"Warehouse Supervisor" } ]}';

// Convert the JSON string into a JavaScript object
const data = JSON.parse(text);

// Display the employees in the browser console
console.log(data.employees);

// Exercise 1 - Display first and last names

document.querySelector("#showNames").addEventListener("click", function () {
  const output = document.querySelector("#jsondata");

  // Clear previous content
  output.replaceChildren();

  // Display each employee's name
  data.employees.forEach(function (employee) {
    const paragraph = document.createElement("p");
    paragraph.textContent = employee.firstName + " " + employee.lastName;
    output.appendChild(paragraph);
  });
});

// Exercise 1 - Display all employee details

document.querySelector("#showDetails").addEventListener("click", function () {
  const output = document.querySelector("#jsondata");

  // Clear previously displayed information
  output.replaceChildren();

  // Display all employee properties
  data.employees.forEach(function (employee) {
    const paragraph = document.createElement("p");

    paragraph.textContent = `${employee.firstName} ${employee.lastName} — ${employee.role} (${employee.department})`;

    output.appendChild(paragraph);
  });
});
