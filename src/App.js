import './App.css';
import Header from './Header/Header'; 
import Footer from './Components/Footer';
import SelectedPage from './Dashboard/SelectedPage';
import Navbar from './Navbar/Navbar';

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
