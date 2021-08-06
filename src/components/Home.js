import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bandRoom from '../assets/bandRoom.jpeg'
import { FaHome, FaGithub, FaInbox, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <main>
            <section>
                <h1 className='jumbotron'><span className='rock-salt-font'>Welcome to BandDB</span><br/>
                <span className='rock-salt-font-small'>Simplified Inventory Management & Digital Assistant for Band Directors</span>
                </h1>
            </section>
            <img id='home-img' src={bandRoom} alt='band-room'></img>
            <Container fluid className='home-why'>
                <h1>Why use BandDB over Charms?</h1>
                <h5>Do you like Charms...? No...you don't.</h5>
                <h5>That's why you should use BandDB!</h5>
                <h5>BandDB is an open-source app developed by a former band director!</h5>
                <h5>The features of BandDB focus on streamlining the tedious adminstrative tasks so you can spend more time actually teaching!</h5>
            </Container>
            <Container fluid>
                <h1>Features</h1>
                <Row>
                    <Col>
                        <article className='home-cols'>
                            <h2>Instrument Inventory</h2>
                            <p>Manage your instrument inventory with an easy to use interface!</p>
                            <p>Record instruments that are checked out to students and their condition electronically!</p>
                            <p>Includes inventory for accessories such as reeds, mouthpieces, valve oil, etc...</p>
                            <p>Connect a payment app to sell accessories to students. No more cash floating in your office!</p>
                        </article>
                        <article className='home-cols'>
                            <h2>Music Library</h2>
                            <p>Keep track of which pieces you recently performed without having to browse through old programs!</p>
                            <p>Easily input newly purchased pieces by scanning the barcode!</p>
                            <p>Customize the table to match your existing organizational system!</p>
                        </article>
                        <article className='home-cols'>
                            <h2>Student Database</h2>
                            <p>Manage student information and send mass emails to parents!</p>
                            <p>Assign lockers to students and quickly retreive the combination when they forget it!</p>
                            <p>See all the instruments that a student has checked out!</p>
                            <p>Integration with Schoology/Infinite Campus!</p>
                        </article>
                    </Col>
                </Row>
            </Container>
            <Container className='bg-dark text-center text-lg-start home-footer'>
                <Container className="p-4">
                    <Row>
                        <Col className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About the Developer</h5>
                            <p>
                            Steve Vaughn is a software engineer and professional musician living in Denver, Colorado. He recevied a DMA in Tuba Performance & Pedagogy from the University of Colorado-Boulder and is a graduate of the Flatiron School's Full-Stack Software Engineering Program. He can be heard playing Principal Tuba with the Fort Collins Symphony, Solo Euphonium with Colorado Brass, and is an Adjunct Professor of Euphonium at the University of Northern Colorado.
                            </p>
                        </Col>
                        <Col className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Contact</h5>
                            <p><FaHome /> Denver, CO 80249, US</p>
                            <p><FaInbox /> steve@example.com</p>
                            <p><FaLinkedin /> <a href="https://www.linkedin.com/in/stevehvaughn/"> LinkedIn Profile</a></p>
                            <p><FaGithub /> <a href="https://github.com/dr-tuba"> GitHub Page</a></p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </main>
    )
}

export default Home
