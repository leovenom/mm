import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Privacidade from './pages/privacidade';
import Uso from './pages/uso';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={SigninPage} exact/>
        <Route path='/privacidade' component={Privacidade} exact/>
        <Route path='/uso' component={Uso} exact />
      </Switch>
    </Router>
  );
}

export default App;
