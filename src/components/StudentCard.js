import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const StudentCard = ({first_name, last_name, email, picture_url, grade_level, school_name}) => {
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
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StudentCard
