import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

const StudentCard = ({first_name, last_name, email, picture_url, grade_level, school_name, id, lockers}) => {
    const [hasLocker, setHasLocker] = useState(false)

    useEffect(() => {
        if (student_locker.length > 0) {
            setHasLocker(true)
            return "Re-assign Locker"
        } else {
            setHasLocker(false)
            return "Assign Locker"    
        }
    }, [lockers])

    const student_locker = lockers.filter(locker => locker.student_id === id)

    function assignLocker(e) {
        id = parseInt(e.target.id)
        console.log(id)
        fetch(`http://localhost:9292/lockers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                student_id: id
            })
        })
    }
  
    return (
        <Col id='student-col' className='md-4' xs={6} lg={4}>
            <Card bg='dark'>
                <Card.Header className='text-center'>{first_name} {last_name} - {grade_level}th Grade</Card.Header>
                <Card.Img variant="top" src={picture_url} />
                <Card.Body>
                    <Card.Title>Student at {school_name}</Card.Title>
                    <Card.Text>
                        email: {email} <br/>
                        Instruments checked out: <br/>
                        Locker Assignment: <br/>
                        Number: <span>{hasLocker ? Object.values(student_locker)[0].locker_number : null}<br/></span>
                        Combination: <span>{hasLocker ? Object.values(student_locker)[0].locker_combination : null}<br/></span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-grid gap-2'>
                    {hasLocker ? null 
                    :   <DropdownButton size='sm' title="Assign Locker" id='dropdown-basic-button'> 
                            {lockers.filter(locker => locker.student_id === null).map(locker => { return (
                                <Dropdown.Item as='button' key={locker.id} id={locker.id} onClick={assignLocker}>{locker.locker_number}</Dropdown.Item>
                            )})}   
                        </DropdownButton>
                    }
                    <Button size='sm' variant='light'>Checkout Instrument</Button>
                    <Button size='sm' variant='danger'>Remove Student</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default StudentCard
