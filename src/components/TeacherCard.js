import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const TeacherCard = ({ full_name, school_name }) => {
    const [showForm, setShowForm] = useState(false)
    const [validated, setValidated] = useState(false)
    const [token, setToken] = useState();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    }

    const loginForm = () => {
        return (
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='login-form'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="email"
                        placeholder="email"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please type a valid email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                        type="password"
                        placeholder="password"
                        required
                        />
                    </InputGroup>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
    
    return (
        <Card bg='dark'>
            <Card.Body>
                <Card.Title>{full_name}</Card.Title>
                <Card.Text>
                    Teacher at {school_name}
                </Card.Text>
                <Button variant="primary" size='sm' onClick={() => setShowForm(!showForm)}>{showForm ? "Collapse" : "Login"}</Button>
            </Card.Body>
            {showForm ? loginForm() : null}
        </Card>
    )
}

export default TeacherCard
