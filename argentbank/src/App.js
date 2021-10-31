import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from './components'
import { HomePage, Login, UserPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Layout Component={ HomePage } />
          </Route>
          <Route exact path='/login'>
            <Layout Component={ Login } />
          </Route>
          <Route exact path='/profile'>
            <Layout Component={ UserPage } />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
