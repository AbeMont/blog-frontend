import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStore } from './GlobalStore/GlobalStore';

// Pages
import Home from './pages/Home/Home';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import EditArticle from './pages/EditArticle/EditArticle';
import CreateArticle from './pages/CreateArticle/CreateArticle';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
        
      <GlobalStore>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/article/:id" exact component={Article}/>
          <Route path="/articles" exact component={Articles}/>
          <Route path="/create-article" component={CreateArticle} exact/>
          <Route path="/edit-article/:id" component={EditArticle} exact/>
        </Switch>
      </GlobalStore>
       
    </Router>
  );
}

export default App;
