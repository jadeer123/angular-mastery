import { LessonBlock } from '../topic.model';

export const lesson11Forms: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is a Form?"
  },
  {
    kind: "paragraph",
    text: "Almost every application asks users to enter information."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login",
      "Registration",
      "Employee Details",
      "Leave Request",
      "Profile Update",
      "Payment"
    ]
  },
  {
    kind: "paragraph",
    text: "All of these are **Forms**."
  },
  {
    kind: "paragraph",
    text: "A Form is simply a way to collect information from the user."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Forms?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application."
  },
  {
    kind: "paragraph",
    text: "HR wants to add a new employee."
  },
  {
    kind: "paragraph",
    text: "They need to enter:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\nEmail\n\nPhone Number\n\nDepartment\n\nSalary"
  },
  {
    kind: "paragraph",
    text: "Where will the user enter this information?"
  },
  {
    kind: "paragraph",
    text: "Inside a form."
  },
  {
    kind: "paragraph",
    text: "Without forms,"
  },
  {
    kind: "paragraph",
    text: "users cannot send information to your application."
  },
  {
    kind: "heading",
    level: 2,
    text: "📝 Think of a Paper Form"
  },
  {
    kind: "paragraph",
    text: "Imagine visiting a hospital."
  },
  {
    kind: "paragraph",
    text: "The receptionist gives you a registration form."
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nAge\n\nGender\n\nPhone Number\n\nAddress"
  },
  {
    kind: "paragraph",
    text: "You fill it out."
  },
  {
    kind: "paragraph",
    text: "The receptionist checks if required fields are filled."
  },
  {
    kind: "paragraph",
    text: "Only then is it accepted."
  },
  {
    kind: "paragraph",
    text: "Angular Forms work exactly the same way."
  },
  {
    kind: "paragraph",
    text: "They collect user input,"
  },
  {
    kind: "paragraph",
    text: "validate it,"
  },
  {
    kind: "paragraph",
    text: "and submit it."
  },
  {
    kind: "heading",
    level: 2,
    text: "💼 HRMS Example"
  },
  {
    kind: "paragraph",
    text: "HR clicks **Add Employee**."
  },
  {
    kind: "paragraph",
    text: "A form appears."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\nEmail\n\nDepartment\n\nSalary\n\n[ Save ]"
  },
  {
    kind: "paragraph",
    text: "HR fills in the details."
  },
  {
    kind: "paragraph",
    text: "Clicks Save."
  },
  {
    kind: "paragraph",
    text: "The application validates the data."
  },
  {
    kind: "paragraph",
    text: "If everything is correct,"
  },
  {
    kind: "paragraph",
    text: "the employee is saved."
  },
  {
    kind: "heading",
    level: 2,
    text: "Form Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Enters Data\n\n↓\n\nAngular Form\n\n↓\n\nValidation\n\n↓\n\nValid?\n\n↓\n\nYes\n\n↓\n\nSubmit\n\n↓\n\nBackend API\n\n↓\n\nDatabase"
  },
  {
    kind: "heading",
    level: 2,
    text: "Types of Forms in Angular"
  },
  {
    kind: "paragraph",
    text: "Angular provides **two ways** to build forms."
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ Template-driven Forms"
  },
  {
    kind: "paragraph",
    text: "Most of the form logic is written in the HTML template."
  },
  {
    kind: "paragraph",
    text: "Best for:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Small forms",
      "Simple applications",
      "Beginners"
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login",
      "Contact Form",
      "Feedback Form"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ Reactive Forms"
  },
  {
    kind: "paragraph",
    text: "Most of the form logic is written in TypeScript."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Large forms",
      "Complex validation",
      "Enterprise applications"
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HRMS Employee Form",
      "Payroll",
      "Banking",
      "Insurance",
      "Multi-step Registration"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of Building a House"
  },
  {
    kind: "paragraph",
    text: "Imagine building a small house."
  },
  {
    kind: "paragraph",
    text: "You can do it yourself."
  },
  {
    kind: "code",
    language: "text",
    code: "Small House\n\n↓\n\nSimple\n\n↓\n\nTemplate-driven Form"
  },
  {
    kind: "paragraph",
    text: "Now imagine constructing a shopping mall."
  },
  {
    kind: "paragraph",
    text: "You need architects,"
  },
  {
    kind: "paragraph",
    text: "engineers,"
  },
  {
    kind: "paragraph",
    text: "planning,"
  },
  {
    kind: "paragraph",
    text: "and structure."
  },
  {
    kind: "code",
    language: "text",
    code: "Shopping Mall\n\n↓\n\nComplex\n\n↓\n\nReactive Form"
  },
  {
    kind: "paragraph",
    text: "Reactive Forms are designed for large applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "Which Form Should We Use?"
  },
  {
    kind: "table",
    headers: [
      "Template-driven",
      "Reactive"
    ],
    rows: [
      [
        "Small forms",
        "Large forms"
      ],
      [
        "Simple validation",
        "Complex validation"
      ],
      [
        "HTML-focused",
        "TypeScript-focused"
      ],
      [
        "Easy to learn",
        "More scalable"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Which One Do Companies Use?"
  },
  {
    kind: "paragraph",
    text: "In real Angular projects,"
  },
  {
    kind: "paragraph",
    text: "especially enterprise applications like:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HRMS",
      "Banking",
      "Hospital Management",
      "ERP",
      "E-commerce Admin"
    ]
  },
  {
    kind: "paragraph",
    text: "👉 **Reactive Forms** are used most of the time."
  },
  {
    kind: "paragraph",
    text: "Template-driven Forms are still useful for simple forms, but Reactive Forms are the standard choice for complex business applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Forms collect user input."
  },
  {
    kind: "paragraph",
    text: "✔ Angular supports two types of forms."
  },
  {
    kind: "paragraph",
    text: "✔ Template-driven Forms are simpler and HTML-based."
  },
  {
    kind: "paragraph",
    text: "✔ Reactive Forms are more powerful and TypeScript-based."
  },
  {
    kind: "paragraph",
    text: "✔ Most enterprise Angular applications use Reactive Forms."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next"
  },
  {
    kind: "paragraph",
    text: "We'll start with **Template-driven Forms**, because they introduce the core concepts like:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`FormsModule`",
      "`ngModel`",
      "`ngForm`",
      "Form submission",
      "Basic validation"
    ]
  },
  {
    kind: "paragraph",
    text: "Then we'll move to **Reactive Forms**, which you'll use most often in real-world Angular projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Template-driven Forms"
  },
  {
    kind: "paragraph",
    text: "Template-driven Forms are the simpler way to create forms."
  },
  {
    kind: "paragraph",
    text: "They are suitable for:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login Form",
      "Contact Form",
      "Feedback Form"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "How does it work?"
  },
  {
    kind: "paragraph",
    text: "Imagine a Login page."
  },
  {
    kind: "code",
    language: "text",
    code: "Username\n\nPassword\n\n[ Login ]"
  },
  {
    kind: "paragraph",
    text: "The user types the values."
  },
  {
    kind: "paragraph",
    text: "Angular automatically keeps the component variables updated using **`ngModel`**."
  },
  {
    kind: "heading",
    level: 2,
    text: "💻 Example"
  },
  {
    kind: "heading",
    level: 3,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<form>\n\n  <input\n    type=\"text\"\n    [(ngModel)]=\"username\"\n    name=\"username\">\n\n  <button>Login</button>\n\n</form>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "username = '';"
  },
  {
    kind: "paragraph",
    text: "When the user types"
  },
  {
    kind: "code",
    language: "text",
    code: "John"
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates"
  },
  {
    kind: "code",
    language: "ts",
    code: "username = \"John\";"
  },
  {
    kind: "paragraph",
    text: "No extra code needed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why companies rarely use Template-driven Forms?"
  },
  {
    kind: "paragraph",
    text: "Imagine an HRMS Employee Form."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\nEmail\n\nPhone\n\nDepartment\n\nSalary\n\nManager\n\nAddress\n\nEmergency Contact\n\nDocuments\n\nSkills\n\nExperience"
  },
  {
    kind: "paragraph",
    text: "Managing all of this in HTML becomes difficult."
  },
  {
    kind: "paragraph",
    text: "That's why enterprise applications prefer **Reactive Forms**."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Reactive Forms"
  },
  {
    kind: "paragraph",
    text: "Reactive Forms move the form logic from HTML into **TypeScript**."
  },
  {
    kind: "paragraph",
    text: "Instead of Angular creating the form automatically,"
  },
  {
    kind: "paragraph",
    text: "**you create the form yourself**."
  },
  {
    kind: "paragraph",
    text: "This gives you much more control."
  },
  {
    kind: "paragraph",
    text: "Suppose we are building"
  },
  {
    kind: "code",
    language: "text",
    code: "Add Employee"
  },
  {
    kind: "paragraph",
    text: "The employee needs"
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
    text: "Instead of HTML managing everything,"
  },
  {
    kind: "paragraph",
    text: "our component creates the form."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Create Form"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = new FormGroup({\n\n  name: new FormControl(''),\n\n  email: new FormControl(''),\n\n  department: new FormControl('')\n\n});"
  },
  {
    kind: "paragraph",
    text: "Think of `FormGroup` as the **entire form**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Folder"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n│\n\n├── Name\n\n├── Email\n\n└── Department"
  },
  {
    kind: "paragraph",
    text: "The folder is"
  },
  {
    kind: "code",
    language: "text",
    code: "FormGroup"
  },
  {
    kind: "paragraph",
    text: "Each file inside is"
  },
  {
    kind: "code",
    language: "text",
    code: "FormControl"
  },
  {
    kind: "heading",
    level: 2,
    text: "FormGroup"
  },
  {
    kind: "paragraph",
    text: "A **FormGroup** represents the complete form."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form"
  },
  {
    kind: "heading",
    level: 2,
    text: "FormControl"
  },
  {
    kind: "paragraph",
    text: "Each input field is a FormControl."
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\n↓\n\nFormControl\n\n----------------\n\nEmail\n\n↓\n\nFormControl\n\n----------------\n\nDepartment\n\n↓\n\nFormControl"
  },
  {
    kind: "heading",
    level: 2,
    text: "HTML"
  },
  {
    kind: "paragraph",
    text: "Now connect the form."
  },
  {
    kind: "code",
    language: "html",
    code: "<form [formGroup]=\"employeeForm\">\n\n  <input formControlName=\"name\">\n\n  <input formControlName=\"email\">\n\n  <input formControlName=\"department\">\n\n</form>"
  },
  {
    kind: "paragraph",
    text: "Notice"
  },
  {
    kind: "paragraph",
    text: "The HTML no longer stores the values."
  },
  {
    kind: "paragraph",
    text: "The FormGroup does."
  },
  {
    kind: "heading",
    level: 2,
    text: "Getting Values"
  },
  {
    kind: "paragraph",
    text: "Whenever you need the form values,"
  },
  {
    kind: "paragraph",
    text: "simply do"
  },
  {
    kind: "code",
    language: "ts",
    code: "console.log(this.employeeForm.value);"
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "{\n  name: \"John\",\n  email: \"john@test.com\",\n  department: \"HR\"\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Form Submission"
  },
  {
    kind: "code",
    language: "ts",
    code: "save() {\n\n  console.log(this.employeeForm.value);\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<form [formGroup]=\"employeeForm\"\n      (ngSubmit)=\"save()\">\n\n  ...\n\n  <button type=\"submit\">\n\n    Save\n\n  </button>\n\n</form>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Types\n\n↓\n\nFormControl\n\n↓\n\nFormGroup\n\n↓\n\nSubmit\n\n↓\n\nComponent\n\n↓\n\nAPI"
  },
  {
    kind: "paragraph",
    text: "✔ `FormGroup` represents the entire form."
  },
  {
    kind: "paragraph",
    text: "✔ `FormControl` represents one input field."
  },
  {
    kind: "paragraph",
    text: "✔ Reactive Forms store form data in TypeScript."
  },
  {
    kind: "paragraph",
    text: "✔ HTML simply displays the form."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next Topic"
  },
  {
    kind: "paragraph",
    text: "The next section is **Form Validation**, where you'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`Validators.required`",
      "`Validators.email`",
      "`Validators.minLength`",
      "`Validators.maxLength`",
      "`Validators.pattern`",
      "How to display validation errors",
      "Real HRMS examples"
    ]
  },
  {
    kind: "paragraph",
    text: "This is one of the most frequently used parts of Reactive Forms in real Angular projects."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Form Validation"
  },
  {
    kind: "paragraph",
    text: "Imagine you're adding a new employee."
  },
  {
    kind: "paragraph",
    text: "The user clicks **Save** without entering anything."
  },
  {
    kind: "paragraph",
    text: "Should Angular save the employee?"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "The form should stop the user and show validation messages."
  },
  {
    kind: "paragraph",
    text: "That's what **Validators** do."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Validation?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS employee form."
  },
  {
    kind: "code",
    language: "text",
    code: "Name: __________\n\nEmail: __________\n\nDepartment: __________\n\nSalary: __________"
  },
  {
    kind: "paragraph",
    text: "The user clicks **Save** immediately."
  },
  {
    kind: "paragraph",
    text: "Without validation,"
  },
  {
    kind: "paragraph",
    text: "an employee with empty data would be saved."
  },
  {
    kind: "paragraph",
    text: "Validation ensures the data is correct **before** sending it to the backend."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Add Validators"
  },
  {
    kind: "paragraph",
    text: "Validators are added inside the `FormControl`."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = new FormGroup({\n\n  name: new FormControl('', Validators.required),\n\n  email: new FormControl('', [\n    Validators.required,\n    Validators.email\n  ])\n\n});"
  },
  {
    kind: "paragraph",
    text: "Here,"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`name` is required.",
      "`email` is required and must be a valid email."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Most Common Validators"
  },
  {
    kind: "table",
    headers: [
      "Validator",
      "Purpose"
    ],
    rows: [
      [
        "required",
        "Field cannot be empty"
      ],
      [
        "email",
        "Valid email format"
      ],
      [
        "minLength",
        "Minimum characters"
      ],
      [
        "maxLength",
        "Maximum characters"
      ],
      [
        "pattern",
        "Match a custom format"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ Required Validator"
  },
  {
    kind: "paragraph",
    text: "Employee name must be entered."
  },
  {
    kind: "code",
    language: "ts",
    code: "name: new FormControl(\n  '',\n  Validators.required\n)"
  },
  {
    kind: "paragraph",
    text: "If the user leaves it empty,"
  },
  {
    kind: "paragraph",
    text: "the form becomes invalid."
  },
  {
    kind: "code",
    language: "html",
    code: "<input formControlName=\"name\">\n\n@if(employeeForm.get('name')?.hasError('required')){\n\n  <small>Name is required</small>\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ Email Validator"
  },
  {
    kind: "code",
    language: "ts",
    code: "email: new FormControl(\n  '',\n  [\n    Validators.required,\n    Validators.email\n  ]\n)"
  },
  {
    kind: "paragraph",
    text: "User enters"
  },
  {
    kind: "code",
    language: "text",
    code: "john@test.com"
  },
  {
    kind: "paragraph",
    text: "✅ Valid"
  },
  {
    kind: "paragraph",
    text: "❌ Invalid"
  },
  {
    kind: "code",
    language: "html",
    code: "<input formControlName=\"email\">\n\n@if(employeeForm.get('email')?.hasError('email')){\n\n  <small>Invalid Email</small>\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ Min Length"
  },
  {
    kind: "paragraph",
    text: "Employee ID must contain at least 5 characters."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeId: new FormControl(\n  '',\n  Validators.minLength(5)\n)"
  },
  {
    kind: "code",
    language: "text",
    code: "AB"
  },
  {
    kind: "code",
    language: "text",
    code: "EMP01"
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ Max Length"
  },
  {
    kind: "paragraph",
    text: "Phone number"
  },
  {
    kind: "code",
    language: "ts",
    code: "phone: new FormControl(\n  '',\n  Validators.maxLength(10)\n)"
  },
  {
    kind: "paragraph",
    text: "Only 10 characters allowed."
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ Pattern"
  },
  {
    kind: "paragraph",
    text: "Suppose Employee ID should always start with EMP."
  },
  {
    kind: "code",
    language: "text",
    code: "EMP001\n\nEMP002\n\nEMP003"
  },
  {
    kind: "paragraph",
    text: "Validator"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeId: new FormControl(\n  '',\n  Validators.pattern(/^EMP\\d+$/)\n)"
  },
  {
    kind: "code",
    language: "text",
    code: "EMP101"
  },
  {
    kind: "code",
    language: "text",
    code: "ABC101"
  },
  {
    kind: "heading",
    level: 2,
    text: "Check Entire Form"
  },
  {
    kind: "paragraph",
    text: "Before saving,"
  },
  {
    kind: "paragraph",
    text: "check whether the form is valid."
  },
  {
    kind: "code",
    language: "ts",
    code: "save(){\n\n  if(this.employeeForm.valid){\n\n    console.log('Save Employee');\n\n  }\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Form Status"
  },
  {
    kind: "paragraph",
    text: "Angular automatically tracks the form status."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.valid"
  },
  {
    kind: "paragraph",
    text: "Returns"
  },
  {
    kind: "code",
    language: "text",
    code: "true"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "text",
    code: "false"
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.invalid"
  },
  {
    kind: "heading",
    level: 2,
    text: "Disable Save Button"
  },
  {
    kind: "paragraph",
    text: "A common real-world practice."
  },
  {
    kind: "code",
    language: "html",
    code: "<button\n  type=\"submit\"\n  [disabled]=\"employeeForm.invalid\">\n\n  Save\n\n</button>"
  },
  {
    kind: "paragraph",
    text: "Until all required fields are valid,"
  },
  {
    kind: "paragraph",
    text: "the button remains disabled."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Opens Form\n\n↓\n\nTypes Name\n\n↓\n\nTypes Email\n\n↓\n\nValidation\n\n↓\n\nValid?\n\n↓\n\nYes\n\n↓\n\nEnable Save\n\n↓\n\nPOST API\n\n↓\n\nEmployee Saved"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Example"
  },
  {
    kind: "paragraph",
    text: "Imagine the user enters:"
  },
  {
    kind: "code",
    language: "text",
    code: "Name : John\n\nEmail : john@test.com\n\nDepartment : HR"
  },
  {
    kind: "paragraph",
    text: "Everything is valid."
  },
  {
    kind: "paragraph",
    text: "Angular allows submission."
  },
  {
    kind: "paragraph",
    text: "Now the user enters:"
  },
  {
    kind: "code",
    language: "text",
    code: "Name :\n\nEmail : abc\n\nDepartment :"
  },
  {
    kind: "paragraph",
    text: "Validation errors appear immediately,"
  },
  {
    kind: "paragraph",
    text: "and the Save button stays disabled."
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "paragraph",
    text: "✔ Validate on the frontend for a better user experience."
  },
  {
    kind: "paragraph",
    text: "✔ Still validate on the backend because frontend validation can be bypassed."
  },
  {
    kind: "paragraph",
    text: "✔ Disable the Submit button when the form is invalid."
  },
  {
    kind: "paragraph",
    text: "✔ Show clear error messages near the corresponding field."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "✔ Validators check user input before submission."
  },
  {
    kind: "paragraph",
    text: "✔ `Validators.required` ensures a field is not empty."
  },
  {
    kind: "paragraph",
    text: "✔ `Validators.email` checks email format."
  },
  {
    kind: "paragraph",
    text: "✔ `Validators.minLength` and `maxLength` control input length."
  },
  {
    kind: "paragraph",
    text: "✔ `Validators.pattern` validates custom formats."
  },
  {
    kind: "paragraph",
    text: "✔ Always check `employeeForm.valid` before submitting."
  },
  {
    kind: "paragraph",
    text: "We'll cover the remaining Reactive Forms features that you'll use daily in projects:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**`setValue()`**",
      "**`patchValue()`**",
      "**`reset()`**",
      "**`disable()` / `enable()`**",
      "**Reading individual FormControl values**",
      "**`FormBuilder`** (used in almost every real Angular project to write cleaner form code)"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Working with Reactive Forms"
  },
  {
    kind: "paragraph",
    text: "Suppose you're editing an employee."
  },
  {
    kind: "paragraph",
    text: "The backend returns"
  },
  {
    kind: "code",
    language: "text id=\"6bzjlk\"",
    code: "Name : John\n\nEmail : john@test.com\n\nDepartment : HR"
  },
  {
    kind: "paragraph",
    text: "How do we display these values inside the form?"
  },
  {
    kind: "paragraph",
    text: "Angular provides two methods:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`setValue()`",
      "`patchValue()`"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "1️⃣ setValue()"
  },
  {
    kind: "paragraph",
    text: "`setValue()` updates **all** form controls."
  },
  {
    kind: "paragraph",
    text: "Every control must receive a value."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.setValue({\n\n  name: 'John',\n\n  email: 'john@test.com',\n\n  department: 'HR'\n\n});"
  },
  {
    kind: "paragraph",
    text: "✅ Works because every control has a value."
  },
  {
    kind: "heading",
    level: 2,
    text: "What if one field is missing?"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.setValue({\n\n  name: 'John',\n\n  email: 'john@test.com'\n\n});"
  },
  {
    kind: "paragraph",
    text: "❌ Error"
  },
  {
    kind: "paragraph",
    text: "Because `department` was not provided."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of an Attendance Sheet"
  },
  {
    kind: "paragraph",
    text: "Suppose there are 3 columns."
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nEmail\n\nDepartment"
  },
  {
    kind: "paragraph",
    text: "When submitting,"
  },
  {
    kind: "paragraph",
    text: "all 3 columns must be filled."
  },
  {
    kind: "paragraph",
    text: "Otherwise,"
  },
  {
    kind: "paragraph",
    text: "the sheet is rejected."
  },
  {
    kind: "paragraph",
    text: "That's how `setValue()` works."
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ patchValue()"
  },
  {
    kind: "paragraph",
    text: "Most of the time,"
  },
  {
    kind: "paragraph",
    text: "we don't want to update the whole form."
  },
  {
    kind: "paragraph",
    text: "Suppose HR edits only the Department."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.patchValue({\n\n  department: 'Finance'\n\n});"
  },
  {
    kind: "paragraph",
    text: "Angular updates only that field."
  },
  {
    kind: "paragraph",
    text: "Everything else remains unchanged."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of Updating Your Address"
  },
  {
    kind: "paragraph",
    text: "Suppose your bank already knows"
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nPhone\n\nAddress"
  },
  {
    kind: "paragraph",
    text: "You move to a new house."
  },
  {
    kind: "paragraph",
    text: "Do you submit your entire application again?"
  },
  {
    kind: "paragraph",
    text: "You only update"
  },
  {
    kind: "code",
    language: "text",
    code: "Address"
  },
  {
    kind: "paragraph",
    text: "That's exactly what `patchValue()` does."
  },
  {
    kind: "heading",
    level: 2,
    text: "setValue() vs patchValue()"
  },
  {
    kind: "table",
    headers: [
      "setValue()",
      "patchValue()"
    ],
    rows: [
      [
        "Updates every control",
        "Updates selected controls"
      ],
      [
        "Missing field → Error",
        "Missing field → No Error"
      ],
      [
        "Used less often",
        "Used most often"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Backend returns"
  },
  {
    kind: "code",
    language: "json",
    code: "{\n  \"name\": \"John\",\n  \"department\": \"HR\"\n}"
  },
  {
    kind: "paragraph",
    text: "We only want to update these fields."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.patchValue(data);"
  },
  {
    kind: "paragraph",
    text: "Much simpler."
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ reset()"
  },
  {
    kind: "paragraph",
    text: "After saving,"
  },
  {
    kind: "paragraph",
    text: "we usually clear the form."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.reset();"
  },
  {
    kind: "paragraph",
    text: "Before"
  },
  {
    kind: "code",
    language: "text",
    code: "Name : John\n\nEmail : john@test.com"
  },
  {
    kind: "paragraph",
    text: "After"
  },
  {
    kind: "code",
    language: "text",
    code: "Name :\n\nEmail :"
  },
  {
    kind: "code",
    language: "text",
    code: "Fill Form\n\n↓\n\nSave Employee\n\n↓\n\nSuccess\n\n↓\n\nReset Form\n\n↓\n\nReady for Next Employee"
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ disable()"
  },
  {
    kind: "paragraph",
    text: "Sometimes a field should not be editable."
  },
  {
    kind: "paragraph",
    text: "Employee ID."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.get('employeeId')?.disable();"
  },
  {
    kind: "paragraph",
    text: "The user can see it,"
  },
  {
    kind: "paragraph",
    text: "but cannot edit it."
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ enable()"
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "HR gives permission to edit."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeForm.get('employeeId')?.enable();"
  },
  {
    kind: "paragraph",
    text: "Now the field becomes editable."
  },
  {
    kind: "heading",
    level: 2,
    text: "6️⃣ Reading One Control"
  },
  {
    kind: "paragraph",
    text: "Instead of reading the whole form,"
  },
  {
    kind: "paragraph",
    text: "you can read one control."
  },
  {
    kind: "code",
    language: "ts",
    code: "const email = this.employeeForm.get('email')?.value;"
  },
  {
    kind: "heading",
    level: 2,
    text: "7️⃣ FormBuilder"
  },
  {
    kind: "paragraph",
    text: "Most companies don't create forms like this."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = new FormGroup({\n\n  name: new FormControl(''),\n\n  email: new FormControl('')\n\n});"
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "they use **FormBuilder** because it's shorter and cleaner."
  },
  {
    kind: "heading",
    level: 2,
    text: "With FormBuilder"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private fb: FormBuilder) {}\n\nemployeeForm = this.fb.group({\n\n  name: [''],\n\n  email: ['']\n\n});"
  },
  {
    kind: "paragraph",
    text: "Much cleaner."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Companies Prefer FormBuilder"
  },
  {
    kind: "paragraph",
    text: "Imagine a form with"
  },
  {
    kind: "code",
    language: "text",
    code: "30 Fields"
  },
  {
    kind: "paragraph",
    text: "Using `new FormControl()` for every field becomes repetitive."
  },
  {
    kind: "paragraph",
    text: "FormBuilder reduces boilerplate code and is the standard approach in enterprise Angular projects."
  },
  {
    kind: "code",
    language: "text",
    code: "Open Employee\n\n↓\n\nAPI\n\n↓\n\npatchValue()\n\n↓\n\nEdit Employee\n\n↓\n\nSave\n\n↓\n\nreset()\n\n↓\n\nReady"
  },
  {
    kind: "paragraph",
    text: "✔ Use `patchValue()` for editing existing data."
  },
  {
    kind: "paragraph",
    text: "✔ Use `setValue()` only when updating every field."
  },
  {
    kind: "paragraph",
    text: "✔ Use `reset()` after successful submission."
  },
  {
    kind: "paragraph",
    text: "✔ Disable fields that users shouldn't edit."
  },
  {
    kind: "paragraph",
    text: "✔ Prefer `FormBuilder` over manually creating `FormGroup` and `FormControl`."
  },
  {
    kind: "paragraph",
    text: "✔ `setValue()` updates the complete form."
  },
  {
    kind: "paragraph",
    text: "✔ `patchValue()` updates selected fields."
  },
  {
    kind: "paragraph",
    text: "✔ `reset()` clears the form."
  },
  {
    kind: "paragraph",
    text: "✔ `disable()` and `enable()` control whether a field is editable."
  },
  {
    kind: "paragraph",
    text: "✔ `FormBuilder` is the preferred way to create Reactive Forms in real Angular applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Final Topic of Forms"
  },
  {
    kind: "paragraph",
    text: "Next we'll finish the Forms lesson with:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "⚠️ Common Mistakes",
      "💡 Best Practices",
      "📝 Mini Challenge",
      "📌 Complete Summary",
      "➡️ Next Lesson: **Custom Directives**"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Validators with FormBuilder"
  },
  {
    kind: "paragraph",
    text: "Without validators:"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private fb: FormBuilder) {}\n\nemployeeForm = this.fb.group({\n\n  name: [''],\n\n  email: [''],\n\n  department: ['']\n\n});"
  },
  {
    kind: "heading",
    level: 2,
    text: "Adding One Validator"
  },
  {
    kind: "paragraph",
    text: "If a field is required:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = this.fb.group({\n\n  name: ['', Validators.required],\n\n  email: [''],\n\n  department: ['']\n\n});"
  },
  {
    kind: "code",
    language: "ts",
    code: "name: ['', Validators.required]"
  },
  {
    kind: "paragraph",
    text: "means"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Default value = `''`",
      "Validator = `Validators.required`"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Adding Multiple Validators"
  },
  {
    kind: "paragraph",
    text: "Use an array."
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = this.fb.group({\n\n  name: ['', Validators.required],\n\n  email: ['', [\n    Validators.required,\n    Validators.email\n  ]],\n\n  password: ['', [\n    Validators.required,\n    Validators.minLength(8)\n  ]]\n\n});"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private fb: FormBuilder) {}\n\nemployeeForm = this.fb.group({\n\n  employeeId: ['', Validators.required],\n\n  name: ['', Validators.required],\n\n  email: ['', [\n    Validators.required,\n    Validators.email\n  ]],\n\n  phone: ['', [\n    Validators.required,\n    Validators.pattern(/^[0-9]{10}$/)\n  ]],\n\n  department: ['', Validators.required]\n\n});"
  },
  {
    kind: "code",
    language: "html",
    code: "<input formControlName=\"email\">\n\n@if(employeeForm.get('email')?.hasError('required')){\n  <small>Email is required</small>\n}\n\n@if(employeeForm.get('email')?.hasError('email')){\n  <small>Invalid email</small>\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "How to Read This Syntax"
  },
  {
    kind: "paragraph",
    text: "Many beginners wonder:"
  },
  {
    kind: "code",
    language: "ts",
    code: "email: ['', [\n  Validators.required,\n  Validators.email\n]]"
  },
  {
    kind: "paragraph",
    text: "Think of it as:"
  },
  {
    kind: "code",
    language: "text",
    code: "email:\n\nDefault Value\n      ↓\n''\n\nValidators\n      ↓\nRequired\nEmail"
  },
  {
    kind: "paragraph",
    text: "So the structure is:"
  },
  {
    kind: "code",
    language: "ts",
    code: "fieldName: [\n\n  defaultValue,\n\n  validators\n\n]"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "salary: [0, Validators.required]"
  },
  {
    kind: "paragraph",
    text: "Meaning:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Default value = `0`",
      "Validation = Required"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "password: ['', [\n  Validators.required,\n  Validators.minLength(8),\n  Validators.maxLength(20)\n]]"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Default value = Empty string",
      "Required",
      "Minimum 8 characters",
      "Maximum 20 characters"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Quick Reference"
  },
  {
    kind: "code",
    language: "ts",
    code: "// No validation\nname: ['']\n\n// One validator\nname: ['', Validators.required]\n\n// Multiple validators\nemail: ['', [\n  Validators.required,\n  Validators.email\n]]\n\n// Number field\nsalary: [0, Validators.required]\n\n// Boolean field\nisActive: [true]"
  },
  {
    kind: "heading",
    level: 3,
    text: "💡 Real Project Tip"
  },
  {
    kind: "paragraph",
    text: "In almost every enterprise Angular application (HRMS, Banking, ERP), you'll usually see forms created like this:"
  },
  {
    kind: "code",
    language: "ts",
    code: "employeeForm = this.fb.group({\n  name: ['', Validators.required],\n  email: ['', [Validators.required, Validators.email]],\n  phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],\n  department: ['', Validators.required]\n});"
  },
  {
    kind: "paragraph",
    text: "This is the style most Angular teams use because it's concise, readable, and works well with Reactive Forms."
  }
];
