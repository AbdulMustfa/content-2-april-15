let employees = [
    { id: 1, name: "John", age: "28", profession: "developer" },
    { id: 2, name: "Alice", age: "32", profession: "designer" },
    { id: 3, name: "Bob", age: "25", profession: "admin" }
];
  
function PrintDeveloperbyMap() {
    let developers = employees.filter(employee => employee.profession === "developer");
    let developerNames = developers.map(developer => developer.name);
    console.log(developerNames);
}
  
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee.name);
      }
    });
}
  
function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
}
  
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}
  
function ConcatinateArray() {
    let newArray = [
      { id: 4, name: "Jane", age: "30", profession: "developer" },
      { id: 5, name: "Peter", age: "22", profession: "designer" },
      { id: 6, name: "Sarah", age: "27", profession: "developer" }
    ];
    let concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
};  