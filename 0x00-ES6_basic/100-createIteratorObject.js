#!/usr/bin/node
export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[departmentIndex];
      const currentEmployee = currentDepartment[employeeIndex];

      employeeIndex++;
      if (employeeIndex >= currentDepartment.length) {
        departmentIndex++;
        employeeIndex = 0;
      }

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
