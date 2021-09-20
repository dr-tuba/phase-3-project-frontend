import { useState } from 'react';
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = ({ teachers }) => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
    }
    
    return (
        <main>
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
        </main>
    )
}

export default Login
