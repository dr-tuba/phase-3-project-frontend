import TeacherCard from './TeacherCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const TeacherList = ({ teachers }) => {
    return (
        <main>
            <h1>Teacher Selection</h1>
            <Container fluid>
                <Row>
                    {teachers.map(teacher => { return (
                    <TeacherCard 
                        key = {teacher.id}
                        full_name = {teacher.full_name}
                        school_name = {teacher.what_school}
                    />
                    )})}
                </Row>
            </Container>
        </main>
    )
}

export default TeacherList
