import logo from './assets/images/logo.png';
import twoColHeroImg from './assets/images/Main-Image.png';
import threeColProd1 from './assets/images/SEV1600HW-option.png'
import threeColProd2 from './assets/images/SEV160014150-option.png'
import threeColProd3 from './assets/images/SEV1600650-option.png'
import animation1 from './assets/images/Animation-1.jpg'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="tagline">
          Powerful Electric Vehicle Charging
        </h2>
      </header>
      <div className='appBody'>
        <Container>
          <Row className='twoColHero'>
            <Col>
              <img src={twoColHeroImg} className="twoColHeroImg" alt='main'/>
            </Col>
            <Col>
           
            For 75 years, Schumacher Electric has delivered innovative and reliable automotive products trusted by professionals and home mechanics alike. The new Schumacher range of Level 2 EV Wall Chargers follows in this tradition, offering consumers the convenience of Level 2 at-home charging from a brand they can trust.
            <ul className='bulletPoints'>
              <li>
                Hassle-free Level 2 charging
              </li>
              <li>
                50A max output
              </li>
              <li>
                Wi-Fi® and Bluetooth® enabled to work with the
                  SchuPower™ App
              </li>
              <li>
                Weatherproof housing
              </li>
              <li>
                Universal SAE-J1772 charging gun
              </li>
              <li>
                25-foot cable reaches both bays of a two-car garage
              </li>
              <li>
                Built-in cable storage
              </li>
              <li>
                Three-year warranty
              </li>
            </ul>
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
      </div>
      <div className='expansionPanels'>
        <Container>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Quick Start Guide</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <img src={animation1} className="animation" alt="steps animation"/>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Mounting the Charging Station</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Operating the Charging Station</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>LED Behaviors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Trouble Shooting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
