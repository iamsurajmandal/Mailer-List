import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Register from './Pages/RegisterPage/Register'
import Pixel from './Pages/Pixel/Pixel'

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
        <Route  exact path="/pixel" component={Pixel}>
        </Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
