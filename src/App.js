import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './Header';
import Apphero from './components/hero';
import Appabout from './components/about';
import Appservice from './components/service';
import Appteams from './components/teams';
import Apptestimonials from './components/testimonials';
import Appfooter from './components/footer';
import Appcontact from './components/contacts';


function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main id='hero'>
        <Apphero />
        <Appabout />
        <Appservice />
        <Appteams />
        <Apptestimonials />
        <Appcontact />
      </main>
      <footer id='footer'>
        <Appfooter />
      </footer>
    </div>
  );
}

export default App;
