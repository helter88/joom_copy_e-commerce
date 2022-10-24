import './app.css';
import Header from './components/header/header';
import CategoryNavigation from './components/navigation/category-navigation';
import Navigation from './components/navigation/navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
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
