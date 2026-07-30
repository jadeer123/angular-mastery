import { LessonBlock } from '../topic.model';

export const lesson10Rxjs: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is RxJS?"
  },
  {
    kind: "paragraph",
    text: "When we learned **HttpClient**, we wrote this code."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.http.get('/api/employees')"
  },
  {
    kind: "paragraph",
    text: "But Angular didn't return the employee list directly."
  },
  {
    kind: "paragraph",
    text: "Instead, it returned something called an **Observable**."
  },
  {
    kind: "paragraph",
    text: "Then we wrote"
  },
  {
    kind: "code",
    language: "ts",
    code: ".subscribe(...)"
  },
  {
    kind: "paragraph",
    text: "Have you ever wondered..."
  },
  {
    kind: "quote",
    text: "**Why do we need subscribe()?**"
  },
  {
    kind: "quote",
    text: "**Why doesn't HttpClient simply return the data?**"
  },
  {
    kind: "paragraph",
    text: "The answer is **RxJS**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is RxJS?"
  },
  {
    kind: "paragraph",
    text: "**RxJS** stands for **Reactive Extensions for JavaScript**."
  },
  {
    kind: "paragraph",
    text: "It is a library that helps Angular work with **asynchronous data**."
  },
  {
    kind: "paragraph",
    text: "Asynchronous means the data doesn't arrive immediately."
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "API responses",
      "Button clicks",
      "User typing",
      "Timers",
      "WebSocket messages"
    ]
  },
  {
    kind: "paragraph",
    text: "All of these happen over time."
  },
  {
    kind: "paragraph",
    text: "RxJS helps Angular react to those events."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Do We Need RxJS?"
  },
  {
    kind: "paragraph",
    text: "Imagine your Dashboard opens."
  },
  {
    kind: "paragraph",
    text: "Employee data is not available immediately."
  },
  {
    kind: "paragraph",
    text: "Angular sends a request."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nHTTP Request\n\n↓\n\nWaiting...\n\n↓\n\nBackend\n\n↓\n\nResponse"
  },
  {
    kind: "paragraph",
    text: "Angular cannot stop the application and wait."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "it continues running."
  },
  {
    kind: "paragraph",
    text: "When the response finally arrives,"
  },
  {
    kind: "paragraph",
    text: "RxJS notifies Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Food Delivery"
  },
  {
    kind: "paragraph",
    text: "Imagine ordering food."
  },
  {
    kind: "paragraph",
    text: "You place the order."
  },
  {
    kind: "code",
    language: "text",
    code: "Order Pizza\n\n↓\n\nRestaurant Preparing\n\n↓\n\nDelivery Partner\n\n↓\n\nPizza Arrives"
  },
  {
    kind: "paragraph",
    text: "Do you stand at the door waiting?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "You continue watching TV."
  },
  {
    kind: "paragraph",
    text: "When the pizza arrives,"
  },
  {
    kind: "paragraph",
    text: "the delivery partner rings the bell."
  },
  {
    kind: "paragraph",
    text: "RxJS works the same way."
  },
  {
    kind: "paragraph",
    text: "Angular continues running."
  },
  {
    kind: "paragraph",
    text: "When data arrives,"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Dashboard loads."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nHTTP Request\n\n↓\n\nWaiting...\n\n↓\n\nEmployee Data Arrives\n\n↓\n\nDashboard Updates"
  },
  {
    kind: "paragraph",
    text: "Notice that Angular didn't freeze while waiting."
  },
  {
    kind: "paragraph",
    text: "RxJS handled the waiting."
  },
  {
    kind: "heading",
    level: 2,
    text: "Where Does Angular Use RxJS?"
  },
  {
    kind: "paragraph",
    text: "You'll use RxJS in many places."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HttpClient",
      "Form value changes",
      "Router events",
      "Search suggestions",
      "Timers",
      "WebSockets"
    ]
  },
  {
    kind: "paragraph",
    text: "It's deeply integrated into Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ RxJS is a JavaScript library for handling asynchronous data."
  },
  {
    kind: "paragraph",
    text: "✔ Angular uses RxJS extensively."
  },
  {
    kind: "paragraph",
    text: "✔ RxJS helps Angular react when data arrives."
  },
  {
    kind: "paragraph",
    text: "✔ `HttpClient` returns **Observables**, which are part of RxJS."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next"
  },
  {
    kind: "paragraph",
    text: "We'll learn the most important RxJS concept:"
  },
  {
    kind: "paragraph",
    text: "**📘 What is an Observable?**"
  },
  {
    kind: "paragraph",
    text: "This is the foundation of RxJS and explains why we use `subscribe()` in Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 What is an Observable?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're waiting for a courier."
  },
  {
    kind: "paragraph",
    text: "You order a laptop."
  },
  {
    kind: "paragraph",
    text: "Today, nothing arrives."
  },
  {
    kind: "paragraph",
    text: "Tomorrow, nothing arrives."
  },
  {
    kind: "paragraph",
    text: "The next day, the courier finally arrives."
  },
  {
    kind: "paragraph",
    text: "Did the courier give you the laptop immediately?"
  },
  {
    kind: "paragraph",
    text: "You waited until it became available."
  },
  {
    kind: "paragraph",
    text: "An **Observable** works the same way."
  },
  {
    kind: "paragraph",
    text: "It is a source that can send data **now**, **later**, or even **multiple times** in the future."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Observables?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Dashboard opens."
  },
  {
    kind: "paragraph",
    text: "It needs employee data."
  },
  {
    kind: "code",
    language: "text id=\"jbvmw6\"",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nBackend API\n\n↓\n\nWaiting...\n\n↓\n\nEmployee Data Arrives"
  },
  {
    kind: "paragraph",
    text: "When the Dashboard starts,"
  },
  {
    kind: "paragraph",
    text: "the employee data doesn't exist yet."
  },
  {
    kind: "paragraph",
    text: "Angular cannot display something that hasn't arrived."
  },
  {
    kind: "paragraph",
    text: "Angular waits."
  },
  {
    kind: "paragraph",
    text: "When the data arrives,"
  },
  {
    kind: "paragraph",
    text: "the Observable sends it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a YouTube Live Stream"
  },
  {
    kind: "paragraph",
    text: "Imagine watching a live cricket match."
  },
  {
    kind: "paragraph",
    text: "Does YouTube send the entire match at once?"
  },
  {
    kind: "paragraph",
    text: "It continuously sends new video frames."
  },
  {
    kind: "code",
    language: "text id=\"lq1l5o\"",
    code: "Live Match\n\n↓\n\nBall 1\n\n↓\n\nBall 2\n\n↓\n\nBall 3\n\n↓\n\nBall 4"
  },
  {
    kind: "paragraph",
    text: "You receive data as it becomes available."
  },
  {
    kind: "paragraph",
    text: "An Observable behaves similarly."
  },
  {
    kind: "paragraph",
    text: "It can emit one value,"
  },
  {
    kind: "paragraph",
    text: "many values,"
  },
  {
    kind: "paragraph",
    text: "or keep emitting values over time."
  },
  {
    kind: "paragraph",
    text: "Suppose HR adds a new employee."
  },
  {
    kind: "code",
    language: "text id=\"vkzyl8\"",
    code: "Dashboard\n\n↓\n\nEmployee Count\n\n120"
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "a new employee joins."
  },
  {
    kind: "code",
    language: "text id=\"n9d9r4\"",
    code: "Employee Count\n\n121"
  },
  {
    kind: "paragraph",
    text: "another employee joins."
  },
  {
    kind: "code",
    language: "text id=\"7w77pa\"",
    code: "Employee Count\n\n122"
  },
  {
    kind: "paragraph",
    text: "The Observable can emit"
  },
  {
    kind: "paragraph",
    text: "120"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "121"
  },
  {
    kind: "paragraph",
    text: "122"
  },
  {
    kind: "paragraph",
    text: "without creating a new request every time."
  },
  {
    kind: "heading",
    level: 2,
    text: "Observable Flow"
  },
  {
    kind: "code",
    language: "text id=\"n1u0m2\"",
    code: "Observable\n\n↓\n\nWaiting\n\n↓\n\nData Arrives\n\n↓\n\nSend Data\n\n↓\n\nWaiting Again\n\n↓\n\nNew Data Arrives\n\n↓\n\nSend Again"
  },
  {
    kind: "paragraph",
    text: "Unlike a normal variable,"
  },
  {
    kind: "paragraph",
    text: "an Observable can continue sending values."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Examples"
  },
  {
    kind: "paragraph",
    text: "Observables are useful whenever data changes over time."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HTTP responses",
      "User typing in a search box",
      "Button clicks",
      "Notifications",
      "Live chat",
      "Stock prices",
      "Weather updates",
      "WebSocket messages"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Observable vs Normal Variable"
  },
  {
    kind: "paragraph",
    text: "Imagine a variable."
  },
  {
    kind: "code",
    language: "ts id=\"ojbb9t\"",
    code: "let count = 120;"
  },
  {
    kind: "paragraph",
    text: "The value is available immediately."
  },
  {
    kind: "paragraph",
    text: "Now imagine an Observable."
  },
  {
    kind: "code",
    language: "text id=\"gsh2d0\"",
    code: "Employee Count\n\n↓\n\nWaiting\n\n↓\n\n120\n\n↓\n\n121\n\n↓\n\n122"
  },
  {
    kind: "paragraph",
    text: "The values arrive over time."
  },
  {
    kind: "heading",
    level: 2,
    text: "Simple Observable Example"
  },
  {
    kind: "code",
    language: "ts id=\"m56jrh\"",
    code: "const numbers$ = of(10, 20, 30);"
  },
  {
    kind: "paragraph",
    text: "This Observable will emit:"
  },
  {
    kind: "code",
    language: "text id=\"smyo40\"",
    code: "10\n\n↓\n\n20\n\n↓\n\n30"
  },
  {
    kind: "paragraph",
    text: "Notice,"
  },
  {
    kind: "paragraph",
    text: "it doesn't return all values like an array."
  },
  {
    kind: "paragraph",
    text: "It emits them one by one."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Doesn't HttpClient Return Data Directly?"
  },
  {
    kind: "paragraph",
    text: "Suppose Angular did this."
  },
  {
    kind: "code",
    language: "ts id=\"3vzf0d\"",
    code: "const employees = this.http.get('/api/employees');"
  },
  {
    kind: "paragraph",
    text: "Will the server respond immediately?"
  },
  {
    kind: "paragraph",
    text: "The request takes time."
  },
  {
    kind: "paragraph",
    text: "Angular returns an Observable."
  },
  {
    kind: "paragraph",
    text: "The Observable waits."
  },
  {
    kind: "paragraph",
    text: "When the response arrives,"
  },
  {
    kind: "paragraph",
    text: "it emits the employee data."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text id=\"kjlwmv\"",
    code: "Angular\n\n↓\n\nObservable Created\n\n↓\n\nWaiting\n\n↓\n\nBackend Responds\n\n↓\n\nObservable Emits Data\n\n↓\n\nComponent Receives Data"
  },
  {
    kind: "paragraph",
    text: "✔ An Observable is a source of data over time."
  },
  {
    kind: "paragraph",
    text: "✔ It can emit one value or many values."
  },
  {
    kind: "paragraph",
    text: "✔ It doesn't block the application while waiting."
  },
  {
    kind: "paragraph",
    text: "✔ `HttpClient` returns Observables because server responses are asynchronous."
  },
  {
    kind: "paragraph",
    text: "✔ An Observable doesn't automatically give you the data—you must **listen** to it."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Question"
  },
  {
    kind: "paragraph",
    text: "Now we know **what an Observable is**."
  },
  {
    kind: "paragraph",
    text: "But **how do we listen** for the values it emits?"
  },
  {
    kind: "paragraph",
    text: "That's exactly what **`subscribe()`** does, and it's the next topic."
  },
  {
    kind: "paragraph",
    text: "Once students understand **`subscribe()`**, the rest of RxJS becomes much easier."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 What is `subscribe()`?"
  },
  {
    kind: "paragraph",
    text: "We learned that an Observable sends data over time."
  },
  {
    kind: "paragraph",
    text: "But here's an important question."
  },
  {
    kind: "quote",
    text: "**How does Angular know when the Observable sends data?**"
  },
  {
    kind: "paragraph",
    text: "The answer is **`subscribe()`**."
  },
  {
    kind: "paragraph",
    text: "`subscribe()` tells Angular,"
  },
  {
    kind: "quote",
    text: "**\"I'm interested in this Observable. Let me know whenever it emits data.\"**"
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need `subscribe()`?"
  },
  {
    kind: "paragraph",
    text: "Imagine you order a parcel."
  },
  {
    kind: "paragraph",
    text: "The courier company has your parcel."
  },
  {
    kind: "paragraph",
    text: "But how will you know when it arrives?"
  },
  {
    kind: "paragraph",
    text: "You can either:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Keep checking the gate every minute.",
      "Or ask the courier to notify you."
    ]
  },
  {
    kind: "paragraph",
    text: "Most people choose the second option."
  },
  {
    kind: "paragraph",
    text: "Observables work exactly the same way."
  },
  {
    kind: "code",
    language: "text id=\"4w0gtm\"",
    code: "Observable\n\n↓\n\nData Arrives\n\n↓\n\nsubscribe()\n\n↓\n\nNotify Component"
  },
  {
    kind: "paragraph",
    text: "Without `subscribe()`,"
  },
  {
    kind: "paragraph",
    text: "Angular never listens to the Observable."
  },
  {
    kind: "heading",
    level: 2,
    text: "📞 Think of a Phone Call"
  },
  {
    kind: "paragraph",
    text: "Imagine your friend says,"
  },
  {
    kind: "quote",
    text: "\"I'll call you when I reach home.\""
  },
  {
    kind: "paragraph",
    text: "If you never answer the phone,"
  },
  {
    kind: "paragraph",
    text: "will you hear the message?"
  },
  {
    kind: "paragraph",
    text: "You must answer the call."
  },
  {
    kind: "code",
    language: "text id=\"o98jlk\"",
    code: "Friend\n\n↓\n\nCalls\n\n↓\n\nYou Answer\n\n↓\n\nReceive Message"
  },
  {
    kind: "paragraph",
    text: "`subscribe()` is like answering the phone."
  },
  {
    kind: "paragraph",
    text: "It allows your component to receive the data."
  },
  {
    kind: "paragraph",
    text: "Dashboard opens."
  },
  {
    kind: "code",
    language: "text id=\"pqarf4\"",
    code: "Dashboard\n\n↓\n\nEmployeeService\n\n↓\n\nObservable\n\n↓\n\nsubscribe()\n\n↓\n\nEmployee Data\n\n↓\n\nDashboard Updates"
  },
  {
    kind: "paragraph",
    text: "the Dashboard never receives the employee list."
  },
  {
    kind: "heading",
    level: 2,
    text: "What Happens Internally?"
  },
  {
    kind: "paragraph",
    text: "Imagine this code."
  },
  {
    kind: "code",
    language: "ts id=\"b2zw1y\"",
    code: "this.employeeService.getEmployees();"
  },
  {
    kind: "paragraph",
    text: "Angular creates the Observable."
  },
  {
    kind: "paragraph",
    text: "But nobody is listening."
  },
  {
    kind: "code",
    language: "text id=\"cjlklw\"",
    code: "Observable\n\n↓\n\nEmployee Data\n\n↓\n\nNobody Receives It"
  },
  {
    kind: "paragraph",
    text: "Now add `subscribe()`."
  },
  {
    kind: "code",
    language: "ts id=\"locey7\"",
    code: "this.employeeService\n  .getEmployees()\n  .subscribe();"
  },
  {
    kind: "paragraph",
    text: "Now Angular starts listening."
  },
  {
    kind: "paragraph",
    text: "When the backend responds,"
  },
  {
    kind: "paragraph",
    text: "the Observable sends the data to the component."
  },
  {
    kind: "heading",
    level: 2,
    text: "Receiving Data"
  },
  {
    kind: "paragraph",
    text: "Most of the time,"
  },
  {
    kind: "paragraph",
    text: "we receive the emitted value like this."
  },
  {
    kind: "code",
    language: "ts id=\"p67avv\"",
    code: "this.employeeService\n  .getEmployees()\n  .subscribe(data => {\n\n    this.employees = data;\n\n  });"
  },
  {
    kind: "paragraph",
    text: "Here,"
  },
  {
    kind: "paragraph",
    text: "`data` contains the employee list returned by the server."
  },
  {
    kind: "code",
    language: "text id=\"jgvs5h\"",
    code: "Component Starts\n\n↓\n\nCall Service\n\n↓\n\nObservable Returned\n\n↓\n\nsubscribe()\n\n↓\n\nBackend Responds\n\n↓\n\nObservable Emits Data\n\n↓\n\nComponent Receives Data\n\n↓\n\nUI Updates"
  },
  {
    kind: "heading",
    level: 2,
    text: "`subscribe()` Callbacks"
  },
  {
    kind: "paragraph",
    text: "`subscribe()` can respond to three situations."
  },
  {
    kind: "heading",
    level: 3,
    text: "1. next"
  },
  {
    kind: "paragraph",
    text: "Runs when data is received successfully."
  },
  {
    kind: "code",
    language: "ts id=\"vlqlxq\"",
    code: ".subscribe({\n\n  next: (data) => {\n    console.log(data);\n  }\n\n});"
  },
  {
    kind: "heading",
    level: 3,
    text: "2. error"
  },
  {
    kind: "paragraph",
    text: "Runs if something goes wrong."
  },
  {
    kind: "code",
    language: "ts id=\"ymisjk\"",
    code: ".subscribe({\n\n  error: () => {\n    console.log('Something went wrong');\n  }\n\n});"
  },
  {
    kind: "heading",
    level: 3,
    text: "3. complete"
  },
  {
    kind: "paragraph",
    text: "Runs when the Observable has finished sending all values."
  },
  {
    kind: "code",
    language: "ts id=\"k2ksjg\"",
    code: ".subscribe({\n\n  complete: () => {\n    console.log('Completed');\n  }\n\n});"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Example"
  },
  {
    kind: "code",
    language: "ts id=\"afgyly\"",
    code: "this.employeeService.getEmployees().subscribe({\n\n  next: (employees) => {\n    this.employees = employees;\n  },\n\n  error: () => {\n    console.log('Failed to load employees');\n  },\n\n  complete: () => {\n    console.log('Request completed');\n  }\n\n});"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Flow"
  },
  {
    kind: "code",
    language: "text id=\"09ysps\"",
    code: "Dashboard Opens\n\n↓\n\nEmployeeService\n\n↓\n\nObservable\n\n↓\n\nsubscribe()\n\n        ↓\n\nSuccess      Error\n\n↓              ↓\n\nShow Data   Show Error\n\n        ↓\n\nComplete"
  },
  {
    kind: "heading",
    level: 2,
    text: "Do All Observables Complete?"
  },
  {
    kind: "paragraph",
    text: "Some Observables complete after sending data."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HTTP request ✅"
    ]
  },
  {
    kind: "paragraph",
    text: "Some continue emitting values forever."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Button clicks",
      "Mouse movements",
      "WebSocket messages",
      "Live notifications"
    ]
  },
  {
    kind: "paragraph",
    text: "These continue until you stop listening."
  },
  {
    kind: "paragraph",
    text: "✔ `subscribe()` starts listening to an Observable."
  },
  {
    kind: "paragraph",
    text: "✔ Without `subscribe()`, your component won't receive emitted values."
  },
  {
    kind: "paragraph",
    text: "✔ `next` handles successful data."
  },
  {
    kind: "paragraph",
    text: "✔ `error` handles failures."
  },
  {
    kind: "paragraph",
    text: "✔ `complete` runs when the Observable finishes."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now we know how to receive data from an Observable."
  },
  {
    kind: "paragraph",
    text: "The next question is:"
  },
  {
    kind: "quote",
    text: "**\"What if I want to modify the data before it reaches my component?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **RxJS Operators** come in. You'll learn how to use `pipe()` with operators like `map()`, `filter()`, `tap()`, `switchMap()`, and `catchError()` to transform and manage data streams."
  },
  {
    kind: "quote",
    text: "**\"What actually is an Observable? Is it the data? Is it a function? How does it keep sending values?\"**"
  },
  {
    kind: "paragraph",
    text: "Let's understand it from scratch."
  },
  {
    kind: "heading",
    level: 2,
    text: "What actually is an Observable?"
  },
  {
    kind: "paragraph",
    text: "Think of an Observable as **a producer of values**."
  },
  {
    kind: "paragraph",
    text: "It is **not the data itself**."
  },
  {
    kind: "paragraph",
    text: "It is **something that can produce data whenever it becomes available**."
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n      ↓\nProduces Values"
  },
  {
    kind: "paragraph",
    text: "It is similar to a TV channel."
  },
  {
    kind: "paragraph",
    text: "The TV channel isn't the movie."
  },
  {
    kind: "paragraph",
    text: "The TV channel **broadcasts** movies."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n        ↓\nBroadcasts values"
  },
  {
    kind: "heading",
    level: 2,
    text: "HTTP Example"
  },
  {
    kind: "paragraph",
    text: "When Angular executes it,"
  },
  {
    kind: "paragraph",
    text: "the employee list is **not available yet**."
  },
  {
    kind: "paragraph",
    text: "The server hasn't replied."
  },
  {
    kind: "paragraph",
    text: "So HttpClient says,"
  },
  {
    kind: "quote",
    text: "\"I'll give you an Observable.\""
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n      ↓\nCreate HTTP Request\n      ↓\nObservable Created\n      ↓\nWaiting..."
  },
  {
    kind: "paragraph",
    text: "The Observable is now waiting."
  },
  {
    kind: "paragraph",
    text: "Nothing has happened yet."
  },
  {
    kind: "heading",
    level: 3,
    text: "After 2 seconds..."
  },
  {
    kind: "paragraph",
    text: "Suppose the server replies."
  },
  {
    kind: "code",
    language: "text",
    code: "Employees\n\nJohn\n\nEmma\n\nDavid"
  },
  {
    kind: "paragraph",
    text: "Now the Observable says"
  },
  {
    kind: "quote",
    text: "\"Hey! I got the data.\""
  },
  {
    kind: "paragraph",
    text: "It **emits** it."
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n\n↓\n\nEmployees"
  },
  {
    kind: "paragraph",
    text: "Your `subscribe()` receives it."
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n\n↓\n\nEmployees\n\n↓\n\nsubscribe()\n\n↓\n\nComponent"
  },
  {
    kind: "paragraph",
    text: "Then,"
  },
  {
    kind: "paragraph",
    text: "the HTTP request is finished."
  },
  {
    kind: "paragraph",
    text: "The Observable completes."
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n\n↓\n\nData Sent\n\n↓\n\nCompleted"
  },
  {
    kind: "paragraph",
    text: "That's why HTTP Observables usually emit **once**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Then why do button clicks continue forever?"
  },
  {
    kind: "paragraph",
    text: "Now consider a button."
  },
  {
    kind: "code",
    language: "html",
    code: "<button>Save</button>"
  },
  {
    kind: "paragraph",
    text: "Angular can create an Observable for button clicks."
  },
  {
    kind: "paragraph",
    text: "Initially,"
  },
  {
    kind: "paragraph",
    text: "nobody has clicked."
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n\n↓\n\nWaiting..."
  },
  {
    kind: "paragraph",
    text: "You click once."
  },
  {
    kind: "paragraph",
    text: "Observable emits."
  },
  {
    kind: "code",
    language: "text",
    code: "Click 1\n\n↓\n\nObservable emits\n\n↓\n\nsubscribe()"
  },
  {
    kind: "paragraph",
    text: "you click again."
  },
  {
    kind: "code",
    language: "text",
    code: "Click 2\n\n↓\n\nObservable emits\n\n↓\n\nsubscribe()"
  },
  {
    kind: "paragraph",
    text: "Again."
  },
  {
    kind: "code",
    language: "text",
    code: "Click 3\n\n↓\n\nObservable emits"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "The button still exists."
  },
  {
    kind: "paragraph",
    text: "People can continue clicking forever."
  },
  {
    kind: "paragraph",
    text: "So the Observable keeps waiting."
  },
  {
    kind: "code",
    language: "text",
    code: "Waiting...\n\n↓\n\nClick\n\n↓\n\nEmit\n\n↓\n\nWaiting...\n\n↓\n\nClick\n\n↓\n\nEmit\n\n↓\n\nWaiting..."
  },
  {
    kind: "paragraph",
    text: "It never finishes unless the button disappears or you unsubscribe."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example — Mouse Movement"
  },
  {
    kind: "paragraph",
    text: "Imagine this."
  },
  {
    kind: "code",
    language: "text",
    code: "Move Mouse\n\n↓\n\nObservable\n\n↓\n\n(100,200)\n\n↓\n\nMove Again\n\n↓\n\n(120,210)\n\n↓\n\nMove Again\n\n↓\n\n(130,250)"
  },
  {
    kind: "paragraph",
    text: "Every movement produces another value."
  },
  {
    kind: "paragraph",
    text: "The Observable never says"
  },
  {
    kind: "paragraph",
    text: "\"I'm done.\""
  },
  {
    kind: "paragraph",
    text: "Because the mouse can continue moving."
  },
  {
    kind: "heading",
    level: 2,
    text: "HTTP"
  },
  {
    kind: "code",
    language: "text",
    code: "Create Request\n\n↓\n\nWaiting\n\n↓\n\nResponse Arrives\n\n↓\n\nEmit Data\n\n↓\n\nComplete"
  },
  {
    kind: "paragraph",
    text: "Only **one response**."
  },
  {
    kind: "paragraph",
    text: "Finished."
  },
  {
    kind: "heading",
    level: 2,
    text: "Button"
  },
  {
    kind: "code",
    language: "text",
    code: "Waiting\n\n↓\n\nClick\n\n↓\n\nEmit\n\n↓\n\nWaiting\n\n↓\n\nClick\n\n↓\n\nEmit\n\n↓\n\nWaiting\n\n↓\n\nClick\n\n↓\n\nEmit"
  },
  {
    kind: "paragraph",
    text: "Can continue forever."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Door Bell"
  },
  {
    kind: "paragraph",
    text: "Imagine your house."
  },
  {
    kind: "paragraph",
    text: "Someone rings the bell."
  },
  {
    kind: "code",
    language: "text",
    code: "🔔 Ding"
  },
  {
    kind: "paragraph",
    text: "You open the door."
  },
  {
    kind: "paragraph",
    text: "Five minutes later,"
  },
  {
    kind: "paragraph",
    text: "another person rings."
  },
  {
    kind: "paragraph",
    text: "Tomorrow,"
  },
  {
    kind: "paragraph",
    text: "another visitor."
  },
  {
    kind: "paragraph",
    text: "The doorbell never says,"
  },
  {
    kind: "quote",
    text: "\"I'm done forever.\""
  },
  {
    kind: "paragraph",
    text: "It keeps producing events whenever someone presses it."
  },
  {
    kind: "paragraph",
    text: "That's exactly what an Observable is."
  },
  {
    kind: "heading",
    level: 2,
    text: "The Real Definition"
  },
  {
    kind: "paragraph",
    text: "An Observable is simply"
  },
  {
    kind: "quote",
    text: "**something that produces values over time.**"
  },
  {
    kind: "paragraph",
    text: "Sometimes"
  },
  {
    kind: "paragraph",
    text: "it produces"
  },
  {
    kind: "paragraph",
    text: "one value."
  },
  {
    kind: "code",
    language: "text",
    code: "HTTP Response"
  },
  {
    kind: "code",
    language: "text",
    code: "Button Clicks\n\nMouse Moves\n\nKeyboard Typing\n\nNotifications\n\nWebSocket Messages"
  },
  {
    kind: "heading",
    level: 2,
    text: "The Complete Picture"
  },
  {
    kind: "code",
    language: "text",
    code: "Observable\n      ↓\nProduces values\n      ↓\nsubscribe() listens\n      ↓\nWhenever a value is produced\n      ↓\nsubscribe() receives it"
  },
  {
    kind: "paragraph",
    text: "So the relationship is:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Observable** = the producer (it creates/emits values)",
      "**subscribe()** = the listener (it reacts to emitted values)"
    ]
  },
  {
    kind: "paragraph",
    text: "This is the mental model that will make the rest of RxJS much easier to understand."
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"save()\">Save</button>"
  },
  {
    kind: "code",
    language: "ts",
    code: "save() {\n  console.log('Saved');\n}"
  },
  {
    kind: "paragraph",
    text: "This is the normal Angular way, and it's what you'll use 95% of the time."
  },
  {
    kind: "paragraph",
    text: "So then..."
  },
  {
    kind: "quote",
    text: "**Why do people say button clicks are Observables?**"
  },
  {
    kind: "paragraph",
    text: "Because **under the hood, a click is an event stream**."
  },
  {
    kind: "paragraph",
    text: "Imagine the button exists for the entire lifetime of the page."
  },
  {
    kind: "code",
    language: "text",
    code: "Button Exists\n\n↓\n\nClick\n\n↓\n\nClick\n\n↓\n\nClick\n\n↓\n\nClick"
  },
  {
    kind: "paragraph",
    text: "The clicks keep coming over time."
  },
  {
    kind: "paragraph",
    text: "RxJS can convert that stream of clicks into an Observable."
  },
  {
    kind: "paragraph",
    text: "Example (not common in everyday Angular apps):"
  },
  {
    kind: "code",
    language: "ts",
    code: "fromEvent(button, 'click')\n  .subscribe(() => {\n    console.log('Clicked');\n  });"
  },
  {
    kind: "paragraph",
    text: "Every click emits a new value."
  },
  {
    kind: "heading",
    level: 2,
    text: "Do we use this in real Angular projects?"
  },
  {
    kind: "paragraph",
    text: "**Very rarely.**"
  },
  {
    kind: "paragraph",
    text: "Instead, Angular's template syntax already handles clicks."
  },
  {
    kind: "paragraph",
    text: "This is simpler and preferred."
  },
  {
    kind: "heading",
    level: 2,
    text: "Where do we actually use Observables in real projects?"
  },
  {
    kind: "paragraph",
    text: "These are the places you'll use every day:"
  },
  {
    kind: "heading",
    level: 3,
    text: "1. HTTP Requests ⭐⭐⭐⭐⭐"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeService.getEmployees()\n  .subscribe(...)"
  },
  {
    kind: "heading",
    level: 3,
    text: "2. Route Parameters ⭐⭐⭐⭐"
  },
  {
    kind: "paragraph",
    text: "When the URL changes while staying on the same component."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.route.params.subscribe(params => {\n  console.log(params['id']);\n});"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/101\n\n↓\n\n/employees/102\n\n↓\n\n/employees/103"
  },
  {
    kind: "paragraph",
    text: "The component doesn't reload, but the Observable emits each new ID."
  },
  {
    kind: "heading",
    level: 3,
    text: "3. Search Box ⭐⭐⭐⭐⭐"
  },
  {
    kind: "paragraph",
    text: "Imagine Google search."
  },
  {
    kind: "paragraph",
    text: "Every key press emits a new value."
  },
  {
    kind: "code",
    language: "text",
    code: "A\n\n↓\n\nAn\n\n↓\n\nAng\n\n↓\n\nAngu\n\n↓\n\nAngular"
  },
  {
    kind: "paragraph",
    text: "You don't wait until the user finishes typing."
  },
  {
    kind: "paragraph",
    text: "You react to every change."
  },
  {
    kind: "heading",
    level: 3,
    text: "4. Form Value Changes ⭐⭐⭐⭐"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.form.valueChanges.subscribe(value => {\n  console.log(value);\n});"
  },
  {
    kind: "paragraph",
    text: "Whenever the user types,"
  },
  {
    kind: "paragraph",
    text: "the Observable emits the latest form value."
  },
  {
    kind: "heading",
    level: 3,
    text: "5. WebSockets / Live Notifications ⭐⭐⭐⭐⭐"
  },
  {
    kind: "code",
    language: "text",
    code: "New Notification\n\n↓\n\nObservable emits\n\n↓\n\nHeader Updates\n\n↓\n\nAnother Notification\n\n↓\n\nObservable emits"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why does HttpClient return an Observable?"
  },
  {
    kind: "paragraph",
    text: "This is the biggest real-world use."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular\n\n↓\n\nGET /employees\n\n↓\n\nWaiting...\n\n↓\n\nServer Responds\n\n↓\n\nObservable emits\n\n↓\n\nsubscribe() runs"
  },
  {
    kind: "heading",
    level: 2,
    text: "My advice for learning RxJS"
  },
  {
    kind: "paragraph",
    text: "Don't think:"
  },
  {
    kind: "quote",
    text: "\"Button clicks are Observables.\""
  },
  {
    kind: "paragraph",
    text: "Instead think:"
  },
  {
    kind: "quote",
    text: "**\"An Observable represents a stream of values over time.\"**"
  },
  {
    kind: "paragraph",
    text: "Sometimes that stream is:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "One HTTP response ✅",
      "Many search text changes ✅",
      "Many route changes ✅",
      "Many notifications ✅",
      "Many WebSocket messages ✅"
    ]
  },
  {
    kind: "paragraph",
    text: "Button clicks are just **one possible stream**, but they're **not the reason RxJS exists in Angular**."
  },
  {
    kind: "paragraph",
    text: "For an Angular developer, the four Observables you'll use most are:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "**HttpClient** ⭐⭐⭐⭐⭐",
      "**ActivatedRoute** (route/query parameters) ⭐⭐⭐⭐",
      "**Reactive Forms** (`valueChanges`) ⭐⭐⭐⭐",
      "**WebSockets / real-time updates** ⭐⭐⭐"
    ]
  }
];
