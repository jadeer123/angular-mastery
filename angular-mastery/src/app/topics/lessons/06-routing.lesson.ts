import { LessonBlock } from '../topic.model';

export const lesson06Routing: LessonBlock[] = [
  {
    kind: "heading",
    level: 2,
    text: "🎯 Objective"
  },
  {
    kind: "paragraph",
    text: "By the end of this lesson, you'll understand:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "What Routing is",
      "Why Single Page Applications need Routing",
      "How Angular navigates between pages",
      "How Routes are configured",
      "What Router Outlet does",
      "How RouterLink works",
      "Programmatic Navigation",
      "Route Parameters",
      "Query Parameters",
      "Child Routes",
      "Wildcard Routes",
      "Route Redirects",
      "Route Organization",
      "Best Practices"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📖 What is Routing?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're building an HRMS application."
  },
  {
    kind: "paragraph",
    text: "It has many pages."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dashboard",
      "Employees",
      "Attendance",
      "Payroll",
      "Settings"
    ]
  },
  {
    kind: "paragraph",
    text: "When a user clicks **Employees**, should Angular reload the entire website?"
  },
  {
    kind: "paragraph",
    text: "No."
  },
  {
    kind: "paragraph",
    text: "Angular changes only the content inside the page."
  },
  {
    kind: "paragraph",
    text: "This is called **Routing**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Routing?"
  },
  {
    kind: "paragraph",
    text: "Imagine opening"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard"
  },
  {
    kind: "paragraph",
    text: "Now click"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees"
  },
  {
    kind: "paragraph",
    text: "Without Routing,"
  },
  {
    kind: "paragraph",
    text: "Angular wouldn't know which page to display."
  },
  {
    kind: "paragraph",
    text: "Routing tells Angular"
  },
  {
    kind: "quote",
    text: "\"When this URL is visited, show this Component.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "🌍 Real World Example"
  },
  {
    kind: "paragraph",
    text: "Imagine HRMS."
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\n/dashboard\n\n↓\n\nDashboard Component"
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\n/employees\n\n↓\n\nEmployee Component"
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\n/attendance\n\n↓\n\nAttendance Component"
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\n/payroll\n\n↓\n\nPayroll Component"
  },
  {
    kind: "heading",
    level: 2,
    text: "Single Page Application (SPA)"
  },
  {
    kind: "paragraph",
    text: "Explain:"
  },
  {
    kind: "paragraph",
    text: "Traditional Website"
  },
  {
    kind: "code",
    language: "text",
    code: "Browser\n\n↓\n\nRequest New Page\n\n↓\n\nServer Returns New HTML\n\n↓\n\nWhole Page Reloads"
  },
  {
    kind: "paragraph",
    text: "Angular SPA"
  },
  {
    kind: "code",
    language: "text",
    code: "Browser\n\n↓\n\nURL Changes\n\n↓\n\nAngular Router\n\n↓\n\nNew Component\n\n↓\n\nNo Page Reload"
  },
  {
    kind: "paragraph",
    text: "This is the biggest concept beginners must understand."
  },
  {
    kind: "heading",
    level: 2,
    text: "Router Outlet"
  },
  {
    kind: "paragraph",
    text: "Then explain"
  },
  {
    kind: "code",
    language: "text",
    code: "App Component\n\n↓\n\nHeader\n\n↓\n\nSidebar\n\n↓\n\nRouter Outlet\n\n↓\n\nDashboard\n\nEmployees\n\nPayroll\n\nSettings\n\n↓\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "Explain that **Router Outlet is simply a placeholder**."
  },
  {
    kind: "paragraph",
    text: "Angular loads the current page inside that placeholder."
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Configuration"
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\nRoute\n\n↓\n\nComponent"
  },
  {
    kind: "paragraph",
    text: "Example"
  },
  {
    kind: "code",
    language: "text",
    code: "/dashboard\n\n↓\n\nDashboardComponent"
  },
  {
    kind: "heading",
    level: 2,
    text: "RouterLink"
  },
  {
    kind: "paragraph",
    text: "Instead of"
  },
  {
    kind: "code",
    language: "text",
    code: "window.location"
  },
  {
    kind: "paragraph",
    text: "Angular uses"
  },
  {
    kind: "code",
    language: "text",
    code: "RouterLink"
  },
  {
    kind: "paragraph",
    text: "because it navigates without reloading the page."
  },
  {
    kind: "paragraph",
    text: "Real-world examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Sidebar menu",
      "Dashboard cards",
      "Employee details",
      "Settings page"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Programmatic Navigation"
  },
  {
    kind: "paragraph",
    text: "Explain when RouterLink is **not enough**."
  },
  {
    kind: "paragraph",
    text: "After Login"
  },
  {
    kind: "paragraph",
    text: "↓"
  },
  {
    kind: "paragraph",
    text: "Navigate Dashboard"
  },
  {
    kind: "paragraph",
    text: "After Save Employee"
  },
  {
    kind: "paragraph",
    text: "Navigate Employee List"
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Parameters"
  },
  {
    kind: "paragraph",
    text: "Real HRMS example"
  },
  {
    kind: "code",
    language: "text",
    code: "/employee/25"
  },
  {
    kind: "paragraph",
    text: "25 is Employee ID."
  },
  {
    kind: "paragraph",
    text: "Use this to open Employee Details."
  },
  {
    kind: "heading",
    level: 2,
    text: "Query Parameters"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees?department=HR"
  },
  {
    kind: "paragraph",
    text: "or"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees?page=2"
  },
  {
    kind: "paragraph",
    text: "Real examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Search",
      "Filter",
      "Pagination"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Child Routes"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee\n\n↓\n\nProfile\n\nAttendance\n\nLeave\n\nDocuments"
  },
  {
    kind: "heading",
    level: 2,
    text: "Redirect Routes"
  },
  {
    kind: "code",
    language: "text",
    code: "/\n\n↓\n\nDashboard"
  },
  {
    kind: "heading",
    level: 2,
    text: "Wildcard Route"
  },
  {
    kind: "code",
    language: "text",
    code: "Wrong URL\n\n↓\n\n404 Page"
  },
  {
    kind: "heading",
    level: 2,
    text: "Routing Flow Diagram"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Menu\n\n↓\n\nRouterLink\n\n↓\n\nAngular Router\n\n↓\n\nRoute Match\n\n↓\n\nComponent Loaded\n\n↓\n\nRouter Outlet Updates"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real World Usage"
  },
  {
    kind: "table",
    headers: [
      "Feature",
      "Routing"
    ],
    rows: [
      [
        "Dashboard",
        "`/dashboard`"
      ],
      [
        "Employee Details",
        "`/employee/:id`"
      ],
      [
        "Search",
        "Query Parameters"
      ],
      [
        "Settings",
        "Child Routes"
      ],
      [
        "Invalid URL",
        "Wildcard"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Common Mistakes"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Using `<a href>` instead of `routerLink`",
      "Forgetting `<router-outlet>`",
      "Hardcoding URLs",
      "Not handling invalid routes",
      "Misusing route parameters and query parameters"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Best Practices"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Use `routerLink` for navigation.",
      "Keep route definitions organized.",
      "Use route parameters for IDs.",
      "Use query parameters for filters and pagination.",
      "Always add a wildcard route.",
      "Group related child routes together."
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "Mini Challenge"
  },
  {
    kind: "paragraph",
    text: "Build an HRMS navigation:"
  },
  {
    kind: "paragraph",
    text: "Requirements:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Sidebar navigation",
      "Dashboard cards navigate to pages",
      "Employee Details uses Route Parameters",
      "Employee Search uses Query Parameters",
      "Add a 404 page"
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Summary"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Routing enables navigation in Angular SPAs.",
      "`RouterOutlet` is where Angular displays the current page.",
      "`routerLink` provides navigation without a page reload.",
      "Route Parameters identify resources (e.g., employee ID).",
      "Query Parameters pass optional information (filters, sorting, pagination).",
      "Child Routes organize related pages.",
      "Wildcard Routes handle unknown URLs."
    ]
  },
  {
    kind: "paragraph",
    text: "Your application has many pages."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nAttendance\n\nPayroll\n\nLeaves\n\nSettings"
  },
  {
    kind: "paragraph",
    text: "Now imagine a user clicks **Employees**."
  },
  {
    kind: "paragraph",
    text: "What should happen?"
  },
  {
    kind: "paragraph",
    text: "Should Angular close the current website..."
  },
  {
    kind: "paragraph",
    text: "...request a brand-new HTML page from the server..."
  },
  {
    kind: "paragraph",
    text: "...download everything again..."
  },
  {
    kind: "paragraph",
    text: "...and rebuild the whole application?"
  },
  {
    kind: "paragraph",
    text: "That would be slow."
  },
  {
    kind: "paragraph",
    text: "Instead, Angular simply changes the content displayed on the screen."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of Routing Like Rooms in a House"
  },
  {
    kind: "paragraph",
    text: "Imagine your house has different rooms."
  },
  {
    kind: "code",
    language: "text",
    code: "Living Room\n\nKitchen\n\nBedroom\n\nStudy Room"
  },
  {
    kind: "paragraph",
    text: "You don't leave your house and build a new one every time you move from the bedroom to the kitchen."
  },
  {
    kind: "paragraph",
    text: "You simply walk into another room."
  },
  {
    kind: "paragraph",
    text: "Angular Routing works exactly the same way."
  },
  {
    kind: "paragraph",
    text: "Your application is the house."
  },
  {
    kind: "paragraph",
    text: "Each page is a different room."
  },
  {
    kind: "paragraph",
    text: "Routing lets the user move from one page to another **without rebuilding the entire application**."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS has five pages."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nAttendance\n\nPayroll\n\nSettings"
  },
  {
    kind: "paragraph",
    text: "Angular would have no idea which page to display."
  },
  {
    kind: "paragraph",
    text: "Suppose the user types"
  },
  {
    kind: "paragraph",
    text: "How should Angular know to display the Employee page?"
  },
  {
    kind: "paragraph",
    text: "Routing answers this question."
  },
  {
    kind: "paragraph",
    text: "It tells Angular,"
  },
  {
    kind: "quote",
    text: "\"When the URL is `/employees`, display the Employee Component.\""
  },
  {
    kind: "paragraph",
    text: "Think of Routing as a **map**."
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\nComponent"
  },
  {
    kind: "paragraph",
    text: "Without the map,"
  },
  {
    kind: "paragraph",
    text: "Angular doesn't know where to go."
  },
  {
    kind: "paragraph",
    text: "Imagine you're using YouTube."
  },
  {
    kind: "code",
    language: "text",
    code: "youtube.com"
  },
  {
    kind: "paragraph",
    text: "Home page appears."
  },
  {
    kind: "paragraph",
    text: "Click a video."
  },
  {
    kind: "paragraph",
    text: "The URL changes."
  },
  {
    kind: "code",
    language: "text",
    code: "youtube.com/watch?v=abc123"
  },
  {
    kind: "paragraph",
    text: "Now the Video page appears."
  },
  {
    kind: "paragraph",
    text: "The browser didn't download an entirely different website."
  },
  {
    kind: "paragraph",
    text: "Only the content changed."
  },
  {
    kind: "paragraph",
    text: "Angular applications work the same way."
  },
  {
    kind: "paragraph",
    text: "This is one of the most important concepts in Angular."
  },
  {
    kind: "paragraph",
    text: "Let's compare two types of websites."
  },
  {
    kind: "heading",
    level: 2,
    text: "Traditional Website"
  },
  {
    kind: "paragraph",
    text: "Suppose you open Amazon."
  },
  {
    kind: "code",
    language: "text",
    code: "Home"
  },
  {
    kind: "code",
    language: "text",
    code: "Orders"
  },
  {
    kind: "paragraph",
    text: "The browser sends a request to the server."
  },
  {
    kind: "paragraph",
    text: "The server sends a completely new HTML page."
  },
  {
    kind: "paragraph",
    text: "The browser throws away the old page and loads the new one."
  },
  {
    kind: "paragraph",
    text: "Flow:"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks\n\n↓\n\nBrowser Requests Server\n\n↓\n\nServer Creates New HTML\n\n↓\n\nBrowser Downloads Everything\n\n↓\n\nEntire Page Reloads"
  },
  {
    kind: "paragraph",
    text: "You may notice a brief flash or loading spinner because the whole page is being reloaded."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular SPA"
  },
  {
    kind: "paragraph",
    text: "Now consider an Angular application."
  },
  {
    kind: "paragraph",
    text: "The application is loaded **once** when you first open it."
  },
  {
    kind: "paragraph",
    text: "After that, moving between pages does not require downloading a new HTML page each time."
  },
  {
    kind: "paragraph",
    text: "Instead:"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks\n\n↓\n\nURL Changes\n\n↓\n\nAngular Router Checks Routes\n\n↓\n\nCorrect Component Found\n\n↓\n\nOnly That Component Changes"
  },
  {
    kind: "paragraph",
    text: "The Header, Sidebar, and Footer remain on the screen."
  },
  {
    kind: "paragraph",
    text: "Only the page content changes."
  },
  {
    kind: "paragraph",
    text: "This is why Angular applications feel fast."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example"
  },
  {
    kind: "paragraph",
    text: "Imagine this layout."
  },
  {
    kind: "code",
    language: "text",
    code: "---------------------------------\n\nHeader\n\n---------------------------------\n\nSidebar\n\n|\n\n| Dashboard\n\n| Employees\n\n| Payroll\n\n| Attendance\n\n|\n\n---------------------------------\n\nMain Content\n\n---------------------------------\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "When the user clicks **Employees**,"
  },
  {
    kind: "paragraph",
    text: "does Angular rebuild the Header?"
  },
  {
    kind: "paragraph",
    text: "Does it recreate the Sidebar?"
  },
  {
    kind: "paragraph",
    text: "Does it recreate the Footer?"
  },
  {
    kind: "paragraph",
    text: "Only the **Main Content** changes."
  },
  {
    kind: "paragraph",
    text: "That's one of the biggest advantages of Routing in a Single Page Application."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is Routing Better?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Every navigation reloads the whole page.",
      "More data is downloaded.",
      "Slower user experience.",
      "More work for the server."
    ]
  },
  {
    kind: "paragraph",
    text: "With Angular Routing:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Faster navigation.",
      "Better user experience.",
      "Only the required component changes.",
      "The rest of the application stays exactly the same."
    ]
  },
  {
    kind: "paragraph",
    text: "Notice how we still haven't written any code."
  },
  {
    kind: "paragraph",
    text: "A beginner should first understand **why Routing exists** before learning about `RouterOutlet`, route configuration, or `routerLink`."
  },
  {
    kind: "heading",
    level: 2,
    text: "My recommendation for the rest of the lesson"
  },
  {
    kind: "paragraph",
    text: "Teach it in this order:"
  },
  {
    kind: "list",
    ordered: true,
    items: [
      "**What is Routing?** ✅",
      "**Why Routing is needed?** ✅",
      "**What is a Single Page Application?** ✅",
      "**What is `RouterOutlet`?**",
      "**How Route Configuration works**",
      "**How `routerLink` works**",
      "**Programmatic Navigation**",
      "**Route Parameters**",
      "**Query Parameters**",
      "**Child Routes**",
      "**Wildcard Routes**",
      "**Best Practices**",
      "**Mini Challenge**"
    ]
  },
  {
    kind: "paragraph",
    text: "This sequence builds understanding naturally instead of introducing Angular APIs before the learner knows the problem they're solving."
  },
  {
    kind: "quote",
    text: "**\"How does Angular know where to display each page?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **Router Outlet** comes in."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 What is Router Outlet?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application looks like this."
  },
  {
    kind: "paragraph",
    text: "Now suppose the user clicks **Employees**."
  },
  {
    kind: "paragraph",
    text: "What should Angular change?"
  },
  {
    kind: "paragraph",
    text: "Should it remove the Header?"
  },
  {
    kind: "paragraph",
    text: "Should it recreate the Sidebar?"
  },
  {
    kind: "paragraph",
    text: "Should it recreate the Footer?"
  },
  {
    kind: "paragraph",
    text: "Only the **Main Content** should change."
  },
  {
    kind: "paragraph",
    text: "Angular needs one place where it can display different pages."
  },
  {
    kind: "paragraph",
    text: "That place is called **Router Outlet**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of Router Outlet Like a TV Screen"
  },
  {
    kind: "paragraph",
    text: "Imagine your house."
  },
  {
    kind: "paragraph",
    text: "You have one television."
  },
  {
    kind: "paragraph",
    text: "Today you watch Cricket."
  },
  {
    kind: "paragraph",
    text: "Tomorrow you watch a Movie."
  },
  {
    kind: "paragraph",
    text: "Later you watch the News."
  },
  {
    kind: "paragraph",
    text: "Did you buy a new television every time?"
  },
  {
    kind: "paragraph",
    text: "Only the content on the TV changes."
  },
  {
    kind: "paragraph",
    text: "The television remains the same."
  },
  {
    kind: "paragraph",
    text: "Router Outlet works exactly like that TV."
  },
  {
    kind: "code",
    language: "text",
    code: "TV\n\n↓\n\nCricket\n\n↓\n\nMovie\n\n↓\n\nNews"
  },
  {
    kind: "paragraph",
    text: "The TV never changes."
  },
  {
    kind: "paragraph",
    text: "Only what's displayed changes."
  },
  {
    kind: "paragraph",
    text: "Similarly,"
  },
  {
    kind: "code",
    language: "text",
    code: "Router Outlet\n\n↓\n\nDashboard\n\n↓\n\nEmployees\n\n↓\n\nPayroll\n\n↓\n\nSettings"
  },
  {
    kind: "paragraph",
    text: "Router Outlet stays in the same place."
  },
  {
    kind: "paragraph",
    text: "Angular simply changes which component is displayed inside it."
  },
  {
    kind: "paragraph",
    text: "Imagine your application starts here."
  },
  {
    kind: "code",
    language: "text",
    code: "Header\n\nSidebar\n\nRouter Outlet\n\n↓\n\nDashboard\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "The user clicks **Employees**."
  },
  {
    kind: "paragraph",
    text: "Now Angular changes only the Router Outlet."
  },
  {
    kind: "code",
    language: "text",
    code: "Header\n\nSidebar\n\nRouter Outlet\n\n↓\n\nEmployee Component\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "Later the user clicks Payroll."
  },
  {
    kind: "code",
    language: "text",
    code: "Header\n\nSidebar\n\nRouter Outlet\n\n↓\n\nPayroll Component\n\nFooter"
  },
  {
    kind: "paragraph",
    text: "Notice something."
  },
  {
    kind: "paragraph",
    text: "The Header never changed."
  },
  {
    kind: "paragraph",
    text: "The Sidebar never changed."
  },
  {
    kind: "paragraph",
    text: "Only Router Outlet changed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why do we need Router Outlet?"
  },
  {
    kind: "paragraph",
    text: "Suppose Router Outlet didn't exist."
  },
  {
    kind: "paragraph",
    text: "Angular receives the URL"
  },
  {
    kind: "paragraph",
    text: "Where should it display the Employee page?"
  },
  {
    kind: "paragraph",
    text: "Inside the Header?"
  },
  {
    kind: "paragraph",
    text: "Inside the Sidebar?"
  },
  {
    kind: "paragraph",
    text: "Inside the Footer?"
  },
  {
    kind: "paragraph",
    text: "Angular has no idea."
  },
  {
    kind: "paragraph",
    text: "Router Outlet tells Angular"
  },
  {
    kind: "quote",
    text: "\"Whenever navigation happens, display the selected component here.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Menu\n\n↓\n\nURL Changes\n\n↓\n\nAngular Router\n\n↓\n\nFind Matching Route\n\n↓\n\nLoad Component\n\n↓\n\nDisplay Inside Router Outlet"
  },
  {
    kind: "paragraph",
    text: "Imagine YouTube."
  },
  {
    kind: "paragraph",
    text: "The page always contains:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Top Navigation",
      "Search Bar",
      "Left Menu"
    ]
  },
  {
    kind: "paragraph",
    text: "These stay the same."
  },
  {
    kind: "paragraph",
    text: "Only the video area changes."
  },
  {
    kind: "paragraph",
    text: "That video area behaves like a Router Outlet."
  },
  {
    kind: "paragraph",
    text: "Another example is Gmail."
  },
  {
    kind: "paragraph",
    text: "The left navigation remains."
  },
  {
    kind: "paragraph",
    text: "The top toolbar remains."
  },
  {
    kind: "paragraph",
    text: "Only the email content changes."
  },
  {
    kind: "paragraph",
    text: "Again,"
  },
  {
    kind: "paragraph",
    text: "that content area behaves like a Router Outlet."
  },
  {
    kind: "heading",
    level: 2,
    text: "Key Points"
  },
  {
    kind: "paragraph",
    text: "✔ Router Outlet is a **placeholder**."
  },
  {
    kind: "paragraph",
    text: "✔ Angular loads the matched component inside it."
  },
  {
    kind: "paragraph",
    text: "✔ Only the content inside Router Outlet changes."
  },
  {
    kind: "paragraph",
    text: "✔ The rest of the page remains unchanged."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 How Does Angular Know Which Component to Load?"
  },
  {
    kind: "paragraph",
    text: "Now that we know **where** Angular displays a page (Router Outlet), the next question is:"
  },
  {
    kind: "quote",
    text: "**How does Angular decide *which* component belongs to `/employees` or `/dashboard`?**"
  },
  {
    kind: "paragraph",
    text: "Angular uses something called **Route Configuration**."
  },
  {
    kind: "paragraph",
    text: "Think of it like Google Maps."
  },
  {
    kind: "paragraph",
    text: "You enter a destination."
  },
  {
    kind: "paragraph",
    text: "Google Maps knows exactly where to take you because it has a map."
  },
  {
    kind: "paragraph",
    text: "Similarly, Angular has a routing map that connects URLs to components."
  },
  {
    kind: "paragraph",
    text: "That's what we'll learn next."
  },
  {
    kind: "paragraph",
    text: "The next question is:"
  },
  {
    kind: "quote",
    text: "**\"How does Angular know that `/employees` should open the Employee page?\"**"
  },
  {
    kind: "paragraph",
    text: "This is where **Route Configuration** comes in."
  },
  {
    kind: "paragraph",
    text: "Imagine you're a delivery driver."
  },
  {
    kind: "paragraph",
    text: "Someone gives you this address."
  },
  {
    kind: "code",
    language: "text",
    code: "MG Road, Bengaluru"
  },
  {
    kind: "paragraph",
    text: "How do you know where to go?"
  },
  {
    kind: "paragraph",
    text: "Because Google Maps has a mapping."
  },
  {
    kind: "code",
    language: "text",
    code: "Address\n\n↓\n\nLocation"
  },
  {
    kind: "paragraph",
    text: "Angular works exactly the same way."
  },
  {
    kind: "paragraph",
    text: "Instead of addresses,"
  },
  {
    kind: "paragraph",
    text: "Angular has URLs."
  },
  {
    kind: "paragraph",
    text: "Instead of locations,"
  },
  {
    kind: "paragraph",
    text: "Angular has Components."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like a Dictionary"
  },
  {
    kind: "paragraph",
    text: "Imagine a dictionary."
  },
  {
    kind: "code",
    language: "text",
    code: "Apple\n\n↓\n\nA Fruit\n\n----------------\n\nDog\n\n↓\n\nAn Animal\n\n----------------\n\nCar\n\n↓\n\nA Vehicle"
  },
  {
    kind: "paragraph",
    text: "Angular's Routing is also a dictionary."
  },
  {
    kind: "code",
    language: "text",
    code: "/dashboard\n\n↓\n\nDashboard Component\n\n----------------\n\n/employees\n\n↓\n\nEmployee Component\n\n----------------\n\n/attendance\n\n↓\n\nAttendance Component\n\n----------------\n\n/payroll\n\n↓\n\nPayroll Component"
  },
  {
    kind: "paragraph",
    text: "Whenever Angular sees a URL,"
  },
  {
    kind: "paragraph",
    text: "it simply looks inside this mapping."
  },
  {
    kind: "paragraph",
    text: "Suppose your application has these pages."
  },
  {
    kind: "paragraph",
    text: "Your routing table looks like this."
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\nComponent\n\n--------------------------------\n\n/dashboard\n\n↓\n\nDashboard Component\n\n--------------------------------\n\n/employees\n\n↓\n\nEmployee Component\n\n--------------------------------\n\n/attendance\n\n↓\n\nAttendance Component\n\n--------------------------------\n\n/payroll\n\n↓\n\nPayroll Component\n\n--------------------------------\n\n/settings\n\n↓\n\nSettings Component"
  },
  {
    kind: "heading",
    level: 2,
    text: "What Happens When the User Clicks Employees?"
  },
  {
    kind: "paragraph",
    text: "Imagine you're currently on"
  },
  {
    kind: "paragraph",
    text: "The user clicks"
  },
  {
    kind: "paragraph",
    text: "The URL becomes"
  },
  {
    kind: "paragraph",
    text: "Now Angular starts searching."
  },
  {
    kind: "code",
    language: "text",
    code: "URL\n\n↓\n\n/employees\n\n↓\n\nSearch Route Configuration\n\n↓\n\nFound\n\n↓\n\nEmployee Component\n\n↓\n\nLoad into Router Outlet"
  },
  {
    kind: "paragraph",
    text: "Angular didn't search your project folders."
  },
  {
    kind: "paragraph",
    text: "It didn't guess."
  },
  {
    kind: "paragraph",
    text: "It simply looked inside the routing configuration."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think Like a Receptionist"
  },
  {
    kind: "paragraph",
    text: "Imagine a company reception."
  },
  {
    kind: "paragraph",
    text: "A visitor says"
  },
  {
    kind: "quote",
    text: "\"I want Payroll.\""
  },
  {
    kind: "paragraph",
    text: "The receptionist checks the employee directory."
  },
  {
    kind: "code",
    language: "text",
    code: "Payroll\n\n↓\n\n3rd Floor"
  },
  {
    kind: "paragraph",
    text: "Another visitor says"
  },
  {
    kind: "quote",
    text: "\"I want HR.\""
  },
  {
    kind: "paragraph",
    text: "Receptionist checks again."
  },
  {
    kind: "code",
    language: "text",
    code: "HR\n\n↓\n\n2nd Floor"
  },
  {
    kind: "paragraph",
    text: "The receptionist doesn't guess."
  },
  {
    kind: "paragraph",
    text: "She follows the directory."
  },
  {
    kind: "paragraph",
    text: "Angular Routing works exactly like that."
  },
  {
    kind: "paragraph",
    text: "The routing configuration is Angular's directory."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Do We Need Route Configuration?"
  },
  {
    kind: "paragraph",
    text: "Suppose there were no routing configuration."
  },
  {
    kind: "paragraph",
    text: "The browser opens"
  },
  {
    kind: "paragraph",
    text: "Angular asks:"
  },
  {
    kind: "quote",
    text: "\"Which component should I display?\""
  },
  {
    kind: "paragraph",
    text: "There could be hundreds of components."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List\n\nEmployee Details\n\nEmployee Form\n\nEmployee Card\n\nEmployee History\n\nEmployee Documents"
  },
  {
    kind: "paragraph",
    text: "Which one?"
  },
  {
    kind: "paragraph",
    text: "Angular cannot know."
  },
  {
    kind: "paragraph",
    text: "The routing configuration removes this confusion."
  },
  {
    kind: "paragraph",
    text: "It explicitly tells Angular which component belongs to which URL."
  },
  {
    kind: "code",
    language: "text",
    code: "User Types URL\n\n↓\n\nAngular Router\n\n↓\n\nChecks Route Configuration\n\n↓\n\nFinds Matching Component\n\n↓\n\nLoads Component\n\n↓\n\nDisplays Inside Router Outlet"
  },
  {
    kind: "heading",
    level: 2,
    text: "Real-world Examples"
  },
  {
    kind: "heading",
    level: 3,
    text: "YouTube"
  },
  {
    kind: "code",
    language: "text",
    code: "/watch\n\n↓\n\nVideo Page"
  },
  {
    kind: "heading",
    level: 3,
    text: "Amazon"
  },
  {
    kind: "code",
    language: "text",
    code: "/cart\n\n↓\n\nShopping Cart"
  },
  {
    kind: "heading",
    level: 3,
    text: "Gmail"
  },
  {
    kind: "code",
    language: "text",
    code: "/inbox\n\n↓\n\nInbox Page"
  },
  {
    kind: "heading",
    level: 3,
    text: "HRMS"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\nEmployee List"
  },
  {
    kind: "heading",
    level: 3,
    text: "Banking"
  },
  {
    kind: "code",
    language: "text",
    code: "/accounts\n\n↓\n\nAccounts Page"
  },
  {
    kind: "paragraph",
    text: "✔ Route Configuration is a **mapping** between URLs and Components."
  },
  {
    kind: "paragraph",
    text: "✔ Angular checks this mapping whenever the URL changes."
  },
  {
    kind: "paragraph",
    text: "✔ If a matching route is found, Angular loads that Component into the Router Outlet."
  },
  {
    kind: "paragraph",
    text: "✔ Without Route Configuration, Angular wouldn't know which page to display."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 The Next Question"
  },
  {
    kind: "paragraph",
    text: "Now we know:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Where** Angular displays pages (**Router Outlet**)",
      "**How** Angular knows which page to display (**Route Configuration**)"
    ]
  },
  {
    kind: "quote",
    text: "**How does the URL change when the user clicks a menu or button?**"
  },
  {
    kind: "paragraph",
    text: "That's where **`routerLink`** comes in, and it's the next topic we'll cover."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "✅ What Routing is",
      "✅ Why Routing is needed",
      "✅ What Router Outlet is",
      "✅ What Route Configuration is"
    ]
  },
  {
    kind: "paragraph",
    text: "The next natural question is:"
  },
  {
    kind: "quote",
    text: "**\"How does the URL actually change when I click a menu?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **RouterLink** comes in."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS sidebar."
  },
  {
    kind: "paragraph",
    text: "Now the user clicks **Employees**."
  },
  {
    kind: "paragraph",
    text: "The browser URL should become"
  },
  {
    kind: "paragraph",
    text: "and Angular should display the Employee page."
  },
  {
    kind: "paragraph",
    text: "But..."
  },
  {
    kind: "paragraph",
    text: "**Who changes the URL?**"
  },
  {
    kind: "paragraph",
    text: "The answer is **RouterLink**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need RouterLink?"
  },
  {
    kind: "paragraph",
    text: "Suppose Angular didn't have RouterLink."
  },
  {
    kind: "paragraph",
    text: "You might think,"
  },
  {
    kind: "quote",
    text: "\"I'll just use an HTML link.\""
  },
  {
    kind: "code",
    language: "html",
    code: "<a href=\"/employees\">Employees</a>"
  },
  {
    kind: "paragraph",
    text: "This works in a traditional website."
  },
  {
    kind: "paragraph",
    text: "But what happens?"
  },
  {
    kind: "paragraph",
    text: "The browser thinks,"
  },
  {
    kind: "quote",
    text: "\"The user wants a completely new page.\""
  },
  {
    kind: "paragraph",
    text: "So it requests the server again."
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks\n\n↓\n\nBrowser Requests Server\n\n↓\n\nServer Returns New HTML\n\n↓\n\nEntire Page Reloads"
  },
  {
    kind: "paragraph",
    text: "Your Angular application reloads."
  },
  {
    kind: "paragraph",
    text: "This removes one of the biggest advantages of a Single Page Application."
  },
  {
    kind: "heading",
    level: 2,
    text: "Angular's Solution"
  },
  {
    kind: "paragraph",
    text: "Angular says,"
  },
  {
    kind: "quote",
    text: "\"Don't reload the page.\""
  },
  {
    kind: "quote",
    text: "\"Tell me where you want to go.\""
  },
  {
    kind: "paragraph",
    text: "Angular changes the URL,"
  },
  {
    kind: "paragraph",
    text: "finds the correct route,"
  },
  {
    kind: "paragraph",
    text: "and loads only the required component."
  },
  {
    kind: "paragraph",
    text: "No page reload."
  },
  {
    kind: "paragraph",
    text: "This is exactly what **RouterLink** does."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of RouterLink Like an Elevator Button"
  },
  {
    kind: "paragraph",
    text: "Imagine you're inside a shopping mall."
  },
  {
    kind: "paragraph",
    text: "You want to go to the **3rd floor**."
  },
  {
    kind: "paragraph",
    text: "Do you leave the building,"
  },
  {
    kind: "paragraph",
    text: "walk outside,"
  },
  {
    kind: "paragraph",
    text: "and enter again?"
  },
  {
    kind: "paragraph",
    text: "You simply press the elevator button."
  },
  {
    kind: "code",
    language: "text",
    code: "Floor 1\n\n↓\n\nPress Button\n\n↓\n\nElevator Moves\n\n↓\n\nFloor 3"
  },
  {
    kind: "paragraph",
    text: "The building stays the same."
  },
  {
    kind: "paragraph",
    text: "Only your location changes."
  },
  {
    kind: "paragraph",
    text: "RouterLink works the same way."
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\n↓\n\nClick Employees\n\n↓\n\nURL Changes\n\n↓\n\nEmployee Component Appears"
  },
  {
    kind: "paragraph",
    text: "The application remains loaded."
  },
  {
    kind: "paragraph",
    text: "Only the displayed page changes."
  },
  {
    kind: "paragraph",
    text: "Initially,"
  },
  {
    kind: "paragraph",
    text: "shows"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard Component"
  },
  {
    kind: "paragraph",
    text: "RouterLink changes the URL."
  },
  {
    kind: "paragraph",
    text: "Angular checks Route Configuration."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\nEmployee Component"
  },
  {
    kind: "paragraph",
    text: "Router Outlet updates."
  },
  {
    kind: "paragraph",
    text: "Now the user sees"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List"
  },
  {
    kind: "paragraph",
    text: "No page reload happened."
  },
  {
    kind: "heading",
    level: 2,
    text: "Navigation Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Menu\n\n↓\n\nRouterLink\n\n↓\n\nURL Changes\n\n↓\n\nAngular Router\n\n↓\n\nRoute Found\n\n↓\n\nRouter Outlet\n\n↓\n\nComponent Displayed"
  },
  {
    kind: "paragraph",
    text: "Everything happens inside the Angular application."
  },
  {
    kind: "paragraph",
    text: "Sidebar"
  },
  {
    kind: "code",
    language: "text",
    code: "Dashboard\n\nEmployees\n\nPayroll\n\nAttendance"
  },
  {
    kind: "paragraph",
    text: "Each menu uses RouterLink."
  },
  {
    kind: "paragraph",
    text: "Click"
  },
  {
    kind: "code",
    language: "text",
    code: "Cart"
  },
  {
    kind: "code",
    language: "text",
    code: "Inbox"
  },
  {
    kind: "heading",
    level: 3,
    text: "Netflix"
  },
  {
    kind: "code",
    language: "text",
    code: "TV Shows"
  },
  {
    kind: "paragraph",
    text: "TV Shows page opens."
  },
  {
    kind: "heading",
    level: 3,
    text: "Banking App"
  },
  {
    kind: "code",
    language: "text",
    code: "Accounts"
  },
  {
    kind: "paragraph",
    text: "Accounts page opens."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why is RouterLink Better than href?"
  },
  {
    kind: "table",
    headers: [
      "href",
      "RouterLink"
    ],
    rows: [
      [
        "Reloads the page",
        "No page reload"
      ],
      [
        "Requests the server again",
        "Uses Angular Router"
      ],
      [
        "Slower navigation",
        "Faster navigation"
      ],
      [
        "Traditional websites",
        "Angular Single Page Applications"
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should We Use RouterLink?"
  },
  {
    kind: "paragraph",
    text: "Use RouterLink whenever the user navigates inside your Angular application."
  },
  {
    kind: "paragraph",
    text: "Examples:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Sidebar Menu",
      "Navigation Bar",
      "Dashboard Cards",
      "Employee List",
      "Settings Menu",
      "Home Button"
    ]
  },
  {
    kind: "paragraph",
    text: "✔ RouterLink changes the URL without reloading the page."
  },
  {
    kind: "paragraph",
    text: "✔ It works together with Angular Router."
  },
  {
    kind: "paragraph",
    text: "✔ RouterLink uses Route Configuration to find the correct component."
  },
  {
    kind: "paragraph",
    text: "✔ The selected component is displayed inside the Router Outlet."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Question"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**What Routing is**",
      "**How Angular knows which component to display**",
      "**How navigation happens**"
    ]
  },
  {
    kind: "quote",
    text: "**\"What if I want to navigate after clicking a Save button or after a successful Login, instead of clicking a menu?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **Programmatic Navigation** comes in, and it's the next topic."
  },
  {
    kind: "quote",
    text: "**\"What if the user doesn't click a menu? What if I want to navigate from TypeScript after some logic?\"**"
  },
  {
    kind: "paragraph",
    text: "This is called **Programmatic Navigation**."
  },
  {
    kind: "paragraph",
    text: "Sometimes users don't click a menu."
  },
  {
    kind: "paragraph",
    text: "Instead, your application decides where to navigate."
  },
  {
    kind: "paragraph",
    text: "For example,"
  },
  {
    kind: "paragraph",
    text: "After a successful login,"
  },
  {
    kind: "paragraph",
    text: "should the user stay on the Login page?"
  },
  {
    kind: "paragraph",
    text: "They should automatically go to the Dashboard."
  },
  {
    kind: "paragraph",
    text: "After adding an employee,"
  },
  {
    kind: "paragraph",
    text: "should the user remain on the Add Employee page?"
  },
  {
    kind: "paragraph",
    text: "Usually not."
  },
  {
    kind: "paragraph",
    text: "They should be taken back to the Employee List."
  },
  {
    kind: "paragraph",
    text: "This type of navigation is called **Programmatic Navigation**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Programmatic Navigation?"
  },
  {
    kind: "paragraph",
    text: "Imagine this Login page."
  },
  {
    kind: "code",
    language: "text",
    code: "Username\n\nPassword\n\n[ Login ]"
  },
  {
    kind: "paragraph",
    text: "The user enters valid credentials."
  },
  {
    kind: "paragraph",
    text: "The Login API returns"
  },
  {
    kind: "code",
    language: "text",
    code: "Success"
  },
  {
    kind: "paragraph",
    text: "Now ask yourself..."
  },
  {
    kind: "paragraph",
    text: "Who will click the Dashboard menu?"
  },
  {
    kind: "paragraph",
    text: "Nobody."
  },
  {
    kind: "paragraph",
    text: "The application itself should navigate to the Dashboard."
  },
  {
    kind: "paragraph",
    text: "This is why Angular provides Programmatic Navigation."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like Google Maps"
  },
  {
    kind: "paragraph",
    text: "Imagine you're driving."
  },
  {
    kind: "paragraph",
    text: "You reach one destination."
  },
  {
    kind: "paragraph",
    text: "Google Maps automatically starts guiding you to the next destination."
  },
  {
    kind: "paragraph",
    text: "You don't manually choose the next road every time."
  },
  {
    kind: "paragraph",
    text: "Angular can automatically move users from one page to another based on application logic."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example 1"
  },
  {
    kind: "paragraph",
    text: "Employee Login"
  },
  {
    kind: "code",
    language: "text",
    code: "Login Page\n\n↓\n\nLogin API\n\n↓\n\nSuccess\n\n↓\n\nNavigate\n\n↓\n\nDashboard"
  },
  {
    kind: "paragraph",
    text: "Notice,"
  },
  {
    kind: "paragraph",
    text: "the user never clicked Dashboard."
  },
  {
    kind: "paragraph",
    text: "The application navigated automatically."
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example 2"
  },
  {
    kind: "paragraph",
    text: "Add Employee"
  },
  {
    kind: "paragraph",
    text: "Imagine HR adds a new employee."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n↓\n\nSave\n\n↓\n\nPOST API\n\n↓\n\nSuccess"
  },
  {
    kind: "paragraph",
    text: "Now what?"
  },
  {
    kind: "paragraph",
    text: "Should the user stay on the form?"
  },
  {
    kind: "paragraph",
    text: "Usually no."
  },
  {
    kind: "paragraph",
    text: "Angular automatically navigates to"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Form\n\n↓\n\nSave\n\n↓\n\nAPI Success\n\n↓\n\nNavigate\n\n↓\n\nEmployee List"
  },
  {
    kind: "heading",
    level: 2,
    text: "HRMS Example 3"
  },
  {
    kind: "paragraph",
    text: "Logout"
  },
  {
    kind: "paragraph",
    text: "Suppose the user clicks"
  },
  {
    kind: "code",
    language: "text",
    code: "Logout"
  },
  {
    kind: "paragraph",
    text: "The application"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Clears the session",
      "Removes the token",
      "Navigates to Login"
    ]
  },
  {
    kind: "code",
    language: "text",
    code: "Logout\n\n↓\n\nClear Session\n\n↓\n\nNavigate\n\n↓\n\nLogin"
  },
  {
    kind: "paragraph",
    text: "the application decides where to go."
  },
  {
    kind: "paragraph",
    text: "Transfer Money"
  },
  {
    kind: "paragraph",
    text: "Transfer Successful"
  },
  {
    kind: "paragraph",
    text: "Transaction History"
  },
  {
    kind: "heading",
    level: 3,
    text: "Shopping App"
  },
  {
    kind: "paragraph",
    text: "Checkout"
  },
  {
    kind: "paragraph",
    text: "Payment Success"
  },
  {
    kind: "paragraph",
    text: "Order Confirmation"
  },
  {
    kind: "heading",
    level: 3,
    text: "Food Delivery"
  },
  {
    kind: "paragraph",
    text: "Order Placed"
  },
  {
    kind: "paragraph",
    text: "Navigate"
  },
  {
    kind: "paragraph",
    text: "Track Order"
  },
  {
    kind: "heading",
    level: 3,
    text: "Student Portal"
  },
  {
    kind: "paragraph",
    text: "Exam Submitted"
  },
  {
    kind: "paragraph",
    text: "Result Page"
  },
  {
    kind: "heading",
    level: 2,
    text: "RouterLink vs Programmatic Navigation"
  },
  {
    kind: "table",
    headers: [
      "RouterLink",
      "Programmatic Navigation"
    ],
    rows: [
      [
        "User clicks a link or button.",
        "The application decides when to navigate."
      ],
      [
        "Used in HTML templates.",
        "Used in TypeScript code."
      ],
      [
        "Best for menus and navigation bars.",
        "Best after API calls, login, save, delete, or logout."
      ]
    ]
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should You Use Each?"
  },
  {
    kind: "heading",
    level: 3,
    text: "Use RouterLink"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Sidebar menu",
      "Top navigation",
      "Dashboard cards",
      "Settings menu",
      "Home button"
    ]
  },
  {
    kind: "paragraph",
    text: "The user chooses where to go."
  },
  {
    kind: "heading",
    level: 3,
    text: "Use Programmatic Navigation"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Login successful",
      "Logout",
      "Save employee",
      "Delete employee",
      "Registration complete",
      "Payment successful",
      "Form submitted"
    ]
  },
  {
    kind: "paragraph",
    text: "The application chooses where to go."
  },
  {
    kind: "code",
    language: "text",
    code: "User Action\n\n↓\n\nBusiness Logic\n\n↓\n\nAPI Call\n\n↓\n\nSuccess\n\n↓\n\nAngular Router\n\n↓\n\nNavigate to Next Page"
  },
  {
    kind: "paragraph",
    text: "✔ Programmatic Navigation is controlled by your TypeScript code."
  },
  {
    kind: "paragraph",
    text: "✔ It is commonly used after business operations such as login, save, delete, or logout."
  },
  {
    kind: "paragraph",
    text: "✔ Unlike `routerLink`, navigation happens automatically based on application logic."
  },
  {
    kind: "paragraph",
    text: "Now we know **how to navigate**."
  },
  {
    kind: "paragraph",
    text: "But what if we need to open a **specific employee**?"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/25"
  },
  {
    kind: "paragraph",
    text: "How does Angular know that **25** is the Employee ID?"
  },
  {
    kind: "paragraph",
    text: "That's what **Route Parameters** solve, and it's the next topic."
  },
  {
    kind: "quote",
    text: "**\"How do I open a specific employee instead of the entire employee list?\"**"
  },
  {
    kind: "paragraph",
    text: "This is where **Route Parameters** come in."
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application has 500 employees."
  },
  {
    kind: "paragraph",
    text: "When you click **John**, Angular should open John's details."
  },
  {
    kind: "paragraph",
    text: "When you click **Emma**, Angular should open Emma's details."
  },
  {
    kind: "paragraph",
    text: "When you click **David**, Angular should open David's details."
  },
  {
    kind: "paragraph",
    text: "How does Angular know which employee to display?"
  },
  {
    kind: "paragraph",
    text: "It uses **Route Parameters**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Route Parameters?"
  },
  {
    kind: "paragraph",
    text: "Imagine your Employee List."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List\n\nJohn\n\nEmma\n\nDavid\n\nMichael"
  },
  {
    kind: "paragraph",
    text: "Now you click **Emma**."
  },
  {
    kind: "paragraph",
    text: "Should Angular create a separate page for every employee?"
  },
  {
    kind: "paragraph",
    text: "Like this?"
  },
  {
    kind: "code",
    language: "text",
    code: "/emma\n\n/john\n\n/david\n\n/michael"
  },
  {
    kind: "paragraph",
    text: "Impossible!"
  },
  {
    kind: "paragraph",
    text: "What if your company has 10,000 employees?"
  },
  {
    kind: "paragraph",
    text: "You can't create 10,000 routes."
  },
  {
    kind: "paragraph",
    text: "Angular creates **one route**."
  },
  {
    kind: "paragraph",
    text: "The employee ID changes."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/101\n\n/employees/102\n\n/employees/103\n\n/employees/104"
  },
  {
    kind: "paragraph",
    text: "The last value is called a **Route Parameter**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like a House Number"
  },
  {
    kind: "paragraph",
    text: "Imagine you want to visit your friend."
  },
  {
    kind: "paragraph",
    text: "The street name is"
  },
  {
    kind: "code",
    language: "text",
    code: "MG Road"
  },
  {
    kind: "paragraph",
    text: "But many houses exist on the same street."
  },
  {
    kind: "paragraph",
    text: "How do you identify one house?"
  },
  {
    kind: "paragraph",
    text: "Using the house number."
  },
  {
    kind: "code",
    language: "text",
    code: "MG Road\n\nHouse 12\n\nHouse 18\n\nHouse 25"
  },
  {
    kind: "paragraph",
    text: "The road remains the same."
  },
  {
    kind: "paragraph",
    text: "Only the house number changes."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\n101\n\n102\n\n103"
  },
  {
    kind: "paragraph",
    text: "The route stays the same."
  },
  {
    kind: "paragraph",
    text: "Only the parameter changes."
  },
  {
    kind: "paragraph",
    text: "Suppose your Employee List contains"
  },
  {
    kind: "code",
    language: "text",
    code: "ID\n\n101\n\nJohn\n\n----------------\n\n102\n\nEmma\n\n----------------\n\n103\n\nDavid"
  },
  {
    kind: "paragraph",
    text: "The user clicks Emma."
  },
  {
    kind: "paragraph",
    text: "Angular navigates to"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/102"
  },
  {
    kind: "paragraph",
    text: "Now Angular understands"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Page\n\n↓\n\nEmployee ID = 102\n\n↓\n\nCall Employee Details API\n\n↓\n\nDisplay Emma's Details"
  },
  {
    kind: "paragraph",
    text: "Angular didn't hardcode Emma."
  },
  {
    kind: "paragraph",
    text: "It only used the Employee ID."
  },
  {
    kind: "code",
    language: "text",
    code: "User Clicks Employee\n\n↓\n\nURL Changes\n\n↓\n\n/employees/102\n\n↓\n\nAngular Reads ID\n\n↓\n\nCall API\n\n↓\n\nDisplay Employee Details"
  },
  {
    kind: "paragraph",
    text: "Click a product."
  },
  {
    kind: "code",
    language: "text",
    code: "/products/5678"
  },
  {
    kind: "paragraph",
    text: "The product ID tells Amazon which product to display."
  },
  {
    kind: "paragraph",
    text: "Open a video."
  },
  {
    kind: "code",
    language: "text",
    code: "/watch/abc123"
  },
  {
    kind: "paragraph",
    text: "The video ID identifies the correct video."
  },
  {
    kind: "paragraph",
    text: "Open an account."
  },
  {
    kind: "code",
    language: "text",
    code: "/accounts/10045"
  },
  {
    kind: "paragraph",
    text: "The account number identifies the account."
  },
  {
    kind: "heading",
    level: 3,
    text: "Hospital"
  },
  {
    kind: "paragraph",
    text: "Open a patient."
  },
  {
    kind: "code",
    language: "text",
    code: "/patients/876"
  },
  {
    kind: "paragraph",
    text: "The patient ID identifies the patient."
  },
  {
    kind: "code",
    language: "text",
    code: "/students/45"
  },
  {
    kind: "paragraph",
    text: "Angular loads Student 45."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Use IDs Instead of Names?"
  },
  {
    kind: "paragraph",
    text: "Imagine two employees."
  },
  {
    kind: "code",
    language: "text",
    code: "John\n\nJohn"
  },
  {
    kind: "paragraph",
    text: "Which one should Angular open?"
  },
  {
    kind: "paragraph",
    text: "It cannot know."
  },
  {
    kind: "paragraph",
    text: "Now imagine"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee ID\n\n101\n\nJohn\n\n----------------\n\nEmployee ID\n\n245\n\nJohn"
  },
  {
    kind: "paragraph",
    text: "Every employee has a unique ID."
  },
  {
    kind: "paragraph",
    text: "That's why applications usually use IDs as route parameters."
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Parameters vs Route Configuration"
  },
  {
    kind: "paragraph",
    text: "Many beginners confuse these."
  },
  {
    kind: "heading",
    level: 3,
    text: "Route Configuration"
  },
  {
    kind: "paragraph",
    text: "Tells Angular **which component** to load."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees\n\n↓\n\nEmployee List Component"
  },
  {
    kind: "heading",
    level: 3,
    text: "Route Parameter"
  },
  {
    kind: "paragraph",
    text: "Tells the component **which data** to load."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/102\n\n↓\n\nEmployee Details Component\n\n↓\n\nEmployee ID = 102"
  },
  {
    kind: "paragraph",
    text: "One decides **the page**."
  },
  {
    kind: "paragraph",
    text: "The other decides **the data shown on that page**."
  },
  {
    kind: "heading",
    level: 2,
    text: "Real HRMS Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee List\n\n↓\n\nClick Emma\n\n↓\n\n/employees/102\n\n↓\n\nAngular Router\n\n↓\n\nEmployee Details Component\n\n↓\n\nRead Employee ID\n\n↓\n\nCall Employee API\n\n↓\n\nDisplay Emma"
  },
  {
    kind: "heading",
    level: 2,
    text: "When Should We Use Route Parameters?"
  },
  {
    kind: "paragraph",
    text: "Use Route Parameters whenever you need to display **one specific resource**."
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Employee Details",
      "Student Details",
      "Product Details",
      "Customer Details",
      "Order Details",
      "Invoice Details",
      "Patient Details"
    ]
  },
  {
    kind: "paragraph",
    text: "✔ Route Parameters make one route reusable for many records."
  },
  {
    kind: "paragraph",
    text: "✔ They usually contain unique IDs."
  },
  {
    kind: "paragraph",
    text: "✔ The component reads the parameter and loads the corresponding data."
  },
  {
    kind: "paragraph",
    text: "✔ They avoid creating separate routes for every record."
  },
  {
    kind: "paragraph",
    text: "Now we can open a specific employee using:"
  },
  {
    kind: "paragraph",
    text: "But what if we don't want to identify a single record?"
  },
  {
    kind: "paragraph",
    text: "What if we want to **filter**, **search**, **sort**, or **paginate** the employee list?"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees?department=HR&page=2"
  },
  {
    kind: "paragraph",
    text: "This is where **Query Parameters** come in, and that's the next topic."
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'employees/:id',\n  component: EmployeeDetailsComponent\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Employee List"
  },
  {
    kind: "code",
    language: "html",
    code: "<button [routerLink]=\"['/employees', 102]\">\n  View Employee\n</button>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Employee Details Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { ActivatedRoute } from '@angular/router';\n\nconstructor(private route: ActivatedRoute) {}\n\nngOnInit() {\n  const id = this.route.snapshot.paramMap.get('id');\n  console.log(id); // 102\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Flow"
  },
  {
    kind: "code",
    language: "text",
    code: "Click Employee\n        ↓\n/employees/102\n        ↓\nAngular reads id = 102\n        ↓\nCall Employee API\n        ↓\nDisplay Employee Details"
  },
  {
    kind: "paragraph",
    text: "This is enough for beginners to understand **how Route Parameters work** without overwhelming them with code."
  },
  {
    kind: "paragraph",
    text: "If you mean **\"Where is the code that uses the `id` route parameter?\"**, here is the complete minimal example."
  },
  {
    kind: "heading",
    level: 3,
    text: "1. Route Configuration"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Routes } from '@angular/router';\nimport { EmployeeDetailsComponent } from './employee-details.component';\n\nexport const routes: Routes = [\n  {\n    path: 'employees/:id',\n    component: EmployeeDetailsComponent\n  }\n];"
  },
  {
    kind: "heading",
    level: 3,
    text: "2. Navigate with the Employee ID"
  },
  {
    kind: "code",
    language: "html",
    code: "<button [routerLink]=\"['/employees', employee.id]\">\n  View Details\n</button>"
  },
  {
    kind: "paragraph",
    text: "If `employee.id` is **102**, Angular navigates to:"
  },
  {
    kind: "heading",
    level: 3,
    text: "3. Read the ID in the Employee Details Component"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { Component, OnInit } from '@angular/core';\nimport { ActivatedRoute } from '@angular/router';\n\n@Component({\n  selector: 'app-employee-details',\n  templateUrl: './employee-details.html'\n})\nexport class EmployeeDetailsComponent implements OnInit {\n\n  employeeId: string | null = null;\n\n  constructor(private route: ActivatedRoute) {}\n\n  ngOnInit(): void {\n    this.employeeId = this.route.snapshot.paramMap.get('id');\n\n    console.log(this.employeeId); // 102\n  }\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "4. Use the ID to Call the API"
  },
  {
    kind: "code",
    language: "ts",
    code: "ngOnInit(): void {\n\n  this.employeeId = this.route.snapshot.paramMap.get('id');\n\n  if (this.employeeId) {\n    this.employeeService.getEmployeeById(this.employeeId)\n      .subscribe(employee => {\n        console.log(employee);\n      });\n  }\n\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "Click \"View Details\"\n        ↓\n/employees/102\n        ↓\nRead id = 102\n        ↓\nCall getEmployeeById(102)\n        ↓\nDisplay Employee Details"
  },
  {
    kind: "paragraph",
    text: "This is the practical pattern you'll use in almost every Angular application."
  },
  {
    kind: "paragraph",
    text: "We learned that **Route Parameters** identify **one specific resource**."
  },
  {
    kind: "paragraph",
    text: "Here,"
  },
  {
    kind: "paragraph",
    text: "**102** tells Angular **which employee** to display."
  },
  {
    kind: "paragraph",
    text: "But what if we don't want one employee?"
  },
  {
    kind: "paragraph",
    text: "What if we want to display **many employees**, but only those matching certain conditions?"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "HR department employees",
      "Active employees",
      "Page 2 of the employee list",
      "Employees sorted by name"
    ]
  },
  {
    kind: "paragraph",
    text: "Should we create routes like these?"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/hr\n\n/employees/active\n\n/employees/page2\n\n/employees/sortbyname"
  },
  {
    kind: "paragraph",
    text: "The number of combinations would become endless."
  },
  {
    kind: "paragraph",
    text: "Angular solves this using **Query Parameters**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Query Parameters?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS Employee List."
  },
  {
    kind: "paragraph",
    text: "There are 5,000 employees."
  },
  {
    kind: "paragraph",
    text: "The user wants to see only HR employees."
  },
  {
    kind: "paragraph",
    text: "Now another user wants IT employees."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees?department=IT"
  },
  {
    kind: "paragraph",
    text: "The page didn't change."
  },
  {
    kind: "paragraph",
    text: "It is still"
  },
  {
    kind: "paragraph",
    text: "Only the filter changed."
  },
  {
    kind: "paragraph",
    text: "That's exactly what Query Parameters are for."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like Online Shopping"
  },
  {
    kind: "paragraph",
    text: "Imagine you're shopping on Amazon."
  },
  {
    kind: "paragraph",
    text: "You search for shoes."
  },
  {
    kind: "paragraph",
    text: "Then you choose:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Brand = Nike",
      "Size = 9",
      "Price < ₹5,000"
    ]
  },
  {
    kind: "paragraph",
    text: "Did Amazon open a completely different page?"
  },
  {
    kind: "paragraph",
    text: "The product list remains the same."
  },
  {
    kind: "paragraph",
    text: "Only the filters change."
  },
  {
    kind: "paragraph",
    text: "Angular Query Parameters work exactly like these filters."
  },
  {
    kind: "paragraph",
    text: "Imagine this Employee List."
  },
  {
    kind: "code",
    language: "text",
    code: "John      HR\n\nEmma      IT\n\nDavid     HR\n\nAlex      Finance"
  },
  {
    kind: "paragraph",
    text: "You choose"
  },
  {
    kind: "paragraph",
    text: "Department = HR"
  },
  {
    kind: "paragraph",
    text: "Angular now knows"
  },
  {
    kind: "code",
    language: "text",
    code: "Open Employee List\n\n↓\n\nApply Department Filter\n\n↓\n\nShow HR Employees Only"
  },
  {
    kind: "heading",
    level: 2,
    text: "Another Example"
  },
  {
    kind: "paragraph",
    text: "Suppose your application supports pagination."
  },
  {
    kind: "paragraph",
    text: "Page 1"
  },
  {
    kind: "paragraph",
    text: "Now the user clicks"
  },
  {
    kind: "paragraph",
    text: "Next Page"
  },
  {
    kind: "paragraph",
    text: "Angular still displays the Employee List."
  },
  {
    kind: "paragraph",
    text: "Only the page number changes."
  },
  {
    kind: "heading",
    level: 2,
    text: "Multiple Query Parameters"
  },
  {
    kind: "paragraph",
    text: "Sometimes we need more than one filter."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees?department=HR&page=2&sort=name"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "department = HR",
      "page = 2",
      "sort = name"
    ]
  },
  {
    kind: "paragraph",
    text: "The page is still the Employee List."
  },
  {
    kind: "paragraph",
    text: "Only the options have changed."
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Parameters vs Query Parameters"
  },
  {
    kind: "table",
    headers: [
      "Route Parameters",
      "Query Parameters"
    ],
    rows: [
      [
        "Identify one specific resource.",
        "Filter or customize a page."
      ],
      [
        "Usually part of the URL path.",
        "Added after `?` in the URL."
      ],
      [
        "Example: `/employees/102`",
        "Example: `/employees?department=HR`"
      ]
    ]
  },
  {
    kind: "paragraph",
    text: "Think of it this way:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "**Route Parameter** answers: **\"Which employee?\"**",
      "**Query Parameter** answers: **\"How should I display the employee list?\"**"
    ]
  },
  {
    kind: "code",
    language: "text",
    code: "/products?brand=Nike"
  },
  {
    kind: "code",
    language: "text",
    code: "/search?query=Angular"
  },
  {
    kind: "code",
    language: "text",
    code: "/transactions?month=June"
  },
  {
    kind: "code",
    language: "text",
    code: "/students?class=10"
  },
  {
    kind: "heading",
    level: 2,
    text: "Short Code Example"
  },
  {
    kind: "heading",
    level: 3,
    text: "Navigate with Query Parameters"
  },
  {
    kind: "code",
    language: "html",
    code: "<button\n  [routerLink]=\"['/employees']\"\n  [queryParams]=\"{ department: 'HR', page: 2 }\">\n  HR Employees\n</button>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Read Query Parameters"
  },
  {
    kind: "code",
    language: "ts",
    code: "import { ActivatedRoute } from '@angular/router';\n\nconstructor(private route: ActivatedRoute) {}\n\nngOnInit() {\n  const department = this.route.snapshot.queryParamMap.get('department');\n  const page = this.route.snapshot.queryParamMap.get('page');\n\n  console.log(department); // HR\n  console.log(page); // 2\n}"
  },
  {
    kind: "code",
    language: "text",
    code: "User Selects Filter\n\n↓\n\nURL Updates\n\n↓\n\n/employees?department=HR&page=2\n\n↓\n\nAngular Reads Query Parameters\n\n↓\n\nCall API with Filters\n\n↓\n\nDisplay Filtered Employees"
  },
  {
    kind: "paragraph",
    text: "✔ Query Parameters provide **optional information** about a page."
  },
  {
    kind: "paragraph",
    text: "✔ They are commonly used for filtering, searching, sorting, and pagination."
  },
  {
    kind: "paragraph",
    text: "✔ They do **not** identify a specific record—that's the job of Route Parameters."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Next Topic"
  },
  {
    kind: "paragraph",
    text: "Now we know how to:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Navigate between pages.",
      "Open a specific employee.",
      "Filter and search using Query Parameters."
    ]
  },
  {
    kind: "paragraph",
    text: "The next topic is **Child Routes**, where we'll learn how to organize related pages like:"
  },
  {
    kind: "code",
    language: "text",
    code: "Employees\n    ↓\n    Profile\n    Attendance\n    Leave\n    Documents"
  },
  {
    kind: "paragraph",
    text: "using Angular's nested routing."
  },
  {
    kind: "paragraph",
    text: "This topic is usually confusing at first, so let's start with **why** we need them before looking at code."
  },
  {
    kind: "paragraph",
    text: "You have an **Employee** module."
  },
  {
    kind: "paragraph",
    text: "Inside Employee, there are several related pages."
  },
  {
    kind: "code",
    language: "text",
    code: "Employees\n\n↓\n\nProfile\n\nAttendance\n\nLeave\n\nDocuments\n\nSalary"
  },
  {
    kind: "paragraph",
    text: "Should these be completely separate pages?"
  },
  {
    kind: "paragraph",
    text: "They all belong to the same employee."
  },
  {
    kind: "paragraph",
    text: "Angular groups these related pages using **Child Routes**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need Child Routes?"
  },
  {
    kind: "paragraph",
    text: "Imagine you open an employee."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee\n\n↓\n\nJohn"
  },
  {
    kind: "paragraph",
    text: "Now you want to see"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Profile",
      "Attendance",
      "Leave",
      "Documents"
    ]
  },
  {
    kind: "paragraph",
    text: "Should the URL become"
  },
  {
    kind: "code",
    language: "text",
    code: "/profile\n\n/attendance\n\n/leave\n\n/documents"
  },
  {
    kind: "paragraph",
    text: "Because these pages belong to **John's Employee Details**."
  },
  {
    kind: "paragraph",
    text: "Instead, Angular organizes them like this."
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/101/profile\n\n/employees/101/attendance\n\n/employees/101/leave\n\n/employees/101/documents"
  },
  {
    kind: "paragraph",
    text: "The employee stays the same."
  },
  {
    kind: "paragraph",
    text: "Only the section changes."
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like a Folder"
  },
  {
    kind: "paragraph",
    text: "Imagine your computer."
  },
  {
    kind: "code",
    language: "text",
    code: "Employees\n│\n├── Profile\n├── Attendance\n├── Leave\n├── Documents\n└── Salary"
  },
  {
    kind: "paragraph",
    text: "The files belong to one folder."
  },
  {
    kind: "paragraph",
    text: "Employee is the parent."
  },
  {
    kind: "paragraph",
    text: "Profile,"
  },
  {
    kind: "paragraph",
    text: "Attendance,"
  },
  {
    kind: "paragraph",
    text: "Leave,"
  },
  {
    kind: "paragraph",
    text: "Documents"
  },
  {
    kind: "paragraph",
    text: "are children."
  },
  {
    kind: "paragraph",
    text: "Hence the name"
  },
  {
    kind: "paragraph",
    text: "**Child Routes**."
  },
  {
    kind: "paragraph",
    text: "Suppose you open"
  },
  {
    kind: "code",
    language: "text",
    code: "Employee\n\n↓\n\nEmma"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/102/profile"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/102/attendance"
  },
  {
    kind: "paragraph",
    text: "Now Angular changes only the child content."
  },
  {
    kind: "paragraph",
    text: "The Employee page remains open."
  },
  {
    kind: "code",
    language: "text",
    code: "Employee Details\n\n↓\n\nChild Navigation\n\n↓\n\nProfile\n\nAttendance\n\nLeave\n\nDocuments\n\n↓\n\nOnly Child Content Changes"
  },
  {
    kind: "code",
    language: "text",
    code: "Inbox\n│\n├── Primary\n├── Promotions\n├── Social"
  },
  {
    kind: "paragraph",
    text: "Inbox is the parent."
  },
  {
    kind: "paragraph",
    text: "The tabs are child pages."
  },
  {
    kind: "code",
    language: "text",
    code: "Product\n\n│\n\n├── Description\n\n├── Reviews\n\n├── Specifications\n\n└── Questions"
  },
  {
    kind: "paragraph",
    text: "The product page remains."
  },
  {
    kind: "paragraph",
    text: "Only the selected tab changes."
  },
  {
    kind: "code",
    language: "text",
    code: "Student\n\n│\n\n├── Profile\n\n├── Attendance\n\n├── Marks\n\n└── Certificates"
  },
  {
    kind: "code",
    language: "text",
    code: "Account\n\n│\n\n├── Transactions\n\n├── Statements\n\n├── Loans\n\n└── Cards"
  },
  {
    kind: "heading",
    level: 2,
    text: "Route Structure"
  },
  {
    kind: "code",
    language: "text",
    code: "Parent Route\n\n↓\n\nEmployee Details\n\n↓\n\nChild Routes\n\n↓\n\nProfile\n\nAttendance\n\nLeave\n\nDocuments"
  },
  {
    kind: "heading",
    level: 3,
    text: "Parent Route"
  },
  {
    kind: "code",
    language: "ts",
    code: "{\n  path: 'employees/:id',\n  component: EmployeeComponent,\n  children: [\n    {\n      path: 'profile',\n      component: EmployeeProfileComponent\n    },\n    {\n      path: 'attendance',\n      component: EmployeeAttendanceComponent\n    }\n  ]\n}"
  },
  {
    kind: "heading",
    level: 3,
    text: "Navigate to a Child Route"
  },
  {
    kind: "code",
    language: "html",
    code: "<a [routerLink]=\"['profile']\">Profile</a>\n\n<a [routerLink]=\"['attendance']\">Attendance</a>"
  },
  {
    kind: "heading",
    level: 3,
    text: "Result"
  },
  {
    kind: "code",
    language: "text",
    code: "/employees/102/profile\n\n/employees/102/attendance"
  },
  {
    kind: "heading",
    level: 2,
    text: "Parent Layout"
  },
  {
    kind: "paragraph",
    text: "Imagine the Employee page layout."
  },
  {
    kind: "code",
    language: "text",
    code: "--------------------------------\n\nEmployee Information\n\n--------------------------------\n\nProfile | Attendance | Leave\n\n--------------------------------\n\nChild Router Outlet\n\n↓\n\nProfile Page\n\n--------------------------------"
  },
  {
    kind: "paragraph",
    text: "When you click **Attendance**,"
  },
  {
    kind: "paragraph",
    text: "only the **Child Router Outlet** changes."
  },
  {
    kind: "paragraph",
    text: "The Employee information at the top stays exactly the same."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why are Child Routes Useful?"
  },
  {
    kind: "paragraph",
    text: "Without Child Routes:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "You repeat the Employee layout on every page.",
      "Navigation becomes harder to manage.",
      "Duplicate code increases."
    ]
  },
  {
    kind: "paragraph",
    text: "With Child Routes:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Parent layout is reused.",
      "Only the child section changes.",
      "Better organization.",
      "Easier maintenance."
    ]
  },
  {
    kind: "paragraph",
    text: "✔ Child Routes are nested inside a parent route."
  },
  {
    kind: "paragraph",
    text: "✔ They are used for pages that belong together."
  },
  {
    kind: "paragraph",
    text: "✔ The parent page remains visible while only the child content changes."
  },
  {
    kind: "paragraph",
    text: "✔ They help organize large applications and avoid duplicating layouts."
  },
  {
    kind: "paragraph",
    text: "Now we know how to organize related pages."
  },
  {
    kind: "quote",
    text: "**\"What happens if a user types a URL that doesn't exist, like `/abcxyz`?\"**"
  },
  {
    kind: "paragraph",
    text: "That's where **Wildcard Routes (404 Page)** come in, and it's the next topic."
  },
  {
    kind: "heading",
    level: 2,
    text: "📘 Wildcard Routes (404 Page)"
  },
  {
    kind: "paragraph",
    text: "Imagine someone types this URL in your HRMS application."
  },
  {
    kind: "code",
    language: "text id=\"4q4b5j\"",
    code: "/employees"
  },
  {
    kind: "paragraph",
    text: "Everything works correctly."
  },
  {
    kind: "paragraph",
    text: "Now imagine they type"
  },
  {
    kind: "code",
    language: "text id=\"hkwjgf\"",
    code: "/abcdxyz"
  },
  {
    kind: "code",
    language: "text id=\"wz7dhi\"",
    code: "/employee123"
  },
  {
    kind: "paragraph",
    text: "These pages don't exist."
  },
  {
    kind: "paragraph",
    text: "What should Angular do?"
  },
  {
    kind: "paragraph",
    text: "Should it crash?"
  },
  {
    kind: "paragraph",
    text: "Should it display a blank page?"
  },
  {
    kind: "paragraph",
    text: "Should it show an error?"
  },
  {
    kind: "paragraph",
    text: "Instead, Angular displays a **404 - Page Not Found** page."
  },
  {
    kind: "paragraph",
    text: "This is achieved using a **Wildcard Route**."
  },
  {
    kind: "heading",
    level: 2,
    text: "🤔 Why do we need a Wildcard Route?"
  },
  {
    kind: "paragraph",
    text: "Imagine your HRMS application has only these pages."
  },
  {
    kind: "code",
    language: "text id=\"7h1l4d\"",
    code: "/dashboard\n\n/employees\n\n/payroll\n\n/attendance\n\n/settings"
  },
  {
    kind: "paragraph",
    text: "Now the user enters"
  },
  {
    kind: "code",
    language: "text id=\"u2s0ps\"",
    code: "/holiday"
  },
  {
    kind: "paragraph",
    text: "Angular searches the Route Configuration."
  },
  {
    kind: "code",
    language: "text id=\"xwkdy7\"",
    code: "/holiday\n\n↓\n\nSearch Routes\n\n↓\n\nNot Found"
  },
  {
    kind: "paragraph",
    text: "Without a Wildcard Route,"
  },
  {
    kind: "paragraph",
    text: "Angular wouldn't know what to display."
  },
  {
    kind: "paragraph",
    text: "The user might see a blank screen or an unexpected error."
  },
  {
    kind: "paragraph",
    text: "The Wildcard Route tells Angular,"
  },
  {
    kind: "quote",
    text: "\"If no route matches, show the 404 page.\""
  },
  {
    kind: "heading",
    level: 2,
    text: "Think of it Like Visiting an Unknown Address"
  },
  {
    kind: "paragraph",
    text: "Imagine you type an address into Google Maps."
  },
  {
    kind: "code",
    language: "text id=\"ovqf5u\"",
    code: "XYZ Street,\nMoon City"
  },
  {
    kind: "paragraph",
    text: "Google Maps cannot find it."
  },
  {
    kind: "paragraph",
    text: "Instead of crashing,"
  },
  {
    kind: "paragraph",
    text: "it says"
  },
  {
    kind: "code",
    language: "text id=\"kjxflx\"",
    code: "Location Not Found"
  },
  {
    kind: "paragraph",
    text: "Angular behaves similarly."
  },
  {
    kind: "paragraph",
    text: "If the requested page doesn't exist,"
  },
  {
    kind: "paragraph",
    text: "it shows"
  },
  {
    kind: "code",
    language: "text id=\"tjlwmx\"",
    code: "404\n\nPage Not Found"
  },
  {
    kind: "paragraph",
    text: "Suppose your application supports:"
  },
  {
    kind: "code",
    language: "text id=\"g9mg8y\"",
    code: "/dashboard\n\n/employees\n\n/payroll"
  },
  {
    kind: "paragraph",
    text: "The user types"
  },
  {
    kind: "code",
    language: "text id=\"yt5tna\"",
    code: "/salary-report"
  },
  {
    kind: "paragraph",
    text: "Angular checks."
  },
  {
    kind: "code",
    language: "text id=\"l1s1ul\"",
    code: "/salary-report\n\n↓\n\nNo Matching Route\n\n↓\n\nWildcard Route\n\n↓\n\n404 Component"
  },
  {
    kind: "paragraph",
    text: "Now the user clearly understands that the page doesn't exist."
  },
  {
    kind: "code",
    language: "text id=\"znzmjf\"",
    code: "User Types URL\n\n↓\n\nAngular Router\n\n↓\n\nSearch Route Configuration\n\n↓\n\nNo Match\n\n↓\n\nWildcard Route\n\n↓\n\n404 Page"
  },
  {
    kind: "paragraph",
    text: "Invalid product URL"
  },
  {
    kind: "paragraph",
    text: "Product Not Found"
  },
  {
    kind: "paragraph",
    text: "Deleted video"
  },
  {
    kind: "paragraph",
    text: "Video Unavailable"
  },
  {
    kind: "paragraph",
    text: "Invalid account page"
  },
  {
    kind: "paragraph",
    text: "Page Not Found"
  },
  {
    kind: "paragraph",
    text: "Wrong student URL"
  },
  {
    kind: "paragraph",
    text: "404 Page"
  },
  {
    kind: "paragraph",
    text: "Wrong employee URL"
  },
  {
    kind: "heading",
    level: 3,
    text: "Wildcard Route"
  },
  {
    kind: "code",
    language: "ts id=\"zwzr8o\"",
    code: "{\n  path: '**',\n  component: PageNotFoundComponent\n}"
  },
  {
    kind: "paragraph",
    text: "The `**` means:"
  },
  {
    kind: "quote",
    text: "Match **any URL** that doesn't match another route."
  },
  {
    kind: "heading",
    level: 2,
    text: "Why Should It Be Last?"
  },
  {
    kind: "paragraph",
    text: "Angular checks routes from top to bottom."
  },
  {
    kind: "paragraph",
    text: "Imagine this order:"
  },
  {
    kind: "code",
    language: "text id=\"gqpp0w\"",
    code: "/dashboard\n\n/employees\n\n/payroll\n\n**"
  },
  {
    kind: "paragraph",
    text: "Angular first checks:"
  },
  {
    kind: "list",
    ordered: false,
    items: [
      "Dashboard?",
      "Employees?",
      "Payroll?"
    ]
  },
  {
    kind: "paragraph",
    text: "If none match,"
  },
  {
    kind: "paragraph",
    text: "then it reaches"
  },
  {
    kind: "code",
    language: "text id=\"iw0i2x\"",
    code: "**"
  },
  {
    kind: "paragraph",
    text: "and displays the 404 page."
  },
  {
    kind: "paragraph",
    text: "If you put the Wildcard Route at the top,"
  },
  {
    kind: "code",
    language: "text id=\"tebsm2\"",
    code: "**\n\n/dashboard\n\n/employees"
  },
  {
    kind: "paragraph",
    text: "then every URL would match `**` immediately."
  },
  {
    kind: "paragraph",
    text: "Your application would always show the 404 page."
  },
  {
    kind: "paragraph",
    text: "That's why the Wildcard Route should always be the **last route**."
  },
  {
    kind: "paragraph",
    text: "✔ Wildcard Routes handle unknown or invalid URLs."
  },
  {
    kind: "paragraph",
    text: "✔ They are commonly used to display a **404 - Page Not Found** page."
  },
  {
    kind: "paragraph",
    text: "✔ The path `**` matches any unmatched URL."
  },
  {
    kind: "paragraph",
    text: "✔ Always place the Wildcard Route at the end of your route configuration."
  },
  {
    kind: "heading",
    level: 2,
    text: "📌 Routing Recap"
  },
  {
    kind: "paragraph",
    text: "At this point, you've learned the complete routing flow:"
  },
  {
    kind: "code",
    language: "text id=\"r3u10m\"",
    code: "User Clicks Link\n\n↓\n\nRouterLink\nor\nProgrammatic Navigation\n\n↓\n\nURL Changes\n\n↓\n\nAngular Router\n\n↓\n\nRoute Configuration\n\n↓\n\nMatching Route Found\n\n↓\n\nRouter Outlet\n\n↓\n\nComponent Displayed"
  },
  {
    kind: "paragraph",
    text: "If no route matches:"
  },
  {
    kind: "code",
    language: "text id=\"1pc54g\"",
    code: "URL\n\n↓\n\nNo Match\n\n↓\n\nWildcard Route\n\n↓\n\n404 Page"
  }
];
