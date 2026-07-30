import { LessonBlock } from '../topic.model';

export const lesson20LazyLoading: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "First Question"
  },
  {
    kind: "paragraph",
    text: "Suppose your HRMS has these modules."
  },
  {
    kind: "code",
    language: "text",
    code: "HRMS\n\n├── Dashboard\n├── Employees\n├── Leave\n├── Attendance\n├── Payroll\n├── Recruitment\n├── Reports\n├── Settings"
  },
  {
    kind: "paragraph",
    text: "Question:"
  },
  {
    kind: "paragraph",
    text: "When the user opens the application,"
  },
  {
    kind: "paragraph",
    text: "should Angular download **all modules**?"
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Lazy Loading"
  },
  {
    kind: "paragraph",
    text: "Imagine the user only wants Dashboard."
  },
  {
    kind: "paragraph",
    text: "But Angular downloads"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard ✅\n\nEmployees ❌\n\nPayroll ❌\n\nReports ❌\n\nRecruitment ❌\n\nAttendance ❌\n\nLeave ❌\n\nSettings ❌"
  },
  {
    kind: "paragraph",
    text: "Everything is downloaded."
  },
  {
    kind: "paragraph",
    text: "Even though the user isn't using them."
  },
  {
    kind: "heading",
    level: 2,
    text: "Result"
  },
  {
    kind: "code",
    language: "text",
    code: "Application Starts\n\n↓\n\nDownload Dashboard\n\n↓\n\nDownload Employees\n\n↓\n\nDownload Leave\n\n↓\n\nDownload Payroll\n\n↓\n\nDownload Reports\n\n↓\n\nDownload Settings\n\n↓\n\nFinally Show Dashboard"
  },
  {
    kind: "paragraph",
    text: "The app starts slowly."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine you're moving into a new house."
  },
  {
    kind: "paragraph",
    text: "Would you carry"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "TV",
      "Sofa",
      "Refrigerator",
      "Washing Machine",
      "Dining Table",
      "Books",
      "Clothes"
    ]
  },
  {
    kind: "paragraph",
    text: "all in one trip?"
  },
  {
    kind: "paragraph",
    text: "Probably not."
  },
  {
    kind: "paragraph",
    text: "You'll move only what you need first."
  },
  {
    kind: "paragraph",
    text: "The rest can come later."
  },
  {
    kind: "paragraph",
    text: "Lazy Loading works exactly like that."
  },
  {
    kind: "code",
    language: "text",
    code: "Truck\n\n↓\n\nEverything Loaded\n\n↓\n\nHouse"
  },
  {
    kind: "heading",
    level: 2,
    text: "With Lazy Loading"
  },
  {
    kind: "code",
    language: "text",
    code: "Need TV?\n\n↓\n\nBring TV\n\nNeed Sofa?\n\n↓\n\nBring Sofa\n\nNeed Refrigerator?\n\n↓\n\nBring Refrigerator"
  },
  {
    kind: "paragraph",
    text: "Load only when needed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular Without Lazy Loading"
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "text",
    code: "App Starts\n\n↓\n\nDashboard\n\nEmployees\n\nPayroll\n\nReports\n\nSettings\n\nAttendance\n\nLeave"
  },
  {
    kind: "paragraph",
    text: "All JavaScript is downloaded."
  },
  {
    kind: "paragraph",
    text: "Even unused modules."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular With Lazy Loading"
  },
  {
    kind: "paragraph",
    text: "Application starts."
  },
  {
    kind: "paragraph",
    text: "Only"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard"
  },
  {
    kind: "paragraph",
    text: "is downloaded."
  },
  {
    kind: "paragraph",
    text: "Later user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees"
  },
  {
    kind: "paragraph",
    text: "Now Angular downloads"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees Module"
  },
  {
    kind: "paragraph",
    text: "Later"
  },
  {
    kind: "code",
    language: "text",
    code: "Payroll"
  },
  {
    kind: "paragraph",
    text: "Angular downloads"
  },
  {
    kind: "code",
    language: "text",
    code: "Payroll Module"
  },
  {
    kind: "paragraph",
    text: "Only when required."
  },
  {
    kind: "heading",
    level: 2,
    text: "Visual Flow"
  },
  {
    kind: "paragraph",
    text: "Without Lazy Loading"
  },
  {
    kind: "code",
    language: "text",
    code: "Application Starts\n\n        │\n\n        ▼\n\nDownload Everything\n\n        │\n\n        ▼\n\nOpen Dashboard"
  },
  {
    kind: "paragraph",
    text: "With Lazy Loading"
  },
  {
    kind: "code",
    language: "text",
    code: "Application Starts\n\n        │\n\n        ▼\n\nDownload Dashboard\n\n        │\n\n        ▼\n\nUser Opens Employees\n\n        │\n\n        ▼\n\nDownload Employees Module\n\n        │\n\n        ▼\n\nUser Opens Payroll\n\n        │\n\n        ▼\n\nDownload Payroll Module"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose user is an HR Executive."
  },
  {
    kind: "paragraph",
    text: "Today they only use"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nLeave"
  },
  {
    kind: "paragraph",
    text: "They never open"
  },
  {
    kind: "code",
    language: "text",
    code: "Payroll\n\nReports\n\nRecruitment"
  },
  {
    kind: "paragraph",
    text: "Why download those modules?"
  },
  {
    kind: "paragraph",
    text: "No need."
  },
  {
    kind: "paragraph",
    text: "Lazy Loading saves bandwidth and speeds up the initial load."
  },
  {
    kind: "heading",
    level: 2,
    text: "How Angular Does It"
  },
  {
    kind: "paragraph",
    text: "Instead of importing a component directly,"
  },
  {
    kind: "paragraph",
    text: "we use `loadChildren`."
  },
  {
    kind: "paragraph",
    text: "Old way (eager loading)"
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'employees',\n  component: EmployeeComponent\n}"
  },
  {
    kind: "paragraph",
    text: "Angular loads `EmployeeComponent` when the app starts."
  },
  {
    kind: "heading",
    level: 2,
    text: "Lazy Loading"
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'employees',\n  loadChildren: () =>\n    import('./employees/employees.routes')\n      .then(m => m.EMPLOYEE_ROUTES)\n}"
  },
  {
    kind: "paragraph",
    text: "Don't worry about the syntax yet."
  },
  {
    kind: "paragraph",
    text: "Let's understand the idea."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `import()`?"
  },
  {
    kind: "paragraph",
    text: "Normally"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { EmployeeComponent } from './employee.component';"
  },
  {
    kind: "paragraph",
    text: "This happens immediately when the app starts."
  },
  {
    kind: "paragraph",
    text: "With"
  },
  {
    kind: "code",
    language: "ts",
    code: "import('./employees/employees.routes')"
  },
  {
    kind: "paragraph",
    text: "Angular waits."
  },
  {
    kind: "paragraph",
    text: "It doesn't load anything immediately."
  },
  {
    kind: "paragraph",
    text: "Only when the user navigates to"
  },
  {
    kind: "paragraph",
    text: "does Angular perform the import."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens\n\n/employees\n\n        │\n\n        ▼\n\nAngular sees\n\nloadChildren\n\n        │\n\n        ▼\n\nDownloads Employees Module\n\n        │\n\n        ▼\n\nShows Employee Page"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Folder Structure"
  },
  {
    kind: "code",
    language: "text",
    code: "src\n\n├── app\n\n│\n\n├── dashboard\n\n├── employees\n\n│      ├── employee-list\n│      ├── employee-detail\n│      └── employees.routes.ts\n\n├── payroll\n\n│      └── payroll.routes.ts\n\n├── reports\n\n│      └── reports.routes.ts"
  },
  {
    kind: "paragraph",
    text: "Each feature has its own routes."
  },
  {
    kind: "paragraph",
    text: "Angular loads them independently."
  },
  {
    kind: "heading",
    level: 2,
    text: "Network Example"
  },
  {
    kind: "code",
    language: "text",
    code: "Initial Download\n\nDashboard.js\n\nEmployees.js\n\nPayroll.js\n\nLeave.js\n\nAttendance.js\n\nReports.js\n\nSettings.js"
  },
  {
    kind: "paragraph",
    text: "Total:"
  },
  {
    kind: "code",
    language: "text",
    code: "12 MB"
  },
  {
    kind: "paragraph",
    text: "Initial Download"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard.js"
  },
  {
    kind: "paragraph",
    text: "Maybe only"
  },
  {
    kind: "code",
    language: "text",
    code: "2 MB"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees.js"
  },
  {
    kind: "paragraph",
    text: "downloads only when needed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Eager vs Lazy"
  },
  {
    kind: "table",
    headers: [
      "Eager Loading",
      "Lazy Loading"
    ],
    rows: [
      [
        "Loads everything at startup",
        "Loads only when needed"
      ],
      [
        "Larger initial bundle",
        "Smaller initial bundle"
      ],
      [
        "Slower first load",
        "Faster first load"
      ],
      [
        "Simple apps",
        "Medium/Large apps"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Project Example"
  },
  {
    kind: "paragraph",
    text: "Imagine your company HRMS has"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees\n\nAttendance\n\nLeave\n\nPayroll\n\nAssets\n\nTickets\n\nProjects\n\nRecruitment"
  },
  {
    kind: "paragraph",
    text: "Every feature is lazy loaded."
  },
  {
    kind: "paragraph",
    text: "When HR opens"
  },
  {
    kind: "code",
    language: "text",
    code: "Assets"
  },
  {
    kind: "paragraph",
    text: "Angular downloads only"
  },
  {
    kind: "code",
    language: "text",
    code: "Assets Module"
  },
  {
    kind: "paragraph",
    text: "The rest stay unloaded."
  },
  {
    kind: "heading",
    level: 2,
    text: "Interview Questions ⭐"
  },
  {
    kind: "heading",
    level: 3,
    text: "Q1. Why do we use Lazy Loading?"
  },
  {
    kind: "paragraph",
    text: "To reduce the initial bundle size and improve application startup performance by loading features only when users need them."
  },
  {
    kind: "heading",
    level: 3,
    text: "Q2. Does Lazy Loading make every page faster?"
  },
  {
    kind: "paragraph",
    text: "Not exactly."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "The **first page** (initial load) becomes much faster.",
      "The **first visit to a lazy-loaded feature** may take a moment because Angular downloads that feature then.",
      "After it's downloaded, navigation within that feature is usually fast."
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Q3. Which modules should be lazy loaded?"
  },
  {
    kind: "paragraph",
    text: "Usually feature modules such as:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employees",
      "Payroll",
      "Leave",
      "Reports",
      "Recruitment",
      "Assets"
    ]
  },
  {
    kind: "paragraph",
    text: "Core services and the login page are typically loaded eagerly because they're needed immediately."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "code",
    language: "text",
    code: "Application Starts\n\n        │\n\n        ▼\n\nLoad Dashboard Only\n\n        │\n\n        ▼\n\nUser Opens Employees\n\n        │\n\n        ▼\n\nDownload Employees Feature\n\n        │\n\n        ▼\n\nUser Opens Payroll\n\n        │\n\n        ▼\n\nDownload Payroll Feature"
  },
  {
    kind: "paragraph",
    text: "**Think of Lazy Loading like Netflix.**"
  },
  {
    kind: "paragraph",
    text: "Netflix doesn't download every movie when you open the app. It downloads only the movie you choose to watch. Angular follows the same idea: **load only what the user needs, when they need it.**"
  }
];
