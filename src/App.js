import logo from './assets/images/logo.png';
import twoColHeroImg from './assets/images/Main-Image.png';
import heroSlide1 from './assets/images/hero-slide1.png'
import heroSlide2 from './assets/images/hero-slide2.png'
import heroSlide3 from './assets/images/hero-slide3.png'
import threeColProd1 from './assets/images/SEV1600HW-option.png'
import threeColProd2 from './assets/images/SEV160014150-option.png'
import threeColProd3 from './assets/images/SEV1600650-option.png'
import featuresImg from './assets/images/features.png'
import accessory1 from './assets/images/accessory1.png'
import accessory2 from './assets/images/accessory2.png'
import accessory3 from './assets/images/accessory3.png'
import charger1 from './assets/images/charger1.png'
import charger2 from './assets/images/charger2.png'
import charger3 from './assets/images/charger3.png'
import schuLogo from './assets/images/schupowerLogo.png'
import schuApp from './assets/images/schupowerApp.png'
// import animation1 from './assets/images/Animation-1.jpg'
import troubleShooting from './assets/images/troubleshooting-chart-D.png'
import './App.css';
import { Col, Container, Row, Carousel} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from 'react-player';
import MobileStoreButton from 'react-mobile-store-button';
// URLs
const schuHome = 'https://www.schumacherelectric.com/'
const schuManual = 'https://www.schumacherelectric.com/'
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
const androidUrl = 'https://play.google.com';
const mailTo = 'mailto:test@test.com';
const contactUs = 'mailto:test@test.com';
const sizzleRight = 'https://vimeo.com/701479189';
const quickStartVid = 'https://vimeo.com/701479189';
const mountingVid = 'https://vimeo.com/701479527';
const operatingVid = 'https://vimeo.com/701479831';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <Container className='headerContainer'>
        <Row>
          <Col>
          <header className="App-header">
            <a href={schuHome}>
              <img src={logo} className="App-logo schumacher-logo" alt="logo" />
            </a>

            {/* <Carousel className="slider" showThumbs={false} 
                autoPlay={true} infiniteLoop={true} showStatus={false}
                >
                <div className="sliderItem">
                    <img src={heroSlide1} alt='slider1'/>
                </div>
                <div className="sliderItem">
                    <img src={heroSlide2} alt='slider2'/>
                </div>
                <div className="sliderItem">
                    <img src={heroSlide3} alt='slider3'/>
                </div>
            </Carousel> */}
          </header>
          </Col>
        </Row>
      </Container>
      <Carousel className="slider">
        <Carousel.Item>
          <img className='d-block w-100' src={heroSlide1} alt='slider1'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={heroSlide2} alt='slider2'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={heroSlide3} alt='slider3'/>
        </Carousel.Item>
      </Carousel>
      <div className='appBody'>
        <Container>
          <Row>
            <Col>
              <h2 className="tagline powerful-electric-ve">
                Powerful Electric Vehicle Charging
              </h2>
            </Col>
          </Row>
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
              <Button color='error' href={schuHome} className="btn btnRed" variant="contained">Shop SEV1600HW</Button>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={threeColProd2} className="threeColProd" alt='SEV1600P1450'/>
              <strong>SEV1600P1450</strong>
              <p>Uses NEMA 14-50 Plug</p>
              <Button color='error' href={schuHome} className="btn btnRed" variant="contained">Shop SEV1600P1450</Button>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={threeColProd3} className="threeColProd" alt='SEV1600P650'/>
              <strong>SEV1600P650</strong>
              <p>Uses NEMA 6-50 Plug</p>
              <Button color='error' href={schuHome} className="btn btnRed" variant="contained">Shop SEV1600P650</Button>
            </Col>
          </Row>
          <Row className='twoColHero twoColSizzle'>
            <Col xs={12} md={6} className='sizzleLeft'>
              <h3 className='sectionTitle'>Why Choose Schumacher?</h3>
              <div>
                <p>
                  Since its founding in 1947, Schumacher Electric has been a leader in the power conversion industry. Today, Schumacher is one of the largest and most groundbreaking battery charger manufacturers in the world. As society transitions from gasoline-powered to all-electric vehicles, Schumacher is developing new products and cutting-edge technology especially for this growing market.
                </p>
                <p>
                  Schumacher is leveraging its 75 years of experience designing and manufacturing automotive battery chargers to create the next generation of automotive charging technology. The new range of EV chargers and accessories embodies Schumacher's belief in delivering value to its customers through reliable and innovative products.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className='sizzleRight'>
                <ReactPlayer
                  className='react-player'
                  url={sizzleRight}
                  width='100%'
                  height='100%'
                  controls='true'
                />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='features'>
        <Container>
          <Row>
            <Col>
            <h2>FEATURES</h2>
            <p>
              Schumacher offers three models of its Level 2 EV Wall Charger. Check the specifications to determine which model fits your needs.
            </p>
            <img src={featuresImg} className='featuresImg d-block w-100' alt='Features'/>
            </Col>
          </Row>
          <Row>
            <div className='downloadHeader'>
              <h4>Download the manual</h4>
            </div>
            <Col xs={12} md={4}>
              <ul className='manualLink'>
                <li>
                  <a href={schuManual}>English Manual</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul className='manualLink'>
                <li>
                  <a href={schuManual}>French Manual</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul className='manualLink'>
                <li>
                  <a href={schuManual}>Spanish Manual</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='accessories'>
        <Container>
          <Row>
            <Col>
            <h3>
              EV Family &amp; Accessories
            </h3>
            <h4>
              Schumacher's range of EV chargers and accessories feature cutting-edge technology and the same quality Schumacher has been known for since 1947.
            </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={accessory1} className="threeColProd" alt='SEV1600 EV2 Charger'/>
              <p>
                <strong>SEV1600 EV2 Charger</strong>
                <br/>
                (Multiple Options Available)
              </p>
              <Button color='primary' href={schuHome} className="btn btnBlk" variant="contained">Shop Now</Button>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={accessory2} className="threeColProd" alt='SC1455 Portable Charger'/>
              <p>
                <strong>SC1455 Portable Charger</strong>
                <br/>
                Level 1 &amp; Level 2 Charging
              </p>
              <Button color='primary' href={schuHome} className="btn btnBlk" variant="contained">Shop Now</Button>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={accessory3} className="threeColProd" alt='SA914 Tesla Adapter'/>
              <p>
                <strong>SA914 Tesla Adapter</strong>
                <br/>
                For 16A EV Charger
              </p>
              <Button color='primary' href={schuHome} className="btn btnBlk" variant="contained">Shop Now</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='threeChargers'>
        <Container>
          <Row>
            <Col>
            <h2>
              Three Classifications of EV Chargers
            </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={charger1} className="threeColProd" alt='SEV1600 EV2 Charger'/>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={charger2} className="threeColProd" alt='SEV1600 EV2 Charger'/>
            </Col>
            <Col xs={12} md={4} className='prodDesc'>
              <img src={charger3} className="threeColProd" alt='SEV1600 EV2 Charger'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <p className='estimated'>
              *Estimated
            </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='horizontalLine'>
        <Container>
          <Row>
            <Col>
              <hr/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='mobileApps'>
        <Container>
          <Row>
            <Col>
              <h2>Portable Monitoring of your EV Charger</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <img src={schuLogo} alt='SchuPower' class="schuLogo d-block w-100"/>
              <p>
                <strong><span className='mobileAppDownload'>Download the SchuPower™ App</span></strong>
              </p>
              <p>
                With integrated Wi-Fi and Bluetooth technology, you can easily connect your Schumacher Level 2 EV Wall Charger to the SchuPower™ app. With the app, you can monitor your EV charging status, track your vehicle's charging history, or troubleshoot any issues.
              </p>
              <Row>
                <Col>
                  <MobileStoreButton className='mobileBtn iosBtn'
                    store="ios"
                    width='255px'
                    height='50px'
                    url={iOSUrl}
                    linkProps={{ title: 'iOS Store Button' }}
                  />
                </Col>
                <Col>
                  <MobileStoreButton className='mobileBtn androidBtn'
                    store="android"
                    width='255px'
                    height='75px'
                    url={androidUrl}
                    linkProps={{ title: 'Android Store Button' }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <img src={schuApp} alt='SchuPower' class="d-block w-100"/>
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
                      url={quickStartVid}
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
                      url={mountingVid}
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
                      url={operatingVid}
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
              <Accordion className='accordionPanel troubleShootingPanel'>
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
      <div className='custSupport'>
        <Container>
          <Row>
            <Col>
            <h3>Customer Support</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                For troubleshooting assistance, product feedback, or questions relating to product repairs or returns, please contact Schumacher customer support at <strong>1-800-621-5485</strong> or <a href={mailTo}>send us a message.</a>
              </p>
              <strong>
                <p>
                  Monday - Friday: 5:00 am - 9:00 pm (std)
                </p>
                <p>
                  Saturday: 10:00 am - 3:00 pm (std)
                </p>
                <p>
                  Sunday: 11:00 am - 2:010 pm (std)
                </p>
              </strong>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='contactUs'>
        <Container>
          <Row>
            <Col>
              <h3>
                Need business solutions or have a partnership opportunity?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color='error' href={contactUs} className="btn btnWht" variant="contained">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer'>
        <Container>
          <Row>
            <Col className='disclaimer'>
              <a href={schuHome}>
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
