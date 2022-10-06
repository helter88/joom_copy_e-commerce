import './App.css';
import FilterArticles from './components/FilterArticles/FilterArticles';
import Header from './components/Header/Header';
import CategoryNavigation from './components/Navigation/CategoryNavigation';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App px-72">
      <Navigation />
      <Header />
      <CategoryNavigation />
      <FilterArticles />
      <Products />
    </div>
  );
}

export default App;
