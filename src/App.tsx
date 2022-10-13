import './App.css';
import FilterArticles from './components/FilterArticles/FilterArticles';
import Header from './components/Header/Header';
import CategoryNavigation from './components/Navigation/CategoryNavigation';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  const client = new QueryClient();
  return (
    <div className="App px-72">
      <QueryClientProvider client={client}>
        <Navigation />
        <Header />
        <CategoryNavigation />
        <Routes >
         <Route path='/' element ={
            <>
              <FilterArticles />
              <Products />
            </>
            
           } />
          <Route path='*' element ={<PageNotFound />} />
        </Routes>
        
        
      </QueryClientProvider>
     
    </div>
    
    
  );
}

export default App;
