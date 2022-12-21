

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import Contact from './components/Contact'


function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
