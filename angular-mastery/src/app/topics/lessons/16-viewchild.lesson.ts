import { LessonBlock } from '../topic.model';

export const lesson16Viewchild: LessonBlock[] = [
  {
    kind: "paragraph",
    text: "Once you understand this, many things like **focus(), modals, child component communication, charts** become easy."
  },
  {
    kind: "heading",
    level: 2,
    text: "First Question"
  },
  {
    kind: "paragraph",
    text: "Suppose you have this HTML."
  },
  {
    kind: "code",
    language: "html",
    code: "<input>"
  },
  {
    kind: "paragraph",
    text: "Question:"
  },
  {
    kind: "paragraph",
    text: "Can TypeScript directly access this input?"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.input.focus();"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "Why?"
  },
  {
    kind: "paragraph",
    text: "Because TypeScript doesn't know which input you're talking about."
  },
  {
    kind: "paragraph",
    text: "It needs a reference."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Life Example"
  },
  {
    kind: "paragraph",
    text: "Imagine you're in a classroom."
  },
  {
    kind: "paragraph",
    text: "Teacher says"
  },
  {
    kind: "quote",
    text: "\"Bring me **the book**.\""
  },
  {
    kind: "paragraph",
    text: "Students ask"
  },
  {
    kind: "quote",
    text: "\"Which book?\""
  },
  {
    kind: "paragraph",
    text: "The teacher points at one book."
  },
  {
    kind: "paragraph",
    text: "Now everyone knows."
  },
  {
    kind: "paragraph",
    text: "**ViewChild does exactly that.**"
  },
  {
    kind: "paragraph",
    text: "It tells Angular,"
  },
  {
    kind: "quote",
    text: "\"Give me a reference to THIS element.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1"
  },
  {
    kind: "paragraph",
    text: "Create an input."
  },
  {
    kind: "code",
    language: "html",
    code: "<input #nameInput>"
  },
  {
    kind: "paragraph",
    text: "Notice"
  },
  {
    kind: "code",
    language: "html",
    code: "#nameInput"
  },
  {
    kind: "paragraph",
    text: "This is called a **Template Reference Variable**."
  },
  {
    kind: "paragraph",
    text: "Think of it as giving the input a nickname."
  },
  {
    kind: "code",
    language: "text",
    code: "Input\n\n↓\n\nNickname\n\n↓\n\nnameInput"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2"
  },
  {
    kind: "paragraph",
    text: "Now tell Angular you want this element."
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('nameInput')\nnameInput!: ElementRef;"
  },
  {
    kind: "paragraph",
    text: "Let's understand this line."
  },
  {
    kind: "heading",
    level: 2,
    text: "@ViewChild()"
  },
  {
    kind: "paragraph",
    text: "This tells Angular"
  },
  {
    kind: "quote",
    text: "Find something from my HTML."
  },
  {
    kind: "heading",
    level: 2,
    text: "'nameInput'"
  },
  {
    kind: "paragraph",
    text: "Which element?"
  },
  {
    kind: "paragraph",
    text: "This one"
  },
  {
    kind: "paragraph",
    text: "because both names match."
  },
  {
    kind: "heading",
    level: 2,
    text: "ElementRef"
  },
  {
    kind: "paragraph",
    text: "Angular returns a reference to that HTML element."
  },
  {
    kind: "paragraph",
    text: "Think of it as"
  },
  {
    kind: "code",
    language: "text",
    code: "HTML Input\n\n↓\n\nElementRef\n\n↓\n\nTypeScript can access it"
  },
  {
    kind: "heading",
    level: 2,
    text: "Visual Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "HTML\n\n<input #nameInput>\n\n        │\n        ▼\n\nAngular finds\n\n#nameInput\n\n        │\n        ▼\n\n@ViewChild('nameInput')\n\n        │\n        ▼\n\nnameInput variable\n\n        │\n        ▼\n\nTypeScript can use it"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3"
  },
  {
    kind: "paragraph",
    text: "Now focus the input."
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('nameInput')\nnameInput!: ElementRef;\n\nngAfterViewInit() {\n\n  this.nameInput.nativeElement.focus();\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is nativeElement?"
  },
  {
    kind: "paragraph",
    text: "Angular gives us"
  },
  {
    kind: "code",
    language: "text",
    code: "ElementRef"
  },
  {
    kind: "paragraph",
    text: "Inside it,"
  },
  {
    kind: "paragraph",
    text: "there is"
  },
  {
    kind: "code",
    language: "text",
    code: "nativeElement"
  },
  {
    kind: "paragraph",
    text: "which is the actual HTML element."
  },
  {
    kind: "code",
    language: "text",
    code: "ElementRef\n\n↓\n\nnativeElement\n\n↓\n\n<input>"
  },
  {
    kind: "paragraph",
    text: "Now we can call"
  },
  {
    kind: "code",
    language: "ts",
    code: "focus()"
  },
  {
    kind: "paragraph",
    text: "because HTML inputs already have a `focus()` method."
  },
  {
    kind: "heading",
    level: 2,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<input #nameInput>\n\n<button>\n    Save\n</button>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Output"
  },
  {
    kind: "paragraph",
    text: "Page opens."
  },
  {
    kind: "paragraph",
    text: "Cursor automatically appears inside the textbox."
  },
  {
    kind: "paragraph",
    text: "Exactly like"
  },
  {
    kind: "code",
    language: "text",
    code: "|John\n ^\n Cursor"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Employee Form"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\nDepartment\n\nSalary"
  },
  {
    kind: "paragraph",
    text: "When the page opens,"
  },
  {
    kind: "paragraph",
    text: "the Employee Name textbox should automatically get focus."
  },
  {
    kind: "paragraph",
    text: "Without clicking."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit() {\n\n   this.nameInput.nativeElement.focus();\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why ngAfterViewInit?"
  },
  {
    kind: "paragraph",
    text: "Can we do this?"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor() {\n\n   this.nameInput.nativeElement.focus();\n\n}"
  },
  {
    kind: "paragraph",
    text: "The HTML doesn't exist yet."
  },
  {
    kind: "paragraph",
    text: "Can we do it in ngOnInit?"
  },
  {
    kind: "paragraph",
    text: "Sometimes it won't work because Angular may not have finished creating the view."
  },
  {
    kind: "paragraph",
    text: "Only after the view is ready does Angular call"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit()"
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.nameInput.nativeElement.focus();"
  },
  {
    kind: "paragraph",
    text: "works."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Instead of an input,"
  },
  {
    kind: "paragraph",
    text: "suppose we have a video."
  },
  {
    kind: "code",
    language: "html",
    code: "<video #player></video>"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('player')\nplayer!: ElementRef;\n\nplayVideo() {\n\n   this.player.nativeElement.play();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now clicking a button can start the video."
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "html",
    code: "<textarea #message></textarea>"
  },
  {
    kind: "code",
    language: "ts",
    code: "clearMessage() {\n\n   this.message.nativeElement.value = '';\n\n}"
  },
  {
    kind: "paragraph",
    text: "You can clear the textbox programmatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary So Far"
  },
  {
    kind: "code",
    language: "text",
    code: "<input #nameInput>\n\n        │\n        ▼\n\n@ViewChild('nameInput')\n\n        │\n        ▼\n\nElementRef\n\n        │\n        ▼\n\nnativeElement\n\n        │\n        ▼\n\nfocus()\n\nor\n\nvalue\n\nor\n\nclick()"
  },
  {
    kind: "heading",
    level: 2,
    text: "❓Question"
  },
  {
    kind: "paragraph",
    text: "So far we've used `ViewChild` to get an **HTML element**."
  },
  {
    kind: "paragraph",
    text: "But can `ViewChild` get an **Angular component** instead?"
  },
  {
    kind: "paragraph",
    text: "For example:"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-card></app-employee-card>"
  },
  {
    kind: "paragraph",
    text: "Can the parent call a method like"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employeeCard.refresh();"
  },
  {
    kind: "paragraph",
    text: "**Yes!** That's actually one of the most powerful uses of `@ViewChild`."
  },
  {
    kind: "paragraph",
    text: "We'll cover that next."
  },
  {
    kind: "paragraph",
    text: "Instead of getting an HTML element, we'll get a **child Angular component**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Goal"
  },
  {
    kind: "paragraph",
    text: "Suppose we have two components."
  },
  {
    kind: "code",
    language: "text",
    code: "ParentComponent\n\n    │\n\n    └── ChildComponent"
  },
  {
    kind: "paragraph",
    text: "The parent wants to call a function inside the child."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 - Create Child Component"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g c child"
  },
  {
    kind: "paragraph",
    text: "**child.component.ts**"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class ChildComponent {\n\n  message = 'Hello from Child';\n\n  showMessage() {\n    alert(this.message);\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "This child has a method:"
  },
  {
    kind: "code",
    language: "ts",
    code: "showMessage()"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 - Use Child in Parent"
  },
  {
    kind: "paragraph",
    text: "**parent.component.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-child></app-child>\n\n<button (click)=\"callChild()\">\n    Call Child\n</button>"
  },
  {
    kind: "paragraph",
    text: "How can the parent call"
  },
  {
    kind: "paragraph",
    text: "inside the child?"
  },
  {
    kind: "paragraph",
    text: "The parent doesn't have a reference to the child yet."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3 - Get Child using ViewChild"
  },
  {
    kind: "paragraph",
    text: "First, give the child a template reference."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-child #child></app-child>\n\n<button (click)=\"callChild()\">\n    Call Child\n</button>"
  },
  {
    kind: "code",
    language: "html",
    code: "#child"
  },
  {
    kind: "paragraph",
    text: "Now Angular knows this child component has the nickname **child**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 4 - Parent TS"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('child')\nchild!: ChildComponent;\n\ncallChild() {\n\n   this.child.showMessage();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Let's understand this."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular sees"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-child #child>"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "It creates"
  },
  {
    kind: "code",
    language: "text",
    code: "ChildComponent Object"
  },
  {
    kind: "paragraph",
    text: "ViewChild gets that object."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.child"
  },
  {
    kind: "paragraph",
    text: "Now you can call"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.child.showMessage();"
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Parent Component\n\n↓\n\nFind\n\n#child\n\n↓\n\nReturn ChildComponent\n\n↓\n\nStore in\n\nthis.child\n\n↓\n\nCall\n\nshowMessage()"
  },
  {
    kind: "paragraph",
    text: "Click"
  },
  {
    kind: "code",
    language: "text",
    code: "Call Child"
  },
  {
    kind: "paragraph",
    text: "Parent executes"
  },
  {
    kind: "paragraph",
    text: "Child executes"
  },
  {
    kind: "code",
    language: "ts",
    code: "alert(\"Hello from Child\");"
  },
  {
    kind: "paragraph",
    text: "Browser"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------+\n| Hello from Child     |\n+----------------------+"
  },
  {
    kind: "paragraph",
    text: "Imagine this screen."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Page\n\n+----------------------+\n| Employee Form        |\n|                      |\n| Name                 |\n| Department           |\n|                      |\n| [ Save ]             |\n+----------------------+"
  },
  {
    kind: "paragraph",
    text: "The Employee Form is a child component."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-form #form></app-employee-form>\n\n<button (click)=\"save()\">\n    Save\n</button>"
  },
  {
    kind: "paragraph",
    text: "The child component has"
  },
  {
    kind: "code",
    language: "ts",
    code: "saveEmployee() {\n\n   console.log(\"Saving...\");\n\n}"
  },
  {
    kind: "paragraph",
    text: "Parent"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('form')\nform!: EmployeeFormComponent;\n\nsave() {\n\n   this.form.saveEmployee();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User clicks Save\n\n↓\n\nParent\n\n↓\n\nform.saveEmployee()\n\n↓\n\nChild saves employee\n\n↓\n\nAPI called\n\n↓\n\nEmployee Saved"
  },
  {
    kind: "paragraph",
    text: "The parent doesn't need to know *how* the child saves the employee. It simply asks the child to do its job."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example - Reset Form"
  },
  {
    kind: "paragraph",
    text: "Child"
  },
  {
    kind: "code",
    language: "ts",
    code: "resetForm() {\n\n   this.employeeForm.reset();\n\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "reset() {\n\n   this.form.resetForm();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "Click Reset\n\n↓\n\nParent calls Child\n\n↓\n\nChild clears form"
  },
  {
    kind: "heading",
    level: 2,
    text: "1. HTML Elements"
  },
  {
    kind: "code",
    language: "html",
    code: "<input #name>"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('name')\nname!: ElementRef;"
  },
  {
    kind: "paragraph",
    text: "Use when you want to"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Focus an input",
      "Read or set a value",
      "Scroll an element",
      "Click an element programmatically"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "2. Angular Components"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-child #child></app-child>"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('child')\nchild!: ChildComponent;"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Call child methods",
      "Reset forms",
      "Refresh child data",
      "Open or close a child modal",
      "Trigger validation"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Comparison"
  },
  {
    kind: "table",
    headers: [
      "ViewChild Target",
      "What You Get",
      "Example"
    ],
    rows: [
      [
        "`<input #name>`",
        "`ElementRef`",
        "`focus()`, `value`, `click()`"
      ],
      [
        "`<app-child #child>`",
        "`ChildComponent`",
        "`child.save()`, `child.resetForm()`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge 🧠"
  },
  {
    kind: "paragraph",
    text: "Given this child component:"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class CalculatorComponent {\n\n  add(a: number, b: number) {\n    alert(a + b);\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "Parent HTML:"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-calculator #calc></app-calculator>\n\n<button (click)=\"calculate()\">\n    Add\n</button>"
  },
  {
    kind: "paragraph",
    text: "**Question:** How would you write the parent TypeScript so that clicking **Add** shows `30` by calling the child's `add()` method?"
  },
  {
    kind: "paragraph",
    text: "Try writing it yourself before looking at the answer. This small exercise will make `@ViewChild` much easier to remember."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Project Example - Employee List & Employee Form"
  },
  {
    kind: "paragraph",
    text: "Suppose your page looks like this."
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------------------------------+\n| Employee List                                    |\n|--------------------------------------------------|\n| John                                    [Edit]   |\n| Emma                                    [Edit]   |\n| David                                   [Edit]   |\n|--------------------------------------------------|\n|                Employee Form                     |\n| Name: ____________                              |\n| Dept: ____________                              |\n| Salary: __________                              |\n+--------------------------------------------------+"
  },
  {
    kind: "paragraph",
    text: "There are **2 components**."
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeePageComponent (Parent)\n\n    ├── EmployeeListComponent (Child)\n\n    └── EmployeeFormComponent (Child)"
  },
  {
    kind: "heading",
    level: 2,
    text: "Employee Form Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class EmployeeFormComponent {\n\n  employee = {\n    name: '',\n    department: ''\n  };\n\n  loadEmployee(emp: any) {\n\n    this.employee = emp;\n\n  }\n\n}"
  },
  {
    kind: "paragraph",
    text: "This child knows how to display employee data."
  },
  {
    kind: "heading",
    level: 2,
    text: "Parent HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-form #employeeForm></app-employee-form>\n\n<button (click)=\"editEmployee()\">\n    Edit John\n</button>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Parent TS"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('employeeForm')\nemployeeForm!: EmployeeFormComponent;\n\neditEmployee() {\n\n  const employee = {\n    name: 'John',\n    department: 'HR'\n  };\n\n  this.employeeForm.loadEmployee(employee);\n\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Edit\n\n↓\n\nParent\n\n↓\n\nemployeeForm.loadEmployee(employee)\n\n↓\n\nChild Receives Employee\n\n↓\n\nTextbox Updated"
  },
  {
    kind: "paragraph",
    text: "No API."
  },
  {
    kind: "paragraph",
    text: "No EventEmitter."
  },
  {
    kind: "paragraph",
    text: "No @Input."
  },
  {
    kind: "paragraph",
    text: "Just"
  },
  {
    kind: "code",
    language: "text",
    code: "Parent\n\n↓\n\nViewChild\n\n↓\n\nChild Method"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Real Example - Modal"
  },
  {
    kind: "paragraph",
    text: "Suppose you create a reusable modal."
  },
  {
    kind: "code",
    language: "text",
    code: "<app-modal></app-modal>"
  },
  {
    kind: "paragraph",
    text: "Modal Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class ModalComponent {\n\n  open() {\n\n     this.visible = true;\n\n  }\n\n  close() {\n\n     this.visible = false;\n\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-modal #modal></app-modal>\n\n<button (click)=\"showModal()\">\nOpen\n</button>"
  },
  {
    kind: "paragraph",
    text: "Parent TS"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('modal')\nmodal!: ModalComponent;\n\nshowModal(){\n\n   this.modal.open();\n\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Click Button\n\n↓\n\nParent\n\n↓\n\nmodal.open()\n\n↓\n\nModal Opens"
  },
  {
    kind: "paragraph",
    text: "Very common in Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example - Refresh Child"
  },
  {
    kind: "code",
    language: "ts",
    code: "export class EmployeeListComponent {\n\n   refresh(){\n\n      console.log(\"Loading employees...\");\n\n   }\n\n}"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild(EmployeeListComponent)\nlist!: EmployeeListComponent;\n\nreload(){\n\n   this.list.refresh();\n\n}"
  },
  {
    kind: "paragraph",
    text: "Notice something new."
  },
  {
    kind: "paragraph",
    text: "Earlier we wrote"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('child')"
  },
  {
    kind: "paragraph",
    text: "Now we wrote"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild(EmployeeListComponent)"
  },
  {
    kind: "paragraph",
    text: "Both work."
  },
  {
    kind: "heading",
    level: 2,
    text: "Using Template Reference Variable"
  },
  {
    kind: "paragraph",
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-list #list></app-employee-list>"
  },
  {
    kind: "paragraph",
    text: "TS"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('list')\nlist!: EmployeeListComponent;"
  },
  {
    kind: "heading",
    level: 2,
    text: "Using Component Type"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-list></app-employee-list>"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild(EmployeeListComponent)\nlist!: EmployeeListComponent;"
  },
  {
    kind: "paragraph",
    text: "Angular automatically finds the first `EmployeeListComponent`."
  },
  {
    kind: "heading",
    level: 2,
    text: "Which one should I use?"
  },
  {
    kind: "paragraph",
    text: "If there is only **one child component**, this is cleaner:"
  },
  {
    kind: "paragraph",
    text: "If there are **multiple child components of the same type**, use template reference variables."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-modal #loginModal></app-modal>\n\n<app-modal #deleteModal></app-modal>"
  },
  {
    kind: "code",
    language: "ts",
    code: "@ViewChild('loginModal')\nloginModal!: ModalComponent;\n\n@ViewChild('deleteModal')\ndeleteModal!: ModalComponent;"
  },
  {
    kind: "paragraph",
    text: "Otherwise Angular wouldn't know which modal you mean."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "table",
    headers: [
      "Scenario",
      "Use"
    ],
    rows: [
      [
        "Focus an input",
        "`@ViewChild(ElementRef)`"
      ],
      [
        "Open a modal",
        "`@ViewChild(ModalComponent)`"
      ],
      [
        "Reset a child form",
        "`@ViewChild(FormComponent)`"
      ],
      [
        "Refresh a child table",
        "`@ViewChild(TableComponent)`"
      ],
      [
        "Scroll to an element",
        "`ElementRef`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Interview Question ⭐"
  },
  {
    kind: "paragraph",
    text: "**Q:** When should you use `@ViewChild` instead of `@Input()` or `@Output()`?"
  },
  {
    kind: "paragraph",
    text: "**Answer:**"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Use **`@Input()`** to pass **data from parent to child**.",
      "Use **`@Output()`** to send **events from child to parent**.",
      "Use **`@ViewChild`** when the **parent needs direct access to a child component or HTML element**, such as calling a method (`open()`, `resetForm()`, `refresh()`) or focusing an input."
    ]
  }
];
