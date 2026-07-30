import { LessonBlock } from '../topic.model';

export const lesson07Services: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 What is a Service?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building an HRMS application."
  },
  {
    kind: "paragraph",
    text: "You have these pages."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nAttendance\n\nPayroll\n\nSettings"
  },
  {
    kind: "paragraph",
    text: "Now every page needs employee data."
  },
  {
    kind: "paragraph",
    text: "Should every component write its own API call?"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nAPI Call\n\n----------------\n\nEmployees\n\n↓\n\nAPI Call\n\n----------------\n\nPayroll\n\n↓\n\nAPI Call"
  },
  {
    kind: "paragraph",
    text: "Soon,"
  },
  {
    kind: "paragraph",
    text: "the same code is repeated everywhere."
  },
  {
    kind: "paragraph",
    text: "This makes the application difficult to maintain."
  },
  {
    kind: "paragraph",
    text: "Angular solves this using **Services**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Services?"
  },
  {
    kind: "paragraph",
    text: "Suppose you need employee information in five different components."
  },
  {
    kind: "paragraph",
    text: "Without a Service,"
  },
  {
    kind: "paragraph",
    text: "every component would do this."
  },
  {
    kind: "code",
    language: "text",
    code: "Call API\n\n↓\n\nReceive Data\n\n↓\n\nStore Data\n\n↓\n\nHandle Errors"
  },
  {
    kind: "paragraph",
    text: "Again..."
  },
  {
    kind: "paragraph",
    text: "Dashboard."
  },
  {
    kind: "paragraph",
    text: "Employees."
  },
  {
    kind: "paragraph",
    text: "Payroll."
  },
  {
    kind: "paragraph",
    text: "Attendance."
  },
  {
    kind: "paragraph",
    text: "The same code gets copied repeatedly."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Restaurant 🍽️"
  },
  {
    kind: "paragraph",
    text: "Imagine a restaurant."
  },
  {
    kind: "paragraph",
    text: "Customers sit at different tables."
  },
  {
    kind: "paragraph",
    text: "Should every customer go into the kitchen and cook their own food?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "everyone orders from one chef."
  },
  {
    kind: "code",
    language: "text",
    code: "Customer\n\n↓\n\nChef\n\n↓\n\nFood"
  },
  {
    kind: "paragraph",
    text: "The chef prepares food once."
  },
  {
    kind: "paragraph",
    text: "Many customers use the same chef."
  },
  {
    kind: "paragraph",
    text: "Angular Services work exactly like that."
  },
  {
    kind: "paragraph",
    text: "Components are customers."
  },
  {
    kind: "paragraph",
    text: "The Service is the chef."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Imagine these components."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance"
  },
  {
    kind: "paragraph",
    text: "All need employee information."
  },
  {
    kind: "paragraph",
    text: "Instead of each component calling the API,"
  },
  {
    kind: "paragraph",
    text: "they all ask one Service."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployee Service\n\n↑\n\nEmployees\n\n↓\n\nPayroll\n\n↓\n\nAttendance"
  },
  {
    kind: "paragraph",
    text: "Now,"
  },
  {
    kind: "paragraph",
    text: "if the API changes,"
  },
  {
    kind: "paragraph",
    text: "you only update one place."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is this better?"
  },
  {
    kind: "paragraph",
    text: "Without Services:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Duplicate code",
      "Hard to maintain",
      "Hard to test",
      "More bugs"
    ]
  },
  {
    kind: "paragraph",
    text: "With Services:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "One place for business logic",
      "Reusable code",
      "Easier maintenance",
      "Easier testing",
      "Cleaner components"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Examples"
  },
  {
    kind: "table",
    headers: [
      "Service",
      "Purpose"
    ],
    rows: [
      [
        "EmployeeService",
        "Employee APIs"
      ],
      [
        "AuthService",
        "Login & Logout"
      ],
      [
        "NotificationService",
        "Notifications"
      ],
      [
        "ThemeService",
        "Dark / Light Theme"
      ],
      [
        "LoggerService",
        "Logging"
      ],
      [
        "StorageService",
        "Local Storage"
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
    text: "✔ A Service contains reusable business logic."
  },
  {
    kind: "paragraph",
    text: "✔ Services can be shared by many components."
  },
  {
    kind: "paragraph",
    text: "✔ Components should focus on the UI."
  },
  {
    kind: "paragraph",
    text: "✔ Services handle data, APIs, and business rules."
  },
  {
    kind: "heading",
    level: 2,
    text: "Next"
  },
  {
    kind: "paragraph",
    text: "We'll continue with **Creating a Service**, where you'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ng generate service`",
      "`@Injectable`",
      "`providedIn: 'root'`",
      "**Singleton Services**",
      "How Angular creates and shares a single service instance across your application."
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What a Service is",
      "Why Services are needed",
      "How to create a Service",
      "What `@Injectable` is",
      "What `providedIn: 'root'` means",
      "What Dependency Injection is"
    ]
  },
  {
    kind: "paragraph",
    text: "The next logical question is:"
  },
  {
    kind: "quote",
    text: "**\"How do multiple components share the same data using one service?\"**"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Sharing Data Between Components"
  },
  {
    kind: "paragraph",
    text: "One of the biggest advantages of Services is that they allow multiple components to use the same data."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application."
  },
  {
    kind: "paragraph",
    text: "You have these components."
  },
  {
    kind: "paragraph",
    text: "All of them need employee information."
  },
  {
    kind: "paragraph",
    text: "Instead of every component storing its own copy,"
  },
  {
    kind: "paragraph",
    text: "they all use the same `EmployeeService`."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Shared Data?"
  },
  {
    kind: "paragraph",
    text: "Imagine the Dashboard displays:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120"
  },
  {
    kind: "paragraph",
    text: "Now HR adds a new employee."
  },
  {
    kind: "paragraph",
    text: "The total becomes"
  },
  {
    kind: "code",
    language: "text",
    code: "121"
  },
  {
    kind: "paragraph",
    text: "Should only the Employee page know about this?"
  },
  {
    kind: "paragraph",
    text: "The Dashboard,"
  },
  {
    kind: "paragraph",
    text: "Reports"
  },
  {
    kind: "paragraph",
    text: "may all need the updated count."
  },
  {
    kind: "paragraph",
    text: "A shared service solves this problem."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Notice Board"
  },
  {
    kind: "paragraph",
    text: "Imagine an office notice board."
  },
  {
    kind: "code",
    language: "text",
    code: "Notice Board\n\n↓\n\nCompany Holiday\n\n↓\n\nFriday"
  },
  {
    kind: "paragraph",
    text: "Everyone reads information from the same notice board."
  },
  {
    kind: "paragraph",
    text: "The manager updates it once."
  },
  {
    kind: "paragraph",
    text: "Every employee immediately sees the latest notice."
  },
  {
    kind: "paragraph",
    text: "Nobody keeps their own separate copy."
  },
  {
    kind: "paragraph",
    text: "Services work in the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n↓\n\nEmployeeService\n\n↓\n\nShared Employee Data"
  },
  {
    kind: "paragraph",
    text: "Initially,"
  },
  {
    kind: "paragraph",
    text: "EmployeeService contains"
  },
  {
    kind: "paragraph",
    text: "Dashboard displays"
  },
  {
    kind: "code",
    language: "text",
    code: "120"
  },
  {
    kind: "paragraph",
    text: "Employees page also displays"
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "HR adds one employee."
  },
  {
    kind: "paragraph",
    text: "The service updates."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n121"
  },
  {
    kind: "paragraph",
    text: "Dashboard reads"
  },
  {
    kind: "paragraph",
    text: "121."
  },
  {
    kind: "paragraph",
    text: "Employees page reads"
  },
  {
    kind: "paragraph",
    text: "Payroll reads"
  },
  {
    kind: "paragraph",
    text: "Everyone gets the updated value from the same service."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Add Employee\n\n↓\n\nEmployeeService Updates\n\n↓\n\nDashboard Reads New Data\n\n↓\n\nEmployees Reads New Data\n\n↓\n\nPayroll Reads New Data"
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Service Example"
  },
  {
    kind: "paragraph",
    text: "The service stores shared data."
  },
  {
    kind: "code",
    language: "ts",
    code: "export class EmployeeService {\n\n  employeeCount = 120;\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Dashboard Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private employeeService: EmployeeService) {}\n\ncount = this.employeeService.employeeCount;"
  },
  {
    kind: "heading",
    level: 2,
    text: "Employee Component"
  },
  {
    kind: "paragraph",
    text: "Both components read the same value."
  },
  {
    kind: "heading",
    level: 2,
    text: "Updating Shared Data"
  },
  {
    kind: "paragraph",
    text: "Suppose a new employee is added."
  },
  {
    kind: "paragraph",
    text: "The service updates the value."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.employeeCount++;"
  },
  {
    kind: "paragraph",
    text: "Now every component using the service can read the updated count."
  },
  {
    kind: "table",
    headers: [
      "Service",
      "Shared Data"
    ],
    rows: [
      [
        "AuthService",
        "Logged-in User"
      ],
      [
        "EmployeeService",
        "Employee List"
      ],
      [
        "NotificationService",
        "Notification Count"
      ],
      [
        "ThemeService",
        "Dark / Light Theme"
      ],
      [
        "CartService",
        "Shopping Cart Items"
      ],
      [
        "LanguageService",
        "Selected Language"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should We Share Data?"
  },
  {
    kind: "paragraph",
    text: "Use a Service when data is needed by multiple components."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Logged-in user",
      "Employee count",
      "Shopping cart",
      "Notifications",
      "Theme",
      "Language",
      "User profile"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Service vs Component"
  },
  {
    kind: "table",
    headers: [
      "Component",
      "Service"
    ],
    rows: [
      [
        "Displays the UI",
        "Stores and manages shared data"
      ],
      [
        "Handles user interaction",
        "Handles business logic"
      ],
      [
        "Usually used by one page",
        "Can be shared by many pages"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "paragraph",
    text: "✔ Keep API calls inside Services."
  },
  {
    kind: "paragraph",
    text: "✔ Keep business logic inside Services."
  },
  {
    kind: "paragraph",
    text: "✔ Keep Components focused on displaying the UI."
  },
  {
    kind: "paragraph",
    text: "✔ Share common data through Services instead of duplicating it."
  },
  {
    kind: "paragraph",
    text: "✔ If many components need the same information, store it in a Service."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "✔ Services allow multiple components to share the same data."
  },
  {
    kind: "paragraph",
    text: "✔ The data is stored in one place."
  },
  {
    kind: "paragraph",
    text: "✔ Components read or update the shared data through the Service."
  },
  {
    kind: "paragraph",
    text: "✔ This reduces duplication and keeps the application consistent."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now that we know **how Services share data**, the next question is:"
  },
  {
    kind: "quote",
    text: "**\"What kinds of work do Services usually perform in real Angular applications?\"**"
  },
  {
    kind: "paragraph",
    text: "Next we'll explore **real-world services** such as:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "EmployeeService",
      "AuthService",
      "NotificationService",
      "ThemeService",
      "LoggerService",
      "API Services"
    ]
  },
  {
    kind: "paragraph",
    text: "and see how they're used in actual Angular projects."
  },
  {
    kind: "paragraph",
    text: "The next question is:"
  },
  {
    kind: "quote",
    text: "**\"What do Angular Services actually do in real projects?\"**"
  },
  {
    kind: "paragraph",
    text: "This is where beginners connect the theory to real applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Real-world Uses of Services"
  },
  {
    kind: "paragraph",
    text: "Almost every Angular application contains multiple services."
  },
  {
    kind: "paragraph",
    text: "Each service has a single responsibility."
  },
  {
    kind: "paragraph",
    text: "Think of a company."
  },
  {
    kind: "paragraph",
    text: "Different departments perform different jobs."
  },
  {
    kind: "code",
    language: "text",
    code: "HR Department\n\nFinance Department\n\nIT Department\n\nSecurity Department"
  },
  {
    kind: "paragraph",
    text: "One department doesn't do everything."
  },
  {
    kind: "paragraph",
    text: "Angular follows the same principle."
  },
  {
    kind: "paragraph",
    text: "Instead of one huge service,"
  },
  {
    kind: "paragraph",
    text: "we create multiple services,"
  },
  {
    kind: "paragraph",
    text: "each with a specific responsibility."
  },
  {
    kind: "heading",
    level: 2,
    text: "💼 EmployeeService"
  },
  {
    kind: "paragraph",
    text: "Employee information is needed in many places."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dashboard",
      "Employee List",
      "Employee Details",
      "Payroll",
      "Attendance"
    ]
  },
  {
    kind: "paragraph",
    text: "Instead of writing Employee APIs in every component,"
  },
  {
    kind: "paragraph",
    text: "we create one service."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n↓\n\nEmployeeService"
  },
  {
    kind: "heading",
    level: 3,
    text: "Typical Responsibilities"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Get Employees",
      "Get Employee By ID",
      "Add Employee",
      "Update Employee",
      "Delete Employee"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "getEmployees() { }\n\ngetEmployeeById(id: number) { }\n\naddEmployee(employee: Employee) { }\n\nupdateEmployee(employee: Employee) { }\n\ndeleteEmployee(id: number) { }"
  },
  {
    kind: "heading",
    level: 2,
    text: "🔐 AuthService"
  },
  {
    kind: "paragraph",
    text: "Authentication is required throughout the application."
  },
  {
    kind: "paragraph",
    text: "Instead of writing login logic everywhere,"
  },
  {
    kind: "paragraph",
    text: "Angular keeps it inside one service."
  },
  {
    kind: "code",
    language: "text",
    code: "Login Page\n\n↓\n\nAuthService\n\n↓\n\nLogin API"
  },
  {
    kind: "heading",
    level: 3,
    text: "Responsibilities"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login",
      "Logout",
      "Store Token",
      "Remove Token",
      "Check Login Status"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "login() { }\n\nlogout() { }\n\nisLoggedIn() { }"
  },
  {
    kind: "heading",
    level: 2,
    text: "🔔 NotificationService"
  },
  {
    kind: "paragraph",
    text: "Imagine your application displays"
  },
  {
    kind: "code",
    language: "text",
    code: "Notifications\n\n5"
  },
  {
    kind: "paragraph",
    text: "When a new notification arrives,"
  },
  {
    kind: "paragraph",
    text: "many components need the updated count."
  },
  {
    kind: "code",
    language: "text",
    code: "Header\n\nDashboard\n\nNotification Panel\n\n↓\n\nNotificationService"
  },
  {
    kind: "paragraph",
    text: "Responsibilities"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Notification Count",
      "Notification List",
      "Mark as Read"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🎨 ThemeService"
  },
  {
    kind: "paragraph",
    text: "Suppose your application supports"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Light Theme",
      "Dark Theme"
    ]
  },
  {
    kind: "paragraph",
    text: "Should every component manage the theme?"
  },
  {
    kind: "paragraph",
    text: "One service manages it."
  },
  {
    kind: "code",
    language: "text",
    code: "Header\n\nSidebar\n\nDashboard\n\n↓\n\nThemeService"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Current Theme",
      "Change Theme",
      "Save Theme"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📄 LoggerService"
  },
  {
    kind: "paragraph",
    text: "Large applications need logging."
  },
  {
    kind: "paragraph",
    text: "Whenever something important happens,"
  },
  {
    kind: "paragraph",
    text: "the LoggerService records it."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "text",
    code: "User Logged In\n\n↓\n\nLoggerService\n\n↓\n\nLog File"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Log Errors",
      "Log Warnings",
      "Log Information"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💾 StorageService"
  },
  {
    kind: "paragraph",
    text: "Many applications store data in Local Storage."
  },
  {
    kind: "paragraph",
    text: "Instead of writing Local Storage code everywhere,"
  },
  {
    kind: "paragraph",
    text: "create one service."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save Data",
      "Read Data",
      "Remove Data",
      "Clear Storage"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Application Architecture"
  },
  {
    kind: "paragraph",
    text: "Imagine your Dashboard loads."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nEmployee API\n\n↓\n\nDatabase"
  },
  {
    kind: "paragraph",
    text: "Now Payroll opens."
  },
  {
    kind: "code",
    language: "text",
    code: "Payroll\n\n↓\n\nEmployeeService\n\n↓\n\nEmployee API"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "Payroll doesn't directly talk to the API."
  },
  {
    kind: "paragraph",
    text: "Everything goes through the Service."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nAPI\n\nEmployees\n\n↓\n\nAPI\n\nPayroll\n\n↓\n\nAPI\n\nAttendance\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "Lots of duplicate code."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance\n\n↓\n\nEmployeeService\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "Only one place communicates with the API."
  },
  {
    kind: "heading",
    level: 2,
    text: "Common Services in Angular Projects"
  },
  {
    kind: "table",
    headers: [
      "Service",
      "Responsibility"
    ],
    rows: [
      [
        "EmployeeService",
        "Employee CRUD operations"
      ],
      [
        "AuthService",
        "Login and Logout"
      ],
      [
        "AttendanceService",
        "Attendance Management"
      ],
      [
        "PayrollService",
        "Payroll Operations"
      ],
      [
        "NotificationService",
        "Notifications"
      ],
      [
        "ThemeService",
        "Theme Management"
      ],
      [
        "StorageService",
        "Local Storage"
      ],
      [
        "LoggerService",
        "Application Logs"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practice"
  },
  {
    kind: "paragraph",
    text: "A service should have **one clear responsibility**."
  },
  {
    kind: "paragraph",
    text: "✅ Good"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\n↓\n\nEmployee Operations"
  },
  {
    kind: "paragraph",
    text: "❌ Avoid"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\n↓\n\nEmployees\n\nPayroll\n\nAttendance\n\nLogin\n\nNotifications\n\nTheme\n\nEverything"
  },
  {
    kind: "paragraph",
    text: "This becomes difficult to maintain."
  },
  {
    kind: "paragraph",
    text: "✔ Services organize business logic."
  },
  {
    kind: "paragraph",
    text: "✔ Different services have different responsibilities."
  },
  {
    kind: "paragraph",
    text: "✔ Components should focus on displaying the UI."
  },
  {
    kind: "paragraph",
    text: "✔ Services handle APIs, business rules, and shared data."
  },
  {
    kind: "paragraph",
    text: "✔ Keep each service focused on one purpose."
  },
  {
    kind: "paragraph",
    text: "We've now covered:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What Services are",
      "Why they are needed",
      "Creating Services",
      "Dependency Injection",
      "Sharing Data",
      "Real-world Services"
    ]
  },
  {
    kind: "paragraph",
    text: "The final part of this lesson will cover:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "⚠️ Common Mistakes",
      "💡 Best Practices",
      "📝 Mini Challenge",
      "📌 Complete Summary",
      "➡️ Next Lesson: **HTTP Client**"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "⚠️ Common Mistakes"
  },
  {
    kind: "paragraph",
    text: "Many beginners make these mistakes when learning Angular Services."
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ 1. Writing Business Logic Inside Components"
  },
  {
    kind: "paragraph",
    text: "Instead of writing API calls inside a Service,"
  },
  {
    kind: "paragraph",
    text: "they write everything inside the component."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component\n\n↓\n\nAPI Call\n\n↓\n\nBusiness Logic\n\n↓\n\nData Processing"
  },
  {
    kind: "paragraph",
    text: "After some time,"
  },
  {
    kind: "paragraph",
    text: "the component becomes hundreds of lines long."
  },
  {
    kind: "paragraph",
    text: "✔ **Better Approach**"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component\n\n↓\n\nEmployeeService\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "The component only displays the data."
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ 2. Creating One Huge Service"
  },
  {
    kind: "paragraph",
    text: "Some developers create a service like this."
  },
  {
    kind: "code",
    language: "text",
    code: "AppService\n\n↓\n\nEmployees\n\nPayroll\n\nAttendance\n\nAuthentication\n\nNotifications\n\nTheme\n\nEverything"
  },
  {
    kind: "paragraph",
    text: "the service becomes impossible to maintain."
  },
  {
    kind: "paragraph",
    text: "✔ **Better**"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\nPayrollService\n\nAuthService\n\nThemeService\n\nNotificationService"
  },
  {
    kind: "paragraph",
    text: "Each service has one responsibility."
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ 3. Creating Services Manually"
  },
  {
    kind: "paragraph",
    text: "Some beginners write"
  },
  {
    kind: "code",
    language: "ts",
    code: "const employeeService = new EmployeeService();"
  },
  {
    kind: "paragraph",
    text: "This bypasses Angular's Dependency Injection."
  },
  {
    kind: "paragraph",
    text: "✔ Always let Angular provide the service."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private employeeService: EmployeeService) {}"
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ 4. Duplicating API Calls"
  },
  {
    kind: "paragraph",
    text: "Imagine both Dashboard and Employees components call the same API separately."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployee API\n\n----------------\n\nEmployees\n\n↓\n\nEmployee API"
  },
  {
    kind: "paragraph",
    text: "This duplicates logic."
  },
  {
    kind: "paragraph",
    text: "both components should use"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\n↓\n\nEmployee API"
  },
  {
    kind: "paragraph",
    text: "✔ Keep UI logic inside Components."
  },
  {
    kind: "paragraph",
    text: "✔ Create one service for one responsibility."
  },
  {
    kind: "paragraph",
    text: "✔ Use Dependency Injection."
  },
  {
    kind: "paragraph",
    text: "✔ Share data using Services."
  },
  {
    kind: "paragraph",
    text: "✔ Put HTTP requests inside Services."
  },
  {
    kind: "paragraph",
    text: "✔ Keep Components small and readable."
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Complete HRMS Architecture"
  },
  {
    kind: "paragraph",
    text: "Imagine the entire application."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nAttendance\n\nPayroll\n\nSettings\n\n        ↓\n\nEmployeeService\n\nAttendanceService\n\nPayrollService\n\nAuthService\n\nNotificationService\n\n        ↓\n\nHTTP Client\n\n        ↓\n\nBackend API\n\n        ↓\n\nDatabase"
  },
  {
    kind: "paragraph",
    text: "Notice the flow."
  },
  {
    kind: "paragraph",
    text: "Components never talk directly to the database."
  },
  {
    kind: "paragraph",
    text: "Everything goes through Services."
  },
  {
    kind: "heading",
    level: 2,
    text: "🚀 Service Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Save\n\n↓\n\nComponent\n\n↓\n\nEmployeeService\n\n↓\n\nHTTP Client\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nEmployeeService\n\n↓\n\nComponent\n\n↓\n\nUI Updates"
  },
  {
    kind: "paragraph",
    text: "This is the flow you'll use in almost every Angular application."
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Build a small HRMS application."
  },
  {
    kind: "heading",
    level: 3,
    text: "Requirements"
  },
  {
    kind: "paragraph",
    text: "Create the following services:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "EmployeeService",
      "AuthService",
      "ThemeService"
    ]
  },
  {
    kind: "paragraph",
    text: "EmployeeService should:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Get Employees",
      "Add Employee",
      "Delete Employee"
    ]
  },
  {
    kind: "paragraph",
    text: "AuthService should:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login",
      "Logout"
    ]
  },
  {
    kind: "paragraph",
    text: "ThemeService should:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Change Theme",
      "Store Current Theme"
    ]
  },
  {
    kind: "paragraph",
    text: "Use Dependency Injection to access these services from components."
  },
  {
    kind: "table",
    headers: [
      "Component",
      "Service"
    ],
    rows: [
      [
        "Displays UI",
        "Contains business logic"
      ],
      [
        "Handles user interaction",
        "Handles reusable logic"
      ],
      [
        "Uses services",
        "Shared by many components"
      ],
      [
        "Usually page-specific",
        "Reusable throughout the application"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Quick Reference"
  },
  {
    kind: "table",
    headers: [
      "Concept",
      "Purpose"
    ],
    rows: [
      [
        "Service",
        "Reusable business logic"
      ],
      [
        "@Injectable",
        "Registers a service with Angular"
      ],
      [
        "providedIn: 'root'",
        "Creates one shared instance"
      ],
      [
        "Dependency Injection",
        "Angular provides the service"
      ],
      [
        "Singleton",
        "One instance shared across the application"
      ],
      [
        "Constructor Injection",
        "Receive the service inside a component"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Summary"
  },
  {
    kind: "paragraph",
    text: "✔ Services contain reusable business logic."
  },
  {
    kind: "paragraph",
    text: "✔ Angular creates and manages services using Dependency Injection."
  },
  {
    kind: "paragraph",
    text: "✔ `providedIn: 'root'` creates a Singleton Service shared across the application."
  },
  {
    kind: "paragraph",
    text: "✔ Services make code reusable, maintainable, and easier to test."
  },
  {
    kind: "paragraph",
    text: "✔ Keep one responsibility per service."
  },
  {
    kind: "paragraph",
    text: "✔ Place API calls, shared state, and business logic inside services."
  },
  {
    kind: "heading",
    level: 2,
    text: "🎯 What You've Learned"
  },
  {
    kind: "paragraph",
    text: "By completing this lesson, you now understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What a Service is",
      "Why Services are needed",
      "How to create a Service",
      "`@Injectable`",
      "`providedIn: 'root'`",
      "Singleton Services",
      "Dependency Injection",
      "Sharing data between components",
      "Real-world Services",
      "Best practices"
    ]
  }
];
