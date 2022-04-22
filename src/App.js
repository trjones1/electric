import logo from './assets/images/logo.png';
import twoColHeroImg from './assets/images/Main-Image.png';
import threeColProd1 from './assets/images/SEV1600HW-option.png'
import threeColProd2 from './assets/images/SEV160014150-option.png'
import threeColProd3 from './assets/images/SEV1600650-option.png'
// import animation1 from './assets/images/Animation-1.jpg'
import troubleShooting from './assets/images/troubleshooting-chart-D.png'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="App">
      <Container className='headerContainer'>
        <Row>
          <Col>
          <header className="App-header">
            <a href='https://www.schumacherelectric.com/'>
              <img src={logo} className="App-logo schumacher-logo" alt="logo" />
            </a>
            <h2 className="tagline powerful-electric-ve">
              Powerful Electric Vehicle Charging
            </h2>
          </header>
          </Col>
        </Row>
      </Container>
      
      <div className='appBody'>
        <Container>
          <Row className='twoColHero'>
            <Col xs={12} md={6}>
              <img src={twoColHeroImg} className="twoColHeroImg" alt='main'/>
            </Col>
            <Col>
            <div className='new-level-2-ev-wall'>
              <p>
                New Level 2 EV Wall Chargers
              </p>
            </div>
            <div>
              <p>
                For 75 years, Schumacher Electric has delivered innovative and reliable automotive products trusted by professionals and home mechanics alike. The new Schumacher range of Level 2 EV Wall Chargers follows in this tradition, offering consumers the convenience of Level 2 at-home charging from a brand they can trust.
              </p>
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
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='sectionTitle'>Three options available to fit your needs:</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={threeColProd1} className="threeColProd" alt='SEV1600HW'/>
              <strong>SEV1600HW</strong>
              <p>Hard wired into your wall</p>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={threeColProd2} className="threeColProd" alt='SEV160014150'/>
              <strong>SEV160014150</strong>
              <p>Uses NEMA 14-50 Plug</p>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={threeColProd3} className="threeColProd" alt='SEV1600650'/>
              <strong>SEV1600HW</strong>
              <p>Uses NEMA 6-50 Plug</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='expansionPanels'>
        <Container className='expansionPanelContainer'>
          <Row>
            <Col>
              <Accordion className='accordionPanel'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className='panelTitle'>Quick Start Guide</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <img src={animation1} className="animation" alt="steps animation"/> */}
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url='https://vimeo.com/701479189'
                      width='100%'
                      height='100%'
                      controls='true'
                    />
                  </div>
                  <Typography>
                    <p>
                      <strong>
                        CAUTION: The Schumacher EV2 Wall Charger must be installed by a licensed electrician. Any changes to the wall charger's electrical settings must also be made by a licensed electrician.
                      </strong>
                    </p>
                    <p>
                      <strong>Step One</strong>
                      <p>
                        Decide where to mount the wall charger in accordance with the installation instructions, locate a wall stud, and tape the mounting template to the wall.
                      </p>
                    </p>
                    <p>
                      <strong>Step Two</strong>
                      <p>
                        Have a licensed electrician complete the following in accordance with your unit's installation instructions: install any needed circuits or outlets, assemble the charging station, and set your unit's internal current settings.
                      </p>
                    </p>
                    <p>
                      <strong>Step Three</strong>
                      <p>
                        Mount the charging station to the wall in accordance with the installation instructions and the mounting template.
                      </p>
                    </p>
                    <p>
                      <strong>Step Four</strong>
                      <p>
                        Turn the power back on at the circuit breaker or plug the unit into the outlet. The Power LED should illuminate a steady green if the wall charger is operating properly.
                      </p>
                    </p>
                    
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
                  <Typography className='panelTitle'>Mounting the Charging Station</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url='https://vimeo.com/701479527'
                      width='100%'
                      height='100%'
                      controls='true'
                    />
                  </div>
                  <Typography>
                    <p>
                      <strong>Step One</strong>
                      <p>
                        Find a stud and mark a horizontal line 50 inches above the floor or ground. Align the center top of the mounting template with the line and tape to the wall.
                      </p>
                    </p>
                    <p>
                      <strong>Step Two</strong>
                      <p>
                        Use a 7/32 inch or 5 mm drill bit to drill two pilot holes into the stud where indicated on the mounting template.
                      </p>
                    </p>
                    <p>
                      <strong>Step Three</strong>
                      <p>
                        Drive the 5.5 mm x 50 mm lag screw without the rubber washer into the top pilot hole, leaving the head of the screw 6-7 mm above the wall surface. Hang the charging station from this screw using the notch on the back of the charging station.
                      </p>
                    </p>
                    <p>
                      <strong>Step Four</strong>
                      <p>
                        Align the charging stations lower mounting hole and the remaining pilot hole. Drive the 5.5 mm x 50 mm lag screw with the rubber washer into the pilot hole and tighten until secure.
                      </p>
                    </p>
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
                  <Typography className='panelTitle'>Operating the Charging Station</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url='https://vimeo.com/701479831'
                      width='100%'
                      height='100%'
                      controls='true'
                    />
                  </div>
                  <Typography>
                    <p>
                      <strong>Step One</strong>
                      <p>
                        With Power LED showing a solid green color, remove the charging gun from the charging station's dock.
                      </p>
                    </p>
                    <p>
                      <strong>Step Two</strong>
                      <p>
                        Connect the charging gun to your vehicle's J1772 charging port. 
                        <p>
                          <small>*Tesla vehicles will require an adapter. Tesla, Inc. is an independently owned and operated company. This product is not manufactured, approved, or endorsed by Tesla, Inc.</small>
                        </p>
                      </p>
                    </p>
                    <p>
                      <strong>Step Three</strong>
                      <p>
                        Charging begins automatically and is controlled by your electric vehicle. When charging has stopped return the charging gun to the charging station's dock.
                      </p>
                    </p>
                    <p>
                      <strong>Step Four</strong>
                      <p>
                        Monitor your EV charging status or track your vehicle's charging history via the SchuPower™ app.
                      </p>
                    </p>
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
                  <Typography className='panelTitle'>LED Behaviors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      <strong>Power LED (green) solid:</strong> Power is connected to the wall charger.
                    </p>
                    <p>
                      <strong>Charging Gun LED (green) fade in/out:</strong> Charging is in progress.
                    </p>
                    <p>
                      <strong>Charging Gun LED (green) solid: </strong> The charging process is complete or in scheduled charging mode.
                    </p>
                    <p>
                      <strong>Charging Status LED (blue) solid:</strong> The wall charger is powered on and in standby mode.
                    </p>
                    <p>
                      <strong>Charging Status LED (green) fade in/out:</strong> Charging is in progress. 
                    </p>
                    <p>
                      <strong>Charging Status LED (cyan) flashing:</strong> The charging process is complete or in scheduled charging mode.
                    </p>
                    <p>
                      <strong>Charging Status LED (red) flashing:</strong> Error. Refer to the troubleshooting guide for guidance.
                    </p>
                    <p>
                      <strong>Wi-Fi LED (blue) solid:</strong> The wall charger is connected to the saved Wi-Fi network.
                    </p>
                    <p>
                      <strong>Wi-Fi LED (blue) flashing:</strong> The wall charger's Wi-Fi connection needs to be configured. 
This can be completed through the SchuPowerTM app.
                    </p>
                    <p>
                      <strong>Wi-Fi LED (blue) off:</strong> The wall charger cannot connect to the saved Wi-Fi network.
                    </p>
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
                  <Typography className='panelTitle'>Trouble Shooting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <img src={troubleShooting} className="troubleShooting" alt="Trouble Shooting"/>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer'>
        <Container>
          <Row>
            <Col className='disclaimer'>
              <a href='https://www.schumacherelectric.com/'>
                <img src={logo} className="App-logo schumacher-logo" alt="logo" />
              </a>
              <p>
                Disclaimer: Products, specifications and data are subject to change without notice, to improve reliability, function, design, or otherwise. Product images are for illustrative purposes only; actual product appearance may vary. All weights and measurements are approximate.
              </p>
              <p>
                All product names, trademarks and registered trademarks are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.
              </p>
              <p>
                © Copyright {new Date().getFullYear()} Schumacher Electric Corporation. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
        

      </div>
    </div>
  );
}

export default App;