import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
const home = React.lazy(() => import("./components/Pages/home"));
const about = React.lazy(() => import("./components/Pages/about"));
const mission = React.lazy(() => import("./components/Pages/mission"));
const team = React.lazy(() => import("./components/Pages/team"));
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
