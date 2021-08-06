import { useState } from 'react';
import StudentCard from './StudentCard'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StudentList = ({ lockers, students, setLockers, handleDelete, handleChange, handleSubmit, assignLocker, handleUnassignLocker, instruments, assignInstrument, showAddStudents, setShowAddStudents }) => {    
    
    
    return (
        <main>
            <h1>Students Page</h1>
            <br/>
            <Button id='add-student-button' variant="dark" onClick={() => setShowAddStudents(!showAddStudents)}>{showAddStudents ? "Collapse Form" : "Add New Student"}</Button>
            <br/>
            {showAddStudents ? 
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={2}>
                    First Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={2}>
                    Last Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={2}>
                    School
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Current School" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3" controlId='formHorizontalText'>
                        <Form.Label as="legend" column sm={2}>
                            Grade
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="9"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={handleChange}
                            />
                            <Form.Check
                            type="radio"
                            label="10"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={handleChange}
                            />
                            <Form.Check
                            type="radio"
                            label="11"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            onChange={handleChange}
                            />
                            <Form.Check
                            type="radio"
                            label="12"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
            : null }
            <br/>
            <h2>Current Students</h2>
            <br/>
            <Container>
                <Row className='g-4'>
                        {students.map(student => { return (
                        <StudentCard 
                            key = {student.id}
                            student_id = {student.id}
                            first_name = {student.first_name}
                            last_name = {student.last_name}
                            grade_level = {student.grade_level}
                            email = {student.email}
                            picture_url = {student.picture_url}
                            school_name = {student.school.school_name}
                            student_locker = {student.locker}
                            lockers = {lockers}
                            setLockers = {setLockers}
                            handleDelete = {handleDelete}
                            assignLocker = {assignLocker}
                            handleUnassignLocker = {handleUnassignLocker}
                            instruments = {instruments}
                            assignInstrument = {assignInstrument}
                        />
                        )})}
                </Row>
            </Container>
        </main>
    )
}

export default StudentList
