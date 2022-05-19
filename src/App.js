import NavBar from './components/NavBar';
import Product from './components/Product/Product'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <NavBar />
      </header>
       
            <Product />
        
    </div>
  );
}

export default App;
