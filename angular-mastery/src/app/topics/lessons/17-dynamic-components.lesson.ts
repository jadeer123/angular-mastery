import { LessonBlock } from '../topic.model';

export const lesson17DynamicComponents: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "First Question"
  },
  {
    kind: "paragraph",
    text: "Normally, how do we display a component?"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee></app-employee>"
  },
  {
    kind: "paragraph",
    text: "Angular sees this while building the page and creates the component automatically."
  },
  {
    kind: "paragraph",
    text: "Flow:"
  },
  {
    kind: "code",
    language: "text",
    code: "HTML\n\n<app-employee>\n\n        ↓\n\nAngular\n\n        ↓\n\nEmployeeComponent Created"
  },
  {
    kind: "paragraph",
    text: "Easy."
  },
  {
    kind: "heading",
    level: 2,
    text: "But what if..."
  },
  {
    kind: "paragraph",
    text: "Suppose the page looks like this."
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------+\n| Dashboard                |\n|                          |\n| [Show Employee Form]     |\n+--------------------------+"
  },
  {
    kind: "paragraph",
    text: "Initially,"
  },
  {
    kind: "paragraph",
    text: "there is **no Employee Form**."
  },
  {
    kind: "paragraph",
    text: "Only after clicking the button should it appear."
  },
  {
    kind: "paragraph",
    text: "Can we write"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-form></app-employee-form>"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "Because then the form is always created."
  },
  {
    kind: "paragraph",
    text: "We want Angular to create it **only after clicking the button**."
  },
  {
    kind: "paragraph",
    text: "That's called a **Dynamic Component**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine a hotel."
  },
  {
    kind: "paragraph",
    text: "Rooms already exist."
  },
  {
    kind: "paragraph",
    text: "Guests come later."
  },
  {
    kind: "paragraph",
    text: "The hotel doesn't build a new room."
  },
  {
    kind: "paragraph",
    text: "It simply decides"
  },
  {
    kind: "quote",
    text: "\"Put Guest A in Room 101.\""
  },
  {
    kind: "paragraph",
    text: "Dynamic Components work similarly."
  },
  {
    kind: "paragraph",
    text: "The place exists."
  },
  {
    kind: "paragraph",
    text: "Angular inserts a component into that place when needed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 - Create a Placeholder"
  },
  {
    kind: "code",
    language: "html",
    code: "<div #container></div>"
  },
  {
    kind: "paragraph",
    text: "Question:"
  },
  {
    kind: "paragraph",
    text: "What is this?"
  },
  {
    kind: "paragraph",
    text: "Nothing."
  },
  {
    kind: "paragraph",
    text: "Just an empty space."
  },
  {
    kind: "paragraph",
    text: "Think of it as an empty parking slot."
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------+\n|                |\n|   Empty Slot   |\n|                |\n+----------------+"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 - Get the Placeholder"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('container', { read: ViewContainerRef })\ncontainer!: ViewContainerRef;"
  },
  {
    kind: "paragraph",
    text: "This looks scary, but let's break it down."
  },
  {
    kind: "heading",
    level: 2,
    text: "ViewChild"
  },
  {
    kind: "paragraph",
    text: "Find"
  },
  {
    kind: "code",
    language: "html",
    code: "#container"
  },
  {
    kind: "heading",
    level: 2,
    text: "ViewContainerRef"
  },
  {
    kind: "paragraph",
    text: "Instead of returning the HTML element,"
  },
  {
    kind: "paragraph",
    text: "Angular returns something that can **hold components**."
  },
  {
    kind: "paragraph",
    text: "Think of it as"
  },
  {
    kind: "code",
    language: "text",
    code: "Garage\n\n↓\n\nCan park cars"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "text",
    code: "Container\n\n↓\n\nCan hold Components"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3 - Create a Component"
  },
  {
    kind: "paragraph",
    text: "Suppose we have"
  },
  {
    kind: "code",
    language: "ts",
    code: "EmployeeFormComponent"
  },
  {
    kind: "paragraph",
    text: "Now create it."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.container.createComponent(EmployeeFormComponent);"
  },
  {
    kind: "paragraph",
    text: "That's it."
  },
  {
    kind: "paragraph",
    text: "Angular immediately creates"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeFormComponent"
  },
  {
    kind: "paragraph",
    text: "inside the container."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Click Button\n\n↓\n\nFind Container\n\n↓\n\nCreate EmployeeFormComponent\n\n↓\n\nInsert into Container\n\n↓\n\nDisplay Form"
  },
  {
    kind: "heading",
    level: 2,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"showForm()\">\n    Show Form\n</button>\n\n<div #container></div>"
  },
  {
    kind: "heading",
    level: 2,
    text: "TypeScript"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('container', { read: ViewContainerRef })\ncontainer!: ViewContainerRef;\n\nshowForm() {\n\n  this.container.createComponent(EmployeeFormComponent);\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "+-------------------------+\n| [Show Form]             |\n|                         |\n|                         |\n+-------------------------+"
  },
  {
    kind: "paragraph",
    text: "Click button"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "code",
    language: "text",
    code: "+-------------------------+\n| [Show Form]             |\n|                         |\n| Employee Form           |\n| Name                    |\n| Department              |\n| Salary                  |\n+-------------------------+"
  },
  {
    kind: "paragraph",
    text: "Angular created the component **at runtime**."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Dashboard"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------------+\n| Employee Dashboard               |\n|                                  |\n| [Add Employee]                   |\n+----------------------------------+"
  },
  {
    kind: "paragraph",
    text: "Click"
  },
  {
    kind: "code",
    language: "text",
    code: "Add Employee"
  },
  {
    kind: "paragraph",
    text: "Angular"
  },
  {
    kind: "paragraph",
    text: "Employee Form appears."
  },
  {
    kind: "paragraph",
    text: "No page navigation."
  },
  {
    kind: "paragraph",
    text: "No reload."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example - Different Components"
  },
  {
    kind: "paragraph",
    text: "Suppose there are two buttons."
  },
  {
    kind: "code",
    language: "text",
    code: "[Employees]\n\n[Departments]"
  },
  {
    kind: "paragraph",
    text: "If the user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees"
  },
  {
    kind: "paragraph",
    text: "Create"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeListComponent"
  },
  {
    kind: "code",
    language: "text",
    code: "Departments"
  },
  {
    kind: "code",
    language: "text",
    code: "DepartmentListComponent"
  },
  {
    kind: "paragraph",
    text: "Same container."
  },
  {
    kind: "paragraph",
    text: "Different components."
  },
  {
    kind: "heading",
    level: 2,
    text: "But there's a Problem 🤔"
  },
  {
    kind: "paragraph",
    text: "Suppose the user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Show Form"
  },
  {
    kind: "paragraph",
    text: "three times."
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeForm\n\nEmployeeForm\n\nEmployeeForm"
  },
  {
    kind: "paragraph",
    text: "Three copies!"
  },
  {
    kind: "paragraph",
    text: "Usually we want only one."
  },
  {
    kind: "paragraph",
    text: "Before creating a new component, clear the container."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.container.clear();\n\nthis.container.createComponent(EmployeeFormComponent);"
  },
  {
    kind: "paragraph",
    text: "Now the old component is removed first."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Container\n\n↓\n\nClear Existing Component\n\n↓\n\nCreate New Component\n\n↓\n\nDisplay New Component"
  },
  {
    kind: "heading",
    level: 2,
    text: "When Do We Use Dynamic Components?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dialogs and popups",
      "Dashboard widgets",
      "Plugin systems",
      "Dynamic tabs",
      "Wizards/step forms",
      "Role-based screens"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "table",
    headers: [
      "Normal Component",
      "Dynamic Component"
    ],
    rows: [
      [
        "Written in HTML",
        "Created in TypeScript"
      ],
      [
        "Created when page loads",
        "Created only when needed"
      ],
      [
        "`<app-employee>`",
        "`createComponent(EmployeeComponent)`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Interview Question ⭐"
  },
  {
    kind: "paragraph",
    text: "**Q:** Why use Dynamic Components instead of `*ngIf`?"
  },
  {
    kind: "paragraph",
    text: "**Answer:**"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**`*ngIf`** shows or hides a component that Angular already knows about in the template.",
      "**Dynamic Components** let you decide **which component to create at runtime**, even when it's not written directly in the HTML."
    ]
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "code",
    language: "text",
    code: "Admin Login\n\n↓\n\nCreate AdminDashboardComponent"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Login\n\n↓\n\nCreate EmployeeDashboardComponent"
  },
  {
    kind: "paragraph",
    text: "The choice is made in TypeScript based on the application's logic."
  }
];
