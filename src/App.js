import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Bird from './components/Bird';
import BirdNav from './components/BirdNav';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route component={BirdNav} path="/" exact />
        </Switch>
        <Bird />            
      </div>
    </BrowserRouter>
    
  );
}

export default App;
