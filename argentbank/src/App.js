import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './layout'
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path='/'><HomePage /></Route>
            <Route exact path='/login'></Route>
            <Route exact path='/profile'></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
