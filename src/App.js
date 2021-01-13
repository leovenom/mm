import './App.css';
import {BrowserRouter as Router, Switch, Route, HashRouter } from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Privacidade from './pages/privacidade';
import Uso from './pages/uso';

function App() {
  return (
    <Router history={HashRouter}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={SigninPage}/>
        <Route path='/privacidade' component={Privacidade} />
        <Route path='/uso' component={Uso}/>
      </Switch>
    </Router>
  );
}

export default App;
