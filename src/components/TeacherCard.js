import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const TeacherCard = ({ full_name, school_name }) => {
    return (
        <Col>
            <Card 
                style={{ width: '18rem' }}
                bg='dark'
            >
                <Card.Body>
                    <Card.Title>{full_name}</Card.Title>
                    <Card.Text>
                        Teacher at {school_name}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TeacherCard
