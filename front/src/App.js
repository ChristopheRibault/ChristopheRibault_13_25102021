import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components';
import { HomePage, Login, UserPage } from './pages';
import store from './utils/store';
import * as loginActions from './features/login';

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    // getItems returns 'null' as string when no token is set
    if (token && token !== 'null')
      store.dispatch(loginActions.setToken({ token }));
  }, []);

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
