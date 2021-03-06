import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import Members from './components/Members/Members';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/members' exact component={Members} />
            <Route path='/videos' exact component={Videos} />
          </Switch>
          <Footer />
        </Router>
      </div>
    
  );
}

export default App;
