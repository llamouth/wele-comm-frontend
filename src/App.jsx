import './App.css';

// Components
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {/* Add main content here */}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Wele-com. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;