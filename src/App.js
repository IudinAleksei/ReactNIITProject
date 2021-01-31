import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Bird from './components/Bird';
import BirdNav from './components/BirdNav';

import Header from './components/Header';
import navHOC from './hoc/navHOC';


function App() {  
  return (
      <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>         
          <Route component={navHOC} path="/:group" />
        </Switch>
        <BirdNav />
        <Bird />            
      </div>
      </BrowserRouter> 
  );
}

export default App;
