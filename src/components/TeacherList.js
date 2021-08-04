import TeacherCard from './TeacherCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';

const TeacherList = ({ teachers }) => {
    return (
        <main>
            <h1>Teacher Selection</h1>
            <Container fluid>
                <Row>
                    <Col sm id='teacher-col' className='md-4'>
                        {teachers.map(teacher => { return (
                        <TeacherCard 
                            key = {teacher.id}
                            full_name = {teacher.full_name}
                            school_name = {teacher.school.school_name}
                        />
                        )})}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default TeacherList
