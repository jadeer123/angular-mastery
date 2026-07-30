import { LessonBlock } from '../topic.model';

export const lesson13CustomPipes: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is a Pipe?"
  },
  {
    kind: "paragraph",
    text: "Suppose you have employee data."
  },
  {
    kind: "code",
    language: "ts",
    code: "employee = {\n  name: 'john doe',\n  salary: 50000,\n  joiningDate: new Date()\n};"
  },
  {
    kind: "paragraph",
    text: "Should you modify the data just to display it differently?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "Instead, Angular lets us **transform data only for display** using a **Pipe**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Pipes?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Employee List."
  },
  {
    kind: "paragraph",
    text: "Backend returns"
  },
  {
    kind: "code",
    language: "text",
    code: "john doe"
  },
  {
    kind: "paragraph",
    text: "But on the screen,"
  },
  {
    kind: "paragraph",
    text: "you want"
  },
  {
    kind: "paragraph",
    text: "Should you change the actual data?"
  },
  {
    kind: "paragraph",
    text: "Use a Pipe."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Water Pipe"
  },
  {
    kind: "paragraph",
    text: "Imagine dirty water entering a filter."
  },
  {
    kind: "code",
    language: "text",
    code: "Dirty Water\n\n↓\n\nFilter\n\n↓\n\nClean Water"
  },
  {
    kind: "paragraph",
    text: "The water isn't changed at its source."
  },
  {
    kind: "paragraph",
    text: "Only the output changes."
  },
  {
    kind: "paragraph",
    text: "Angular Pipes work the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Original Data\n\n↓\n\nPipe\n\n↓\n\nFormatted Data"
  },
  {
    kind: "paragraph",
    text: "The original value remains unchanged."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Screen displays"
  },
  {
    kind: "paragraph",
    text: "using"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name | uppercase }}"
  },
  {
    kind: "paragraph",
    text: "Notice,"
  },
  {
    kind: "paragraph",
    text: "`employee.name` is still"
  },
  {
    kind: "paragraph",
    text: "Only the display changes."
  },
  {
    kind: "heading",
    level: 2,
    text: "How do Pipes Work?"
  },
  {
    kind: "paragraph",
    text: "Suppose"
  },
  {
    kind: "code",
    language: "ts",
    code: "name = 'john';"
  },
  {
    kind: "paragraph",
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ name | uppercase }}"
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "JOHN"
  },
  {
    kind: "paragraph",
    text: "The variable is still"
  },
  {
    kind: "paragraph",
    text: "Angular transforms it only while displaying it."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Component Data\n\n↓\n\nPipe\n\n↓\n\nFormatted Value\n\n↓\n\nHTML"
  },
  {
    kind: "heading",
    level: 2,
    text: "Built-in Pipes"
  },
  {
    kind: "paragraph",
    text: "Angular already provides many useful pipes."
  },
  {
    kind: "table",
    headers: [
      "Pipe",
      "Purpose"
    ],
    rows: [
      [
        "uppercase",
        "Convert to uppercase"
      ],
      [
        "lowercase",
        "Convert to lowercase"
      ],
      [
        "titlecase",
        "First letter of each word uppercase"
      ],
      [
        "currency",
        "Format currency"
      ],
      [
        "date",
        "Format dates"
      ],
      [
        "percent",
        "Format percentages"
      ],
      [
        "json",
        "Display objects as JSON"
      ],
      [
        "slice",
        "Display part of a string/array"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 1 — Uppercase"
  },
  {
    kind: "paragraph",
    text: "Component"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 2 — Lowercase"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ name | lowercase }}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 3 — Titlecase"
  },
  {
    kind: "code",
    language: "ts",
    code: "name = 'john doe';"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ name | titlecase }}"
  },
  {
    kind: "paragraph",
    text: "Very common for employee names."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 4 — Date Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "joiningDate = new Date();"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ joiningDate | date }}"
  },
  {
    kind: "code",
    language: "text",
    code: "27 Jul 2026"
  },
  {
    kind: "paragraph",
    text: "Custom format"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ joiningDate | date:'dd/MM/yyyy' }}"
  },
  {
    kind: "code",
    language: "text",
    code: "27/07/2026"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 5 — Currency Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "salary = 50000;"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ salary | currency:'INR' }}"
  },
  {
    kind: "code",
    language: "text",
    code: "₹50,000.00"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 6 — Percent Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "progress = 0.75;"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ progress | percent }}"
  },
  {
    kind: "code",
    language: "text",
    code: "75%"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 7 — JSON Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "employee = {\n  id: 1,\n  name: 'John'\n};"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee | json }}"
  },
  {
    kind: "code",
    language: "text",
    code: "{\n  \"id\":1,\n  \"name\":\"John\"\n}"
  },
  {
    kind: "paragraph",
    text: "Very useful for debugging."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example 8 — Slice Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "name = 'Angular';"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ name | slice:0:3 }}"
  },
  {
    kind: "code",
    language: "text",
    code: "Ang"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why are Pipes Useful?"
  },
  {
    kind: "paragraph",
    text: "Without Pipe"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name.toUpperCase() }}"
  },
  {
    kind: "paragraph",
    text: "Imagine writing formatting logic everywhere."
  },
  {
    kind: "paragraph",
    text: "Instead"
  },
  {
    kind: "paragraph",
    text: "Cleaner and easier to read."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Examples"
  },
  {
    kind: "table",
    headers: [
      "Data",
      "Pipe"
    ],
    rows: [
      [
        "Employee Name",
        "titlecase"
      ],
      [
        "Salary",
        "currency"
      ],
      [
        "Joining Date",
        "date"
      ],
      [
        "Attendance %",
        "percent"
      ],
      [
        "Debug API Response",
        "json"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Pipes transform data **only for display**."
  },
  {
    kind: "paragraph",
    text: "✔ The original value never changes."
  },
  {
    kind: "paragraph",
    text: "✔ Angular provides many built-in pipes."
  },
  {
    kind: "paragraph",
    text: "✔ Pipes make templates cleaner and more readable."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next Topic"
  },
  {
    kind: "paragraph",
    text: "We'll build our **first Custom Pipe**."
  },
  {
    kind: "paragraph",
    text: "You'll learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ng generate pipe`",
      "`@Pipe`",
      "`PipeTransform`",
      "`transform()`",
      "Creating an `InitialsPipe` (`John Doe` → `JD`)",
      "Real HRMS examples"
    ]
  },
  {
    kind: "paragraph",
    text: "This is where you'll learn how to create your own reusable data transformations, just like Angular's built-in `uppercase` and `date` pipes."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Creating Your First Custom Pipe"
  },
  {
    kind: "paragraph",
    text: "Suppose every employee card should display initials instead of the full name."
  },
  {
    kind: "paragraph",
    text: "Instead of"
  },
  {
    kind: "paragraph",
    text: "show"
  },
  {
    kind: "code",
    language: "text",
    code: "JD"
  },
  {
    kind: "paragraph",
    text: "Angular doesn't have a built-in pipe for this."
  },
  {
    kind: "paragraph",
    text: "So we'll create our own."
  },
  {
    kind: "paragraph",
    text: "This is called a **Custom Pipe**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Generate a Pipe"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng generate pipe pipes/initials"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g p pipes/initials"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "initials.pipe.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "Generated Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n  name: 'initials'\n})\nexport class InitialsPipe implements PipeTransform {\n\n  transform(value: unknown): unknown {\n    return value;\n  }\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is `@Pipe`?"
  },
  {
    kind: "paragraph",
    text: "Just like"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Component"
  },
  {
    kind: "paragraph",
    text: "creates a Component,"
  },
  {
    kind: "paragraph",
    text: "and"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive"
  },
  {
    kind: "paragraph",
    text: "creates a Directive,"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Pipe"
  },
  {
    kind: "paragraph",
    text: "tells Angular"
  },
  {
    kind: "quote",
    text: "**\"This class is a Pipe.\"**"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `name`?"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Pipe({\n  name: 'initials'\n})"
  },
  {
    kind: "paragraph",
    text: "The name is used inside HTML."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name | initials }}"
  },
  {
    kind: "paragraph",
    text: "Angular sees"
  },
  {
    kind: "code",
    language: "text",
    code: "initials"
  },
  {
    kind: "paragraph",
    text: "and executes"
  },
  {
    kind: "code",
    language: "text",
    code: "InitialsPipe"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `PipeTransform`?"
  },
  {
    kind: "paragraph",
    text: "Every pipe must implement"
  },
  {
    kind: "code",
    language: "ts",
    code: "PipeTransform"
  },
  {
    kind: "paragraph",
    text: "Why?"
  },
  {
    kind: "paragraph",
    text: "Because Angular expects every pipe to have one method."
  },
  {
    kind: "code",
    language: "ts",
    code: "transform()"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `transform()`?"
  },
  {
    kind: "paragraph",
    text: "This is the heart of every pipe."
  },
  {
    kind: "paragraph",
    text: "Angular automatically calls this method."
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value: string) {\n\n}"
  },
  {
    kind: "paragraph",
    text: "The input value comes here."
  },
  {
    kind: "paragraph",
    text: "Your job is to return the transformed value."
  },
  {
    kind: "heading",
    level: 2,
    text: "Simple Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value: string) {\n\n  return value.toUpperCase();\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ 'john' | initials }}"
  },
  {
    kind: "paragraph",
    text: "Angular passed"
  },
  {
    kind: "paragraph",
    text: "to"
  },
  {
    kind: "paragraph",
    text: "The pipe returned"
  },
  {
    kind: "paragraph",
    text: "Angular displayed it."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Initials Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(name: string): string {\n\n  return name\n    .split(' ')\n    .map(word => word[0])\n    .join('');\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ 'John Doe' | initials }}"
  },
  {
    kind: "paragraph",
    text: "Another Example"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ 'Emma Watson' | initials }}"
  },
  {
    kind: "code",
    language: "text",
    code: "EW"
  },
  {
    kind: "code",
    language: "text",
    code: "Component\n\n↓\n\n\"John Doe\"\n\n↓\n\nInitialsPipe\n\n↓\n\ntransform()\n\n↓\n\n\"JD\"\n\n↓\n\nHTML"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Juice Machine"
  },
  {
    kind: "paragraph",
    text: "Imagine"
  },
  {
    kind: "code",
    language: "text",
    code: "Orange\n\n↓\n\nJuicer\n\n↓\n\nOrange Juice"
  },
  {
    kind: "paragraph",
    text: "The orange isn't displayed directly."
  },
  {
    kind: "paragraph",
    text: "It first passes through the machine."
  },
  {
    kind: "paragraph",
    text: "A Pipe works exactly like that."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\nJohn Doe"
  },
  {
    kind: "paragraph",
    text: "Employee card displays"
  },
  {
    kind: "paragraph",
    text: "✔ `@Pipe` creates a custom pipe."
  },
  {
    kind: "paragraph",
    text: "✔ `name` is used in the HTML."
  },
  {
    kind: "paragraph",
    text: "✔ Every pipe implements `PipeTransform`."
  },
  {
    kind: "paragraph",
    text: "✔ `transform()` receives the original value."
  },
  {
    kind: "paragraph",
    text: "✔ `transform()` returns the value to display."
  },
  {
    kind: "heading",
    level: 2,
    text: "Quick Summary"
  },
  {
    kind: "table",
    headers: [
      "Concept",
      "Purpose"
    ],
    rows: [
      [
        "`@Pipe`",
        "Creates a Pipe"
      ],
      [
        "`name`",
        "Used after the `",
        "` symbol"
      ],
      [
        "`PipeTransform`",
        "Interface every pipe implements"
      ],
      [
        "`transform()`",
        "Converts one value into another"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "We'll learn **passing parameters to a Pipe**."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name | truncate:10 }}"
  },
  {
    kind: "code",
    language: "text",
    code: "Alexander..."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ salary | currencyFormat:'₹' }}"
  },
  {
    kind: "paragraph",
    text: "You'll learn how Angular passes values after the `:` into the `transform()` method. This is heavily used in real Angular applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Passing Parameters to a Pipe"
  },
  {
    kind: "paragraph",
    text: "So far, our pipe receives only one value."
  },
  {
    kind: "paragraph",
    text: "Angular internally calls"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value)"
  },
  {
    kind: "paragraph",
    text: "But sometimes we need **extra information**."
  },
  {
    kind: "paragraph",
    text: "For example,"
  },
  {
    kind: "quote",
    text: "Show only the first **10** characters."
  },
  {
    kind: "quote",
    text: "Show only the first **5** characters."
  },
  {
    kind: "paragraph",
    text: "How can we tell the pipe which number to use?"
  },
  {
    kind: "paragraph",
    text: "Using **parameters**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "paragraph",
    text: "Suppose the employee name is"
  },
  {
    kind: "code",
    language: "text",
    code: "Alexander Jonathan Williams"
  },
  {
    kind: "paragraph",
    text: "Sometimes we want"
  },
  {
    kind: "paragraph",
    text: "Sometimes"
  },
  {
    kind: "code",
    language: "text",
    code: "Alexa..."
  },
  {
    kind: "code",
    language: "text",
    code: "Ale..."
  },
  {
    kind: "paragraph",
    text: "The pipe needs an extra value."
  },
  {
    kind: "paragraph",
    text: "Here"
  },
  {
    kind: "code",
    language: "text",
    code: "employee.name"
  },
  {
    kind: "paragraph",
    text: "is the first parameter."
  },
  {
    kind: "code",
    language: "text",
    code: "10"
  },
  {
    kind: "paragraph",
    text: "is the second parameter."
  },
  {
    kind: "paragraph",
    text: "Angular automatically sends both to `transform()`."
  },
  {
    kind: "heading",
    level: 2,
    text: "transform()"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value: string, length: number) {\n\n}"
  },
  {
    kind: "paragraph",
    text: "The second parameter comes from"
  },
  {
    kind: "code",
    language: "html",
    code: ":10"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Pipe"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value: string, length: number): string {\n\n  if (value.length <= length) {\n    return value;\n  }\n\n  return value.substring(0, length) + '...';\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ 'Alexander Jonathan' | truncate:8 }}"
  },
  {
    kind: "code",
    language: "text",
    code: "Alexande..."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ 'Alexander Jonathan' | truncate:5 }}"
  },
  {
    kind: "heading",
    level: 2,
    text: "How does Angular call it?"
  },
  {
    kind: "paragraph",
    text: "Suppose HTML is"
  },
  {
    kind: "paragraph",
    text: "Angular internally does something similar to"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(employee.name, 10)"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Name\n\n↓\n\ntruncate:10\n\n↓\n\ntransform(name, 10)\n\n↓\n\nShortened Name\n\n↓\n\nHTML"
  },
  {
    kind: "heading",
    level: 2,
    text: "Multiple Parameters"
  },
  {
    kind: "paragraph",
    text: "A pipe can receive more than one parameter."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ salary | currencyFormat:'₹':2 }}"
  },
  {
    kind: "paragraph",
    text: "Angular calls"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(value, '₹', 2)"
  },
  {
    kind: "code",
    language: "ts",
    code: "transform(\n  value: number,\n  symbol: string,\n  decimals: number\n) {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Employee bio"
  },
  {
    kind: "code",
    language: "text",
    code: "John has 12 years of experience..."
  },
  {
    kind: "paragraph",
    text: "Employee card should show only"
  },
  {
    kind: "code",
    language: "text",
    code: "John has 12 years..."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.bio | truncate:20 }}"
  },
  {
    kind: "paragraph",
    text: "The same pipe works for every employee."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a TV Remote"
  },
  {
    kind: "paragraph",
    text: "Imagine a TV."
  },
  {
    kind: "paragraph",
    text: "The TV is the same."
  },
  {
    kind: "paragraph",
    text: "The remote sends different settings."
  },
  {
    kind: "code",
    language: "text",
    code: "Volume 10\n\n↓\n\nTV\n\n----------------\n\nVolume 20\n\n↓\n\nTV"
  },
  {
    kind: "paragraph",
    text: "The TV doesn't change."
  },
  {
    kind: "paragraph",
    text: "Only the input changes."
  },
  {
    kind: "paragraph",
    text: "A pipe works exactly the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Original Data\n\n↓\n\nPipe\n\n↓\n\nParameter\n\n↓\n\nDifferent Output"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Suppose you want to greet employees."
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name | greeting:'Hello' }}"
  },
  {
    kind: "code",
    language: "text",
    code: "Hello John"
  },
  {
    kind: "paragraph",
    text: "If you change it to"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ employee.name | greeting:'Welcome' }}"
  },
  {
    kind: "code",
    language: "text",
    code: "Welcome John"
  },
  {
    kind: "paragraph",
    text: "Same pipe."
  },
  {
    kind: "paragraph",
    text: "Different parameter."
  },
  {
    kind: "paragraph",
    text: "✔ Values after `:` are parameters."
  },
  {
    kind: "paragraph",
    text: "✔ Angular passes them to `transform()`."
  },
  {
    kind: "paragraph",
    text: "✔ A pipe can receive multiple parameters."
  },
  {
    kind: "paragraph",
    text: "✔ Parameters make pipes flexible and reusable."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "table",
    headers: [
      "HTML",
      "transform()"
    ],
    rows: [
      [
        "`{{ name \\",
        "initials }}`",
        "`transform(value)`"
      ],
      [
        "`{{ name \\",
        "truncate:10 }}`",
        "`transform(value, 10)`"
      ],
      [
        "`{{ salary \\",
        "currencyFormat:'₹':2 }}`",
        "`transform(value, '₹', 2)`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Real-world Pipes You'll See"
  },
  {
    kind: "table",
    headers: [
      "Pipe",
      "Example"
    ],
    rows: [
      [
        "`truncate`",
        "`{{ bio \\",
        "truncate:30 }}`"
      ],
      [
        "`initials`",
        "`{{ employee.name \\",
        "initials }}`"
      ],
      [
        "`fileSize`",
        "`{{ file.size \\",
        "fileSize }}`"
      ],
      [
        "`safeHtml`",
        "`{{ html \\",
        "safeHtml }}`"
      ],
      [
        "`timeAgo`",
        "`{{ createdDate \\",
        "timeAgo }}`"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "We'll finish the Pipes lesson by covering **Pure vs Impure Pipes**, which is one of the most commonly asked Angular interview topics."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What is a Pure Pipe?",
      "What is an Impure Pipe?",
      "Why Angular made pipes pure by default",
      "Performance implications",
      "When (and when not) to use an Impure Pipe in real applications."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Pure vs Impure Pipes"
  },
  {
    kind: "paragraph",
    text: "First, understand one thing."
  },
  {
    kind: "paragraph",
    text: "Whenever Angular detects a change,"
  },
  {
    kind: "paragraph",
    text: "it decides whether to execute the pipe again."
  },
  {
    kind: "paragraph",
    text: "The question is:"
  },
  {
    kind: "quote",
    text: "**Should Angular execute the pipe every time?**"
  },
  {
    kind: "paragraph",
    text: "The answer depends on whether the pipe is **Pure** or **Impure**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is a Pure Pipe?"
  },
  {
    kind: "paragraph",
    text: "A **Pure Pipe** runs **only when the input value changes**."
  },
  {
    kind: "paragraph",
    text: "This is Angular's default behavior."
  },
  {
    kind: "paragraph",
    text: "Angular runs"
  },
  {
    kind: "code",
    language: "text",
    code: "John\n\n↓\n\nuppercase\n\n↓\n\nJOHN"
  },
  {
    kind: "paragraph",
    text: "Now suppose another variable changes."
  },
  {
    kind: "code",
    language: "ts",
    code: "count++;"
  },
  {
    kind: "paragraph",
    text: "Did `name` change?"
  },
  {
    kind: "paragraph",
    text: "Angular does **not** run the pipe again."
  },
  {
    kind: "paragraph",
    text: "This improves performance."
  },
  {
    kind: "code",
    language: "ts",
    code: "name = 'John';\ncount = 0;"
  },
  {
    kind: "code",
    language: "html",
    code: "{{ name | uppercase }}\n\n<button (click)=\"count++\">"
  },
  {
    kind: "paragraph",
    text: "Every click changes"
  },
  {
    kind: "paragraph",
    text: "But"
  },
  {
    kind: "code",
    language: "ts",
    code: "name"
  },
  {
    kind: "paragraph",
    text: "remains"
  },
  {
    kind: "paragraph",
    text: "The `uppercase` pipe is **not executed again**."
  },
  {
    kind: "code",
    language: "text",
    code: "name = John\n\n↓\n\nPure Pipe Executes\n\n↓\n\nJOHN\n\n-----------------\n\ncount changes\n\n↓\n\nname unchanged\n\n↓\n\nPipe NOT executed"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Calculator"
  },
  {
    kind: "code",
    language: "text",
    code: "10 + 20"
  },
  {
    kind: "paragraph",
    text: "The answer is"
  },
  {
    kind: "code",
    language: "text",
    code: "30"
  },
  {
    kind: "paragraph",
    text: "If the numbers don't change,"
  },
  {
    kind: "paragraph",
    text: "should you calculate again?"
  },
  {
    kind: "paragraph",
    text: "That's exactly how a Pure Pipe works."
  },
  {
    kind: "code",
    language: "ts",
    code: "employee.name = 'John';"
  },
  {
    kind: "paragraph",
    text: "Dashboard notification changes."
  },
  {
    kind: "code",
    language: "ts",
    code: "notificationCount++;"
  },
  {
    kind: "paragraph",
    text: "Employee name didn't change."
  },
  {
    kind: "paragraph",
    text: "The pipe does **not** run again."
  },
  {
    kind: "paragraph",
    text: "This saves processing time."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is an Impure Pipe?"
  },
  {
    kind: "paragraph",
    text: "An **Impure Pipe** executes **every time Angular performs change detection**."
  },
  {
    kind: "paragraph",
    text: "Even if the input didn't change."
  },
  {
    kind: "code",
    language: "ts",
    code: "@Pipe({\n  name: 'example',\n  pure: false\n})"
  },
  {
    kind: "code",
    language: "ts",
    code: "pure: false"
  },
  {
    kind: "paragraph",
    text: "Now Angular executes the pipe frequently during change detection."
  },
  {
    kind: "code",
    language: "text",
    code: "Button Click\n\n↓\n\nChange Detection\n\n↓\n\nImpure Pipe Executes\n\n↓\n\nButton Click Again\n\n↓\n\nChange Detection\n\n↓\n\nImpure Pipe Executes Again\n\n↓\n\nEven if input didn't change"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is this slower?"
  },
  {
    kind: "paragraph",
    text: "Imagine a page with"
  },
  {
    kind: "code",
    language: "text",
    code: "100 Employee Cards"
  },
  {
    kind: "paragraph",
    text: "Each card has an impure pipe."
  },
  {
    kind: "paragraph",
    text: "Every mouse click,"
  },
  {
    kind: "paragraph",
    text: "every timer,"
  },
  {
    kind: "paragraph",
    text: "every change detection,"
  },
  {
    kind: "paragraph",
    text: "Angular executes"
  },
  {
    kind: "code",
    language: "text",
    code: "100 Pipes Again"
  },
  {
    kind: "paragraph",
    text: "Even if the employee data hasn't changed."
  },
  {
    kind: "paragraph",
    text: "That's why impure pipes can hurt performance."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "employees = [];"
  },
  {
    kind: "paragraph",
    text: "You don't replace the array."
  },
  {
    kind: "paragraph",
    text: "you do"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employees.push(newEmployee);"
  },
  {
    kind: "paragraph",
    text: "The array reference stays the same."
  },
  {
    kind: "paragraph",
    text: "A **Pure Pipe** may not detect this internal change."
  },
  {
    kind: "paragraph",
    text: "An **Impure Pipe** will run again because Angular checks it every change detection cycle."
  },
  {
    kind: "heading",
    level: 2,
    text: "Pure Pipe"
  },
  {
    kind: "code",
    language: "text",
    code: "Input Changed?\n\n↓\n\nYes\n\n↓\n\nExecute Pipe\n\n----------------\n\nInput Same?\n\n↓\n\nDon't Execute"
  },
  {
    kind: "heading",
    level: 2,
    text: "Impure Pipe"
  },
  {
    kind: "code",
    language: "text",
    code: "Change Detection Happens\n\n↓\n\nExecute Pipe\n\n↓\n\nAgain\n\n↓\n\nExecute Pipe\n\n↓\n\nAgain\n\n↓\n\nExecute Pipe"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Employee List"
  },
  {
    kind: "code",
    language: "text",
    code: "John\n\nEmma\n\nDavid"
  },
  {
    kind: "paragraph",
    text: "Notification count changes."
  },
  {
    kind: "code",
    language: "text",
    code: "5 → 6"
  },
  {
    kind: "heading",
    level: 3,
    text: "Pure Pipe"
  },
  {
    kind: "paragraph",
    text: "Employee names didn't change."
  },
  {
    kind: "paragraph",
    text: "Pipe doesn't execute."
  },
  {
    kind: "paragraph",
    text: "✅ Faster."
  },
  {
    kind: "heading",
    level: 3,
    text: "Impure Pipe"
  },
  {
    kind: "paragraph",
    text: "Notification changed."
  },
  {
    kind: "paragraph",
    text: "Angular executes the pipe again."
  },
  {
    kind: "paragraph",
    text: "Even though employee names didn't change."
  },
  {
    kind: "paragraph",
    text: "❌ More work."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why are Pipes Pure by Default?"
  },
  {
    kind: "paragraph",
    text: "Because Angular applications can have"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Thousands of components",
      "Hundreds of pipes",
      "Large datasets"
    ]
  },
  {
    kind: "paragraph",
    text: "Running every pipe during every change detection would make the application slow."
  },
  {
    kind: "paragraph",
    text: "That's why Angular chose"
  },
  {
    kind: "code",
    language: "ts",
    code: "pure: true"
  },
  {
    kind: "paragraph",
    text: "by default."
  },
  {
    kind: "heading",
    level: 2,
    text: "When should we use an Impure Pipe?"
  },
  {
    kind: "paragraph",
    text: "Very rarely."
  },
  {
    kind: "paragraph",
    text: "Only when the displayed result depends on something that changes **without the input reference changing**."
  },
  {
    kind: "paragraph",
    text: "Most Angular developers rarely create impure pipes."
  },
  {
    kind: "paragraph",
    text: "In enterprise applications (HRMS, Banking, ERP), **95% of custom pipes are pure**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "paragraph",
    text: "✅ Keep pipes pure whenever possible."
  },
  {
    kind: "paragraph",
    text: "✅ If your data changes, prefer creating a **new object or array** instead of mutating the existing one."
  },
  {
    kind: "paragraph",
    text: "❌ Avoid"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employees.push(employee);"
  },
  {
    kind: "paragraph",
    text: "✅ Prefer"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.employees = [...this.employees, employee];"
  },
  {
    kind: "paragraph",
    text: "Now the array reference changes, and a pure pipe will run correctly."
  },
  {
    kind: "heading",
    level: 2,
    text: "Quick Comparison"
  },
  {
    kind: "table",
    headers: [
      "Pure Pipe",
      "Impure Pipe"
    ],
    rows: [
      [
        "Default (`pure: true`)",
        "`pure: false`"
      ],
      [
        "Runs only when input changes",
        "Runs on every change detection"
      ],
      [
        "Faster",
        "Slower"
      ],
      [
        "Recommended",
        "Rarely used"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Takeaways"
  },
  {
    kind: "paragraph",
    text: "✔ Pipes are **Pure** by default."
  },
  {
    kind: "paragraph",
    text: "✔ A Pure Pipe runs only when its input changes."
  },
  {
    kind: "paragraph",
    text: "✔ An Impure Pipe runs during every Angular change detection cycle."
  },
  {
    kind: "paragraph",
    text: "✔ Pure Pipes provide better performance and are the recommended choice."
  },
  {
    kind: "paragraph",
    text: "✔ Use an Impure Pipe only when you have a specific need that cannot be solved with immutable data or other Angular patterns."
  }
];
