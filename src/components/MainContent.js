import React from 'react'
import SchoolImage from '../images/school.png'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';

export default function MainContent() {
    return (
        <div>
            <Container>
                <Row>
                <Zoom><Col>
                        <Image src={SchoolImage} fluid style={{ width: '70%' }} className="mx-auto d-block" />
                    </Col></Zoom>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={3}><Fade left><Button className="mx-auto d-block" style={{width:'100%', borderRadius:'0px'}}>Allot Schools To Student</Button></Fade></Col>
                    <Col md={3}><Fade right><Button className="mx-auto d-block" style={{width:'100%', borderRadius:'0px'}}>Map School</Button></Fade></Col>
                    <Col md={3}></Col>
                </Row>

            </Container>

        </div>
    )
}
