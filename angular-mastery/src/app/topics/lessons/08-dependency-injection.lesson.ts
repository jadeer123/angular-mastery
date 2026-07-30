import { LessonBlock } from '../topic.model';

export const lesson08DependencyInjection: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ Creating a Service"
  },
  {
    kind: "paragraph",
    text: "Angular provides a command to generate a Service."
  },
  {
    kind: "code",
    language: "bash",
    code: "ng generate service services/employee"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g s services/employee"
  },
  {
    kind: "paragraph",
    text: "Angular creates two files."
  },
  {
    kind: "code",
    language: "text",
    code: "employee.service.ts\n\nemployee.service.spec.ts"
  },
  {
    kind: "paragraph",
    text: "The `.spec.ts` file is used for testing."
  },
  {
    kind: "paragraph",
    text: "The main logic is written inside:"
  },
  {
    kind: "code",
    language: "text",
    code: "employee.service.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "📄 Generated Service"
  },
  {
    kind: "paragraph",
    text: "Angular generates something similar to this."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class EmployeeService {\n\n  constructor() { }\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now let's understand every part."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is @Injectable?"
  },
  {
    kind: "paragraph",
    text: "Look at this."
  },
  {
    kind: "code",
    language: "ts",
    code: "@Injectable({\n  providedIn: 'root'\n})"
  },
  {
    kind: "paragraph",
    text: "`@Injectable` tells Angular,"
  },
  {
    kind: "quote",
    text: "**\"This class is a Service, and Angular is allowed to create and inject it wherever it's needed.\"**"
  },
  {
    kind: "paragraph",
    text: "Without `@Injectable`, Angular doesn't know that this class should participate in Dependency Injection."
  },
  {
    kind: "paragraph",
    text: "Think of it as registering the service with Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "🏢 Think of an Office Reception"
  },
  {
    kind: "paragraph",
    text: "Imagine an office."
  },
  {
    kind: "paragraph",
    text: "Employees come and ask the receptionist."
  },
  {
    kind: "quote",
    text: "\"I need the HR Manager.\""
  },
  {
    kind: "paragraph",
    text: "The receptionist knows where to find the HR Manager because they're registered in the company."
  },
  {
    kind: "paragraph",
    text: "If someone isn't registered, the receptionist cannot help."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "code",
    language: "text",
    code: "@Injectable\n        ↓\nRegisters the Service with Angular\n        ↓\nAngular can provide it when requested"
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is `providedIn: 'root'`?"
  },
  {
    kind: "paragraph",
    text: "This is one of the most asked Angular interview questions."
  },
  {
    kind: "code",
    language: "ts",
    code: "providedIn: 'root'"
  },
  {
    kind: "paragraph",
    text: "means:"
  },
  {
    kind: "quote",
    text: "**Create one shared instance of this service for the entire application.**"
  },
  {
    kind: "paragraph",
    text: "Angular creates the service once."
  },
  {
    kind: "paragraph",
    text: "Every component uses that same instance."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Water Tank"
  },
  {
    kind: "paragraph",
    text: "Imagine an apartment."
  },
  {
    kind: "paragraph",
    text: "There are 50 flats."
  },
  {
    kind: "paragraph",
    text: "Do all 50 flats have separate water tanks?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "They all share one tank."
  },
  {
    kind: "code",
    language: "text",
    code: "Apartment\n\n        ↓\n\nWater Tank\n\n↑   ↑   ↑   ↑\n\nFlat Flat Flat Flat"
  },
  {
    kind: "paragraph",
    text: "Services work the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n       ↓\n\nEmployeeService\n\n(Single Instance)"
  },
  {
    kind: "paragraph",
    text: "Every component shares the same service."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Imagine Dashboard loads employee data."
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "Employees Component also needs employee data."
  },
  {
    kind: "paragraph",
    text: "Then,"
  },
  {
    kind: "paragraph",
    text: "Payroll Component also needs employee data."
  },
  {
    kind: "paragraph",
    text: "Angular doesn't create three EmployeeService objects."
  },
  {
    kind: "paragraph",
    text: "It creates **one**."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n      ↘\n\nEmployees → EmployeeService\n\nPayroll\n      ↗"
  },
  {
    kind: "paragraph",
    text: "Everyone shares the same service."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a Singleton Service?"
  },
  {
    kind: "paragraph",
    text: "A **Singleton** means:"
  },
  {
    kind: "quote",
    text: "**Only one object exists during the application's lifetime.**"
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\n↓\n\nCreated Once\n\n↓\n\nShared Everywhere"
  },
  {
    kind: "paragraph",
    text: "That's why services are called **Singleton Services** when provided in the root injector."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is Singleton Useful?"
  },
  {
    kind: "paragraph",
    text: "Imagine EmployeeService stores:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count = 120"
  },
  {
    kind: "paragraph",
    text: "Dashboard reads it."
  },
  {
    kind: "paragraph",
    text: "Employees reads it."
  },
  {
    kind: "paragraph",
    text: "Payroll reads it."
  },
  {
    kind: "paragraph",
    text: "All components see the same value because they are using the same service instance."
  },
  {
    kind: "paragraph",
    text: "If Angular created a new service for every component:"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard → 120\n\nEmployees → 0\n\nPayroll → 35"
  },
  {
    kind: "paragraph",
    text: "The data would become inconsistent."
  },
  {
    kind: "paragraph",
    text: "Sharing one instance keeps the application state consistent."
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Adding a Method to the Service"
  },
  {
    kind: "paragraph",
    text: "A service usually contains reusable methods."
  },
  {
    kind: "code",
    language: "ts",
    code: "export class EmployeeService {\n\n  getEmployees() {\n    return ['John', 'Emma', 'David'];\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "The service now provides employee data."
  },
  {
    kind: "paragraph",
    text: "Components can reuse this method instead of duplicating it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Use `ng generate service` to create a service."
  },
  {
    kind: "paragraph",
    text: "✔ `@Injectable` registers the class as a service."
  },
  {
    kind: "paragraph",
    text: "✔ `providedIn: 'root'` creates one shared instance."
  },
  {
    kind: "paragraph",
    text: "✔ A Singleton Service is created once and reused throughout the application."
  },
  {
    kind: "paragraph",
    text: "✔ Services contain reusable business logic, API calls, and shared state."
  },
  {
    kind: "heading",
    level: 2,
    text: "Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now that we have created a service, the next question is:"
  },
  {
    kind: "quote",
    text: "**\"How does a component actually use that service?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **Dependency Injection (DI)** comes in. It explains how Angular automatically provides the service instance to a component without you creating it manually. This is the core concept that makes Angular services so powerful."
  },
  {
    kind: "paragraph",
    text: "Many developers use **Dependency Injection (DI)** every day without truly understanding it. Let's understand the concept first, then the code."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Dependency Injection (DI)"
  },
  {
    kind: "paragraph",
    text: "We created an `EmployeeService`."
  },
  {
    kind: "paragraph",
    text: "Now the question is:"
  },
  {
    kind: "quote",
    text: "**How does a component use that service?**"
  },
  {
    kind: "paragraph",
    text: "Imagine your Dashboard needs employee data."
  },
  {
    kind: "paragraph",
    text: "Should you create the service yourself?"
  },
  {
    kind: "code",
    language: "ts",
    code: "const employeeService = new EmployeeService();"
  },
  {
    kind: "paragraph",
    text: "You could..."
  },
  {
    kind: "paragraph",
    text: "But Angular says,"
  },
  {
    kind: "quote",
    text: "**\"Don't create it yourself. I'll create it and give it to you.\"**"
  },
  {
    kind: "paragraph",
    text: "This is called **Dependency Injection**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Dependency Injection?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS has these components."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nAttendance\n\nPayroll"
  },
  {
    kind: "paragraph",
    text: "Every component needs"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService"
  },
  {
    kind: "paragraph",
    text: "Should every component do this?"
  },
  {
    kind: "code",
    language: "text",
    code: "Create EmployeeService\n\n↓\n\nCall Methods"
  },
  {
    kind: "paragraph",
    text: "Again..."
  },
  {
    kind: "paragraph",
    text: "Dashboard creates one."
  },
  {
    kind: "paragraph",
    text: "Employees creates another."
  },
  {
    kind: "paragraph",
    text: "Payroll creates another."
  },
  {
    kind: "paragraph",
    text: "Attendance creates another."
  },
  {
    kind: "paragraph",
    text: "Now there are four different EmployeeService objects."
  },
  {
    kind: "paragraph",
    text: "This wastes memory and creates inconsistent data."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "Angular creates **one service** and shares it."
  },
  {
    kind: "heading",
    level: 2,
    text: "🏢 Think of an Office Printer"
  },
  {
    kind: "paragraph",
    text: "There are 100 employees."
  },
  {
    kind: "paragraph",
    text: "Should every employee buy their own printer?"
  },
  {
    kind: "paragraph",
    text: "The office buys **one printer**."
  },
  {
    kind: "paragraph",
    text: "Whenever someone needs it,"
  },
  {
    kind: "paragraph",
    text: "they simply use the shared printer."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee\n\n↓\n\nShared Printer\n\n↑\n\nEmployee\n\n↑\n\nEmployee"
  },
  {
    kind: "paragraph",
    text: "Dependency Injection works exactly the same way."
  },
  {
    kind: "paragraph",
    text: "The component doesn't create the service."
  },
  {
    kind: "paragraph",
    text: "Angular provides the shared service."
  },
  {
    kind: "paragraph",
    text: "Imagine the Dashboard loads."
  },
  {
    kind: "paragraph",
    text: "It needs EmployeeService."
  },
  {
    kind: "paragraph",
    text: "Angular provides it."
  },
  {
    kind: "paragraph",
    text: "Employees page opens."
  },
  {
    kind: "paragraph",
    text: "It also needs EmployeeService."
  },
  {
    kind: "paragraph",
    text: "Angular provides the same instance."
  },
  {
    kind: "paragraph",
    text: "Payroll opens."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n↓\n\nEmployeeService\n\n(Shared Instance)"
  },
  {
    kind: "paragraph",
    text: "Nobody creates the service manually."
  },
  {
    kind: "paragraph",
    text: "Angular manages it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Dependency Injection"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nCreate EmployeeService\n\n-------------------\n\nEmployees\n\n↓\n\nCreate EmployeeService\n\n-------------------\n\nPayroll\n\n↓\n\nCreate EmployeeService"
  },
  {
    kind: "paragraph",
    text: "Three objects."
  },
  {
    kind: "paragraph",
    text: "Three copies."
  },
  {
    kind: "paragraph",
    text: "More memory."
  },
  {
    kind: "paragraph",
    text: "Duplicate data."
  },
  {
    kind: "heading",
    level: 2,
    text: "With Dependency Injection"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n↓\n\nAngular\n\n↓\n\nEmployeeService\n\n(Single Instance)"
  },
  {
    kind: "paragraph",
    text: "Cleaner."
  },
  {
    kind: "paragraph",
    text: "Faster."
  },
  {
    kind: "paragraph",
    text: "Reusable."
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Injecting a Service"
  },
  {
    kind: "paragraph",
    text: "Angular injects the service through the constructor."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private employeeService: EmployeeService) {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Let's understand this line."
  },
  {
    kind: "paragraph",
    text: "Angular sees"
  },
  {
    kind: "paragraph",
    text: "It checks,"
  },
  {
    kind: "paragraph",
    text: "\"Do I already have this service?\""
  },
  {
    kind: "paragraph",
    text: "Yes."
  },
  {
    kind: "paragraph",
    text: "Then Angular automatically provides it to the component."
  },
  {
    kind: "heading",
    level: 2,
    text: "What Happens Internally?"
  },
  {
    kind: "paragraph",
    text: "Imagine Dashboard starts."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component\n\n↓\n\nNeeds EmployeeService\n\n↓\n\nAngular Checks\n\n↓\n\nAlready Created?\n\n↓\n\nYes\n\n↓\n\nProvide Existing Service\n\n↓\n\nDashboard Uses It"
  },
  {
    kind: "paragraph",
    text: "If the service doesn't exist yet,"
  },
  {
    kind: "paragraph",
    text: "Angular creates it once."
  },
  {
    kind: "paragraph",
    text: "every other component receives the same instance."
  },
  {
    kind: "heading",
    level: 2,
    text: "Using the Service"
  },
  {
    kind: "paragraph",
    text: "Now the component can call methods from the service."
  },
  {
    kind: "code",
    language: "ts",
    code: "employees = this.employeeService.getEmployees();"
  },
  {
    kind: "paragraph",
    text: "The component doesn't know where the data comes from."
  },
  {
    kind: "paragraph",
    text: "It simply asks the service."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Example"
  },
  {
    kind: "paragraph",
    text: "Imagine a restaurant."
  },
  {
    kind: "paragraph",
    text: "Customer says"
  },
  {
    kind: "paragraph",
    text: "\"I want a pizza.\""
  },
  {
    kind: "paragraph",
    text: "Does the customer enter the kitchen?"
  },
  {
    kind: "paragraph",
    text: "The waiter brings the pizza."
  },
  {
    kind: "code",
    language: "text",
    code: "Customer\n\n↓\n\nWaiter\n\n↓\n\nChef\n\n↓\n\nPizza"
  },
  {
    kind: "paragraph",
    text: "In Angular,"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nAngular\n\n↓\n\nService\n\n↓\n\nData"
  },
  {
    kind: "paragraph",
    text: "The component never creates the service."
  },
  {
    kind: "paragraph",
    text: "Angular delivers it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Starts\n\n↓\n\nNeeds EmployeeService\n\n↓\n\nAngular Injector\n\n↓\n\nService Available\n\n↓\n\nInject Service\n\n↓\n\nComponent Uses Service"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is Dependency Injection Better?"
  },
  {
    kind: "paragraph",
    text: "Without DI:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Components create services themselves.",
      "Duplicate objects.",
      "Tight coupling.",
      "Harder to test."
    ]
  },
  {
    kind: "paragraph",
    text: "With DI:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Angular manages service creation.",
      "One shared instance.",
      "Less code.",
      "Easier testing.",
      "Better performance."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💼 Real-world Services Using DI"
  },
  {
    kind: "table",
    headers: [
      "Component",
      "Injected Service"
    ],
    rows: [
      [
        "Dashboard",
        "EmployeeService"
      ],
      [
        "Login",
        "AuthService"
      ],
      [
        "Employee List",
        "EmployeeService"
      ],
      [
        "Payroll",
        "PayrollService"
      ],
      [
        "Attendance",
        "AttendanceService"
      ],
      [
        "Header",
        "NotificationService"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "✔ Dependency Injection means **Angular provides dependencies instead of components creating them.**"
  },
  {
    kind: "paragraph",
    text: "✔ Components request services through the constructor."
  },
  {
    kind: "paragraph",
    text: "✔ Angular creates and manages service instances."
  },
  {
    kind: "paragraph",
    text: "✔ Services become reusable across the application."
  },
  {
    kind: "paragraph",
    text: "✔ Dependency Injection makes applications easier to maintain and test."
  },
  {
    kind: "paragraph",
    text: "Now that we know **how Angular injects a service**, the next question is:"
  },
  {
    kind: "quote",
    text: "**\"How can multiple components share the same data using one service?\"**"
  },
  {
    kind: "paragraph",
    text: "We'll cover **Sharing Data Between Components Using Services** next, with a practical HRMS example showing how updating data in one component is immediately available to another component through the shared service."
  }
];
