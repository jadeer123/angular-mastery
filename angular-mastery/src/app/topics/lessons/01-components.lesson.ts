import { LessonBlock } from '../topic.model';

export const lesson01Components: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "Objective"
  },
  {
    kind: "paragraph",
    text: "By the end of this lesson, you'll understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What is a Component?",
      "Why Angular uses Components",
      "How Angular creates a Component",
      "Component anatomy",
      "Standalone Components",
      "Selector",
      "Template",
      "Styles",
      "Bootstrap Component"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Before Angular"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building this page using plain HTML."
  },
  {
    kind: "code",
    language: "text",
    code: "-------------------------------------------------\n\nStudent Task Manager\n\nDashboard\n\nTasks\n\nNotes\n\nProfile\n\nToday's Tasks\n\nLearn Angular\n\nComplete Assignment\n\nFooter\n\n-------------------------------------------------"
  },
  {
    kind: "paragraph",
    text: "Most beginners write everything in **one HTML file**."
  },
  {
    kind: "code",
    language: "html",
    code: "<body>\n\n<header>...</header>\n\n<nav>...</nav>\n\n<section>...</section>\n\n<footer>...</footer>\n\n</body>"
  },
  {
    kind: "paragraph",
    text: "Now imagine this page grows to **5000 lines**."
  },
  {
    kind: "paragraph",
    text: "Is it easy to maintain?"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular's Solution"
  },
  {
    kind: "paragraph",
    text: "Angular says:"
  },
  {
    kind: "quote",
    text: "Break your application into small reusable pieces."
  },
  {
    kind: "paragraph",
    text: "Each piece is called a **Component**."
  },
  {
    kind: "paragraph",
    text: "Instead of one big page..."
  },
  {
    kind: "code",
    language: "text",
    code: "App"
  },
  {
    kind: "paragraph",
    text: "we split it into"
  },
  {
    kind: "code",
    language: "text",
    code: "App\n│\n├── Navbar\n├── Sidebar\n├── Dashboard\n├── Task List\n├── Task Card\n└── Footer"
  },
  {
    kind: "paragraph",
    text: "Each one is independent."
  },
  {
    kind: "paragraph",
    text: "That's the entire idea behind Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a Component?"
  },
  {
    kind: "paragraph",
    text: "A component is simply"
  },
  {
    kind: "quote",
    text: "HTML + TypeScript + CSS + Metadata"
  },
  {
    kind: "paragraph",
    text: "Every component has these four parts."
  },
  {
    kind: "code",
    language: "text",
    code: "TaskCard\n\nTaskCard.ts\n\nTaskCard.html\n\nTaskCard.scss\n\n@Component(...)"
  },
  {
    kind: "heading",
    level: 2,
    text: "Component Anatomy"
  },
  {
    kind: "paragraph",
    text: "Let's look at a component."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-navbar',\n  templateUrl: './navbar.html',\n  styleUrl: './navbar.scss'\n})\nexport class NavbarComponent {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Let's understand every line."
  },
  {
    kind: "heading",
    level: 2,
    text: "1. Import"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Component } from '@angular/core';"
  },
  {
    kind: "paragraph",
    text: "Angular gives us the `Component` decorator."
  },
  {
    kind: "paragraph",
    text: "Without importing it,"
  },
  {
    kind: "paragraph",
    text: "Angular has no idea this class is a component."
  },
  {
    kind: "heading",
    level: 2,
    text: "2. Decorator"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Component({...})"
  },
  {
    kind: "paragraph",
    text: "This is called a **Decorator**."
  },
  {
    kind: "paragraph",
    text: "Think of it like an ID card."
  },
  {
    kind: "paragraph",
    text: "Without it,"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class NavbarComponent {\n\n}"
  },
  {
    kind: "paragraph",
    text: "is just a normal TypeScript class."
  },
  {
    kind: "paragraph",
    text: "The decorator tells Angular:"
  },
  {
    kind: "quote",
    text: "\"This class is a UI Component.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "3. Selector"
  },
  {
    kind: "code",
    language: "ts",
    code: "selector: 'app-navbar'"
  },
  {
    kind: "paragraph",
    text: "This is the HTML tag of your component."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-navbar></app-navbar>"
  },
  {
    kind: "paragraph",
    text: "Angular sees"
  },
  {
    kind: "code",
    language: "text",
    code: "<app-navbar>"
  },
  {
    kind: "paragraph",
    text: "and knows:"
  },
  {
    kind: "quote",
    text: "Render NavbarComponent here."
  },
  {
    kind: "heading",
    level: 2,
    text: "4. Template"
  },
  {
    kind: "code",
    language: "ts",
    code: "templateUrl:'./navbar.html'"
  },
  {
    kind: "paragraph",
    text: "This is the HTML."
  },
  {
    kind: "code",
    language: "html",
    code: "<nav>\n\nStudent Task Manager\n\n</nav>"
  },
  {
    kind: "paragraph",
    text: "Angular inserts this HTML wherever"
  },
  {
    kind: "paragraph",
    text: "is used."
  },
  {
    kind: "heading",
    level: 2,
    text: "5. Styles"
  },
  {
    kind: "code",
    language: "ts",
    code: "styleUrl:'./navbar.scss'"
  },
  {
    kind: "paragraph",
    text: "These styles belong only to this component."
  },
  {
    kind: "code",
    language: "scss",
    code: "nav{\n\nbackground:black;\n\ncolor:white;\n\n}"
  },
  {
    kind: "paragraph",
    text: "Notice something important."
  },
  {
    kind: "paragraph",
    text: "These styles **do not affect other components**."
  },
  {
    kind: "paragraph",
    text: "Angular scopes them automatically."
  },
  {
    kind: "paragraph",
    text: "This is called **View Encapsulation** (we'll study it later)."
  },
  {
    kind: "heading",
    level: 2,
    text: "6. Class"
  },
  {
    kind: "paragraph",
    text: "This is where your logic lives."
  },
  {
    kind: "paragraph",
    text: "Variables"
  },
  {
    kind: "paragraph",
    text: "Functions"
  },
  {
    kind: "paragraph",
    text: "API Calls"
  },
  {
    kind: "paragraph",
    text: "Signals"
  },
  {
    kind: "paragraph",
    text: "Everything goes here."
  },
  {
    kind: "heading",
    level: 2,
    text: "Standalone Component"
  },
  {
    kind: "paragraph",
    text: "Earlier Angular required NgModules."
  },
  {
    kind: "paragraph",
    text: "Old Angular"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\n↓\n\nAppModule\n\n↓\n\nApp"
  },
  {
    kind: "paragraph",
    text: "Now (Angular 15+)"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\n↓\n\nApp"
  },
  {
    kind: "paragraph",
    text: "No module needed."
  },
  {
    kind: "paragraph",
    text: "Much simpler."
  },
  {
    kind: "paragraph",
    text: "That's why we're using standalone components throughout this course."
  },
  {
    kind: "heading",
    level: 2,
    text: "Component Lifecycle (Preview)"
  },
  {
    kind: "paragraph",
    text: "When Angular displays a component, it roughly follows this flow:"
  },
  {
    kind: "code",
    language: "text",
    code: "Create Class\n\n↓\n\nCreate HTML\n\n↓\n\nRender Screen\n\n↓\n\nUser interacts\n\n↓\n\nDestroy Component"
  },
  {
    kind: "paragraph",
    text: "Later, we'll explore lifecycle hooks like `ngOnInit`, `ngOnDestroy`, and more."
  },
  {
    kind: "heading",
    level: 2,
    text: "Let's Build Something"
  },
  {
    kind: "paragraph",
    text: "Instead of three empty components, let's build a small UI."
  },
  {
    kind: "code",
    language: "text",
    code: "App\n│\n├── Navbar\n├── Sidebar\n└── Dashboard"
  },
  {
    kind: "heading",
    level: 2,
    text: "Navbar"
  },
  {
    kind: "paragraph",
    text: "**navbar.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<header class=\"navbar\">\n  <h2>Angular Mastery</h2>\n</header>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Sidebar"
  },
  {
    kind: "paragraph",
    text: "**sidebar.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<ul>\n  <li>Dashboard</li>\n  <li>Tasks</li>\n  <li>Notes</li>\n  <li>Profile</li>\n</ul>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Dashboard"
  },
  {
    kind: "paragraph",
    text: "**dashboard.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>Welcome!</h1>\n\n<p>Let's master Angular step by step.</p>"
  },
  {
    kind: "heading",
    level: 2,
    text: "App"
  },
  {
    kind: "paragraph",
    text: "Now use them."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-navbar></app-navbar>\n\n<div class=\"layout\">\n\n    <app-sidebar></app-sidebar>\n\n    <app-dashboard></app-dashboard>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Notice something beautiful."
  },
  {
    kind: "paragraph",
    text: "We're writing HTML using our own custom tags."
  },
  {
    kind: "code",
    language: "text",
    code: "<app-navbar>\n\n<app-sidebar>\n\n<app-dashboard>"
  },
  {
    kind: "paragraph",
    text: "This is one of Angular's biggest strengths."
  },
  {
    kind: "heading",
    level: 2,
    text: "Exercise 1"
  },
  {
    kind: "paragraph",
    text: "Create one more component:"
  },
  {
    kind: "code",
    language: "text",
    code: "TaskCardComponent"
  },
  {
    kind: "paragraph",
    text: "Its HTML should display:"
  },
  {
    kind: "code",
    language: "text",
    code: "--------------------------------\n\nLearn Components\n\nPending\n\n--------------------------------"
  },
  {
    kind: "paragraph",
    text: "Don't worry about making it dynamic yet. Just create the component and display it below the dashboard."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "By now, you should understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "✔️ Why Angular uses components.",
      "✔️ What problem components solve.",
      "✔️ The structure of a component (`@Component`, selector, template, styles, class).",
      "✔️ Why standalone components are the modern approach.",
      "✔️ How components are composed to build an application."
    ]
  },
  {
    kind: "paragraph",
    text: "For **Lesson 1 - Components**, I would structure the page like this, based on the content we've already discussed."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What is a Component?",
      "Why Angular uses Components",
      "How Angular creates Components",
      "Component Anatomy",
      "Standalone Components",
      "Selector",
      "Template",
      "Styles",
      "Bootstrap Component"
    ]
  },
  {
    kind: "paragraph",
    text: "Imagine you are building a Student Task Manager using only HTML."
  },
  {
    kind: "paragraph",
    text: "Most beginners write everything inside one HTML page."
  },
  {
    kind: "paragraph",
    text: "Imagine this page grows to **5000 lines**."
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ Problems"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Difficult to read",
      "Difficult to maintain",
      "Difficult to reuse",
      "Difficult for multiple developers to work together"
    ]
  },
  {
    kind: "quote",
    text: "Instead of building one huge page, divide your application into **small reusable pieces**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🏗 Before vs After"
  },
  {
    kind: "heading",
    level: 3,
    text: "❌ Without Components"
  },
  {
    kind: "code",
    language: "text",
    code: "Application\n\n↓\n\nOne Huge HTML File"
  },
  {
    kind: "heading",
    level: 3,
    text: "✅ With Components"
  },
  {
    kind: "paragraph",
    text: "Every component is responsible for only one part of the UI."
  },
  {
    kind: "code",
    language: "text",
    code: "HTML\n+\nTypeScript\n+\nCSS\n+\n@Component Metadata"
  },
  {
    kind: "paragraph",
    text: "Every Angular component consists of these four parts."
  },
  {
    kind: "code",
    language: "text",
    code: "TaskCard\n\n├── task-card.ts\n├── task-card.html\n├── task-card.scss\n└── @Component(...)"
  },
  {
    kind: "paragraph",
    text: "Show the actual code."
  },
  {
    kind: "paragraph",
    text: "Below it, explain every part in separate cards."
  },
  {
    kind: "heading",
    level: 3,
    text: "1️⃣ Import"
  },
  {
    kind: "paragraph",
    text: "Angular provides the `Component` decorator."
  },
  {
    kind: "paragraph",
    text: "Without importing it, Angular treats the class as a normal TypeScript class."
  },
  {
    kind: "heading",
    level: 3,
    text: "2️⃣ Decorator"
  },
  {
    kind: "paragraph",
    text: "Think of it as the **identity card** of your component."
  },
  {
    kind: "paragraph",
    text: "It tells Angular:"
  },
  {
    kind: "quote",
    text: "\"This class represents a UI Component.\""
  },
  {
    kind: "heading",
    level: 3,
    text: "3️⃣ Selector"
  },
  {
    kind: "paragraph",
    text: "Used as a custom HTML tag."
  },
  {
    kind: "paragraph",
    text: "Angular replaces this tag with the component's HTML."
  },
  {
    kind: "heading",
    level: 3,
    text: "4️⃣ Template"
  },
  {
    kind: "paragraph",
    text: "Contains the HTML for the component."
  },
  {
    kind: "code",
    language: "html",
    code: "<header>\n\nAngular Mastery\n\n</header>"
  },
  {
    kind: "heading",
    level: 3,
    text: "5️⃣ Styles"
  },
  {
    kind: "paragraph",
    text: "Contains CSS or SCSS that applies **only to this component**."
  },
  {
    kind: "paragraph",
    text: "We'll learn about View Encapsulation later."
  },
  {
    kind: "heading",
    level: 3,
    text: "6️⃣ Component Class"
  },
  {
    kind: "paragraph",
    text: "This contains"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Variables",
      "Functions",
      "API Calls",
      "Signals",
      "Business Logic"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🚀 Standalone Components"
  },
  {
    kind: "paragraph",
    text: "Earlier Angular required"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\n↓\n\nAppModule\n\n↓\n\nApplication"
  },
  {
    kind: "paragraph",
    text: "Modern Angular (15+)"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\n↓\n\nApplication"
  },
  {
    kind: "paragraph",
    text: "No NgModule required."
  },
  {
    kind: "paragraph",
    text: "This makes Angular much simpler."
  },
  {
    kind: "heading",
    level: 2,
    text: "🎮 Interactive Demo"
  },
  {
    kind: "paragraph",
    text: "Instead of just reading, the user should see the components already created."
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\nSidebar\n\nDashboard"
  },
  {
    kind: "paragraph",
    text: "Below that, explain:"
  },
  {
    kind: "quote",
    text: "These three are independent components working together to build one application."
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real World Example"
  },
  {
    kind: "paragraph",
    text: "Netflix"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar\n\nMovie Card\n\nSidebar\n\nFooter\n\nProfile Menu"
  },
  {
    kind: "paragraph",
    text: "Each one is an Angular Component."
  },
  {
    kind: "heading",
    level: 2,
    text: "⚠ Common Mistakes"
  },
  {
    kind: "paragraph",
    text: "❌ Putting the entire application inside one component."
  },
  {
    kind: "paragraph",
    text: "❌ Naming selectors incorrectly."
  },
  {
    kind: "paragraph",
    text: "❌ Writing business logic inside HTML."
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Exercise"
  },
  {
    kind: "paragraph",
    text: "Create"
  },
  {
    kind: "code",
    language: "text",
    code: "FooterComponent"
  },
  {
    kind: "paragraph",
    text: "Display"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Mastery\n\nCreated by Jo"
  },
  {
    kind: "paragraph",
    text: "Then add it below the Dashboard."
  },
  {
    kind: "paragraph",
    text: "After this lesson, you should know:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "✔ Why Components exist",
      "✔ How Angular creates Components",
      "✔ Component Anatomy",
      "✔ Standalone Components",
      "✔ Selector",
      "✔ Template",
      "✔ Styles",
      "✔ Component Class"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "One suggestion for the entire project"
  },
  {
    kind: "paragraph",
    text: "I think we should create a **reusable `LessonLayoutComponent`**. Every lesson (Components, Data Binding, Directives, Signals, RxJS, Forms, etc.) will use the same layout:"
  },
  {
    kind: "code",
    language: "text",
    code: "📘 Lesson Title\n\n🎯 Objective\n\n📖 Explanation\n\n💻 Code Example\n\n🎮 Interactive Demo\n\n🌍 Real-world Example\n\n⚠ Common Mistakes\n\n📝 Exercise\n\n📌 Key Takeaways\n\n➡ Next Lesson"
  },
  {
    kind: "paragraph",
    text: "At this stage, **don't over-engineer** the project."
  },
  {
    kind: "paragraph",
    text: "Your goal is **to learn Angular**, not to build the perfect architecture from day one."
  },
  {
    kind: "paragraph",
    text: "Creating one component per lesson is completely fine."
  },
  {
    kind: "code",
    language: "text",
    code: "features/\n\n├── dashboard/\n├── component-lesson/\n├── data-binding-lesson/\n├── directives-lesson/\n├── signals-lesson/\n├── routing-lesson/\n..."
  },
  {
    kind: "paragraph",
    text: "Later, when we learn **Reusable Components**, **Content Projection**, and **Dynamic Components**, we'll come back and refactor everything into a common `LessonComponent`. That refactoring itself will become a lesson."
  },
  {
    kind: "heading",
    level: 2,
    text: "Let's make Lesson 1 much richer"
  },
  {
    kind: "paragraph",
    text: "Instead of only three sections, let's build it like a real course page."
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"lesson\">\n\n  <h1>📘 Lesson 1 - Components</h1>\n\n  <p class=\"intro\">\n    Components are the building blocks of every Angular application.\n    Every screen you see in an Angular application is made up of one or more components.\n  </p>\n\n  <!-- Objective -->\n  <section>\n\n    <h2>🎯 Objective</h2>\n\n    <ul>\n      <li>Understand what a Component is.</li>\n      <li>Why Angular uses Components.</li>\n      <li>Learn Component Anatomy.</li>\n      <li>Understand Standalone Components.</li>\n      <li>Create your first Component.</li>\n    </ul>\n\n  </section>\n\n  <!-- Before Angular -->\n  <section>\n\n    <h2>📖 Before Angular</h2>\n\n    <p>\n      Imagine building an entire application using only one HTML file.\n    </p>\n\n    <div class=\"example\">\n\nStudent Task Manager\n\nDashboard\n\nTasks\n\nNotes\n\nProfile\n\nToday's Tasks\n\nLearn Angular\n\nComplete Assignment\n\nFooter\n\n    </div>\n\n    <p>\n      As the application grows, this single HTML file could easily become\n      thousands of lines long, making it difficult to understand and maintain.\n    </p>\n\n  </section>\n\n  <!-- Angular Solution -->\n  <section>\n\n    <h2>💡 Angular's Solution</h2>\n\n    <p>\n      Angular divides an application into small reusable pieces called Components.\n    </p>\n\n    <div class=\"example\">\n\nApp\n\n├── Navbar\n\n├── Sidebar\n\n├── Dashboard\n\n├── Task List\n\n├── Task Card\n\n└── Footer\n\n    </div>\n\n  </section>\n\n  <!-- What is Component -->\n  <section>\n\n    <h2>📦 What is a Component?</h2>\n\n    <p>\n      A Component is simply a combination of HTML, TypeScript, CSS and Angular Metadata.\n    </p>\n\n    <div class=\"example\">\n\nTaskCard\n\n├── task-card.ts\n\n├── task-card.html\n\n├── task-card.scss\n\n└── @Component(...)\n\n    </div>\n\n  </section>\n\n  <!-- Anatomy -->\n  <section>\n\n    <h2>⚙️ Component Anatomy</h2>\n\n<pre class=\"code-block\">\n@Component({\n  selector: 'app-navbar',\n  templateUrl: './navbar.html',\n  styleUrl: './navbar.scss'\n})\nexport class NavbarComponent {\n\n}\n</pre>\n\n    <p>\n      In the next sections we'll understand every line of this component.\n    </p>\n\n  </section>\n\n  <!-- Real World -->\n  <section>\n\n    <h2>🌍 Real World Example</h2>\n\n    <p>\n      Think about YouTube.\n    </p>\n\n    <div class=\"example\">\n\nYouTube\n\n├── Navbar\n\n├── Sidebar\n\n├── Video Card\n\n├── Comments\n\n└── Footer\n\n    </div>\n\n    <p>\n      Every one of these is an independent Component.\n    </p>\n\n  </section>\n\n  <!-- Exercise -->\n\n  <section>\n\n    <h2>📝 Exercise</h2>\n\n    <ul>\n\n      <li>Create FooterComponent.</li>\n\n      <li>Add it below Dashboard.</li>\n\n      <li>Change the footer text.</li>\n\n    </ul>\n\n  </section>\n\n  <!-- Key Takeaways -->\n\n  <section>\n\n    <h2>📌 Key Takeaways</h2>\n\n    <ul>\n\n      <li>Components are reusable UI blocks.</li>\n\n      <li>Each component has HTML, TypeScript and Styles.</li>\n\n      <li>Angular applications are built by combining Components.</li>\n\n    </ul>\n\n  </section>\n\n  <!-- Next -->\n\n  <section>\n\n    <h2>➡️ Next Lesson</h2>\n\n    <p>\n      Data Binding\n    </p>\n\n  </section>\n\n</div>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why I prefer this"
  },
  {
    kind: "paragraph",
    text: "As we progress, each lesson becomes richer."
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Lesson 1** → Components",
      "**Lesson 2** → Data Binding (we'll add live input boxes)",
      "**Lesson 3** → Directives (we'll add interactive `@if` and `@for` examples)",
      "**Lesson 4** → Signals (we'll add a live counter)",
      "**Lesson 5** → Routing (we'll show how navigation works)"
    ]
  },
  {
    kind: "paragraph",
    text: "So each lesson page becomes more interactive as you learn more Angular concepts."
  },
  {
    kind: "paragraph",
    text: "I think this incremental approach is much better than trying to build a generic reusable lesson component right now. When we eventually reach the lesson on reusable components and architecture, we'll already have several lesson pages, and you'll clearly see **why** refactoring them into a shared component is valuable. That's a much more natural way to learn Angular."
  },
  {
    kind: "paragraph",
    text: "Here's what I think is missing."
  },
  {
    kind: "heading",
    level: 3,
    text: "1. Objective ✅"
  },
  {
    kind: "paragraph",
    text: "Keep it."
  },
  {
    kind: "heading",
    level: 3,
    text: "5. Component Anatomy ✅"
  },
  {
    kind: "heading",
    level: 2,
    text: "6. 🔍 Explain Every Part (Missing)"
  },
  {
    kind: "paragraph",
    text: "Instead of just showing"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Component({\n  selector: 'app-navbar',\n  templateUrl: './navbar.html',\n  styleUrl: './navbar.scss'\n})\nexport class NavbarComponent {}"
  },
  {
    kind: "paragraph",
    text: "Break it down."
  },
  {
    kind: "code",
    language: "text",
    code: "Import\n\n↓\n\nDecorator\n\n↓\n\nSelector\n\n↓\n\nTemplate\n\n↓\n\nStyles\n\n↓\n\nComponent Class"
  },
  {
    kind: "paragraph",
    text: "Each should have its own section."
  },
  {
    kind: "code",
    language: "html",
    code: "<section>\n\n<h3>Selector</h3>\n\n<p>\n\nThe selector is the HTML tag used to display a component.\n\n</p>\n\n<pre>\n\nselector:'app-navbar'\n\n</pre>\n\nExample\n\n<app-navbar></app-navbar>\n\n</section>"
  },
  {
    kind: "paragraph",
    text: "This is where real learning happens."
  },
  {
    kind: "heading",
    level: 2,
    text: "7. 🎮 Interactive Demo (Missing)"
  },
  {
    kind: "paragraph",
    text: "Every lesson should have something users can play with."
  },
  {
    kind: "paragraph",
    text: "For Components"
  },
  {
    kind: "paragraph",
    text: "Show"
  },
  {
    kind: "code",
    language: "text",
    code: "App\n\n↓\n\nNavbar\n\n↓\n\nSidebar\n\n↓\n\nDashboard"
  },
  {
    kind: "paragraph",
    text: "When the user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar"
  },
  {
    kind: "code",
    language: "text",
    code: "Navbar Component\n\nnavbar.ts\n\nnavbar.html\n\nnavbar.scss"
  },
  {
    kind: "paragraph",
    text: "Now they'll understand what a component actually is."
  },
  {
    kind: "paragraph",
    text: "Later we'll build this using Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "8. 🏢 Real Project Usage (Missing)"
  },
  {
    kind: "paragraph",
    text: "Instead of only YouTube"
  },
  {
    kind: "code",
    language: "text",
    code: "Amazon\n\nNavbar\n\nSearch\n\nProduct Card\n\nCart\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "text",
    code: "Instagram\n\nNavbar\n\nStories\n\nPost\n\nComments\n\nProfile"
  },
  {
    kind: "code",
    language: "text",
    code: "HRMS\n\nNavbar\n\nSidebar\n\nDashboard\n\nAttendance\n\nLeave\n\nPayroll"
  },
  {
    kind: "paragraph",
    text: "This connects the concept to real-world applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "9. ⚠ Common Mistakes ✅"
  },
  {
    kind: "paragraph",
    text: "I would add"
  },
  {
    kind: "code",
    language: "text",
    code: "Creating huge components\n\nDuplicating code\n\nPutting business logic inside HTML\n\nUsing one component for everything"
  },
  {
    kind: "heading",
    level: 2,
    text: "10. 🧠 Interview Question (Missing)"
  },
  {
    kind: "paragraph",
    text: "At the end"
  },
  {
    kind: "code",
    language: "text",
    code: "Interview Question\n\nWhat is a Component?\n\nDifference between Component and Module?\n\nCan one Angular application have only one Component?\n\nWhat is the purpose of selector?"
  },
  {
    kind: "paragraph",
    text: "Later you'll thank yourself."
  },
  {
    kind: "heading",
    level: 2,
    text: "11. 📝 Mini Challenge (Instead of Exercise)"
  },
  {
    kind: "paragraph",
    text: "Instead of"
  },
  {
    kind: "code",
    language: "text",
    code: "Create FooterComponent"
  },
  {
    kind: "paragraph",
    text: "Make it more practical."
  },
  {
    kind: "code",
    language: "text",
    code: "Challenge\n\nCreate HeaderComponent\n\nCreate FooterComponent\n\nDisplay both inside AppComponent\n\nChange their text\n\nRun the application"
  },
  {
    kind: "heading",
    level: 2,
    text: "12. 📌 Summary (Missing)"
  },
  {
    kind: "paragraph",
    text: "Instead of Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "Have"
  },
  {
    kind: "code",
    language: "text",
    code: "Today's Summary\n\n✔ Components are reusable.\n\n✔ Every Component has\n\nHTML\n\nCSS\n\nTypeScript\n\nMetadata\n\n✔ Components build an Angular application."
  },
  {
    kind: "heading",
    level: 2,
    text: "13. 🧭 Navigation (Missing)"
  },
  {
    kind: "paragraph",
    text: "At the bottom"
  },
  {
    kind: "code",
    language: "text",
    code: "← Previous Lesson\n\nDashboard\n\nNext Lesson →\n\nData Binding"
  },
  {
    kind: "paragraph",
    text: "Later all lessons can navigate like a course."
  },
  {
    kind: "heading",
    level: 2,
    text: "14. 📚 Quick Reference (Missing)"
  },
  {
    kind: "paragraph",
    text: "This is something most tutorials don't have."
  },
  {
    kind: "code",
    language: "text",
    code: "Quick Reference\n\nGenerate Component\n\nng g c navbar\n\nSelector\n\n<app-navbar>\n\nDecorator\n\n@Component()\n\nTemplate\n\ntemplateUrl\n\nStyles\n\nstyleUrl"
  },
  {
    kind: "paragraph",
    text: "Whenever you forget, you won't need Google."
  },
  {
    kind: "heading",
    level: 2,
    text: "My final structure would be"
  },
  {
    kind: "code",
    language: "text",
    code: "📘 Lesson 1 - Components\n\n🎯 Objective\n\n📖 Before Angular\n\n💡 Angular's Solution\n\n📦 What is a Component?\n\n⚙️ Component Anatomy\n\n🔍 Understanding Each Part\n   • Import\n   • Decorator\n   • Selector\n   • Template\n   • Styles\n   • Component Class\n\n🎮 Interactive Demo\n\n🏢 Real Project Usage\n\n⚠️ Common Mistakes\n\n💻 Quick Reference\n\n❓ Interview Questions\n\n📝 Mini Challenge\n\n📌 Summary\n\n➡️ Next Lesson"
  },
  {
    kind: "paragraph",
    text: "The result won't just be notes—it will feel like a **premium Angular course** that you built yourself. After completing all the lessons, you'll have your own reference site that you can revisit whenever you need to refresh a concept. I think that's a much stronger long-term learning resource than a simple tutorial."
  }
];
