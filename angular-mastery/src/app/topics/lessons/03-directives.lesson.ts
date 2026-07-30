import { LessonBlock } from '../topic.model';

export const lesson03Directives: LessonBlock[] = [
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
      "What are Directives?",
      "Why Angular uses Directives",
      "Types of Directives",
      "Built-in Directives",
      "Attribute vs Structural Directives",
      "`@if`",
      "`@for`",
      "`@switch`",
      "`ngClass`",
      "`ngStyle`",
      "`ngClass` vs `ngStyle`",
      "Best Practices",
      "Common Mistakes",
      "Mini Challenge"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What are Directives?"
  },
  {
    kind: "paragraph",
    text: "A **Directive** is a feature in Angular that changes the appearance or behavior of HTML elements."
  },
  {
    kind: "paragraph",
    text: "Think of directives as **instructions** that tell Angular what to do with an element."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Show or hide an element",
      "Repeat an element",
      "Change styles dynamically",
      "Add or remove CSS classes",
      "Switch between different views"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Directives?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building a Student Dashboard."
  },
  {
    kind: "paragraph",
    text: "You want to:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Show a \"Login\" button only when the user is logged out.",
      "Display a list of students.",
      "Highlight students with low marks.",
      "Show different messages based on the student's grade."
    ]
  },
  {
    kind: "paragraph",
    text: "Without directives, you would need a lot of JavaScript to manipulate the DOM manually."
  },
  {
    kind: "paragraph",
    text: "Angular provides directives to make these tasks simple and declarative."
  },
  {
    kind: "heading",
    level: 2,
    text: "🔄 Types of Directives"
  },
  {
    kind: "paragraph",
    text: "Angular directives are grouped into three categories:"
  },
  {
    kind: "table",
    headers: [
      "Type",
      "Purpose",
      "Examples"
    ],
    rows: [
      [
        "**Component Directives**",
        "Create reusable UI",
        "Every Angular Component"
      ],
      [
        "**Structural Directives**",
        "Add or remove elements",
        "`@if`, `@for`, `@switch`"
      ],
      [
        "**Attribute Directives**",
        "Change appearance or behavior",
        "`ngClass`, `ngStyle`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🏗️ Structural vs Attribute Directives"
  },
  {
    kind: "paragraph",
    text: "**Structural Directives**"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Change the DOM structure.",
      "Add or remove elements."
    ]
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
    text: "**Attribute Directives**"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Do not remove elements.",
      "Change the appearance or behavior of existing elements."
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ngClass`",
      "`ngStyle`"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🚀 First Topic: `@if`"
  },
  {
    kind: "paragraph",
    text: "We'll begin with **`@if`**, the modern control flow syntax introduced in recent Angular versions."
  },
  {
    kind: "paragraph",
    text: "You'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What `@if` is",
      "Why Angular replaced `*ngIf`",
      "Syntax",
      "`@else`",
      "`@else if`",
      "Nested conditions",
      "Real-world examples",
      "Common mistakes",
      "Best practices"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "One recommendation"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What is a Directive?",
      "Why Angular uses Directives",
      "Types of Directives",
      "Component Directives",
      "Structural Directives",
      "Attribute Directives",
      "`ngClass`",
      "`ngStyle`",
      "Difference between Structural and Attribute Directives",
      "Real-world usage",
      "Common mistakes",
      "Best practices"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What is a Directive?"
  },
  {
    kind: "paragraph",
    text: "Imagine you have a normal HTML element."
  },
  {
    kind: "code",
    language: "html",
    code: "<button>Save</button>"
  },
  {
    kind: "paragraph",
    text: "HTML alone can display this button, but it cannot make it dynamic."
  },
  {
    kind: "paragraph",
    text: "What if you want to:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Hide the button?",
      "Change its color?",
      "Disable it?",
      "Add a CSS class dynamically?"
    ]
  },
  {
    kind: "paragraph",
    text: "Angular provides **Directives** to add behavior to HTML elements."
  },
  {
    kind: "paragraph",
    text: "A **Directive** is an instruction that tells Angular how to modify an element or how it should behave."
  },
  {
    kind: "paragraph",
    text: "Without directives, you would write JavaScript like:"
  },
  {
    kind: "code",
    language: "javascript",
    code: "button.classList.add('active');\n\nbutton.style.color = 'red';\n\nbutton.style.display = 'none';"
  },
  {
    kind: "paragraph",
    text: "As applications grow, manually manipulating the DOM becomes difficult."
  },
  {
    kind: "paragraph",
    text: "Angular provides directives to perform these tasks declaratively."
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Angular's Solution"
  },
  {
    kind: "paragraph",
    text: "Instead of writing JavaScript,"
  },
  {
    kind: "paragraph",
    text: "Angular lets you write"
  },
  {
    kind: "code",
    language: "html",
    code: "<div [ngClass]=\"isActive ? 'active' : ''\"></div>"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "html",
    code: "<div [ngStyle]=\"{ color: textColor }\"></div>"
  },
  {
    kind: "paragraph",
    text: "Angular updates the DOM automatically."
  },
  {
    kind: "paragraph",
    text: "Angular has **three types of directives**."
  },
  {
    kind: "table",
    headers: [
      "Type",
      "Purpose",
      "Example"
    ],
    rows: [
      [
        "Component Directive",
        "Creates a reusable UI",
        "Every Angular Component"
      ],
      [
        "Structural Directive",
        "Changes the DOM structure",
        "`@if`, `@for`, `@switch`"
      ],
      [
        "Attribute Directive",
        "Changes appearance or behavior",
        "`ngClass`, `ngStyle`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ Component Directives"
  },
  {
    kind: "paragraph",
    text: "Every Angular component is actually a directive with a template."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "text",
    code: "AppComponent\n\n↓\n\nNavbarComponent\n\n↓\n\nSidebarComponent\n\n↓\n\nDashboardComponent"
  },
  {
    kind: "paragraph",
    text: "Each component controls a part of the UI."
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Example"
  },
  {
    kind: "paragraph",
    text: "Think of YouTube."
  },
  {
    kind: "code",
    language: "text",
    code: "YouTube\n\n├── Navbar\n\n├── Sidebar\n\n├── Video Card\n\n├── Comments\n\n└── Footer"
  },
  {
    kind: "paragraph",
    text: "Each part is an Angular Component."
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ Structural Directives"
  },
  {
    kind: "paragraph",
    text: "Structural Directives change the structure of the DOM."
  },
  {
    kind: "paragraph",
    text: "They can:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Add elements",
      "Remove elements",
      "Repeat elements"
    ]
  },
  {
    kind: "quote",
    text: "**Note:** We'll study these in detail in **Lesson 4 – Control Flow**."
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
      "Show Login button only when the user is logged out.",
      "Display a list of employees.",
      "Show different content for Admin and User."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ Attribute Directives"
  },
  {
    kind: "paragraph",
    text: "Attribute Directives do not add or remove elements."
  },
  {
    kind: "paragraph",
    text: "Instead, they change the appearance or behavior of an existing element."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is ngClass?"
  },
  {
    kind: "paragraph",
    text: "`ngClass` adds or removes CSS classes dynamically."
  },
  {
    kind: "code",
    language: "html",
    code: "<div [ngClass]=\"isActive ? 'active' : 'inactive'\">\n\nStatus\n\n</div>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "isActive = true;"
  },
  {
    kind: "heading",
    level: 3,
    text: "Output"
  },
  {
    kind: "paragraph",
    text: "If `isActive` is true:"
  },
  {
    kind: "code",
    language: "text",
    code: "<div class=\"active\">\n\nStatus\n\n</div>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Real-world Uses"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Active sidebar menu",
      "Selected tab",
      "Error message",
      "Success message",
      "Online / Offline indicator"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "What is ngStyle?"
  },
  {
    kind: "paragraph",
    text: "`ngStyle` changes CSS styles dynamically."
  },
  {
    kind: "code",
    language: "html",
    code: "<div [ngStyle]=\"{ color: textColor }\">\n\nAngular\n\n</div>"
  },
  {
    kind: "code",
    language: "ts",
    code: "textColor = 'red';"
  },
  {
    kind: "paragraph",
    text: "Output:"
  },
  {
    kind: "paragraph",
    text: "Red-colored text."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Theme color",
      "Font size",
      "Background color",
      "Dynamic width",
      "Progress bar"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📊 ngClass vs ngStyle"
  },
  {
    kind: "table",
    headers: [
      "ngClass",
      "ngStyle"
    ],
    rows: [
      [
        "Adds or removes CSS classes",
        "Changes inline styles"
      ],
      [
        "Best for reusable styling",
        "Best for dynamic style values"
      ],
      [
        "Keeps CSS organized",
        "Useful for runtime styling"
      ]
    ]
  },
  {
    kind: "table",
    headers: [
      "Structural Directive",
      "Attribute Directive"
    ],
    rows: [
      [
        "Changes DOM structure",
        "Changes appearance or behavior"
      ],
      [
        "Adds or removes elements",
        "Modifies existing elements"
      ],
      [
        "Examples: `@if`, `@for`, `@switch`",
        "Examples: `ngClass`, `ngStyle`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Usage"
  },
  {
    kind: "table",
    headers: [
      "Feature",
      "Directive"
    ],
    rows: [
      [
        "Dashboard Card Color",
        "`ngClass`"
      ],
      [
        "Employee Status Badge",
        "`ngClass`"
      ],
      [
        "Progress Bar Color",
        "`ngStyle`"
      ],
      [
        "Theme Switcher",
        "`ngStyle`"
      ],
      [
        "Sidebar Highlight",
        "`ngClass`"
      ]
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
      "Using `ngStyle` when a CSS class would be cleaner.",
      "Putting too many styles directly in `ngStyle`.",
      "Writing complex expressions inside templates.",
      "Confusing Structural and Attribute Directives."
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
      "Use `ngClass` for applying CSS classes.",
      "Use `ngStyle` only for values that change dynamically.",
      "Keep styling logic simple.",
      "Move complex logic into the component.",
      "Use CSS classes whenever possible for maintainability."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Build a **Student Dashboard**."
  },
  {
    kind: "paragraph",
    text: "Requirements:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Display three student cards.",
      "Use `ngClass` to highlight the selected student.",
      "Use `ngStyle` to change the background color based on the student's grade.",
      "Think about where a Structural Directive would be useful (don't implement it yet—we'll do that in Lesson 4)."
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
      "Directives extend HTML with Angular behavior.",
      "Angular has three types of directives:",
      "Component Directives",
      "Structural Directives",
      "Attribute Directives",
      "Structural Directives change the DOM structure.",
      "Attribute Directives change the appearance or behavior of existing elements.",
      "`ngClass` manages CSS classes dynamically.",
      "`ngStyle` manages inline styles dynamically."
    ]
  }
];
