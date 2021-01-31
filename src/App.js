import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Bird from './components/Bird';
import BirdNav from './components/BirdNav';
import Header from './components/Header';


function App() {

  const titles = ['sea', 'forest'];
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route render={() => <BirdNav titles={[]} />} path="/" exact />
          <Route render={() => <BirdNav titles={titles} />} path="/sea" />
        </Switch>
        <Bird />            
      </div>
    </BrowserRouter>
    
  );
}

export default App;
