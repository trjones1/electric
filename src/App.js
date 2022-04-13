import logo from './assets/images/logo.png';
import twoColHeroImg from './assets/images/Main-Image.png';
import threeColProd1 from './assets/images/SEV1600HW-option.png'
import threeColProd2 from './assets/images/SEV160014150-option.png'
import threeColProd3 from './assets/images/SEV1600650-option.png'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="tagline">
          Powerful Electric Vehicle Charging
        </h2>
      </header>
      <body className='appBody'>
        <Container>
          <Row className='twoColHero'>
            <Col>
              <img src={twoColHeroImg} className="twoColHeroImg" alt='main'/>
            </Col>
            <Col>
              Some Text
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='sectionTitle'>Three options available to fit your needs:</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={threeColProd1} className="threeColProd" alt='SEV1600HW'/>
              <strong>SEV1600HW</strong>
              <p>Hard wired into your wall</p>
            </Col>
            <Col>
              <img src={threeColProd2} className="threeColProd" alt='SEV160014150'/>
              <strong>SEV160014150</strong>
              <p>Uses NEMA 14-50 Plug</p>
            </Col>
            <Col>
              <img src={threeColProd3} className="threeColProd" alt='SEV1600650'/>
              <strong>SEV1600HW</strong>
              <p>Uses NEMA 6-50 Plug</p>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
