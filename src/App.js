import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Video_part from './Components/Video_part/Video_part';
import Tokennomics from './Components/Tokennomics/Tokennomics';
import Footer from './Components/Footer/Footer';
import P2p from './Components/P2p/P2p';
import Transcation from './Components/Transcation/Transcation';
import Secure_page from './Components/Secure_page/Secure_page';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Home_page from './Components/Home_page/Home_page';
import Contact_page from './Components/Contact_page/Contact_page';
import AboutPage from './Components/About/About';
import StoryPage from './Components/OurStory/Story';
import { Route, Routes } from 'react-router-dom';
import TABS_stake from './Components/TABS_stake/TABS_stake';
import Smart_token_staking from './Components/Smart_token_staking/Smart_token_staking';

function App() {
  const [raise, setRaise] = useState(0)
  return (
    <div className="App">
      <Toaster />
      <Header />
      {/* <TABS_stake/> */}
      <Routes>
        <Route path='/' element={<Smart_token_staking />} />

        {/* <Route path='/' element={<Home_page />} />
          <Route path='/contact_us' element={<Contact_page />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/OurStory' element={<StoryPage />} /> */}
        {/* <Route path='/staking' element={<Smart_token_staking />} /> */}
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
