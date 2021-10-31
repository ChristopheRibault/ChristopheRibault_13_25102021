import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer, Header } from './layout'
import { HomePage, Login, UserPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path='/'><HomePage /></Route>
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/profile'><UserPage /></Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
