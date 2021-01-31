import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Bird from './components/Bird';
import BirdNav from './components/BirdNav';
import Header from './components/Header';

function App() {   
  return (
      <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>         
          <Route component={BirdNav} path="/:group" />
        </Switch>        
        <Bird />            
      </div>
      </BrowserRouter> 
  );
}

export default App;
