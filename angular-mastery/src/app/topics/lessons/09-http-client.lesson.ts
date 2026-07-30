import { LessonBlock } from '../topic.model';

export const lesson09HttpClient: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is HTTP?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building an HRMS application."
  },
  {
    kind: "paragraph",
    text: "The Dashboard opens."
  },
  {
    kind: "paragraph",
    text: "It needs:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employee Count",
      "Leave Count",
      "Attendance",
      "Notifications"
    ]
  },
  {
    kind: "paragraph",
    text: "Where does this information come from?"
  },
  {
    kind: "paragraph",
    text: "Does Angular already know it?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "It must ask the backend."
  },
  {
    kind: "paragraph",
    text: "The communication between Angular and the backend happens using **HTTP**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need HTTP?"
  },
  {
    kind: "paragraph",
    text: "Imagine your application has 2,000 employees."
  },
  {
    kind: "paragraph",
    text: "Angular cannot store all employee data permanently."
  },
  {
    kind: "paragraph",
    text: "Instead, whenever information is needed, Angular asks the server."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Application\n\n↓\n\nRequest\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nAngular Displays Data"
  },
  {
    kind: "paragraph",
    text: "Without HTTP,"
  },
  {
    kind: "paragraph",
    text: "Angular would have no way to communicate with the server."
  },
  {
    kind: "heading",
    level: 2,
    text: "🏪 Think of a Restaurant"
  },
  {
    kind: "paragraph",
    text: "Imagine you're sitting in a restaurant."
  },
  {
    kind: "paragraph",
    text: "You want food."
  },
  {
    kind: "paragraph",
    text: "Do you go into the kitchen?"
  },
  {
    kind: "paragraph",
    text: "You tell the waiter."
  },
  {
    kind: "code",
    language: "text",
    code: "Customer\n\n↓\n\nWaiter\n\n↓\n\nChef\n\n↓\n\nFood\n\n↓\n\nCustomer"
  },
  {
    kind: "paragraph",
    text: "The waiter carries your request to the kitchen."
  },
  {
    kind: "paragraph",
    text: "The chef prepares the food."
  },
  {
    kind: "paragraph",
    text: "The waiter brings it back."
  },
  {
    kind: "paragraph",
    text: "HTTP works exactly the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nHTTP Request\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nHTTP Response\n\n↓\n\nAngular"
  },
  {
    kind: "heading",
    level: 2,
    text: "💼 HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Dashboard opens."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nNeed Employee Count\n\n↓\n\nHTTP Request\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nEmployee Count = 120\n\n↓\n\nDashboard Displays 120"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a Request?"
  },
  {
    kind: "paragraph",
    text: "A **Request** is a message sent from Angular to the server asking it to perform an operation."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Give me all employees.",
      "Save this employee.",
      "Update this employee.",
      "Delete this employee."
    ]
  },
  {
    kind: "paragraph",
    text: "Think of a request as **asking a question**."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is a Response?"
  },
  {
    kind: "paragraph",
    text: "After the server receives the request, it processes it and sends a reply."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nGet Employees\n\n↓\n\nBackend\n\n↓\n\nEmployee List\n\n↓\n\nAngular"
  },
  {
    kind: "paragraph",
    text: "The reply from the server is called a **Response**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Request–Response Cycle"
  },
  {
    kind: "paragraph",
    text: "Every HTTP communication follows the same cycle."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nRequest\n\n↓\n\nServer\n\n↓\n\nProcess Request\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nAngular Updates UI"
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Examples"
  },
  {
    kind: "heading",
    level: 3,
    text: "YouTube"
  },
  {
    kind: "code",
    language: "text",
    code: "Open Home Page\n\n↓\n\nHTTP Request\n\n↓\n\nVideo API\n\n↓\n\nRecommended Videos\n\n↓\n\nDisplay Videos"
  },
  {
    kind: "heading",
    level: 3,
    text: "Amazon"
  },
  {
    kind: "code",
    language: "text",
    code: "Search Laptop\n\n↓\n\nHTTP Request\n\n↓\n\nProducts API\n\n↓\n\nMatching Products\n\n↓\n\nDisplay Products"
  },
  {
    kind: "heading",
    level: 3,
    text: "Banking"
  },
  {
    kind: "code",
    language: "text",
    code: "View Balance\n\n↓\n\nHTTP Request\n\n↓\n\nBank API\n\n↓\n\nCurrent Balance\n\n↓\n\nDisplay Balance"
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS"
  },
  {
    kind: "code",
    language: "text",
    code: "Open Employees\n\n↓\n\nHTTP Request\n\n↓\n\nEmployee API\n\n↓\n\nEmployee List\n\n↓\n\nDisplay Employees"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Doesn't Angular Talk Directly to the Database?"
  },
  {
    kind: "paragraph",
    text: "Some beginners ask:"
  },
  {
    kind: "quote",
    text: "\"Why can't Angular connect directly to MySQL or PostgreSQL?\""
  },
  {
    kind: "paragraph",
    text: "Because that would expose your database to every user."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nBackend API\n\n↓\n\nDatabase"
  },
  {
    kind: "paragraph",
    text: "The backend validates requests, checks permissions, applies business rules, and protects the database."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ HTTP is the communication protocol between Angular and the backend."
  },
  {
    kind: "paragraph",
    text: "✔ Angular sends **Requests**."
  },
  {
    kind: "paragraph",
    text: "✔ The backend processes them and sends **Responses**."
  },
  {
    kind: "paragraph",
    text: "✔ Angular never communicates directly with the database."
  },
  {
    kind: "heading",
    level: 2,
    text: "Next"
  },
  {
    kind: "paragraph",
    text: "We'll continue with **HttpClient**, where you'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What `HttpClient` is",
      "Why Angular provides it",
      "How to configure it",
      "Why we use it instead of the browser's `fetch()` API",
      "How it works with Services and Dependency Injection"
    ]
  },
  {
    kind: "paragraph",
    text: "The next natural question is:"
  },
  {
    kind: "quote",
    text: "**\"How does Angular actually send HTTP requests?\"**"
  },
  {
    kind: "paragraph",
    text: "The answer is **HttpClient**."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 What is HttpClient?"
  },
  {
    kind: "paragraph",
    text: "We know Angular communicates with the backend using HTTP."
  },
  {
    kind: "paragraph",
    text: "But does Angular send HTTP requests by itself?"
  },
  {
    kind: "paragraph",
    text: "Angular provides a service called **HttpClient**."
  },
  {
    kind: "paragraph",
    text: "It is responsible for sending HTTP requests and receiving responses."
  },
  {
    kind: "paragraph",
    text: "Think of it as a messenger between your Angular application and the backend."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need HttpClient?"
  },
  {
    kind: "paragraph",
    text: "Imagine your Dashboard opens."
  },
  {
    kind: "paragraph",
    text: "It needs employee data."
  },
  {
    kind: "paragraph",
    text: "Should the Dashboard component directly communicate with the server?"
  },
  {
    kind: "paragraph",
    text: "it asks HttpClient."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nDashboard"
  },
  {
    kind: "heading",
    level: 2,
    text: "📮 Think of a Courier Service"
  },
  {
    kind: "paragraph",
    text: "Imagine you want to send a parcel."
  },
  {
    kind: "paragraph",
    text: "Do you personally travel to another city to deliver it?"
  },
  {
    kind: "paragraph",
    text: "You use a courier company."
  },
  {
    kind: "code",
    language: "text",
    code: "You\n\n↓\n\nCourier\n\n↓\n\nReceiver\n\n↓\n\nReply\n\n↓\n\nYou"
  },
  {
    kind: "paragraph",
    text: "The courier carries your parcel and brings the response back."
  },
  {
    kind: "paragraph",
    text: "HttpClient works exactly the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nResponse\n\n↓\n\nAngular"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nHttpClient\n\n↓\n\nEmployee API\n\n↓\n\nDatabase\n\n↓\n\nEmployee List\n\n↓\n\nDashboard"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "The Dashboard never talks directly to the backend."
  },
  {
    kind: "paragraph",
    text: "Everything goes through HttpClient."
  },
  {
    kind: "heading",
    level: 2,
    text: "Where is HttpClient Used?"
  },
  {
    kind: "paragraph",
    text: "In Angular,"
  },
  {
    kind: "paragraph",
    text: "HttpClient is usually used **inside Services**, not inside Components."
  },
  {
    kind: "paragraph",
    text: "Good architecture looks like this."
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API"
  },
  {
    kind: "paragraph",
    text: "This keeps Components clean and reusable."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Not Call APIs Directly From Components?"
  },
  {
    kind: "paragraph",
    text: "Imagine this."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nHTTP Call\n\nEmployees\n\n↓\n\nHTTP Call\n\nPayroll\n\n↓\n\nHTTP Call"
  },
  {
    kind: "paragraph",
    text: "Now,"
  },
  {
    kind: "paragraph",
    text: "every component contains API logic."
  },
  {
    kind: "paragraph",
    text: "Your project quickly becomes difficult to maintain."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\n↓\n\nEmployeeService\n\n↓\n\nHttpClient"
  },
  {
    kind: "paragraph",
    text: "One Service manages all API calls."
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Providing HttpClient"
  },
  {
    kind: "paragraph",
    text: "Before Angular can use HttpClient,"
  },
  {
    kind: "paragraph",
    text: "it must be registered."
  },
  {
    kind: "paragraph",
    text: "In a standalone Angular application,"
  },
  {
    kind: "paragraph",
    text: "this is done in **app.config.ts**."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { provideHttpClient } from '@angular/common/http';\n\nexport const appConfig = {\n  providers: [\n    provideHttpClient()\n  ]\n};"
  },
  {
    kind: "paragraph",
    text: "This tells Angular,"
  },
  {
    kind: "quote",
    text: "\"HttpClient is available throughout the application.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Injecting HttpClient"
  },
  {
    kind: "paragraph",
    text: "Just like any other service,"
  },
  {
    kind: "paragraph",
    text: "HttpClient is injected using Dependency Injection."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { HttpClient } from '@angular/common/http';\n\nconstructor(private http: HttpClient) {}"
  },
  {
    kind: "paragraph",
    text: "Angular automatically provides the HttpClient instance."
  },
  {
    kind: "paragraph",
    text: "You never create it yourself."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think Back to Dependency Injection"
  },
  {
    kind: "paragraph",
    text: "Remember this?"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nAngular Injector\n\n↓\n\nEmployeeService"
  },
  {
    kind: "paragraph",
    text: "The same thing happens with HttpClient."
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeService\n\n↓\n\nAngular Injector\n\n↓\n\nHttpClient"
  },
  {
    kind: "paragraph",
    text: "Angular creates it."
  },
  {
    kind: "paragraph",
    text: "Angular injects it."
  },
  {
    kind: "paragraph",
    text: "You simply use it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Use HttpClient Instead of fetch()?"
  },
  {
    kind: "paragraph",
    text: "JavaScript already has a built-in `fetch()` function."
  },
  {
    kind: "paragraph",
    text: "So why does Angular provide HttpClient?"
  },
  {
    kind: "paragraph",
    text: "Because HttpClient includes many Angular-specific features."
  },
  {
    kind: "table",
    headers: [
      "fetch()",
      "HttpClient"
    ],
    rows: [
      [
        "Browser API",
        "Angular Service"
      ],
      [
        "Basic HTTP requests",
        "Integrated with Angular"
      ],
      [
        "Manual error handling",
        "Better error handling"
      ],
      [
        "Manual interceptors",
        "Supports Interceptors"
      ],
      [
        "Less Angular integration",
        "Works with DI and Observables"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "For Angular applications,"
  },
  {
    kind: "paragraph",
    text: "**HttpClient is the recommended approach**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nResponse\n\n↓\n\nService\n\n↓\n\nComponent\n\n↓\n\nUI Updates"
  },
  {
    kind: "paragraph",
    text: "✔ HttpClient sends HTTP requests."
  },
  {
    kind: "paragraph",
    text: "✔ It receives responses from the backend."
  },
  {
    kind: "paragraph",
    text: "✔ It is usually used inside Services."
  },
  {
    kind: "paragraph",
    text: "✔ Angular provides HttpClient through Dependency Injection."
  },
  {
    kind: "paragraph",
    text: "✔ Register it once using `provideHttpClient()`."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now we know **how Angular sends requests**."
  },
  {
    kind: "paragraph",
    text: "The next question is:"
  },
  {
    kind: "quote",
    text: "**\"What kinds of requests can Angular send?\"**"
  },
  {
    kind: "paragraph",
    text: "We'll learn the five most common HTTP methods:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**GET** – Retrieve data",
      "**POST** – Create data",
      "**PUT** – Replace existing data",
      "**PATCH** – Update part of existing data",
      "**DELETE** – Remove data"
    ]
  },
  {
    kind: "paragraph",
    text: "These are the HTTP methods you'll use in almost every Angular application."
  },
  {
    kind: "paragraph",
    text: "These are the **5 HTTP methods** you'll use in almost every Angular project."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 HTTP Methods"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application."
  },
  {
    kind: "paragraph",
    text: "What actions can users perform?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "View employees",
      "Add employee",
      "Update employee",
      "Delete employee"
    ]
  },
  {
    kind: "paragraph",
    text: "Each action uses a different HTTP method."
  },
  {
    kind: "paragraph",
    text: "Think of HTTP methods as different instructions you send to the server."
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 Think of a Library"
  },
  {
    kind: "paragraph",
    text: "Imagine a library."
  },
  {
    kind: "paragraph",
    text: "You can perform different actions."
  },
  {
    kind: "code",
    language: "text",
    code: "Read a Book\n\nBorrow a Book\n\nUpdate Book Information\n\nRemove a Book"
  },
  {
    kind: "paragraph",
    text: "Each action is different."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "paragraph",
    text: "HTTP has different methods for different operations."
  },
  {
    kind: "heading",
    level: 2,
    text: "📊 HTTP Methods Overview"
  },
  {
    kind: "table",
    headers: [
      "Method",
      "Purpose",
      "HRMS Example"
    ],
    rows: [
      [
        "GET",
        "Retrieve data",
        "Get Employees"
      ],
      [
        "POST",
        "Create new data",
        "Add Employee"
      ],
      [
        "PUT",
        "Replace existing data",
        "Update Employee"
      ],
      [
        "PATCH",
        "Update part of existing data",
        "Update Employee Email"
      ],
      [
        "DELETE",
        "Remove data",
        "Delete Employee"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ GET Request"
  },
  {
    kind: "paragraph",
    text: "GET is used to **retrieve data**."
  },
  {
    kind: "paragraph",
    text: "Think of GET as asking,"
  },
  {
    kind: "quote",
    text: "\"Can you give me this information?\""
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "It needs employee information."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nGET Employees\n\n↓\n\nBackend API\n\n↓\n\nEmployee List\n\n↓\n\nDashboard Displays Data"
  },
  {
    kind: "paragraph",
    text: "Another example:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Details\n\n↓\n\nGET Employee\n\n↓\n\nEmployee Information"
  },
  {
    kind: "heading",
    level: 3,
    text: "Real-world Examples"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Load employee list",
      "View employee details",
      "Load dashboard statistics",
      "View notifications",
      "Load attendance records"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "Angular Code"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get('/api/employees');"
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ POST Request"
  },
  {
    kind: "paragraph",
    text: "POST is used to **create new data**."
  },
  {
    kind: "paragraph",
    text: "Think of POST as saying,"
  },
  {
    kind: "quote",
    text: "\"Please save this new information.\""
  },
  {
    kind: "paragraph",
    text: "HR fills the employee form."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n↓\n\nClick Save\n\n↓\n\nPOST Employee\n\n↓\n\nBackend\n\n↓\n\nDatabase\n\n↓\n\nEmployee Created"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Register User",
      "Login",
      "Add Employee",
      "Create Leave Request",
      "Create Payroll"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.post('/api/employees', employee);"
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ PUT Request"
  },
  {
    kind: "paragraph",
    text: "PUT is used to **replace an existing resource**."
  },
  {
    kind: "paragraph",
    text: "Imagine an employee changes all their information."
  },
  {
    kind: "code",
    language: "text",
    code: "Old Employee\n\n↓\n\nReplace Everything\n\n↓\n\nUpdated Employee"
  },
  {
    kind: "paragraph",
    text: "PUT sends the complete updated object."
  },
  {
    kind: "paragraph",
    text: "Employee Profile"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Edit Everything"
  },
  {
    kind: "paragraph",
    text: "Save"
  },
  {
    kind: "paragraph",
    text: "PUT Employee"
  },
  {
    kind: "paragraph",
    text: "Database Updated"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.put('/api/employees/101', employee);"
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ PATCH Request"
  },
  {
    kind: "paragraph",
    text: "PATCH updates **only part** of the data."
  },
  {
    kind: "paragraph",
    text: "Suppose only the employee's phone number changes."
  },
  {
    kind: "paragraph",
    text: "Everything else remains the same."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee\n\n↓\n\nPhone Number\n\n↓\n\nUpdated"
  },
  {
    kind: "paragraph",
    text: "Instead of sending the complete employee,"
  },
  {
    kind: "paragraph",
    text: "PATCH sends only the changed fields."
  },
  {
    kind: "paragraph",
    text: "Employee changes"
  },
  {
    kind: "code",
    language: "text",
    code: "Phone Number\n\n↓\n\nPATCH\n\n↓\n\nDatabase Updates Phone Only"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.patch('/api/employees/101', {\n  phone: '9876543210'\n});"
  },
  {
    kind: "heading",
    level: 2,
    text: "PUT vs PATCH"
  },
  {
    kind: "paragraph",
    text: "Many beginners confuse these."
  },
  {
    kind: "paragraph",
    text: "Imagine an employee record."
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nEmail\n\nPhone\n\nDepartment"
  },
  {
    kind: "heading",
    level: 3,
    text: "PUT"
  },
  {
    kind: "code",
    language: "text",
    code: "Replace Entire Employee"
  },
  {
    kind: "paragraph",
    text: "Everything is sent again."
  },
  {
    kind: "heading",
    level: 3,
    text: "PATCH"
  },
  {
    kind: "code",
    language: "text",
    code: "Update Only Phone"
  },
  {
    kind: "paragraph",
    text: "Only changed fields are sent."
  },
  {
    kind: "table",
    headers: [
      "PUT",
      "PATCH"
    ],
    rows: [
      [
        "Replaces entire resource",
        "Updates only changed fields"
      ],
      [
        "Sends all data",
        "Sends partial data"
      ],
      [
        "Larger request",
        "Smaller request"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ DELETE Request"
  },
  {
    kind: "paragraph",
    text: "DELETE removes data."
  },
  {
    kind: "paragraph",
    text: "HR deletes an employee."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List\n\n↓\n\nDelete Employee\n\n↓\n\nDELETE Request\n\n↓\n\nDatabase\n\n↓\n\nEmployee Removed"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.delete('/api/employees/101');"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete CRUD Flow"
  },
  {
    kind: "paragraph",
    text: "Most business applications perform CRUD operations."
  },
  {
    kind: "paragraph",
    text: "CRUD stands for:"
  },
  {
    kind: "table",
    headers: [
      "Operation",
      "HTTP Method"
    ],
    rows: [
      [
        "Create",
        "POST"
      ],
      [
        "Read",
        "GET"
      ],
      [
        "Update",
        "PUT / PATCH"
      ],
      [
        "Delete",
        "DELETE"
      ]
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS CRUD Example"
  },
  {
    kind: "code",
    language: "text",
    code: "Add Employee\n\n↓\n\nPOST\n\n----------------\n\nView Employees\n\n↓\n\nGET\n\n----------------\n\nUpdate Employee\n\n↓\n\nPUT / PATCH\n\n----------------\n\nDelete Employee\n\n↓\n\nDELETE"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nHTTP Method\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nAngular Updates UI"
  },
  {
    kind: "table",
    headers: [
      "Application",
      "GET",
      "POST",
      "PUT/PATCH",
      "DELETE"
    ],
    rows: [
      [
        "HRMS",
        "View Employees",
        "Add Employee",
        "Update Employee",
        "Delete Employee"
      ],
      [
        "E-Commerce",
        "View Products",
        "Place Order",
        "Update Cart",
        "Remove Product"
      ],
      [
        "Banking",
        "View Balance",
        "Transfer Money",
        "Update Profile",
        "Delete Beneficiary"
      ],
      [
        "Social Media",
        "Load Posts",
        "Create Post",
        "Edit Post",
        "Delete Post"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Best Practices"
  },
  {
    kind: "paragraph",
    text: "✔ Use **GET** only for reading data."
  },
  {
    kind: "paragraph",
    text: "✔ Use **POST** to create new resources."
  },
  {
    kind: "paragraph",
    text: "✔ Use **PUT** when replacing an entire resource."
  },
  {
    kind: "paragraph",
    text: "✔ Use **PATCH** when updating only specific fields."
  },
  {
    kind: "paragraph",
    text: "✔ Use **DELETE** to remove resources."
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "✔ HTTP methods tell the server **what action to perform**."
  },
  {
    kind: "paragraph",
    text: "✔ GET → Read data."
  },
  {
    kind: "paragraph",
    text: "✔ POST → Create data."
  },
  {
    kind: "paragraph",
    text: "✔ PUT → Replace existing data."
  },
  {
    kind: "paragraph",
    text: "✔ PATCH → Update part of existing data."
  },
  {
    kind: "paragraph",
    text: "✔ DELETE → Remove data."
  },
  {
    kind: "paragraph",
    text: "Now that we know the HTTP methods, the next lesson section is **Making HTTP Requests in Angular**, where you'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Calling a GET API",
      "Sending POST requests with a request body",
      "Handling responses",
      "Passing route and query parameters",
      "Using `Observable` responses from `HttpClient` in real Angular applications."
    ]
  },
  {
    kind: "quote",
    text: "**\"How do we actually call an API using HttpClient?\"**"
  },
  {
    kind: "paragraph",
    text: "This is the section where everything comes together."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Making HTTP Requests in Angular"
  },
  {
    kind: "paragraph",
    text: "Knowing the HTTP methods is not enough."
  },
  {
    kind: "paragraph",
    text: "We also need to know how to send requests using **HttpClient**."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Dashboard opens."
  },
  {
    kind: "paragraph",
    text: "The Dashboard itself doesn't call the API."
  },
  {
    kind: "paragraph",
    text: "Instead, it asks the `EmployeeService`."
  },
  {
    kind: "paragraph",
    text: "The `EmployeeService` uses `HttpClient`."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nDashboard"
  },
  {
    kind: "paragraph",
    text: "This is the recommended Angular architecture."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why Do We Call APIs from Services?"
  },
  {
    kind: "paragraph",
    text: "Suppose the Dashboard component calls the API."
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "Employee List also calls the same API."
  },
  {
    kind: "paragraph",
    text: "Payroll also calls it."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nAPI\n\n----------------\n\nEmployees\n\n↓\n\nAPI\n\n----------------\n\nPayroll\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "Now the same code is repeated."
  },
  {
    kind: "paragraph",
    text: "all components use one service."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\n↓\n\nEmployeeService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API"
  },
  {
    kind: "paragraph",
    text: "One service."
  },
  {
    kind: "paragraph",
    text: "One API implementation."
  },
  {
    kind: "paragraph",
    text: "Many components."
  },
  {
    kind: "paragraph",
    text: "Imagine the Dashboard loads."
  },
  {
    kind: "paragraph",
    text: "It needs all employees."
  },
  {
    kind: "paragraph",
    text: "The component asks the service."
  },
  {
    kind: "paragraph",
    text: "The service calls the API."
  },
  {
    kind: "heading",
    level: 3,
    text: "Service"
  },
  {
    kind: "code",
    language: "ts",
    code: "getEmployees() {\n  return this.http.get<Employee[]>('/api/employees');\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.getEmployees().subscribe(data => {\n  this.employees = data;\n});"
  },
  {
    kind: "heading",
    level: 3,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nGET /employees\n\n↓\n\nBackend\n\n↓\n\nEmployee List\n\n↓\n\nDashboard Updates"
  },
  {
    kind: "paragraph",
    text: "Suppose HR adds a new employee."
  },
  {
    kind: "paragraph",
    text: "The form contains"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Name",
      "Email",
      "Department"
    ]
  },
  {
    kind: "paragraph",
    text: "After clicking Save,"
  },
  {
    kind: "paragraph",
    text: "Angular sends the employee object."
  },
  {
    kind: "code",
    language: "ts",
    code: "addEmployee(employee: Employee) {\n  return this.http.post('/api/employees', employee);\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService\n  .addEmployee(employee)\n  .subscribe();"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n↓\n\nPOST Employee\n\n↓\n\nBackend\n\n↓\n\nDatabase\n\n↓\n\nSuccess\n\n↓\n\nEmployee List Refreshes"
  },
  {
    kind: "paragraph",
    text: "Employee edits all profile details."
  },
  {
    kind: "code",
    language: "ts",
    code: "updateEmployee(id: number, employee: Employee) {\n  return this.http.put('/api/employees/' + id, employee);\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Edit Employee\n\n↓\n\nPUT Request\n\n↓\n\nBackend\n\n↓\n\nEmployee Updated\n\n↓\n\nResponse"
  },
  {
    kind: "paragraph",
    text: "Only the employee's phone number changes."
  },
  {
    kind: "code",
    language: "ts",
    code: "updatePhone(id: number, phone: string) {\n  return this.http.patch('/api/employees/' + id, {\n    phone: phone\n  });\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Update Phone\n\n↓\n\nPATCH Request\n\n↓\n\nBackend\n\n↓\n\nPhone Updated"
  },
  {
    kind: "paragraph",
    text: "HR removes an employee."
  },
  {
    kind: "code",
    language: "ts",
    code: "deleteEmployee(id: number) {\n  return this.http.delete('/api/employees/' + id);\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Delete Button\n\n↓\n\nDELETE Request\n\n↓\n\nBackend\n\n↓\n\nEmployee Deleted\n\n↓\n\nEmployee List Refreshes"
  },
  {
    kind: "heading",
    level: 2,
    text: "Sending a Request Body"
  },
  {
    kind: "paragraph",
    text: "Some requests need extra information."
  },
  {
    kind: "paragraph",
    text: "For example,"
  },
  {
    kind: "paragraph",
    text: "adding a new employee."
  },
  {
    kind: "paragraph",
    text: "Angular sends an object called the **request body**."
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nEmail\n\nDepartment\n\n↓\n\nPOST Request\n\n↓\n\nBackend"
  },
  {
    kind: "code",
    language: "ts",
    code: "const employee = {\n  name: 'John',\n  department: 'HR'\n};"
  },
  {
    kind: "paragraph",
    text: "This object becomes the request body."
  },
  {
    kind: "heading",
    level: 2,
    text: "Receiving the Response"
  },
  {
    kind: "paragraph",
    text: "Every request receives a response."
  },
  {
    kind: "code",
    language: "text",
    code: "GET Employees\n\n↓\n\nBackend\n\n↓\n\nEmployee List\n\n↓\n\nAngular"
  },
  {
    kind: "paragraph",
    text: "we receive the response using `subscribe()`."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService\n  .getEmployees()\n  .subscribe(data => {\n    this.employees = data;\n  });"
  },
  {
    kind: "paragraph",
    text: "Think of `subscribe()` as:"
  },
  {
    kind: "quote",
    text: "**\"Run this code when the server sends the response.\"**"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Request Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Action\n\n↓\n\nComponent\n\n↓\n\nService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nDatabase\n\n↓\n\nResponse\n\n↓\n\nComponent\n\n↓\n\nUI Updates"
  },
  {
    kind: "table",
    headers: [
      "Action",
      "HTTP Method"
    ],
    rows: [
      [
        "Load Employees",
        "GET"
      ],
      [
        "Add Employee",
        "POST"
      ],
      [
        "Update Employee",
        "PUT"
      ],
      [
        "Update Email Only",
        "PATCH"
      ],
      [
        "Delete Employee",
        "DELETE"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "✔ Keep all HTTP calls inside Services."
  },
  {
    kind: "paragraph",
    text: "✔ Components should only call Service methods."
  },
  {
    kind: "paragraph",
    text: "✔ Always wait for the response before updating the UI."
  },
  {
    kind: "paragraph",
    text: "✔ Reuse Service methods across multiple components."
  },
  {
    kind: "paragraph",
    text: "✔ Services contain API call logic."
  },
  {
    kind: "paragraph",
    text: "✔ Components call Service methods instead of using `HttpClient` directly."
  },
  {
    kind: "paragraph",
    text: "✔ `subscribe()` is used to handle the server response."
  },
  {
    kind: "paragraph",
    text: "✔ A typical Angular flow is:"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\nService\n\n↓\n\nHttpClient\n\n↓\n\nBackend API\n\n↓\n\nResponse\n\n↓\n\nComponent\n\n↓\n\nUI Updates"
  },
  {
    kind: "paragraph",
    text: "Now that you know how to make HTTP requests, the next section is **Handling HTTP Errors and Loading States**, where you'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What happens when an API fails",
      "How to handle errors gracefully",
      "Using `HttpErrorResponse`",
      "Showing loading indicators while waiting for the server",
      "Best practices for user-friendly API interactions"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Handling HTTP Errors & Loading States"
  },
  {
    kind: "paragraph",
    text: "So far, we've assumed every API call succeeds."
  },
  {
    kind: "paragraph",
    text: "But in real applications, APIs can fail."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Internet connection lost",
      "Server is down",
      "Unauthorized user",
      "Employee not found",
      "Internal server error"
    ]
  },
  {
    kind: "paragraph",
    text: "A good application handles these situations gracefully instead of crashing."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why Do We Need Error Handling?"
  },
  {
    kind: "paragraph",
    text: "Imagine HR clicks **Load Employees**."
  },
  {
    kind: "code",
    language: "text",
    code: "Load Employees\n\n↓\n\nGET Request\n\n↓\n\nServer Error"
  },
  {
    kind: "paragraph",
    text: "Should the application show a blank page?"
  },
  {
    kind: "paragraph",
    text: "It should display a meaningful message."
  },
  {
    kind: "code",
    language: "text",
    code: "❌ Unable to load employees.\n\nPlease try again later."
  },
  {
    kind: "paragraph",
    text: "This improves the user experience."
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real-world Example"
  },
  {
    kind: "paragraph",
    text: "Imagine you're ordering food online."
  },
  {
    kind: "code",
    language: "text",
    code: "Order Food\n\n↓\n\nRestaurant Closed\n\n↓\n\nApp Shows\n\n\"Restaurant is currently unavailable.\""
  },
  {
    kind: "paragraph",
    text: "The app doesn't crash."
  },
  {
    kind: "paragraph",
    text: "It explains what happened."
  },
  {
    kind: "paragraph",
    text: "Angular applications should behave the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nGET Dashboard Data\n\n↓\n\nServer Down\n\n↓\n\nShow Error Message"
  },
  {
    kind: "paragraph",
    text: "Instead of showing empty cards,"
  },
  {
    kind: "paragraph",
    text: "display a friendly message."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is HttpErrorResponse?"
  },
  {
    kind: "paragraph",
    text: "When an API fails,"
  },
  {
    kind: "paragraph",
    text: "Angular returns an object called **HttpErrorResponse**."
  },
  {
    kind: "paragraph",
    text: "It contains information about the error."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Status Code",
      "Error Message",
      "URL",
      "Server Response"
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
    code: "this.employeeService.getEmployees().subscribe({\n  next: (employees) => {\n    this.employees = employees;\n  },\n  error: (error) => {\n    console.log(error);\n  }\n});"
  },
  {
    kind: "paragraph",
    text: "Here,"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`next` runs when the request succeeds.",
      "`error` runs when the request fails."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Common HTTP Status Codes"
  },
  {
    kind: "table",
    headers: [
      "Status",
      "Meaning"
    ],
    rows: [
      [
        "200",
        "Success"
      ],
      [
        "201",
        "Resource Created"
      ],
      [
        "400",
        "Bad Request"
      ],
      [
        "401",
        "Unauthorized"
      ],
      [
        "403",
        "Forbidden"
      ],
      [
        "404",
        "Resource Not Found"
      ],
      [
        "500",
        "Internal Server Error"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Employee not found."
  },
  {
    kind: "code",
    language: "text",
    code: "GET Employee\n\n↓\n\nEmployee ID = 999\n\n↓\n\n404\n\n↓\n\nShow\n\n\"Employee not found.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Loading State"
  },
  {
    kind: "paragraph",
    text: "Sometimes the server takes a few seconds to respond."
  },
  {
    kind: "paragraph",
    text: "Imagine loading 10,000 employees."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nGET Employees\n\n↓\n\nWaiting...\n\n↓\n\nResponse"
  },
  {
    kind: "paragraph",
    text: "During this time,"
  },
  {
    kind: "paragraph",
    text: "users should know the application is working."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Do We Need a Loading Indicator?"
  },
  {
    kind: "paragraph",
    text: "Without loading"
  },
  {
    kind: "code",
    language: "text",
    code: "Click\n\n↓\n\nNothing Happens"
  },
  {
    kind: "paragraph",
    text: "The user may think the application is frozen."
  },
  {
    kind: "paragraph",
    text: "show a loading indicator."
  },
  {
    kind: "code",
    language: "text",
    code: "Click\n\n↓\n\nLoading...\n\n↓\n\nResponse\n\n↓\n\nDisplay Data"
  },
  {
    kind: "code",
    language: "ts",
    code: "loading = true;\n\nthis.employeeService.getEmployees().subscribe({\n  next: (employees) => {\n    this.employees = employees;\n    this.loading = false;\n  },\n  error: () => {\n    this.loading = false;\n  }\n});"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Starts\n\n↓\n\nShow Loading\n\n↓\n\nHTTP Request\n\n↓\n\nBackend\n\n↓\n\nResponse\n\n↓\n\nHide Loading\n\n↓\n\nDisplay Data"
  },
  {
    kind: "heading",
    level: 2,
    text: "Success vs Error Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "HTTP Request\n\n↓\n\nBackend\n\n        ↓\n\nSuccess      Error\n\n↓              ↓\n\nShow Data   Show Error"
  },
  {
    kind: "paragraph",
    text: "✔ Always handle API errors."
  },
  {
    kind: "paragraph",
    text: "✔ Show meaningful error messages."
  },
  {
    kind: "paragraph",
    text: "✔ Display a loading indicator while waiting."
  },
  {
    kind: "paragraph",
    text: "✔ Hide the loading indicator after success or failure."
  },
  {
    kind: "paragraph",
    text: "✔ Don't leave users wondering if the application is working."
  },
  {
    kind: "table",
    headers: [
      "Feature",
      "Loading",
      "Error"
    ],
    rows: [
      [
        "Employee List",
        "Loading employees...",
        "Failed to load employees"
      ],
      [
        "Login",
        "Signing in...",
        "Invalid username or password"
      ],
      [
        "Dashboard",
        "Loading dashboard...",
        "Unable to load dashboard"
      ],
      [
        "Payroll",
        "Loading payroll...",
        "Payroll service unavailable"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "✔ APIs can succeed or fail."
  },
  {
    kind: "paragraph",
    text: "✔ Use the `error` callback in `subscribe()` to handle failures."
  },
  {
    kind: "paragraph",
    text: "✔ `HttpErrorResponse` provides details about the error."
  },
  {
    kind: "paragraph",
    text: "✔ Show loading indicators while waiting for responses."
  },
  {
    kind: "paragraph",
    text: "✔ Always provide user-friendly error messages instead of leaving a blank page."
  },
  {
    kind: "heading",
    level: 3,
    text: "Employee Service"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Injectable({\n  providedIn: 'root'\n})\nexport class EmployeeService {\n\n  constructor(private http: HttpClient) {}\n\n  getEmployees() {\n    return this.http.get<Employee[]>('/api/employees');\n  }\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Dashboard Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "employees: Employee[] = [];\nloading = false;\nerrorMessage = '';\n\nconstructor(private employeeService: EmployeeService) {}\n\nngOnInit() {\n\n  this.loading = true;\n\n  this.employeeService.getEmployees().subscribe({\n\n    next: (data) => {\n      this.employees = data;\n      this.loading = false;\n    },\n\n    error: () => {\n      this.errorMessage = 'Failed to load employees.';\n      this.loading = false;\n    }\n\n  });\n\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "@if (loading) {\n  <p>Loading employees...</p>\n}\n\n@if (errorMessage) {\n  <p>{{ errorMessage }}</p>\n}\n\n<ul>\n  @for (employee of employees; track employee.id) {\n    <li>{{ employee.name }}</li>\n  }\n</ul>"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Opens\n        ↓\nEmployeeService.getEmployees()\n        ↓\nHttpClient GET /api/employees\n        ↓\nBackend API\n        ↓\nSuccess → Show Employees\n        OR\nError → Show \"Failed to load employees.\""
  },
  {
    kind: "paragraph",
    text: "This is exactly the kind of concise, real-world example that's ideal for your HTTP lesson. It demonstrates:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Service** making the API call",
      "**Component** consuming the service",
      "**Loading state**",
      "**Error handling**",
      "**Displaying the result**"
    ]
  }
];
