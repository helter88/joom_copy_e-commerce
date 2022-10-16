import './App.css';
import Header from './components/header/Header';
import CategoryNavigation from './components/navigation/CategoryNavigation';
import Navigation from './components/navigation/Navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Products from './components/products';


const App = () => {
  const client = new QueryClient();
  return (
    <div className="App px-72">
      <QueryClientProvider client={client}>
        <Navigation />
        <Header />
        <CategoryNavigation />
        <Routes >
          <Route path='/' element ={<Products />} />
          <Route path='*' element ={<PageNotFound />} />
        </Routes>
        
        
      </QueryClientProvider>
     
    </div>
    
    
  );
}

export default App;
