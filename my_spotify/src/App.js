import './App.css';
import { Container, Row } from 'react-bootstrap'
import SideBarComponent from './components/SideBarComponent';
import NavBarComponent from './components/NavBarComponent';
import PlayBarComponent from './components/PlayBarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import albumPage from './pages/albumPage';
import artistPage from './pages/artistPage';
import homePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <SideBarComponent />
            <NavBarComponent />

            <Container>
              <Routes>
                <Route element={homePage} path="/"></Route>
                <Route element={artistPage} path="/artist"></Route>
                <Route element={albumPage} path="/album"></Route>
              </Routes>
            </Container>
            {/* inserire Routing qui */}
            
          </Row>
        </Container>

        <PlayBarComponent />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
