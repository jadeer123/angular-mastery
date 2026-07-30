import { LessonBlock } from '../topic.model';

export const lesson02DataBinding: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "What is Data Binding?"
  },
  {
    kind: "paragraph",
    text: "Imagine your component has a variable:"
  },
  {
    kind: "code",
    language: "ts",
    code: "title = 'Angular Mastery';"
  },
  {
    kind: "paragraph",
    text: "How do you display it in HTML?"
  },
  {
    kind: "paragraph",
    text: "How do you change an image?"
  },
  {
    kind: "paragraph",
    text: "How do you know when a button is clicked?"
  },
  {
    kind: "paragraph",
    text: "How do you get what the user types?"
  },
  {
    kind: "paragraph",
    text: "Angular solves all of these using **Data Binding**."
  },
  {
    kind: "paragraph",
    text: "There are **4 types**."
  },
  {
    kind: "code",
    language: "text",
    code: "                Data Binding\n\n                    |\n    -----------------------------------\n    |          |           |          |\nInterpolation Property    Event     Two-way\nBinding       Binding     Binding   Binding"
  },
  {
    kind: "heading",
    level: 2,
    text: "1. Interpolation"
  },
  {
    kind: "paragraph",
    text: "Suppose your component has"
  },
  {
    kind: "heading",
    level: 3,
    text: "dashboard.ts"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class DashboardComponent {\n\n  appName = 'Angular Mastery';\n\n  student = 'Jo';\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now display it."
  },
  {
    kind: "heading",
    level: 3,
    text: "dashboard.html"
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>{{ appName }}</h1>\n\n<p>Welcome {{ student }}</p>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Mastery\n\nWelcome Jo"
  },
  {
    kind: "heading",
    level: 2,
    text: "What happened?"
  },
  {
    kind: "paragraph",
    text: "Angular reads"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ appName }}"
  },
  {
    kind: "paragraph",
    text: "and replaces it with"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Mastery"
  },
  {
    kind: "paragraph",
    text: "Think of it like:"
  },
  {
    kind: "code",
    language: "text",
    code: "Variable\n\n↓\n\nHTML\n\n↓\n\nScreen"
  },
  {
    kind: "paragraph",
    text: "Interpolation is used for **displaying data**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Exercise"
  },
  {
    kind: "paragraph",
    text: "Add these variables."
  },
  {
    kind: "code",
    language: "ts",
    code: "todayLesson = 'Data Binding';\n\nprogress = 2;\n\ncompleted = false;"
  },
  {
    kind: "paragraph",
    text: "Display them."
  },
  {
    kind: "code",
    language: "html",
    code: "Today's Lesson\n\nProgress\n\nCompleted"
  },
  {
    kind: "heading",
    level: 2,
    text: "2. Property Binding"
  },
  {
    kind: "paragraph",
    text: "Suppose we have an image."
  },
  {
    kind: "code",
    language: "html",
    code: "<img src=\"image.png\">"
  },
  {
    kind: "paragraph",
    text: "What if the image changes dynamically?"
  },
  {
    kind: "paragraph",
    text: "Angular says"
  },
  {
    kind: "paragraph",
    text: "Don't do this:"
  },
  {
    kind: "code",
    language: "html",
    code: "<img src=\"{{imageUrl}}\">"
  },
  {
    kind: "paragraph",
    text: "Instead use **Property Binding**."
  },
  {
    kind: "paragraph",
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "imageUrl =\n'https://picsum.photos/300/150';"
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "paragraph",
    text: "A random image appears."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another example"
  },
  {
    kind: "paragraph",
    text: "Disable button."
  },
  {
    kind: "code",
    language: "ts",
    code: "isCompleted = false;"
  },
  {
    kind: "paragraph",
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<button [disabled]=\"isCompleted\">\nComplete\n</button>"
  },
  {
    kind: "paragraph",
    text: "If"
  },
  {
    kind: "code",
    language: "ts",
    code: "isCompleted = true;"
  },
  {
    kind: "paragraph",
    text: "Button becomes disabled."
  },
  {
    kind: "paragraph",
    text: "No JavaScript required."
  },
  {
    kind: "paragraph",
    text: "Create"
  },
  {
    kind: "code",
    language: "ts",
    code: "isPremium = true;"
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "html",
    code: "<button [disabled]=\"!isPremium\">\nDownload Notes\n</button>"
  },
  {
    kind: "heading",
    level: 2,
    text: "3. Event Binding"
  },
  {
    kind: "paragraph",
    text: "Until now"
  },
  {
    kind: "paragraph",
    text: "The button does nothing."
  },
  {
    kind: "paragraph",
    text: "Let's make it react."
  },
  {
    kind: "code",
    language: "ts",
    code: "count = 0;\n\nincrease(){\n\n    this.count++;\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"increase()\">\n\nIncrease\n\n</button>\n\n<h2>{{count}}</h2>"
  },
  {
    kind: "paragraph",
    text: "Click"
  },
  {
    kind: "paragraph",
    text: "0"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "1"
  },
  {
    kind: "paragraph",
    text: "2"
  },
  {
    kind: "paragraph",
    text: "3"
  },
  {
    kind: "paragraph",
    text: "Angular listens for the click event."
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"showMessage()\">\n\nClick Me\n\n</button>"
  },
  {
    kind: "code",
    language: "ts",
    code: "showMessage(){\n\nalert(\"Welcome!\");\n\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "likes = 0;\n\nlike(){\n\nthis.likes++;\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "❤️ Like\n\n{{likes}}"
  },
  {
    kind: "heading",
    level: 2,
    text: "4. Two-Way Binding"
  },
  {
    kind: "paragraph",
    text: "This is probably the coolest one."
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "paragraph",
    text: "User types"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular"
  },
  {
    kind: "paragraph",
    text: "Immediately"
  },
  {
    kind: "paragraph",
    text: "The screen updates."
  },
  {
    kind: "code",
    language: "html",
    code: "<input [(ngModel)]=\"student\">\n\n<h2>{{student}}</h2>"
  },
  {
    kind: "paragraph",
    text: "If user types"
  },
  {
    kind: "code",
    language: "text",
    code: "Hello"
  },
  {
    kind: "paragraph",
    text: "No JavaScript."
  },
  {
    kind: "paragraph",
    text: "No DOM manipulation."
  },
  {
    kind: "paragraph",
    text: "Angular keeps"
  },
  {
    kind: "code",
    language: "text",
    code: "Input\n\n↓\n\nVariable\n\n↓\n\nHTML"
  },
  {
    kind: "paragraph",
    text: "all synchronized."
  },
  {
    kind: "heading",
    level: 2,
    text: "Wait..."
  },
  {
    kind: "paragraph",
    text: "`ngModel` doesn't work yet!"
  },
  {
    kind: "paragraph",
    text: "Because this is a standalone app, import `FormsModule`."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-dashboard',\n  standalone: true,\n  imports: [FormsModule],\n  ...\n})"
  },
  {
    kind: "heading",
    level: 2,
    text: "Let's Improve Our Dashboard"
  },
  {
    kind: "paragraph",
    text: "Instead of static cards, create a small \"Add Task\" section."
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Component } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-dashboard',\n  standalone: true,\n  imports: [FormsModule],\n  templateUrl: './dashboard.html',\n  styleUrl: './dashboard.scss'\n})\nexport class DashboardComponent {\n\n  student = 'Jo';\n\n  newTask = '';\n\n  totalTasks = 0;\n\n  addTask() {\n    if (!this.newTask.trim()) return;\n\n    this.totalTasks++;\n\n    alert(`Task Added: ${this.newTask}`);\n\n    this.newTask = '';\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>Welcome {{ student }} 👋</h1>\n\n<div class=\"task-box\">\n\n  <input\n    type=\"text\"\n    placeholder=\"Enter task\"\n    [(ngModel)]=\"newTask\">\n\n  <button (click)=\"addTask()\">\n    Add Task\n  </button>\n\n</div>\n\n<p>Total Tasks : {{ totalTasks }}</p>\n\n<p>Typing : {{ newTask }}</p>"
  },
  {
    kind: "heading",
    level: 3,
    text: "dashboard.scss"
  },
  {
    kind: "code",
    language: "scss",
    code: ".task-box {\n  display: flex;\n  gap: 12px;\n  margin: 24px 0;\n}\n\ninput {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 16px;\n}\n\nbutton {\n  background: #2563eb;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #1d4ed8;\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What You've Learned"
  },
  {
    kind: "table",
    headers: [
      "Concept",
      "Syntax",
      "Purpose"
    ],
    rows: [
      [
        "Interpolation",
        "`{{ value }}`",
        "Display data"
      ],
      [
        "Property Binding",
        "`[property]=\"value\"`",
        "Set element properties dynamically"
      ],
      [
        "Event Binding",
        "`(event)=\"method()\"`",
        "Respond to user actions"
      ],
      [
        "Two-way Binding",
        "`[(ngModel)]=\"value\"`",
        "Keep input and variable synchronized"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge (Don't Skip!)"
  },
  {
    kind: "paragraph",
    text: "Without looking at the solution, try to make this work:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "Add a **\"Reset\"** button that sets `totalTasks` back to `0`.",
      "Show the message **\"No tasks yet\"** when `totalTasks` is `0`.",
      "Disable the **Add Task** button when the input is empty using **property binding**.",
      "Change the welcome message to include your own name by editing the `student` variable."
    ]
  },
  {
    kind: "paragraph",
    text: "If you can complete these four tasks, you've already practiced all four types of data binding."
  },
  {
    kind: "paragraph",
    text: "The short answer is:"
  },
  {
    kind: "quote",
    text: "**Yes, sometimes `src=\"{{imageUrl}}\"` works. But property binding is the correct Angular way because it binds to the DOM property, not just the HTML attribute.**"
  },
  {
    kind: "paragraph",
    text: "Let's understand why."
  },
  {
    kind: "heading",
    level: 2,
    text: "First, what's the difference?"
  },
  {
    kind: "paragraph",
    text: "Consider this HTML:"
  },
  {
    kind: "code",
    language: "html",
    code: "<img src=\"cat.png\">"
  },
  {
    kind: "paragraph",
    text: "Here, `src` is an **HTML attribute**."
  },
  {
    kind: "paragraph",
    text: "But when the browser creates the `<img>` element, it also creates a JavaScript object."
  },
  {
    kind: "code",
    language: "javascript",
    code: "const img = document.createElement('img');"
  },
  {
    kind: "paragraph",
    text: "That object has a **property**:"
  },
  {
    kind: "code",
    language: "javascript",
    code: "img.src = \"cat.png\";"
  },
  {
    kind: "paragraph",
    text: "Notice the difference:"
  },
  {
    kind: "code",
    language: "text",
    code: "HTML Attribute       DOM Property\n\nsrc=\"cat.png\"   →    img.src = \"cat.png\""
  },
  {
    kind: "paragraph",
    text: "Angular mostly works with **DOM properties**, not HTML attributes."
  },
  {
    kind: "heading",
    level: 2,
    text: "Interpolation"
  },
  {
    kind: "paragraph",
    text: "Suppose you write"
  },
  {
    kind: "paragraph",
    text: "Angular first creates a string."
  },
  {
    kind: "code",
    language: "ts",
    code: "imageUrl = 'cat.png';"
  },
  {
    kind: "paragraph",
    text: "Angular produces:"
  },
  {
    kind: "paragraph",
    text: "This is basically **string replacement**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Property Binding"
  },
  {
    kind: "paragraph",
    text: "Now write"
  },
  {
    kind: "paragraph",
    text: "Angular does something different."
  },
  {
    kind: "paragraph",
    text: "It executes JavaScript similar to:"
  },
  {
    kind: "code",
    language: "javascript",
    code: "img.src = imageUrl;"
  },
  {
    kind: "paragraph",
    text: "It directly updates the DOM property."
  },
  {
    kind: "heading",
    level: 2,
    text: "\"But both show the image!\""
  },
  {
    kind: "paragraph",
    text: "Exactly."
  },
  {
    kind: "paragraph",
    text: "For `src`, both often appear to work."
  },
  {
    kind: "paragraph",
    text: "That's why beginners get confused."
  },
  {
    kind: "paragraph",
    text: "For simple cases, you may not notice any difference."
  },
  {
    kind: "heading",
    level: 2,
    text: "Here's where interpolation fails"
  },
  {
    kind: "paragraph",
    text: "Suppose you want to disable a button."
  },
  {
    kind: "paragraph",
    text: "You write"
  },
  {
    kind: "code",
    language: "html",
    code: "<button disabled=\"{{isDisabled}}\">"
  },
  {
    kind: "code",
    language: "ts",
    code: "isDisabled = false;"
  },
  {
    kind: "paragraph",
    text: "Angular generates"
  },
  {
    kind: "code",
    language: "html",
    code: "<button disabled=\"false\">"
  },
  {
    kind: "paragraph",
    text: "Looks fine?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "In HTML,"
  },
  {
    kind: "code",
    language: "html",
    code: "disabled=\"false\""
  },
  {
    kind: "paragraph",
    text: "still means"
  },
  {
    kind: "code",
    language: "text",
    code: "Disabled"
  },
  {
    kind: "paragraph",
    text: "because the **presence** of the `disabled` attribute disables the button."
  },
  {
    kind: "paragraph",
    text: "The value `\"false\"` is just a string."
  },
  {
    kind: "paragraph",
    text: "Now use property binding."
  },
  {
    kind: "paragraph",
    text: "Angular does"
  },
  {
    kind: "code",
    language: "javascript",
    code: "button.disabled = false;"
  },
  {
    kind: "paragraph",
    text: "Now the button is enabled."
  },
  {
    kind: "paragraph",
    text: "This is the correct behavior."
  },
  {
    kind: "paragraph",
    text: "Checkbox"
  },
  {
    kind: "code",
    language: "html",
    code: "<input type=\"checkbox\" checked=\"{{isChecked}}\">"
  },
  {
    kind: "code",
    language: "ts",
    code: "isChecked = false;"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "html",
    code: "checked=\"false\""
  },
  {
    kind: "paragraph",
    text: "But the checkbox is **still checked** because the `checked` attribute exists."
  },
  {
    kind: "paragraph",
    text: "Correct way:"
  },
  {
    kind: "paragraph",
    text: "Angular sets"
  },
  {
    kind: "code",
    language: "javascript",
    code: "checkbox.checked = false;"
  },
  {
    kind: "paragraph",
    text: "Now it works correctly."
  },
  {
    kind: "paragraph",
    text: "CSS Class"
  },
  {
    kind: "paragraph",
    text: "Wrong"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"{{className}}\">"
  },
  {
    kind: "paragraph",
    text: "Works sometimes."
  },
  {
    kind: "paragraph",
    text: "Better"
  },
  {
    kind: "paragraph",
    text: "Or even better"
  },
  {
    kind: "code",
    language: "html",
    code: "<div [ngClass]=\"{\n  active:isActive,\n  disabled:isDisabled\n}\">"
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular Recommendation"
  },
  {
    kind: "paragraph",
    text: "Use **Interpolation** when you're displaying text."
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>{{title}}</h1>\n\n<p>{{name}}</p>\n\n<span>{{price}}</span>"
  },
  {
    kind: "paragraph",
    text: "Use **Property Binding** when setting an element's property."
  },
  {
    kind: "code",
    language: "html",
    code: "<img [src]=\"image\">\n\n<button [disabled]=\"loading\">\n\n<input [value]=\"username\">\n\n<div [hidden]=\"isHidden\">"
  },
  {
    kind: "heading",
    level: 2,
    text: "Interpolation → Text"
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>{{title}}</h1>"
  },
  {
    kind: "paragraph",
    text: "You're putting text between tags."
  },
  {
    kind: "heading",
    level: 2,
    text: "Property Binding → Properties"
  },
  {
    kind: "code",
    language: "html",
    code: "<img [src]=\"image\">\n\n<button [disabled]=\"loading\">\n\n<input [value]=\"name\">"
  },
  {
    kind: "paragraph",
    text: "You're configuring how the HTML element behaves."
  },
  {
    kind: "heading",
    level: 2,
    text: "A good question"
  },
  {
    kind: "paragraph",
    text: "You might now ask:"
  },
  {
    kind: "quote",
    text: "**If interpolation can sometimes be used inside attributes like `src=\"{{imageUrl}}\"`, why did Angular even create property binding?**"
  },
  {
    kind: "paragraph",
    text: "The answer is that **interpolation in attributes is essentially syntactic sugar**. Angular internally treats many interpolated attributes as property bindings where appropriate. However, property binding is **explicit**, works consistently with DOM properties (especially boolean and object properties), and clearly communicates your intent. It's the recommended style because it avoids subtle bugs like the `disabled=\"false\"` example and works correctly across all bindable properties."
  },
  {
    kind: "paragraph",
    text: "This was a great question. It shows you're thinking about **how Angular works internally**, which is exactly the mindset needed to master the framework."
  },
  {
    kind: "heading",
    level: 2,
    text: "Dashboard UI"
  },
  {
    kind: "code",
    language: "text",
    code: "---------------------------------------------------\n\nWelcome Jo 👋\n\nToday's Lesson : Data Binding\n\n-----------------------------------\n\nTask Name\n\n[__________________________]\n\n(Add Task)   (Reset)\n\n-----------------------------------\n\nTyping : Learn Angular\n\nTotal Tasks : 3\n\nPremium User : Yes\n\n-----------------------------------\n\n📚 Angular Components\n\n📚 Data Binding\n\n📚 Directives\n\n---------------------------------------------------"
  },
  {
    kind: "paragraph",
    text: "Now let's implement every part using the appropriate binding."
  },
  {
    kind: "heading",
    level: 2,
    text: "dashboard.component.ts"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class DashboardComponent {\n\n  student = 'Jo';\n\n  lesson = 'Data Binding';\n\n  newTask = '';\n\n  totalTasks = 0;\n\n  isPremium = true;\n\n  tasks = [\n    'Angular Components',\n    'Data Binding',\n    'Directives'\n  ];\n\n  addTask() {\n\n    if (!this.newTask.trim()) return;\n\n    this.tasks.push(this.newTask);\n\n    this.totalTasks = this.tasks.length;\n\n    this.newTask = '';\n\n  }\n\n  reset() {\n\n    this.tasks = [];\n\n    this.totalTasks = 0;\n\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now let's build the HTML."
  },
  {
    kind: "paragraph",
    text: "Used to **display data**."
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>Welcome {{ student }} 👋</h1>\n\n<h3>Today's Lesson : {{ lesson }}</h3>\n\n<p>Total Tasks : {{ totalTasks }}</p>\n\n<p>Typing : {{ newTask }}</p>\n\n<p>\n    Premium User :\n    {{ isPremium ? 'Yes' : 'No' }}\n</p>"
  },
  {
    kind: "paragraph",
    text: "Notice that interpolation is simply **showing values**."
  },
  {
    kind: "paragraph",
    text: "Used to control an element's properties."
  },
  {
    kind: "paragraph",
    text: "Disable the Add button when the input is empty."
  },
  {
    kind: "code",
    language: "html",
    code: "<button\n    [disabled]=\"!newTask.trim()\">\n    Add Task\n</button>"
  },
  {
    kind: "paragraph",
    text: "Another example:"
  },
  {
    kind: "code",
    language: "html",
    code: "<input\n    [placeholder]=\"lesson\">"
  },
  {
    kind: "paragraph",
    text: "Instead of writing"
  },
  {
    kind: "code",
    language: "html",
    code: "placeholder=\"Data Binding\""
  },
  {
    kind: "paragraph",
    text: "the placeholder changes automatically if `lesson` changes."
  },
  {
    kind: "paragraph",
    text: "Respond to user actions."
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"addTask()\">\n    Add Task\n</button>\n\n<button (click)=\"reset()\">\n    Reset\n</button>"
  },
  {
    kind: "paragraph",
    text: "Whenever the user clicks, Angular calls the corresponding method."
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ Two-Way Binding (`[(ngModel)]`)"
  },
  {
    kind: "paragraph",
    text: "Synchronize the input with the component."
  },
  {
    kind: "code",
    language: "html",
    code: "<input\n    type=\"text\"\n    [(ngModel)]=\"newTask\"\n    [placeholder]=\"lesson\">"
  },
  {
    kind: "paragraph",
    text: "Now:"
  },
  {
    kind: "code",
    language: "text",
    code: "Learn Signals"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ newTask }}"
  },
  {
    kind: "paragraph",
    text: "also becomes"
  },
  {
    kind: "paragraph",
    text: "No extra code needed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Display the Tasks"
  },
  {
    kind: "paragraph",
    text: "For now, we'll use `@for` in the next lesson, but you can temporarily use `*ngFor` if you haven't reached the new control flow syntax yet."
  },
  {
    kind: "code",
    language: "html",
    code: "<ul>\n\n    <li *ngFor=\"let task of tasks\">\n\n        {{ task }}\n\n    </li>\n\n</ul>"
  },
  {
    kind: "paragraph",
    text: "In the next lesson, we'll replace this with:"
  },
  {
    kind: "code",
    language: "html",
    code: "@for (task of tasks; track task) {\n\n    <li>{{ task }}</li>\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Simple Styling"
  },
  {
    kind: "code",
    language: "scss",
    code: ".task-section {\n    margin-top: 24px;\n}\n\ninput {\n    width: 300px;\n    padding: 10px;\n    border-radius: 6px;\n    border: 1px solid #ccc;\n}\n\nbutton {\n    margin-left: 10px;\n    padding: 10px 18px;\n    border: none;\n    background: #2563eb;\n    color: white;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\nbutton:disabled {\n    background: #bdbdbd;\n    cursor: not-allowed;\n}\n\nul {\n    margin-top: 20px;\n}\n\nli {\n    margin: 8px 0;\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "See how all four bindings work together"
  },
  {
    kind: "table",
    headers: [
      "UI Element",
      "Binding Type",
      "Why?"
    ],
    rows: [
      [
        "`{{ student }}`",
        "Interpolation",
        "Display text"
      ],
      [
        "`{{ totalTasks }}`",
        "Interpolation",
        "Display a number"
      ],
      [
        "`[placeholder]=\"lesson\"`",
        "Property Binding",
        "Set an element property dynamically"
      ],
      [
        "`[disabled]=\"!newTask.trim()\"`",
        "Property Binding",
        "Enable/disable a button"
      ],
      [
        "`(click)=\"addTask()\"`",
        "Event Binding",
        "React to a click"
      ],
      [
        "`(click)=\"reset()\"`",
        "Event Binding",
        "Handle reset"
      ],
      [
        "`[(ngModel)]=\"newTask\"`",
        "Two-way Binding",
        "Keep the input and component in sync"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "One improvement I'd make"
  },
  {
    kind: "paragraph",
    text: "Right now, `totalTasks` is a separate variable that you update manually. That works for learning data binding, but later we'll replace it with a **Signal** or compute it directly from the array:"
  },
  {
    kind: "code",
    language: "ts",
    code: "get totalTasks() {\n  return this.tasks.length;\n}"
  },
  {
    kind: "paragraph",
    text: "or with Signals:"
  },
  {
    kind: "code",
    language: "ts",
    code: "totalTasks = computed(() => this.tasks().length);"
  },
  {
    kind: "paragraph",
    text: "This will introduce another Angular concept: **derived state**. For now, keeping `totalTasks` as a simple variable is perfectly fine because it keeps the focus on learning the four types of data binding."
  },
  {
    kind: "code",
    language: "text",
    code: "features/\n│\n├── component-lesson/\n├── data-binding-lesson/\n├── directives-lesson/\n├── signals-lesson/\n..."
  },
  {
    kind: "paragraph",
    text: "Each lesson will be a complete tutorial page."
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 1. What is Data Binding?"
  },
  {
    kind: "paragraph",
    text: "Explain exactly as we discussed."
  },
  {
    kind: "quote",
    text: "Imagine your component has a variable."
  },
  {
    kind: "paragraph",
    text: "Questions:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "How do you display it in HTML?",
      "How do you change an image?",
      "How do you know when a button is clicked?",
      "How do you get what the user types?"
    ]
  },
  {
    kind: "paragraph",
    text: "Angular solves all these problems using **Data Binding**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Data Binding?"
  },
  {
    kind: "paragraph",
    text: "Without Angular"
  },
  {
    kind: "code",
    language: "javascript",
    code: "document.getElementById('title').innerText = title;"
  },
  {
    kind: "code",
    language: "javascript",
    code: "button.addEventListener(...)"
  },
  {
    kind: "code",
    language: "javascript",
    code: "input.addEventListener(...)"
  },
  {
    kind: "paragraph",
    text: "Everything has to be done manually."
  },
  {
    kind: "paragraph",
    text: "Angular removes this manual DOM manipulation."
  },
  {
    kind: "heading",
    level: 2,
    text: "🔄 Types of Data Binding"
  },
  {
    kind: "paragraph",
    text: "Show a nice diagram."
  },
  {
    kind: "code",
    language: "text",
    code: "                Data Binding\n\n                    │\n\n     -------------------------------------\n\n      │          │           │         │\n\nInterpolation  Property    Event    Two-Way\n\nBinding        Binding     Binding  Binding"
  },
  {
    kind: "paragraph",
    text: "Definition"
  },
  {
    kind: "quote",
    text: "Used to display data from the component inside HTML."
  },
  {
    kind: "code",
    language: "ts",
    code: "title = 'Angular Mastery';\n\nstudent = 'Jo';"
  },
  {
    kind: "code",
    language: "html",
    code: "<h1>{{ title }}</h1>\n\n<p>Welcome {{ student }}</p>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Explain"
  },
  {
    kind: "paragraph",
    text: "Angular replaces"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ title }}"
  },
  {
    kind: "paragraph",
    text: "with"
  },
  {
    kind: "heading",
    level: 3,
    text: "When to use?"
  },
  {
    kind: "paragraph",
    text: "✔ Display text"
  },
  {
    kind: "paragraph",
    text: "✔ Numbers"
  },
  {
    kind: "paragraph",
    text: "✔ Dates"
  },
  {
    kind: "paragraph",
    text: "✔ Variables"
  },
  {
    kind: "paragraph",
    text: "Used to set **DOM properties** dynamically."
  },
  {
    kind: "paragraph",
    text: "Explain why we don't use"
  },
  {
    kind: "paragraph",
    text: "Introduce the difference between:"
  },
  {
    kind: "paragraph",
    text: "Attribute"
  },
  {
    kind: "paragraph",
    text: "Property"
  },
  {
    kind: "code",
    language: "ts",
    code: "imageUrl = 'assets/angular.png';"
  },
  {
    kind: "code",
    language: "html",
    code: "<button [disabled]=\"isLoading\">\n\nSave\n\n</button>"
  },
  {
    kind: "code",
    language: "ts",
    code: "isLoading = true;"
  },
  {
    kind: "paragraph",
    text: "Explain:"
  },
  {
    kind: "paragraph",
    text: "When `isLoading` becomes true, Angular updates the DOM property automatically."
  },
  {
    kind: "heading",
    level: 3,
    text: "Why not interpolation?"
  },
  {
    kind: "paragraph",
    text: "Include the example we discussed."
  },
  {
    kind: "paragraph",
    text: "Still disabled."
  },
  {
    kind: "paragraph",
    text: "Explain why."
  },
  {
    kind: "paragraph",
    text: "Works correctly."
  },
  {
    kind: "paragraph",
    text: "This explanation is very important."
  },
  {
    kind: "paragraph",
    text: "Responds to user events."
  },
  {
    kind: "code",
    language: "html",
    code: "<button (click)=\"increase()\">\n\nIncrease\n\n</button>"
  },
  {
    kind: "paragraph",
    text: "User clicks"
  },
  {
    kind: "paragraph",
    text: "Angular calls"
  },
  {
    kind: "paragraph",
    text: "increase()"
  },
  {
    kind: "paragraph",
    text: "UI updates."
  },
  {
    kind: "paragraph",
    text: "Other events"
  },
  {
    kind: "code",
    language: "html",
    code: "(click)\n\n(input)\n\n(change)\n\n(mouseenter)\n\n(mouseleave)\n\n(keyup)\n\n(keydown)\n\n(submit)"
  },
  {
    kind: "paragraph",
    text: "Synchronizes data in both directions."
  },
  {
    kind: "code",
    language: "ts",
    code: "name = '';"
  },
  {
    kind: "code",
    language: "html",
    code: "<input [(ngModel)]=\"name\">\n\n<p>{{name}}</p>"
  },
  {
    kind: "paragraph",
    text: "Typing"
  },
  {
    kind: "paragraph",
    text: "Variable changes"
  },
  {
    kind: "paragraph",
    text: "UI changes"
  },
  {
    kind: "paragraph",
    text: "No manual code."
  },
  {
    kind: "heading",
    level: 3,
    text: "Explain ngModel"
  },
  {
    kind: "paragraph",
    text: "Mention"
  },
  {
    kind: "code",
    language: "ts",
    code: "FormsModule"
  },
  {
    kind: "paragraph",
    text: "must be imported."
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Live Example"
  },
  {
    kind: "paragraph",
    text: "Build exactly what we created."
  },
  {
    kind: "code",
    language: "text",
    code: "Welcome Jo\n\nToday's Lesson\n\nData Binding\n\n------------------------\n\nEnter Task\n\n[____________]\n\n(Add Task)\n\nTyping\n\nAngular\n\nTotal Tasks\n\n3"
  },
  {
    kind: "paragraph",
    text: "Show"
  },
  {
    kind: "paragraph",
    text: "Interpolation"
  },
  {
    kind: "paragraph",
    text: "Property Binding"
  },
  {
    kind: "paragraph",
    text: "Event Binding"
  },
  {
    kind: "paragraph",
    text: "Two-way Binding"
  },
  {
    kind: "paragraph",
    text: "all in one example."
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real World Usage"
  },
  {
    kind: "table",
    headers: [
      "Feature",
      "Binding"
    ],
    rows: [
      [
        "Welcome User",
        "Interpolation"
      ],
      [
        "Profile Image",
        "Property Binding"
      ],
      [
        "Login Button",
        "Event Binding"
      ],
      [
        "Search Box",
        "Two-Way Binding"
      ],
      [
        "Disable Submit",
        "Property Binding"
      ],
      [
        "Search Input",
        "Two-Way Binding"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "⚠️ Common Mistakes"
  },
  {
    kind: "paragraph",
    text: "❌ Using interpolation instead of property binding."
  },
  {
    kind: "paragraph",
    text: "❌ Forgetting FormsModule."
  },
  {
    kind: "paragraph",
    text: "❌ Putting business logic in HTML."
  },
  {
    kind: "paragraph",
    text: "❌ Using two-way binding everywhere."
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Best Practices"
  },
  {
    kind: "paragraph",
    text: "Use"
  },
  {
    kind: "code",
    language: "html",
    code: "{{}}"
  },
  {
    kind: "paragraph",
    text: "For displaying text."
  },
  {
    kind: "paragraph",
    text: "For DOM properties."
  },
  {
    kind: "paragraph",
    text: "For events."
  },
  {
    kind: "paragraph",
    text: "For forms."
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Student Registration"
  },
  {
    kind: "paragraph",
    text: "Requirements"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Name textbox",
      "Age textbox",
      "Save button",
      "Disable Save when Name is empty",
      "Show entered values below"
    ]
  },
  {
    kind: "paragraph",
    text: "Use all four types of Data Binding."
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Summary"
  },
  {
    kind: "paragraph",
    text: "After this lesson you should know"
  },
  {
    kind: "paragraph",
    text: "✔ When to use each one"
  },
  {
    kind: "paragraph",
    text: "✔ Why Property Binding is different from Interpolation"
  },
  {
    kind: "heading",
    level: 2,
    text: "One suggestion for the course"
  },
  {
    kind: "paragraph",
    text: "From Lesson 2 onward, let's make every lesson **interactive**, not just descriptive."
  },
  {
    kind: "paragraph",
    text: "I would replace the current **Event Binding** section with this:"
  },
  {
    kind: "code",
    language: "html",
    code: "<!-- Event Binding -->\n\n<section>\n\n  <h2>3️⃣ Event Binding</h2>\n\n  <p>\n    Event Binding allows Angular to listen to events that happen in the browser.\n    Whenever the user interacts with the UI, Angular can execute a method from\n    your component.\n  </p>\n\n  <h3>Why do we need Event Binding?</h3>\n\n  <p>\n    Imagine you have a button.\n    Clicking the button should increase a counter.\n    Without Event Binding, Angular wouldn't know that the button was clicked.\n  </p>\n\n  <h3>Syntax</h3>\n\n<pre class=\"code-block\">\n(event)=\"method()\"\n</pre>\n\n  <p>\n    The event is written inside <strong>()</strong> brackets.\n    When that event occurs, Angular calls the specified method.\n  </p>\n\n  <h3>Example</h3>\n\n<pre class=\"code-block\">\ncount = 0;\n\nincrease() &#123;\n  this.count++;\n&#125;\n</pre>\n\n<pre class=\"code-block\">\n&lt;button (click)=\"increase()\"&gt;\n  Increase\n&lt;/button&gt;\n\n&lt;p&gt;Count : &#123;&#123; count &#125;&#125;&lt;/p&gt;\n</pre>\n\n  <div class=\"note\">\n\n    User clicks button\n\n    <br><br>\n\n    ↓\n\n    <br><br>\n\n    Angular fires <strong>click</strong> event\n\n    <br><br>\n\n    ↓\n\n    <br><br>\n\n    <strong>increase()</strong> method is called\n\n    <br><br>\n\n    ↓\n\n    <br><br>\n\n    count becomes 1\n\n    <br><br>\n\n    ↓\n\n    <br><br>\n\n    UI updates automatically\n\n  </div>\n\n  <h3>Common Events</h3>\n\n  <table class=\"binding-table\">\n\n    <thead>\n\n      <tr>\n        <th>Event</th>\n        <th>Triggered When</th>\n      </tr>\n\n    </thead>\n\n    <tbody>\n\n      <tr>\n        <td>(click)</td>\n        <td>User clicks an element</td>\n      </tr>\n\n      <tr>\n        <td>(input)</td>\n        <td>User types inside an input</td>\n      </tr>\n\n      <tr>\n        <td>(change)</td>\n        <td>Input value changes</td>\n      </tr>\n\n      <tr>\n        <td>(keyup)</td>\n        <td>User releases a key</td>\n      </tr>\n\n      <tr>\n        <td>(keydown)</td>\n        <td>User presses a key</td>\n      </tr>\n\n      <tr>\n        <td>(submit)</td>\n        <td>Form is submitted</td>\n      </tr>\n\n      <tr>\n        <td>(mouseenter)</td>\n        <td>Mouse enters an element</td>\n      </tr>\n\n      <tr>\n        <td>(mouseleave)</td>\n        <td>Mouse leaves an element</td>\n      </tr>\n\n    </tbody>\n\n  </table>\n\n  <h3>Real World Examples</h3>\n\n  <ul>\n\n    <li>Login button → (click)</li>\n\n    <li>Search textbox → (input)</li>\n\n    <li>Submit Form → (submit)</li>\n\n    <li>Open Menu → (mouseenter)</li>\n\n    <li>Save Button → (click)</li>\n\n  </ul>\n\n  <div class=\"note\">\n\n    <strong>Remember:</strong>\n\n    Event Binding sends information from the <b>View → Component</b>.\n\n  </div>\n\n</section>"
  },
  {
    kind: "heading",
    level: 3,
    text: "I would also improve the other three bindings in the same way."
  },
  {
    kind: "paragraph",
    text: "Instead of just showing code, every binding should follow the same learning pattern:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "**Definition** – What is it?",
      "**Why do we need it?**",
      "**Syntax**",
      "**Code Example**",
      "**How it works internally**",
      "**Flow Diagram**",
      "**Common Use Cases**",
      "**Real-world Example**",
      "**Common Mistakes**",
      "**Key Point to Remember**"
    ]
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Interpolation:** Explain how `{{ title }}` becomes text in the DOM.",
      "**Property Binding:** Explain the difference between **HTML attributes** and **DOM properties** (this was one of the most important discussions we had).",
      "**Event Binding:** Explain the **View → Component** flow.",
      "**Two-Way Binding:** Explain that it's effectively a combination of **Property Binding + Event Binding**, with `[(ngModel)]` keeping the component and view synchronized."
    ]
  }
];
