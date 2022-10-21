import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
const home = React.lazy(() => import("./components/Pages/home"));
const about = React.lazy(() => import("./components/Pages/about"));
const options = React.lazy(() => import("./components/Pages/options"));
const mission = React.lazy(() => import("./components/Pages/mission"));
const team = React.lazy(() => import("./components/Pages/team"));
const user = React.lazy(() => import("./components/Pages/user"));
const admin = React.lazy(() => import("./components/Pages/admin"));
const usersignup = React.lazy(() => import("./components/Pages/usersignup"));
const Navbarmenu = React.lazy(() => import("./components/Menu/Navbarmenu"));
const NotFound = React.lazy(() => import("./components/Pages/NotFound"));
const blogs = React.lazy(() => import("./components/Pages/blogs"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <Router basename="/">
        <Suspense fallback="Loading...">
          <Navbarmenu />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/mission" component={mission} />
            <Route path="/team" component={team} />
            <Route path="/blogs" component={blogs} />
            <Route path="/options" component={options} />
            <Route path="/option/user/login" component={user} />
            <Route path="/option/admin" component={admin} />
            <Route path="/option/user/signup" component={usersignup} />
            <Route path="*">
              {" "}
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
