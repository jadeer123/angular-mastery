import { LessonBlock } from '../topic.model';

export const lesson14LifecycleHooks: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is a Lifecycle?"
  },
  {
    kind: "paragraph",
    text: "Everything in the real world has a lifecycle."
  },
  {
    kind: "paragraph",
    text: "For example, a human."
  },
  {
    kind: "code",
    language: "text",
    code: "Birth\n\n↓\n\nChildhood\n\n↓\n\nAdult\n\n↓\n\nOld Age\n\n↓\n\nDeath"
  },
  {
    kind: "paragraph",
    text: "A component also has a lifecycle."
  },
  {
    kind: "code",
    language: "text",
    code: "Created\n\n↓\n\nInitialized\n\n↓\n\nUpdated\n\n↓\n\nDestroyed"
  },
  {
    kind: "paragraph",
    text: "Angular provides **Lifecycle Hooks** to let us run code at each stage."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Lifecycle Hooks?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Dashboard."
  },
  {
    kind: "paragraph",
    text: "When the Dashboard opens,"
  },
  {
    kind: "paragraph",
    text: "you need to"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Load employees",
      "Load notifications",
      "Load leave requests"
    ]
  },
  {
    kind: "paragraph",
    text: "Should these APIs be called inside the constructor?"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "Angular gives a better place."
  },
  {
    kind: "code",
    language: "text",
    code: "ngOnInit()"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a New Employee"
  },
  {
    kind: "paragraph",
    text: "Suppose a new employee joins a company."
  },
  {
    kind: "paragraph",
    text: "First,"
  },
  {
    kind: "paragraph",
    text: "they are hired."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Created"
  },
  {
    kind: "paragraph",
    text: "Next,"
  },
  {
    kind: "paragraph",
    text: "they receive a laptop."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Initialized"
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "their details get updated."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Updated"
  },
  {
    kind: "paragraph",
    text: "Finally,"
  },
  {
    kind: "paragraph",
    text: "they resign."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Removed"
  },
  {
    kind: "paragraph",
    text: "Angular components behave in the same way."
  },
  {
    kind: "heading",
    level: 2,
    text: "Component Lifecycle"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Created\n\n↓\n\nInitialized\n\n↓\n\nDisplayed\n\n↓\n\nUpdated\n\n↓\n\nDestroyed"
  },
  {
    kind: "paragraph",
    text: "At each stage,"
  },
  {
    kind: "paragraph",
    text: "Angular gives us a hook."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Suppose you navigate to"
  },
  {
    kind: "code",
    language: "text",
    code: "/dashboard"
  },
  {
    kind: "paragraph",
    text: "Angular creates the Dashboard component."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component\n\n↓\n\nConstructor\n\n↓\n\nngOnInit()\n\n↓\n\nDisplay Dashboard"
  },
  {
    kind: "paragraph",
    text: "you leave the page."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Destroyed\n\n↓\n\nngOnDestroy()"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why not put everything in the constructor?"
  },
  {
    kind: "paragraph",
    text: "Many beginners write"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor() {\n\n  this.loadEmployees();\n\n}"
  },
  {
    kind: "paragraph",
    text: "This works sometimes,"
  },
  {
    kind: "paragraph",
    text: "but it's **not the purpose of the constructor**."
  },
  {
    kind: "paragraph",
    text: "The constructor is mainly for **Dependency Injection**."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n  private employeeService: EmployeeService\n) {}"
  },
  {
    kind: "paragraph",
    text: "Loading data should happen in"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit()"
  },
  {
    kind: "heading",
    level: 2,
    text: "Lifecycle Timeline"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Created\n\n↓\n\nconstructor()\n\n↓\n\nngOnChanges()\n\n↓\n\nngOnInit()\n\n↓\n\nngDoCheck()\n\n↓\n\nngAfterContentInit()\n\n↓\n\nngAfterContentChecked()\n\n↓\n\nngAfterViewInit()\n\n↓\n\nngAfterViewChecked()\n\n↓\n\nngOnDestroy()"
  },
  {
    kind: "paragraph",
    text: "Don't worry."
  },
  {
    kind: "paragraph",
    text: "We'll learn each one separately."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Dashboard opens."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component\n\n↓\n\nconstructor()\n\n↓\n\nInject EmployeeService\n\n↓\n\nngOnInit()\n\n↓\n\nCall Employee API\n\n↓\n\nEmployees Loaded\n\n↓\n\nDashboard Displayed"
  },
  {
    kind: "paragraph",
    text: "User closes Dashboard."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Closed\n\n↓\n\nngOnDestroy()\n\n↓\n\nClean Resources"
  },
  {
    kind: "heading",
    level: 2,
    text: "When Do We Use Lifecycle Hooks?"
  },
  {
    kind: "table",
    headers: [
      "Hook",
      "Real Example"
    ],
    rows: [
      [
        "constructor",
        "Inject Services"
      ],
      [
        "ngOnInit",
        "Load APIs"
      ],
      [
        "ngOnChanges",
        "Parent sends new data"
      ],
      [
        "ngAfterViewInit",
        "Access ViewChild"
      ],
      [
        "ngOnDestroy",
        "Stop timers, unsubscribe Observables"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Every Angular component has a lifecycle."
  },
  {
    kind: "paragraph",
    text: "✔ Angular calls Lifecycle Hooks automatically."
  },
  {
    kind: "paragraph",
    text: "✔ Each hook runs at a specific stage."
  },
  {
    kind: "paragraph",
    text: "✔ We use hooks to execute code at the right time."
  },
  {
    kind: "heading",
    level: 2,
    text: "🧠 Easy Way to Remember"
  },
  {
    kind: "paragraph",
    text: "Think of a component like a human."
  },
  {
    kind: "code",
    language: "text",
    code: "Birth\n        ↓\nconstructor()\n\nChildhood\n        ↓\nngOnInit()\n\nGrowing\n        ↓\nUpdates\n\nDeath\n        ↓\nngOnDestroy()"
  },
  {
    kind: "paragraph",
    text: "You don't do everything at birth."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "paragraph",
    text: "you don't write everything in the constructor."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next Topic"
  },
  {
    kind: "paragraph",
    text: "We'll learn the **first Lifecycle Hook**:"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Constructor vs ngOnInit"
  },
  {
    kind: "paragraph",
    text: "This is one of the **most frequently asked Angular interview questions**."
  },
  {
    kind: "paragraph",
    text: "You'll clearly understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What the constructor does",
      "What `ngOnInit()` does",
      "Why API calls belong in `ngOnInit()`",
      "Real HRMS examples",
      "Common mistakes"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Create a Component"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g c employee-list"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "employee-list.component.ts\n\nemployee-list.component.html\n\nemployee-list.component.scss"
  },
  {
    kind: "paragraph",
    text: "Suppose AppComponent displays it."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-list></app-employee-list>"
  },
  {
    kind: "heading",
    level: 2,
    text: "What happens now?"
  },
  {
    kind: "paragraph",
    text: "Angular starts creating the component."
  },
  {
    kind: "paragraph",
    text: "Imagine Angular saying"
  },
  {
    kind: "code",
    language: "text",
    code: "\"I need to display EmployeeListComponent.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "STEP 1 — Constructor Runs"
  },
  {
    kind: "paragraph",
    text: "Angular first creates the object."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private employeeService: EmployeeService) {\n\n  console.log('Constructor');\n\n}"
  },
  {
    kind: "paragraph",
    text: "This is exactly like Java or C#."
  },
  {
    kind: "paragraph",
    text: "When you do"
  },
  {
    kind: "code",
    language: "java",
    code: "Employee employee = new Employee();"
  },
  {
    kind: "paragraph",
    text: "the constructor runs."
  },
  {
    kind: "paragraph",
    text: "Angular internally does something similar."
  },
  {
    kind: "code",
    language: "ts",
    code: "new EmployeeListComponent(...)"
  },
  {
    kind: "paragraph",
    text: "So"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Created\n\n↓\n\nConstructor Executes"
  },
  {
    kind: "heading",
    level: 2,
    text: "What should we do here?"
  },
  {
    kind: "paragraph",
    text: "Usually only Dependency Injection."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n\n  private employeeService: EmployeeService,\n\n  private router: Router\n\n){}"
  },
  {
    kind: "paragraph",
    text: "Don't call APIs here."
  },
  {
    kind: "heading",
    level: 2,
    text: "STEP 2 — Angular Sets Inputs"
  },
  {
    kind: "paragraph",
    text: "Suppose parent sends"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-list\n    [department]=\"'HR'\">\n</app-employee-list>"
  },
  {
    kind: "paragraph",
    text: "Child"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Input()\ndepartment = '';"
  },
  {
    kind: "paragraph",
    text: "Angular now sets"
  },
  {
    kind: "code",
    language: "text",
    code: "department = HR"
  },
  {
    kind: "paragraph",
    text: "If inputs changed,"
  },
  {
    kind: "paragraph",
    text: "Angular calls"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnChanges()"
  },
  {
    kind: "paragraph",
    text: "We'll learn later."
  },
  {
    kind: "heading",
    level: 2,
    text: "STEP 3 — ngOnInit()"
  },
  {
    kind: "paragraph",
    text: "Now Angular says"
  },
  {
    kind: "quote",
    text: "Everything is ready."
  },
  {
    kind: "paragraph",
    text: "Now you can initialize the component."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit(){\n\n   console.log(\"On Init\");\n\n}"
  },
  {
    kind: "paragraph",
    text: "This is where we call APIs."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit(){\n\n   this.loadEmployees();\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Angular does"
  },
  {
    kind: "code",
    language: "text",
    code: "Create Dashboard Component\n\n↓\n\nConstructor\n\n↓\n\nInject EmployeeService\n\n↓\n\nngOnInit()\n\n↓\n\nCall Employee API\n\n↓\n\nEmployees Loaded\n\n↓\n\nShow UI"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why not Constructor?"
  },
  {
    kind: "paragraph",
    text: "Imagine this."
  },
  {
    kind: "paragraph",
    text: "Constructor"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private service: EmployeeService){\n\n   this.service.getEmployees();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Question:"
  },
  {
    kind: "paragraph",
    text: "Has Angular finished creating the component?"
  },
  {
    kind: "paragraph",
    text: "The component is still being created."
  },
  {
    kind: "paragraph",
    text: "Angular isn't ready yet."
  },
  {
    kind: "paragraph",
    text: "So we wait."
  },
  {
    kind: "paragraph",
    text: "After Angular finishes initialization,"
  },
  {
    kind: "paragraph",
    text: "it calls"
  },
  {
    kind: "paragraph",
    text: "Now everything is ready."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine you're moving into a new office."
  },
  {
    kind: "heading",
    level: 2,
    text: "Constructor"
  },
  {
    kind: "paragraph",
    text: "Company gives you"
  },
  {
    kind: "code",
    language: "text",
    code: "Laptop\n\nID Card\n\nDesk"
  },
  {
    kind: "paragraph",
    text: "Resources are provided."
  },
  {
    kind: "paragraph",
    text: "You don't start working yet."
  },
  {
    kind: "heading",
    level: 2,
    text: "ngOnInit"
  },
  {
    kind: "paragraph",
    text: "Now HR says"
  },
  {
    kind: "paragraph",
    text: "Now you can"
  },
  {
    kind: "code",
    language: "text",
    code: "Open Outlook\n\nRead Emails\n\nStart Working"
  },
  {
    kind: "paragraph",
    text: "Exactly like Angular."
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Receive dependencies"
  },
  {
    kind: "paragraph",
    text: "ngOnInit"
  },
  {
    kind: "paragraph",
    text: "Start your work"
  },
  {
    kind: "paragraph",
    text: "(API Calls)"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Flow"
  },
  {
    kind: "paragraph",
    text: "Suppose user opens"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens\n\n/employees\n\n        ↓\n\nCreate EmployeeListComponent\n\n        ↓\n\nConstructor\n\n(EmployeeService injected)\n\n        ↓\n\nSet @Input values\n\n        ↓\n\nngOnInit()\n\n        ↓\n\nCall API\n\n        ↓\n\nWaiting...\n\n        ↓\n\nEmployees Received\n\n        ↓\n\nDisplay Employee List"
  },
  {
    kind: "heading",
    level: 2,
    text: "Then what?"
  },
  {
    kind: "paragraph",
    text: "Suppose user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Refresh"
  },
  {
    kind: "paragraph",
    text: "Component is already created."
  },
  {
    kind: "paragraph",
    text: "❌ Doesn't run."
  },
  {
    kind: "paragraph",
    text: "Only your button method runs."
  },
  {
    kind: "code",
    language: "ts",
    code: "refresh(){\n\n   this.loadEmployees();\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Then when does Constructor run again?"
  },
  {
    kind: "paragraph",
    text: "Suppose user goes"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\n/dashboard\n\n↓\n\n/employees"
  },
  {
    kind: "paragraph",
    text: "Angular destroyed the old component."
  },
  {
    kind: "paragraph",
    text: "Now it creates a new one."
  },
  {
    kind: "paragraph",
    text: "Again"
  },
  {
    kind: "code",
    language: "text",
    code: "Constructor\n\n↓\n\nngOnInit()"
  },
  {
    kind: "paragraph",
    text: "Both run again."
  },
  {
    kind: "heading",
    level: 2,
    text: "Finally"
  },
  {
    kind: "paragraph",
    text: "Suppose user leaves"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\n/dashboard"
  },
  {
    kind: "paragraph",
    text: "Angular removes EmployeeListComponent."
  },
  {
    kind: "paragraph",
    text: "Before removing,"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnDestroy()"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnDestroy(){\n\n   console.log(\"Component Destroyed\");\n\n}"
  },
  {
    kind: "paragraph",
    text: "Usually we"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Stop timers",
      "Unsubscribe Observables",
      "Close WebSocket connections"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Timeline"
  },
  {
    kind: "code",
    language: "text",
    code: "ng g c employee-list\n\n        ↓\n\nUser Opens /employees\n\n        ↓\n\nAngular Creates Component\n\n        ↓\n\nconstructor()\n\n        ↓\n\nAngular Sets @Input()\n\n        ↓\n\nngOnInit()\n\n        ↓\n\nAPI Calls\n\n        ↓\n\nUser Uses Page\n\n        ↓\n\nUser Leaves Page\n\n        ↓\n\nngOnDestroy()"
  },
  {
    kind: "heading",
    level: 2,
    text: "This is the order you should remember first."
  },
  {
    kind: "paragraph",
    text: "Don't try to memorize all 8 lifecycle hooks at once."
  },
  {
    kind: "paragraph",
    text: "First understand these **three**, because they are used in almost every Angular application:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "**constructor()** → Angular creates the component and injects dependencies.",
      "**ngOnInit()** → Initialize the component (API calls, load data, setup).",
      "**ngOnDestroy()** → Clean up before the component is removed."
    ]
  },
  {
    kind: "paragraph",
    text: "Once these are clear, the remaining hooks (`ngOnChanges`, `ngAfterViewInit`, etc.) become much easier to understand because they fit naturally between these three stages."
  },
  {
    kind: "paragraph",
    text: "Imagine we're building an HRMS application."
  },
  {
    kind: "code",
    language: "text",
    code: "employee-list.component.ts\nemployee-list.component.html\nemployee-list.component.scss"
  },
  {
    kind: "paragraph",
    text: "Now AppComponent uses it."
  },
  {
    kind: "paragraph",
    text: "As soon as Angular sees this,"
  },
  {
    kind: "paragraph",
    text: "it says"
  },
  {
    kind: "quote",
    text: "\"I need to display EmployeeListComponent.\""
  },
  {
    kind: "paragraph",
    text: "Now the lifecycle starts."
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Lifecycle"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular finds <app-employee-list>\n\n        │\n        ▼\n1. constructor()\n\n        │\n        ▼\n2. ngOnChanges()   (Only if @Input exists)\n\n        │\n        ▼\n3. ngOnInit()\n\n        │\n        ▼\n4. ngDoCheck()\n\n        │\n        ▼\n5. ngAfterContentInit()\n\n        │\n        ▼\n6. ngAfterContentChecked()\n\n        │\n        ▼\n7. ngAfterViewInit()\n\n        │\n        ▼\n8. ngAfterViewChecked()\n\n        │\n        ▼\nComponent Running...\n\n(User Clicks, Types, Updates)\n\n        │\n        ▼\nngDoCheck()\n\nngAfterContentChecked()\n\nngAfterViewChecked()\n\n(repeat many times)\n\n        │\n        ▼\nUser leaves page\n\n        │\n        ▼\n9. ngOnDestroy()"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "Some hooks run **once**."
  },
  {
    kind: "paragraph",
    text: "Some hooks run **many times**."
  },
  {
    kind: "heading",
    level: 2,
    text: "1. constructor()"
  },
  {
    kind: "paragraph",
    text: "Angular creates the object."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n  private employeeService: EmployeeService\n) {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Imagine buying a new laptop."
  },
  {
    kind: "paragraph",
    text: "The laptop is delivered."
  },
  {
    kind: "paragraph",
    text: "You haven't switched it on yet."
  },
  {
    kind: "paragraph",
    text: "Constructor simply creates the component."
  },
  {
    kind: "paragraph",
    text: "Usually we only do"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dependency Injection"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n private router: Router,\n private service: EmployeeService\n){}"
  },
  {
    kind: "heading",
    level: 2,
    text: "2. ngOnChanges()"
  },
  {
    kind: "paragraph",
    text: "Suppose parent sends data."
  },
  {
    kind: "paragraph",
    text: "Parent"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-list\n    [department]=\"selectedDepartment\">\n</app-employee-list>"
  },
  {
    kind: "paragraph",
    text: "Initially"
  },
  {
    kind: "paragraph",
    text: "Later parent changes"
  },
  {
    kind: "code",
    language: "text",
    code: "HR\n\n↓\n\nFinance"
  },
  {
    kind: "code",
    language: "text",
    code: "ngOnChanges()"
  },
  {
    kind: "paragraph",
    text: "Every time an **@Input changes**,"
  },
  {
    kind: "paragraph",
    text: "this hook runs."
  },
  {
    kind: "paragraph",
    text: "Department Filter"
  },
  {
    kind: "code",
    language: "text",
    code: "HR\n\n↓\n\nFinance\n\n↓\n\nSales"
  },
  {
    kind: "paragraph",
    text: "Every filter change"
  },
  {
    kind: "heading",
    level: 2,
    text: "3. ngOnInit()"
  },
  {
    kind: "paragraph",
    text: "Everything is ready."
  },
  {
    kind: "paragraph",
    text: "Now start your work."
  },
  {
    kind: "paragraph",
    text: "API calls belong here."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Opens\n\n↓\n\nngOnInit()\n\n↓\n\nCall Dashboard API\n\n↓\n\nDisplay Dashboard"
  },
  {
    kind: "paragraph",
    text: "Runs only once."
  },
  {
    kind: "heading",
    level: 2,
    text: "4. ngDoCheck()"
  },
  {
    kind: "paragraph",
    text: "Angular constantly checks"
  },
  {
    kind: "paragraph",
    text: "\"Did anything change?\""
  },
  {
    kind: "paragraph",
    text: "Whenever change detection happens,"
  },
  {
    kind: "paragraph",
    text: "User types"
  },
  {
    kind: "code",
    language: "text",
    code: "A\n\n↓\n\nAn\n\n↓\n\nAng\n\n↓\n\nAngular"
  },
  {
    kind: "paragraph",
    text: "Angular checks"
  },
  {
    kind: "code",
    language: "text",
    code: "Anything changed?\n\n↓\n\nngDoCheck()"
  },
  {
    kind: "paragraph",
    text: "Runs many times."
  },
  {
    kind: "paragraph",
    text: "Very rarely used."
  },
  {
    kind: "heading",
    level: 2,
    text: "5. ngAfterContentInit()"
  },
  {
    kind: "paragraph",
    text: "This hook is for"
  },
  {
    kind: "paragraph",
    text: "**Content Projection**"
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n   Employee Details\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Inside Card Component"
  },
  {
    kind: "code",
    language: "html",
    code: "<ng-content></ng-content>"
  },
  {
    kind: "paragraph",
    text: "Angular inserts"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Details"
  },
  {
    kind: "paragraph",
    text: "After inserting,"
  },
  {
    kind: "code",
    language: "text",
    code: "ngAfterContentInit()"
  },
  {
    kind: "paragraph",
    text: "Runs once."
  },
  {
    kind: "paragraph",
    text: "You'll understand this better when we learn Content Projection."
  },
  {
    kind: "heading",
    level: 2,
    text: "6. ngAfterContentChecked()"
  },
  {
    kind: "paragraph",
    text: "Angular keeps checking projected content."
  },
  {
    kind: "paragraph",
    text: "Whenever it checks,"
  },
  {
    kind: "code",
    language: "text",
    code: "ngAfterContentChecked()"
  },
  {
    kind: "paragraph",
    text: "Rarely used."
  },
  {
    kind: "heading",
    level: 2,
    text: "7. ngAfterViewInit()"
  },
  {
    kind: "code",
    language: "html",
    code: "<input #employeeName>"
  },
  {
    kind: "paragraph",
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('employeeName')\ninput!: ElementRef;"
  },
  {
    kind: "paragraph",
    text: "When is"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.input"
  },
  {
    kind: "paragraph",
    text: "available?"
  },
  {
    kind: "paragraph",
    text: "Not in constructor."
  },
  {
    kind: "paragraph",
    text: "Not in ngOnInit."
  },
  {
    kind: "paragraph",
    text: "Only after Angular creates the HTML."
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "text",
    code: "ngAfterViewInit()"
  },
  {
    kind: "paragraph",
    text: "runs."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit(){\n\n   this.input.nativeElement.focus();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Very common."
  },
  {
    kind: "paragraph",
    text: "Open Employee Form"
  },
  {
    kind: "paragraph",
    text: "Automatically focus Name textbox."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit(){\n\n   this.nameInput.nativeElement.focus();\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "8. ngAfterViewChecked()"
  },
  {
    kind: "paragraph",
    text: "Angular checks the View."
  },
  {
    kind: "paragraph",
    text: "Every check"
  },
  {
    kind: "code",
    language: "text",
    code: "ngAfterViewChecked()"
  },
  {
    kind: "heading",
    level: 2,
    text: "9. ngOnDestroy()"
  },
  {
    kind: "paragraph",
    text: "Angular removes Employee Component."
  },
  {
    kind: "code",
    language: "text",
    code: "ngOnDestroy()"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnDestroy(){\n\n   console.log(\"Cleaning...\");\n\n}"
  },
  {
    kind: "paragraph",
    text: "Usually"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "unsubscribe()",
      "clearInterval()",
      "close WebSocket",
      "remove listeners"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Which Hooks Run Once?"
  },
  {
    kind: "table",
    headers: [
      "Hook",
      "Runs Once?"
    ],
    rows: [
      [
        "constructor",
        "✅"
      ],
      [
        "ngOnInit",
        "✅"
      ],
      [
        "ngAfterContentInit",
        "✅"
      ],
      [
        "ngAfterViewInit",
        "✅"
      ],
      [
        "ngOnDestroy",
        "✅"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Which Hooks Run Many Times?"
  },
  {
    kind: "table",
    headers: [
      "Hook",
      "Runs Multiple Times?"
    ],
    rows: [
      [
        "ngOnChanges",
        "✅ Whenever @Input changes"
      ],
      [
        "ngDoCheck",
        "✅ Every change detection"
      ],
      [
        "ngAfterContentChecked",
        "✅ Every content check"
      ],
      [
        "ngAfterViewChecked",
        "✅ Every view check"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Timeline"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens Employee Page\n\n        ↓\n\nconstructor()\n\n(EmployeeService injected)\n\n        ↓\n\nngOnChanges()\n\n(Input values received)\n\n        ↓\n\nngOnInit()\n\n(Call Employee API)\n\n        ↓\n\nngDoCheck()\n\n(Change Detection)\n\n        ↓\n\nngAfterContentInit()\n\n(Projected Content Ready)\n\n        ↓\n\nngAfterContentChecked()\n\n        ↓\n\nngAfterViewInit()\n\n(ViewChild Ready)\n\n        ↓\n\nngAfterViewChecked()\n\n        ↓\n\nUser clicks buttons,\ntypes in textbox,\nupdates data...\n\n        ↓\n\nngDoCheck()\n\n↓\n\nngAfterContentChecked()\n\n↓\n\nngAfterViewChecked()\n\n(repeat many times)\n\n        ↓\n\nUser navigates away\n\n        ↓\n\nngOnDestroy()\n\n(Component removed)"
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 How I remember them"
  },
  {
    kind: "paragraph",
    text: "Don't memorize all 9 hooks at once. Think of them as **three groups**:"
  },
  {
    kind: "heading",
    level: 3,
    text: "🟢 Component Creation (Runs Once)"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`constructor()`",
      "`ngOnChanges()` (if there are `@Input`s)",
      "`ngOnInit()`"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "🟡 Component Ready (Runs After Angular Builds the UI)"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ngAfterContentInit()`",
      "`ngAfterViewInit()`"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "🔵 Component Updates (Runs Many Times)"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ngDoCheck()`",
      "`ngAfterContentChecked()`",
      "`ngAfterViewChecked()`"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "🔴 Component Removal"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ngOnDestroy()`"
    ]
  },
  {
    kind: "paragraph",
    text: "This grouping is much easier to remember than memorizing a list of nine hooks in order. After this, we can go through **each hook individually with small Angular code examples** so you'll know exactly when and why to use it in real projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a constructor?"
  },
  {
    kind: "paragraph",
    text: "The constructor is a **TypeScript/JavaScript feature**, **not an Angular lifecycle hook**."
  },
  {
    kind: "paragraph",
    text: "Angular calls it when it creates the component object."
  },
  {
    kind: "paragraph",
    text: "Imagine this component."
  },
  {
    kind: "code",
    language: "ts",
    code: "@Component({\n  selector: 'app-employee-list',\n  templateUrl: './employee-list.html'\n})\nexport class EmployeeListComponent {\n\n  constructor() {\n    console.log('Constructor');\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "When you navigate to"
  },
  {
    kind: "paragraph",
    text: "Angular internally does something like"
  },
  {
    kind: "paragraph",
    text: "As soon as it creates the object,"
  },
  {
    kind: "paragraph",
    text: "the constructor executes."
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "Constructor"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why do we use constructor?"
  },
  {
    kind: "paragraph",
    text: "Mainly for **Dependency Injection**."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n  private employeeService: EmployeeService,\n  private router: Router\n) {}"
  },
  {
    kind: "paragraph",
    text: "Angular automatically gives us"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "EmployeeService",
      "Router"
    ]
  },
  {
    kind: "paragraph",
    text: "Now we can use them anywhere."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.getEmployees();"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nAngular creates DashboardComponent\n\n↓\n\nconstructor()\n\n↓\n\nEmployeeService available"
  },
  {
    kind: "paragraph",
    text: "Notice"
  },
  {
    kind: "paragraph",
    text: "The service is available,"
  },
  {
    kind: "paragraph",
    text: "but we haven't called the API yet."
  },
  {
    kind: "heading",
    level: 2,
    text: "What should NOT be done?"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private employeeService: EmployeeService){\n\n   this.employeeService.getEmployees();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Avoid API calls here."
  },
  {
    kind: "paragraph",
    text: "Use `ngOnInit()` instead."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngOnChanges()"
  },
  {
    kind: "paragraph",
    text: "This hook works only when the component has **@Input()** properties."
  },
  {
    kind: "heading",
    level: 2,
    text: "Parent Component"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-card\n    [employee]=\"selectedEmployee\">\n</app-employee-card>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Child Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Input()\nemployee!: Employee;\n\nngOnChanges() {\n  console.log('Employee changed');\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "John"
  },
  {
    kind: "code",
    language: "text",
    code: "Emma"
  },
  {
    kind: "paragraph",
    text: "Angular automatically calls"
  },
  {
    kind: "paragraph",
    text: "because the `@Input()` value changed."
  },
  {
    kind: "paragraph",
    text: "Employee List"
  },
  {
    kind: "code",
    language: "text",
    code: "John\n\nEmma\n\nDavid"
  },
  {
    kind: "paragraph",
    text: "Click Emma."
  },
  {
    kind: "paragraph",
    text: "Parent sends"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee = Emma"
  },
  {
    kind: "paragraph",
    text: "Child receives"
  },
  {
    kind: "paragraph",
    text: "Angular executes"
  },
  {
    kind: "paragraph",
    text: "You might reload employee details or update the UI here."
  },
  {
    kind: "heading",
    level: 2,
    text: "When is ngOnChanges useful?"
  },
  {
    kind: "paragraph",
    text: "The parent component displays a list of employees."
  },
  {
    kind: "paragraph",
    text: "The child component displays employee details."
  },
  {
    kind: "paragraph",
    text: "Every time the selected employee changes,"
  },
  {
    kind: "paragraph",
    text: "the child needs to update."
  },
  {
    kind: "paragraph",
    text: "That's exactly what `ngOnChanges()` is for."
  },
  {
    kind: "paragraph",
    text: "This is the hook you'll use **the most**."
  },
  {
    kind: "paragraph",
    text: "Angular calls it **once** after the component is initialized."
  },
  {
    kind: "heading",
    level: 2,
    text: "loadEmployees()"
  },
  {
    kind: "code",
    language: "ts",
    code: "loadEmployees() {\n\n  this.employeeService.getEmployees()\n    .subscribe(data => {\n\n      this.employees = data;\n\n    });\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens Employee Page\n\n↓\n\nconstructor()\n\n↓\n\nngOnInit()\n\n↓\n\nCall Employee API\n\n↓\n\nEmployees Loaded\n\n↓\n\nDisplay Table"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why ngOnInit?"
  },
  {
    kind: "paragraph",
    text: "Because now"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Component exists ✅",
      "Services are available ✅",
      "Inputs are ready ✅"
    ]
  },
  {
    kind: "paragraph",
    text: "It's the perfect place to initialize data."
  },
  {
    kind: "heading",
    level: 2,
    text: "Quick Comparison"
  },
  {
    kind: "table",
    headers: [
      "constructor",
      "ngOnInit"
    ],
    rows: [
      [
        "Creates object",
        "Initializes component"
      ],
      [
        "Inject services",
        "Load APIs"
      ],
      [
        "Runs immediately",
        "Runs after Angular initializes the component"
      ],
      [
        "No business logic",
        "Initialization logic"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Where should these go?"
  },
  {
    kind: "heading",
    level: 3,
    text: "Inject Router"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private router: Router) {}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Load Dashboard Statistics"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.dashboardService.getStats();"
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "✔ `constructor()` creates the component and injects dependencies."
  },
  {
    kind: "paragraph",
    text: "✔ `ngOnChanges()` runs whenever an `@Input()` value changes."
  },
  {
    kind: "paragraph",
    text: "✔ `ngOnInit()` is the best place for API calls and initialization logic."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next"
  },
  {
    kind: "paragraph",
    text: "We'll cover the remaining hooks that are used less frequently but are still important:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ngDoCheck()`",
      "`ngAfterContentInit()`",
      "`ngAfterContentChecked()`",
      "`ngAfterViewInit()`",
      "`ngAfterViewChecked()`",
      "`ngOnDestroy()`"
    ]
  },
  {
    kind: "paragraph",
    text: "I'll explain each with practical Angular and HRMS examples, especially `ngAfterViewInit()` and `ngOnDestroy()`, since those are commonly used in real projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is it?"
  },
  {
    kind: "paragraph",
    text: "Angular constantly checks whether something has changed in the component."
  },
  {
    kind: "paragraph",
    text: "Every time Angular performs **change detection**, it calls `ngDoCheck()`."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngDoCheck() {\n  console.log('Checking...');\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "count = 0;\n\nincrease() {\n  this.count++;\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<p>{{ count }}</p>\n\n<button (click)=\"increase()\">\n  Increase\n</button>"
  },
  {
    kind: "paragraph",
    text: "When you click the button,"
  },
  {
    kind: "code",
    language: "text",
    code: "Button Click\n\n↓\n\ncount changes\n\n↓\n\nAngular checks UI\n\n↓\n\nngDoCheck()\n\n↓\n\nScreen updates"
  },
  {
    kind: "paragraph",
    text: "every click causes `ngDoCheck()`."
  },
  {
    kind: "paragraph",
    text: "Dashboard"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count : 120\n\nNotification : 5"
  },
  {
    kind: "paragraph",
    text: "User clicks Refresh."
  },
  {
    kind: "paragraph",
    text: "Angular checks everything."
  },
  {
    kind: "code",
    language: "text",
    code: "Refresh\n\n↓\n\nngDoCheck()\n\n↓\n\nUpdate Dashboard"
  },
  {
    kind: "heading",
    level: 2,
    text: "Should we use ngDoCheck?"
  },
  {
    kind: "paragraph",
    text: "Almost never."
  },
  {
    kind: "paragraph",
    text: "Angular already performs change detection automatically."
  },
  {
    kind: "paragraph",
    text: "Only use it for very advanced custom change detection."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngAfterContentInit()"
  },
  {
    kind: "paragraph",
    text: "This hook is related to **Content Projection** (`<ng-content>`)."
  },
  {
    kind: "paragraph",
    text: "Don't worry if you don't understand it yet."
  },
  {
    kind: "paragraph",
    text: "We'll learn it properly in the **Content Projection** lesson."
  },
  {
    kind: "paragraph",
    text: "For now,"
  },
  {
    kind: "paragraph",
    text: "just know that it runs **once** after Angular inserts projected content."
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"card\">\n\n   <ng-content></ng-content>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "into"
  },
  {
    kind: "code",
    language: "text",
    code: "<ng-content>"
  },
  {
    kind: "paragraph",
    text: "After that,"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterContentInit() {\n   console.log('Content Ready');\n}"
  },
  {
    kind: "paragraph",
    text: "Card Component"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n   <table>\n\n      Employees\n\n   </table>\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Angular inserts the table."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngAfterContentChecked()"
  },
  {
    kind: "paragraph",
    text: "This is similar."
  },
  {
    kind: "paragraph",
    text: "Instead of running once,"
  },
  {
    kind: "paragraph",
    text: "it runs every time Angular checks projected content."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterContentChecked() {\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngAfterViewInit()"
  },
  {
    kind: "paragraph",
    text: "This is an important hook."
  },
  {
    kind: "paragraph",
    text: "You'll use it in real projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "Problem"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('employeeName')\nemployeeName!: ElementRef;"
  },
  {
    kind: "paragraph",
    text: "Can you do this?"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(){\n\n   this.employeeName.nativeElement.focus();\n\n}"
  },
  {
    kind: "paragraph",
    text: "The HTML hasn't been created yet."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit(){\n\n   this.employeeName.nativeElement.focus();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Still ❌ No (in many cases)."
  },
  {
    kind: "paragraph",
    text: "The view may not be fully initialized."
  },
  {
    kind: "paragraph",
    text: "Angular first creates the HTML."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit()"
  },
  {
    kind: "paragraph",
    text: "Now"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit() {\n\n   this.employeeName.nativeElement.focus();\n\n}"
  },
  {
    kind: "paragraph",
    text: "works perfectly."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Created\n\n↓\n\nConstructor\n\n↓\n\nngOnInit()\n\n↓\n\nAngular Creates HTML\n\n↓\n\nViewChild Ready\n\n↓\n\nngAfterViewInit()\n\n↓\n\nFocus Input"
  },
  {
    kind: "paragraph",
    text: "Employee Form"
  },
  {
    kind: "paragraph",
    text: "When Add Employee page opens,"
  },
  {
    kind: "paragraph",
    text: "the cursor should automatically be here."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngAfterViewChecked()"
  },
  {
    kind: "paragraph",
    text: "Angular checks the view repeatedly."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewChecked(){\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 ngOnDestroy()"
  },
  {
    kind: "paragraph",
    text: "This is another very important hook."
  },
  {
    kind: "paragraph",
    text: "It runs just before Angular removes the component."
  },
  {
    kind: "paragraph",
    text: "User opens"
  },
  {
    kind: "paragraph",
    text: "Component is created."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnDestroy() {\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why?"
  },
  {
    kind: "paragraph",
    text: "Imagine you have"
  },
  {
    kind: "code",
    language: "ts",
    code: "setInterval(() => {\n\n   console.log('Checking...');\n\n},1000);"
  },
  {
    kind: "paragraph",
    text: "Even after leaving the page,"
  },
  {
    kind: "paragraph",
    text: "the timer continues."
  },
  {
    kind: "paragraph",
    text: "Memory leak."
  },
  {
    kind: "paragraph",
    text: "Instead"
  },
  {
    kind: "code",
    language: "ts",
    code: "private timerId!: number;\n\nngOnInit() {\n\n  this.timerId = window.setInterval(() => {\n    console.log('Checking...');\n  }, 1000);\n\n}\n\nngOnDestroy() {\n\n   clearInterval(this.timerId);\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "HTTP requests usually complete automatically, but long-lived Observables (like route events, WebSockets, or custom streams) may not."
  },
  {
    kind: "code",
    language: "ts",
    code: "private sub?: Subscription;\n\nngOnInit() {\n\n   this.sub = this.employeeService\n     .employeeUpdates()\n     .subscribe();\n\n}\n\nngOnDestroy() {\n\n   this.sub?.unsubscribe();\n\n}"
  },
  {
    kind: "paragraph",
    text: "This prevents memory leaks."
  },
  {
    kind: "paragraph",
    text: "Employee Dashboard"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nLive Notification\n\n↓\n\nWebSocket Connected"
  },
  {
    kind: "paragraph",
    text: "User leaves Dashboard."
  },
  {
    kind: "code",
    language: "text",
    code: "ngOnDestroy()\n\n↓\n\nClose WebSocket\n\n↓\n\nFree Memory"
  },
  {
    kind: "heading",
    level: 2,
    text: "Which Hooks Are Used Most?"
  },
  {
    kind: "table",
    headers: [
      "Hook",
      "Usage"
    ],
    rows: [
      [
        "constructor",
        "⭐⭐⭐⭐⭐ Every component"
      ],
      [
        "ngOnInit",
        "⭐⭐⭐⭐⭐ Every component"
      ],
      [
        "ngOnChanges",
        "⭐⭐⭐⭐ Components with `@Input()`"
      ],
      [
        "ngAfterViewInit",
        "⭐⭐⭐⭐ `ViewChild`, focus input, initialize charts, third-party libraries"
      ],
      [
        "ngOnDestroy",
        "⭐⭐⭐⭐⭐ Cleanup, unsubscribe, clear timers"
      ],
      [
        "ngDoCheck",
        "⭐ Rare"
      ],
      [
        "ngAfterContentInit",
        "⭐ Rare"
      ],
      [
        "ngAfterContentChecked",
        "⭐ Rare"
      ],
      [
        "ngAfterViewChecked",
        "⭐ Rare"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Final Lifecycle Timeline"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular creates component\n        │\n        ▼\nconstructor()\n\n        ▼\nngOnChanges()      (@Input only)\n\n        ▼\nngOnInit()\n\n        ▼\nngDoCheck()\n\n        ▼\nngAfterContentInit()\n\n        ▼\nngAfterContentChecked()\n\n        ▼\nngAfterViewInit()\n\n        ▼\nngAfterViewChecked()\n\n        ▼\nUser interacts with page...\n\n        ▼\nngDoCheck()\nngAfterContentChecked()\nngAfterViewChecked()\n(repeats many times)\n\n        ▼\nUser navigates away\n\n        ▼\nngOnDestroy()"
  },
  {
    kind: "heading",
    level: 2,
    text: "🎯 What should you remember?"
  },
  {
    kind: "paragraph",
    text: "For **90% of Angular development**, these five hooks are the ones you'll actually use:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**`constructor()`** → Inject services.",
      "**`ngOnInit()`** → Load data, call APIs, initialize the component.",
      "**`ngOnChanges()`** → React to changes in `@Input()` values.",
      "**`ngAfterViewInit()`** → Work with `@ViewChild`, focus inputs, initialize UI libraries after the view exists.",
      "**`ngOnDestroy()`** → Clean up timers, subscriptions, WebSockets, and other resources before the component is removed."
    ]
  },
  {
    kind: "paragraph",
    text: "The remaining hooks are useful in specific advanced scenarios, but you won't use them in most business applications."
  }
];
