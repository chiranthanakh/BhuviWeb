import './App.css';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import SelectedPage from './Components/SelectedPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <main className='main'>
        <section id="section1">
          <p>Make asset by Real Estate investor.</p>
        </section>
      </main>
      
      <SelectedPage />
      <Footer />
    </div>
  );
}

export default App;
