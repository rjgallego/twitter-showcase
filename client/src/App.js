import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import SearchPage from './components/SearchPage/SearchPage';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <PageLayout>
          <Route exact path="/" component={HomePage}/>
          <Route path="/search" component={SearchPage} />
          <Route path="/discover" component={DiscoverPage} />
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
