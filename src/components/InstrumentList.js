import Instrument from "./Instrument"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const InstrumentList = ({ instruments, students }) => {
    return (
        <main>
            <h1>Instruments</h1> 
            <Container>
                <Row className='g-4'>
                    {instruments.map(instrument => { return (
                        <Instrument 
                            key = {instrument.id}
                            id = {instrument.id}
                            instrument_name = {instrument.instrument_name}
                            brand = {instrument.brand}
                            serial_number = {instrument.serial_number}
                            condition = {instrument.condition}
                            school_name = {instrument.school.school_name}
                            students = {students}
                            student_id = {instrument.student_id}
                            model = {instrument.model}
                        />
                    )})}  
                </Row>
            </Container>
        </main>
    )
}

export default InstrumentList
