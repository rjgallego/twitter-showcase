import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PageLayout from './pages/PageLayout';

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
