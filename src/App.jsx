import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/services">Services</Link>
      </nav> */}

      <Routes>
        <Route path="/" index element={<Navigate to="services" replace />} />
        <Route path="about" element={<About />} />

        {/* Parent Route */}
        <Route path="services" element={<Services />}>
          {/* Default Redirect to Web Development */}
          <Route index element={<Navigate to="web-development" replace />} />

          {/* Web Development Nested Route */}
          <Route path="web-development" element={<WebDevelopment />}>
            <Route index element={<Navigate to="frontend" replace />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
          </Route>

          {/* App Development Nested Route */}
          <Route path="app-development" element={<AppDevelopment />}>
            <Route index element={<Navigate to="ios" replace />} />
            <Route path="ios" element={<IOSDevelopment />} />
            <Route path="android" element={<AndroidDevelopment />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <nav>
        <Link to="web-development">Web Development</Link> |{" "}
        <Link to="app-development">App Development</Link>
      </nav>
      <Outlet /> {/* Second-level child routes render here */}
    </div>
  );
}

// Second-Level Route: Web Development
function WebDevelopment() {
  return (
    <div>
      <h2>Web Development</h2>
      <nav>
        <Link to="frontend">Frontend</Link> | <Link to="backend">Backend</Link>
      </nav>

      <table
        border="1"
        width="50%"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Section</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <Outlet /> {/* Third-level routes render here */}
        </tbody>
      </table>
    </div>
  );
}

// Second-Level Route: App Development
function AppDevelopment() {
  return (
    <div>
      <h2>App Development</h2>
      <nav>
        <Link to="ios">iOS Development</Link> |{" "}
        <Link to="android">Android Development</Link>
      </nav>

      <table
        border="1"
        width="50%"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Platform</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <Outlet /> {/* Third-level routes render here */}
        </tbody>
      </table>
    </div>
  );
}

// Third-Level Routes for Web Development
function Frontend() {
  return (
    <tr>
      <td>Frontend Development</td>
      <td>
        We build responsive and interactive UIs with React, Angular, and Vue.
      </td>
    </tr>
  );
}

function Backend() {
  return (
    <tr>
      <td>Backend Development</td>
      <td>
        We develop scalable server-side solutions using Node.js, Python, and
        Java.
      </td>
    </tr>
  );
}

// Third-Level Routes for App Development
function IOSDevelopment() {
  return (
    <tr>
      <td>iOS Development</td>
      <td>We create native iOS applications using Swift and Objective-C.</td>
    </tr>
  );
}

function AndroidDevelopment() {
  return (
    <tr>
      <td>Android Development</td>
      <td>We develop native Android apps using Kotlin and Java.</td>
    </tr>
  );
}

export default App;
