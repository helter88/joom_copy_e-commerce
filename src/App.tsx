import './App.css';
import Header from './components/Header/Header';
import CategoryNavigation from './components/Navigation/CategoryNavigation';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App px-72">
      <Navigation />
      <Header />
      <CategoryNavigation />
    </div>
  );
}

export default App;
