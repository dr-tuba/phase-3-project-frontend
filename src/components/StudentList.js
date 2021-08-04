import StudentCard from './StudentCard'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StudentList = ({ lockers, students }) => {
    return (
        <main>
            <h1>Students Page</h1>
            <br/>
            <h2>Add New Student</h2>
            <br/>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={2}>
                    First Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                    <Form.Label column sm={2}>
                    Last Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Last Name" />
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
                    <Form.Control type="email" placeholder="Current School" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Grade
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="9th"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="10th"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="11th"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                        <Form.Check
                        type="radio"
                        label="12th"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
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
            <br/>
            <h2>Current Students</h2>
            <br/>
            <Container fluid>
                <Row xs={2} md={3} lg={4}>
                    {students.map(student => { return (
                    <StudentCard 
                        key = {student.id}
                        id = {student.id}
                        first_name = {student.first_name}
                        last_name = {student.last_name}
                        grade_level = {student.grade_level}
                        email = {student.email}
                        picture_url = {student.picture_url}
                        school_name = {student.school.school_name}
                        lockers = {lockers}
                    />
                    )})}
                </Row>
            </Container>
        </main>
    )
}

export default StudentList
