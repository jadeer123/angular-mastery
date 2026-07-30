import { LessonBlock } from '../topic.model';

export const lesson12CustomDirectives: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is a Custom Directive?"
  },
  {
    kind: "paragraph",
    text: "We've already used Angular directives."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "code",
    language: "html",
    code: "*ngIf\n\n*ngFor\n\n[ngClass]\n\n[ngStyle]"
  },
  {
    kind: "paragraph",
    text: "These are **built-in directives** provided by Angular."
  },
  {
    kind: "paragraph",
    text: "But what if Angular doesn't have a directive for your requirement?"
  },
  {
    kind: "paragraph",
    text: "You can create your own."
  },
  {
    kind: "paragraph",
    text: "That is called a **Custom Directive**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why Do We Need Custom Directives?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application."
  },
  {
    kind: "paragraph",
    text: "Every required field should become red when invalid."
  },
  {
    kind: "paragraph",
    text: "Without a directive,"
  },
  {
    kind: "paragraph",
    text: "you'll write the same code again and again."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n↓\n\nName\n\n↓\n\nRed Border\n\n----------------\n\nDepartment\n\n↓\n\nRed Border\n\n----------------\n\nEmail\n\n↓\n\nRed Border"
  },
  {
    kind: "paragraph",
    text: "The same logic is repeated."
  },
  {
    kind: "paragraph",
    text: "Instead,"
  },
  {
    kind: "paragraph",
    text: "create one directive."
  },
  {
    kind: "code",
    language: "text",
    code: "HighlightDirective\n\n↓\n\nName\n\nEmail\n\nDepartment\n\nPhone"
  },
  {
    kind: "paragraph",
    text: "Now every field reuses the same logic."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Stamp"
  },
  {
    kind: "paragraph",
    text: "Imagine an office."
  },
  {
    kind: "paragraph",
    text: "Every approved document needs this stamp."
  },
  {
    kind: "code",
    language: "text",
    code: "APPROVED"
  },
  {
    kind: "paragraph",
    text: "Should you draw the stamp every time?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "You use one rubber stamp repeatedly."
  },
  {
    kind: "paragraph",
    text: "A Custom Directive works the same way."
  },
  {
    kind: "paragraph",
    text: "Write the behavior once."
  },
  {
    kind: "paragraph",
    text: "Reuse it everywhere."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose every employee card should change color on hover."
  },
  {
    kind: "paragraph",
    text: "every component needs hover logic."
  },
  {
    kind: "paragraph",
    text: "With a directive,"
  },
  {
    kind: "paragraph",
    text: "simply write:"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHoverHighlight>\n\nEmployee Card\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "The directive handles everything."
  },
  {
    kind: "heading",
    level: 2,
    text: "Built-in vs Custom Directives"
  },
  {
    kind: "table",
    headers: [
      "Built-in Directive",
      "Custom Directive"
    ],
    rows: [
      [
        "Created by Angular",
        "Created by you"
      ],
      [
        "`ngIf`",
        "`appHighlight`"
      ],
      [
        "`ngFor`",
        "`appPermission`"
      ],
      [
        "`ngClass`",
        "`appTooltip`"
      ],
      [
        "`ngStyle`",
        "`appAutoFocus`"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Types of Custom Directives"
  },
  {
    kind: "paragraph",
    text: "Angular supports two kinds."
  },
  {
    kind: "heading",
    level: 3,
    text: "1️⃣ Attribute Directive"
  },
  {
    kind: "paragraph",
    text: "Changes the appearance or behavior of an existing element."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Highlight",
      "Change Color",
      "Disable Button",
      "Tooltip",
      "Auto Focus"
    ]
  },
  {
    kind: "heading",
    level: 3,
    text: "2️⃣ Structural Directive"
  },
  {
    kind: "paragraph",
    text: "Changes the DOM."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Show",
      "Hide",
      "Repeat",
      "Permission-based rendering"
    ]
  },
  {
    kind: "paragraph",
    text: "Angular's `*ngIf` and `*ngFor` are structural directives."
  },
  {
    kind: "paragraph",
    text: "You'll learn to create your own later."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Examples"
  },
  {
    kind: "table",
    headers: [
      "Directive",
      "Purpose"
    ],
    rows: [
      [
        "`appHighlight`",
        "Highlight an element"
      ],
      [
        "`appAutoFocus`",
        "Focus an input automatically"
      ],
      [
        "`appPermission`",
        "Show content based on user permission"
      ],
      [
        "`appTooltip`",
        "Display a tooltip"
      ],
      [
        "`appUppercase`",
        "Convert text to uppercase while typing"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Do Companies Use Custom Directives?"
  },
  {
    kind: "paragraph",
    text: "Imagine you have **200 input fields**."
  },
  {
    kind: "paragraph",
    text: "Every invalid field should:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Show a red border",
      "Show a red background",
      "Shake slightly"
    ]
  },
  {
    kind: "paragraph",
    text: "you repeat the same code 200 times."
  },
  {
    kind: "paragraph",
    text: "you write the behavior once and use it everywhere."
  },
  {
    kind: "paragraph",
    text: "This keeps your application consistent and easier to maintain."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ A Custom Directive is created by the developer."
  },
  {
    kind: "paragraph",
    text: "✔ It adds reusable behavior to HTML elements."
  },
  {
    kind: "paragraph",
    text: "✔ It helps avoid duplicate code."
  },
  {
    kind: "paragraph",
    text: "✔ Attribute Directives modify existing elements."
  },
  {
    kind: "paragraph",
    text: "✔ Structural Directives add or remove elements from the DOM."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next"
  },
  {
    kind: "paragraph",
    text: "We'll create your **first Custom Directive** and learn:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`ng generate directive`",
      "`@Directive`",
      "`ElementRef`",
      "`Renderer2`"
    ]
  },
  {
    kind: "paragraph",
    text: "We'll also build a simple **Hover Highlight Directive** with short, real-world code examples."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Creating Your First Custom Directive"
  },
  {
    kind: "paragraph",
    text: "Suppose we want this behavior:"
  },
  {
    kind: "quote",
    text: "When the mouse enters a card, its background becomes yellow."
  },
  {
    kind: "paragraph",
    text: "When the mouse leaves,"
  },
  {
    kind: "paragraph",
    text: "it returns to white."
  },
  {
    kind: "paragraph",
    text: "Instead of writing this logic in every component,"
  },
  {
    kind: "paragraph",
    text: "we create a directive."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Generate Directive"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng generate directive directives/highlight"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g d directives/highlight"
  },
  {
    kind: "paragraph",
    text: "Angular creates"
  },
  {
    kind: "code",
    language: "text",
    code: "highlight.directive.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 — Generated Directive"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Directive } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `@Directive`?"
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
    kind: "code",
    language: "ts",
    code: "@Directive"
  },
  {
    kind: "paragraph",
    text: "tells Angular"
  },
  {
    kind: "quote",
    text: "\"This class is a Directive.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "What is `selector`?"
  },
  {
    kind: "code",
    language: "ts",
    code: "selector: '[appHighlight]'"
  },
  {
    kind: "paragraph",
    text: "means"
  },
  {
    kind: "paragraph",
    text: "Whenever Angular sees"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>"
  },
  {
    kind: "paragraph",
    text: "it executes this directive."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3 — Access the HTML Element"
  },
  {
    kind: "paragraph",
    text: "A directive needs access to the HTML element."
  },
  {
    kind: "paragraph",
    text: "Angular provides **ElementRef**."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private element: ElementRef) {}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What is ElementRef?"
  },
  {
    kind: "paragraph",
    text: "Imagine this HTML."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n\nEmployee Card\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "`ElementRef` represents"
  },
  {
    kind: "code",
    language: "text",
    code: "↓\n\n<div>\n\nEmployee Card\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "It gives the directive access to that element."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 4 — Change Background Color"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private element: ElementRef) {\n\n  this.element.nativeElement.style.backgroundColor = 'yellow';\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "Result"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Background becomes"
  },
  {
    kind: "paragraph",
    text: "🟨 Yellow"
  },
  {
    kind: "heading",
    level: 2,
    text: "But..."
  },
  {
    kind: "paragraph",
    text: "Angular recommends **not** changing the DOM directly."
  },
  {
    kind: "paragraph",
    text: "Instead of"
  },
  {
    kind: "code",
    language: "ts",
    code: "element.nativeElement.style..."
  },
  {
    kind: "paragraph",
    text: "Angular provides **Renderer2**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Renderer2?"
  },
  {
    kind: "paragraph",
    text: "Instead of directly touching the DOM,"
  },
  {
    kind: "paragraph",
    text: "Angular safely updates it."
  },
  {
    kind: "paragraph",
    text: "Think of it like this."
  },
  {
    kind: "paragraph",
    text: "❌ Directly paint the wall yourself."
  },
  {
    kind: "paragraph",
    text: "✅ Ask the building maintenance team to paint it."
  },
  {
    kind: "paragraph",
    text: "Renderer2 is Angular's safe way to modify the DOM."
  },
  {
    kind: "heading",
    level: 2,
    text: "Using Renderer2"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n\n  private element: ElementRef,\n\n  private renderer: Renderer2\n\n) {\n\n  this.renderer.setStyle(\n\n    this.element.nativeElement,\n\n    'backgroundColor',\n\n    'yellow'\n\n  );\n\n}"
  },
  {
    kind: "paragraph",
    text: "This does exactly the same thing,"
  },
  {
    kind: "paragraph",
    text: "but follows Angular best practices."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n\nJohn\n\n</div>\n\n<div appHighlight>\n\nEmma\n\n</div>\n\n<div appHighlight>\n\nDavid\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "All employee cards automatically become highlighted."
  },
  {
    kind: "paragraph",
    text: "No repeated code."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Finds\n\n↓\n\nappHighlight\n\n↓\n\nCreates Directive\n\n↓\n\nGets HTML Element\n\n↓\n\nRenderer2 Changes Style\n\n↓\n\nUpdated UI"
  },
  {
    kind: "paragraph",
    text: "✔ `@Directive` creates a directive."
  },
  {
    kind: "paragraph",
    text: "✔ `selector` tells Angular where to use it."
  },
  {
    kind: "paragraph",
    text: "✔ `ElementRef` gives access to the HTML element."
  },
  {
    kind: "paragraph",
    text: "✔ `Renderer2` safely changes the DOM."
  },
  {
    kind: "paragraph",
    text: "✔ A directive allows you to reuse the same behavior on many elements."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now we'll make the directive interactive using:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**`@HostListener`** (listen to events like hover and click)",
      "**`@HostBinding`** (bind properties to the host element)"
    ]
  },
  {
    kind: "paragraph",
    text: "We'll build a real **Hover Highlight Directive** that changes color on mouse enter and restores it on mouse leave—the kind of directive commonly used in Angular applications."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 @HostListener"
  },
  {
    kind: "code",
    language: "text",
    code: "Mouse enters card\n        ↓\nBackground becomes Light Blue\n\nMouse leaves card\n        ↓\nBackground becomes White"
  },
  {
    kind: "paragraph",
    text: "Instead of writing `(mouseenter)` in every component,"
  },
  {
    kind: "paragraph",
    text: "we write it once in a directive."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is @HostListener?"
  },
  {
    kind: "paragraph",
    text: "`@HostListener` listens for events on the element where the directive is applied."
  },
  {
    kind: "paragraph",
    text: "For example,"
  },
  {
    kind: "paragraph",
    text: "When the mouse enters this `<div>`,"
  },
  {
    kind: "paragraph",
    text: "the directive receives the event."
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
    kind: "code",
    language: "text",
    code: "Someone presses Bell\n\n↓\n\nDoor Bell Rings\n\n↓\n\nYou Open Door"
  },
  {
    kind: "paragraph",
    text: "The bell listens for someone pressing it."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "paragraph",
    text: "`@HostListener` listens for events."
  },
  {
    kind: "code",
    language: "text",
    code: "Mouse Enter\n\n↓\n\nHostListener\n\n↓\n\nRun Method"
  },
  {
    kind: "heading",
    level: 2,
    text: "Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostListener('mouseenter')\nonMouseEnter() {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Meaning"
  },
  {
    kind: "quote",
    text: "\"Whenever the mouse enters this element, execute this method.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Mouse Leave"
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostListener('mouseleave')\nonMouseLeave() {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now Angular also listens when the mouse leaves."
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Directive"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n  constructor(\n    private element: ElementRef,\n    private renderer: Renderer2\n  ) {}\n\n  @HostListener('mouseenter')\n  onMouseEnter() {\n\n    this.renderer.setStyle(\n      this.element.nativeElement,\n      'backgroundColor',\n      'lightblue'\n    );\n\n  }\n\n  @HostListener('mouseleave')\n  onMouseLeave() {\n\n    this.renderer.removeStyle(\n      this.element.nativeElement,\n      'backgroundColor'\n    );\n\n  }\n\n}"
  },
  {
    kind: "heading",
    level: 2,
    text: "What Happens?"
  },
  {
    kind: "paragraph",
    text: "Initially"
  },
  {
    kind: "code",
    language: "text",
    code: "John\n\nEmma\n\nDavid"
  },
  {
    kind: "paragraph",
    text: "Move mouse over **Emma**"
  },
  {
    kind: "paragraph",
    text: "Move mouse away"
  },
  {
    kind: "code",
    language: "text",
    code: "Mouse Enters\n\n↓\n\nHostListener\n\n↓\n\nDirective Runs\n\n↓\n\nRenderer2 Changes Style\n\n↓\n\nUI Updated\n\n-------------------\n\nMouse Leaves\n\n↓\n\nHostListener\n\n↓\n\nRenderer2 Removes Style\n\n↓\n\nOriginal UI"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose your Employee List has 100 employees."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>John</div>\n\n<div appHighlight>Emma</div>\n\n<div appHighlight>David</div>"
  },
  {
    kind: "paragraph",
    text: "Every card automatically gets hover behavior."
  },
  {
    kind: "paragraph",
    text: "No duplicated code."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is this Better?"
  },
  {
    kind: "paragraph",
    text: "Without Directive"
  },
  {
    kind: "code",
    language: "html",
    code: "<div\n(mouseenter)=\"...\"\n(mouseleave)=\"...\">\n\nJohn\n\n</div>\n\n<div\n(mouseenter)=\"...\"\n(mouseleave)=\"...\">\n\nEmma\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Repeated everywhere."
  },
  {
    kind: "paragraph",
    text: "With Directive"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n\nJohn\n\n</div>\n\n<div appHighlight>\n\nEmma\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Much cleaner."
  },
  {
    kind: "paragraph",
    text: "✔ `@HostListener` listens for events on the host element."
  },
  {
    kind: "paragraph",
    text: "✔ Common events include:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`click`",
      "`mouseenter`",
      "`mouseleave`",
      "`focus`",
      "`blur`",
      "`keydown`"
    ]
  },
  {
    kind: "paragraph",
    text: "✔ It helps move event logic out of components into reusable directives."
  },
  {
    kind: "paragraph",
    text: "The next concept is **`@HostBinding`**."
  },
  {
    kind: "paragraph",
    text: "Instead of manually changing styles using `Renderer2`, you'll learn how to **bind properties directly to the host element**. This is another common pattern in Angular and is frequently asked in interviews."
  },
  {
    kind: "heading",
    level: 2,
    text: "What is it?"
  },
  {
    kind: "paragraph",
    text: "`@Directive` tells Angular,"
  },
  {
    kind: "paragraph",
    text: "Without it, Angular treats it like a normal TypeScript class."
  },
  {
    kind: "heading",
    level: 3,
    text: "Code"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n}"
  },
  {
    kind: "paragraph",
    text: "Think of it like:"
  },
  {
    kind: "code",
    language: "text",
    code: "@Component → Creates a Component\n\n@Directive → Creates a Directive"
  },
  {
    kind: "heading",
    level: 2,
    text: "2️⃣ `selector`"
  },
  {
    kind: "paragraph",
    text: "The selector tells Angular"
  },
  {
    kind: "quote",
    text: "**\"Where should I apply this directive?\"**"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appHighlight]'\n})"
  },
  {
    kind: "paragraph",
    text: "Now Angular looks for"
  },
  {
    kind: "paragraph",
    text: "When it finds `appHighlight`,"
  },
  {
    kind: "paragraph",
    text: "it creates the directive."
  },
  {
    kind: "paragraph",
    text: "Think of it like a **keyword**."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular reads HTML\n\n↓\n\nFinds appHighlight\n\n↓\n\nRuns HighlightDirective"
  },
  {
    kind: "heading",
    level: 2,
    text: "3️⃣ `ElementRef`"
  },
  {
    kind: "paragraph",
    text: "A directive needs to know"
  },
  {
    kind: "quote",
    text: "**Which HTML element am I working on?**"
  },
  {
    kind: "paragraph",
    text: "Angular gives that element through `ElementRef`."
  },
  {
    kind: "heading",
    level: 3,
    text: "HTML"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n\nJohn\n\n</div>"
  },
  {
    kind: "heading",
    level: 3,
    text: "TS"
  },
  {
    kind: "paragraph",
    text: "Now"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.element.nativeElement"
  },
  {
    kind: "paragraph",
    text: "refers to"
  },
  {
    kind: "code",
    language: "html",
    code: "<div>\n\nJohn\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "So `ElementRef` is simply a reference to the HTML element."
  },
  {
    kind: "heading",
    level: 2,
    text: "4️⃣ `Renderer2`"
  },
  {
    kind: "paragraph",
    text: "Suppose you want to change the background color."
  },
  {
    kind: "code",
    language: "ts",
    code: "this.element.nativeElement.style.backgroundColor = 'yellow';"
  },
  {
    kind: "paragraph",
    text: "Angular recommends"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.renderer.setStyle(\n  this.element.nativeElement,\n  'backgroundColor',\n  'yellow'\n);"
  },
  {
    kind: "paragraph",
    text: "Why?"
  },
  {
    kind: "paragraph",
    text: "Because Angular safely updates the DOM."
  },
  {
    kind: "paragraph",
    text: "❌ Directly changing HTML"
  },
  {
    kind: "paragraph",
    text: "✅ Asking Angular to change HTML"
  },
  {
    kind: "heading",
    level: 2,
    text: "5️⃣ Reusable Behavior"
  },
  {
    kind: "paragraph",
    text: "Suppose you have"
  },
  {
    kind: "paragraph",
    text: "You wrote the highlighting logic only **once**."
  },
  {
    kind: "code",
    language: "ts",
    code: "HighlightDirective"
  },
  {
    kind: "paragraph",
    text: "Angular automatically applies it to all three `<div>` elements."
  },
  {
    kind: "code",
    language: "text",
    code: "HighlightDirective\n\n        ↓\n\nJohn\n\nEmma\n\nDavid"
  },
  {
    kind: "heading",
    level: 2,
    text: "Complete Example"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n  constructor(\n\n    private element: ElementRef,\n\n    private renderer: Renderer2\n\n  ) {\n\n    this.renderer.setStyle(\n\n      this.element.nativeElement,\n\n      'backgroundColor',\n\n      'yellow'\n\n    );\n\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n  Employee Card\n</div>"
  },
  {
    kind: "heading",
    level: 3,
    text: "What happens?"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "`@Directive` → Angular knows this is a directive.",
      "`selector` → Angular finds `<div appHighlight>`.",
      "`ElementRef` → Gets a reference to that `<div>`.",
      "`Renderer2` → Changes its background color to yellow.",
      "Because it's a directive, you can reuse the same behavior on **any** element by simply adding `appHighlight`."
    ]
  },
  {
    kind: "paragraph",
    text: "This is the mental model you should remember:"
  },
  {
    kind: "code",
    language: "text",
    code: "Angular reads HTML\n        ↓\nFinds appHighlight\n        ↓\nCreates HighlightDirective\n        ↓\nElementRef gets the <div>\n        ↓\nRenderer2 changes the <div>\n        ↓\nUI updates"
  },
  {
    kind: "paragraph",
    text: "This flow is exactly how custom attribute directives work internally."
  },
  {
    kind: "paragraph",
    text: "Suppose you have this HTML."
  },
  {
    kind: "paragraph",
    text: "Your directive is attached to this `<div>`."
  },
  {
    kind: "paragraph",
    text: "How does the directive know **which `<div>`** it should work on?"
  },
  {
    kind: "paragraph",
    text: "Angular gives you that element using **ElementRef**."
  },
  {
    kind: "code",
    language: "html",
    code: "<div>\n  Employee Card\n</div>"
  },
  {
    kind: "paragraph",
    text: "It is simply a **reference (pointer)** to the actual HTML element."
  },
  {
    kind: "code",
    language: "text",
    code: "HTML\n\n↓\n\n<div>\n\n↓\n\nElementRef\n\n↓\n\nthis.element.nativeElement"
  },
  {
    kind: "paragraph",
    text: "So,"
  },
  {
    kind: "quote",
    text: "**ElementRef = A reference to the HTML element.**"
  },
  {
    kind: "code",
    language: "html",
    code: "<input appHighlight>"
  },
  {
    kind: "paragraph",
    text: "Inside your directive,"
  },
  {
    kind: "code",
    language: "html",
    code: "<input>"
  },
  {
    kind: "heading",
    level: 2,
    text: "What can we do with ElementRef?"
  },
  {
    kind: "paragraph",
    text: "You can access the HTML element."
  },
  {
    kind: "paragraph",
    text: "Example:"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.element.nativeElement.focus();"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.element.nativeElement.value = 'John';"
  },
  {
    kind: "paragraph",
    text: "So ElementRef gives you direct access to the HTML element."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Then why do we need Renderer2?"
  },
  {
    kind: "paragraph",
    text: "Angular says:"
  },
  {
    kind: "quote",
    text: "\"Don't modify the DOM directly.\""
  },
  {
    kind: "paragraph",
    text: "Instead of this"
  },
  {
    kind: "paragraph",
    text: "Angular prefers"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Company"
  },
  {
    kind: "paragraph",
    text: "Imagine you're working in a company."
  },
  {
    kind: "paragraph",
    text: "You want to paint your office wall."
  },
  {
    kind: "paragraph",
    text: "Option 1"
  },
  {
    kind: "paragraph",
    text: "Go and paint it yourself."
  },
  {
    kind: "paragraph",
    text: "Option 2"
  },
  {
    kind: "paragraph",
    text: "Tell the maintenance team."
  },
  {
    kind: "paragraph",
    text: "The maintenance team paints it safely."
  },
  {
    kind: "paragraph",
    text: "Here,"
  },
  {
    kind: "code",
    language: "text",
    code: "You\n\n↓\n\nMaintenance Team\n\n↓\n\nWall Updated"
  },
  {
    kind: "paragraph",
    text: "In Angular,"
  },
  {
    kind: "code",
    language: "text",
    code: "Directive\n\n↓\n\nRenderer2\n\n↓\n\nHTML Updated"
  },
  {
    kind: "paragraph",
    text: "Renderer2 is Angular's **safe DOM manipulation service**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Using ElementRef Directly"
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(private element: ElementRef) {\n\n  this.element.nativeElement.style.color = 'red';\n\n}"
  },
  {
    kind: "paragraph",
    text: "This works,"
  },
  {
    kind: "paragraph",
    text: "but Angular doesn't recommend it."
  },
  {
    kind: "code",
    language: "ts",
    code: "constructor(\n\n  private element: ElementRef,\n\n  private renderer: Renderer2\n\n) {\n\n  this.renderer.setStyle(\n\n    this.element.nativeElement,\n\n    'color',\n\n    'red'\n\n  );\n\n}"
  },
  {
    kind: "paragraph",
    text: "This is the recommended approach."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is Renderer2 Better?"
  },
  {
    kind: "paragraph",
    text: "Angular applications can run in different environments:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Browser",
      "Server-side rendering (SSR)",
      "Web Workers",
      "Future rendering platforms"
    ]
  },
  {
    kind: "paragraph",
    text: "`Renderer2` abstracts DOM operations so Angular can work correctly across these environments."
  },
  {
    kind: "paragraph",
    text: "For day-to-day development, the practical takeaway is:"
  },
  {
    kind: "quote",
    text: "**Use `Renderer2` instead of directly changing `nativeElement` whenever you need to modify the DOM.**"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose every invalid input should have a red border."
  },
  {
    kind: "paragraph",
    text: "The directive runs."
  },
  {
    kind: "code",
    language: "text",
    code: "Angular Finds appHighlight\n\n↓\n\nElementRef\n\n↓\n\nGets <input>\n\n↓\n\nRenderer2\n\n↓\n\nAdds Red Border\n\n↓\n\nUser Sees Red Border"
  },
  {
    kind: "heading",
    level: 2,
    text: "Simple Difference"
  },
  {
    kind: "table",
    headers: [
      "ElementRef",
      "Renderer2"
    ],
    rows: [
      [
        "Gives access to the HTML element",
        "Safely changes the HTML element"
      ],
      [
        "\"Which element?\"",
        "\"What should I change?\""
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Easy Way to Remember"
  },
  {
    kind: "code",
    language: "text",
    code: "ElementRef\n        ↓\nGets the HTML element\n\nRenderer2\n        ↓\nChanges the HTML element"
  },
  {
    kind: "paragraph",
    text: "Or even shorter:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**ElementRef = Get the element.**",
      "**Renderer2 = Modify the element safely.**"
    ]
  },
  {
    kind: "paragraph",
    text: "That's the mental model used by most Angular developers."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 @HostBinding"
  },
  {
    kind: "paragraph",
    text: "In the previous lesson, we changed styles using **Renderer2**."
  },
  {
    kind: "paragraph",
    text: "This works well."
  },
  {
    kind: "paragraph",
    text: "But Angular provides an even cleaner way."
  },
  {
    kind: "paragraph",
    text: "That is **@HostBinding**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is @HostBinding?"
  },
  {
    kind: "paragraph",
    text: "`@HostBinding` binds a property of the **host element**."
  },
  {
    kind: "paragraph",
    text: "Instead of manually changing styles,"
  },
  {
    kind: "paragraph",
    text: "you bind a variable."
  },
  {
    kind: "paragraph",
    text: "When the variable changes,"
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates the HTML."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of Property Binding"
  },
  {
    kind: "paragraph",
    text: "You've already used"
  },
  {
    kind: "code",
    language: "html",
    code: "<img [src]=\"imageUrl\">"
  },
  {
    kind: "paragraph",
    text: "When `imageUrl` changes,"
  },
  {
    kind: "paragraph",
    text: "Angular updates the image."
  },
  {
    kind: "paragraph",
    text: "`@HostBinding` works exactly the same way,"
  },
  {
    kind: "paragraph",
    text: "except it binds properties of the **host element**."
  },
  {
    kind: "paragraph",
    text: "Suppose this is your HTML."
  },
  {
    kind: "paragraph",
    text: "Instead of using Renderer2,"
  },
  {
    kind: "paragraph",
    text: "write"
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostBinding('style.backgroundColor')\nbackgroundColor = 'white';"
  },
  {
    kind: "paragraph",
    text: "the `<div>` background is automatically white."
  },
  {
    kind: "heading",
    level: 2,
    text: "How does it work?"
  },
  {
    kind: "code",
    language: "text",
    code: "backgroundColor Variable\n\n↓\n\n@HostBinding\n\n↓\n\nstyle.backgroundColor\n\n↓\n\n<div>\n\n↓\n\nUI Updated"
  },
  {
    kind: "paragraph",
    text: "Whenever `backgroundColor` changes,"
  },
  {
    kind: "paragraph",
    text: "Angular updates the style automatically."
  },
  {
    kind: "code",
    language: "ts",
    code: "import {\n  Directive,\n  HostBinding,\n  HostListener\n} from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n  @HostBinding('style.backgroundColor')\n  backgroundColor = 'white';\n\n  @HostListener('mouseenter')\n  onMouseEnter() {\n    this.backgroundColor = 'lightblue';\n  }\n\n  @HostListener('mouseleave')\n  onMouseLeave() {\n    this.backgroundColor = 'white';\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight>\n  John\n</div>\n\n<div appHighlight>\n  Emma\n</div>"
  },
  {
    kind: "code",
    language: "text",
    code: "Mouse Enter\n\n↓\n\nHostListener\n\n↓\n\nbackgroundColor = \"lightblue\"\n\n↓\n\nHostBinding\n\n↓\n\nBackground becomes Light Blue"
  },
  {
    kind: "paragraph",
    text: "Mouse Leave"
  },
  {
    kind: "code",
    language: "text",
    code: "Mouse Leave\n\n↓\n\nHostListener\n\n↓\n\nbackgroundColor = \"white\"\n\n↓\n\nHostBinding\n\n↓\n\nBackground becomes White"
  },
  {
    kind: "heading",
    level: 2,
    text: "Renderer2"
  },
  {
    kind: "paragraph",
    text: "You manually tell Angular to change the style."
  },
  {
    kind: "paragraph",
    text: "Think:"
  },
  {
    kind: "quote",
    text: "\"Change this element's style.\""
  },
  {
    kind: "paragraph",
    text: "You only update a variable."
  },
  {
    kind: "code",
    language: "ts",
    code: "backgroundColor = 'yellow';"
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates the element."
  },
  {
    kind: "quote",
    text: "\"Change the variable. Angular updates the UI.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Which one should I use?"
  },
  {
    kind: "paragraph",
    text: "Use **HostBinding** when you are binding simple properties like:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Style",
      "Class",
      "Disabled",
      "Hidden",
      "Title"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostBinding('class.active')\nisActive = true;"
  },
  {
    kind: "paragraph",
    text: "Angular automatically adds"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"active\">"
  },
  {
    kind: "paragraph",
    text: "Use **Renderer2** when you need to perform DOM operations like:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Create an element",
      "Remove an element",
      "Append a child",
      "Set an attribute",
      "Add or remove styles dynamically"
    ]
  },
  {
    kind: "code",
    language: "ts",
    code: "this.renderer.setAttribute(\n  this.element.nativeElement,\n  'title',\n  'Employee'\n);"
  },
  {
    kind: "paragraph",
    text: "Suppose the selected employee card should have a blue border."
  },
  {
    kind: "code",
    language: "ts",
    code: "renderer.setStyle(...)"
  },
  {
    kind: "paragraph",
    text: "you can write"
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostBinding('style.border')\nborder = '2px solid blue';"
  },
  {
    kind: "paragraph",
    text: "Angular automatically updates the card."
  },
  {
    kind: "paragraph",
    text: "✔ Changing the variable automatically updates the HTML."
  },
  {
    kind: "paragraph",
    text: "✔ It is cleaner than manually calling `Renderer2.setStyle()` for simple property changes."
  },
  {
    kind: "paragraph",
    text: "✔ `@HostBinding` updates the UI."
  },
  {
    kind: "table",
    headers: [
      "Decorator",
      "Purpose"
    ],
    rows: [
      [
        "`@HostListener`",
        "**Listen** to events (click, mouseenter, blur, etc.)"
      ],
      [
        "`@HostBinding`",
        "**Bind** a property (style, class, disabled, title, etc.)"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "Think of them as a pair:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**HostListener → Something happened.**",
      "**HostBinding → Update the element.**"
    ]
  },
  {
    kind: "paragraph",
    text: "We'll now learn **`@Input()` in Directives**, which lets us pass values into a directive."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"lightgreen\">\n  John\n</div>\n\n<div appHighlight=\"lightblue\">\n  Emma\n</div>"
  },
  {
    kind: "paragraph",
    text: "Instead of hardcoding `\"lightblue\"` inside the directive, you'll make it reusable by passing the color from the HTML. This is how most real-world custom directives are built."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Passing Data to a Directive using `@Input()`"
  },
  {
    kind: "paragraph",
    text: "So far, our directive always uses the same color."
  },
  {
    kind: "code",
    language: "ts",
    code: "backgroundColor = 'lightblue';"
  },
  {
    kind: "paragraph",
    text: "Every element becomes **light blue**."
  },
  {
    kind: "paragraph",
    text: "But what if we want different colors?"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"lightgreen\">\n  John\n</div>\n\n<div appHighlight=\"lightblue\">\n  Emma\n</div>\n\n<div appHighlight=\"pink\">\n  David\n</div>"
  },
  {
    kind: "paragraph",
    text: "How does the directive know which color to use?"
  },
  {
    kind: "paragraph",
    text: "Using **`@Input()`**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 What is `@Input()`?"
  },
  {
    kind: "paragraph",
    text: "You've already used `@Input()` in Components."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-employee-card\n  [employee]=\"employee\">\n</app-employee-card>"
  },
  {
    kind: "paragraph",
    text: "The parent passes data to the child."
  },
  {
    kind: "paragraph",
    text: "Exactly the same idea applies to directives."
  },
  {
    kind: "paragraph",
    text: "The HTML passes data to the directive."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without @Input()"
  },
  {
    kind: "paragraph",
    text: "Our directive always does this."
  },
  {
    kind: "paragraph",
    text: "Result"
  },
  {
    kind: "code",
    language: "text",
    code: "John  → Light Blue\n\nEmma  → Light Blue\n\nDavid → Light Blue"
  },
  {
    kind: "paragraph",
    text: "Everyone gets the same color."
  },
  {
    kind: "heading",
    level: 2,
    text: "With @Input()"
  },
  {
    kind: "paragraph",
    text: "The HTML decides the color."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"yellow\">"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"pink\">"
  },
  {
    kind: "paragraph",
    text: "Now every element can have a different color."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1"
  },
  {
    kind: "paragraph",
    text: "Declare an Input."
  },
  {
    kind: "code",
    language: "ts",
    code: "@Input()\nappHighlight = '';"
  },
  {
    kind: "paragraph",
    text: "Notice the variable name."
  },
  {
    kind: "code",
    language: "ts",
    code: "appHighlight"
  },
  {
    kind: "paragraph",
    text: "matches"
  },
  {
    kind: "code",
    language: "html",
    code: "appHighlight=\"yellow\""
  },
  {
    kind: "paragraph",
    text: "Angular automatically connects them."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2"
  },
  {
    kind: "paragraph",
    text: "Use it."
  },
  {
    kind: "code",
    language: "ts",
    code: "@HostListener('mouseenter')\nonMouseEnter() {\n\n  this.backgroundColor = this.appHighlight;\n\n}"
  },
  {
    kind: "paragraph",
    text: "Now the directive uses whatever color is passed."
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n\n  @Input()\n  appHighlight = 'yellow';\n\n  @HostBinding('style.backgroundColor')\n  backgroundColor = '';\n\n  @HostListener('mouseenter')\n  onMouseEnter() {\n\n    this.backgroundColor = this.appHighlight;\n\n  }\n\n  @HostListener('mouseleave')\n  onMouseLeave() {\n\n    this.backgroundColor = '';\n\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"yellow\">\n  John\n</div>\n\n<div appHighlight=\"lightgreen\">\n  Emma\n</div>\n\n<div appHighlight=\"pink\">\n  David\n</div>"
  },
  {
    kind: "paragraph",
    text: "Hover John"
  },
  {
    kind: "paragraph",
    text: "Hover Emma"
  },
  {
    kind: "paragraph",
    text: "Hover David"
  },
  {
    kind: "paragraph",
    text: "Each element behaves differently using the same directive."
  },
  {
    kind: "heading",
    level: 2,
    text: "How does Angular know?"
  },
  {
    kind: "paragraph",
    text: "Suppose Angular reads"
  },
  {
    kind: "paragraph",
    text: "It says"
  },
  {
    kind: "code",
    language: "text",
    code: "Create HighlightDirective\n\n↓\n\nappHighlight = \"pink\""
  },
  {
    kind: "paragraph",
    text: "Now inside the directive"
  },
  {
    kind: "code",
    language: "ts",
    code: "this.appHighlight"
  },
  {
    kind: "paragraph",
    text: "contains"
  },
  {
    kind: "code",
    language: "text",
    code: "pink"
  },
  {
    kind: "paragraph",
    text: "Suppose employee status cards."
  },
  {
    kind: "code",
    language: "html",
    code: "<div appHighlight=\"lightgreen\">\n  Active\n</div>\n\n<div appHighlight=\"orange\">\n  On Leave\n</div>\n\n<div appHighlight=\"lightcoral\">\n  Inactive\n</div>"
  },
  {
    kind: "paragraph",
    text: "One directive."
  },
  {
    kind: "paragraph",
    text: "Different behaviour."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a TV Remote"
  },
  {
    kind: "paragraph",
    text: "Imagine buying three TVs."
  },
  {
    kind: "paragraph",
    text: "Each TV has different settings."
  },
  {
    kind: "paragraph",
    text: "Instead of manufacturing three different TVs,"
  },
  {
    kind: "paragraph",
    text: "you change the settings using the remote."
  },
  {
    kind: "code",
    language: "text",
    code: "TV\n\n↓\n\nRemote Settings\n\n↓\n\nDifferent Behaviour"
  },
  {
    kind: "paragraph",
    text: "`@Input()` works like the remote."
  },
  {
    kind: "paragraph",
    text: "The directive stays the same."
  },
  {
    kind: "paragraph",
    text: "The input changes its behaviour."
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Disable button directive."
  },
  {
    kind: "code",
    language: "html",
    code: "<button appDisable=\"true\">"
  },
  {
    kind: "code",
    language: "html",
    code: "<button appDisable=\"false\">"
  },
  {
    kind: "paragraph",
    text: "The same directive behaves differently based on the input."
  },
  {
    kind: "paragraph",
    text: "✔ `@Input()` lets the HTML pass data to the directive."
  },
  {
    kind: "paragraph",
    text: "✔ One directive can behave differently for different elements."
  },
  {
    kind: "paragraph",
    text: "✔ The input name should usually match the directive selector."
  },
  {
    kind: "paragraph",
    text: "✔ This makes directives flexible and reusable."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary of Everything Learned"
  },
  {
    kind: "table",
    headers: [
      "Concept",
      "Purpose"
    ],
    rows: [
      [
        "`@Directive`",
        "Creates a directive"
      ],
      [
        "`selector`",
        "Where the directive is used"
      ],
      [
        "`ElementRef`",
        "Gets the HTML element"
      ],
      [
        "`Renderer2`",
        "Safely modifies the HTML element"
      ],
      [
        "`@HostListener`",
        "Listens to events"
      ],
      [
        "`@HostBinding`",
        "Updates properties of the host element"
      ],
      [
        "`@Input()`",
        "Receives values from HTML"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next Topic (Real-World Directives)"
  },
  {
    kind: "paragraph",
    text: "Now we'll build **real directives used in Angular projects**, including:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "✅ **Auto Focus Directive**",
      "✅ **Permission Directive** (`appHasPermission`)",
      "✅ **Tooltip Directive**",
      "✅ **Uppercase Directive**",
      "✅ **Click Outside Directive**"
    ]
  },
  {
    kind: "paragraph",
    text: "These are practical examples you'll actually encounter in enterprise Angular applications like HRMS, banking, and ERP systems."
  },
  {
    kind: "heading",
    level: 2,
    text: "Problem"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Login page."
  },
  {
    kind: "code",
    language: "text",
    code: "Username\n\nPassword\n\n[ Login ]"
  },
  {
    kind: "paragraph",
    text: "When the page opens,"
  },
  {
    kind: "paragraph",
    text: "the cursor should automatically appear in the **Username** field."
  },
  {
    kind: "paragraph",
    text: "every component needs this code."
  },
  {
    kind: "code",
    language: "ts",
    code: "ngAfterViewInit() {\n  this.input.nativeElement.focus();\n}"
  },
  {
    kind: "paragraph",
    text: "This gets repeated everywhere."
  },
  {
    kind: "heading",
    level: 2,
    text: "Solution"
  },
  {
    kind: "paragraph",
    text: "Create an **AutoFocusDirective**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Directive"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Directive({\n  selector: '[appAutoFocus]'\n})\nexport class AutoFocusDirective {\n\n  constructor(private element: ElementRef) {}\n\n  ngOnInit() {\n    this.element.nativeElement.focus();\n  }\n\n}"
  },
  {
    kind: "code",
    language: "html",
    code: "<input appAutoFocus>"
  },
  {
    kind: "paragraph",
    text: "That's it."
  },
  {
    kind: "paragraph",
    text: "Whenever Angular creates the input,"
  },
  {
    kind: "paragraph",
    text: "it automatically receives focus."
  },
  {
    kind: "code",
    language: "html",
    code: "<input\nformControlName=\"employeeName\"\nappAutoFocus>"
  },
  {
    kind: "paragraph",
    text: "The employee name field is focused automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Real-world Directive 2 — Permission Directive"
  },
  {
    kind: "paragraph",
    text: "This is one of the most useful directives in enterprise applications."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS."
  },
  {
    kind: "paragraph",
    text: "Only Admin users can see"
  },
  {
    kind: "code",
    language: "text",
    code: "Delete Employee"
  },
  {
    kind: "paragraph",
    text: "Managers should not see it."
  },
  {
    kind: "paragraph",
    text: "Employees should not see it."
  },
  {
    kind: "paragraph",
    text: "every component writes"
  },
  {
    kind: "code",
    language: "html",
    code: "@if(authService.isAdmin()){\n\n<button>Delete</button>\n\n}"
  },
  {
    kind: "paragraph",
    text: "Repeated hundreds of times."
  },
  {
    kind: "code",
    language: "html",
    code: "<button appHasPermission=\"Admin\">\n\nDelete\n\n</button>"
  },
  {
    kind: "paragraph",
    text: "The directive decides whether to show it."
  },
  {
    kind: "heading",
    level: 3,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Button\n\n↓\n\nHasPermissionDirective\n\n↓\n\nCheck User Role\n\n↓\n\nAdmin?\n\n↓\n\nYes → Show\n\nNo → Hide"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Real-world Directive 3 — Uppercase Directive"
  },
  {
    kind: "paragraph",
    text: "Suppose Employee IDs must always be uppercase."
  },
  {
    kind: "paragraph",
    text: "Users type"
  },
  {
    kind: "code",
    language: "text",
    code: "emp001"
  },
  {
    kind: "paragraph",
    text: "The application should automatically convert it."
  },
  {
    kind: "code",
    language: "html",
    code: "<input appUppercase>"
  },
  {
    kind: "paragraph",
    text: "User types"
  },
  {
    kind: "paragraph",
    text: "Automatically becomes"
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Real-world Directive 4 — Tooltip Directive"
  },
  {
    kind: "paragraph",
    text: "Imagine this button."
  },
  {
    kind: "code",
    language: "html",
    code: "<button appTooltip=\"Delete Employee\">\n\n🗑\n\n</button>"
  },
  {
    kind: "paragraph",
    text: "When the mouse hovers,"
  },
  {
    kind: "paragraph",
    text: "Angular shows"
  },
  {
    kind: "paragraph",
    text: "without writing tooltip code everywhere."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Real-world Directive 5 — Click Outside Directive"
  },
  {
    kind: "paragraph",
    text: "This is extremely common."
  },
  {
    kind: "paragraph",
    text: "Imagine a profile menu."
  },
  {
    kind: "code",
    language: "text",
    code: "Profile\n\n↓\n\nMenu Opens"
  },
  {
    kind: "paragraph",
    text: "Click outside."
  },
  {
    kind: "code",
    language: "text",
    code: "Menu Closes"
  },
  {
    kind: "paragraph",
    text: "Instead of writing click detection in every component,"
  },
  {
    kind: "paragraph",
    text: "create"
  },
  {
    kind: "code",
    language: "html",
    code: "<div appClickOutside>"
  },
  {
    kind: "paragraph",
    text: "The directive listens for outside clicks."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Examples"
  },
  {
    kind: "table",
    headers: [
      "Directive",
      "Purpose"
    ],
    rows: [
      [
        "appAutoFocus",
        "Focus first input"
      ],
      [
        "appHasPermission",
        "Show UI based on permissions"
      ],
      [
        "appUppercase",
        "Convert input to uppercase"
      ],
      [
        "appTooltip",
        "Show tooltips"
      ],
      [
        "appClickOutside",
        "Close dropdowns and popups"
      ],
      [
        "appHighlight",
        "Highlight cards"
      ],
      [
        "appDisable",
        "Disable controls dynamically"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Which Directives Do Companies Use Most?"
  },
  {
    kind: "paragraph",
    text: "If you join an Angular company,"
  },
  {
    kind: "paragraph",
    text: "these are the most common."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Permission Directive",
      "Click Outside Directive",
      "Auto Focus Directive"
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Tooltip Directive",
      "Highlight Directive"
    ]
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Uppercase Directive"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "paragraph",
    text: "✅ Keep one responsibility per directive."
  },
  {
    kind: "paragraph",
    text: "Good"
  },
  {
    kind: "code",
    language: "text",
    code: "HighlightDirective\n\n↓\n\nOnly Highlights"
  },
  {
    kind: "paragraph",
    text: "Bad"
  },
  {
    kind: "code",
    language: "text",
    code: "HighlightDirective\n\n↓\n\nHighlight\n\nTooltip\n\nPermission\n\nAuto Focus\n\nEverything"
  },
  {
    kind: "heading",
    level: 2,
    text: "Common Mistakes"
  },
  {
    kind: "paragraph",
    text: "❌ Accessing `nativeElement` everywhere instead of using `Renderer2` when modifying the DOM."
  },
  {
    kind: "paragraph",
    text: "❌ Writing business logic inside directives."
  },
  {
    kind: "paragraph",
    text: "❌ Creating a directive when a simple CSS class is enough."
  },
  {
    kind: "paragraph",
    text: "❌ Making one directive responsible for multiple unrelated behaviors."
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Create these directives:"
  },
  {
    kind: "heading",
    level: 3,
    text: "1. Highlight Directive"
  },
  {
    kind: "paragraph",
    text: "Changes the background color on hover."
  },
  {
    kind: "heading",
    level: 3,
    text: "2. Auto Focus Directive"
  },
  {
    kind: "paragraph",
    text: "Focuses the input automatically."
  },
  {
    kind: "heading",
    level: 3,
    text: "3. Uppercase Directive"
  },
  {
    kind: "paragraph",
    text: "Converts text to uppercase while typing."
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Lesson Summary"
  },
  {
    kind: "paragraph",
    text: "By completing this lesson, you've learned:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "✔ What a Custom Directive is",
      "✔ `@Directive`",
      "✔ `selector`",
      "✔ `ElementRef`",
      "✔ `Renderer2`",
      "✔ `@HostListener`",
      "✔ `@HostBinding`",
      "✔ `@Input()`",
      "✔ Creating reusable attribute directives",
      "✔ Real-world directive examples",
      "✔ Best practices and common mistakes"
    ]
  }
];
