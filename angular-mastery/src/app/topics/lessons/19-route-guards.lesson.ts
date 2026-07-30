import { LessonBlock } from '../topic.model';

export const lesson19RouteGuards: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "First Question"
  },
  {
    kind: "paragraph",
    text: "Suppose your HRMS has these pages."
  },
  {
    kind: "code",
    language: "text",
    code: "/login\n\n/dashboard\n\n/employees\n\n/salary"
  },
  {
    kind: "paragraph",
    text: "When the application starts,"
  },
  {
    kind: "paragraph",
    text: "everyone first sees"
  },
  {
    kind: "code",
    language: "text",
    code: "/login"
  },
  {
    kind: "paragraph",
    text: "User enters username and password."
  },
  {
    kind: "paragraph",
    text: "If login is successful,"
  },
  {
    kind: "paragraph",
    text: "Angular navigates to"
  },
  {
    kind: "code",
    language: "text",
    code: "/dashboard"
  },
  {
    kind: "paragraph",
    text: "Everything looks good."
  },
  {
    kind: "heading",
    level: 2,
    text: "But there's a problem 🤔"
  },
  {
    kind: "paragraph",
    text: "Suppose another user doesn't log in."
  },
  {
    kind: "paragraph",
    text: "Instead, they manually type"
  },
  {
    kind: "code",
    language: "text",
    code: "http://localhost:4200/dashboard"
  },
  {
    kind: "paragraph",
    text: "Should Angular allow it?"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "Only logged-in users should see the dashboard."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Route Guard"
  },
  {
    kind: "code",
    language: "text",
    code: "User\n\n      │\n\nTypes\n\n/dashboard\n\n      │\n\n      ▼\n\nDashboard Opens ❌"
  },
  {
    kind: "paragraph",
    text: "Anyone can access the page."
  },
  {
    kind: "heading",
    level: 2,
    text: "With Route Guard"
  },
  {
    kind: "code",
    language: "text",
    code: "User\n\n      │\n\nTypes\n\n/ dashboard\n\n      │\n\n      ▼\n\nRoute Guard\n\n      │\n\nLogged In?\n\n   │          │\n\n No          Yes\n\n │            │\n\n ▼            ▼\n\nLogin     Dashboard"
  },
  {
    kind: "paragraph",
    text: "Think of a Route Guard as a **security guard outside a room**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine a company office."
  },
  {
    kind: "code",
    language: "text",
    code: "Office\n\n↓\n\nReception\n\n↓\n\nEmployee Area"
  },
  {
    kind: "paragraph",
    text: "Before entering,"
  },
  {
    kind: "paragraph",
    text: "the receptionist asks"
  },
  {
    kind: "quote",
    text: "\"Do you have an ID card?\""
  },
  {
    kind: "paragraph",
    text: "If yes"
  },
  {
    kind: "paragraph",
    text: "✅ Enter"
  },
  {
    kind: "paragraph",
    text: "If no"
  },
  {
    kind: "paragraph",
    text: "❌ Go back."
  },
  {
    kind: "paragraph",
    text: "Angular Route Guard works exactly like this."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 - Create Guard"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g guard auth"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "auth.guard.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 - Guard Function"
  },
  {
    kind: "paragraph",
    text: "Angular 17+ uses functional guards."
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authGuard: CanActivateFn =\n(route, state) => {\n\n};"
  },
  {
    kind: "paragraph",
    text: "Don't worry about the syntax."
  },
  {
    kind: "paragraph",
    text: "Let's understand the idea."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular asks the Guard"
  },
  {
    kind: "paragraph",
    text: "User wants"
  },
  {
    kind: "paragraph",
    text: "Angular asks"
  },
  {
    kind: "code",
    language: "text",
    code: "Can this user activate\nDashboardComponent?"
  },
  {
    kind: "paragraph",
    text: "Your guard answers"
  },
  {
    kind: "code",
    language: "text",
    code: "Yes\n\nor\n\nNo"
  },
  {
    kind: "heading",
    level: 2,
    text: "Simplest Guard"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authGuard: CanActivateFn = () => {\n\n   return true;\n\n};"
  },
  {
    kind: "paragraph",
    text: "Meaning"
  },
  {
    kind: "code",
    language: "text",
    code: "Allow everyone."
  },
  {
    kind: "paragraph",
    text: "If we write"
  },
  {
    kind: "code",
    language: "ts",
    code: "return false;"
  },
  {
    kind: "code",
    language: "text",
    code: "Allow nobody."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Authentication"
  },
  {
    kind: "paragraph",
    text: "Suppose after login we store"
  },
  {
    kind: "code",
    language: "ts",
    code: "localStorage.setItem('token', token);"
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "ts",
    code: "const token = localStorage.getItem('token');"
  },
  {
    kind: "paragraph",
    text: "If token exists"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Allow."
  },
  {
    kind: "paragraph",
    text: "Otherwise"
  },
  {
    kind: "paragraph",
    text: "Block."
  },
  {
    kind: "heading",
    level: 2,
    text: "Guard Code"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authGuard: CanActivateFn = () => {\n\n  const token = localStorage.getItem('token');\n\n  return !!token;\n\n};"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `!!`?"
  },
  {
    kind: "paragraph",
    text: "This confuses many beginners."
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "text",
    code: "token = \"abc123\""
  },
  {
    kind: "code",
    language: "ts",
    code: "!!token"
  },
  {
    kind: "paragraph",
    text: "becomes"
  },
  {
    kind: "code",
    language: "text",
    code: "true"
  },
  {
    kind: "code",
    language: "text",
    code: "token = null"
  },
  {
    kind: "code",
    language: "text",
    code: "false"
  },
  {
    kind: "paragraph",
    text: "It's simply converting a value into a boolean."
  },
  {
    kind: "paragraph",
    text: "Equivalent to"
  },
  {
    kind: "code",
    language: "ts",
    code: "if (token) {\n   return true;\n}\n\nreturn false;"
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens\n\n/dashboard\n\n        │\n\n        ▼\n\nRoute Guard\n\n        │\n\nRead Token\n\n        │\n\nToken Exists?\n\n   │          │\n\n No          Yes\n\n │            │\n\n ▼            ▼\n\nBlocked     Dashboard Opens"
  },
  {
    kind: "heading",
    level: 2,
    text: "But We Have Another Problem"
  },
  {
    kind: "paragraph",
    text: "If the guard returns"
  },
  {
    kind: "code",
    language: "ts",
    code: "false"
  },
  {
    kind: "paragraph",
    text: "The user stays on a blank page."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "we want"
  },
  {
    kind: "code",
    language: "text",
    code: "No Token\n\n↓\n\nRedirect\n\n↓\n\n/login"
  },
  {
    kind: "heading",
    level: 2,
    text: "Inject Router"
  },
  {
    kind: "code",
    language: "ts",
    code: "const router = inject(Router);"
  },
  {
    kind: "paragraph",
    text: "Now we can navigate."
  },
  {
    kind: "code",
    language: "ts",
    code: "router.navigate(['/login']);"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Guard"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authGuard: CanActivateFn = () => {\n\n  const router = inject(Router);\n\n  const token = localStorage.getItem('token');\n\n  if (token) {\n    return true;\n  }\n\n  router.navigate(['/login']);\n\n  return false;\n\n};"
  },
  {
    kind: "code",
    language: "text",
    code: "User Types\n\n/dashboard\n\n        │\n\n        ▼\n\nGuard\n\n        │\n\nToken?\n\n     │       │\n\n    No      Yes\n\n     │       │\n\n     ▼       ▼\n\nNavigate    Dashboard\n\n/login"
  },
  {
    kind: "heading",
    level: 2,
    text: "Use Guard in Routes"
  },
  {
    kind: "paragraph",
    text: "Without Guard"
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'dashboard',\n  component: DashboardComponent\n}"
  },
  {
    kind: "paragraph",
    text: "Protected Route"
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'dashboard',\n  component: DashboardComponent,\n  canActivate: [authGuard]\n}"
  },
  {
    kind: "paragraph",
    text: "Now every time someone tries to open"
  },
  {
    kind: "paragraph",
    text: "Angular first runs"
  },
  {
    kind: "code",
    language: "text",
    code: "authGuard"
  },
  {
    kind: "paragraph",
    text: "Only if it returns `true` will the page open."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Employee tries"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees"
  },
  {
    kind: "paragraph",
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees Page\n\n        │\n\n        ▼\n\nAuth Guard\n\n        │\n\nToken Found?\n\n        │\n\n      Yes\n\n        ▼\n\nEmployee List Opens"
  },
  {
    kind: "paragraph",
    text: "Another user"
  },
  {
    kind: "code",
    language: "text",
    code: "/salary"
  },
  {
    kind: "paragraph",
    text: "without logging in"
  },
  {
    kind: "code",
    language: "text",
    code: "Salary Page\n\n        │\n\n        ▼\n\nAuth Guard\n\n        │\n\nNo Token\n\n        ▼\n\nRedirect\n\n/login"
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Guard vs Interceptor"
  },
  {
    kind: "paragraph",
    text: "This is a very common interview question."
  },
  {
    kind: "table",
    headers: [
      "Route Guard",
      "Interceptor"
    ],
    rows: [
      [
        "Protects Angular pages",
        "Protects HTTP requests"
      ],
      [
        "Runs before navigation",
        "Runs before API calls"
      ],
      [
        "Redirects users",
        "Adds headers, handles responses"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "text",
    code: "User\n\n↓\n\nOpen Dashboard\n\n↓\n\nRoute Guard\n\n↓\n\nDashboard Opens\n\n↓\n\nDashboard Calls API\n\n↓\n\nInterceptor\n\n↓\n\nJWT Added\n\n↓\n\nBackend"
  },
  {
    kind: "paragraph",
    text: "Notice:"
  },
  {
    kind: "paragraph",
    text: "The **Guard** runs **before the page opens**."
  },
  {
    kind: "paragraph",
    text: "The **Interceptor** runs **when the page makes an HTTP request**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "table",
    headers: [
      "Step",
      "What Happens"
    ],
    rows: [
      [
        "User enters a URL",
        "Angular checks the route"
      ],
      [
        "`canActivate` runs",
        "Guard executes"
      ],
      [
        "Token exists",
        "Return `true` → Open page"
      ],
      [
        "No token",
        "Redirect to `/login` and return `false`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Interview Questions ⭐"
  },
  {
    kind: "heading",
    level: 3,
    text: "Q1. Why do we use Route Guards?"
  },
  {
    kind: "paragraph",
    text: "To prevent unauthorized users from navigating to protected pages."
  },
  {
    kind: "heading",
    level: 3,
    text: "Q2. Can a Route Guard protect APIs?"
  },
  {
    kind: "paragraph",
    text: "It only protects Angular routes."
  },
  {
    kind: "paragraph",
    text: "API security must be enforced by the backend. An interceptor can add authentication headers, but the backend must still validate them."
  },
  {
    kind: "heading",
    level: 3,
    text: "Q3. Can we have multiple guards?"
  },
  {
    kind: "paragraph",
    text: "Yes."
  },
  {
    kind: "code",
    language: "ts",
    code: "canActivate: [\n   authGuard,\n   adminGuard\n]"
  },
  {
    kind: "paragraph",
    text: "Angular runs them in order. If any guard blocks navigation, the route won't activate."
  }
];
