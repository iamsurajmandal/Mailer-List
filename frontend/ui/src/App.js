import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Register from './Pages/RegisterPage/Register'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}>
        </Route>
        </Switch>
        <Route  exact path="/register" component={Register}>
        </Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
