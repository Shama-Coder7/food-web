import Contact from './components/Contact';
import Discover from './components/Discover';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Product from './components/Product';
import './Style/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      
      <Product />
      <Discover />
      <Contact />
    </div>
  );
}

export default App;
