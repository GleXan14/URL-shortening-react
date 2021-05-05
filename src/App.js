
import './App.css';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

import NavBar from './components/header/NavBar';
import Banner from './components/header/Banner';
import LinkShorter from './components/main/LinkShorter';
import Statistics from './components/main/Statistics';
import Boost from './components/main/Boost';
import Footer from './components/footer/Footer';

//All styles are in "App.css"
function App() {

  const store = generateStore();

  return (

    <Provider store={store}>
      <div className="container">
        <header>
          <NavBar/>
          <Banner/>
        </header>

        <main>
          <LinkShorter />
          <Statistics />
          <Boost />
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
