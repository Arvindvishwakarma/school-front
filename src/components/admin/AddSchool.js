import React, { useState, useRef } from 'react'
import { Container, Card, Button, Form, Col } from 'react-bootstrap'
import Menubar from '../MenuBar'
import Zoom from 'react-reveal/Zoom'; 

export default function AddSchool() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            alert('ok')
        }

        setValidated(true);
    };

    return (
        <div>
            <Menubar />
            <Container>
                <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Add School</h1>
                <Zoom><Card style={{ marginTop: '30px' }}>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="School Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School Name</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School Code</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="School Code"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School Code</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="School Email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School Email</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School Contact</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="School Contact"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School Contact</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Head Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Head Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter Head Name</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Head Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Head Email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter Head Email</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Head Contact</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Head Contact"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter Head Contact</Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>School Address</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        placeholder="School Address"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School Address</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School's Longitude</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="School's Longitude"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School's Longitude</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>School's Latitude</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="School's Latitude"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Enter School's Latitude</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>




                            <Button type="submit" variant="success" style={{ borderRadius: '0px' }} className="mx-auto d-block">Add School</Button>
                        </Form>
                    </Card.Body>
                </Card></Zoom>
            </Container>
        </div>
    )
}
