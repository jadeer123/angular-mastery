import { LessonBlock } from '../topic.model';

export const lesson04ControlFlow: LessonBlock[] = [
  {
    kind: "paragraph",
    text: "Since you're using **Angular 21**, we'll learn the **new control flow syntax** (`@if`, `@for`, `@switch`) instead of the older `*ngIf`, `*ngFor`, and `*ngSwitch`."
  },
  {
    kind: "paragraph",
    text: "We'll structure it like the previous lessons."
  },
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
      "What is Control Flow?",
      "Why Angular introduced the new Control Flow syntax",
      "`@if`",
      "`@else`",
      "`@else if`",
      "`@for`",
      "`track`",
      "`@empty`",
      "`@switch`",
      "Difference between old and new syntax",
      "Best Practices",
      "Common Mistakes"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What is Control Flow?"
  },
  {
    kind: "paragraph",
    text: "Imagine your application has a Login button."
  },
  {
    kind: "paragraph",
    text: "If the user is logged in, show **Dashboard**."
  },
  {
    kind: "paragraph",
    text: "Otherwise, show **Login**."
  },
  {
    kind: "paragraph",
    text: "Or imagine you have a list of employees."
  },
  {
    kind: "paragraph",
    text: "How do you repeat one card for every employee?"
  },
  {
    kind: "paragraph",
    text: "How do you display different content based on a value?"
  },
  {
    kind: "paragraph",
    text: "Angular solves these problems using **Control Flow**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Control Flow?"
  },
  {
    kind: "paragraph",
    text: "Without Control Flow, developers would manually create, remove, and update HTML elements using JavaScript."
  },
  {
    kind: "code",
    language: "ts",
    code: "const div = document.createElement('div');\n\ncontainer.appendChild(div);\n\ncontainer.removeChild(div);"
  },
  {
    kind: "paragraph",
    text: "As applications become larger, this approach becomes difficult to maintain."
  },
  {
    kind: "paragraph",
    text: "Angular provides **Control Flow** to dynamically create, remove, and repeat HTML in a clean and declarative way."
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Angular's Solution"
  },
  {
    kind: "paragraph",
    text: "Instead of manipulating the DOM manually, Angular lets you write expressive templates."
  },
  {
    kind: "paragraph",
    text: "Examples include:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`@if`",
      "`@for`",
      "`@switch`"
    ]
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates the DOM whenever your data changes."
  },
  {
    kind: "heading",
    level: 2,
    text: "📚 Topics Covered"
  },
  {
    kind: "table",
    headers: [
      "Topic",
      "Purpose"
    ],
    rows: [
      [
        "`@if`",
        "Display content conditionally"
      ],
      [
        "`@else`",
        "Display alternative content"
      ],
      [
        "`@else if`",
        "Multiple conditions"
      ],
      [
        "`@for`",
        "Repeat HTML"
      ],
      [
        "`track`",
        "Improve performance"
      ],
      [
        "`@empty`",
        "Show content for empty collections"
      ],
      [
        "`@switch`",
        "Display one of many views"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "This will be **Lesson 4 Part 1**."
  },
  {
    kind: "paragraph",
    text: "Then we'll continue with:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Part 2** → `@if`, `@else`, `@else if`",
      "**Part 3** → `@for`, `track`, `@empty`",
      "**Part 4** → `@switch`, real-world examples, best practices, summary"
    ]
  },
  {
    kind: "paragraph",
    text: "This lesson is one of the most important in modern Angular because you'll use these control flow features in almost every application you build."
  },
  {
    kind: "paragraph",
    text: "Here's a clearer introduction for **Lesson 4**."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What Control Flow is",
      "Why Angular introduced the new Control Flow syntax",
      "How to display content conditionally",
      "How to repeat HTML",
      "How to handle empty collections",
      "How to display different views based on conditions",
      "How to write cleaner and faster Angular templates"
    ]
  },
  {
    kind: "paragraph",
    text: "Imagine you're building a **Student Management System**."
  },
  {
    kind: "paragraph",
    text: "Sometimes there are students."
  },
  {
    kind: "paragraph",
    text: "Sometimes there aren't."
  },
  {
    kind: "paragraph",
    text: "Sometimes a student is **Active**."
  },
  {
    kind: "paragraph",
    text: "Sometimes they're **Inactive**."
  },
  {
    kind: "paragraph",
    text: "Sometimes the logged-in user is an **Admin**."
  },
  {
    kind: "paragraph",
    text: "Sometimes they're a **Student**."
  },
  {
    kind: "paragraph",
    text: "Your HTML cannot always look the same."
  },
  {
    kind: "paragraph",
    text: "It must change depending on your application's data."
  },
  {
    kind: "paragraph",
    text: "This process of **showing, hiding, repeating, or changing HTML based on conditions** is called **Control Flow**."
  },
  {
    kind: "paragraph",
    text: "Imagine you have a variable:"
  },
  {
    kind: "code",
    language: "ts",
    code: "isLoggedIn = true;"
  },
  {
    kind: "paragraph",
    text: "If the user is logged in, show the Dashboard."
  },
  {
    kind: "paragraph",
    text: "If not, show the Login page."
  },
  {
    kind: "paragraph",
    text: "Without Control Flow, you would manually create and remove HTML elements using JavaScript."
  },
  {
    kind: "code",
    language: "ts",
    code: "if (isLoggedIn) {\n  // Create dashboard\n} else {\n  // Create login page\n}"
  },
  {
    kind: "paragraph",
    text: "As your application grows, manually updating the DOM becomes difficult."
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates the HTML whenever your data changes."
  },
  {
    kind: "paragraph",
    text: "That's why Angular provides **Control Flow**."
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Think of it like traffic control"
  },
  {
    kind: "paragraph",
    text: "Imagine a traffic signal."
  },
  {
    kind: "paragraph",
    text: "If the light is **Green**, cars move."
  },
  {
    kind: "paragraph",
    text: "If it's **Red**, cars stop."
  },
  {
    kind: "paragraph",
    text: "If it's **Yellow**, cars wait."
  },
  {
    kind: "paragraph",
    text: "The road doesn't decide what to do."
  },
  {
    kind: "paragraph",
    text: "The **traffic signal controls the flow**."
  },
  {
    kind: "paragraph",
    text: "Angular Control Flow works the same way."
  },
  {
    kind: "paragraph",
    text: "Instead of controlling cars, it controls **HTML elements**."
  },
  {
    kind: "paragraph",
    text: "It decides:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Show this element.",
      "Hide this element.",
      "Repeat this element.",
      "Display another element."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Examples"
  },
  {
    kind: "paragraph",
    text: "Every application uses Control Flow."
  },
  {
    kind: "heading",
    level: 3,
    text: "Netflix"
  },
  {
    kind: "paragraph",
    text: "If you're logged in → Show Movies."
  },
  {
    kind: "heading",
    level: 3,
    text: "Amazon"
  },
  {
    kind: "paragraph",
    text: "If products exist → Show Product Cards."
  },
  {
    kind: "paragraph",
    text: "Otherwise → Show \"No Products Found\"."
  },
  {
    kind: "heading",
    level: 3,
    text: "Gmail"
  },
  {
    kind: "paragraph",
    text: "If emails exist → Show Email List."
  },
  {
    kind: "paragraph",
    text: "Otherwise → Show \"Inbox is Empty\"."
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS"
  },
  {
    kind: "paragraph",
    text: "If the employee is Active → Show a green badge."
  },
  {
    kind: "paragraph",
    text: "If the employee is Resigned → Show a red badge."
  },
  {
    kind: "heading",
    level: 2,
    text: "📚 Angular's New Control Flow"
  },
  {
    kind: "paragraph",
    text: "Older Angular used:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`*ngIf`",
      "`*ngFor`",
      "`*ngSwitch`"
    ]
  },
  {
    kind: "paragraph",
    text: "Modern Angular (17+) introduces a cleaner syntax:"
  },
  {
    kind: "paragraph",
    text: "The new syntax is:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Easier to read",
      "More powerful",
      "Better performance",
      "Closer to TypeScript"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🧠 Think Like This"
  },
  {
    kind: "paragraph",
    text: "Imagine you're writing instructions."
  },
  {
    kind: "code",
    language: "text",
    code: "If there are employees,\nshow the employee list.\n\nOtherwise,\nshow \"No Employees\".\n\nFor every employee,\ncreate a card.\n\nIf the employee is Active,\nshow a green badge."
  },
  {
    kind: "paragraph",
    text: "This is exactly what Control Flow lets Angular do."
  },
  {
    kind: "heading",
    level: 2,
    text: "What We'll Learn"
  },
  {
    kind: "paragraph",
    text: "In this lesson, we'll explore:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "`@if` – Show HTML only when a condition is true.",
      "`@else` – Show alternative content.",
      "`@else if` – Handle multiple conditions.",
      "`@for` – Repeat HTML for each item in a collection.",
      "`track` – Improve rendering performance.",
      "`@empty` – Display content when a collection is empty.",
      "`@switch` – Display different HTML based on a value."
    ]
  },
  {
    kind: "paragraph",
    text: "This introduction teaches **the idea** of Control Flow before introducing any syntax, making it easier for beginners to understand *why* these features exist. After this, you can dedicate separate sections to `@if`, `@else`, `@for`, `track`, `@empty`, and `@switch` with examples."
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What is `@if`?"
  },
  {
    kind: "paragraph",
    text: "Sometimes you want to display an HTML element **only when a condition is true**."
  },
  {
    kind: "paragraph",
    text: "For example,"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application."
  },
  {
    kind: "paragraph",
    text: "If the employee has completed onboarding, display a success message."
  },
  {
    kind: "paragraph",
    text: "If not, don't show it."
  },
  {
    kind: "paragraph",
    text: "Instead of writing JavaScript to create and remove HTML, Angular provides `@if`."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Imagine this variable inside your component."
  },
  {
    kind: "paragraph",
    text: "Now your HTML becomes"
  },
  {
    kind: "code",
    language: "html",
    code: "@if (isLoggedIn) {\n\n<h2>Welcome Back!</h2>\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "How it Works"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\nisLoggedIn = true\n\n        │\n\n        ▼\n\n@if(isLoggedIn)\n\n        │\n\n        ▼\n\nShow HTML"
  },
  {
    kind: "paragraph",
    text: "If the value becomes **false**, Angular automatically removes the HTML."
  },
  {
    kind: "paragraph",
    text: "If onboarding is completed"
  },
  {
    kind: "paragraph",
    text: "Show"
  },
  {
    kind: "code",
    language: "text",
    code: "✔ Onboarding Completed"
  },
  {
    kind: "heading",
    level: 3,
    text: "E-commerce"
  },
  {
    kind: "paragraph",
    text: "If a product is in stock"
  },
  {
    kind: "code",
    language: "text",
    code: "Add to Cart"
  },
  {
    kind: "heading",
    level: 3,
    text: "Banking App"
  },
  {
    kind: "paragraph",
    text: "If the user is verified"
  },
  {
    kind: "code",
    language: "text",
    code: "Transfer Money"
  },
  {
    kind: "heading",
    level: 3,
    text: "Student Portal"
  },
  {
    kind: "paragraph",
    text: "If marks are published"
  },
  {
    kind: "code",
    language: "text",
    code: "View Result"
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practice"
  },
  {
    kind: "paragraph",
    text: "Use `@if` only for deciding whether HTML should appear."
  },
  {
    kind: "paragraph",
    text: "Don't perform calculations or business logic inside it."
  },
  {
    kind: "paragraph",
    text: "❌ Bad"
  },
  {
    kind: "code",
    language: "html",
    code: "@if(student.marks > 450 && student.age > 18 && student.status == 'Active')"
  },
  {
    kind: "paragraph",
    text: "✅ Good"
  },
  {
    kind: "paragraph",
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "canShowCertificate = true;"
  },
  {
    kind: "paragraph",
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "@if(canShowCertificate){\n\n...\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `@else`?"
  },
  {
    kind: "paragraph",
    text: "Sometimes you don't just want to show something."
  },
  {
    kind: "paragraph",
    text: "You also want to display an alternative."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "paragraph",
    text: "If the user is logged in"
  },
  {
    kind: "paragraph",
    text: "Show Dashboard."
  },
  {
    kind: "paragraph",
    text: "Otherwise"
  },
  {
    kind: "paragraph",
    text: "Show Login page."
  },
  {
    kind: "code",
    language: "ts",
    code: "isLoggedIn = false;"
  },
  {
    kind: "code",
    language: "html",
    code: "@if(isLoggedIn){\n\n<h2>Dashboard</h2>\n\n}\n@else{\n\n<h2>Please Login</h2>\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "isLoggedIn\n\n     │\n\nTrue ─────────► Dashboard\n\nFalse ───────► Login"
  },
  {
    kind: "paragraph",
    text: "Netflix"
  },
  {
    kind: "paragraph",
    text: "Logged In"
  },
  {
    kind: "paragraph",
    text: "→ Movies"
  },
  {
    kind: "paragraph",
    text: "Not Logged In"
  },
  {
    kind: "paragraph",
    text: "→ Login"
  },
  {
    kind: "paragraph",
    text: "Amazon"
  },
  {
    kind: "paragraph",
    text: "Product Available"
  },
  {
    kind: "paragraph",
    text: "→ Buy Now"
  },
  {
    kind: "paragraph",
    text: "Out of Stock"
  },
  {
    kind: "paragraph",
    text: "→ Notify Me"
  },
  {
    kind: "paragraph",
    text: "HRMS"
  },
  {
    kind: "paragraph",
    text: "Employee Active"
  },
  {
    kind: "paragraph",
    text: "Employee Inactive"
  },
  {
    kind: "paragraph",
    text: "→ Contact HR"
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ `@else if`"
  },
  {
    kind: "paragraph",
    text: "Sometimes you have more than two conditions."
  },
  {
    kind: "paragraph",
    text: "Employee Status"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Active",
      "On Leave",
      "Resigned"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "status = 'Active';"
  },
  {
    kind: "code",
    language: "html",
    code: "@if(status == 'Active'){\n\nActive Employee\n\n}\n@else if(status == 'On Leave'){\n\nEmployee is on Leave\n\n}\n@else{\n\nEmployee has Left\n\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Status\n\n        │\n\n────────┼────────\n\nActive\n\nLeave\n\nResigned"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Example"
  },
  {
    kind: "paragraph",
    text: "Student Grades"
  },
  {
    kind: "code",
    language: "text",
    code: "A\n\nB\n\nC\n\nFail"
  },
  {
    kind: "paragraph",
    text: "Instead of writing many `@if` blocks,"
  },
  {
    kind: "paragraph",
    text: "Angular lets you chain conditions neatly using `@else if`."
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "paragraph",
    text: "✔ Keep conditions simple."
  },
  {
    kind: "paragraph",
    text: "✔ Avoid deeply nested `@if` blocks."
  },
  {
    kind: "paragraph",
    text: "✔ Use `@switch` if there are many possible values."
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Create a variable called"
  },
  {
    kind: "code",
    language: "ts",
    code: "status = 'Pending';"
  },
  {
    kind: "paragraph",
    text: "Display"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Approved",
      "Pending",
      "Rejected"
    ]
  },
  {
    kind: "paragraph",
    text: "using `@if`, `@else if`, and `@else`."
  },
  {
    kind: "heading",
    level: 3,
    text: "📌 Key Takeaways"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`@if` displays HTML when a condition is true.",
      "`@else` displays alternative content.",
      "`@else if` handles multiple conditions.",
      "Angular automatically adds or removes HTML based on your data.",
      "Keep conditions simple and move business logic into the component."
    ]
  },
  {
    kind: "paragraph",
    text: "The next section will cover **`@for`**, where we'll learn how Angular repeats HTML for lists like employees, products, tasks, and notifications. It's one of the most commonly used features in Angular applications."
  }
];
