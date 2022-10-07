import './App.css';
import FilterArticles from './components/FilterArticles/FilterArticles';
import Header from './components/Header/Header';
import CategoryNavigation from './components/Navigation/CategoryNavigation';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <div className="App px-72">
      <QueryClientProvider client={client}>
         <Navigation />
        <Header />
        <CategoryNavigation />
        <FilterArticles />
        <Products />
      </QueryClientProvider>
     
    </div>
  );
}

export default App;
