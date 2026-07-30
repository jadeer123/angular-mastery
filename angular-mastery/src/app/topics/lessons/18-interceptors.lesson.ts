import { LessonBlock } from '../topic.model';

export const lesson18Interceptors: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "First, What is an Interceptor?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're working in HRMS."
  },
  {
    kind: "paragraph",
    text: "You have 100 API calls."
  },
  {
    kind: "code",
    language: "text",
    code: "Login API\n\nGet Employees API\n\nAdd Employee API\n\nDelete Employee API\n\nLeave API\n\nAttendance API\n\nSalary API\n\n..."
  },
  {
    kind: "paragraph",
    text: "Every API needs this header."
  },
  {
    kind: "code",
    language: "http",
    code: "Authorization: Bearer eyJhbGci..."
  },
  {
    kind: "paragraph",
    text: "Question:"
  },
  {
    kind: "paragraph",
    text: "Should you write this in all 100 API calls?"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get(url,{\n headers:{\n   Authorization:'Bearer token'\n }\n});"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "That would be repetitive and hard to maintain."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine you're entering an office."
  },
  {
    kind: "code",
    language: "text",
    code: "You\n\n↓\n\nSecurity Guard\n\n↓\n\nOffice"
  },
  {
    kind: "paragraph",
    text: "Before entering,"
  },
  {
    kind: "paragraph",
    text: "the security guard checks"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "ID Card ✅",
      "Bag ✅"
    ]
  },
  {
    kind: "paragraph",
    text: "Then allows you inside."
  },
  {
    kind: "paragraph",
    text: "You never skip the security guard."
  },
  {
    kind: "paragraph",
    text: "Every person passes through the same checkpoint."
  },
  {
    kind: "paragraph",
    text: "An **Interceptor** is like that security guard."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Interceptor"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nService\n\n↓\n\nAPI"
  },
  {
    kind: "heading",
    level: 2,
    text: "With Interceptor"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nService\n\n↓\n\nInterceptor\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "Every request passes through the interceptor first."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Suppose we call"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get('/employees');"
  },
  {
    kind: "paragraph",
    text: "Angular doesn't send it immediately."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "code",
    language: "text",
    code: "GET /employees\n\n↓\n\nInterceptor\n\n↓\n\nAdds Token\n\n↓\n\nAPI"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1"
  },
  {
    kind: "paragraph",
    text: "Normal API"
  },
  {
    kind: "code",
    language: "ts",
    code: "getEmployees(){\n\n   return this.http.get('/api/employees');\n\n}"
  },
  {
    kind: "paragraph",
    text: "Notice"
  },
  {
    kind: "paragraph",
    text: "No Authorization Header."
  },
  {
    kind: "paragraph",
    text: "Still,"
  },
  {
    kind: "paragraph",
    text: "the token reaches the backend."
  },
  {
    kind: "paragraph",
    text: "How?"
  },
  {
    kind: "paragraph",
    text: "Interceptor."
  },
  {
    kind: "heading",
    level: 2,
    text: "Interceptor Code"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authInterceptor: HttpInterceptorFn =\n(req, next) => {\n\n  return next(req);\n\n};"
  },
  {
    kind: "paragraph",
    text: "Looks confusing?"
  },
  {
    kind: "paragraph",
    text: "Let's understand each part."
  },
  {
    kind: "heading",
    level: 2,
    text: "req"
  },
  {
    kind: "paragraph",
    text: "This is the outgoing request."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "text",
    code: "GET\n\n/api/employees"
  },
  {
    kind: "paragraph",
    text: "Angular gives this request to the interceptor."
  },
  {
    kind: "heading",
    level: 2,
    text: "next"
  },
  {
    kind: "paragraph",
    text: "Think of it as"
  },
  {
    kind: "quote",
    text: "Continue the request."
  },
  {
    kind: "paragraph",
    text: "If you don't call"
  },
  {
    kind: "code",
    language: "ts",
    code: "next(req)"
  },
  {
    kind: "paragraph",
    text: "the request never reaches the server."
  },
  {
    kind: "paragraph",
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Request\n\n↓\n\nInterceptor\n\n↓\n\nnext(req)\n\n↓\n\nServer"
  },
  {
    kind: "paragraph",
    text: "Suppose user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Load Employees"
  },
  {
    kind: "paragraph",
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.getEmployees();"
  },
  {
    kind: "paragraph",
    text: "Service"
  },
  {
    kind: "paragraph",
    text: "Before reaching the server"
  },
  {
    kind: "paragraph",
    text: "Angular says"
  },
  {
    kind: "code",
    language: "text",
    code: "Wait...\n\nLet Interceptor inspect it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Interceptor Receives"
  },
  {
    kind: "code",
    language: "text",
    code: "GET /employees"
  },
  {
    kind: "paragraph",
    text: "Now it can"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Modify it",
      "Cancel it",
      "Log it",
      "Add headers"
    ]
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "ts",
    code: "return next(req);"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Page\n\n↓\n\nGET /employees\n\n↓\n\nInterceptor\n\n↓\n\nAdd JWT Token\n\n↓\n\nServer\n\n↓\n\nEmployee List"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is req Immutable?"
  },
  {
    kind: "paragraph",
    text: "Why can't we do this?"
  },
  {
    kind: "code",
    language: "ts",
    code: "req.headers.set(...)"
  },
  {
    kind: "paragraph",
    text: "Because Angular makes requests **immutable** (read-only)."
  },
  {
    kind: "paragraph",
    text: "Instead, create a copy."
  },
  {
    kind: "code",
    language: "ts",
    code: "const cloned = req.clone({\n  setHeaders:{\n     Authorization:'Bearer token'\n  }\n});"
  },
  {
    kind: "paragraph",
    text: "Now"
  },
  {
    kind: "code",
    language: "text",
    code: "Original Request\n\n↓\n\nClone\n\n↓\n\nAdd Header\n\n↓\n\nSend Clone"
  },
  {
    kind: "paragraph",
    text: "The original request remains unchanged."
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authInterceptor: HttpInterceptorFn =\n(req, next) => {\n\n  const cloned = req.clone({\n\n    setHeaders:{\n      Authorization:'Bearer token'\n    }\n\n  });\n\n  return next(cloned);\n\n};"
  },
  {
    kind: "paragraph",
    text: "Now every request automatically gets"
  },
  {
    kind: "code",
    language: "http",
    code: "Authorization: Bearer token"
  },
  {
    kind: "heading",
    level: 2,
    text: "Visual Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "GET /employees\n\n        │\n\n        ▼\n\nInterceptor\n\n        │\n\n        ▼\n\nClone Request\n\n        │\n\n        ▼\n\nAdd Header\n\n        │\n\n        ▼\n\nnext(cloned)\n\n        │\n\n        ▼\n\nServer"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose user opens"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "code",
    language: "ts",
    code: "getEmployees()"
  },
  {
    kind: "code",
    language: "http",
    code: "Authorization: Bearer xxxxx"
  },
  {
    kind: "paragraph",
    text: "Backend"
  },
  {
    kind: "paragraph",
    text: "Returns Employees"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is this useful?"
  },
  {
    kind: "paragraph",
    text: "Imagine 200 API calls."
  },
  {
    kind: "paragraph",
    text: "Without Interceptor"
  },
  {
    kind: "code",
    language: "text",
    code: "API 1\n\nAdd Header\n\nAPI 2\n\nAdd Header\n\nAPI 3\n\nAdd Header\n\n...\n\nAPI 200\n\nAdd Header"
  },
  {
    kind: "paragraph",
    text: "A lot of duplicate code."
  },
  {
    kind: "paragraph",
    text: "With an Interceptor"
  },
  {
    kind: "code",
    language: "text",
    code: "One Interceptor\n\n↓\n\nAll APIs\n\n↓\n\nHeader Added Automatically"
  },
  {
    kind: "paragraph",
    text: "One place to manage authentication."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "table",
    headers: [
      "Term",
      "Meaning"
    ],
    rows: [
      [
        "`req`",
        "The outgoing HTTP request"
      ],
      [
        "`next(req)`",
        "Sends the request to the next step"
      ],
      [
        "`req.clone()`",
        "Creates a modified copy of the request"
      ],
      [
        "`setHeaders`",
        "Adds or updates request headers"
      ],
      [
        "Interceptor",
        "Runs before every request (and can also inspect every response)"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "🎯 Interview Question"
  },
  {
    kind: "paragraph",
    text: "**Q:** Why do we use an HTTP Interceptor instead of adding headers in every service?"
  },
  {
    kind: "paragraph",
    text: "**Answer:**"
  },
  {
    kind: "paragraph",
    text: "Because an Interceptor runs for **every HTTP request**. We write the logic once (for example, adding a JWT token), and Angular automatically applies it to all requests. This keeps the code clean, avoids duplication, and makes future changes much easier."
  },
  {
    kind: "paragraph",
    text: "We'll build a **real JWT Authentication Interceptor** that:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Reads the token from `localStorage`.",
      "Adds `Authorization: Bearer <token>` only if a token exists.",
      "Skips adding the header for the login API."
    ]
  },
  {
    kind: "paragraph",
    text: "This is the pattern you'll use in almost every production Angular application."
  },
  {
    kind: "heading",
    level: 2,
    text: "Problem"
  },
  {
    kind: "paragraph",
    text: "Now the user opens Employee List."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get('/api/employees');"
  },
  {
    kind: "paragraph",
    text: "Backend expects"
  },
  {
    kind: "code",
    language: "http",
    code: "Authorization: Bearer abc123xyz"
  },
  {
    kind: "paragraph",
    text: "But we never added it."
  },
  {
    kind: "paragraph",
    text: "Without an interceptor we'd have to do"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get('/api/employees', {\n  headers: {\n    Authorization: 'Bearer abc123xyz'\n  }\n});"
  },
  {
    kind: "paragraph",
    text: "Imagine writing that for **100 APIs**."
  },
  {
    kind: "paragraph",
    text: "❌ Bad practice."
  },
  {
    kind: "heading",
    level: 2,
    text: "Solution"
  },
  {
    kind: "paragraph",
    text: "Create one interceptor."
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g interceptor auth"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "auth.interceptor.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 - Read Token"
  },
  {
    kind: "code",
    language: "ts",
    code: "const token = localStorage.getItem('token');"
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "text",
    code: "localStorage\n\n↓\n\ntoken\n\n↓\n\nabc123xyz"
  },
  {
    kind: "code",
    language: "ts",
    code: "token"
  },
  {
    kind: "paragraph",
    text: "contains"
  },
  {
    kind: "code",
    language: "text",
    code: "abc123xyz"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 - Check Token"
  },
  {
    kind: "paragraph",
    text: "What if the user isn't logged in?"
  },
  {
    kind: "code",
    language: "text",
    code: "token = null"
  },
  {
    kind: "paragraph",
    text: "So first check"
  },
  {
    kind: "code",
    language: "ts",
    code: "if (!token) {\n  return next(req);\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Token Exists?\n\n       │\n\n   No ─────► Send Request Normally\n\n       │\n\n      Yes\n\n       ▼\n\nAdd Authorization Header"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3 - Clone Request"
  },
  {
    kind: "paragraph",
    text: "Remember,"
  },
  {
    kind: "paragraph",
    text: "Requests are immutable."
  },
  {
    kind: "paragraph",
    text: "So"
  },
  {
    kind: "paragraph",
    text: "Now request becomes"
  },
  {
    kind: "code",
    language: "http",
    code: "GET /employees\n\nAuthorization: Bearer abc123xyz"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 4 - Continue Request"
  },
  {
    kind: "code",
    language: "ts",
    code: "return next(cloned);"
  },
  {
    kind: "paragraph",
    text: "Done."
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Interceptor"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authInterceptor: HttpInterceptorFn = (req, next) => {\n\n  const token = localStorage.getItem('token');\n\n  if (!token) {\n    return next(req);\n  }\n\n  const cloned = req.clone({\n    setHeaders: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n\n  return next(cloned);\n\n};"
  },
  {
    kind: "paragraph",
    text: "This is almost exactly what you'll see in production projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens Employee Page\n\n        │\n\n        ▼\n\nEmployeeService\n\n        │\n\n        ▼\n\nGET /employees\n\n        │\n\n        ▼\n\nInterceptor\n\n        │\n\n        ▼\n\nRead Token\n\n        │\n\n        ▼\n\nClone Request\n\n        │\n\n        ▼\n\nAuthorization Added\n\n        │\n\n        ▼\n\nBackend"
  },
  {
    kind: "heading",
    level: 2,
    text: "But There's a Problem 🤔"
  },
  {
    kind: "paragraph",
    text: "Suppose user clicks Login."
  },
  {
    kind: "paragraph",
    text: "Login request"
  },
  {
    kind: "code",
    language: "http",
    code: "POST /login"
  },
  {
    kind: "paragraph",
    text: "Should we attach"
  },
  {
    kind: "paragraph",
    text: "The user isn't logged in yet."
  },
  {
    kind: "paragraph",
    text: "So we skip login APIs."
  },
  {
    kind: "heading",
    level: 2,
    text: "Skip Login API"
  },
  {
    kind: "code",
    language: "ts",
    code: "if (req.url.includes('/login')) {\n  return next(req);\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Request\n\n      │\n\nIs Login API?\n\n      │\n\nYes ─────► Skip Header\n\n      │\n\nNo\n\n      ▼\n\nAdd JWT Header"
  },
  {
    kind: "heading",
    level: 2,
    text: "Updated Interceptor"
  },
  {
    kind: "code",
    language: "ts",
    code: "export const authInterceptor: HttpInterceptorFn = (req, next) => {\n\n  if (req.url.includes('/login')) {\n    return next(req);\n  }\n\n  const token = localStorage.getItem('token');\n\n  if (!token) {\n    return next(req);\n  }\n\n  const cloned = req.clone({\n    setHeaders: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n\n  return next(cloned);\n\n};"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "User Journey"
  },
  {
    kind: "code",
    language: "text",
    code: "Login\n\n↓\n\nBackend Returns Token\n\n↓\n\nStore in localStorage\n\n↓\n\nDashboard Opens\n\n↓\n\nEmployee API\n\n↓\n\nInterceptor\n\n↓\n\nAuthorization Added\n\n↓\n\nBackend Returns Employees"
  },
  {
    kind: "paragraph",
    text: "The component never worries about authentication."
  },
  {
    kind: "paragraph",
    text: "It simply calls"
  },
  {
    kind: "paragraph",
    text: "The interceptor handles the rest."
  },
  {
    kind: "heading",
    level: 2,
    text: "Register the Interceptor"
  },
  {
    kind: "paragraph",
    text: "Creating the interceptor isn't enough."
  },
  {
    kind: "paragraph",
    text: "Angular must know to use it."
  },
  {
    kind: "paragraph",
    text: "In `app.config.ts`"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { provideHttpClient, withInterceptors } from '@angular/common/http';\nimport { authInterceptor } from './auth.interceptor';\n\nexport const appConfig = {\n  providers: [\n    provideHttpClient(\n      withInterceptors([\n        authInterceptor\n      ])\n    )\n  ]\n};"
  },
  {
    kind: "paragraph",
    text: "Now **every** `HttpClient` request passes through `authInterceptor`."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Request Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nEmployeeService\n\n↓\n\nHttpClient\n\n↓\n\nAuth Interceptor\n\n↓\n\nBackend\n\n↓\n\nResponse\n\n↓\n\nComponent"
  },
  {
    kind: "heading",
    level: 2,
    text: "Quick Interview Questions ⭐"
  },
  {
    kind: "heading",
    level: 3,
    text: "Q1. Why do we use `req.clone()`?"
  },
  {
    kind: "paragraph",
    text: "Because `HttpRequest` is **immutable**. We can't modify the original request, so we create a modified copy."
  },
  {
    kind: "heading",
    level: 3,
    text: "Q2. Where do we register an interceptor?"
  },
  {
    kind: "paragraph",
    text: "In `provideHttpClient(withInterceptors([...]))`."
  },
  {
    kind: "heading",
    level: 3,
    text: "Q3. How many authentication interceptors should an application usually have?"
  },
  {
    kind: "paragraph",
    text: "Typically **one**. That single interceptor handles adding authentication headers for all outgoing requests."
  },
  {
    kind: "table",
    headers: [
      "Step",
      "What Happens"
    ],
    rows: [
      [
        "1",
        "User logs in"
      ],
      [
        "2",
        "Token is stored in `localStorage`"
      ],
      [
        "3",
        "Component calls an API"
      ],
      [
        "4",
        "Interceptor reads the token"
      ],
      [
        "5",
        "Interceptor clones the request"
      ],
      [
        "6",
        "`Authorization: Bearer <token>` is added"
      ],
      [
        "7",
        "Backend receives the authenticated request"
      ]
    ]
  }
];
