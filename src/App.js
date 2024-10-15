import './App.css';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar'; 
import CardLayout from './Components/CardLayout';
import Laucher from './Components/Laucher'; 
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main className='main'>
        <section id="section1">
          <p>Make asset by Real Estate investor.</p>
        </section>
      </main>
      
      <SearchBar />
      <CardLayout />
      <Laucher />
      <Footer />
    </>
  );
}

export default App;
