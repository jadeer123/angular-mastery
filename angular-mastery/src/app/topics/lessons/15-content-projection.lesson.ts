import { LessonBlock } from '../topic.model';

export const lesson15ContentProjection: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "📖 Part 1 — What is Content Projection?"
  },
  {
    kind: "paragraph",
    text: "Suppose you're building an HRMS application."
  },
  {
    kind: "paragraph",
    text: "You create this card."
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n| Employee Details           |\n|                            |\n| Name : John                |\n| Department : HR            |\n+----------------------------+"
  },
  {
    kind: "paragraph",
    text: "Later,"
  },
  {
    kind: "paragraph",
    text: "you need another card."
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n| Leave Details              |\n|                            |\n| Leave : Annual             |\n| Days : 10                  |\n+----------------------------+"
  },
  {
    kind: "paragraph",
    text: "another card."
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n| Salary Details             |\n|                            |\n| Salary : ₹50,000           |\n+----------------------------+"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "Only the **content** changes."
  },
  {
    kind: "paragraph",
    text: "The card design stays exactly the same."
  },
  {
    kind: "heading",
    level: 2,
    text: "Without Content Projection"
  },
  {
    kind: "paragraph",
    text: "You may create"
  },
  {
    kind: "code",
    language: "text",
    code: "EmployeeCardComponent\n\nLeaveCardComponent\n\nSalaryCardComponent"
  },
  {
    kind: "paragraph",
    text: "Three components."
  },
  {
    kind: "paragraph",
    text: "Three HTML files."
  },
  {
    kind: "paragraph",
    text: "Lots of duplicate code."
  },
  {
    kind: "heading",
    level: 2,
    text: "Better Solution"
  },
  {
    kind: "paragraph",
    text: "Create one"
  },
  {
    kind: "code",
    language: "text",
    code: "CardComponent"
  },
  {
    kind: "paragraph",
    text: "and allow other components to insert any content inside it."
  },
  {
    kind: "paragraph",
    text: "That's exactly what **Content Projection** does."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a Gift Box 🎁"
  },
  {
    kind: "paragraph",
    text: "Imagine buying a gift box."
  },
  {
    kind: "paragraph",
    text: "The box design is fixed."
  },
  {
    kind: "code",
    language: "text",
    code: "┌──────────────┐\n│              │\n│   Gift Box   │\n│              │\n└──────────────┘"
  },
  {
    kind: "paragraph",
    text: "But inside,"
  },
  {
    kind: "paragraph",
    text: "you can place"
  },
  {
    kind: "code",
    language: "text",
    code: "Toy\n\nor\n\nChocolate\n\nor\n\nLaptop"
  },
  {
    kind: "paragraph",
    text: "The box never changes."
  },
  {
    kind: "paragraph",
    text: "Only its contents change."
  },
  {
    kind: "paragraph",
    text: "Angular's `<ng-content>` works exactly like the gift box."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Suppose we build"
  },
  {
    kind: "code",
    language: "text",
    code: "<app-card>"
  },
  {
    kind: "paragraph",
    text: "Employee Page"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n  Employee Details\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Leave Page"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n  Leave Details\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Salary Page"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n  Salary Details\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Same component."
  },
  {
    kind: "paragraph",
    text: "Different content."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why not use @Input()?"
  },
  {
    kind: "paragraph",
    text: "Excellent question."
  },
  {
    kind: "paragraph",
    text: "Suppose we use"
  },
  {
    kind: "code",
    language: "ts",
    code: "@Input()\ntitle = '';"
  },
  {
    kind: "paragraph",
    text: "That works for"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Details"
  },
  {
    kind: "paragraph",
    text: "But what if we want this?"
  },
  {
    kind: "code",
    language: "html",
    code: "<h2>Employee Details</h2>\n\n<table>\n\n...\n\n</table>\n\n<button>Edit</button>"
  },
  {
    kind: "paragraph",
    text: "Can one string input hold all that?"
  },
  {
    kind: "paragraph",
    text: "❌ No."
  },
  {
    kind: "paragraph",
    text: "We need to pass **entire HTML**."
  },
  {
    kind: "paragraph",
    text: "That's what Content Projection is for."
  },
  {
    kind: "heading",
    level: 2,
    text: "@Input()"
  },
  {
    kind: "paragraph",
    text: "Passes **data**."
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card\n    title=\"Employee Details\">\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Only one string."
  },
  {
    kind: "heading",
    level: 2,
    text: "Content Projection"
  },
  {
    kind: "paragraph",
    text: "Passes **HTML**."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-card>\n\n<h2>Employee Details</h2>\n\n<table>\n\n...\n\n</table>\n\n<button>Edit</button>\n\n</app-card>"
  },
  {
    kind: "paragraph",
    text: "Entire HTML."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of a House"
  },
  {
    kind: "paragraph",
    text: "Imagine building a house."
  },
  {
    kind: "paragraph",
    text: "The walls,"
  },
  {
    kind: "paragraph",
    text: "roof,"
  },
  {
    kind: "paragraph",
    text: "doors,"
  },
  {
    kind: "paragraph",
    text: "windows"
  },
  {
    kind: "paragraph",
    text: "are already built."
  },
  {
    kind: "paragraph",
    text: "Now you place"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Sofa",
      "TV",
      "Dining Table",
      "Bed"
    ]
  },
  {
    kind: "paragraph",
    text: "inside."
  },
  {
    kind: "paragraph",
    text: "The house doesn't know what furniture you'll bring."
  },
  {
    kind: "paragraph",
    text: "It simply provides the space."
  },
  {
    kind: "paragraph",
    text: "`<ng-content>` is that empty space."
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Parent Component\n\n↓\n\nWrites HTML\n\n↓\n\n<app-card>\n\n↓\n\nAngular\n\n↓\n\n<ng-content>\n\n↓\n\nShows Parent HTML"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real Angular Components Using Content Projection"
  },
  {
    kind: "paragraph",
    text: "Many Angular libraries use it."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Angular Material Card",
      "Angular Material Dialog",
      "Bootstrap Cards",
      "Expansion Panels",
      "Tabs",
      "Accordions"
    ]
  },
  {
    kind: "paragraph",
    text: "Whenever you write HTML inside a component,"
  },
  {
    kind: "paragraph",
    text: "there's a good chance it's using **Content Projection** internally."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Content Projection allows a parent component to pass **HTML**, not just data."
  },
  {
    kind: "paragraph",
    text: "✔ It helps create highly reusable components."
  },
  {
    kind: "paragraph",
    text: "✔ It avoids duplicate HTML across the application."
  },
  {
    kind: "paragraph",
    text: "✔ It is implemented using the `<ng-content>` element."
  },
  {
    kind: "heading",
    level: 2,
    text: "➡️ Next"
  },
  {
    kind: "paragraph",
    text: "We'll build our first **Card Component** using `<ng-content>`."
  },
  {
    kind: "paragraph",
    text: "You'll clearly see how Angular takes the HTML written by the parent component and inserts it into the child component. This is where Content Projection usually \"clicks\" for most developers."
  },
  {
    kind: "heading",
    level: 2,
    text: "Goal"
  },
  {
    kind: "paragraph",
    text: "We want to create a reusable **Box Component**."
  },
  {
    kind: "paragraph",
    text: "Instead of hardcoding what's inside the box, we'll let the parent decide."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1: Create a component"
  },
  {
    kind: "code",
    language: "bash",
    code: "ng g c box"
  },
  {
    kind: "paragraph",
    text: "Angular creates:"
  },
  {
    kind: "code",
    language: "text",
    code: "box.component.ts\nbox.component.html"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2: Design the Box"
  },
  {
    kind: "paragraph",
    text: "**box.component.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n  <ng-content></ng-content>\n</div>"
  },
  {
    kind: "paragraph",
    text: "That's it! Only one new thing:"
  },
  {
    kind: "code",
    language: "html",
    code: "<ng-content></ng-content>"
  },
  {
    kind: "paragraph",
    text: "Think of it as:"
  },
  {
    kind: "quote",
    text: "**\"Whatever the parent gives me, put it here.\"**"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3: Use the Box"
  },
  {
    kind: "paragraph",
    text: "In **app.component.html**"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  Hello Angular!\n\n</app-box>"
  },
  {
    kind: "heading",
    level: 2,
    text: "What Angular sees"
  },
  {
    kind: "heading",
    level: 3,
    text: "Parent writes"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Angular opens **BoxComponent**"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <ng-content></ng-content>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "It replaces `<ng-content>` with the content inside `<app-box>`."
  },
  {
    kind: "paragraph",
    text: "Result:"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  Hello Angular!\n\n</div>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Browser shows"
  },
  {
    kind: "code",
    language: "text",
    code: "+------------------------+\n|                        |\n|   Hello Angular!       |\n|                        |\n+------------------------+"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Without changing `BoxComponent`, write:"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  Welcome to Angular\n\n</app-box>"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n|                            |\n| Welcome to Angular         |\n|                            |\n+----------------------------+"
  },
  {
    kind: "paragraph",
    text: "Notice:"
  },
  {
    kind: "paragraph",
    text: "We never changed `box.component.html`."
  },
  {
    kind: "paragraph",
    text: "Only the parent changed."
  },
  {
    kind: "paragraph",
    text: "Can we put HTML inside?"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <h2>Employee Details</h2>\n\n</app-box>"
  },
  {
    kind: "paragraph",
    text: "Angular becomes"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <h2>Employee Details</h2>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Output"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n| Employee Details           |\n+----------------------------+"
  },
  {
    kind: "paragraph",
    text: "Can we put multiple elements?"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <h2>Employee Details</h2>\n\n  <p>Name : John</p>\n\n  <button>Edit</button>\n\n</app-box>"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <h2>Employee Details</h2>\n\n  <p>Name : John</p>\n\n  <button>Edit</button>\n\n</div>"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------------+\n| Employee Details                 |\n| Name : John                      |\n|                                  |\n| [ Edit ]                         |\n+----------------------------------+"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of `<ng-content>` as a Placeholder"
  },
  {
    kind: "paragraph",
    text: "Imagine `box.component.html` is:"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  HERE\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "The word **HERE** means:"
  },
  {
    kind: "quote",
    text: "\"Insert whatever the parent gives me.\""
  },
  {
    kind: "paragraph",
    text: "Angular's real placeholder is"
  },
  {
    kind: "heading",
    level: 2,
    text: "Visual Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Parent Component\n\n<app-box>\n\n  Hello Angular!\n\n</app-box>\n\n          │\n          ▼\n\nBox Component\n\n<div class=\"box\">\n\n   <ng-content>\n\n</div>\n\n          │\n          ▼\n\nAngular replaces\n\n<ng-content>\n\nwith\n\nHello Angular!\n\n          │\n          ▼\n\nFinal HTML\n\n<div class=\"box\">\n\n   Hello Angular!\n\n</div>"
  },
  {
    kind: "heading",
    level: 2,
    text: "💡 Question for you"
  },
  {
    kind: "paragraph",
    text: "If the parent writes this:"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <button>Save</button>\n\n</app-box>"
  },
  {
    kind: "paragraph",
    text: "What do you think the final HTML inside `box.component.html` will be?"
  },
  {
    kind: "paragraph",
    text: "Try to answer before we move on to **multiple content projection** (`header`, `body`, and `footer`)."
  },
  {
    kind: "paragraph",
    text: "If the parent writes:"
  },
  {
    kind: "paragraph",
    text: "Angular replaces `<ng-content>` with that button."
  },
  {
    kind: "paragraph",
    text: "So the final HTML becomes"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <button>Save</button>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "The browser shows"
  },
  {
    kind: "code",
    language: "text",
    code: "+-------------------------+\n|                         |\n|      [ Save ]           |\n|                         |\n+-------------------------+"
  },
  {
    kind: "paragraph",
    text: "Notice something important:"
  },
  {
    kind: "quote",
    text: "**`<ng-content>` never appears in the browser.** It is just a **placeholder** that Angular replaces while rendering the page."
  },
  {
    kind: "heading",
    level: 2,
    text: "Now let's make it a little more interesting"
  },
  {
    kind: "paragraph",
    text: "Suppose we want our box to always have a title."
  },
  {
    kind: "heading",
    level: 2,
    text: "box.component.html"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <h2>My Box</h2>\n\n  <hr>\n\n  <ng-content></ng-content>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Now use it."
  },
  {
    kind: "paragraph",
    text: "Angular internally creates"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <h2>My Box</h2>\n\n  <hr>\n\n  <button>Save</button>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Browser"
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------------+\n| My Box                     |\n| -------------------------  |\n|                            |\n|      [ Save ]              |\n|                            |\n+----------------------------+"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "The title came from **BoxComponent**.",
      "The button came from the **parent component**."
    ]
  },
  {
    kind: "paragraph",
    text: "Both are combined into one UI."
  },
  {
    kind: "paragraph",
    text: "Parent"
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <h3>Employee Details</h3>\n\n  <p>Name : John</p>\n\n  <button>Edit</button>\n\n</app-box>"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <h2>My Box</h2>\n\n  <hr>\n\n  <h3>Employee Details</h3>\n\n  <p>Name : John</p>\n\n  <button>Edit</button>\n\n</div>"
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------------+\n| My Box                         |\n|------------------------------- |\n| Employee Details               |\n| Name : John                    |\n|                                |\n| [ Edit ]                       |\n+--------------------------------+"
  },
  {
    kind: "heading",
    level: 2,
    text: "But now we have a problem 🤔"
  },
  {
    kind: "paragraph",
    text: "Suppose we don't want the title to always be **\"My Box\"**."
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
    code: "Leave Details"
  },
  {
    kind: "code",
    language: "text",
    code: "Salary Details"
  },
  {
    kind: "paragraph",
    text: "Where should Angular put the **title** and where should it put the **body**?"
  },
  {
    kind: "paragraph",
    text: "With only one `<ng-content>`, Angular doesn't know the difference."
  },
  {
    kind: "paragraph",
    text: "That's why Angular supports **multiple content projection**."
  },
  {
    kind: "paragraph",
    text: "Instead of one placeholder,"
  },
  {
    kind: "paragraph",
    text: "we can have multiple placeholders like:"
  },
  {
    kind: "code",
    language: "html",
    code: "<header>\n  <ng-content select=\"[header]\"></ng-content>\n</header>\n\n<div>\n  <ng-content></ng-content>\n</div>\n\n<footer>\n  <ng-content select=\"[footer]\"></ng-content>\n</footer>"
  },
  {
    kind: "paragraph",
    text: "This lets us tell Angular:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Put the **header** here.",
      "Put the **main content** here.",
      "Put the **footer** here."
    ]
  },
  {
    kind: "paragraph",
    text: "This is the next concept, and once you understand it, you'll see how components like Angular Material cards, dialogs, and custom layouts are built."
  },
  {
    kind: "heading",
    level: 2,
    text: "Multiple Content Projection"
  },
  {
    kind: "paragraph",
    text: "Suppose we want a reusable card like this."
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------------+\n| Employee Details               |  ← Header\n|--------------------------------|\n| Name : John                    |  ← Body\n| Department : HR                |\n|                                |\n| [ Edit ]                       |  ← Footer\n+--------------------------------+"
  },
  {
    kind: "paragraph",
    text: "With a single `<ng-content>`, Angular doesn't know what is a header or footer."
  },
  {
    kind: "paragraph",
    text: "So we create **three placeholders**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1: Box Component"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <div class=\"header\">\n    <ng-content select=\"[header]\"></ng-content>\n  </div>\n\n  <div class=\"body\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"footer\">\n    <ng-content select=\"[footer]\"></ng-content>\n  </div>\n\n</div>"
  },
  {
    kind: "paragraph",
    text: "Notice we now have **three** `<ng-content>` tags."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "One for the header",
      "One for the body",
      "One for the footer"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2: Parent Component"
  },
  {
    kind: "paragraph",
    text: "Now use the component."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <h2 header>Employee Details</h2>\n\n  <p>Name : John</p>\n\n  <p>Department : HR</p>\n\n  <button footer>Edit</button>\n\n</app-box>"
  },
  {
    kind: "paragraph",
    text: "Notice these attributes:"
  },
  {
    kind: "code",
    language: "html",
    code: "header"
  },
  {
    kind: "paragraph",
    text: "and"
  },
  {
    kind: "code",
    language: "html",
    code: "footer"
  },
  {
    kind: "paragraph",
    text: "These are just **markers** for Angular."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3: What Angular Does"
  },
  {
    kind: "paragraph",
    text: "Angular reads"
  },
  {
    kind: "code",
    language: "html",
    code: "<h2 header>Employee Details</h2>"
  },
  {
    kind: "paragraph",
    text: "It sees the `header` attribute."
  },
  {
    kind: "paragraph",
    text: "So it places it here."
  },
  {
    kind: "code",
    language: "html",
    code: "<ng-content select=\"[header]\"></ng-content>"
  },
  {
    kind: "paragraph",
    text: "Angular then sees"
  },
  {
    kind: "code",
    language: "html",
    code: "<button footer>Edit</button>"
  },
  {
    kind: "paragraph",
    text: "It places it here."
  },
  {
    kind: "code",
    language: "html",
    code: "<ng-content select=\"[footer]\"></ng-content>"
  },
  {
    kind: "paragraph",
    text: "Everything that has **no marker** goes into the default `<ng-content>`."
  },
  {
    kind: "paragraph",
    text: "So"
  },
  {
    kind: "code",
    language: "html",
    code: "<p>Name : John</p>\n\n<p>Department : HR</p>"
  },
  {
    kind: "paragraph",
    text: "goes into"
  },
  {
    kind: "heading",
    level: 2,
    text: "Final HTML"
  },
  {
    kind: "paragraph",
    text: "Angular internally creates something like"
  },
  {
    kind: "code",
    language: "html",
    code: "<div class=\"box\">\n\n  <div class=\"header\">\n      <h2>Employee Details</h2>\n  </div>\n\n  <div class=\"body\">\n      <p>Name : John</p>\n      <p>Department : HR</p>\n  </div>\n\n  <div class=\"footer\">\n      <button>Edit</button>\n  </div>\n\n</div>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Browser Output"
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------------+\n| Employee Details               |\n|--------------------------------|\n| Name : John                    |\n| Department : HR                |\n|                                |\n|          [ Edit ]              |\n+--------------------------------+"
  },
  {
    kind: "paragraph",
    text: "Suppose we change only the parent."
  },
  {
    kind: "code",
    language: "html",
    code: "<app-box>\n\n  <h2 header>Leave Details</h2>\n\n  <p>Annual Leave</p>\n\n  <p>Remaining : 12 Days</p>\n\n  <button footer>Apply</button>\n\n</app-box>"
  },
  {
    kind: "paragraph",
    text: "Did we change **BoxComponent**?"
  },
  {
    kind: "paragraph",
    text: "Angular simply fills the placeholders."
  },
  {
    kind: "code",
    language: "text",
    code: "+--------------------------------+\n| Leave Details                  |\n|--------------------------------|\n| Annual Leave                   |\n| Remaining : 12 Days            |\n|                                |\n|        [ Apply ]               |\n+--------------------------------+"
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like a Parcel 📦"
  },
  {
    kind: "paragraph",
    text: "Imagine a parcel with three labeled compartments."
  },
  {
    kind: "code",
    language: "text",
    code: "+----------------------+\n| Header               |\n+----------------------+\n| Body                 |\n+----------------------+\n| Footer               |\n+----------------------+"
  },
  {
    kind: "paragraph",
    text: "You receive three items:"
  },
  {
    kind: "code",
    language: "text",
    code: "Title\n\nDescription\n\nButton"
  },
  {
    kind: "paragraph",
    text: "You don't put them randomly."
  },
  {
    kind: "paragraph",
    text: "You put:"
  },
  {
    kind: "code",
    language: "text",
    code: "Title        → Header\n\nDescription  → Body\n\nButton       → Footer"
  },
  {
    kind: "paragraph",
    text: "Angular does the same thing using the `select` attribute."
  },
  {
    kind: "heading",
    level: 2,
    text: "Interview Question"
  },
  {
    kind: "heading",
    level: 3,
    text: "Why do we use `select=\"[header]\"`?"
  },
  {
    kind: "paragraph",
    text: "Because Angular needs to know **where each projected element should go**."
  },
  {
    kind: "paragraph",
    text: "Without `select`, everything would be projected into the first/default `<ng-content>`."
  },
  {
    kind: "heading",
    level: 2,
    text: "Summary"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "`<ng-content>` → One placeholder for all projected content.",
      "`<ng-content select=\"[header]\">` → Only elements with the `header` attribute.",
      "`<ng-content select=\"[footer]\">` → Only elements with the `footer` attribute.",
      "Elements without any matching marker go into the default `<ng-content>`."
    ]
  }
];
