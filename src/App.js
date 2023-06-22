import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashbord from './components/Page/Dashbord';
import Evenements from './components/Page/Evenements';
import Experiences from './components/Page/Experiences';
import TypesEvenement from './components/Page/TypesEvenement';
import Organisateurs from './components/Page/Organisateurs';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={ <Dashbord /> } />
            <Route path="/evenements" element={ <Evenements /> } />
            <Route path="/experiences" element={ <Experiences/>  } />
            <Route path="/type" element={ <TypesEvenement/>  } />
            <Route path="/organisateurs" element={ <Organisateurs/>  } />
          </Routes>
        </Router>
    </div>
       
  );
}

export default App;
