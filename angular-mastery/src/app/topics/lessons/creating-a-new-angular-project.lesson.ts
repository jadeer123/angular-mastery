import { LessonBlock } from '../topic.model';

export const lessonCreatingANewAngularProject: LessonBlock[] = [
  {
    kind: "paragraph",
    text: "The trick is to make the project **grow**. Every time you learn a new Angular concept, you add one feature to the same application. By the end, you'll have learned almost all of Angular without feeling like you're building a huge enterprise app."
  },
  {
    kind: "heading",
    level: 2,
    text: "Project: Student Task Manager"
  },
  {
    kind: "paragraph",
    text: "This is intentionally simple."
  },
  {
    kind: "paragraph",
    text: "Imagine you're building an app for a student to manage:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Tasks",
      "Notes",
      "Subjects",
      "Profile"
    ]
  },
  {
    kind: "paragraph",
    text: "That's it."
  },
  {
    kind: "paragraph",
    text: "No payroll. No HRMS. No complex business logic."
  },
  {
    kind: "heading",
    level: 2,
    text: "Final UI"
  },
  {
    kind: "code",
    language: "text",
    code: "-----------------------------------------\n Student Task Manager\n\n Dashboard\n\n Tasks\n Notes\n Subjects\n Profile\n Settings\n\n-----------------------------------------\n\nToday's Tasks\n\n✔ Learn Angular Components\n\n✔ Learn Signals\n\n✖ Complete RxJS\n\nAdd Task"
  },
  {
    kind: "paragraph",
    text: "Looks simple."
  },
  {
    kind: "paragraph",
    text: "But behind the scenes, every Angular concept gets implemented."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 1 — Components"
  },
  {
    kind: "paragraph",
    text: "You'll create"
  },
  {
    kind: "code",
    language: "text",
    code: "App\n\nNavbar\n\nSidebar\n\nDashboard\n\nTask Card\n\nTask List\n\nButton\n\nModal\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "Concepts learned"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Standalone Components",
      "Component hierarchy",
      "Reusable UI"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 2 — Data Binding"
  },
  {
    kind: "paragraph",
    text: "Task"
  },
  {
    kind: "code",
    language: "text",
    code: "Enter Task\n\n[____________]\n\n(Add)"
  },
  {
    kind: "paragraph",
    text: "Learn"
  },
  {
    kind: "code",
    language: "text",
    code: "Interpolation\n\nProperty Binding\n\nEvent Binding\n\nTwo-way Binding"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 3 — Directives"
  },
  {
    kind: "paragraph",
    text: "Display tasks"
  },
  {
    kind: "code",
    language: "text",
    code: "@if(tasks.length)\n\nShow list\n\n@else\n\n\"No tasks\""
  },
  {
    kind: "paragraph",
    text: "Loop"
  },
  {
    kind: "code",
    language: "text",
    code: "@for(task of tasks)"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "@if",
      "@for",
      "ngClass",
      "ngStyle"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 4 — Control Flow"
  },
  {
    kind: "paragraph",
    text: "Filter"
  },
  {
    kind: "code",
    language: "text",
    code: "All\n\nCompleted\n\nPending"
  },
  {
    kind: "paragraph",
    text: "Use"
  },
  {
    kind: "code",
    language: "text",
    code: "@switch"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 5 — Signals"
  },
  {
    kind: "paragraph",
    text: "Store tasks inside"
  },
  {
    kind: "code",
    language: "text",
    code: "signal<Task[]>([])"
  },
  {
    kind: "paragraph",
    text: "Then"
  },
  {
    kind: "code",
    language: "text",
    code: "completedCount\n\n↓\n\ncomputed()"
  },
  {
    kind: "paragraph",
    text: "Whenever tasks change"
  },
  {
    kind: "code",
    language: "text",
    code: "effect()"
  },
  {
    kind: "paragraph",
    text: "Automatically save to localStorage."
  },
  {
    kind: "paragraph",
    text: "You'll finally understand why Signals are useful."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 6 — Routing"
  },
  {
    kind: "paragraph",
    text: "Pages"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nTasks\n\nSubjects\n\nNotes\n\nProfile"
  },
  {
    kind: "code",
    language: "text",
    code: "Router\n\nRouterOutlet\n\nRouterLink\n\nParameters\n\nChild Routes"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 7 — Services"
  },
  {
    kind: "paragraph",
    text: "Create"
  },
  {
    kind: "code",
    language: "text",
    code: "TaskService\n\nSubjectService\n\nNoteService"
  },
  {
    kind: "paragraph",
    text: "All components use them."
  },
  {
    kind: "paragraph",
    text: "You'll understand Dependency Injection naturally."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 8 — Dependency Injection"
  },
  {
    kind: "paragraph",
    text: "Inject"
  },
  {
    kind: "code",
    language: "text",
    code: "TaskService"
  },
  {
    kind: "paragraph",
    text: "into"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nTask List\n\nProfile"
  },
  {
    kind: "paragraph",
    text: "You'll see why Angular creates only one instance by default."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 9 — HTTP"
  },
  {
    kind: "paragraph",
    text: "Instead of a backend,"
  },
  {
    kind: "paragraph",
    text: "JSONPlaceholder"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "paragraph",
    text: "FakeStore API."
  },
  {
    kind: "paragraph",
    text: "Fetch"
  },
  {
    kind: "code",
    language: "text",
    code: "Todos\n\nUsers\n\nPosts"
  },
  {
    kind: "code",
    language: "text",
    code: "HttpClient\n\nObservable\n\nsubscribe()\n\nError Handling"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 10 — RxJS"
  },
  {
    kind: "paragraph",
    text: "Search Tasks"
  },
  {
    kind: "code",
    language: "text",
    code: "Search\n\nTyping...\n\n↓\n\ndebounceTime()\n\n↓\n\nswitchMap()\n\n↓\n\nResults"
  },
  {
    kind: "paragraph",
    text: "You'll understand why RxJS exists."
  },
  {
    kind: "code",
    language: "text",
    code: "combineLatest()\n\nforkJoin()\n\nBehaviorSubject()"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 11 — Forms"
  },
  {
    kind: "paragraph",
    text: "Profile Page"
  },
  {
    kind: "code",
    language: "text",
    code: "Name\n\nEmail\n\nPhone\n\nPassword"
  },
  {
    kind: "paragraph",
    text: "Reactive Forms"
  },
  {
    kind: "code",
    language: "text",
    code: "FormGroup\n\nFormControl\n\nValidators\n\nCustom Validators\n\nFormArray"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 12 — Custom Directives"
  },
  {
    kind: "code",
    language: "text",
    code: "appHighlight\n\nHover\n\n↓\n\nHighlight Card"
  },
  {
    kind: "paragraph",
    text: "Another"
  },
  {
    kind: "code",
    language: "text",
    code: "appPermission\n\nHide button"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 13 — Pipes"
  },
  {
    kind: "code",
    language: "text",
    code: "Priority Pipe\n\nHigh\n\n↓\n\n🔴 High"
  },
  {
    kind: "code",
    language: "text",
    code: "Time Ago Pipe\n\n5 minutes ago"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 14 — Lifecycle"
  },
  {
    kind: "paragraph",
    text: "Open Console"
  },
  {
    kind: "code",
    language: "text",
    code: "Constructor\n\nngOnInit\n\nngAfterViewInit\n\nngOnDestroy"
  },
  {
    kind: "paragraph",
    text: "You'll understand execution order."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 15 — ViewChild"
  },
  {
    kind: "paragraph",
    text: "Parent"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Open Child Modal"
  },
  {
    kind: "code",
    language: "text",
    code: "this.modal.open();"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 16 — Content Projection"
  },
  {
    kind: "paragraph",
    text: "Create your own Card"
  },
  {
    kind: "code",
    language: "text",
    code: "<app-card>\n\nTitle\n\nBody\n\nButtons\n\n</app-card>"
  },
  {
    kind: "code",
    language: "text",
    code: "<ng-content>"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 17 — Dynamic Components"
  },
  {
    kind: "paragraph",
    text: "Popup"
  },
  {
    kind: "code",
    language: "text",
    code: "Delete?\n\nYes\n\nNo"
  },
  {
    kind: "paragraph",
    text: "Create dynamically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 18 — Interceptors"
  },
  {
    kind: "paragraph",
    text: "Every request"
  },
  {
    kind: "paragraph",
    text: "Add Token"
  },
  {
    kind: "paragraph",
    text: "Show Loader"
  },
  {
    kind: "paragraph",
    text: "Handle Errors"
  },
  {
    kind: "paragraph",
    text: "Automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 19 — Guards"
  },
  {
    kind: "paragraph",
    text: "Protect"
  },
  {
    kind: "code",
    language: "text",
    code: "Profile"
  },
  {
    kind: "paragraph",
    text: "If not logged in"
  },
  {
    kind: "paragraph",
    text: "Redirect Login"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 20 — Lazy Loading"
  },
  {
    kind: "paragraph",
    text: "Load"
  },
  {
    kind: "code",
    language: "text",
    code: "Tasks\n\nonly\n\nwhen clicked."
  },
  {
    kind: "paragraph",
    text: "You'll see the bundle split."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 21 — State Management"
  },
  {
    kind: "paragraph",
    text: "First"
  },
  {
    kind: "paragraph",
    text: "Signals"
  },
  {
    kind: "paragraph",
    text: "Later"
  },
  {
    kind: "paragraph",
    text: "BehaviorSubject"
  },
  {
    kind: "paragraph",
    text: "Then compare them."
  },
  {
    kind: "paragraph",
    text: "You'll understand when each approach is appropriate."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 22 — Performance"
  },
  {
    kind: "paragraph",
    text: "Large Task List"
  },
  {
    kind: "paragraph",
    text: "1000 Tasks"
  },
  {
    kind: "code",
    language: "text",
    code: "track\n\nOnPush\n\n@defer"
  },
  {
    kind: "paragraph",
    text: "See the performance difference."
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 23 — Testing"
  },
  {
    kind: "paragraph",
    text: "Test"
  },
  {
    kind: "code",
    language: "text",
    code: "TaskService\n\nTaskComponent\n\nPipe\n\nGuard"
  },
  {
    kind: "heading",
    level: 2,
    text: "Step 24 — Deployment"
  },
  {
    kind: "paragraph",
    text: "Deploy to"
  },
  {
    kind: "paragraph",
    text: "GitHub Pages"
  },
  {
    kind: "paragraph",
    text: "Netlify"
  },
  {
    kind: "heading",
    level: 2,
    text: "Folder Structure"
  },
  {
    kind: "code",
    language: "text",
    code: "src/\n│\n├── app/\n│\n├── core/\n│   ├── services/\n│   ├── interceptors/\n│   ├── guards/\n│\n├── shared/\n│   ├── components/\n│   ├── directives/\n│   ├── pipes/\n│\n├── features/\n│   ├── dashboard/\n│   ├── tasks/\n│   ├── notes/\n│   ├── subjects/\n│   └── profile/\n│\n└── app.routes.ts"
  },
  {
    kind: "heading",
    level: 2,
    text: "Why I think this is the right project for you"
  },
  {
    kind: "paragraph",
    text: "Looking at your previous questions, you've already worked on HRMS features like onboarding and offboarding. You don't need another business-heavy application—you need a **learning lab**."
  },
  {
    kind: "paragraph",
    text: "This project stays simple enough that you can focus on Angular itself:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "When learning **Signals**, you're thinking about state updates, not HR rules.",
      "When learning **Routing**, you're thinking about navigation, not complex business flows.",
      "When learning **RxJS**, you're experimenting with search and API calls, not debugging enterprise code."
    ]
  },
  {
    kind: "paragraph",
    text: "The project grows with your knowledge, so every feature has a clear purpose."
  },
  {
    kind: "heading",
    level: 2,
    text: "My suggestion"
  },
  {
    kind: "paragraph",
    text: "Let's build this **from scratch using Angular 21** and modern best practices:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "✅ Standalone components only (no NgModules)",
      "✅ Signals where they make sense",
      "✅ Latest control flow (`@if`, `@for`, `@switch`, `@defer`)",
      "✅ Reactive Forms",
      "✅ Clean folder structure",
      "✅ Strong TypeScript typing"
    ]
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "What problem this Angular feature solves.",
      "Why Angular provides it.",
      "When to use it in real applications.",
      "Then we'll implement it in the Student Task Manager."
    ]
  },
  {
    kind: "paragraph",
    text: "By the end, you won't just know *how* to write Angular—you'll understand *why* Angular is designed the way it is."
  },
  {
    kind: "paragraph",
    text: "angular-mastery/ │ ├── 01-components ├── 02-data-binding ├── 03-directives ├── 04-control-flow ├── 05-signals ├── 06-routing ├── 07-services ├── 08-dependency-injection ├── 09-http-client ├── 10-rxjs ├── 11-forms ├── 12-custom-directives ├── 13-custom-pipes ├── 14-lifecycle-hooks ├── 15-content-projection ├── 16-viewchild ├── 17-dynamic-components ├── 18-interceptors ├── 19-route-guards ├── 20-lazy-loading ├── 21-state-management ├── 22-performance ├── 23-testing └── 24-deploymentAll these concepts is included in this. If so, let us start."
  }
];
