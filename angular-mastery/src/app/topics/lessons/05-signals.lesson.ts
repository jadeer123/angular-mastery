import { LessonBlock } from '../topic.model';

export const lesson05Signals: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "🎯 Objective"
  },
  {
    kind: "paragraph",
    text: "By the end of this lesson, you'll understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What Signals are",
      "Why Angular introduced Signals",
      "How Signals differ from normal variables",
      "How to create and update Signals",
      "How to derive values using `computed()`",
      "How to react to changes using `effect()`",
      "When to use Signals in real applications"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ What are Signals?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What is a Signal?",
      "Why Angular introduced Signals",
      "How Signals solve state management",
      "Variables vs Signals"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ Why do we need Signals?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Traditional variable updates",
      "Manual UI refresh",
      "Reactive programming",
      "Automatic UI updates"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ Creating a Signal"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`signal()`",
      "Initial value",
      "Reading a Signal"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ Updating Signals"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`set()`",
      "`update()`",
      "`mutate()` (mention historical context if discussing older versions; explain current best practice)"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ Reading Signal Values"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Calling a signal like a function",
      "Why parentheses are required"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "6️⃣ Computed Signals"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`computed()`",
      "Derived values",
      "Automatic recalculation",
      "Real-world examples"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "7️⃣ Effects"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`effect()`",
      "Running code when a Signal changes",
      "Logging",
      "Saving data",
      "API calls (with appropriate caution)"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "8️⃣ Writable vs Readonly Signals"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Writable Signals",
      "Readonly Signals",
      "When to use each"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "9️⃣ Signals vs Variables"
  },
  {
    kind: "table",
    headers: [
      "Variable",
      "Signal"
    ],
    rows: [
      [
        "Manual updates",
        "Reactive updates"
      ],
      [
        "Not tracked",
        "Tracked by Angular"
      ],
      [
        "No dependency tracking",
        "Automatic dependency tracking"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🔟 Signals vs RxJS"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "When Signals are enough",
      "When RxJS is still useful",
      "Can they work together?"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Examples"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Counter",
      "Shopping Cart",
      "Theme Switcher",
      "Employee Count",
      "Notification Badge",
      "User Profile",
      "Dark Mode"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "⚠️ Common Mistakes"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Forgetting to call a Signal with `()`",
      "Mutating objects instead of updating immutably",
      "Using `effect()` for derived state instead of `computed()`",
      "Replacing every RxJS use case with Signals unnecessarily"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Best Practices"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Use Signals for component state",
      "Use `computed()` for derived values",
      "Keep `effect()` for side effects",
      "Prefer immutable updates for objects and arrays",
      "Keep business logic in the component or service"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Build a small Employee Dashboard:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employee count using a Signal",
      "Add Employee button",
      "Remove Employee button",
      "Computed Active Employee count",
      "Theme Signal (Light/Dark)",
      "Log changes using `effect()`"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Summary"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Signals are Angular's reactive state primitive.",
      "`signal()` creates reactive state.",
      "`set()` and `update()` change values.",
      "`computed()` derives new values.",
      "`effect()` reacts to changes.",
      "Signals simplify state management while keeping the UI in sync."
    ]
  },
  {
    kind: "paragraph",
    text: "By the end of this lesson, you will understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What Signals are",
      "Why Angular introduced Signals",
      "How Signals work",
      "How to create and update Signals",
      "How Angular automatically updates the UI",
      "`signal()`",
      "`computed()`",
      "`effect()`",
      "Writable and Readonly Signals",
      "When to use Signals in real applications"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What are Signals?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building an Employee Management System."
  },
  {
    kind: "paragraph",
    text: "You display the total number of employees on the dashboard."
  },
  {
    kind: "paragraph",
    text: "Initially,"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees : 120"
  },
  {
    kind: "paragraph",
    text: "Later, HR hires a new employee."
  },
  {
    kind: "paragraph",
    text: "The count becomes"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees : 121"
  },
  {
    kind: "paragraph",
    text: "Now think..."
  },
  {
    kind: "paragraph",
    text: "How does Angular know that the number changed?"
  },
  {
    kind: "paragraph",
    text: "Should Angular continuously check every variable?"
  },
  {
    kind: "paragraph",
    text: "Should developers manually refresh the screen?"
  },
  {
    kind: "paragraph",
    text: "That would become slow and difficult in large applications."
  },
  {
    kind: "paragraph",
    text: "This is exactly why **Signals** were introduced."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a Signal?"
  },
  {
    kind: "paragraph",
    text: "A **Signal** is a special variable that Angular watches automatically."
  },
  {
    kind: "paragraph",
    text: "Whenever its value changes,"
  },
  {
    kind: "paragraph",
    text: "Angular immediately knows about the change and updates only the affected part of the UI."
  },
  {
    kind: "paragraph",
    text: "You don't have to tell Angular that something changed."
  },
  {
    kind: "paragraph",
    text: "The Signal tells Angular automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like a Doorbell"
  },
  {
    kind: "paragraph",
    text: "Imagine someone comes to your house."
  },
  {
    kind: "paragraph",
    text: "There are two possibilities."
  },
  {
    kind: "heading",
    level: 3,
    text: "Without a Doorbell"
  },
  {
    kind: "paragraph",
    text: "Every minute you open the door and check whether someone has arrived."
  },
  {
    kind: "code",
    language: "text",
    code: "Open Door\n\nNobody\n\nOpen Again\n\nNobody\n\nOpen Again\n\nNobody"
  },
  {
    kind: "paragraph",
    text: "Very inefficient."
  },
  {
    kind: "heading",
    level: 3,
    text: "With a Doorbell"
  },
  {
    kind: "paragraph",
    text: "Someone presses the bell."
  },
  {
    kind: "paragraph",
    text: "Immediately,"
  },
  {
    kind: "paragraph",
    text: "you know someone is outside."
  },
  {
    kind: "paragraph",
    text: "No unnecessary checking."
  },
  {
    kind: "paragraph",
    text: "Signals work exactly like a doorbell."
  },
  {
    kind: "paragraph",
    text: "Instead of Angular constantly checking variables,"
  },
  {
    kind: "paragraph",
    text: "the Signal immediately notifies Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Real-Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine your mobile phone battery."
  },
  {
    kind: "code",
    language: "text",
    code: "Battery\n\n100%\n\n↓\n\n99%\n\n↓\n\n98%"
  },
  {
    kind: "paragraph",
    text: "Whenever the battery changes,"
  },
  {
    kind: "paragraph",
    text: "your phone automatically updates the battery icon."
  },
  {
    kind: "paragraph",
    text: "You never press"
  },
  {
    kind: "code",
    language: "text",
    code: "Refresh Battery"
  },
  {
    kind: "paragraph",
    text: "The battery value itself tells the phone."
  },
  {
    kind: "paragraph",
    text: "Signals behave in the same way."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why did Angular introduce Signals?"
  },
  {
    kind: "paragraph",
    text: "Before Signals,"
  },
  {
    kind: "paragraph",
    text: "Angular mainly relied on **Zone.js** to detect changes."
  },
  {
    kind: "paragraph",
    text: "Whenever something happened,"
  },
  {
    kind: "paragraph",
    text: "Angular often checked a large part of the application to see what had changed."
  },
  {
    kind: "paragraph",
    text: "As applications became larger,"
  },
  {
    kind: "paragraph",
    text: "this resulted in unnecessary work."
  },
  {
    kind: "paragraph",
    text: "Angular wanted a faster and more precise approach."
  },
  {
    kind: "paragraph",
    text: "Instead of checking everything,"
  },
  {
    kind: "paragraph",
    text: "Angular now knows exactly which value changed."
  },
  {
    kind: "paragraph",
    text: "Only the affected UI is updated."
  },
  {
    kind: "paragraph",
    text: "This improves performance and makes applications more predictable."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Signals"
  },
  {
    kind: "paragraph",
    text: "Imagine you have"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\nDepartment Count\n\nTask Count\n\nNotification Count"
  },
  {
    kind: "paragraph",
    text: "One notification arrives."
  },
  {
    kind: "paragraph",
    text: "Angular checks many parts of the application to determine what changed."
  },
  {
    kind: "paragraph",
    text: "Even though only the notification count changed."
  },
  {
    kind: "heading",
    level: 2,
    text: "With Signals"
  },
  {
    kind: "paragraph",
    text: "Notification changes."
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Notification Signal changes."
  },
  {
    kind: "paragraph",
    text: "Angular knows exactly what changed."
  },
  {
    kind: "paragraph",
    text: "Only the notification badge updates."
  },
  {
    kind: "paragraph",
    text: "Everything else remains untouched."
  },
  {
    kind: "paragraph",
    text: "This is why Signals improve efficiency."
  },
  {
    kind: "heading",
    level: 2,
    text: "Variable vs Signal"
  },
  {
    kind: "paragraph",
    text: "Suppose you create a normal variable."
  },
  {
    kind: "code",
    language: "text",
    code: "employeeCount = 120;"
  },
  {
    kind: "paragraph",
    text: "It simply stores a value."
  },
  {
    kind: "paragraph",
    text: "Nothing special happens when it changes."
  },
  {
    kind: "paragraph",
    text: "Now imagine a Signal."
  },
  {
    kind: "code",
    language: "text",
    code: "employeeCount = signal(120);"
  },
  {
    kind: "paragraph",
    text: "This is no longer just a variable."
  },
  {
    kind: "paragraph",
    text: "It is **reactive**."
  },
  {
    kind: "paragraph",
    text: "Whenever it changes,"
  },
  {
    kind: "paragraph",
    text: "Angular is automatically notified."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of It This Way"
  },
  {
    kind: "paragraph",
    text: "A normal variable is like writing a number on paper."
  },
  {
    kind: "code",
    language: "text",
    code: "120"
  },
  {
    kind: "paragraph",
    text: "If the number changes,"
  },
  {
    kind: "paragraph",
    text: "you must erase it,"
  },
  {
    kind: "paragraph",
    text: "write the new number,"
  },
  {
    kind: "paragraph",
    text: "and tell everyone to read it again."
  },
  {
    kind: "paragraph",
    text: "A Signal is like a digital display."
  },
  {
    kind: "code",
    language: "text",
    code: "120\n\n↓\n\n121\n\n↓\n\n122"
  },
  {
    kind: "paragraph",
    text: "The display updates itself automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Where are Signals Used?"
  },
  {
    kind: "paragraph",
    text: "Almost everywhere."
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employee Count",
      "Notifications",
      "Leave Balance",
      "Pending Approvals"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Shopping App"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Cart Count",
      "Wishlist",
      "Theme",
      "Logged-in User"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Banking"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Balance",
      "Transactions",
      "Account Status"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Social Media"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Likes",
      "Comments",
      "Followers",
      "Online Status"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Why are Signals Better?"
  },
  {
    kind: "paragraph",
    text: "Signals provide several benefits."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Angular knows exactly what changed.",
      "Only the affected UI updates.",
      "Less unnecessary work.",
      "Better performance.",
      "Simpler state management.",
      "Easier to understand than many reactive patterns for local component state."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Before Moving Ahead"
  },
  {
    kind: "paragraph",
    text: "In the next sections we'll learn how to:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Create a Signal",
      "Read a Signal",
      "Update a Signal",
      "Create computed Signals",
      "React to changes using effects",
      "Build real-world examples using Signals"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "My suggestion"
  },
  {
    kind: "paragraph",
    text: "I think this introduction is much stronger than jumping straight into `signal()`. A beginner first understands **the problem** (why Signals exist), then **the solution** (what Signals are), and only then learns the syntax. It creates a smoother learning path and makes the later sections on `computed()` and `effect()` much easier to understand."
  },
  {
    kind: "paragraph",
    text: "Suppose your dashboard shows:"
  },
  {
    kind: "code",
    language: "text",
    code: "Total Employees : 120"
  },
  {
    kind: "paragraph",
    text: "You load it like this:"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.getEmployees().subscribe(employees => {\n  this.employeeCount = employees.length;\n});"
  },
  {
    kind: "paragraph",
    text: "Now HR adds a new employee."
  },
  {
    kind: "paragraph",
    text: "The database now has **121 employees**."
  },
  {
    kind: "paragraph",
    text: "Will your dashboard automatically show **121**?"
  },
  {
    kind: "paragraph",
    text: "**No.**"
  },
  {
    kind: "paragraph",
    text: "Why?"
  },
  {
    kind: "paragraph",
    text: "Because Angular doesn't know the backend changed."
  },
  {
    kind: "paragraph",
    text: "The API is called **only once** (unless you call it again)."
  },
  {
    kind: "paragraph",
    text: "So your screen still shows:"
  },
  {
    kind: "paragraph",
    text: "To update it, you must do something like:"
  },
  {
    kind: "code",
    language: "text",
    code: "Add Employee\n\n↓\n\nCall POST API\n\n↓\n\nCall GET API again\n\n↓\n\nUpdate employeeCount\n\n↓\n\nScreen shows 121"
  },
  {
    kind: "paragraph",
    text: "Every component that displays the employee count has to be refreshed somehow."
  },
  {
    kind: "paragraph",
    text: "Now imagine you store the employee count in a Signal."
  },
  {
    kind: "paragraph",
    text: "Your dashboard reads from this Signal."
  },
  {
    kind: "paragraph",
    text: "After adding an employee:"
  },
  {
    kind: "code",
    language: "text",
    code: "POST Employee\n\n↓\n\nAPI Success\n\n↓\n\nemployeeCount.set(121)\n\n↓\n\nDashboard updates automatically"
  },
  {
    kind: "paragraph",
    text: "Notice something important."
  },
  {
    kind: "paragraph",
    text: "**The Signal did not call the API.**"
  },
  {
    kind: "paragraph",
    text: "The API still has to be called."
  },
  {
    kind: "paragraph",
    text: "The Signal stores the **current state** inside your application."
  },
  {
    kind: "heading",
    level: 2,
    text: "This is the biggest misunderstanding"
  },
  {
    kind: "paragraph",
    text: "Many beginners think:"
  },
  {
    kind: "quote",
    text: "\"Signals automatically call APIs.\""
  },
  {
    kind: "paragraph",
    text: "❌ They do **not**."
  },
  {
    kind: "paragraph",
    text: "Signals **do not fetch data**."
  },
  {
    kind: "paragraph",
    text: "Services fetch data."
  },
  {
    kind: "paragraph",
    text: "Signals store data."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it like this"
  },
  {
    kind: "paragraph",
    text: "Your backend is the **source of truth**."
  },
  {
    kind: "code",
    language: "text",
    code: "Database\n\n↓\n\nAPI\n\n↓\n\nAngular Service\n\n↓\n\nSignal\n\n↓\n\nUI"
  },
  {
    kind: "paragraph",
    text: "The Signal sits **between the service and the UI**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Imagine three places show employee count."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dashboard Card",
      "Sidebar",
      "Header"
    ]
  },
  {
    kind: "paragraph",
    text: "Without Signals:"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard = 120\n\nSidebar = 120\n\nHeader = 120"
  },
  {
    kind: "paragraph",
    text: "You add an employee."
  },
  {
    kind: "paragraph",
    text: "Now what?"
  },
  {
    kind: "paragraph",
    text: "You have to update all three."
  },
  {
    kind: "paragraph",
    text: "Sometimes developers call the GET API again."
  },
  {
    kind: "paragraph",
    text: "Sometimes they emit an event."
  },
  {
    kind: "paragraph",
    text: "Sometimes they use a Subject."
  },
  {
    kind: "paragraph",
    text: "Sometimes they reload the page."
  },
  {
    kind: "paragraph",
    text: "With a Signal:"
  },
  {
    kind: "code",
    language: "text",
    code: "employeeCount Signal\n\n↓\n\nDashboard\n\n↓\n\nSidebar\n\n↓\n\nHeader"
  },
  {
    kind: "paragraph",
    text: "You update **one Signal**."
  },
  {
    kind: "paragraph",
    text: "Everything using that Signal updates automatically."
  },
  {
    kind: "paragraph",
    text: "No manual synchronization."
  },
  {
    kind: "heading",
    level: 2,
    text: "Does the API still get called?"
  },
  {
    kind: "paragraph",
    text: "Yes."
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "code",
    language: "text",
    code: "Page Opens\n\n↓\n\nGET /employees\n\n↓\n\n120 employees\n\n↓\n\nemployeeCount.set(120)"
  },
  {
    kind: "paragraph",
    text: "Later:"
  },
  {
    kind: "code",
    language: "text",
    code: "POST /employees\n\n↓\n\nSuccess\n\n↓\n\nemployeeCount.update(count => count + 1)"
  },
  {
    kind: "paragraph",
    text: "No second GET request is needed **if you already know** the new state."
  },
  {
    kind: "heading",
    level: 2,
    text: "When do Signals really shine?"
  },
  {
    kind: "paragraph",
    text: "Suppose you have:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employee List",
      "Employee Count Card",
      "Active Employee Count",
      "Header Badge",
      "Sidebar Badge"
    ]
  },
  {
    kind: "paragraph",
    text: "Without Signals, all these pieces have to be kept in sync manually."
  },
  {
    kind: "paragraph",
    text: "With Signals, they all read from the same reactive state."
  },
  {
    kind: "paragraph",
    text: "Change the state once, and every dependent UI updates automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "So what problem do Signals actually solve?"
  },
  {
    kind: "paragraph",
    text: "They **don't replace APIs**."
  },
  {
    kind: "paragraph",
    text: "They **don't replace HTTP requests**."
  },
  {
    kind: "paragraph",
    text: "They solve **state management inside your Angular application**."
  },
  {
    kind: "paragraph",
    text: "A simple way to remember it is:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**API** → Gets data from the server.",
      "**Signal** → Holds reactive data in the application.",
      "**UI** → Reads from the Signal."
    ]
  },
  {
    kind: "paragraph",
    text: "That's the core idea. Once this is clear, `computed()` and `effect()` become much easier to understand because they're built on top of this reactive state model."
  },
  {
    kind: "paragraph",
    text: "Suppose your dashboard has:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\nLeave Count\nNotification Count"
  },
  {
    kind: "paragraph",
    text: "When the dashboard loads:"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit() {\n  this.loadDashboard();\n}\n\nloadDashboard() {\n  this.dashboardService.getDashboardStats()\n    .subscribe(stats => {\n      this.employeeCount = stats.employeeCount;\n      this.leaveCount = stats.leaveCount;\n      this.notificationCount = stats.notificationCount;\n    });\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count = 120\nLeave Count = 25\nNotification Count = 8"
  },
  {
    kind: "paragraph",
    text: "Everything is fine."
  },
  {
    kind: "heading",
    level: 2,
    text: "Now HR adds a new employee"
  },
  {
    kind: "paragraph",
    text: "The database now has:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count = 121"
  },
  {
    kind: "paragraph",
    text: "But your dashboard still shows"
  },
  {
    kind: "paragraph",
    text: "Because the variable doesn't magically change."
  },
  {
    kind: "paragraph",
    text: "You have to do one of these:"
  },
  {
    kind: "code",
    language: "text",
    code: "Call GET API again"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "text",
    code: "Refresh Dashboard"
  },
  {
    kind: "code",
    language: "text",
    code: "Reload Page"
  },
  {
    kind: "paragraph",
    text: "Instead of storing the count in a normal variable"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount = 0;"
  },
  {
    kind: "paragraph",
    text: "store it as a Signal"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount = signal(0);"
  },
  {
    kind: "paragraph",
    text: "Notice the default value."
  },
  {
    kind: "paragraph",
    text: "Initially we don't know the count."
  },
  {
    kind: "paragraph",
    text: "So we start with"
  },
  {
    kind: "code",
    language: "text",
    code: "0"
  },
  {
    kind: "heading",
    level: 2,
    text: "When do we call set()?"
  },
  {
    kind: "paragraph",
    text: "After the API returns."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.dashboardService.getDashboardStats()\n.subscribe(stats => {\n\n  this.employeeCount.set(stats.employeeCount);\n\n});"
  },
  {
    kind: "paragraph",
    text: "Suppose API returns"
  },
  {
    kind: "paragraph",
    text: "Signal becomes"
  },
  {
    kind: "paragraph",
    text: "Dashboard automatically updates."
  },
  {
    kind: "heading",
    level: 2,
    text: "When do we call update()?"
  },
  {
    kind: "paragraph",
    text: "Imagine you add one employee."
  },
  {
    kind: "code",
    language: "text",
    code: "POST /employees"
  },
  {
    kind: "paragraph",
    text: "API returns Success."
  },
  {
    kind: "paragraph",
    text: "Now you already know"
  },
  {
    kind: "paragraph",
    text: "Employee Count"
  },
  {
    kind: "code",
    language: "text",
    code: "120 → 121"
  },
  {
    kind: "paragraph",
    text: "Instead of calling GET API again,"
  },
  {
    kind: "paragraph",
    text: "simply write"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeCount.update(value => value + 1);"
  },
  {
    kind: "paragraph",
    text: "That's it."
  },
  {
    kind: "paragraph",
    text: "Dashboard changes immediately."
  },
  {
    kind: "heading",
    level: 2,
    text: "When should I use set()?"
  },
  {
    kind: "paragraph",
    text: "Whenever you receive a **new value** from outside."
  },
  {
    kind: "paragraph",
    text: "Examples"
  },
  {
    kind: "code",
    language: "text",
    code: "GET Dashboard API\n\n↓\n\nset()"
  },
  {
    kind: "code",
    language: "text",
    code: "GET Employee Count API\n\n↓\n\nset()"
  },
  {
    kind: "code",
    language: "text",
    code: "GET Notification Count API\n\n↓\n\nset()"
  },
  {
    kind: "paragraph",
    text: "Think of **set()** as:"
  },
  {
    kind: "quote",
    text: "\"Replace the old value with this new value.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "When should I use update()?"
  },
  {
    kind: "paragraph",
    text: "When the new value depends on the old value."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Current count"
  },
  {
    kind: "paragraph",
    text: "New employee added"
  },
  {
    kind: "code",
    language: "text",
    code: "121"
  },
  {
    kind: "paragraph",
    text: "Instead of"
  },
  {
    kind: "code",
    language: "text",
    code: "set(121)"
  },
  {
    kind: "paragraph",
    text: "write"
  },
  {
    kind: "code",
    language: "ts",
    code: "update(value => value + 1)"
  },
  {
    kind: "paragraph",
    text: "Because"
  },
  {
    kind: "code",
    language: "text",
    code: "121\n\ndepends on\n\n120"
  },
  {
    kind: "paragraph",
    text: "Another example"
  },
  {
    kind: "paragraph",
    text: "Notification count"
  },
  {
    kind: "code",
    language: "text",
    code: "8"
  },
  {
    kind: "paragraph",
    text: "New notification"
  },
  {
    kind: "code",
    language: "text",
    code: "9"
  },
  {
    kind: "paragraph",
    text: "Just"
  },
  {
    kind: "code",
    language: "ts",
    code: "notificationCount.update(v => v + 1);"
  },
  {
    kind: "heading",
    level: 2,
    text: "A practical Dashboard Service"
  },
  {
    kind: "paragraph",
    text: "Imagine"
  },
  {
    kind: "code",
    language: "ts",
    code: "dashboardState"
  },
  {
    kind: "paragraph",
    text: "contains"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\nLeave Count\n\nNotification Count"
  },
  {
    kind: "paragraph",
    text: "When Dashboard opens"
  },
  {
    kind: "code",
    language: "text",
    code: "GET Dashboard API\n\n↓\n\nset(Employee Count)\n\n↓\n\nset(Leave Count)\n\n↓\n\nset(Notification Count)"
  },
  {
    kind: "paragraph",
    text: "Everything is loaded."
  },
  {
    kind: "paragraph",
    text: "Now HR adds an employee."
  },
  {
    kind: "code",
    language: "text",
    code: "POST\n\n↓\n\nGET Dashboard Again"
  },
  {
    kind: "paragraph",
    text: "you simply"
  },
  {
    kind: "code",
    language: "text",
    code: "POST\n\n↓\n\nemployeeCount.update(c => c + 1)"
  },
  {
    kind: "paragraph",
    text: "Only that card changes."
  },
  {
    kind: "heading",
    level: 2,
    text: "But what if another user adds an employee?"
  },
  {
    kind: "paragraph",
    text: "Excellent question."
  },
  {
    kind: "paragraph",
    text: "Suppose **you** didn't add the employee."
  },
  {
    kind: "paragraph",
    text: "Someone else did."
  },
  {
    kind: "paragraph",
    text: "Your application doesn't know."
  },
  {
    kind: "paragraph",
    text: "Signals **cannot detect backend changes by themselves**."
  },
  {
    kind: "paragraph",
    text: "You still need something to notify your app, such as:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Polling the API every few seconds",
      "WebSockets",
      "Server-Sent Events (SSE)",
      "Firebase/SignalR or another real-time service",
      "Refreshing the dashboard"
    ]
  },
  {
    kind: "paragraph",
    text: "When your app receives the new data, you call:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount.set(newCount);"
  },
  {
    kind: "paragraph",
    text: "The Signal updates the UI."
  },
  {
    kind: "paragraph",
    text: "So remember:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Signals don't know the server changed.**",
      "**Signals know when *your application* changes the Signal's value.**"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "The rule I follow"
  },
  {
    kind: "paragraph",
    text: "Think of Signals as **reactive state inside Angular**."
  },
  {
    kind: "code",
    language: "text",
    code: "API\n\n↓\n\nset()\n\n↓\n\nSignal\n\n↓\n\nUI"
  },
  {
    kind: "paragraph",
    text: "When the user performs an action:"
  },
  {
    kind: "code",
    language: "text",
    code: "Button Click\n\n↓\n\nPOST API\n\n↓\n\nSuccess\n\n↓\n\nupdate()\n\n↓\n\nUI"
  },
  {
    kind: "paragraph",
    text: "That's the pattern you'll use in most Angular applications."
  },
  {
    kind: "paragraph",
    text: "Creating a Signal is similar to creating a normal variable."
  },
  {
    kind: "paragraph",
    text: "Normal variable:"
  },
  {
    kind: "paragraph",
    text: "Signal:"
  },
  {
    kind: "paragraph",
    text: "The difference is that Angular **tracks** this value."
  },
  {
    kind: "heading",
    level: 2,
    text: "Default Value"
  },
  {
    kind: "paragraph",
    text: "A Signal always needs an initial value."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount = signal(0);\n\nemployeeName = signal('');\n\nisLoggedIn = signal(false);\n\nemployees = signal([]);"
  },
  {
    kind: "paragraph",
    text: "Because Angular needs an initial state before any API is called."
  },
  {
    kind: "paragraph",
    text: "Dashboard opens."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n↓\n\n0\n\n↓\n\nAPI Called\n\n↓\n\n120\n\n↓\n\nSignal Updated"
  },
  {
    kind: "paragraph",
    text: "Initially, the card shows **0** (or you could show a loading state). Once the API responds, you update the Signal."
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ Reading a Signal"
  },
  {
    kind: "paragraph",
    text: "This is where beginners often get confused."
  },
  {
    kind: "paragraph",
    text: "A normal variable is read like this:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount"
  },
  {
    kind: "paragraph",
    text: "A Signal is read like this:"
  },
  {
    kind: "paragraph",
    text: "Notice the parentheses."
  },
  {
    kind: "paragraph",
    text: "Because a Signal is **not just a value**. It's a reactive object. Calling it with `()` tells Angular:"
  },
  {
    kind: "quote",
    text: "\"Give me the current value, and track that I'm using it.\""
  },
  {
    kind: "paragraph",
    text: "Think of it like asking:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n↓\n\n\"What's your current value?\""
  },
  {
    kind: "paragraph",
    text: "The Signal answers with the latest value."
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ Updating a Signal"
  },
  {
    kind: "paragraph",
    text: "There are two main ways."
  },
  {
    kind: "heading",
    level: 2,
    text: "`set()`"
  },
  {
    kind: "paragraph",
    text: "Use `set()` when you already know the new value."
  },
  {
    kind: "paragraph",
    text: "API returns:"
  },
  {
    kind: "paragraph",
    text: "Update the Signal:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount.set(120);"
  },
  {
    kind: "code",
    language: "ts",
    code: "theme.set('dark');"
  },
  {
    kind: "paragraph",
    text: "You're replacing the old value completely."
  },
  {
    kind: "heading",
    level: 2,
    text: "`update()`"
  },
  {
    kind: "paragraph",
    text: "Use `update()` when the new value depends on the current value."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount.set(121);"
  },
  {
    kind: "paragraph",
    text: "Use:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount.update(count => count + 1);"
  },
  {
    kind: "paragraph",
    text: "Why is this better?"
  },
  {
    kind: "paragraph",
    text: "Because you don't have to know the current value yourself. The Signal gives you the latest value and you return the updated one."
  },
  {
    kind: "code",
    language: "text",
    code: "8\n\n↓\n\n9"
  },
  {
    kind: "code",
    language: "ts",
    code: "notificationCount.update(value => value + 1);"
  },
  {
    kind: "heading",
    level: 2,
    text: "When should I use `set()` vs `update()`?"
  },
  {
    kind: "paragraph",
    text: "A simple rule:"
  },
  {
    kind: "heading",
    level: 3,
    text: "Use `set()`"
  },
  {
    kind: "paragraph",
    text: "When you're replacing the value."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "API response",
      "Reset form",
      "Change theme",
      "Logout"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Use `update()`"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Increment counter",
      "Decrement quantity",
      "Add notification",
      "Increase employee count"
    ]
  },
  {
    kind: "paragraph",
    text: "Now imagine your dashboard."
  },
  {
    kind: "paragraph",
    text: "You already have:"
  },
  {
    kind: "code",
    language: "text",
    code: "Total Employees\n\n120"
  },
  {
    kind: "paragraph",
    text: "and"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees on Leave\n\n20"
  },
  {
    kind: "paragraph",
    text: "Now you also want:"
  },
  {
    kind: "code",
    language: "text",
    code: "Active Employees"
  },
  {
    kind: "paragraph",
    text: "Should you store another Signal?"
  },
  {
    kind: "paragraph",
    text: "Not necessarily."
  },
  {
    kind: "code",
    language: "text",
    code: "Active Employees\n\n=\n\nTotal Employees\n\n-\n\nLeave Employees"
  },
  {
    kind: "paragraph",
    text: "This value can be **calculated**."
  },
  {
    kind: "paragraph",
    text: "That's where **Computed Signals** come in."
  },
  {
    kind: "paragraph",
    text: "A Computed Signal derives its value from other Signals."
  },
  {
    kind: "paragraph",
    text: "Think of it like an Excel formula."
  },
  {
    kind: "paragraph",
    text: "You don't manually update the formula's result."
  },
  {
    kind: "paragraph",
    text: "Whenever the input cells change, Excel recalculates automatically."
  },
  {
    kind: "paragraph",
    text: "Computed Signals work the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120\n\n↓\n\nLeave Count\n\n20\n\n↓\n\nComputed\n\n↓\n\nActive Employees\n\n100"
  },
  {
    kind: "paragraph",
    text: "If Leave Count becomes 25:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120\n\n↓\n\nLeave Count\n\n25\n\n↓\n\nComputed\n\n↓\n\n95"
  },
  {
    kind: "paragraph",
    text: "You never updated the Active Employee count."
  },
  {
    kind: "paragraph",
    text: "Angular recalculated it automatically."
  },
  {
    kind: "paragraph",
    text: "Computed Signals are perfect for values that can always be derived from other state."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Active Employee Count",
      "Total Price in Shopping Cart",
      "Full Name (First + Last Name)",
      "Pending Tasks",
      "Remaining Leave Balance",
      "Unread Notifications"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Why not make everything a Signal?"
  },
  {
    kind: "paragraph",
    text: "Imagine you create:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120\n\nLeave Count\n\n20\n\nActive Count\n\n100"
  },
  {
    kind: "paragraph",
    text: "Now someone updates Leave Count."
  },
  {
    kind: "paragraph",
    text: "You also have to remember to update Active Count."
  },
  {
    kind: "paragraph",
    text: "That's error-prone."
  },
  {
    kind: "paragraph",
    text: "Instead:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n↓\n\nLeave Count\n\n↓\n\nComputed\n\n↓\n\nActive Count"
  },
  {
    kind: "paragraph",
    text: "One source of truth."
  },
  {
    kind: "paragraph",
    text: "Less code."
  },
  {
    kind: "paragraph",
    text: "Fewer bugs."
  },
  {
    kind: "paragraph",
    text: "This is why `computed()` is one of the most powerful features of Signals."
  },
  {
    kind: "paragraph",
    text: "The next topic will be **`effect()`**, and that's where many developers get confused. We'll discuss **when to use it**, **when not to use it**, and how it differs from `computed()`."
  },
  {
    kind: "paragraph",
    text: "Before learning `effect()`, let's understand the problem it solves."
  },
  {
    kind: "paragraph",
    text: "Imagine you're building your HRMS Dashboard."
  },
  {
    kind: "paragraph",
    text: "You have a Signal."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120"
  },
  {
    kind: "paragraph",
    text: "Whenever the employee count changes,"
  },
  {
    kind: "paragraph",
    text: "you want to do something."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save to Local Storage",
      "Write a log",
      "Show a notification",
      "Call another API",
      "Update the page title"
    ]
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "You are **not displaying a value**."
  },
  {
    kind: "paragraph",
    text: "You are **performing an action**."
  },
  {
    kind: "paragraph",
    text: "That's exactly what **Effects** are for."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is an Effect?"
  },
  {
    kind: "paragraph",
    text: "An **Effect** automatically runs whenever one or more Signals it uses change."
  },
  {
    kind: "paragraph",
    text: "Think of it as:"
  },
  {
    kind: "quote",
    text: "\"Whenever this Signal changes, execute this code.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine your house has a smoke detector."
  },
  {
    kind: "paragraph",
    text: "Whenever smoke is detected,"
  },
  {
    kind: "paragraph",
    text: "the alarm starts automatically."
  },
  {
    kind: "paragraph",
    text: "Nobody presses a button."
  },
  {
    kind: "paragraph",
    text: "The smoke detector continuously watches for smoke."
  },
  {
    kind: "paragraph",
    text: "Signals work similarly."
  },
  {
    kind: "paragraph",
    text: "Effects watch Signals."
  },
  {
    kind: "paragraph",
    text: "Whenever a Signal changes,"
  },
  {
    kind: "paragraph",
    text: "the Effect runs automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Whenever HR adds an employee,"
  },
  {
    kind: "paragraph",
    text: "you want to log"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count Updated"
  },
  {
    kind: "paragraph",
    text: "Instead of writing"
  },
  {
    kind: "code",
    language: "text",
    code: "After every update,\n\nremember to log."
  },
  {
    kind: "paragraph",
    text: "Angular can do it automatically using an Effect."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count Signal\n\n↓\n\nValue Changes\n\n↓\n\nEffect Runs\n\n↓\n\nPerform Action"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Shopping Cart"
  },
  {
    kind: "paragraph",
    text: "Cart Count"
  },
  {
    kind: "code",
    language: "text",
    code: "3"
  },
  {
    kind: "paragraph",
    text: "User adds one item."
  },
  {
    kind: "code",
    language: "text",
    code: "4"
  },
  {
    kind: "paragraph",
    text: "What should happen?"
  },
  {
    kind: "paragraph",
    text: "Maybe"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save Cart",
      "Update Badge",
      "Show Message"
    ]
  },
  {
    kind: "paragraph",
    text: "The cart count changes."
  },
  {
    kind: "paragraph",
    text: "The Effect notices the change."
  },
  {
    kind: "paragraph",
    text: "The actions run automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Difference Between Computed and Effect"
  },
  {
    kind: "paragraph",
    text: "Many beginners confuse these two."
  },
  {
    kind: "paragraph",
    text: "Let's compare them."
  },
  {
    kind: "heading",
    level: 3,
    text: "Computed"
  },
  {
    kind: "paragraph",
    text: "Computed **calculates a value**."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n120\n\nLeave Count\n\n20\n\n↓\n\nComputed\n\n↓\n\nActive Employees\n\n100"
  },
  {
    kind: "paragraph",
    text: "Computed returns another value."
  },
  {
    kind: "heading",
    level: 3,
    text: "Effect"
  },
  {
    kind: "paragraph",
    text: "Effect **does not return a value**."
  },
  {
    kind: "paragraph",
    text: "it performs an action."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Count\n\n↓\n\nChanged\n\n↓\n\nSave to Local Storage"
  },
  {
    kind: "code",
    language: "text",
    code: "Notification Count\n\n↓\n\nChanged\n\n↓\n\nPlay Notification Sound"
  },
  {
    kind: "heading",
    level: 2,
    text: "Easy Way to Remember"
  },
  {
    kind: "paragraph",
    text: "Think of a school."
  },
  {
    kind: "paragraph",
    text: "Computed Student Marks"
  },
  {
    kind: "code",
    language: "text",
    code: "English\n\n90\n\nMath\n\n80\n\nScience\n\n85\n\n↓\n\nTotal\n\n255"
  },
  {
    kind: "paragraph",
    text: "Computed calculates."
  },
  {
    kind: "paragraph",
    text: "Now imagine"
  },
  {
    kind: "paragraph",
    text: "Whenever marks change,"
  },
  {
    kind: "paragraph",
    text: "send an SMS to parents."
  },
  {
    kind: "paragraph",
    text: "That's not a calculation."
  },
  {
    kind: "paragraph",
    text: "That's an action."
  },
  {
    kind: "paragraph",
    text: "So that's an Effect."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Uses"
  },
  {
    kind: "paragraph",
    text: "Effects are useful for tasks like:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save dashboard settings.",
      "Update browser title.",
      "Write audit logs."
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save cart to Local Storage.",
      "Show \"Item Added\" notification."
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Log every balance change.",
      "Refresh recent transactions."
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Mark notifications as read.",
      "Play notification sound.",
      "Update unread badge."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should I Use Effects?"
  },
  {
    kind: "paragraph",
    text: "Use an Effect whenever something should **happen automatically** after a Signal changes."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Save data.",
      "Show a toast message.",
      "Write logs.",
      "Call analytics.",
      "Synchronize with Local Storage.",
      "Update the document title."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should I NOT Use Effects?"
  },
  {
    kind: "paragraph",
    text: "This is one of the biggest mistakes beginners make."
  },
  {
    kind: "paragraph",
    text: "Suppose you want"
  },
  {
    kind: "code",
    language: "text",
    code: "Active Employees\n\n=\n\nEmployee Count\n\n-\n\nLeave Count"
  },
  {
    kind: "paragraph",
    text: "Some developers write an Effect."
  },
  {
    kind: "paragraph",
    text: "That is incorrect."
  },
  {
    kind: "paragraph",
    text: "Because Active Employees is a **calculated value**."
  },
  {
    kind: "paragraph",
    text: "It should use **Computed**, not Effect."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Need another value?** → Use **Computed**.",
      "**Need to perform an action?** → Use **Effect**."
    ]
  },
  {
    kind: "paragraph",
    text: "❌ Using Effects for calculations."
  },
  {
    kind: "paragraph",
    text: "❌ Updating another Signal unnecessarily inside an Effect."
  },
  {
    kind: "paragraph",
    text: "❌ Putting heavy business logic inside Effects."
  },
  {
    kind: "paragraph",
    text: "❌ Making every Signal have its own Effect."
  },
  {
    kind: "paragraph",
    text: "✔ Use Effects only for side effects."
  },
  {
    kind: "paragraph",
    text: "✔ Use Computed for derived values."
  },
  {
    kind: "paragraph",
    text: "✔ Keep Effects small and focused."
  },
  {
    kind: "paragraph",
    text: "✔ Let Signals handle state."
  },
  {
    kind: "paragraph",
    text: "✔ Let Computed handle calculations."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think Like This"
  },
  {
    kind: "code",
    language: "text",
    code: "Signal\n\n↓\n\nState"
  },
  {
    kind: "code",
    language: "text",
    code: "Computed\n\n↓\n\nNew Value"
  },
  {
    kind: "code",
    language: "text",
    code: "Effect\n\n↓\n\nAction"
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Key Takeaway"
  },
  {
    kind: "paragraph",
    text: "The easiest way to remember Signals is:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Signal** → Stores reactive state.",
      "**Computed** → Calculates a new value from Signals.",
      "**Effect** → Performs an action when Signals change."
    ]
  },
  {
    kind: "paragraph",
    text: "If you understand this distinction, you'll avoid one of the most common sources of confusion when learning modern Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Dashboard"
  },
  {
    kind: "paragraph",
    text: "Suppose you want to save the user's selected theme."
  },
  {
    kind: "paragraph",
    text: "When the user changes the theme,"
  },
  {
    kind: "paragraph",
    text: "you also want to save it in Local Storage."
  },
  {
    kind: "heading",
    level: 3,
    text: "Signal"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { signal } from '@angular/core';\n\ntheme = signal('light');"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { effect } from '@angular/core';\n\nconstructor() {\n\n  effect(() => {\n\n    localStorage.setItem('theme', this.theme());\n\n  });\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Update the Signal"
  },
  {
    kind: "code",
    language: "ts",
    code: "changeTheme() {\n\n  this.theme.set('dark');\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "What Happens?"
  },
  {
    kind: "code",
    language: "text",
    code: "theme = light"
  },
  {
    kind: "paragraph",
    text: "Effect runs"
  },
  {
    kind: "code",
    language: "text",
    code: "localStorage\n\ntheme = light"
  },
  {
    kind: "paragraph",
    text: "User clicks **Dark Mode**"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.theme.set('dark');"
  },
  {
    kind: "paragraph",
    text: "Signal changes"
  },
  {
    kind: "paragraph",
    text: "Effect automatically runs"
  },
  {
    kind: "code",
    language: "text",
    code: "localStorage\n\ntheme = dark"
  },
  {
    kind: "paragraph",
    text: "You never wrote"
  },
  {
    kind: "code",
    language: "ts",
    code: "localStorage.setItem(...)"
  },
  {
    kind: "paragraph",
    text: "inside `changeTheme()`."
  },
  {
    kind: "paragraph",
    text: "The Effect handled it automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another HRMS Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeCount = signal(120);"
  },
  {
    kind: "paragraph",
    text: "you want to log it."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor() {\n\n  effect(() => {\n\n    console.log(\n      'Employee Count:',\n      this.employeeCount()\n    );\n\n  });\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now,"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeCount.set(121);"
  },
  {
    kind: "paragraph",
    text: "Console Output"
  },
  {
    kind: "paragraph",
    text: "No need to call `console.log()` yourself."
  },
  {
    kind: "heading",
    level: 2,
    text: "When Does the Effect Run?"
  },
  {
    kind: "code",
    language: "text",
    code: "employeeCount = 120\n\n↓\n\nEffect Runs\n\n↓\n\nConsole\n\n120"
  },
  {
    kind: "code",
    language: "text",
    code: "employeeCount.set(121)\n\n↓\n\nEffect Runs Again\n\n↓\n\nConsole\n\n121"
  },
  {
    kind: "paragraph",
    text: "Every time the Signal changes,"
  },
  {
    kind: "paragraph",
    text: "the Effect executes automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "One More Practical Example (Notification)"
  },
  {
    kind: "code",
    language: "ts",
    code: "notificationCount = signal(0);\n\nconstructor() {\n\n  effect(() => {\n\n    if (this.notificationCount() > 0) {\n\n      alert('You have new notifications!');\n\n    }\n\n  });\n\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.notificationCount.set(5);"
  },
  {
    kind: "paragraph",
    text: "The Effect runs automatically and shows the alert."
  },
  {
    kind: "heading",
    level: 2,
    text: "Simple Rule to Remember"
  },
  {
    kind: "code",
    language: "text",
    code: "Signal\n\nStores data\n\n↓\n\nComputed\n\nCalculates new data\n\n↓\n\nEffect\n\nPerforms an action"
  },
  {
    kind: "paragraph",
    text: "**Think of `effect()` as an automatic observer.** It watches the Signals you read inside it, and whenever any of those Signals change, it runs your code again. That's why it's ideal for **logging, saving to Local Storage, updating the page title, or showing notifications**, but not for calculating values (that's what `computed()` is for)."
  },
  {
    kind: "heading",
    level: 2,
    text: "`signals-lesson.html` — **Part 4**"
  },
  {
    kind: "code",
    language: "html",
    code: "  <!-- Effect -->\n\n  <section>\n\n    <h2>6️⃣ Effects</h2>\n\n    <p>\n\n      Sometimes we don't want to calculate another value.\n\n      Instead, we want to perform an action whenever a Signal changes.\n\n    </p>\n\n    <p>\n\n      Angular provides <strong>effect()</strong> for this purpose.\n\n    </p>\n\n    <div class=\"note\">\n\n      ✔ An Effect automatically runs whenever one or more Signals used inside it change.\n\n    </div>\n\n  </section>\n\n  <!-- Why Effect -->\n\n  <section>\n\n    <h2>🤔 Why do we need Effects?</h2>\n\n    <p>\n\n      Imagine your HRMS application stores the selected theme.\n\n    </p>\n\n    <div class=\"example\">\n\nTheme\n\n↓\n\nLight\n\n↓\n\nUser Changes Theme\n\n↓\n\nDark\n\n    </div>\n\n    <p>\n\n      Whenever the theme changes,\n\n      you also want to save it in Local Storage.\n\n    </p>\n\n    <p>\n\n      Instead of manually saving it every time,\n\n      an Effect can do it automatically.\n\n    </p>\n\n  </section>\n\n  <!-- Flow -->\n\n  <section>\n\n    <h2>🔄 How Effects Work</h2>\n\n    <div class=\"example\">\n\nTheme Signal\n\n↓\n\nValue Changes\n\n↓\n\nEffect Runs\n\n↓\n\nSave Theme\n\n↓\n\nDone\n\n    </div>\n\n  </section>\n\n  <!-- Real World -->\n\n  <section>\n\n    <h2>🌍 Real World Examples</h2>\n\n    <table class=\"binding-table\">\n\n      <thead>\n\n        <tr>\n\n          <th>Signal Changes</th>\n\n          <th>Effect Performs</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>Theme</td>\n\n          <td>Save to Local Storage</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Employee Count</td>\n\n          <td>Write Audit Log</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Notification Count</td>\n\n          <td>Play Notification Sound</td>\n\n        </tr>\n\n        <tr>\n\n          <td>User</td>\n\n          <td>Update Page Title</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Cart Items</td>\n\n          <td>Save Cart</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </section>\n\n  <!-- Computed vs Effect -->\n\n  <section>\n\n    <h2>📊 Computed vs Effect</h2>\n\n    <table class=\"binding-table\">\n\n      <thead>\n\n        <tr>\n\n          <th>Computed</th>\n\n          <th>Effect</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>Calculates a value.</td>\n\n          <td>Performs an action.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Returns another Signal.</td>\n\n          <td>Returns nothing.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Derived state.</td>\n\n          <td>Side effects.</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n    <div class=\"note\">\n\n      ✔ Need another value? Use Computed.\n\n      Need to perform an action? Use Effect.\n\n    </div>\n\n  </section>\n\n  <!-- Writable -->\n\n  <section>\n\n    <h2>7️⃣ Writable Signals</h2>\n\n    <p>\n\n      Most Signals you create are Writable Signals.\n\n    </p>\n\n    <p>\n\n      Their values can change using set() or update().\n\n    </p>\n\n    <div class=\"example\">\n\nEmployee Count\n\n↓\n\n120\n\n↓\n\n121\n\n↓\n\n122\n\n    </div>\n\n    <p>\n\n      Dashboard counters,\n\n      notification counts,\n\n      shopping carts,\n\n      and themes are all examples of Writable Signals.\n\n    </p>\n\n  </section>\n\n  <!-- Readonly -->\n\n  <section>\n\n    <h2>8️⃣ Readonly Signals</h2>\n\n    <p>\n\n      Sometimes you don't want other parts of your application to modify a value.\n\n    </p>\n\n    <p>\n\n      In that case,\n\n      expose the Signal as Readonly.\n\n    </p>\n\n    <div class=\"example\">\n\nService\n\n↓\n\nWritable Signal\n\n↓\n\nReadonly Signal\n\n↓\n\nComponents Read Only\n\n    </div>\n\n    <div class=\"note\">\n\n      ✔ Components can read the value but cannot modify it.\n\n    </div>\n\n  </section>\n\n  <!-- Signals vs Variables -->\n\n  <section>\n\n    <h2>📊 Variables vs Signals</h2>\n\n    <table class=\"binding-table\">\n\n      <thead>\n\n        <tr>\n\n          <th>Variable</th>\n\n          <th>Signal</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>Stores data.</td>\n\n          <td>Stores reactive data.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>No dependency tracking.</td>\n\n          <td>Angular tracks dependencies.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Manual synchronization.</td>\n\n          <td>Automatic UI updates.</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </section>\n\n  <!-- Signals vs RxJS -->\n\n  <section>\n\n    <h2>📊 Signals vs RxJS</h2>\n\n    <p>\n\n      Signals and RxJS are not competitors.\n\n      They solve different problems.\n\n    </p>\n\n    <table class=\"binding-table\">\n\n      <thead>\n\n        <tr>\n\n          <th>Signals</th>\n\n          <th>RxJS</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>Component state.</td>\n\n          <td>Async streams.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Simple API.</td>\n\n          <td>Powerful operators.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Automatic dependency tracking.</td>\n\n          <td>Observable-based programming.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>Best for UI state.</td>\n\n          <td>Best for APIs, events and streams.</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </section>\n\n  <!-- Best Practice -->\n\n  <section>\n\n    <h2>💡 Best Practices</h2>\n\n    <ul>\n\n      <li>Use Signals for component state.</li>\n\n      <li>Use Computed for calculated values.</li>\n\n      <li>Use Effects only for side effects.</li>\n\n      <li>Expose Readonly Signals from services whenever possible.</li>\n\n      <li>Continue using RxJS for asynchronous operations like HTTP requests and event streams.</li>\n\n    </ul>\n\n  </section>"
  },
  {
    kind: "paragraph",
    text: "This completes the **core concepts** of Signals."
  },
  {
    kind: "paragraph",
    text: "The **final part** will include:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "🌍 Real-world architecture (HRMS Dashboard)",
      "⚠️ Common mistakes",
      "💼 Interview questions",
      "📝 Mini challenge",
      "📌 Complete summary",
      "➡️ Next lesson (Routing)"
    ]
  },
  {
    kind: "paragraph",
    text: "That will finish the Signals lesson."
  }
];
