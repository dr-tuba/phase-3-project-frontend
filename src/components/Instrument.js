import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton';

const Instrument = ({ condition, brand, model, serial_number, instrument_name, school_name, students, student_id }) => {
    const [hasStudent, setHasStudent] = useState(false)

    const studentsThatHaveThisInstrument = students.filter(student => student.id === student_id)
    
    return (
        <Col className='student-col'>
                <Card bg='dark'>
                    <Card.Header className='text-center'><h4>{instrument_name}</h4></Card.Header>
                    <Card.Img variant="top" src={null} />
                    <Card.Body>
                        <Card.Title><h5>Instrument belongs to<br/>{school_name}</h5></Card.Title>
                        <Card.Text>
                            <p>Brand: {brand}</p>
                            <p>Model: {model}</p>
                            <p>Condition: {condition}</p>
                            <p>Serial Number: {serial_number}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-grid gap-2'>
                        <div className='d-grid gap-2'>
                            <Button size='sm' variant='light'>Update Condition</Button>
                            <Button size='sm' variant='danger'>Remove Instrument</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
    )
}

export default Instrument
