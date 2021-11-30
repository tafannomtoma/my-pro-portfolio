import React from 'react';
import Fade from 'react-reveal/Fade';
import { Card, Col, Row } from 'react-bootstrap';

const Project = () => {
    return (
        <div>
            <div class="d-flex justify-content-center mt-5">
                <Row className="justify-content-center">
                    <Col >
                        <Fade left>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img style={{ height: '450px' }} variant="top" src="https://i.ibb.co/9r94jMY/screenshot-healthcare-website-assig-c76ee-web-app-2021-11-30-00-42-44.png" />

                            </Card>
                        </Fade>
                    </Col>

                    <Col className="mt-5">
                        <Fade right>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>BABY CARE WEBSITE</Card.Title>
                                    <Card.Text>
                                        Here you can see live preview.
                                    </Card.Text>

                                    <Card.Link href="https://github.com/tafannomtoma/medicare-health-service">GitHub</Card.Link>
                                    <Card.Link href="https://healthcare-website-assig-c76ee.web.app/?fbclid=IwAR03vIBkU6nGFNoYRnCUkrx2P5HWOeTN6kC7h2bbhYcPHSATeAgabteEgqk">Project</Card.Link>
                                </Card.Body>
                            </Card>
                        </Fade>

                    </Col>
                </Row>
            </div>

            <div class="d-flex justify-content-center mt-5">
                <Row className="justify-content-center">

                    <Col className="mt-5">
                        <Fade left>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>BABY CARE WEBSITE</Card.Title>
                                    <Card.Text>
                                        Here you can see live preview.
                                    </Card.Text>

                                    <Card.Link href="https://github.com/tafannomtoma/travel-agency-client">GitHub</Card.Link>
                                    <Card.Link href="https://travel-agency-11.web.app/">Project</Card.Link>
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                    <Col >
                        <Fade right>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '450px', marginTop: '-200px' }} variant="top" src="https://i.ibb.co/bQyD2k7/screenshot-travel-agency-11-web-app-2021-11-30-00-37-13.png" />

                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </div>


            <div class="d-flex justify-content-center mt-5">
                <Row className="justify-content-center">
                    <Col >
                        <Fade left>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '450px' }} variant="top" src="https://i.ibb.co/hRzhnD2/screenshot-baby-care-5b60b-web-app-2021-11-30-00-14-14.png" />

                            </Card>
                        </Fade>
                    </Col>

                    <Col className="mt-5">
                        <Fade right>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>BABY CARE WEBSITE</Card.Title>
                                    <Card.Text>
                                        Here you can see live preview.
                                    </Card.Text>

                                    <Card.Link href="https://github.com/tafannomtoma/baby-care-niche-website">GitHub</Card.Link>
                                    <Card.Link href="https://baby-care-5b60b.web.app/">Project</Card.Link>
                                </Card.Body>
                            </Card>
                        </Fade>

                    </Col>
                </Row>
            </div>



        </div>
    );
};

export default Project;