import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./components/Error";

import Main from "./components/Main";
import Todo from "./components/Todo";

const CreateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/todo" component={Todo} />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
};

export default CreateRoutes;
